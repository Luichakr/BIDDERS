import { config } from '../config/index.js'
import { sleep, randomInt } from './time.js'
import { logger } from './logger.js'

function makeAbortSignal(timeoutMs) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
  return { signal: controller.signal, timeoutId }
}

function normalizeHeaders(headers = {}) {
  return {
    'user-agent': headers['user-agent'] || 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    accept: headers.accept || 'application/json,text/html;q=0.9,*/*;q=0.8',
    ...headers,
  }
}

export async function requestWithRetry({ url, method = 'GET', headers = {}, body, expectJson = false, source = 'unknown' }) {
  const maxAttempts = Math.max(1, config.maxRetries)
  let lastError = null

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const { signal, timeoutId } = makeAbortSignal(config.requestTimeoutMs)
    try {
      const response = await fetch(url, {
        method,
        headers: normalizeHeaders(headers),
        body,
        signal,
      })
      clearTimeout(timeoutId)

      const text = await response.text()
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}: ${text.slice(0, 260)}`)
      }

      if (expectJson) {
        try {
          return JSON.parse(text)
        } catch {
          throw new Error(`Expected JSON, got: ${text.slice(0, 260)}`)
        }
      }

      return text
    } catch (error) {
      clearTimeout(timeoutId)
      lastError = error
      if (attempt === maxAttempts) break
      const backoff = config.retryBaseDelayMs * 2 ** (attempt - 1)
      const jitter = randomInt(80, 350)
      logger.warn({ source, attempt, url, error: String(error), waitMs: backoff + jitter }, 'request failed, retrying')
      await sleep(backoff + jitter)
    }
  }

  throw lastError || new Error(`Request failed: ${url}`)
}

export async function humanDelay() {
  const wait = randomInt(config.humanDelayMinMs, config.humanDelayMaxMs)
  await sleep(wait)
}
