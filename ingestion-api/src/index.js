import { config } from './config/index.js'
import { logger } from './utils/logger.js'
import { createServer } from './api/server.js'
import { FileStore } from './services/storage/fileStore.js'
import { LotRepository } from './services/lotRepository.js'
import { IngestionService } from './services/ingestionService.js'
import { startRefreshLoop } from './jobs/refreshJob.js'

async function bootstrap() {
  const store = new FileStore()
  await store.init()

  const lotRepository = new LotRepository(store)
  const ingestionService = new IngestionService(store, lotRepository)

  const app = createServer({ store, lotRepository, ingestionService })
  app.listen(config.port, () => {
    logger.info({ port: config.port }, 'ingestion api is running')
  })

  startRefreshLoop(ingestionService)
}

bootstrap().catch((error) => {
  logger.error({ error: String(error) }, 'bootstrap failed')
  process.exitCode = 1
})
