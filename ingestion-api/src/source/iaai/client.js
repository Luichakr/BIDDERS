import { requestWithRetry, humanDelay } from '../../utils/httpClient.js'
import { fetchWithScrapingProvider } from '../common/scrapingProvider.js'
import { logger } from '../../utils/logger.js'

const SOURCE = 'iaai'

const BROWSER_HEADERS = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
  'sec-fetch-dest': 'document',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'upgrade-insecure-requests': '1',
  referer: 'https://www.iaai.com/',
}

function isBlocked(body) {
  return /_Incapsula_Resource|Access denied|Request unsuccessful/i.test(String(body || ''))
}

function extractJsonFromHtml(html) {
  const nextData = html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i)
  if (nextData?.[1]) {
    try { return JSON.parse(nextData[1]) } catch {}
  }

  const initialState = html.match(/window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\});/i)
  if (initialState?.[1]) {
    try { return JSON.parse(initialState[1]) } catch {}
  }

  return null
}

function pickVehicleObject(parsed) {
  if (!parsed) return null
  const queue = [parsed]
  const seen = new Set()

  while (queue.length) {
    const cur = queue.shift()
    if (!cur || typeof cur !== 'object') continue
    if (seen.has(cur)) continue
    seen.add(cur)

    if (cur.stockNumber || cur.itemId || cur.salvageId || cur.vehicleDetails || cur.year) {
      if (cur.vehicleDetails && typeof cur.vehicleDetails === 'object') return cur.vehicleDetails
      if (cur.vehicle && typeof cur.vehicle === 'object') return cur.vehicle
      return cur
    }

    for (const val of Object.values(cur)) {
      if (val && typeof val === 'object') queue.push(val)
    }
  }
  return null
}

function extractFallbackFromHtml(html, itemId) {
  const title = html.match(/<title>(.*?)<\/title>/i)?.[1] || null
  const yearMatch = title?.match(/\b(19|20)\d{2}\b/)

  return {
    itemId: String(itemId),
    stockNumber: String(itemId),
    title,
    year: yearMatch ? Number(yearMatch[0]) : null,
    listingUrl: `https://www.iaai.com/vehicledetails/${itemId}`,
  }
}

export class IaaiClient {
  async fetchLot(itemId) {
    await humanDelay()

    const url = `https://www.iaai.com/vehicledetails/${itemId}`

    // 1. Try plain HTTP fetch first (fast path)
    let html
    try {
      html = await requestWithRetry({
        source: SOURCE,
        url,
        expectJson: false,
        headers: BROWSER_HEADERS,
      })
    } catch (err) {
      logger.warn({ itemId, err: String(err) }, 'iaai plain fetch failed')
      html = null
    }

    // 2. Try a server-side anti-bot provider (browserless from user perspective).
    if (!html || isBlocked(html)) {
      const providerHtml = await fetchWithScrapingProvider({ source: SOURCE, url })
      if (!providerHtml || isBlocked(providerHtml)) {
        throw new Error('IAAI response blocked by anti-bot protection')
      }
      html = providerHtml
    }

    const parsed = extractJsonFromHtml(html)
    const vehicle = pickVehicleObject(parsed)
    if (vehicle) {
      return {
        ...vehicle,
        itemId: vehicle.itemId || String(itemId),
        stockNumber: vehicle.stockNumber || vehicle.itemId || String(itemId),
        listingUrl: vehicle.listingUrl || url,
      }
    }

    return extractFallbackFromHtml(html, itemId)
  }
}
