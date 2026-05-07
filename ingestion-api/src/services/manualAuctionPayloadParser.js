function toNumber(value) {
  if (value == null) return null
  if (typeof value === 'number' && Number.isFinite(value)) return value
  if (typeof value !== 'string') return null
  const normalized = value.replace(/[^\d.]/g, '')
  if (!normalized) return null
  const parsed = Number(normalized)
  return Number.isFinite(parsed) ? parsed : null
}

function pickFirst(obj, keys) {
  if (!obj || typeof obj !== 'object') return null
  for (const key of keys) {
    if (obj[key] != null && obj[key] !== '') return obj[key]
  }
  return null
}

function normalizeSource(value) {
  const s = String(value || '').toLowerCase()
  if (s.includes('copart')) return 'copart'
  if (s.includes('iaai')) return 'iaai'
  return null
}

function parseJsonObject(raw) {
  const trimmed = String(raw || '').trim()
  if (!trimmed) return null
  if (!(trimmed.startsWith('{') || trimmed.startsWith('['))) return null

  try {
    const parsed = JSON.parse(trimmed)
    if (Array.isArray(parsed)) {
      return parsed.find((x) => x && typeof x === 'object') || null
    }
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

function parseLooseText(raw) {
  const text = String(raw || '')
  if (!text.trim()) return null

  const source = normalizeSource(text)
  const lotId = text.match(/(?:lot|stock|item|id)\s*[:#-]?\s*(\d{6,})/i)?.[1] || null
  const price = toNumber(text.match(/\$\s*([\d,]+(?:\.\d+)?)/)?.[0])
  const city = text.match(/(?:city|miasto|город)\s*[:#-]?\s*([A-Za-z\-\s]{2,40})/i)?.[1]?.trim() || null
  const state = text.match(/(?:state|штат|stan)\s*[:#-]?\s*([A-Za-z]{2})/i)?.[1]?.trim() || null

  if (!source && !lotId && !price && !city && !state) return null

  return {
    source,
    lotId,
    title: null,
    year: null,
    make: null,
    model: null,
    bodyStyle: null,
    fuel: null,
    buyNowPrice: price,
    currentBid: null,
    locationName: null,
    locationCity: city,
    locationState: state,
    url: null,
  }
}

export function parseManualAuctionPayload(raw) {
  const fromJson = parseJsonObject(raw)
  if (fromJson) {
    const source = normalizeSource(
      pickFirst(fromJson, ['source', 'auction', 'auctionName', 'platform', 'site'])
        || pickFirst(fromJson, ['url', 'link'])
    )

    const lotId = pickFirst(fromJson, [
      'lotId', 'lot_id', 'stockNumber', 'stock_number', 'itemId', 'item_id', 'id',
    ])

    const buyNowPrice = toNumber(pickFirst(fromJson, ['buyNowPrice', 'buy_now_price', 'buyNow', 'price', 'lotPrice']))
    const currentBid = toNumber(pickFirst(fromJson, ['currentBid', 'current_bid', 'bid', 'currentPrice']))

    const locationName = pickFirst(fromJson, ['locationName', 'location', 'branchName', 'yard', 'auctionLocation'])
    const locationCity = pickFirst(fromJson, ['locationCity', 'city'])
    const locationState = pickFirst(fromJson, ['locationState', 'state'])

    return {
      source,
      lotId: lotId ? String(lotId) : null,
      title: pickFirst(fromJson, ['title', 'name']),
      year: toNumber(pickFirst(fromJson, ['year'])),
      make: pickFirst(fromJson, ['make', 'brand']),
      model: pickFirst(fromJson, ['model']),
      bodyStyle: pickFirst(fromJson, ['bodyStyle', 'body_style', 'vehicleType', 'vehicle_type']),
      fuel: pickFirst(fromJson, ['fuel', 'fuelType', 'fuel_type']),
      buyNowPrice,
      currentBid,
      locationName: locationName ? String(locationName) : null,
      locationCity: locationCity ? String(locationCity) : null,
      locationState: locationState ? String(locationState) : null,
      url: pickFirst(fromJson, ['url', 'link']),
    }
  }

  return parseLooseText(raw)
}
