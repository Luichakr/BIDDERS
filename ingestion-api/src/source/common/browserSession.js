import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { existsSync } from 'node:fs'
import { config } from '../../config/index.js'
import { logger } from '../../utils/logger.js'
import { sleep } from '../../utils/time.js'

puppeteer.use(StealthPlugin())

const DEFAULT_CHROME_PATHS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
]

function resolveExecutablePath() {
  if (config.chromeExecutablePath) return config.chromeExecutablePath
  return DEFAULT_CHROME_PATHS.find((p) => existsSync(p))
}

/**
 * Fetch a page HTML using a real browser (bypasses Incapsula/Cloudflare).
 * Returns the full HTML string, or throws on failure.
 */
export async function fetchWithBrowser({ source, url, waitMs = 3000 }) {
  const executablePath = resolveExecutablePath()
  if (!executablePath) {
    throw new Error('Browser fetch skipped: no Chrome executable found')
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: false,   // ← visible window: bypasses Incapsula GPU/canvas checks
    defaultViewport: null,
    args: [
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1366,768',
      '--window-position=0,0',
    ],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768 })
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    )
    await page.setExtraHTTPHeaders({
      'accept-language': 'en-US,en;q=0.9',
    })

    // Stealth overrides: hide CDP/webdriver signals
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined })
      Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] })
      Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] })
      window.chrome = { runtime: {}, loadTimes: () => {}, csi: () => {}, app: {} }
      // Delete automation flags
      delete window.__nightmare
      delete window._phantom
      delete window.callPhantom
    })

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: config.requestTimeoutMs })

    // Poll until Incapsula challenge resolves (URL changes or page has real content)
    const deadline = Date.now() + waitMs
    let html = await page.content()
    while (/_Incapsula_Resource|main-iframe/i.test(html) && Date.now() < deadline) {
      await sleep(800)
      html = await page.content()
    }

    if (/_Incapsula_Resource|main-iframe/i.test(html)) {
      logger.warn({ source, url }, 'incapsula challenge still active after wait')
    }

    logger.info({ source, url, htmlLen: html.length }, 'browser fetch completed')
    return html
  } catch (error) {
    logger.warn({ source, url, error: String(error) }, 'browser fetch failed')
    throw error
  } finally {
    await browser.close()
  }
}

/**
 * Legacy: warmupCookies — kept for backward compat but now uses fetchWithBrowser internally.
 */
export async function warmupCookies({ source, url, extraHeaders = {} }) {
  if (!config.enableBrowserWarmup) return ''

  const executablePath = resolveExecutablePath()
  if (!executablePath) {
    logger.warn({ source }, 'browser warmup skipped: no Chrome executable found')
    return ''
  }

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1366,768',
    ],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768 })
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    )
    await page.setExtraHTTPHeaders({
      'accept-language': 'en-US,en;q=0.9',
      ...extraHeaders,
    })
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => undefined })
      window.chrome = { runtime: {} }
    })

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: config.requestTimeoutMs })
    await sleep(3500)

    const cookies = await page.cookies()
    const cookieHeader = cookies.map((c) => `${c.name}=${c.value}`).join('; ')
    logger.info({ source, cookies: cookies.length }, 'browser warmup completed')
    return cookieHeader
  } catch (error) {
    logger.warn({ source, error: String(error) }, 'browser warmup failed')
    return ''
  } finally {
    await browser.close()
  }
}
