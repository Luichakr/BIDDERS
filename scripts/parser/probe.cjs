/**
 * ШАЕГ 1 — РАЗВЕДКА
 *
 * Что делает этот скрипт:
 *   - Делает реальный запрос к Copart и IAAI
 *   - Выводит сырые данные в консоль
 *   - Ничего не сохраняет, ничего не меняет на сайте
 *   - Цель: убедиться что данные приходят и посмотреть структуру
 *
 * Запуск:
 *   node scripts/parser/probe.js
 */

const https = require('https')

// ─── Настройки ────────────────────────────────────────────────────────────────

const COPART_SEARCH_QUERY = 'bmw'   // что ищем на Copart
const COPART_LOTS_LIMIT   = 3       // сколько лотов смотрим (для теста — мало)
const IAAI_SEARCH_MAKE    = 'BMW'   // что ищем на IAAI
const IAAI_LOTS_LIMIT     = 2

// Headers — имитируем обычный браузер
const BROWSER_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.copart.com/',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
}

// ─── Утилиты ──────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function fetchJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const opts = {
      headers: { ...BROWSER_HEADERS, ...headers },
    }
    https.get(url, opts, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) })
        } catch {
          resolve({ status: res.statusCode, body: data.slice(0, 500) })
        }
      })
    }).on('error', reject)
  })
}

function printSection(title) {
  console.log('\n' + '═'.repeat(60))
  console.log('  ' + title)
  console.log('═'.repeat(60))
}

function printFields(obj, prefix = '', depth = 0) {
  if (depth > 3 || !obj || typeof obj !== 'object') return
  for (const [key, val] of Object.entries(obj)) {
    if (Array.isArray(val)) {
      console.log(`  ${prefix}${key}: [Array(${val.length})]`)
      if (val.length > 0 && typeof val[0] === 'string') {
        console.log(`    → пример: "${val[0]}"`)
      }
    } else if (val && typeof val === 'object') {
      console.log(`  ${prefix}${key}: {объект}`)
      printFields(val, prefix + '  ', depth + 1)
    } else {
      const display = String(val).slice(0, 100)
      console.log(`  ${prefix}${key}: ${display}`)
    }
  }
}

// ─── Copart ───────────────────────────────────────────────────────────────────

async function probeCopartSearch() {
  printSection('COPART — Поиск лотов')

  const url = `https://www.copart.com/public/lots/search-results/?query=${COPART_SEARCH_QUERY}&page=0&size=${COPART_LOTS_LIMIT}&sort=saleDate%2Cdesc`
  console.log('URL:', url)

  const { status, body } = await fetchJson(url, { Referer: 'https://www.copart.com/lotSearchResults/' })
  console.log('HTTP статус:', status)

  if (status !== 200) {
    console.log('❌ Запрос не прошёл. Тело ответа:', JSON.stringify(body).slice(0, 300))
    return null
  }

  // Copart оборачивает данные в несколько уровней
  const lots = body?.data?.results?.content
  if (!lots || !Array.isArray(lots)) {
    console.log('⚠️  Неожиданная структура. Ключи верхнего уровня:', Object.keys(body || {}))
    console.log('Сырой ответ (первые 1000 символов):', JSON.stringify(body).slice(0, 1000))
    return null
  }

  console.log(`✅ Получено лотов: ${lots.length}`)
  console.log('\n--- Первый лот — все поля ---')
  printFields(lots[0])

  // Ключевые поля специально
  const lot = lots[0]
  console.log('\n--- Ключевые поля ---')
  console.log('Лот №:        ', lot.ln ?? lot.lotNumberStr ?? '—')
  console.log('VIN:          ', lot.vin ?? '—')
  console.log('Год:          ', lot.year ?? lot.lcy ?? '—')
  console.log('Марка:        ', lot.mkn ?? lot.make ?? '—')
  console.log('Модель:       ', lot.lm ?? lot.model ?? '—')
  console.log('Ставка:       ', lot.bid ?? lot.cb ?? '—')
  console.log('Buy It Now:   ', lot.bn ?? lot.buy ?? '—')
  console.log('Дата аукциона:', lot.sdt ?? lot.ad ?? '—')
  console.log('Повреждение:  ', lot.dd ?? lot.dmg ?? '—')
  console.log('Статус доков: ', lot.titlgrp ?? lot.tg ?? '—')
  console.log('Есть ключи:   ', lot.hk ?? '—')
  console.log('Город:        ', lot.lcy ?? lot.city ?? '—')
  console.log('Штат:         ', lot.lcs ?? lot.state ?? '—')
  console.log('Фото:         ', JSON.stringify(lot.imgs ?? lot.thmb ?? '—').slice(0, 200))

  return lots
}

async function probeCopartLotDetail(lotNumber) {
  printSection(`COPART — Детали лота ${lotNumber}`)

  const url = `https://www.copart.com/public/data/lotdetails/info/${lotNumber}`
  console.log('URL:', url)

  const { status, body } = await fetchJson(url, { Referer: `https://www.copart.com/lot/${lotNumber}` })
  console.log('HTTP статус:', status)

  if (status !== 200) {
    console.log('❌ Запрос не прошёл:', JSON.stringify(body).slice(0, 300))
    return
  }

  const lot = body?.data?.lotDetails ?? body?.data ?? body
  console.log(`✅ Данные лота получены`)
  console.log('\n--- Все поля ---')
  printFields(lot)

  // Проверяем таймер
  const saleTime = lot.sdt ?? lot.ad ?? lot.saleDate
  if (saleTime) {
    const endMs = typeof saleTime === 'number' ? saleTime : new Date(saleTime).getTime()
    const secondsLeft = Math.floor((endMs - Date.now()) / 1000)
    console.log('\n--- ТАЙМЕР ---')
    console.log('saleTime raw:', saleTime)
    console.log('Секунд до аукциона:', secondsLeft)
    console.log('Аукцион:', secondsLeft > 0 ? `через ${Math.floor(secondsLeft / 3600)}ч ${Math.floor((secondsLeft % 3600) / 60)}мин` : 'уже прошёл')
  } else {
    console.log('\n⚠️  Поле с датой аукциона не найдено')
  }

  // Фото
  const photos = lot.imgs ?? lot.images ?? []
  console.log('\n--- ФОТО ---')
  console.log('Кол-во:', Array.isArray(photos) ? photos.length : 'не массив')
  if (Array.isArray(photos) && photos.length > 0) {
    console.log('Пример URL:', photos[0])
  }
}

// ─── IAAI ─────────────────────────────────────────────────────────────────────

async function probeIaaiSearch() {
  printSection('IAAI — Поиск лотов')

  // IAAI публичный поиск
  const url = `https://www.iaai.com/Search?SearchVehicles=true&make=${IAAI_SEARCH_MAKE}&page=1&rowsPerPage=${IAAI_LOTS_LIMIT}`
  console.log('URL:', url)

  const { status, body } = await fetchJson(url, {
    Referer: 'https://www.iaai.com/',
    'Accept': 'application/json, text/html, */*',
  })
  console.log('HTTP статус:', status)

  if (status !== 200) {
    console.log('❌ Запрос не прошёл. Пробуем альтернативный эндпоинт...')
    return await probeIaaiAlternative()
  }

  if (typeof body === 'string') {
    console.log('⚠️  Вернулся HTML (нужен JS-рендеринг). Пробуем API эндпоинт...')
    return await probeIaaiAlternative()
  }

  console.log(`✅ IAAI ответил JSON`)
  const lots = body?.items ?? body?.vehicles ?? body?.results ?? body
  if (Array.isArray(lots) && lots.length > 0) {
    console.log(`Лотов: ${lots.length}`)
    console.log('\n--- Первый лот — все поля ---')
    printFields(lots[0])
  } else {
    console.log('Структура ответа:', JSON.stringify(body).slice(0, 500))
  }
}

async function probeIaaiAlternative() {
  // IAAI API эндпоинт (используется их собственным фронтом)
  const url = `https://www.iaai.com/Vehiclelisting/Vehiclelisting/Api/SearchVehicles?make=${IAAI_SEARCH_MAKE}&page=1&rowsPerPage=3`
  console.log('Пробуем:', url)

  const { status, body } = await fetchJson(url, {
    Referer: 'https://www.iaai.com/Search',
    'X-Requested-With': 'XMLHttpRequest',
  })
  console.log('HTTP статус:', status)

  if (status !== 200 || typeof body === 'string') {
    console.log('❌ IAAI требует авторизацию или JS-рендеринг')
    console.log('→ Для IAAI нужен Puppeteer (headless browser). Запишем в выводы.')
    return null
  }

  const lots = body?.Data ?? body?.vehicles ?? body?.results ?? body
  if (Array.isArray(lots)) {
    console.log(`✅ IAAI лотов: ${lots.length}`)
    printFields(lots[0])
  }
}

// ─── Главная функция ───────────────────────────────────────────────────────────

async function main() {
  console.log('🔍 BIDDERS — Разведка парсера (Шаг 1)')
  console.log('Дата/время:', new Date().toISOString())
  console.log('Никаких изменений на сайте не делается.')

  // 1. Copart поиск
  const copartLots = await probeCopartSearch()
  await sleep(1500)

  // 2. Copart детали первого лота
  if (copartLots && copartLots.length > 0) {
    const firstLotNum = copartLots[0]?.ln ?? copartLots[0]?.lotNumberStr
    if (firstLotNum) {
      await probeCopartLotDetail(firstLotNum)
      await sleep(1500)
    }
  }

  // 3. IAAI поиск
  await probeIaaiSearch()

  // ─── Итог ───────────────────────────────────────────────────────────────────
  printSection('ИТОГ РАЗВЕДКИ')
  console.log(`
Проверь выше:
  ✅ — запрос прошёл, данные есть
  ❌ — запрос заблокирован или структура изменилась
  ⚠️  — данные пришли, но в неожиданном формате

Что смотреть:
  1. HTTP статус 200 = Copart открыт для нас
  2. Поле sdt (saleTime) = таймер считается
  3. Массив imgs = фото есть
  4. IAAI: если 200 = можно без браузера, если HTML = нужен Puppeteer

После разведки переходим к Шагу 2 — маппинг данных.
`)
}

main().catch(err => {
  console.error('Критическая ошибка:', err.message)
  process.exit(1)
})
