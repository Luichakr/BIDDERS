/**
 * Смотрим структуру detail-ответа — что приходит в imgs/photos
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

  const lots = require('../../public/data/lots.json')
  const lotId = lots[0].id
  console.log('Проверяем лот:', lotId)

  const page = await browser.newPage()
  await page.setUserAgent(USER_AGENT)
  await page.setViewport({ width: 1440, height: 900 })

  let rawJson = null

  // Ловим ВСЕ JSON-ответы
  page.on('response', async (response) => {
    const url = response.url()
    const ct = response.headers()['content-type'] ?? ''
    if (!ct.includes('json')) return
    try {
      const text = await response.text()
      if (text.length > 100) {
        console.log(`\n[JSON] ${url.replace('https://www.copart.com','').slice(0,80)} (${text.length} bytes)`)
        // Показываем первые 500 символов
        console.log(text.slice(0, 500))
        if (url.includes('lotdetail') || url.includes('solr')) {
          rawJson = JSON.parse(text)
        }
      }
    } catch {}
  })

  await page.goto(`https://www.copart.com/lot/${lotId}`, {
    waitUntil: 'networkidle2', timeout: 25000,
  })
  await new Promise(r => setTimeout(r, 3000))
  await browser.close()

  if (rawJson) {
    console.log('\n=== СТРУКТУРА LOT DETAIL ===')
    // Рекурсивно показываем ключи
    function showKeys(obj, depth = 0) {
      if (depth > 3 || !obj || typeof obj !== 'object') return
      for (const [k, v] of Object.entries(obj)) {
        const indent = '  '.repeat(depth)
        if (Array.isArray(v)) {
          console.log(`${indent}${k}: Array(${v.length})`, v.length > 0 ? JSON.stringify(v[0]).slice(0,100) : '')
        } else if (v && typeof v === 'object') {
          console.log(`${indent}${k}: {`)
          showKeys(v, depth + 1)
          console.log(`${indent}}`)
        } else {
          console.log(`${indent}${k}: ${String(v).slice(0,100)}`)
        }
      }
    }
    showKeys(rawJson)
  }
}

main().catch(console.error)
