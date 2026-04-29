/**
 * Copart парсер v3
 *
 * Стратегия: перехватываем сетевые ответы страницы поиска.
 * Copart делает POST/GET к /public/lots/search-results — перехватываем его.
 * Для деталей лота используем /public/data/lotdetails/solr/{id} тем же способом.
 */

const puppeteer = require('puppeteer-extra')
const Stealth   = require('puppeteer-extra-plugin-stealth')
puppeteer.use(Stealth())

const SEARCH_MAKES  = ['BMW', 'MERCEDES-BENZ', 'AUDI', 'TOYOTA', 'LEXUS', 'PORSCHE']
const LOTS_PER_MAKE = 10
const USER_AGENT    = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// ─── Перехват одного поискового запроса ──────────────────────────────────────

async function interceptSearch(browser, make) {
  const page = await browser.newPage()
  await page.setUserAgent(USER_AGENT)
  await page.setViewport({ width: 1440, height: 900 })

  const lots = []

  // Вешаем перехватчик до навигации
  page.on('response', async (response) => {
    const url = response.url()
    if (!url.includes('/lots/search-results')) return
    try {
      const json = await response.json()
      const content = json?.data?.results?.content ?? []
      if (content.length > 0) {
        lots.push(...content)
      }
    } catch {}
  })

  try {
    const searchUrl = `https://www.copart.com/lotSearchResults/?free=true&query=${encodeURIComponent(make)}&size=${LOTS_PER_MAKE}`
    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 })
    await sleep(2000)
  } catch (err) {
    console.log(`    [Copart] ⚠️  Навигация ${make}: ${err.message}`)
  } finally {
    await page.close()
  }

  return lots.slice(0, LOTS_PER_MAKE)
}

// ─── Перехват деталей лота ────────────────────────────────────────────────────

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
      // Основные данные лота
      const ld = json?.data?.lotDetails
      if (ld) detail = ld
      // Фотографии — отдельный запрос /lotdetails/solr/lot-images/
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
    console.log(`    [Copart] ⚠️  Лот ${lotId}: ${err.message}`)
  } finally {
    await page.close()
  }

  // Прикрепляем фото к данным (detail или lot из поиска — разберётся caller)
  const base = detail ?? {}
  if (imagesList) {
    base.__imagesList = imagesList
  }

  return Object.keys(base).length > 0 ? base : null
}

// ─── Главная функция ──────────────────────────────────────────────────────────

async function fetchCopartLots() {
  console.log('\n[Copart] Начинаем сбор данных...')

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  const allLots = []

  try {
    // Прогреваем сессию на главной
    console.log('  [Copart] Прогрев сессии...')
    const warmPage = await browser.newPage()
    await warmPage.setUserAgent(USER_AGENT)
    await warmPage.goto('https://www.copart.com/', { waitUntil: 'networkidle2', timeout: 30000 })
    await sleep(2000)
    await warmPage.close()

    // Перебираем марки
    for (const make of SEARCH_MAKES) {
      console.log(`  [Copart] Поиск: ${make}...`)
      await sleep(1000)

      const searchLots = await interceptSearch(browser, make)
      console.log(`    → перехвачено ${searchLots.length} лотов`)

      for (const lot of searchLots) {
        const lotId = lot.ln ?? lot.lotNumberStr
        if (!lotId) continue

        await sleep(800)

        // Перехватываем детали лота (фото, VIN, полные данные)
        const detail = await interceptLotDetail(browser, lotId)
        // Мержим: берём данные лота из поиска, добавляем __imagesList из detail
        const raw = { ...lot }
        if (detail?.__imagesList) raw.__imagesList = detail.__imagesList
        // Если detail содержит основные поля (lotDetails был перехвачен) — применяем их
        if (detail) Object.assign(raw, detail)

        allLots.push({ data: { lotDetails: raw } })
        const photoCount = Array.isArray(raw.__imagesList) ? raw.__imagesList.length : (Array.isArray(raw.imgs) ? raw.imgs.length : 0)
        process.stdout.write(`      ✓ ${lotId} | ${raw.mkn ?? raw.make ?? '?'} ${raw.lm ?? raw.model ?? '?'} | $${raw.hb ?? raw.bid ?? raw.currentBid ?? '?'} | фото: ${photoCount}\n`)
      }
    }
  } finally {
    await browser.close()
  }

  console.log(`[Copart] Итого собрано: ${allLots.length} лотов`)
  return allLots
}

module.exports = { fetchCopartLots }
