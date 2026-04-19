import { config } from '../config/index.js'
import { nowIso } from '../utils/time.js'
import { validateLotOrThrow } from '../schemas/lotSchema.js'

function hoursBetween(olderIso, newerIso) {
  const older = new Date(olderIso).getTime()
  const newer = new Date(newerIso).getTime()
  return (newer - older) / (1000 * 60 * 60)
}

function deriveStalenessStatus(lot, now) {
  if (lot.status === 'sold' || lot.status === 'archived') return lot.status
  const ageHours = hoursBetween(lot.lastSeenAt, now)
  if (ageHours >= config.unavailableToArchivedHours) return 'archived'
  if (ageHours >= config.staleToUnavailableHours) return 'unavailable'
  return lot.status
}

export class LotRepository {
  constructor(store) {
    this.store = store
  }

  async upsertFromIngestion(sourceLots, sourceName) {
    const existing = await this.store.readLots()
    const existingMap = new Map(existing.map((lot) => [lot.id, lot]))
    const seenNow = new Set()
    const now = nowIso()

    for (const incomingRaw of sourceLots) {
      const incoming = validateLotOrThrow(incomingRaw)
      seenNow.add(incoming.id)

      const current = existingMap.get(incoming.id)
      if (!current) {
        existingMap.set(incoming.id, incoming)
        continue
      }

      existingMap.set(incoming.id, {
        ...current,
        ...incoming,
        firstSeenAt: current.firstSeenAt || incoming.firstSeenAt,
        lastSeenAt: now,
        updatedAt: now,
      })
    }

    for (const [id, lot] of existingMap.entries()) {
      if (lot.source !== sourceName) continue
      if (seenNow.has(id)) continue
      existingMap.set(id, {
        ...lot,
        status: deriveStalenessStatus(lot, now),
        updatedAt: now,
      })
    }

    const merged = Array.from(existingMap.values())
    await this.store.writeLots(merged)

    return {
      total: merged.length,
      sourceUpdated: seenNow.size,
    }
  }

  async listLots(params) {
    const lots = await this.store.readLots()
    let rows = lots

    if (params.source) rows = rows.filter((lot) => lot.source === params.source)
    if (params.status) rows = rows.filter((lot) => lot.status === params.status)
    if (params.make) rows = rows.filter((lot) => String(lot.make || '').toLowerCase() === String(params.make).toLowerCase())
    if (params.model) rows = rows.filter((lot) => String(lot.model || '').toLowerCase() === String(params.model).toLowerCase())
    if (params.locationState) rows = rows.filter((lot) => String(lot.locationState || '').toLowerCase() === String(params.locationState).toLowerCase())

    if (params.yearFrom !== undefined) rows = rows.filter((lot) => (lot.year || 0) >= params.yearFrom)
    if (params.yearTo !== undefined) rows = rows.filter((lot) => (lot.year || 0) <= params.yearTo)

    const sortBy = params.sortBy || 'updatedAt'
    const sortDir = params.sortDir === 'asc' ? 1 : -1

    rows = rows.sort((a, b) => {
      const av = a[sortBy]
      const bv = b[sortBy]
      if (av === bv) return 0
      if (av === null || av === undefined) return 1
      if (bv === null || bv === undefined) return -1
      if (av > bv) return 1 * sortDir
      return -1 * sortDir
    })

    const page = Math.max(1, params.page || 1)
    const pageSize = Math.min(200, Math.max(1, params.pageSize || 20))
    const offset = (page - 1) * pageSize
    const slice = rows.slice(offset, offset + pageSize)

    return {
      data: slice,
      meta: {
        total: rows.length,
        page,
        pageSize,
        pages: Math.ceil(rows.length / pageSize) || 1,
      },
    }
  }

  async getLotById(id) {
    const lots = await this.store.readLots()
    return lots.find((lot) => lot.id === id || lot.lotId === id) || null
  }

  async getFilters() {
    const lots = await this.store.readLots()
    const collect = (key) => Array.from(new Set(lots.map((lot) => lot[key]).filter(Boolean))).sort()

    return {
      sources: collect('source'),
      makes: collect('make'),
      models: collect('model'),
      statuses: collect('status'),
      states: collect('locationState'),
      years: collect('year'),
    }
  }
}
