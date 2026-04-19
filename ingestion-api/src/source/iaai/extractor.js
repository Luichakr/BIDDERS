import { config } from '../../config/index.js'
import { logger } from '../../utils/logger.js'
import { normalizeIaaiLot } from '../../normalizers/iaaiNormalizer.js'
import { IaaiClient } from './client.js'
import { discoverIaaiSeeds, discoverReferenceRows } from '../../services/sourceDiscovery/rebrowserDiscovery.js'

function mapReferenceRow(row) {
  return {
    stockNumber: row.stockNumber,
    itemId: row.itemId,
    salvageId: row.salvageId,
    vin: row.vin,
    year: row.year,
    make: row.make,
    model: row.model,
    series: row.series,
    bodyStyle: row.bodyStyle,
    exteriorColor: row.exteriorColor,
    engine: row.engine,
    transmission: row.transmission,
    drivetrain: row.drivetrain,
    fuelType: row.fuelType,
    primaryDamage: row.primaryDamage,
    secondaryDamage: row.secondaryDamage,
    titleCode: row.titleCode,
    hasKeys: row.hasKeys,
    runAndDrive: row.runAndDrive,
    startsDesc: row.startsDesc,
    mileage: row.mileage,
    odometerBrand: row.odometerBrand,
    odometerUnit: row.odometerUnit,
    buyNowPrice: row.buyNowPrice,
    minimumBidAmount: row.minimumBidAmount,
    auctionDateTime: row.auctionDateTime,
    inventoryStatus: row.inventoryStatus,
    branchName: row.branchName,
    locationName: row.locationName,
    locationCity: row.locationCity,
    locationState: row.locationState,
    sellerName: row.sellerName,
    imageUrl: row.imageUrl,
    listingUrl: row.listingUrl,
    updatedAt: row.updatedAt,
  }
}

export async function extractIaaiLots(limit = config.maxLotsPerSource) {
  const client = new IaaiClient()
  const seedFromEnv = config.iaaiSeedItemIds
  const seedFromDiscovery = await discoverIaaiSeeds()
  const itemIds = Array.from(new Set([...seedFromEnv, ...seedFromDiscovery])).slice(0, limit)

  const normalized = []
  const errors = []

  for (const itemId of itemIds) {
    try {
      const payload = await client.fetchLot(itemId)
      normalized.push(normalizeIaaiLot(payload))
    } catch (error) {
      errors.push({ itemId, error: String(error) })
    }
  }

  if (errors.length) {
    logger.warn({ errors: errors.slice(0, 10), failed: errors.length }, 'iaai live extraction had failures')
  }

  if (!normalized.length && config.allowReferenceFallback) {
    const rows = await discoverReferenceRows('iaai')
    for (const row of rows.slice(0, limit)) {
      normalized.push(normalizeIaaiLot(mapReferenceRow(row)))
    }
    logger.warn({ count: normalized.length }, 'iaai fallback dataset used due live extraction failure')
  }

  return normalized
}
