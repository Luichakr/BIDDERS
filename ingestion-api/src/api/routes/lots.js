import { Router } from 'express'

function toNumber(value) {
  if (value === undefined || value === null || value === '') return undefined
  const n = Number(value)
  return Number.isFinite(n) ? n : undefined
}

export function createLotsRouter({ lotRepository }) {
  const router = Router()

  router.get('/lots', async (req, res) => {
    const result = await lotRepository.listLots({
      source: req.query.source,
      status: req.query.status,
      make: req.query.make,
      model: req.query.model,
      locationState: req.query.locationState,
      yearFrom: toNumber(req.query.yearFrom),
      yearTo: toNumber(req.query.yearTo),
      page: toNumber(req.query.page),
      pageSize: toNumber(req.query.pageSize),
      sortBy: req.query.sortBy,
      sortDir: req.query.sortDir,
    })

    return res.json(result)
  })

  router.get('/lots/:id', async (req, res) => {
    const lot = await lotRepository.getLotById(req.params.id)
    if (!lot) return res.status(404).json({ error: 'Lot not found' })
    return res.json({ data: lot })
  })

  router.get('/filters', async (_req, res) => {
    const filters = await lotRepository.getFilters()
    return res.json({ data: filters })
  })

  return router
}
