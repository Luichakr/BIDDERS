import { config } from '../config/index.js'
import { logger } from '../utils/logger.js'
import { nowIso } from '../utils/time.js'
import { extractCopartLots } from '../source/copart/extractor.js'
import { extractIaaiLots } from '../source/iaai/extractor.js'

export class IngestionService {
  constructor(store, lotRepository) {
    this.store = store
    this.lotRepository = lotRepository
    this.isRefreshing = false
  }

  async refresh({ sources = ['copart', 'iaai'], limitPerSource = config.maxLotsPerSource } = {}) {
    if (this.isRefreshing) {
      return { ok: false, message: 'Refresh already in progress' }
    }

    this.isRefreshing = true
    const stats = {}

    try {
      if (sources.includes('copart') && config.enableCopart) {
        const copartLots = await extractCopartLots(limitPerSource)
        stats.copart = await this.lotRepository.upsertFromIngestion(copartLots, 'copart')
      }

      if (sources.includes('iaai') && config.enableIaai) {
        const iaaiLots = await extractIaaiLots(limitPerSource)
        stats.iaai = await this.lotRepository.upsertFromIngestion(iaaiLots, 'iaai')
      }

      const state = await this.store.readState()
      const nextState = {
        ...state,
        lastRefreshAt: nowIso(),
        lastRefreshSources: sources,
        stats,
      }
      await this.store.writeState(nextState)

      return {
        ok: true,
        stats,
        lastRefreshAt: nextState.lastRefreshAt,
      }
    } catch (error) {
      logger.error({ error: String(error) }, 'refresh failed')
      return {
        ok: false,
        message: String(error),
      }
    } finally {
      this.isRefreshing = false
    }
  }
}
