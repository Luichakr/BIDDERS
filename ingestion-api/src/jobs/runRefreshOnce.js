import { FileStore } from '../services/storage/fileStore.js'
import { LotRepository } from '../services/lotRepository.js'
import { IngestionService } from '../services/ingestionService.js'
import { logger } from '../utils/logger.js'

async function main() {
  const store = new FileStore()
  await store.init()
  const repository = new LotRepository(store)
  const ingestionService = new IngestionService(store, repository)

  const result = await ingestionService.refresh()
  logger.info({ result }, 'manual refresh finished')
}

main().catch((error) => {
  logger.error({ error: String(error) }, 'manual refresh failed')
  process.exitCode = 1
})
