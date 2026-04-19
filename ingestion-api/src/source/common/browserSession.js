import puppeteer from 'puppeteer-core'
import { existsSync } from 'node:fs'
import { config } from '../../config/index.js'
import { logger } from '../../utils/logger.js'
import { sleep } from '../../utils/time.js'

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
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36')
    await page.setExtraHTTPHeaders(extraHeaders)
    await page.goto(url, { waitUntil: 'networkidle2', timeout: config.requestTimeoutMs })
    await sleep(1500)

    const cookies = await page.cookies()
    const cookieHeader = cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ')
    logger.info({ source, cookies: cookies.length }, 'browser warmup completed')
    return cookieHeader
  } catch (error) {
    logger.warn({ source, error: String(error) }, 'browser warmup failed')
    return ''
  } finally {
    await browser.close()
  }
}
