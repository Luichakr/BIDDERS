/**
 * ШАГ 2 — МАППЕР
 *
 * Конвертирует сырые данные от Copart и IAAI
 * в единый формат AuctionCardData (наш формат сайта).
 *
 * Не трогает сайт. Используется fetch-lots.cjs.
 */

// ─── Утилиты ──────────────────────────────────────────────────────────────────

function toNum(val) {
  const n = Number(String(val ?? '').replace(/[^0-9.]/g, ''))
  return isFinite(n) ? n : 0
}

function milesToKm(miles) {
  return Math.round(toNum(miles) * 1.60934)
}

function fmtUsd(val) {
  const n = toNum(val)
  return n > 0 ? `$${Math.round(n).toLocaleString('en-US')}` : '—'
}

function fmtKm(km) {
  return km > 0 ? `${km.toLocaleString('ru-RU')} km` : '—'
}

// Считаем ms до конца аукциона из даты + времени + таймзоны
// Copart даёт: saleDate = "2026-05-06", saleTime = "0900", saleTimeZone = "EST"
function calcAuctionEndMs(dateStr, timeStr, tz) {
  if (!dateStr) return null
  try {
    // Собираем ISO строку: "2026-05-06T09:00:00"
    const time = String(timeStr ?? '0000').padStart(4, '0')
    const hh = time.slice(0, 2)
    const mm = time.slice(2, 4)
    const iso = `${dateStr}T${hh}:${mm}:00`

    // Смещения популярных таймзон аукционов (зима/лето не разделяем — погрешность ±1ч)
    const offsets = {
      EST: -5, EDT: -4,
      CST: -6, CDT: -5,
      MST: -7, MDT: -6,
      PST: -8, PDT: -7,
    }
    const offsetH = offsets[tz] ?? -5 // дефолт EST
    const utcMs = new Date(iso).getTime() - offsetH * 3600000
    return isNaN(utcMs) ? null : utcMs
  } catch {
    return null
  }
}

// Copart фото: base URL + suffix
// Пример: "https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0424/abc_thb.jpg"
// Меняем _thb (thumbnail) на _ful (full) для полного размера
function copartFullPhoto(url) {
  if (!url) return null
  return url.replace(/_thb\.jpg/, '_ful.jpg').replace(/_thb\.JPG/, '_ful.JPG')
}

// ─── COPART маппер ────────────────────────────────────────────────────────────
//
// Документация полей (из /solr/ эндпоинта):
//   ln    = lot number
//   vin   = VIN
//   lcy   = год выпуска (year)  ← да, lcy это год
//   mkn   = марка (make name)
//   lm    = модель (lot model)
//   clr   = цвет (color)
//   bstl  = тип кузова (body style)
//   egn   = двигатель (engine)
//   ft    = топливо (fuel type)
//   tmtp  = трансмиссия
//   drv   = привод (drive)
//   la    = пробег в милях (lot mileage)
//   dd    = основное повреждение (damage description)
//   sdd   = вторичное повреждение
//   hk    = есть ключи (has keys: YES/NO)
//   titlgrp = группа документов (title group: SALVAGE/CLEAN/etc)
//   bid   = текущая ставка (current bid)
//   bn    = Buy It Now
//   rcost = оценочная стоимость (retail/ACV)
//   imgs  = массив URL фото (может быть тоже thumbnail)
//   thmb  = главное фото (thumbnail)
//   ad    = дата аукциона (auction date) YYYY-MM-DD
//   at    = время аукциона HHMM
//   tz    = таймзона (EST/CST/etc)
//   yn    = название ярда (yard name) → локация
//   lcs   = штат (location state)
//   scn   = продавец (seller/consignor name)
//   lu    = URL лота на copart.com

function mapCopart(raw) {
  const lot = raw?.data?.lotDetails ?? raw?.lotDetails ?? raw

  const lotId    = String(lot.ln ?? lot.lotNumberStr ?? '')
  const year     = toNum(lot.lcy ?? lot.year)
  const make     = String(lot.mkn ?? lot.lmc ?? lot.make ?? '').trim()
  const model    = String(lot.lm  ?? lot.model ?? '').trim()
  const title    = `${year} ${make} ${model}`.trim()

  // la = odometer reading (miles), orr = original odometer
  const milesMi  = toNum(lot.orr ?? lot.la ?? lot.mileage ?? 0)
  const mileageKm = milesToKm(milesMi)

  // hb = highBid (current bid), bnp = buy now price
  const bid    = toNum(lot.hb ?? lot.bid ?? lot.currentBid ?? lot.currentHighBid ?? 0)
  const buyNow = toNum(lot.bnp ?? lot.bn ?? lot.buyItNowPrice ?? 0)
  // lotPlugAcv = estimated retail, rc = repair cost
  const acv    = toNum(lot.lotPlugAcv ?? lot.rcost ?? lot.estRetailValue ?? 0)

  // __imagesList — массив объектов из /lotdetails/solr/lot-images/ { fullUrl, thumbnailUrl }
  // imgs — иногда массив URL из поиска
  // tims — thumbnail из поиска
  const imagesList = lot.__imagesList ?? []
  const rawImgs    = lot.imgs ?? lot.images ?? []
  const thumbUrl   = lot.tims ?? lot.thmb ?? lot.imageThumbnail ?? lot.imageUrl ?? ''

  let allPhotos = []
  if (imagesList.length > 0) {
    // Берём fullUrl из lot-images эндпоинта
    allPhotos = imagesList
      .map(img => img.fullUrl ?? img.thumbnailUrl ?? '')
      .filter(Boolean)
  } else if (Array.isArray(rawImgs) && rawImgs.length > 0) {
    allPhotos = rawImgs.map(copartFullPhoto).filter(Boolean)
  } else if (thumbUrl) {
    allPhotos = [copartFullPhoto(thumbUrl)]
  }
  const mainPhoto = allPhotos[0] ?? ''

  // Таймер: ad = UNIX ms (from search) или date string (from detail)
  let auctionEndMs = null
  const adVal = lot.ad ?? lot.saleDate
  if (adVal) {
    if (typeof adVal === 'number' || /^\d{10,}$/.test(String(adVal))) {
      // UNIX ms timestamp из поиска
      auctionEndMs = toNum(adVal)
    } else {
      // строка даты из детального запроса
      auctionEndMs = calcAuctionEndMs(adVal, lot.at ?? lot.saleTime, lot.tz ?? lot.saleTimeZone ?? 'EST')
    }
  }

  // tgd = title group description ("CLEAN TITLE", "SALVAGE TITLE" etc)
  const titleStatus = String(lot.tgd ?? lot.titlgrp ?? lot.saleTitleType ?? lot.td ?? '').trim()

  const location = String(lot.yn ?? lot.syn ?? lot.yardName ?? '').trim()

  return {
    // Идентификация
    id:             lotId,
    source:         'copart',
    title,
    year,
    make,
    model,
    trim:           String(lot.trim ?? lot.tmtp ?? '').trim(),
    vin:            String(lot.vin ?? lot.fv ?? '').replace(/\*/g, '').trim(),

    // Технические характеристики
    engine:         String(lot.egn  ?? lot.engine ?? '').trim(),
    transmission:   String(lot.tmtp ?? lot.transmission ?? 'AUTOMATIC').trim(),
    drive:          String(lot.drv  ?? lot.drivetrain ?? 'AWD').trim(),
    fuel:           String(lot.ft   ?? lot.fuelType ?? 'GAS').trim(),
    color:          String(lot.clr  ?? lot.exteriorColor ?? '').trim(),
    bodyStyle:      String(lot.bstl ?? lot.bodyStyle ?? '').trim(),

    // Пробег
    mileageKm,
    mileageLabel:   fmtKm(mileageKm),

    // Состояние
    damage:         String(lot.dd  ?? lot.damageDescription ?? '').trim(),
    damageSec:      String(lot.sdd ?? lot.secondaryDamage ?? '').trim(),
    titleStatus,
    hasKeys:        String(lot.hk ?? lot.hasKeys ?? '').toUpperCase() === 'YES',
    condition:      String(lot.lcc ?? lot.lcd ?? lot.lotCondCode ?? '').trim(),

    // Цены
    currentBid:     bid,
    currentBidLabel: fmtUsd(bid),
    buyNow:         buyNow,
    buyNowLabel:    fmtUsd(buyNow),
    estimateLow:    Math.round(acv * 0.9),
    estimateHigh:   Math.round(acv * 1.1),
    estimateLabel:  fmtUsd(acv),

    // Аукцион / таймер
    auction:        'COPART',
    auctionEndMs,
    auctionDateLabel: auctionEndMs ? new Date(auctionEndMs).toLocaleDateString('pl-PL') : 'TBD',
    saleTime:       String(lot.at ?? lot.saleTime ?? ''),
    saleTimeZone:   String(lot.tz ?? lot.saleTimeZone ?? 'EST'),

    // Фото
    image:          mainPhoto,
    images:         allPhotos,

    // Локация и продавец
    location,
    seller:         String(lot.scn ?? lot.sellerName ?? lot.brand ?? 'Copart').trim(),
    sourceUrl:      lot.lu ? `https://www.copart.com/lot/${lot.lu}` : `https://www.copart.com/lot/${lotId}`,

    // Статус для нашего сайта
    status:         'catalog',
    fetchedAt:      new Date().toISOString(),
  }
}

// ─── IAAI маппер ──────────────────────────────────────────────────────────────
//
// IAAI возвращает HTML, который мы парсим regex'ами (как nofikoff)
// Поля из HTML страницы лота:
//   stockNumber, vin, year, make, model
//   engine, transmission, drivelineType, fuelType, exteriorColor
//   primaryDamage, secondaryDamage, odometer, hasKeys, titleType
//   currentBid, acv, saleDate, saleTime, branchLocation, sellerName
//   images[] — из блока с фото

function mapIaai(raw) {
  // raw — объект который вернёт наш iaai-парсер после regex-парсинга HTML
  const stockNum  = String(raw.stockNumber ?? raw.id ?? '')
  const year      = toNum(raw.year)
  const make      = String(raw.make ?? '').trim()
  const model     = String(raw.model ?? '').trim()
  const title     = `${year} ${make} ${model}`.trim()

  const milesMi   = toNum(raw.odometer ?? 0)
  const mileageKm = milesToKm(milesMi)

  const bid       = toNum(raw.currentBid ?? 0)
  const acv       = toNum(raw.acv ?? 0)

  const allPhotos = Array.isArray(raw.images) ? raw.images.filter(Boolean) : []
  const mainPhoto = allPhotos[0] ?? ''

  // IAAI: saleDate = "2026-05-06", saleTime = "09:00 AM CST"
  const auctionEndMs = calcAuctionEndMs(
    raw.saleDate,
    raw.saleTime?.replace(/[^0-9]/g, '').slice(0, 4), // "09:00 AM" → "0900"
    raw.saleTime?.match(/(EST|EDT|CST|CDT|MST|MDT|PST|PDT)/)?.[1] ?? 'CST'
  )

  return {
    id:             stockNum,
    source:         'iaai',
    title,
    year,
    make,
    model,
    trim:           String(raw.trim ?? '').trim(),
    vin:            String(raw.vin ?? '').trim(),

    engine:         String(raw.engine ?? '').trim(),
    transmission:   String(raw.transmission ?? 'AUTOMATIC').trim(),
    drive:          String(raw.drivelineType ?? raw.drive ?? 'AWD').trim(),
    fuel:           String(raw.fuelType ?? raw.fuel ?? 'GAS').trim(),
    color:          String(raw.exteriorColor ?? raw.color ?? '').trim(),
    bodyStyle:      String(raw.bodyStyle ?? '').trim(),

    mileageKm,
    mileageLabel:   fmtKm(mileageKm),

    damage:         String(raw.primaryDamage ?? raw.damage ?? '').trim(),
    damageSec:      String(raw.secondaryDamage ?? '').trim(),
    titleStatus:    String(raw.titleType ?? raw.titleStatus ?? '').trim(),
    hasKeys:        String(raw.hasKeys ?? '').toUpperCase().includes('YES'),
    condition:      '',

    currentBid:     bid,
    currentBidLabel: fmtUsd(bid),
    buyNow:         0,
    buyNowLabel:    '—',
    estimateLow:    Math.round(acv * 0.9),
    estimateHigh:   Math.round(acv * 1.1),
    estimateLabel:  fmtUsd(acv),

    auction:        'IAAI',
    auctionEndMs,
    auctionDateLabel: raw.saleDate ?? 'TBD',
    saleTime:       String(raw.saleTime ?? ''),
    saleTimeZone:   'CST',

    image:          mainPhoto,
    images:         allPhotos,

    location:       String(raw.branchLocation ?? raw.location ?? '').trim(),
    seller:         String(raw.sellerName ?? raw.seller ?? 'IAAI').trim(),
    sourceUrl:      `https://www.iaai.com/vehicle-details/${stockNum}`,

    status:         'catalog',
    fetchedAt:      new Date().toISOString(),
  }
}

// ─── Тест маппера на фиктивных данных ─────────────────────────────────────────

function testMapper() {
  console.log('🧪 Тест маппера — Шаг 2\n')

  // Симулируем сырой ответ от Copart /solr/
  const fakeCopartRaw = {
    data: {
      lotDetails: {
        ln: '75432198',
        vin: '5UXCR6C09N9K12345',
        lcy: 2022,
        mkn: 'BMW',
        lm: 'X5 XDRIVE40I',
        clr: 'BLACK',
        bstl: 'SUV',
        egn: '3.0L TURBOCHARGED',
        ft: 'GASOLINE',
        tmtp: 'AUTOMATIC',
        drv: 'AWD',
        la: 27961,          // мили
        dd: 'FRONT END',
        sdd: 'ALL OVER',
        hk: 'YES',
        titlgrp: 'SALVAGE',
        bid: 18500,
        bn: 0,
        rcost: 42000,
        thmb: 'https://cs.copart.com/v1/AUTH_svc/lpp/0424/abc123_thb.jpg',
        imgs: [
          'https://cs.copart.com/v1/AUTH_svc/lpp/0424/abc123_thb.jpg',
          'https://cs.copart.com/v1/AUTH_svc/lpp/0424/abc124_thb.jpg',
        ],
        ad: '2026-05-06',
        at: '0900',
        tz: 'EST',
        yn: 'GA - ATLANTA',
        lcs: 'GA',
        scn: 'GEICO',
        lu: 'https://www.copart.com/lot/75432198',
      }
    }
  }

  const copartResult = mapCopart(fakeCopartRaw)
  console.log('✅ Copart маппинг:')
  console.log(`   Лот:        ${copartResult.id}`)
  console.log(`   VIN:        ${copartResult.vin}`)
  console.log(`   Авто:       ${copartResult.title}`)
  console.log(`   Двигатель:  ${copartResult.engine}`)
  console.log(`   Пробег:     ${copartResult.mileageLabel}`)
  console.log(`   Ставка:     ${copartResult.currentBidLabel}`)
  console.log(`   Оценка:     ${copartResult.estimateLabel}`)
  console.log(`   Повреждение:${copartResult.damage} / ${copartResult.damageSec}`)
  console.log(`   Документы:  ${copartResult.titleStatus}`)
  console.log(`   Ключи:      ${copartResult.hasKeys ? 'Есть' : 'Нет'}`)
  console.log(`   Локация:    ${copartResult.location}`)
  console.log(`   Продавец:   ${copartResult.seller}`)
  console.log(`   Фото:       ${copartResult.images.length} шт → ${copartResult.images[0]}`)
  console.log(`   Дата:       ${copartResult.auctionDateLabel} ${copartResult.saleTime}`)

  // Таймер
  if (copartResult.auctionEndMs) {
    const secsLeft = Math.floor((copartResult.auctionEndMs - Date.now()) / 1000)
    if (secsLeft > 0) {
      const d = Math.floor(secsLeft / 86400)
      const h = Math.floor((secsLeft % 86400) / 3600)
      const m = Math.floor((secsLeft % 3600) / 60)
      console.log(`   ⏱ Таймер:   через ${d}д ${h}ч ${m}мин`)
    } else {
      console.log(`   ⏱ Таймер:   аукцион завершён`)
    }
  }

  // Симулируем сырой ответ от IAAI (после парсинга HTML)
  const fakeIaaiRaw = {
    stockNumber: '48291744',
    vin: 'WBAJE7C56KWW12345',
    year: 2019,
    make: 'BMW',
    model: '5 SERIES',
    engine: '2.0L 4 CYL',
    transmission: 'AUTOMATIC',
    drivelineType: 'AWD',
    fuelType: 'GASOLINE',
    exteriorColor: 'WHITE',
    primaryDamage: 'REAR END',
    secondaryDamage: 'MECHANICAL',
    odometer: 35000,
    hasKeys: 'YES',
    titleType: 'SALVAGE TITLE',
    currentBid: 12800,
    acv: 31000,
    saleDate: '2026-05-08',
    saleTime: '0930 CST',
    branchLocation: 'Chicago, IL',
    sellerName: 'State Farm',
    images: [
      'https://iaai.com/images/48291744/1.jpg',
      'https://iaai.com/images/48291744/2.jpg',
      'https://iaai.com/images/48291744/3.jpg',
    ]
  }

  const iaaiResult = mapIaai(fakeIaaiRaw)
  console.log('\n✅ IAAI маппинг:')
  console.log(`   Лот:        ${iaaiResult.id}`)
  console.log(`   VIN:        ${iaaiResult.vin}`)
  console.log(`   Авто:       ${iaaiResult.title}`)
  console.log(`   Ставка:     ${iaaiResult.currentBidLabel}`)
  console.log(`   Пробег:     ${iaaiResult.mileageLabel}`)
  console.log(`   Повреждение:${iaaiResult.damage}`)
  console.log(`   Фото:       ${iaaiResult.images.length} шт`)
  console.log(`   Локация:    ${iaaiResult.location}`)

  // Проверка совместимости с AuctionCardData
  const requiredFields = ['id','title','year','make','model','vin','auction','image','images',
    'location','mileageKm','mileageLabel','transmission','fuel','drive','bodyStyle','color',
    'engine','damage','currentBid','currentBidLabel','estimateLabel','status']

  const missing = requiredFields.filter(f => copartResult[f] === undefined)
  if (missing.length === 0) {
    console.log('\n✅ Все обязательные поля AuctionCardData присутствуют')
  } else {
    console.log('\n⚠️  Отсутствуют поля:', missing)
  }

  console.log('\n📋 Шаг 2 завершён. Маппер готов.')
  console.log('   Следующий шаг: Puppeteer + реальные запросы к Copart/IAAI')
}

testMapper()

module.exports = { mapCopart, mapIaai }
