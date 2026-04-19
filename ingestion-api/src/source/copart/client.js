import { requestWithRetry, humanDelay } from '../../utils/httpClient.js'
import { warmupCookies } from '../common/browserSession.js'
import { logger } from '../../utils/logger.js'

const SOURCE = 'copart'

function isBlocked(body) {
  return /_Incapsula_Resource|Request unsuccessful|Hacking attempt|Access denied/i.test(String(body || ''))
}

function parseCopartPayload(bodyText) {
  try {
    const parsed = JSON.parse(bodyText)
    if (parsed?.data?.lotDetails) {
      return {
        ...parsed.data.lotDetails,
        lotId: parsed?.data?.lotDetails?.ln || parsed?.data?.lotDetails?.lotNumber,
        listingUrl: parsed?.data?.lotDetails?.link || null,
      }
    }
    if (parsed?.data) return parsed.data
    return parsed
  } catch {
    return null
  }
}

export class CopartClient {
  constructor() {
    this.cookieHeader = ''
  }

  async warmup(lotIdForWarmup = '99854965') {
    this.cookieHeader = await warmupCookies({
      source: SOURCE,
      url: `https://www.copart.com/public/data/lotdetails/solr/${lotIdForWarmup}`,
    })
    return this.cookieHeader
  }

  async fetchLot(lotId) {
    await humanDelay()
    const url = `https://www.copart.com/public/data/lotdetails/solr/${lotId}`

    const fetchOnce = async () => {
      const text = await requestWithRetry({
        source: SOURCE,
        url,
        expectJson: false,
        headers: this.cookieHeader ? { cookie: this.cookieHeader } : {},
      })
      return text
    }

    let body = await fetchOnce()
    if (isBlocked(body)) {
      logger.warn({ lotId }, 'copart blocked response, trying browser warmup')
      await this.warmup(lotId)
      body = await fetchOnce()
    }

    if (isBlocked(body)) {
      throw new Error('Copart response blocked by anti-bot protection')
    }

    const parsed = parseCopartPayload(body)
    if (!parsed) {
      throw new Error('Copart payload is not JSON')
    }

    return parsed
  }
}
