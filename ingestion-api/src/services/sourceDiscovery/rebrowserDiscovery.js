import { parse } from 'csv-parse/sync'
import { config } from '../../config/index.js'
import { requestWithRetry } from '../../utils/httpClient.js'
import { logger } from '../../utils/logger.js'

async function listCsvUrls(owner, repo) {
  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/auction-listings/data`
  const payload = await requestWithRetry({ url: apiUrl, expectJson: true, source: `${repo}-discovery` })
  const csvFiles = payload
    .filter((item) => item.name.endsWith('.csv'))
    .sort((a, b) => b.name.localeCompare(a.name))
    .map((item) => item.download_url)
  return csvFiles
}

async function fetchRows(csvUrl, maxRows = config.referenceMaxRows) {
  const csv = await requestWithRetry({ url: csvUrl, expectJson: false, source: 'rebrowser-csv' })
  const rows = parse(csv, { columns: true, skip_empty_lines: true })
  if (!Number.isFinite(maxRows) || maxRows <= 0) return rows
  return rows.slice(0, maxRows)
}

function normalizeId(value) {
  return String(value || '').trim().replace(/\D/g, '')
}

export async function discoverCopartSeeds() {
  try {
    const csvUrls = await listCsvUrls('rebrowser', 'copart-dataset')
    for (const csvUrl of csvUrls) {
      const rows = await fetchRows(csvUrl)
      const lotIds = rows.map((r) => String(r.lotId || '')).filter(Boolean)
      if (lotIds.length) {
        logger.info({ count: lotIds.length }, 'copart seeds discovered from rebrowser sample')
        return lotIds
      }
    }
    return []
  } catch (error) {
    logger.warn({ error: String(error) }, 'failed to discover copart seeds')
    return []
  }
}

export async function discoverIaaiSeeds() {
  try {
    const csvUrls = await listCsvUrls('rebrowser', 'iaai-dataset')
    for (const csvUrl of csvUrls) {
      const rows = await fetchRows(csvUrl)
      const itemIds = rows.map((r) => String(r.itemId || '')).filter(Boolean)
      if (itemIds.length) {
        logger.info({ count: itemIds.length }, 'iaai seeds discovered from rebrowser sample')
        return itemIds
      }
    }
    return []
  } catch (error) {
    logger.warn({ error: String(error) }, 'failed to discover iaai seeds')
    return []
  }
}

export async function discoverReferenceRows(source) {
  const repo = source === 'copart' ? 'copart-dataset' : 'iaai-dataset'
  try {
    const csvUrls = await listCsvUrls('rebrowser', repo)
    for (const csvUrl of csvUrls) {
      const rows = await fetchRows(csvUrl)
      if (rows.length) return rows
    }
    return []
  } catch (error) {
    logger.warn({ source, error: String(error) }, 'failed to fetch reference rows')
    return []
  }
}

export async function discoverReferenceRowById(source, id) {
  const target = normalizeId(id)
  if (!target) return null

  const repo = source === 'copart' ? 'copart-dataset' : 'iaai-dataset'

  try {
    const csvUrls = await listCsvUrls('rebrowser', repo)
    for (const csvUrl of csvUrls) {
      const rows = await fetchRows(csvUrl, Number.POSITIVE_INFINITY)
      const hit = rows.find((row) => {
        if (source === 'iaai') {
          const itemId = normalizeId(row.itemId)
          const stockNumber = normalizeId(row.stockNumber)
          return itemId === target || stockNumber === target
        }

        const lotId = normalizeId(row.lotId)
        return lotId === target
      })

      if (hit) {
        logger.info({ source, id: target, csvUrl }, 'reference row found by id')
        return hit
      }
    }
    return null
  } catch (error) {
    logger.warn({ source, id: target, error: String(error) }, 'failed to discover reference row by id')
    return null
  }
}
