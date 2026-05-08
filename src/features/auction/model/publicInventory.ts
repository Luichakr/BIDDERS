import type { AuctionCardData } from './auctionData'
import type { InventoryItem } from '../../../shared/types/contracts'
import { isSupabaseConfigured, supabaseClient } from '../../../shared/auth/supabaseClient'
import type { CabinetCar, CabinetPhoto } from '../../../pages/cabinet/model/cabinetTypes'
import { translateSpec } from '../../../shared/utils/translateSpec'

const PUBLIC_INVENTORY_VIEW = 'public_inventory_lots'
const INVENTORY_PLACEHOLDER_IMAGE = 'images/routes/in-stock.webp'

export type PublicInventoryLotRow = {
  id: string
  user_id: string
  created_at: string
  updated_at: string
  title: string
  make: string
  model: string
  year: string
  vin: string
  source_url: string
  auction: string
  status: CabinetCar['status']
  body_style: string
  generation: string
  trim: string
  color_exterior: string
  engine_volume: string
  engine_power_hp: string
  fuel_type: string
  drivetrain: string
  transmission: string
  mileage_km: string
  odometer_unit: string
  location: string
  country_of_origin: string
  keys_status: string
  damage_primary: string
  purchase_price_usd: string
  target_budget_usd: string
  repair_estimate_usd: string
  seller_name: string
  publication_status: 'published'
  public_title: string
  public_slug: string
  public_description: string
  public_price_usd: string
  public_estimate_usd: string
  public_badge: string
  public_hot_offer: boolean
  published_at: string | null
  photos: unknown
}

function requireSupabase() {
  if (!supabaseClient || !isSupabaseConfigured) {
    throw new Error('Supabase public inventory is not configured')
  }
  return supabaseClient
}

function parseUsd(value: string | number | null | undefined) {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0
  }

  const normalized = String(value ?? '').replace(/[^0-9.]/g, '')
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

function formatUsd(value: string | number | null | undefined) {
  const parsed = parseUsd(value)
  return parsed > 0 ? `$${Math.round(parsed).toLocaleString('en-US')}` : '—'
}

function parseKilometers(value: string | null | undefined) {
  const normalized = String(value ?? '').replace(/[^0-9]/g, '')
  const parsed = Number.parseInt(normalized, 10)
  return Number.isFinite(parsed) ? parsed : 0
}

function formatMileage(value: string | null | undefined, unit: string | null | undefined) {
  const amount = parseKilometers(value)
  if (amount <= 0) return '—'
  return `${amount.toLocaleString('en-US')} ${String(unit || 'km').toLowerCase()}`
}

function normalizeAuction(value: string | null | undefined): 'COPART' | 'IAAI' {
  return String(value ?? '').trim().toUpperCase() === 'IAAI' ? 'IAAI' : 'COPART'
}

function normalizePhotos(photos: unknown): CabinetPhoto[] {
  if (!Array.isArray(photos)) return []

  return photos.flatMap((photo) => {
    if (!photo || typeof photo !== 'object') return []
    const candidate = photo as Partial<CabinetPhoto>
    if (!candidate.id || !candidate.name) return []

    return [{
      id: String(candidate.id),
      name: String(candidate.name),
      url: String(candidate.url ?? ''),
      storagePath: candidate.storagePath ? String(candidate.storagePath) : undefined,
      sizeKb: Math.max(1, Number(candidate.sizeKb ?? 0) || 0),
      width: Math.max(0, Number(candidate.width ?? 0) || 0),
      height: Math.max(0, Number(candidate.height ?? 0) || 0),
    }]
  })
}

function getPhotoUrls(photos: CabinetPhoto[]) {
  const urls = photos.map((photo) => photo.url).filter(Boolean)
  return urls.length > 0 ? urls : [INVENTORY_PLACEHOLDER_IMAGE]
}

function createPublicTitle(row: Pick<PublicInventoryLotRow, 'public_title' | 'year' | 'make' | 'model' | 'title'>) {
  return row.public_title.trim() || [row.year, row.make, row.model].filter(Boolean).join(' ').trim() || row.title || 'Vehicle'
}

function createEngineLabel(row: Pick<PublicInventoryLotRow, 'engine_volume' | 'engine_power_hp' | 'fuel_type'>) {
  const parts = [
    row.engine_volume,
    row.engine_power_hp ? `${row.engine_power_hp} hp` : '',
    row.fuel_type,
  ].filter(Boolean)

  return parts.length > 0 ? parts.join(' · ') : '—'
}

function createSlug(source: Pick<PublicInventoryLotRow, 'public_slug' | 'year' | 'make' | 'model' | 'vin' | 'id'>) {
  const manualSlug = source.public_slug.trim().toLowerCase()
  if (manualSlug) {
    return manualSlug
  }

  const fallback = [source.year, source.make, source.model, source.vin || source.id]
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return fallback || source.id
}

export function mapPublicInventoryLotToInventoryItem(row: PublicInventoryLotRow): InventoryItem {
  const photos = normalizePhotos(row.photos)
  const photoUrls = getPhotoUrls(photos)
  const priceLabel = formatUsd(row.public_price_usd || row.purchase_price_usd || row.target_budget_usd)
  const estimateLabel = formatUsd(row.public_estimate_usd || row.target_budget_usd || row.purchase_price_usd)

  return {
    id: row.id,
    image: photoUrls[0],
    images: photoUrls,
    year: row.year || '—',
    makeModel: [row.make, row.model].filter(Boolean).join(' ').trim() || createPublicTitle(row),
    auction: normalizeAuction(row.auction),
    damage: row.damage_primary || '—',
    vin: row.vin || '—',
    location: row.location || row.country_of_origin || '—',
    engine: createEngineLabel(row),
    transmission: row.transmission || '—',
    drivetrain: row.drivetrain || '—',
    fuel: row.fuel_type || '—',
    mileage: formatMileage(row.mileage_km, row.odometer_unit),
    currentBid: priceLabel,
    buyNow: priceLabel === '—' ? null : priceLabel,
    estimate: estimateLabel,
    auctionDate: row.published_at ? new Date(row.published_at).toLocaleDateString('en-US') : undefined,
    seller: row.seller_name || '—',
    titleStatus: row.status || '—',
    bodyStyle: row.body_style || '—',
    color: row.color_exterior || '—',
    keys: row.keys_status || '—',
    hot: Boolean(row.public_hot_offer),
    discount: row.public_badge || null,
    sourceUrl: row.source_url || `/en/cars/${createSlug(row)}`,
  }
}

export function mapPublicInventoryLotToAuctionCard(row: PublicInventoryLotRow): AuctionCardData {
  const inventoryItem = mapPublicInventoryLotToInventoryItem(row)
  const estimate = parseUsd(row.public_estimate_usd || row.target_budget_usd || row.purchase_price_usd)
  const title = createPublicTitle(row)

  return {
    id: row.id,
    title,
    year: Number.parseInt(row.year, 10) || new Date().getFullYear(),
    make: row.make || title.split(' ')[0] || 'Vehicle',
    model: row.model || title.replace(`${row.year} ${row.make}`.trim(), '').trim(),
    vin: row.vin,
    auction: inventoryItem.auction,
    image: inventoryItem.image,
    images: inventoryItem.images && inventoryItem.images.length > 0 ? inventoryItem.images : [inventoryItem.image],
    location: inventoryItem.location,
    mileageKm: parseKilometers(row.mileage_km),
    mileageLabel: inventoryItem.mileage,
    transmission: row.transmission ? translateSpec(row.transmission, 'pl') : '—',
    fuel: row.fuel_type ? translateSpec(row.fuel_type, 'pl') : '—',
    drive: row.drivetrain ? translateSpec(row.drivetrain, 'pl') : '—',
    bodyStyle: row.body_style || '—',
    color: row.color_exterior || '—',
    keys: row.keys_status || '—',
    seller: row.seller_name || '—',
    titleStatus: row.status || '—',
    auctionDateLabel: inventoryItem.auctionDate || 'Published',
    sourceUrl: row.source_url || `/en/cars/${createSlug(row)}`,
    engine: inventoryItem.engine,
    damage: row.damage_primary || '—',
    currentBid: parseUsd(row.public_price_usd || row.purchase_price_usd || row.target_budget_usd),
    currentBidLabel: inventoryItem.currentBid,
    estimateLow: estimate > 0 ? Math.round(estimate * 0.9) : 0,
    estimateHigh: estimate > 0 ? Math.round(estimate * 1.1) : 0,
    estimateLabel: inventoryItem.estimate,
    status: 'in-stock',
    buyNow: parseUsd(row.public_price_usd || row.purchase_price_usd || row.target_budget_usd) || null,
    buyNowLabel: inventoryItem.buyNow,
    publicDescription: row.public_description || null,
  }
}

export function mapCabinetCarToPublicInventoryItem(car: CabinetCar): InventoryItem | null {
  if (car.publicationStatus !== 'published') {
    return null
  }

  return mapPublicInventoryLotToInventoryItem({
    id: car.id,
    user_id: '',
    created_at: car.createdAt,
    updated_at: car.updatedAt,
    title: car.title,
    make: car.make,
    model: car.model,
    year: car.year,
    vin: car.vin,
    source_url: car.sourceUrl,
    auction: car.auction,
    status: car.status,
    body_style: car.bodyStyle,
    generation: car.generation,
    trim: car.trim,
    color_exterior: car.colorExterior,
    engine_volume: car.engineVolume,
    engine_power_hp: car.enginePowerHp,
    fuel_type: car.fuelType,
    drivetrain: car.drivetrain,
    transmission: car.transmission,
    mileage_km: car.mileageKm,
    odometer_unit: car.odometerUnit,
    location: 'Jawczyce k. Warszawy, Polska',
    country_of_origin: car.countryOfOrigin,
    keys_status: car.keysStatus,
    damage_primary: car.damagePrimary,
    purchase_price_usd: car.purchasePriceUsd,
    target_budget_usd: car.targetBudgetUsd,
    repair_estimate_usd: car.repairEstimateUsd,
    seller_name: car.sellerName,
    publication_status: 'published',
    public_title: car.publicTitle,
    public_slug: car.publicSlug,
    public_description: car.publicDescription,
    public_price_usd: car.publicPriceUsd,
    public_estimate_usd: car.publicEstimateUsd,
    public_badge: car.publicBadge,
    public_hot_offer: car.publicHotOffer,
    published_at: car.publishedAt || null,
    photos: car.photos,
  })
}

export function mapCabinetCarToPublicAuctionCard(car: CabinetCar, allowPreview = false): AuctionCardData | null {
  if (!allowPreview && car.publicationStatus !== 'published') {
    return null
  }

  return mapPublicInventoryLotToAuctionCard({
    id: car.id,
    user_id: '',
    created_at: car.createdAt,
    updated_at: car.updatedAt,
    title: car.title,
    make: car.make,
    model: car.model,
    year: car.year,
    vin: car.vin,
    source_url: car.sourceUrl,
    auction: car.auction,
    status: car.status,
    body_style: car.bodyStyle,
    generation: car.generation,
    trim: car.trim,
    color_exterior: car.colorExterior,
    engine_volume: car.engineVolume,
    engine_power_hp: car.enginePowerHp,
    fuel_type: car.fuelType,
    drivetrain: car.drivetrain,
    transmission: car.transmission,
    mileage_km: car.mileageKm,
    odometer_unit: car.odometerUnit,
    location: 'Jawczyce k. Warszawy, Polska',
    country_of_origin: car.countryOfOrigin,
    keys_status: car.keysStatus,
    damage_primary: car.damagePrimary,
    purchase_price_usd: car.purchasePriceUsd,
    target_budget_usd: car.targetBudgetUsd,
    repair_estimate_usd: car.repairEstimateUsd,
    seller_name: car.sellerName,
    publication_status: 'published',
    public_title: car.publicTitle,
    public_slug: car.publicSlug,
    public_description: car.publicDescription,
    public_price_usd: car.publicPriceUsd,
    public_estimate_usd: car.publicEstimateUsd,
    public_badge: car.publicBadge,
    public_hot_offer: car.publicHotOffer,
    published_at: car.publishedAt || null,
    photos: car.photos,
  })
}

export async function fetchPublishedInventoryLots(): Promise<PublicInventoryLotRow[]> {
  const client = requireSupabase()
  const { data, error } = await client
    .from(PUBLIC_INVENTORY_VIEW)
    .select('*')
    .order('published_at', { ascending: false, nullsFirst: false })

  if (error) throw error
  return (data ?? []) as PublicInventoryLotRow[]
}

export async function fetchPublishedInventoryItems(): Promise<InventoryItem[]> {
  const rows = await fetchPublishedInventoryLots()
  return rows.map(mapPublicInventoryLotToInventoryItem)
}

export async function fetchPublishedAuctionCards(): Promise<AuctionCardData[]> {
  const rows = await fetchPublishedInventoryLots()
  return rows.map(mapPublicInventoryLotToAuctionCard)
}

export async function fetchPublishedAuctionCardBySlug(slug: string): Promise<AuctionCardData | null> {
  const client = requireSupabase()
  const { data, error } = await client
    .from(PUBLIC_INVENTORY_VIEW)
    .select('*')
    .eq('public_slug', slug)
    .maybeSingle()

  if (error) throw error
  return data ? mapPublicInventoryLotToAuctionCard(data as PublicInventoryLotRow) : null
}

export async function fetchPublishedAuctionCardById(id: string): Promise<AuctionCardData | null> {
  const client = requireSupabase()
  const { data, error } = await client
    .from(PUBLIC_INVENTORY_VIEW)
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (error) throw error
  return data ? mapPublicInventoryLotToAuctionCard(data as PublicInventoryLotRow) : null
}