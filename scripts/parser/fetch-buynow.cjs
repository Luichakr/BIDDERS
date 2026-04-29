/**
 * Buy Now парсер — собирает лоты "Купить сейчас" с Copart
 * Мержит в существующий lots.json (не заменяет, а добавляет)
 *
 * Запуск:
 *   node scripts/parser/fetch-buynow.cjs
 *   node scripts/parser/fetch-buynow.cjs --count=20
 */

const puppeteer = require('puppeteer-extra')
const Stealth   = require('puppeteer-extra-plugin-stealth')
const fs        = require('fs')
const path      = require('path')

puppeteer.use(Stealth())

const TARGET_COUNT = parseInt(process.argv.find(a => a.startsWith('--count='))?.split('=')[1] ?? '20')
const OUTPUT_PATH  = path.resolve(__dirname, '../../public/data/lots.json')
const USER_AGENT   = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'

// Buy Now поиск — несколько разных URL чтобы собрать достаточно лотов
const BUY_NOW_URLS = [
  // Основной — фильтр AUCTION_TYPE = BUY_NOW
  `https://www.copart.com/lotSearchResults/?free=true&query=*&size=50&filter[0]=AUCTION_TYPE[BUY_NOW]`,
  // Широкий поиск по популярным маркам — фильтруем client-side по bnp > 0
  `https://www.copart.com/lotSearchResults/?free=true&query=SUV&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=BMW&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=MERCEDES&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=AUDI&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=LAND+ROVER&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=PORSCHE&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=LEXUS&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=VOLVO&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=CADILLAC&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=LINCOLN&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=INFINITI&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=ACURA&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=JEEP&size=50`,
  `https://www.copart.com/lotSearchResults/?free=true&query=TESLA&size=50`,
]

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// Конец текущей недели (воскресенье 23:59)
function endOfWeek() {
  const now = new Date()
  const day = now.getDay() // 0=Sun, 1=Mon...
  const toSunday = day === 0 ? 0 : 7 - day
  const end = new Date(now)
  end.setDate(now.getDate() + toSunday)
  end.setHours(23, 59, 59, 999)
  return end.getTime()
}

async function interceptBuyNow(browser, searchUrl) {
  const page = await browser.newPage()
  await page.setUserAgent(USER_AGENT)
  await page.setViewport({ width: 1440, height: 900 })

  const lots = []

  page.on('response', async (response) => {
    const url = response.url()
    if (!url.includes('/lots/search-results')) return
    try {
      const json = await response.json()
      const content = json?.data?.results?.content ?? []
      // Берём только лоты с Buy Now ценой
      const binLots = content.filter(l => {
        const bnp = l.bnp ?? l.bn ?? l.buyItNowPrice ?? 0
        return Number(bnp) > 0
      })
      if (binLots.length > 0) {
        lots.push(...binLots)
        console.log(`    → перехвачено ${binLots.length} Buy Now лотов из ${content.length}`)
      }
    } catch {}
  })

  try {
    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 35000 })
    await sleep(2500)
  } catch (err) {
    console.log(`    ⚠️  Навигация: ${err.message}`)
  } finally {
    await page.close()
  }

  return lots
}

async function interceptLotDetail(browser, lotId) {
  const page = await browser.newPage()
  await page.setUserAgent(USER_AGENT)
  await page.setViewport({ width: 1440, height: 900 })

  let detail = null
  let imagesList = null

  page.on('response', async (response) => {
    const url = response.url()
    if (!url.includes('/lotdetails/')) return
    try {
      const json = await response.json()
      const ld = json?.data?.lotDetails
      if (ld) detail = ld
      const imgs = json?.data?.imagesList?.IMAGE
      if (Array.isArray(imgs) && imgs.length > 0) imagesList = imgs
    } catch {}
  })

  try {
    await page.goto(`https://www.copart.com/lot/${lotId}`, {
      waitUntil: 'networkidle2', timeout: 25000,
    })
    await sleep(1500)
  } catch (err) {
    console.log(`    ⚠️  Лот ${lotId}: ${err.message}`)
  } finally {
    await page.close()
  }

  const base = detail ?? {}
  if (imagesList) base.__imagesList = imagesList
  return Object.keys(base).length > 0 ? base : null
}

async function main() {
  const { mapCopart } = require('./mapper.cjs')

  console.log('═'.repeat(60))
  console.log('  BIDDERS — Buy Now лоты с Copart')
  console.log(`  Цель: ${TARGET_COUNT} лотов | Неделя до: ${new Date(endOfWeek()).toLocaleDateString('ru-RU')}`)
  console.log('═'.repeat(60))

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  const collected = []
  const weekEnd = endOfWeek()

  try {
    // Прогрев
    console.log('\n[1/3] Прогрев сессии...')
    const warmPage = await browser.newPage()
    await warmPage.setUserAgent(USER_AGENT)
    await warmPage.goto('https://www.copart.com/', { waitUntil: 'networkidle2', timeout: 30000 })
    await sleep(2000)
    await warmPage.close()

    // Сбор Buy Now лотов
    console.log('\n[2/3] Поиск Buy Now лотов...')
    const allRaw = []

    for (const url of BUY_NOW_URLS) {
      if (allRaw.length >= TARGET_COUNT * 2) break // достаточно сырья
      console.log(`  → ${url.slice(0, 80)}...`)
      await sleep(1000)
      const lots = await interceptBuyNow(browser, url)
      allRaw.push(...lots)
      console.log(`    Накоплено Buy Now: ${allRaw.length}`)
    }

    // Дедупликация по lotId
    const seen = new Set()
    const unique = allRaw.filter(l => {
      const id = String(l.ln ?? l.lotNumberStr ?? '')
      if (!id || seen.has(id)) return false
      seen.add(id)
      return true
    })

    // Фильтр: только лоты на этой неделе
    const thisWeek = unique.filter(l => {
      const saleMs = l.ad ?? l.auctionDate ?? l.sellDate ?? null
      if (!saleMs) return true // не знаем дату — берём
      return Number(saleMs) <= weekEnd
    })

    console.log(`\n  Уникальных Buy Now: ${unique.length} | На этой неделе: ${thisWeek.length}`)

    // Берём нужное количество
    const toProcess = thisWeek.slice(0, TARGET_COUNT)

    // Детали + фото
    console.log(`\n[3/3] Загрузка деталей для ${toProcess.length} лотов...`)
    for (const lot of toProcess) {
      const lotId = String(lot.ln ?? lot.lotNumberStr ?? '')
      if (!lotId) continue

      await sleep(800)
      const detail = await interceptLotDetail(browser, lotId)
      const raw = { ...lot }
      if (detail?.__imagesList) raw.__imagesList = detail.__imagesList
      if (detail) Object.assign(raw, detail)

      try {
        const mapped = mapCopart({ data: { lotDetails: raw } })
        if (mapped.id && mapped.title && mapped.buyNow > 0) {
          collected.push(mapped)
          const photos = mapped.images?.length ?? 0
          console.log(`  ✓ ${mapped.id} | ${mapped.title} | BN: ${mapped.buyNowLabel} | Ставка: ${mapped.currentBidLabel} | фото: ${photos}`)
        }
      } catch (err) {
        console.log(`  ⚠️  Маппинг ${lotId}: ${err.message}`)
      }
    }

  } finally {
    await browser.close()
  }

  console.log(`\n📦 Собрано Buy Now лотов: ${collected.length}`)

  if (collected.length === 0) {
    console.log('❌ Ничего не собрали, lots.json не изменён')
    process.exit(1)
  }

  // Мерж: существующие лоты + новые Buy Now (без дублей)
  let existing = []
  try {
    if (fs.existsSync(OUTPUT_PATH)) {
      existing = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf8'))
    }
  } catch {}

  const existingIds = new Set(existing.map(l => String(l.id)))
  const newLots = collected.filter(l => !existingIds.has(String(l.id)))
  const merged = [...existing, ...newLots]

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(merged, null, 2), 'utf8')
  const kb = Math.round(fs.statSync(OUTPUT_PATH).size / 1024)

  console.log(`\n💾 lots.json обновлён:`)
  console.log(`   Было: ${existing.length} | Добавлено: ${newLots.length} | Итого: ${merged.length}`)
  console.log(`   Размер: ${kb} KB`)
  console.log(`   Путь: ${OUTPUT_PATH}`)

  const buyNowTotal = merged.filter(l => l.buyNow > 0).length
  console.log(`\n🛒 Buy Now лотов в каталоге: ${buyNowTotal}`)
  console.log('\n✅ Готово!')
}

main().catch(err => {
  console.error('\n💥 Критическая ошибка:', err.message)
  console.error(err.stack)
  process.exit(1)
})
