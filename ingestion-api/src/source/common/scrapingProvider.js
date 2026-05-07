import { config } from '../../config/index.js'
import { requestWithRetry } from '../../utils/httpClient.js'
import { logger } from '../../utils/logger.js'

function buildZenRowsUrl(targetUrl) {
  const u = new URL('https://api.zenrows.com/v1/')
  u.searchParams.set('apikey', config.zenrowsApiKey)
  u.searchParams.set('url', targetUrl)
  u.searchParams.set('js_render', 'true')
  u.searchParams.set('premium_proxy', 'true')
  return u.toString()
}

function buildScrapingBeeUrl(targetUrl) {
  const u = new URL('https://app.scrapingbee.com/api/v1/')
  u.searchParams.set('api_key', config.scrapingBeeApiKey)
  u.searchParams.set('url', targetUrl)
  u.searchParams.set('render_js', 'true')
  u.searchParams.set('premium_proxy', 'true')
  return u.toString()
}

export async function fetchWithScrapingProvider({ source, url }) {
  const attempts = []

  if (config.zenrowsApiKey) {
    attempts.push({ name: 'zenrows', url: buildZenRowsUrl(url) })
  }
  if (config.scrapingBeeApiKey) {
    attempts.push({ name: 'scrapingbee', url: buildScrapingBeeUrl(url) })
  }

  for (const provider of attempts) {
    try {
      const html = await requestWithRetry({
        source: `${source}-${provider.name}`,
        url: provider.url,
        expectJson: false,
      })
      logger.info({ source, provider: provider.name }, 'scraping provider fetch completed')
      return html
    } catch (error) {
      logger.warn({ source, provider: provider.name, err: String(error) }, 'scraping provider fetch failed')
    }
  }

  return null
}
