/**
 * Cloudflare Pages Function: POST /ingestion-api/api/auction-lot/resolve
 *
 * Self-contained — no Node.js dependencies.
 * Resolves a Copart / IAAI lot URL and returns structured data
 * so the calculator can pre-fill fields.
 *
 * IAAI is always returned as partial (anti-bot blocks server requests).
 * Copart is fetched via their public JSON API.
 */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

// ── URL parsing ──────────────────────────────────────────────────────────────

function parseAuctionUrl(rawUrl) {
  try {
    const url = new URL(String(rawUrl || '').trim())
    const host = url.hostname.toLowerCase().replace(/^www\./, '')

    if (host === 'copart.com') {
      const m = url.pathname.match(/\/lot\/(\d+)/i)
      if (m) return { source: 'copart', id: m[1] }
    }
    if (host === 'iaai.com') {
      const m1 = url.pathname.match(/vehicledetail\/(\d+)/i)
      if (m1) return { source: 'iaai', id: m1[1] }
      const m2 = url.pathname.match(/vehicledetails\/(\d+)/i)
      if (m2) return { source: 'iaai', id: m2[1] }
    }
  } catch { /* ignore */ }
  return null
}

// ── Vehicle type mapping ─────────────────────────────────────────────────────

function mapVehicleType({ bodyStyle, fuel }) {
  const bs = String(bodyStyle || '').toLowerCase()
  const f  = String(fuel || '').toLowerCase()

  if (/electric|ev\b/.test(f))             return { carType: 'Automobiles',   importTaxType: 'electric' }
  if (/hybrid/.test(f))                    return { carType: 'Automobiles',   importTaxType: 'standard' }
  if (/motorcycle|motorbike|atv|scooter/.test(bs)) return { carType: 'Moto', importTaxType: 'motorcycle' }
  if (/truck|pickup/.test(bs))             return { carType: 'PickupTrucks',  importTaxType: 'standard' }
  if (/van|minivan|bus|trailer/.test(bs))  return { carType: 'Automobiles',   importTaxType: 'standard' }
  return { carType: 'Automobiles', importTaxType: 'standard' }
}

// ── Location hints from URL ──────────────────────────────────────────────────

function toTitleCase(v) {
  return String(v || '').split(/\s+/).filter(Boolean)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()).join(' ')
}

function inferLocationFromCopartUrl(rawUrl) {
  try {
    const url = new URL(rawUrl)
    const slug = url.pathname.match(/\/lot\/\d+\/([^/?#]+)/i)?.[1]
    if (slug) {
      const parts = slug.toLowerCase().split('-').filter(Boolean)
      for (let i = parts.length - 2; i >= 0; i--) {
        if (/^[a-z]{2}$/.test(parts[i])) {
          const cityParts = parts.slice(i + 1)
          if (cityParts.length > 0) {
            return {
              locationName:  toTitleCase(cityParts.join(' ')),
              locationCity:  toTitleCase(cityParts.join(' ')),
              locationState: parts[i].toUpperCase(),
            }
          }
        }
      }
    }
  } catch { /* ignore */ }
  return { locationName: null, locationCity: null, locationState: null }
}

/**
 * Parses Copart URL slug to extract year, make, model.
 * Slug formats:
 *   salvage-2023-tesla-model-y-ca-sun-valley
 *   2006-mercedes-benz-sl-500-ca-san-jose
 *   run-and-drive-2018-ford-f-150-tx-houston
 *
 * Returns { year, make, model } or all-null fallback.
 * Make is identified via a known list of common makes.
 */
const KNOWN_MAKES = new Set([
  'acura','alfa','aston','audi','bentley','bmw','buick','cadillac','chevrolet','chevy',
  'chrysler','dodge','ferrari','fiat','ford','genesis','gmc','honda','hyundai','infiniti',
  'jaguar','jeep','kia','lamborghini','land','lexus','lincoln','lotus','maserati','mazda',
  'mclaren','mercedes','mercury','mini','mitsubishi','nissan','oldsmobile','plymouth','polestar',
  'pontiac','porsche','ram','rivian','rolls','saab','saturn','scion','smart','subaru',
  'suzuki','tesla','toyota','volkswagen','vw','volvo','yamaha',
])

const COMPOUND_MAKES = {
  'mercedes-benz': 'Mercedes-Benz',
  'rolls-royce':   'Rolls-Royce',
  'aston-martin':  'Aston Martin',
  'land-rover':    'Land Rover',
  'alfa-romeo':    'Alfa Romeo',
}

function inferVehicleFromCopartUrl(rawUrl) {
  const out = { year: null, make: null, model: null }
  try {
    const url = new URL(rawUrl)
    const slug = url.pathname.match(/\/lot\/\d+\/([^/?#]+)/i)?.[1]
    if (!slug) return out

    const parts = slug.toLowerCase().split('-').filter(Boolean)

    // year: first 4-digit token
    const yearIdx = parts.findIndex((p) => /^(19|20)\d{2}$/.test(p))
    if (yearIdx === -1) return out
    out.year = Number(parts[yearIdx])

    // state: 2-letter token after year (and the city follows after it)
    const stateIdx = parts.findIndex((p, i) => i > yearIdx && /^[a-z]{2}$/.test(p))
    const upperBound = stateIdx > yearIdx ? stateIdx : parts.length

    // model+make slice = parts[yearIdx+1 ... upperBound)
    const between = parts.slice(yearIdx + 1, upperBound)
    if (between.length === 0) return out

    // detect compound make first (e.g. "mercedes-benz")
    const firstTwo = `${between[0]}-${between[1] ?? ''}`
    if (COMPOUND_MAKES[firstTwo]) {
      out.make  = COMPOUND_MAKES[firstTwo]
      out.model = between.slice(2).map(toTitleCase).join(' ') || null
      return out
    }

    // simple make
    if (KNOWN_MAKES.has(between[0])) {
      out.make  = toTitleCase(between[0] === 'vw' ? 'volkswagen' : between[0] === 'chevy' ? 'chevrolet' : between[0])
      out.model = between.slice(1).map(toTitleCase).join(' ') || null
    } else {
      // unknown — assume first token is make anyway
      out.make  = toTitleCase(between[0])
      out.model = between.slice(1).map(toTitleCase).join(' ') || null
    }
  } catch { /* ignore */ }
  return out
}

// ── Copart fetch ─────────────────────────────────────────────────────────────

const UA_POOL = [
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:127.0) Gecko/20100101 Firefox/127.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0',
]

async function fetchCopartLot(lotId) {
  const apiUrl = `https://www.copart.com/public/data/lotdetails/solr/${lotId}`

  let lastErr = new Error('No attempts')
  for (let i = 0; i < UA_POOL.length; i++) {
    try {
      const res = await fetch(apiUrl, {
        headers: {
          'User-Agent': UA_POOL[i],
          'Accept': 'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Referer': `https://www.copart.com/lot/${lotId}`,
          'Origin': 'https://www.copart.com',
        },
        cf: { cacheTtl: 0 },
      })

      if (!res.ok) { lastErr = new Error(`Copart API ${res.status}`); continue }

      const text = await res.text()
      if (/_Incapsula_Resource|Access denied|Request unsuccessful|Hacking attempt/i.test(text)) {
        lastErr = new Error('Copart blocked by anti-bot')
        continue
      }
      // Success — process below
      return await parseCopartResponse(text, lotId)
    } catch (err) {
      lastErr = err
    }
  }
  throw lastErr
}

async function parseCopartResponse(text, lotId) {

  let parsed
  try { parsed = JSON.parse(text) } catch { throw new Error('Copart non-JSON response') }

  const ld = parsed?.data?.lotDetails
  if (!ld) throw new Error('Copart: no lotDetails in response')

  const lotIdVal = String(ld.ln || ld.lotNumber || lotId)

  return {
    lotId:        lotIdVal,
    title:        [ld.lcy || ld.year, ld.mkn || ld.make, ld.mdln || ld.model].filter(Boolean).join(' ') || null,
    year:         Number(ld.lcy || ld.year) || null,
    make:         ld.mkn || ld.make || null,
    model:        ld.mdln || ld.model || null,
    bodyStyle:    ld.bstl || ld.bodyStyle || null,
    fuel:         ld.ft   || ld.fuelType  || null,
    currentBid:   Number(ld.hb || ld.highBid) || null,
    buyNowPrice:  Number(ld.buyItNowPrice || ld.buyNowPrice) || null,
    locationName: ld.yn   || ld.yardName   || null,
    locationCity: ld.locationCity  || ld.offsiteCity   || null,
    locationState:ld.locationState || ld.saleTitleState || null,
    mainImage:    ld.imageUrl      || null,
    url:          ld.link          || `https://www.copart.com/lot/${lotIdVal}`,
  }
}

// ── Partial (IAAI / unresolvable Copart) ────────────────────────────────────

function buildPartialPayload({ source, lotId, url }) {
  const loc     = source === 'copart' ? inferLocationFromCopartUrl(url) : { locationName: null, locationCity: null, locationState: null }
  const vehicle = source === 'copart' ? inferVehicleFromCopartUrl(url)  : { year: null, make: null, model: null }

  // Tesla / Rivian / Polestar slug → EV import tax
  const isEv = vehicle.make && /^(tesla|rivian|polestar)$/i.test(vehicle.make)

  const title = [vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(' ') || null

  return {
    source, lotId,
    title,
    year:  vehicle.year,
    make:  vehicle.make,
    model: vehicle.model,
    bodyStyle: null,
    vehicleTypeRaw: null,
    mappedCarType:       'Automobiles',
    mappedImportTaxType: isEv ? 'electric' : 'standard',
    ...loc,
    matchedBranchId: null, matchedBranchName: null,
    lotPrice: 0, priceSource: null, image: null, url,
  }
}

// ── Main handler ──────────────────────────────────────────────────────────────

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS })
}

export async function onRequestPost(context) {
  const { request } = context

  let body
  try { body = await request.json() } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON body' }), {
      status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }

  const url = String(body?.url || '').trim()
  if (!url) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing "url" in request body' }), {
      status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }

  const parsed = parseAuctionUrl(url)
  if (!parsed) {
    return new Response(JSON.stringify({ ok: false, error: 'Unsupported auction URL' }), {
      status: 422, headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }

  const { source, id } = parsed

  // IAAI — always partial (server-side blocked by Incapsula)
  if (source === 'iaai') {
    return new Response(JSON.stringify({
      ok: true, partial: true,
      data: buildPartialPayload({ source: 'iaai', lotId: id, url }),
    }), { headers: { ...CORS, 'Content-Type': 'application/json' } })
  }

  // Copart — try fetching
  try {
    const lot = await fetchCopartLot(id)

    const locHints = {
      locationName:  lot.locationName  || null,
      locationCity:  lot.locationCity  || null,
      locationState: lot.locationState || null,
    }
    // If lot didn't return location, try inferring from URL slug
    if (!locHints.locationCity) {
      const urlLoc = inferLocationFromCopartUrl(url)
      if (urlLoc.locationCity) Object.assign(locHints, urlLoc)
    }

    const { carType, importTaxType } = mapVehicleType({ bodyStyle: lot.bodyStyle, fuel: lot.fuel })

    const lotPrice =
      (lot.buyNowPrice && lot.buyNowPrice > 0 ? lot.buyNowPrice : null) ??
      (lot.currentBid  && lot.currentBid  > 0 ? lot.currentBid  : null) ??
      0

    const priceSource = lot.buyNowPrice > 0 ? 'buyNow' : lot.currentBid > 0 ? 'currentBid' : null

    return new Response(JSON.stringify({
      ok: true,
      data: {
        source: 'copart',
        lotId:               lot.lotId,
        title:               lot.title,
        year:                lot.year,
        make:                lot.make,
        model:               lot.model,
        bodyStyle:           lot.bodyStyle,
        vehicleTypeRaw:      lot.bodyStyle,
        mappedCarType:       carType,
        mappedImportTaxType: importTaxType,
        ...locHints,
        matchedBranchId:   null, // branch matching requires the branches dataset — user selects manually
        matchedBranchName: null,
        lotPrice,
        priceSource,
        image: lot.mainImage,
        url:   lot.url || url,
      },
    }), { headers: { ...CORS, 'Content-Type': 'application/json' } })

  } catch (err) {
    // Copart blocked or error — return partial so frontend can at least set auction type
    return new Response(JSON.stringify({
      ok: true, partial: true,
      data: buildPartialPayload({ source: 'copart', lotId: id, url }),
    }), { headers: { ...CORS, 'Content-Type': 'application/json' } })
  }
}
