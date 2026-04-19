import express from 'express'
import cors from 'cors'
import pinoHttp from 'pino-http'
import { logger } from '../utils/logger.js'
import { createHealthRouter } from './routes/health.js'
import { createLotsRouter } from './routes/lots.js'
import { createAdminRouter } from './routes/admin.js'

export function createServer({ store, lotRepository, ingestionService }) {
  const app = express()

  app.use(cors())
  app.use(express.json({ limit: '2mb' }))
  app.use(pinoHttp({ logger }))

  app.use('/api', createHealthRouter({ store }))
  app.use('/api', createLotsRouter({ lotRepository }))
  app.use('/api', createAdminRouter({ ingestionService }))

  app.use((error, _req, res, _next) => {
    logger.error({ error: String(error) }, 'unhandled api error')
    res.status(500).json({ error: 'Internal server error' })
  })

  return app
}
