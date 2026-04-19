import { config } from '../config/index.js'
import { logger } from '../utils/logger.js'

export function startRefreshLoop(ingestionService) {
  if (!config.refreshIntervalMinutes || config.refreshIntervalMinutes <= 0) {
    logger.info('refresh loop disabled (REFRESH_INTERVAL_MINUTES=0)')
    return { stop: () => {} }
  }

  const intervalMs = config.refreshIntervalMinutes * 60 * 1000
  const timer = setInterval(async () => {
    const result = await ingestionService.refresh({
      sources: ['copart', 'iaai'],
      limitPerSource: config.maxLotsPerSource,
    })
    logger.info({ result }, 'scheduled refresh completed')
  }, intervalMs)

  logger.info({ intervalMs }, 'refresh loop started')

  return {
    stop: () => clearInterval(timer),
  }
}
