/**
 * Отладка — смотрим реальную структуру ответа Copart
 */
const puppeteer = require('puppeteer-extra')
const Stealth   = require('puppeteer-extra-plugin-stealth')
puppeteer.use(Stealth())

const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    await page.setUserAgent(USER_AGENT)
    await page.setViewport({ width: 1440, height: 900 })

    // Перехватываем ВСЕ сетевые ответы
    const captured = []
    page.on('response', async (response) => {
      const url = response.url()
      const ct  = response.headers()['content-type'] ?? ''
      if (ct.includes('json') && url.includes('copart.com')) {
        try {
          const text = await response.text()
          captured.push({ url: url.replace('https://www.copart.com', ''), status: response.status(), text: text.slice(0, 400) })
        } catch {}
      }
    })

    console.log('Загружаем главную...')
    await page.goto('https://www.copart.com/', { waitUntil: 'networkidle2', timeout: 30000 })
    await new Promise(r => setTimeout(r, 2000))

    console.log('Переходим на поиск BMW...')
    await page.goto('https://www.copart.com/lotSearchResults/?free=true&query=bmw', {
      waitUntil: 'networkidle2', timeout: 30000,
    })
    await new Promise(r => setTimeout(r, 3000))

    console.log(`\nПерехвачено JSON-ответов: ${captured.length}`)
    captured.forEach((c, i) => {
      console.log(`\n[${i+1}] ${c.url} (${c.status})`)
      console.log(c.text)
    })

    // Теперь пробуем разные эндпоинты прямо из браузера
    const endpoints = [
      '/public/lots/search-results/?query=bmw&page=0&size=3',
      '/public/lots/search-results/keywordSearch/BMW?query=bmw&page=0&size=3',
      '/public/userSearchResults/search/car-search-results?free=true&query=bmw&page=0&size=3',
    ]

    console.log('\n\n=== ТЕСТИРУЕМ ЭНДПОИНТЫ ===')
    for (const ep of endpoints) {
      const result = await page.evaluate(async (url) => {
        const res = await fetch(url, {
          headers: { 'Accept': 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
          credentials: 'include',
        })
        const text = await res.text()
        return { status: res.status, snippet: text.slice(0, 600) }
      }, ep)
      console.log(`\nURL: ${ep}`)
      console.log(`Статус: ${result.status}`)
      console.log(`Ответ: ${result.snippet}`)
    }

    // Смотрим что сама страница отображает — есть ли лоты в DOM
    const pageContent = await page.evaluate(() => {
      const titles = Array.from(document.querySelectorAll('.lot-title, .title, [class*="lot"]'))
        .slice(0, 5).map(el => el.textContent?.trim())
      return titles
    })
    console.log('\n\nЛоты на странице (DOM):', pageContent)

  } finally {
    await browser.close()
  }
}

main().catch(console.error)
