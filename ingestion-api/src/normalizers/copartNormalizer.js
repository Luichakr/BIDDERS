import { baseLot, normalizeDate, normalizeImageSet, sanitizeUrl, toNumberOrNull } from './common.js'

export function normalizeCopartLot(raw, firstSeenAt) {
  const lotIdValue = String(raw?.lotId || raw?.lotID || raw?.ln || '')
  const lot = baseLot({ source: 'copart', lotIdValue, firstSeenAt, rawSourcePayload: raw })

  const images = [raw?.imageUrl, raw?.imageThumbnail, ...(raw?.images || [])]
  const imageSet = normalizeImageSet(images)

  lot.externalId = raw?.lotId ? String(raw.lotId) : null
  lot.url = sanitizeUrl(raw?.listingUrl) || (lotIdValue ? `https://www.copart.com/lot/${lotIdValue}` : null)
  lot.vin = raw?.vin || null
  lot.year = toNumberOrNull(raw?.year || raw?.lcy)
  lot.make = raw?.make || raw?.mkn || null
  lot.model = raw?.model || raw?.modelGroup || raw?.mdln || null
  lot.trim = raw?.trim || null
  lot.title = [lot.year, lot.make, lot.model, lot.trim].filter(Boolean).join(' ') || null
  lot.damagePrimary = raw?.damageDescription || raw?.dd || null
  lot.damageSecondary = raw?.secondaryDamage || raw?.sdd || null
  lot.condition = raw?.runsDrives || raw?.lotCondCode || null
  lot.odometer = toNumberOrNull(raw?.mileage || raw?.odometer)
  lot.odometerUnit = raw?.odometerUnit || 'mi'
  lot.transmission = raw?.transmission || raw?.trn || null
  lot.drivetrain = raw?.drivetrain || raw?.drv || null
  lot.fuel = raw?.fuelType || raw?.ft || null
  lot.engine = raw?.engine || raw?.egn || null
  lot.bodyStyle = raw?.bodyStyle || raw?.bstl || null
  lot.color = raw?.exteriorColor || raw?.clr || null
  lot.keys = raw?.hasKeys || raw?.hk || null
  lot.saleStatus = raw?.saleStatus || raw?.sst || null
  lot.saleDate = normalizeDate(raw?.saleDate || raw?.ad)
  lot.currentBid = toNumberOrNull(raw?.highBid || raw?.hb)
  lot.buyNowPrice = toNumberOrNull(raw?.buyItNowPrice || raw?.buyNowPrice)
  lot.locationName = raw?.yardName || raw?.yn || null
  lot.locationCity = raw?.locationCity || raw?.offsiteCity || null
  lot.locationState = raw?.locationState || raw?.saleTitleState || null
  lot.seller = raw?.sellerName || raw?.scn || null
  lot.titleStatus = raw?.saleTitleType || null
  lot.images = imageSet.images
  lot.mainImage = imageSet.mainImage
  lot.imageCount = imageSet.imageCount

  if (/sold|closed/i.test(String(lot.saleStatus || ''))) {
    lot.status = 'sold'
  } else if (/live|auction/i.test(String(lot.saleStatus || ''))) {
    lot.status = 'live'
  } else {
    lot.status = 'active'
  }

  return lot
}
