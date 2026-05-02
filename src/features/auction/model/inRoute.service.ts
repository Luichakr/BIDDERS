import type { AuctionCardData } from './auctionData'
import { apiFetch } from '../../../shared/api/client'

const DEFAULT_PAGE_SIZE = 500
const MAX_PAGES = 20
const TRANSIT_GALLERY_HYDRATE_LIMIT = 24
const TRANSIT_DESTINATION_LABEL = 'Jawczyce, ul. Poznanska, 56, 05-850, Polska'

type ApiNameObject = {
  name?: string | null
}

type ApiPhotoObject = {
  link?: string | null
  url?: string | null
  src?: string | null
  original?: string | null
  preview?: string | null
  image?: string | null
}

type ApiCarComplectation = {
  mileage?: number | null
  fuelType?: string | null
  engineVolume?: number | null
  year?: number | null
  transmission?: string | null
  driveType?: string | null
  hasKey?: boolean | null
  isDamaged?: boolean | null
  hasCustomStatus?: boolean | null
  bodyType?: string | null
}

type ApiInRouteCar = {
  id?: number | string | null
  mark?: string | ApiNameObject | null
  model?: string | ApiNameObject | null
  vin?: string | null
  description?: string | null
  price?: number | null
  mileage?: number | null
  fuelType?: string | null
  engineVolume?: number | null
  year?: number | null
  transmission?: string | null
  driveType?: string | null
  isAvailable?: boolean | null
  isSold?: boolean | null
  publishDate?: string | null
  country?: string | null
  city?: string | ApiNameObject | null
  region?: string | ApiNameObject | null
  origin?: string | null
  mainPhoto?: string | ApiPhotoObject | null
  photos?: Array<string | ApiPhotoObject> | null
  images?: Array<string | ApiPhotoObject> | null
  gallery?: Array<string | ApiPhotoObject> | null
  photo?: string | ApiPhotoObject | null
  userFullName?: string | null
  color?: string | ApiNameObject | null
  carComplectation?: ApiCarComplectation | null
}

type ApiInRouteListResponse = {
  data?: ApiInRouteCar[]
  pageNumber?: number
  pageSize?: number
  totalRecords?: number
}


function toName(value: string | ApiNameObject | null | undefined): string {
  if (typeof value === 'string') {
    return value.trim()
  }
  if (value && typeof value.name === 'string') {
    return value.name.trim()
  }
  return ''
}

function toImageUrl(value: string | ApiPhotoObject | null | undefined): string {
  if (typeof value === 'string') {
    return value.trim()
  }
  if (value) {
    const maybeUrl = value.link ?? value.url ?? value.src ?? value.original ?? value.preview ?? value.image
    if (typeof maybeUrl === 'string') {
      return maybeUrl.trim()
    }
  }
  return ''
}

function collectUrlsFromUnknown(value: unknown, depth = 0): string[] {
  if (depth > 4 || value === null || value === undefined) {
    return []
  }

  if (typeof value === 'string') {
    const trimmed = value.trim()
    return isValidHttpUrl(trimmed) ? [trimmed] : []
  }

  if (Array.isArray(value)) {
    return value.flatMap((entry) => collectUrlsFromUnknown(entry, depth + 1))
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>
    const direct = [
      record.link,
      record.url,
      record.src,
      record.original,
      record.preview,
      record.image,
      record.mainPhoto,
      record.photo,
    ].flatMap((entry) => collectUrlsFromUnknown(entry, depth + 1))

    const nested = [record.photos, record.images, record.gallery].flatMap((entry) => collectUrlsFromUnknown(entry, depth + 1))
    return [...direct, ...nested]
  }

  return []
}

function collectCarImages(car: ApiInRouteCar): string[] {
  const candidates = [
    car.mainPhoto,
    car.photo,
    car.photos,
    car.images,
    car.gallery,
  ]

  const fromLegacyParser = candidates
    .flatMap((value) => {
      if (Array.isArray(value)) {
        return value.map((entry) => toImageUrl(entry as string | ApiPhotoObject | null | undefined))
      }
      return [toImageUrl(value as string | ApiPhotoObject | null | undefined)]
    })
    .filter((url) => isValidHttpUrl(url))

  const fromRecursiveParser = candidates.flatMap((value) => collectUrlsFromUnknown(value))

  const unique = Array.from(new Set([...fromLegacyParser, ...fromRecursiveParser].filter(Boolean)))
  return unique
}

function toMileageLabel(value: number): string {
  return `${Math.round(value).toLocaleString('uk-UA')} km`
}

function toMileageKm(value: number): number {
  if (!Number.isFinite(value) || value <= 0) {
    return 0
  }

  // Partner API provides mileage in thousands for these feeds.
  if (value < 10000) {
    return Math.round(value * 1000)
  }

  return Math.round(value)
}

function toUsdLabel(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function isValidHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value)
}

function toDriveLabel(value: string): string {
  const normalized = value.trim().toUpperCase()
  if (normalized === 'FRONT') return 'FWD'
  if (normalized === 'REAR') return 'RWD'
  if (normalized === 'ALL') return 'AWD'
  return normalized || '—'
}

function toTransmissionLabel(value: string): string {
  const normalized = value.trim().toUpperCase()
  if (!normalized) return 'AUTOMATIC'
  if (normalized === 'AUTO') return 'AUTOMATIC'
  if (normalized === 'MANUAL') return 'MANUAL'
  return normalized
}

function toFuelLabel(value: string): string {
  const normalized = value.trim().toUpperCase()
  if (!normalized) return 'GASOLINE'
  if (normalized === 'GAS') return 'GASOLINE'
  return normalized
}

function toAuctionDateLabel(value: string | null | undefined): string {
  if (!value) {
    return 'TBD'
  }
  const date = new Date(value)
  if (!Number.isFinite(date.getTime())) {
    return 'TBD'
  }
  return date.toLocaleDateString('uk-UA')
}

function toEngineLabel(engineVolume: number, fuelType: string): string {
  const volume = engineVolume > 0 ? `${engineVolume.toFixed(1)}L` : '—'
  const fuel = fuelType || '—'
  return `${volume} · ${fuel}`
}

function toTransitDamageLabel(isDamaged: boolean | null | undefined): string {
  if (isDamaged === true) return 'statusDamageCheck'
  if (isDamaged === false) return 'statusDamageOk'
  return 'statusDamageUnknown'
}

function mapInRouteCarToAuctionCard(car: ApiInRouteCar, status: AuctionCardData['status'] = 'transit'): AuctionCardData | null {
  const idRaw = car.id
  if (idRaw === null || idRaw === undefined) {
    return null
  }

  const id = String(idRaw)
  const rawMake = toName(car.mark)
  const make = rawMake === 'Любе Авто' ? 'BID BIDDERS' : rawMake || 'Unknown'
  const model = toName(car.model) || 'Model'
  const complectation = car.carComplectation ?? {}
  const year = Number(car.year ?? complectation.year ?? 0) || 2024
  const title = `${year} ${make} ${model}`.trim()
  const fuel = toFuelLabel(String(car.fuelType ?? complectation.fuelType ?? ''))
  const engineVolume = Number(car.engineVolume ?? complectation.engineVolume ?? 0)
  const mileageKm = toMileageKm(Number(car.mileage ?? complectation.mileage ?? 0))

  const images = collectCarImages(car)
  const image = images[0] ?? 'images/routes/transit.webp'

  const price = Math.max(0, Number(car.price ?? 0))
  const sourceUrl = String(car.description ?? '').trim()
  const isAvailable = car.isAvailable === true
  const isSold = car.isSold === true
  const damage = toTransitDamageLabel(complectation.isDamaged)
  const stockStatus = isSold ? 'statusSold' : isAvailable ? 'statusReady' : 'statusInTransit'
  const titleStatus = complectation.hasCustomStatus === true ? `statusDocsCustom|${stockStatus}` : `statusDocsUnclear|${stockStatus}`
  const keys = complectation.hasKey === true ? 'statusKeysYes' : complectation.hasKey === false ? 'statusKeysNo' : 'statusKeysUnknown'
  const rawSeller = String(car.userFullName ?? '').trim()
  const seller = (rawSeller === 'Любе Авто' || rawSeller === '') ? 'BID BIDDERS' : rawSeller
  const color = toName(car.color) || '—'
  const bodyStyle = String(complectation.bodyType ?? '').trim() || '—'

  return {
    id,
    title,
    year,
    make,
    model,
    vin: String(car.vin ?? '—').trim() || '—',
    auction: 'COPART',
    image,
    images,
    location: TRANSIT_DESTINATION_LABEL,
    mileageKm,
    mileageLabel: toMileageLabel(mileageKm),
    transmission: toTransmissionLabel(String(car.transmission ?? complectation.transmission ?? '')),
    fuel,
    drive: toDriveLabel(String(car.driveType ?? complectation.driveType ?? '')),
    bodyStyle,
    color,
    keys,
    seller,
    titleStatus,
    auctionDateLabel: toAuctionDateLabel(car.publishDate),
    sourceUrl: isValidHttpUrl(sourceUrl) ? sourceUrl : undefined,
    engine: toEngineLabel(engineVolume, fuel),
    damage,
    currentBid: price,
    currentBidLabel: toUsdLabel(price),
    estimateLow: Math.round(price * 0.9),
    estimateHigh: Math.round(price * 1.1),
    estimateLabel: `${toUsdLabel(Math.round(price * 0.9))} - ${toUsdLabel(Math.round(price * 1.1))}`,
    status,
  }
}

async function fetchJson<T>(path: string): Promise<T> {
  return apiFetch<T>(path)
}

async function fetchPagedCars(path: string, status: AuctionCardData['status']): Promise<AuctionCardData[]> {
  const pageSize = DEFAULT_PAGE_SIZE
  const firstPage = await fetchJson<ApiInRouteListResponse>(`${path}?pageNumber=1&pageSize=${pageSize}`)
  const firstCards = (firstPage.data ?? [])
    .map((car) => mapInRouteCarToAuctionCard(car, status))
    .filter((card): card is AuctionCardData => Boolean(card))

  const totalRecords = Number(firstPage.totalRecords ?? firstCards.length)
  if (!Number.isFinite(totalRecords) || totalRecords <= firstCards.length) {
    return firstCards
  }

  const totalPages = Math.min(MAX_PAGES, Math.ceil(totalRecords / pageSize))
  const pageRequests: Promise<ApiInRouteListResponse>[] = []
  for (let page = 2; page <= totalPages; page += 1) {
    pageRequests.push(fetchJson<ApiInRouteListResponse>(`${path}?pageNumber=${page}&pageSize=${pageSize}`))
  }

  const pages = await Promise.all(pageRequests)
  const nextCards = pages
    .flatMap((page) => page.data ?? [])
    .map((car) => mapInRouteCarToAuctionCard(car, status))
    .filter((card): card is AuctionCardData => Boolean(card))

  return [...firstCards, ...nextCards]
}

async function hydrateTransitGalleries(cards: AuctionCardData[]): Promise<AuctionCardData[]> {
  const targets = cards.slice(0, TRANSIT_GALLERY_HYDRATE_LIMIT)
  if (targets.length === 0) {
    return cards
  }

  const detailResponses = await Promise.all(
    targets.map(async (card) => {
      if (card.images.length > 1 || !/^\d+$/.test(card.id)) {
        return null
      }

      try {
        const payload = await fetchJson<ApiInRouteCar>(`/api/v0/cars/in-route/${encodeURIComponent(card.id)}`)
        const detailImages = collectCarImages(payload)
        if (detailImages.length <= 1) {
          return null
        }
        return [card.id, detailImages] as const
      } catch {
        return null
      }
    }),
  )

  const galleryById = new Map<string, string[]>()
  detailResponses.forEach((entry) => {
    if (!entry) return
    galleryById.set(entry[0], entry[1])
  })

  if (galleryById.size === 0) {
    return cards
  }

  return cards.map((card) => {
    const images = galleryById.get(card.id)
    if (!images || images.length <= 1) {
      return card
    }
    return {
      ...card,
      image: images[0] ?? card.image,
      images,
    }
  })
}

export async function fetchInRouteCards(): Promise<AuctionCardData[]> {
  const cards = await fetchPagedCars('/api/v0/cars/in-route', 'transit')
  return hydrateTransitGalleries(cards)
}

export async function fetchCatalogCars(): Promise<AuctionCardData[]> {
  // Primary source: static lots.json generated by the parser (Copart + IAAI)
  try {
    const base = import.meta.env.BASE_URL ?? '/'
    const url = base.replace(/\/$/, '') + '/data/lots.json'
    const res = await fetch(url)
    if (res.ok) {
      const lots = (await res.json()) as AuctionCardData[]
      if (Array.isArray(lots) && lots.length > 0) {
        return lots
      }
    }
  } catch {
    // fall through to API
  }

  // Fallback: legacy API
  const allCars = await fetchPagedCars('/api/v0/cars', 'catalog')
  return allCars
}

export async function fetchInRouteCardById(id: string): Promise<AuctionCardData | null> {
  const payload = await fetchJson<ApiInRouteCar>(`/api/v0/cars/in-route/${encodeURIComponent(id)}`)
  return mapInRouteCarToAuctionCard(payload, 'transit')
}

export async function fetchCatalogLotById(id: string): Promise<AuctionCardData | null> {
  try {
    const base = import.meta.env.BASE_URL ?? '/'
    const url = base.replace(/\/$/, '') + '/data/lots.json'
    const res = await fetch(url)
    if (!res.ok) return null
    const lots = (await res.json()) as AuctionCardData[]
    return lots.find((l) => l.id === id) ?? null
  } catch {
    return null
  }
}