import { requestWithRetry, humanDelay } from '../../utils/httpClient.js'
import { warmupCookies } from '../common/browserSession.js'
import { logger } from '../../utils/logger.js'

const SOURCE = 'iaai'

function isBlocked(body) {
  return /_Incapsula_Resource|Access denied|Request unsuccessful/i.test(String(body || ''))
}

function extractJsonFromHtml(html) {
  const nextData = html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i)
  if (nextData?.[1]) {
    try {
      return JSON.parse(nextData[1])
    } catch {}
  }

  const initialState = html.match(/window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\});/i)
  if (initialState?.[1]) {
    try {
      return JSON.parse(initialState[1])
    } catch {}
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
  constructor() {
    this.cookieHeader = ''
  }

  async warmup(itemId = '37926262') {
    this.cookieHeader = await warmupCookies({
      source: SOURCE,
      url: `https://www.iaai.com/vehicledetails/${itemId}`,
      extraHeaders: { referer: 'https://www.iaai.com/' },
    })
    return this.cookieHeader
  }

  async fetchLot(itemId) {
    await humanDelay()

    const url = `https://www.iaai.com/vehicledetails/${itemId}`
    const fetchOnce = async () => requestWithRetry({
      source: SOURCE,
      url,
      expectJson: false,
      headers: {
        referer: 'https://www.iaai.com/',
        ...(this.cookieHeader ? { cookie: this.cookieHeader } : {}),
      },
    })

    let html = await fetchOnce()
    if (isBlocked(html)) {
      logger.warn({ itemId }, 'iaai blocked response, trying browser warmup')
      await this.warmup(itemId)
      html = await fetchOnce()
    }

    if (isBlocked(html)) {
      throw new Error('IAAI response blocked by anti-bot protection')
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
