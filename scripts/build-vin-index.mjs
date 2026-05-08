// Generates public/data/vin-index.json — lightweight VIN→OG mapping
// Used by the Cloudflare Function to inject social preview meta tags

const API_BASE = 'https://api-lubeavto-partner.azurewebsites.net'
const TOKEN = process.env.VITE_CALCULATOR_API_TOKEN
const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY

if (!TOKEN) {
  console.error('VITE_CALCULATOR_API_TOKEN not set')
  process.exit(1)
}

const headers = { Authorization: `Bearer ${TOKEN}` }

async function fetchPage(path, page, size = 50) {
  const res = await fetch(`${API_BASE}${path}?pageNumber=${page}&pageSize=${size}`, { headers })
  if (!res.ok) return null
  return res.json()
}

function extractOg(car) {
  const title = car.title ??
    [car.year, car.make ?? car.mark, car.model].filter(Boolean).join(' ')
  const image = (car.images && car.images[0]) ?? car.image ?? car.mainPhoto ?? null
  const mileage = car.mileageLabel ??
    (car.mileage ? `${Number(car.mileage).toLocaleString('ru')} km` :
    (car.mileageKm ? `${Number(car.mileageKm).toLocaleString('ru')} km` : null))
  const engine = car.engine ?? car.engineVolume ?? null
  const location = car.location ?? car.city ?? car.region ?? null
  return { title, image, mileage, engine, location }
}

async function collectAll(path) {
  const first = await fetchPage(path, 1, 50)
  if (!first?.data) return []
  const total = first.totalRecords ?? first.data.length
  const pages = Math.ceil(total / 50)
  console.log(`  ${path}: ${total} records, ${pages} pages`)

  const allData = [...first.data]
  // Fetch remaining pages in parallel batches of 10
  for (let batch = 2; batch <= pages; batch += 10) {
    const batchPages = Array.from({ length: Math.min(10, pages - batch + 1) }, (_, i) => batch + i)
    const results = await Promise.all(batchPages.map(p => fetchPage(path, p, 50)))
    for (const r of results) if (r?.data) allData.push(...r.data)
  }
  return allData
}

/** Fetch all published cabinet lots from Supabase public_inventory_lots view */
async function collectCabinetLots() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.log('  Supabase not configured — skipping cabinet lots')
    return []
  }

  const PAGE = 1000
  let offset = 0
  const all = []

  while (true) {
    const url = `${SUPABASE_URL}/rest/v1/public_inventory_lots` +
      `?select=vin,public_title,title,make,model,year,photos,mileage_km,engine_volume,public_slug` +
      `&order=published_at.desc` +
      `&offset=${offset}&limit=${PAGE}`

    const res = await fetch(url, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Accept': 'application/json',
        'Range-Unit': 'items',
        'Range': `${offset}-${offset + PAGE - 1}`,
        'Prefer': 'count=none',
      },
    })

    if (!res.ok) {
      console.warn(`  Supabase cabinet lots fetch failed: ${res.status}`)
      break
    }

    const data = await res.json()
    if (!Array.isArray(data) || data.length === 0) break

    all.push(...data)
    console.log(`  cabinet lots: fetched ${all.length} so far...`)

    if (data.length < PAGE) break
    offset += PAGE
  }

  console.log(`  cabinet lots: ${all.length} published entries`)
  return all
}

/** Extract OG data from a cabinet lot row */
function extractCabinetOg(lot) {
  const title = lot.public_title ||
    [lot.year, lot.make, lot.model].filter(Boolean).join(' ') ||
    lot.title || ''

  // photos is a JSONB array: [{id, name, url, storagePath, ...}]
  // storagePath is set but url is '' (private bucket, signed at runtime)
  // We cannot generate signed URLs without auth here, so image stays null
  // When cabinet photos are migrated to public-lot-photos bucket, update this.
  const photos = Array.isArray(lot.photos) ? lot.photos : []
  const firstPhoto = photos[0]
  const image = (firstPhoto?.url && firstPhoto.url !== '') ? firstPhoto.url : null

  const mileage = lot.mileage_km ? `${Number(lot.mileage_km).toLocaleString('ru')} km` : null
  const engine = lot.engine_volume || null

  return { title, image, mileage, engine, location: 'Jawczyce k. Warszawy, Polska' }
}

async function main() {
  console.log('Building VIN index...')

  const [transitCars, catalogCars, cabinetLots] = await Promise.all([
    collectAll('/api/v0/cars/in-route'),
    collectAll('/api/v0/cars'),
    collectCabinetLots(),
  ])

  const index = {}

  // 1. Cabinet lots — highest priority (our own published cars)
  for (const lot of cabinetLots) {
    const vin = (lot.vin ?? '').trim().toUpperCase()
    if (!vin || vin.length < 8) continue
    index[vin] = extractCabinetOg(lot)
  }

  // 2. API transit + catalog (don't overwrite cabinet entries)
  for (const car of [...transitCars, ...catalogCars]) {
    const vin = (car.vin ?? '').trim().toUpperCase()
    if (!vin || vin.length < 8) continue
    if (index[vin]) continue
    index[vin] = extractOg(car)
  }

  // Also include lots.json
  const { readFileSync, existsSync } = await import('fs')
  const lotsPath = new URL('../public/data/lots.json', import.meta.url).pathname
  if (existsSync(lotsPath)) {
    const lots = JSON.parse(readFileSync(lotsPath, 'utf8'))
    for (const car of lots) {
      const vin = (car.vin ?? '').trim().toUpperCase()
      if (!vin || index[vin]) continue
      index[vin] = extractOg(car)
    }
  }

  const outPath = new URL('../public/data/vin-index.json', import.meta.url).pathname
  const { writeFileSync } = await import('fs')
  writeFileSync(outPath, JSON.stringify(index))
  console.log(`✓ VIN index built: ${Object.keys(index).length} entries → public/data/vin-index.json`)
}

main().catch(e => { console.error(e); process.exit(1) })
