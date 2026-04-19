import { Router } from 'express'

export function createAdminRouter({ ingestionService }) {
  const router = Router()

  router.post('/admin/refresh', async (req, res) => {
    const body = req.body || {}
    const sources = Array.isArray(body.sources) && body.sources.length ? body.sources : ['copart', 'iaai']
    const limitPerSource = Number.isFinite(Number(body.limitPerSource)) ? Number(body.limitPerSource) : undefined

    const result = await ingestionService.refresh({ sources, limitPerSource })
    if (!result.ok) return res.status(500).json(result)
    return res.json(result)
  })

  return router
}
