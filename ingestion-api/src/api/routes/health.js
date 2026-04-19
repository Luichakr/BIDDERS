import { Router } from 'express'

export function createHealthRouter({ store }) {
  const router = Router()

  router.get('/health', async (_req, res) => {
    const state = await store.readState()
    return res.json({
      ok: true,
      service: 'bidders-ingestion-api',
      now: new Date().toISOString(),
      lastRefreshAt: state.lastRefreshAt,
      stats: state.stats || {},
    })
  })

  return router
}
