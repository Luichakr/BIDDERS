import fs from 'node:fs/promises'
import path from 'node:path'
import { config, resolveDataFile } from '../../config/index.js'
import { logger } from '../../utils/logger.js'

async function ensureDirExists() {
  await fs.mkdir(config.dataDir, { recursive: true })
}

async function readJsonFile(filePath, fallback) {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(content)
  } catch {
    return fallback
  }
}

async function writeJsonFileAtomic(filePath, payload) {
  const tempFile = `${filePath}.tmp`
  await fs.writeFile(tempFile, JSON.stringify(payload, null, 2), 'utf-8')
  await fs.rename(tempFile, filePath)
}

export class FileStore {
  constructor() {
    this.lotsPath = resolveDataFile(config.lotsFile)
    this.statePath = resolveDataFile(config.stateFile)
  }

  async init() {
    await ensureDirExists()

    const initialLots = await this.readLots()
    if (!Array.isArray(initialLots)) {
      await writeJsonFileAtomic(this.lotsPath, [])
    }

    const initialState = await this.readState()
    if (!initialState || typeof initialState !== 'object') {
      await writeJsonFileAtomic(this.statePath, {
        lastRefreshAt: null,
        lastRefreshSources: [],
        stats: {},
      })
    }

    logger.info({ dataDir: path.resolve(config.dataDir) }, 'file store initialized')
  }

  async readLots() {
    return readJsonFile(this.lotsPath, [])
  }

  async writeLots(lots) {
    await writeJsonFileAtomic(this.lotsPath, lots)
  }

  async readState() {
    return readJsonFile(this.statePath, {
      lastRefreshAt: null,
      lastRefreshSources: [],
      stats: {},
    })
  }

  async writeState(state) {
    await writeJsonFileAtomic(this.statePath, state)
  }
}
