/**
 * IAAI парсер
 *
 * IAAI рендерит страницы через JS, поэтому используем Puppeteer.
 * Схема:
 *   1. Puppeteer открывает страницу поиска IAAI
 *   2. Перехватываем XHR-ответы с данными лотов (networkidle)
 *   3. Для каждого лота открываем страницу деталей, извлекаем поля
 *   4. Возвращаем массив сырых лотов
 */

const puppeteer = require('puppeteer')

// ─── Настройки ────────────────────────────────────────────────────────────────

const SEARCH_MAKES  = ['BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Porsche']
const LOTS_PER_MAKE = 8
const PAGE_TIMEOUT  = 20000
const REQUEST_DELAY = 1500

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'

// ─── Утилиты ──────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

// Извлечь текст по label из HTML таблицы деталей IAAI
function extractField(html, label) {
  // Паттерн: Label</span> ... <span ...>VALUE</span>
  const re = new RegExp(
    label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
    '[^<]*<\\/[^>]+>[\\s\\S]{0,300}?<[^>]+>([^<]{1,200})<\\/[^>]+>',
    'i'
  )
  const m = html.match(re)
  return m ? m[1].trim() : ''
}

// Извлечь все URL фото из HTML
function extractPhotos(html) {
  const urls = []
  const re = /https:\/\/[^"'\s]+iaai[^"'\s]+\.(jpg|jpeg|JPG|JPEG)/g
  let m
  while ((m = re.exec(html)) !== null) {
    const url = m[0]
    if (!urls.includes(url)) urls.push(url)
  }
  // Фильтруем thumbnail'ы если есть полные
  return urls.slice(0, 20)
}

// ─── Парсинг страницы лота ────────────────────────────────────────────────────

function parseLotPage(html, stockNumber, make) {
  // Год
  const yearM = html.match(/"heading-2">(\d{4})/)
  const year = yearM ? parseInt(yearM[1]) : 0

  // Модель
  const modelM = html.match(/class="heading-[23]"[^>]*>([^<]{3,60})</)
  const fullModel = modelM ? modelM[1].trim() : ''
  const model = fullModel.replace(/^\d{4}\s*/, '').replace(make, '').trim()

  return {
    stockNumber: String(stockNumber),
    make:         make.toUpperCase(),
    model:        model || fullModel,
    year,
    vin:          extractField(html, 'VIN'),
    engine:       extractField(html, 'Engine'),
    transmission: extractField(html, 'Transmission'),
    drivelineType:extractField(html, 'Drive'),
    fuelType:     extractField(html, 'Fuel Type'),
    exteriorColor:extractField(html, 'Color'),
    bodyStyle:    extractField(html, 'Body Style'),
    primaryDamage:extractField(html, 'Primary Damage'),
    secondaryDamage: extractField(html, 'Secondary Damage'),
    odometer:     parseInt(extractField(html, 'Odometer').replace(/[^0-9]/g, '')) || 0,
    hasKeys:      extractField(html, 'Key'),
    titleType:    extractField(html, 'Title'),
    currentBid:   parseInt(extractField(html, 'Current Bid').replace(/[^0-9]/g, '')) || 0,
    acv:          parseInt(extractField(html, 'Estimated Retail').replace(/[^0-9]/g, '')) || 0,
    saleDate:     extractField(html, 'Sale Date').replace(/\s+/g, ' ').trim().split(' ')[0] || '',
    saleTime:     extractField(html, 'Sale Time'),
    branchLocation: extractField(html, 'Location'),
    sellerName:   extractField(html, 'Seller'),
    images:       extractPhotos(html),
  }
}

// ─── Получить список лотов для марки ─────────────────────────────────────────

async function searchIaaiMake(browser, make) {
  const page = await browser.newPage()
  await page.setUserAgent(USER_AGENT)

  const lots = []

  try {
    const searchUrl = `https://www.iaai.com/Search?SearchVehicles=true&make=${encodeURIComponent(make)}&rowsPerPage=${LOTS_PER_MAKE}`
    console.log(`  [IAAI] Ищем ${make}...`)

    // Перехватываем JSON-ответы
    page.on('response', async (response) => {
      const url = response.url()
      if (url.includes('SearchVehicles') || url.includes('VehicleSearch')) {
        try {
          const json = await response.json()
          const items = json?.items ?? json?.vehicles ?? json?.data ?? []
          if (Array.isArray(items) && items.length > 0) {
            console.log(`  [IAAI] Перехвачен JSON: ${items.length} лотов`)
            lots.push(...items)
          }
        } catch { /* не JSON */ }
      }
    })

    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: PAGE_TIMEOUT })
    await sleep(2000)

    // Если JSON не перехватили — парсим HTML
    if (lots.length === 0) {
      const html = await page.content()
      // Ищем stock numbers в HTML
      const stockRe = /\/vehicle-details\/(\d{7,10})/g
      const ids = new Set()
      let m
      while ((m = stockRe.exec(html)) !== null) ids.add(m[1])
      if (ids.size > 0) {
        console.log(`  [IAAI] Из HTML извлекли ${ids.size} ID лотов для ${make}`)
        for (const id of ids) {
          lots.push({ stockNumber: id, make })
          if (lots.length >= LOTS_PER_MAKE) break
        }
      }
    }
  } catch (err) {
    console.log(`  [IAAI] ⚠️  ${make}: ${err.message}`)
  } finally {
    await page.close()
  }

  return lots.slice(0, LOTS_PER_MAKE)
}

// ─── Получить детали одного лота ──────────────────────────────────────────────

async function fetchIaaiLotDetail(browser, stockNumber, make) {
  const page = await browser.newPage()
  await page.setUserAgent(USER_AGENT)

  let result = null

  try {
    const url = `https://www.iaai.com/vehicle-details/${stockNumber}`
    await page.goto(url, { waitUntil: 'networkidle2', timeout: PAGE_TIMEOUT })
    await sleep(1000)

    const html = await page.content()

    // Проверяем что страница лота (не редирект)
    if (html.includes('vehicle-details') || html.includes('data-list')) {
      result = parseLotPage(html, stockNumber, make)
    }
  } catch (err) {
    console.log(`    [IAAI] ⚠️  Лот ${stockNumber}: ${err.message}`)
  } finally {
    await page.close()
  }

  return result
}

// ─── Главная функция ──────────────────────────────────────────────────────────

async function fetchIaaiLots() {
  console.log('\n[IAAI] Начинаем сбор данных...')

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
    ],
  })

  const allLots = []

  try {
    for (const make of SEARCH_MAKES) {
      await sleep(REQUEST_DELAY)

      // Получаем список лотов
      const searchResults = await searchIaaiMake(browser, make)

      for (const lot of searchResults) {
        const stockNum = lot.stockNumber ?? lot.id ?? lot.stockNum
        if (!stockNum) continue

        await sleep(REQUEST_DELAY)

        // Если уже есть полные данные из JSON-перехвата — берём их
        if (lot.vin && lot.primaryDamage) {
          allLots.push(lot)
          process.stdout.write(`    ✓ ${stockNum} — ${lot.make} ${lot.model ?? ''} (из поиска)\n`)
          continue
        }

        // Иначе заходим на страницу деталей
        const detail = await fetchIaaiLotDetail(browser, stockNum, make)
        if (detail) {
          allLots.push(detail)
          process.stdout.write(`    ✓ ${stockNum} — ${detail.make} ${detail.model ?? ''}\n`)
        }
      }
    }
  } finally {
    await browser.close()
  }

  console.log(`[IAAI] Итого собрано: ${allLots.length} лотов`)
  return allLots
}

module.exports = { fetchIaaiLots }
