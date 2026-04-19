import path from 'node:path'

const rootDir = path.resolve(process.cwd())

function readBool(name, defaultValue) {
  const raw = process.env[name]
  if (raw === undefined) return defaultValue
  return ['1', 'true', 'yes', 'on'].includes(String(raw).toLowerCase())
}

function readNumber(name, defaultValue) {
  const raw = process.env[name]
  if (raw === undefined || raw === '') return defaultValue
  const n = Number(raw)
  return Number.isFinite(n) ? n : defaultValue
}

function readList(name) {
  const raw = process.env[name]
  if (!raw) return []
  return raw.split(',').map((s) => s.trim()).filter(Boolean)
}

export const config = {
  env: process.env.NODE_ENV || 'development',
  port: readNumber('PORT', 3001),
  logLevel: process.env.LOG_LEVEL || 'info',

  dataDir: path.resolve(rootDir, process.env.DATA_DIR || './data'),
  lotsFile: process.env.LOTS_FILE || 'lots.json',
  stateFile: process.env.STATE_FILE || 'sync-state.json',

  refreshIntervalMinutes: readNumber('REFRESH_INTERVAL_MINUTES', 0),
  maxLotsPerSource: readNumber('MAX_LOTS_PER_SOURCE', 50),
  staleToUnavailableHours: readNumber('STALE_TO_UNAVAILABLE_HOURS', 24),
  unavailableToArchivedHours: readNumber('UNAVAILABLE_TO_ARCHIVED_HOURS', 168),

  enableBrowserWarmup: readBool('ENABLE_BROWSER_WARMUP', true),
  humanDelayMinMs: readNumber('HUMAN_DELAY_MIN_MS', 400),
  humanDelayMaxMs: readNumber('HUMAN_DELAY_MAX_MS', 1200),
  requestTimeoutMs: readNumber('REQUEST_TIMEOUT_MS', 25000),
  maxRetries: readNumber('MAX_RETRIES', 3),
  retryBaseDelayMs: readNumber('RETRY_BASE_DELAY_MS', 750),

  chromeExecutablePath: process.env.CHROME_EXECUTABLE_PATH || '',

  enableCopart: readBool('ENABLE_COPART', true),
  enableIaai: readBool('ENABLE_IAAI', true),
  copartSeedLotIds: readList('COPART_SEED_LOT_IDS'),
  iaaiSeedItemIds: readList('IAAI_SEED_ITEM_IDS'),

  allowReferenceFallback: readBool('ALLOW_REFERENCE_FALLBACK', true),
  referenceMaxRows: readNumber('REFERENCE_MAX_ROWS', 100),
}

export function resolveDataFile(filename) {
  return path.resolve(config.dataDir, filename)
}
