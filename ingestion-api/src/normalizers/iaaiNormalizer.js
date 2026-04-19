import { baseLot, boolToYesNo, normalizeDate, normalizeImageSet, sanitizeUrl, toNumberOrNull } from './common.js'

export function normalizeIaaiLot(raw, firstSeenAt) {
  const lotIdValue = String(raw?.stockNumber || raw?.itemId || raw?.lotId || '')
  const lot = baseLot({ source: 'iaai', lotIdValue, firstSeenAt, rawSourcePayload: raw })

  const images = [raw?.imageUrl, raw?.mainImageUrl, ...(raw?.images || [])]
  const imageSet = normalizeImageSet(images)

  lot.externalId = raw?.itemId ? String(raw.itemId) : null
  lot.url = sanitizeUrl(raw?.listingUrl) || (raw?.itemId ? `https://www.iaai.com/vehicledetails/${raw.itemId}` : null)
  lot.vin = raw?.vin || null
  lot.year = toNumberOrNull(raw?.year)
  lot.make = raw?.make || null
  lot.model = raw?.model || null
  lot.trim = raw?.series || raw?.trim || null
  lot.title = [lot.year, lot.make, lot.model, lot.trim].filter(Boolean).join(' ') || null
  lot.damagePrimary = raw?.primaryDamage || null
  lot.damageSecondary = raw?.secondaryDamage || null
  lot.condition = raw?.vehicleCondition || raw?.startsDesc || null
  lot.odometer = toNumberOrNull(raw?.mileage)
  lot.odometerUnit = raw?.odometerUnit || 'mi'
  lot.transmission = raw?.transmission || null
  lot.drivetrain = raw?.drivetrain || null
  lot.fuel = raw?.fuelType || null
  lot.engine = raw?.engine || null
  lot.bodyStyle = raw?.bodyStyle || null
  lot.color = raw?.exteriorColor || null
  lot.keys = raw?.hasKeys !== undefined ? boolToYesNo(raw.hasKeys) : null
  lot.saleStatus = raw?.inventoryStatus || raw?.saleStatus || null
  lot.saleDate = normalizeDate(raw?.auctionDateTime || raw?.saleDate)
  lot.currentBid = toNumberOrNull(raw?.minimumBidAmount || raw?.currentBid)
  lot.buyNowPrice = toNumberOrNull(raw?.buyNowPrice)
  lot.locationName = raw?.locationName || raw?.branchName || null
  lot.locationCity = raw?.locationCity || null
  lot.locationState = raw?.locationState || raw?.branchState || null
  lot.seller = raw?.sellerName || null
  lot.titleStatus = raw?.titleCode || raw?.titleType || null
  lot.images = imageSet.images
  lot.mainImage = imageSet.mainImage
  lot.imageCount = imageSet.imageCount

  if (/sold|closed/i.test(String(lot.saleStatus || ''))) {
    lot.status = 'sold'
  } else if (/live|ready|auction/i.test(String(lot.saleStatus || ''))) {
    lot.status = 'live'
  } else {
    lot.status = 'active'
  }

  return lot
}
