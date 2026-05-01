const puppeteer = require('puppeteer-extra')
const Stealth = require('puppeteer-extra-plugin-stealth')
puppeteer.use(Stealth())

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function main() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage'] })
  const page = await browser.newPage()
  await page.setUserAgent(UA)
  await page.setViewport({ width: 1440, height: 900 })

  // Перехватываем REQUEST — смотрим точный POST body
  await page.setRequestInterception(true)
  const capturedRequests = []

  page.on('request', req => {
    const url = req.url()
    if (url.includes('search-results') || url.includes('lotSearchResults')) {
      const body = req.postData()
      const headers = req.headers()
      capturedRequests.push({ url, method: req.method(), body, headers })
      console.log(`\n[REQ] ${req.method()} ${url}`)
      if (body) console.log('[BODY]', body.slice(0, 1000))
    }
    req.continue()
  })

  // Перехватываем RESPONSE
  page.on('response', async res => {
    const url = res.url()
    if (url.includes('search-results')) {
      try {
        const json = await res.json()
        const content = json?.data?.results?.content ?? []
        const bin = content.filter(l => Number(l.bnp ?? l.bn ?? l.buyItNowPrice ?? 0) > 0)
        console.log(`[RES] ${url.slice(0,80)} → ${content.length} лотов, BIN: ${bin.length}`)
        if (bin.length > 0) {
          console.log('[BIN SAMPLE KEYS]', Object.keys(bin[0]).slice(0, 30).join(', '))
        }
      } catch {}
    }
  })

  // Прогрев
  console.log('Прогрев...')
  await page.goto('https://www.copart.com/', { waitUntil: 'networkidle2', timeout: 30000 })
  await sleep(2000)

  // Поиск без фильтра — перехватываем базовый запрос
  console.log('\nПоиск без фильтра...')
  await page.goto('https://www.copart.com/lotSearchResults/?free=true&query=*&size=20', { waitUntil: 'networkidle2', timeout: 35000 })
  await sleep(3000)

  // Пробуем найти Buy It Now фильтр в DOM
  console.log('\nИщем Buy It Now фильтр в DOM...')
  const binLinks = await page.evaluate(() => {
    // Ищем всё что содержит BUY или Buy Now
    const all = document.querySelectorAll('[class*="filter"], [data-value], input[type="checkbox"], a')
    const found = []
    all.forEach(el => {
      const text = (el.textContent || el.getAttribute('data-value') || el.value || '').toLowerCase()
      if (text.includes('buy') || text.includes('bin') || text.includes('quick')) {
        found.push({
          tag: el.tagName,
          text: el.textContent?.trim().slice(0, 50),
          dataValue: el.getAttribute('data-value'),
          href: el.href,
          class: el.className?.slice(0, 50)
        })
      }
    })
    return found.slice(0, 20)
  })
  console.log('Buy Now элементы:', JSON.stringify(binLinks, null, 2))

  // Куки для прямых запросов
  const cookies = await page.cookies()
  const cookieStr = cookies.map(c => `${c.name}=${c.value}`).join('; ')
  console.log('\n=== COOKIES (для curl) ===')
  console.log(cookieStr.slice(0, 500))

  // Headers которые браузер шлёт
  if (capturedRequests.length > 0) {
    console.log('\n=== HEADERS первого запроса ===')
    const h = capturedRequests[0].headers
    const important = ['authorization', 'x-requested-with', 'content-type', 'accept', 'origin', 'referer']
    important.forEach(k => { if (h[k]) console.log(`${k}: ${h[k]}`) })
  }

  await browser.close()
  console.log(`\nВсего перехвачено запросов: ${capturedRequests.length}`)
}

main().catch(e => { console.error(e.message); process.exit(1) })
