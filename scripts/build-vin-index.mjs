// Generates public/data/vin-index.json — lightweight VIN→OG mapping
// Used by the Cloudflare Function to inject social preview meta tags

const API_BASE = 'https://api-lubeavto-partner.azurewebsites.net'
const TOKEN = process.env.VITE_CALCULATOR_API_TOKEN

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

async function main() {
  console.log('Building VIN index...')

  const [transitCars, catalogCars] = await Promise.all([
    collectAll('/api/v0/cars/in-route'),
    collectAll('/api/v0/cars'),
  ])

  const index = {}

  for (const car of [...transitCars, ...catalogCars]) {
    const vin = (car.vin ?? '').trim().toUpperCase()
    if (!vin || vin.length < 8) continue
    if (index[vin]) continue // don't overwrite, transit takes priority (added first)
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
