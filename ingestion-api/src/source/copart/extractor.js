import { config } from '../../config/index.js'
import { logger } from '../../utils/logger.js'
import { normalizeCopartLot } from '../../normalizers/copartNormalizer.js'
import { CopartClient } from './client.js'
import { discoverCopartSeeds, discoverReferenceRows } from '../../services/sourceDiscovery/rebrowserDiscovery.js'

function mapReferenceRow(row) {
  return {
    lotId: row.lotId,
    vin: row.vin,
    year: row.year,
    make: row.make,
    modelGroup: row.modelGroup,
    model: row.modelDetail,
    trim: row.trim,
    damageDescription: row.damageDescription,
    secondaryDamage: row.secondaryDamage,
    lotCondCode: row.lotCondCode,
    mileage: row.mileage,
    transmission: row.transmission,
    drivetrain: row.drivetrain,
    fuelType: row.fuelType,
    engine: row.engine,
    bodyStyle: row.bodyStyle,
    exteriorColor: row.exteriorColor,
    hasKeys: row.hasKeys,
    saleStatus: row.saleStatus,
    saleDate: row.saleDate,
    highBid: row.highBid,
    buyItNowPrice: row.buyItNowPrice,
    yardName: row.yardName,
    locationCity: row.locationCity,
    locationState: row.locationState,
    sellerName: row.sellerName,
    imageUrl: row.imageUrl,
    imageThumbnail: row.imageThumbnail,
    listingUrl: row.listingUrl,
    saleTitleType: row.saleTitleType,
    updatedAt: row.updatedAt,
  }
}

export async function extractCopartLots(limit = config.maxLotsPerSource) {
  const client = new CopartClient()
  const seedFromEnv = config.copartSeedLotIds
  const seedFromDiscovery = await discoverCopartSeeds()
  const lotIds = Array.from(new Set([...seedFromEnv, ...seedFromDiscovery])).slice(0, limit)

  const normalized = []
  const errors = []

  for (const lotId of lotIds) {
    try {
      const payload = await client.fetchLot(lotId)
      normalized.push(normalizeCopartLot(payload))
    } catch (error) {
      errors.push({ lotId, error: String(error) })
    }
  }

  if (errors.length) {
    logger.warn({ errors: errors.slice(0, 10), failed: errors.length }, 'copart live extraction had failures')
  }

  if (!normalized.length && config.allowReferenceFallback) {
    const rows = await discoverReferenceRows('copart')
    for (const row of rows.slice(0, limit)) {
      normalized.push(normalizeCopartLot(mapReferenceRow(row)))
    }
    logger.warn({ count: normalized.length }, 'copart fallback dataset used due live extraction failure')
  }

  return normalized
}
