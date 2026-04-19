import { nowIso, toIsoOrNull } from '../utils/time.js'

export function lotId(source, id) {
  return `${source}_${id}`
}

export function baseLot({ source, lotIdValue, firstSeenAt, rawSourcePayload }) {
  const now = nowIso()
  return {
    id: lotId(source, lotIdValue),
    source,
    lotId: String(lotIdValue),
    externalId: null,
    url: null,
    vin: null,
    year: null,
    make: null,
    model: null,
    trim: null,
    title: null,
    damagePrimary: null,
    damageSecondary: null,
    condition: null,
    odometer: null,
    odometerUnit: null,
    transmission: null,
    drivetrain: null,
    fuel: null,
    engine: null,
    bodyStyle: null,
    color: null,
    keys: null,
    saleStatus: null,
    saleDate: null,
    currentBid: null,
    buyNowPrice: null,
    locationName: null,
    locationCity: null,
    locationState: null,
    seller: null,
    images: [],
    mainImage: null,
    imageCount: 0,
    titleStatus: null,
    rawSourcePayload,
    status: 'active',
    firstSeenAt: firstSeenAt || now,
    lastSeenAt: now,
    updatedAt: now,
  }
}

export function normalizeImageSet(images) {
  const uniq = Array.from(new Set((images || []).map(sanitizeUrl).filter(Boolean)))
  return {
    images: uniq,
    mainImage: uniq[0] || null,
    imageCount: uniq.length,
  }
}

export function sanitizeUrl(value) {
  if (!value) return null
  const str = String(value).trim()
  if (!str) return null
  if (!/^https?:\/\//i.test(str)) return null
  return str
}

export function toNumberOrNull(value) {
  if (value === undefined || value === null || value === '') return null
  const parsed = Number(String(value).replace(/[^\d.-]/g, ''))
  return Number.isFinite(parsed) ? parsed : null
}

export function boolToYesNo(value) {
  if (value === true) return 'YES'
  if (value === false) return 'NO'
  return null
}

export function normalizeDate(value) {
  return toIsoOrNull(value)
}
