/**
 * Показывает все поля первого лота из реального ответа поиска Copart
 */
const puppeteer = require('puppeteer-extra')
const Stealth   = require('puppeteer-extra-plugin-stealth')
puppeteer.use(Stealth())

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/123.0.0.0 Safari/537.36')

  let captured = null

  page.on('response', async (res) => {
    if (res.url().includes('/lots/search-results') && !captured) {
      try {
        const json = await res.json()
        const lots = json?.data?.results?.content ?? []
        if (lots.length > 0) captured = lots[0]
      } catch {}
    }
  })

  await page.goto('https://www.copart.com/lotSearchResults/?free=true&query=bmw&size=3', {
    waitUntil: 'networkidle2', timeout: 30000,
  })
  await new Promise(r => setTimeout(r, 2000))
  await browser.close()

  if (!captured) { console.log('Нет данных'); return }

  console.log('=== ВСЕ ПОЛЯ ПЕРВОГО ЛОТА ИЗ ПОИСКА ===')
  Object.entries(captured).forEach(([k, v]) => {
    const display = Array.isArray(v) ? `[Array(${v.length})] ${JSON.stringify(v).slice(0,100)}` : String(v).slice(0,120)
    console.log(`  ${k.padEnd(25)} : ${display}`)
  })
}

main().catch(console.error)
