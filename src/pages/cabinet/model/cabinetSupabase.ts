import { isSupabaseConfigured, supabaseClient } from '../../../shared/auth/supabaseClient'
import type { CabinetCar, CabinetPhoto, CabinetPublicationStatus } from './cabinetTypes'
import type { CompressedPhotoAsset } from './photoCompression'

const CABINET_CARS_TABLE = 'cabinet_cars'
export const CABINET_PHOTOS_BUCKET = 'cabinet-photos'
const PHOTO_URL_TTL_SECONDS = 60 * 60 * 24 * 30

type CabinetCarRow = {
  user_id: string
  id: string
  created_at: string
  updated_at: string
  title: string
  make: string
  model: string
  year: string
  vin: string
  lot_number: string
  stock_number: string
  source_url: string
  auction: string
  status: CabinetCar['status']
  body_style: string
  body_code: string
  generation: string
  trim: string
  color_exterior: string
  color_interior: string
  engine_volume: string
  engine_code: string
  engine_power_hp: string
  fuel_type: string
  drivetrain: string
  transmission: string
  mileage_km: string
  odometer_unit: string
  location: string
  country_of_origin: string
  import_destination: string
  ownership_type: string
  keys_status: string
  start_condition: string
  damage_primary: string
  damage_secondary: string
  repair_estimate_usd: string
  target_budget_usd: string
  purchase_price_usd: string
  customs_and_fees_usd: string
  seller_name: string
  seller_phone: string
  description: string
  service_history: string
  modifications: string
  notes: string
  publication_status?: CabinetPublicationStatus
  public_title?: string
  public_slug?: string
  public_description?: string
  public_price_usd?: string
  public_estimate_usd?: string
  public_badge?: string
  public_hot_offer?: boolean
  published_at?: string
  photos: unknown
}

function requireSupabase() {
  if (!supabaseClient || !isSupabaseConfigured) {
    throw new Error('Supabase cabinet sync is not configured')
  }
  return supabaseClient
}

function sanitizeFileSegment(name: string) {
  const baseName = name.trim().toLowerCase().replace(/[^a-z0-9.-]+/g, '-')
  return baseName || 'photo.webp'
}

function toStoredPhoto(photo: CabinetPhoto): CabinetPhoto {
  if (!photo.storagePath) {
    return photo
  }

  return {
    ...photo,
    url: '',
  }
}

function normalizePhoto(photo: unknown): CabinetPhoto | null {
  if (!photo || typeof photo !== 'object') return null

  const candidate = photo as Partial<CabinetPhoto>
  if (!candidate.id || !candidate.name) return null

  return {
    id: String(candidate.id),
    name: String(candidate.name),
    url: String(candidate.url ?? ''),
    storagePath: candidate.storagePath ? String(candidate.storagePath) : undefined,
    sizeKb: Math.max(1, Number(candidate.sizeKb ?? 0) || 0),
    width: Math.max(0, Number(candidate.width ?? 0) || 0),
    height: Math.max(0, Number(candidate.height ?? 0) || 0),
  }
}

async function createSignedPhotoUrl(storagePath: string) {
  const client = requireSupabase()
  const { data, error } = await client.storage
    .from(CABINET_PHOTOS_BUCKET)
    .createSignedUrl(storagePath, PHOTO_URL_TTL_SECONDS)

  if (error) throw error
  return data.signedUrl
}

async function hydratePhotos(photos: CabinetPhoto[]) {
  return Promise.all(photos.map(async (photo) => {
    if (!photo.storagePath) {
      return photo
    }

    return {
      ...photo,
      url: await createSignedPhotoUrl(photo.storagePath),
    }
  }))
}

function mapRowToCabinetCar(row: CabinetCarRow): CabinetCar {
  return {
    id: row.id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    title: row.title,
    make: row.make,
    model: row.model,
    year: row.year,
    vin: row.vin,
    lotNumber: row.lot_number,
    stockNumber: row.stock_number,
    sourceUrl: row.source_url,
    auction: row.auction,
    status: row.status,
    bodyStyle: row.body_style,
    bodyCode: row.body_code,
    generation: row.generation,
    trim: row.trim,
    colorExterior: row.color_exterior,
    colorInterior: row.color_interior,
    engineVolume: row.engine_volume,
    engineCode: row.engine_code,
    enginePowerHp: row.engine_power_hp,
    fuelType: row.fuel_type,
    drivetrain: row.drivetrain,
    transmission: row.transmission,
    mileageKm: row.mileage_km,
    odometerUnit: row.odometer_unit,
    location: row.location,
    countryOfOrigin: row.country_of_origin,
    importDestination: row.import_destination,
    ownershipType: row.ownership_type,
    keysStatus: row.keys_status,
    startCondition: row.start_condition,
    damagePrimary: row.damage_primary,
    damageSecondary: row.damage_secondary,
    repairEstimateUsd: row.repair_estimate_usd,
    targetBudgetUsd: row.target_budget_usd,
    purchasePriceUsd: row.purchase_price_usd,
    customsAndFeesUsd: row.customs_and_fees_usd,
    sellerName: row.seller_name,
    sellerPhone: row.seller_phone,
    description: row.description,
    serviceHistory: row.service_history,
    modifications: row.modifications,
    notes: row.notes,
    publicationStatus: row.publication_status === 'published' ? 'published' : 'private',
    publicTitle: row.public_title ?? '',
    publicSlug: row.public_slug ?? '',
    publicDescription: row.public_description ?? '',
    publicPriceUsd: row.public_price_usd ?? '',
    publicEstimateUsd: row.public_estimate_usd ?? '',
    publicBadge: row.public_badge ?? '',
    publicHotOffer: Boolean(row.public_hot_offer),
    publishedAt: row.published_at ?? '',
    photos: Array.isArray(row.photos)
      ? row.photos.map(normalizePhoto).filter((photo): photo is CabinetPhoto => Boolean(photo))
      : [],
  }
}

function mapCabinetCarToRow(userId: string, car: CabinetCar): CabinetCarRow {
  return {
    user_id: userId,
    id: car.id,
    created_at: car.createdAt,
    updated_at: car.updatedAt,
    title: car.title,
    make: car.make,
    model: car.model,
    year: car.year,
    vin: car.vin,
    lot_number: car.lotNumber,
    stock_number: car.stockNumber,
    source_url: car.sourceUrl,
    auction: car.auction,
    status: car.status,
    body_style: car.bodyStyle,
    body_code: car.bodyCode,
    generation: car.generation,
    trim: car.trim,
    color_exterior: car.colorExterior,
    color_interior: car.colorInterior,
    engine_volume: car.engineVolume,
    engine_code: car.engineCode,
    engine_power_hp: car.enginePowerHp,
    fuel_type: car.fuelType,
    drivetrain: car.drivetrain,
    transmission: car.transmission,
    mileage_km: car.mileageKm,
    odometer_unit: car.odometerUnit,
    location: car.location,
    country_of_origin: car.countryOfOrigin,
    import_destination: car.importDestination,
    ownership_type: car.ownershipType,
    keys_status: car.keysStatus,
    start_condition: car.startCondition,
    damage_primary: car.damagePrimary,
    damage_secondary: car.damageSecondary,
    repair_estimate_usd: car.repairEstimateUsd,
    target_budget_usd: car.targetBudgetUsd,
    purchase_price_usd: car.purchasePriceUsd,
    customs_and_fees_usd: car.customsAndFeesUsd,
    seller_name: car.sellerName,
    seller_phone: car.sellerPhone,
    description: car.description,
    service_history: car.serviceHistory,
    modifications: car.modifications,
    notes: car.notes,
    publication_status: car.publicationStatus,
    public_title: car.publicTitle,
    public_slug: car.publicSlug,
    public_description: car.publicDescription,
    public_price_usd: car.publicPriceUsd,
    public_estimate_usd: car.publicEstimateUsd,
    public_badge: car.publicBadge,
    public_hot_offer: car.publicHotOffer,
    published_at: car.publishedAt,
    photos: car.photos.map(toStoredPhoto),
  }
}

export function canUseCloudCabinet(userId?: string | null) {
  return Boolean(userId && !userId.startsWith('mock-') && isSupabaseConfigured && supabaseClient)
}

export async function loadCabinetCarsFromSupabase(userId: string): Promise<CabinetCar[]> {
  const client = requireSupabase()
  const { data, error } = await client
    .from(CABINET_CARS_TABLE)
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })

  if (error) throw error

  const cars = (data ?? []).map((row) => mapRowToCabinetCar(row as CabinetCarRow))
  return Promise.all(cars.map(async (car) => ({
    ...car,
    photos: await hydratePhotos(car.photos),
  })))
}

export async function saveCabinetCarsToSupabase(userId: string, cars: CabinetCar[]): Promise<void> {
  // Guard: never save an empty array — prevents accidental data wipe if cloud
  // loaded an empty list and then a save fires before local data is merged.
  if (cars.length === 0) return

  const client = requireSupabase()
  const rows = cars.map((car) => mapCabinetCarToRow(userId, car))

  // Upsert only — never blindly delete first
  const { error: upsertError } = await client
    .from(CABINET_CARS_TABLE)
    .upsert(rows, { onConflict: 'user_id,id' })

  if (upsertError) throw upsertError

  // Delete only rows that exist in the cloud but NOT in the current local list.
  // We fetch IDs first so we never delete more than intended.
  const { data: existingRows, error: existingError } = await client
    .from(CABINET_CARS_TABLE)
    .select('id, updated_at')
    .eq('user_id', userId)

  if (existingError) throw existingError

  const currentIds = new Set(cars.map((car) => car.id))
  const idsToDelete = (existingRows ?? [])
    .map((row) => String((row as { id: string }).id))
    .filter((id) => !currentIds.has(id))

  // Extra safety: only delete if we have a substantial local list
  // (prevents wiping cloud data when local storage was just cleared)
  if (idsToDelete.length === 0 || cars.length === 0) return

  const { error: deleteError } = await client
    .from(CABINET_CARS_TABLE)
    .delete()
    .eq('user_id', userId)
    .in('id', idsToDelete)

  if (deleteError) throw deleteError
}

export async function uploadCabinetPhotoToSupabase(userId: string, carId: string, asset: CompressedPhotoAsset): Promise<CabinetPhoto> {
  const client = requireSupabase()
  const storagePath = `${userId}/${carId}/${asset.id}-${sanitizeFileSegment(asset.name)}`

  const { error: uploadError } = await client.storage
    .from(CABINET_PHOTOS_BUCKET)
    .upload(storagePath, asset.blob, {
      cacheControl: '3600',
      contentType: 'image/webp',
      upsert: true,
    })

  if (uploadError) throw uploadError

  return {
    id: asset.id,
    name: asset.name,
    url: await createSignedPhotoUrl(storagePath),
    storagePath,
    sizeKb: asset.sizeKb,
    width: asset.width,
    height: asset.height,
  }
}

export async function deleteCabinetPhotosFromSupabase(storagePaths: string[]): Promise<void> {
  const paths = storagePaths.filter(Boolean)
  if (paths.length === 0) return

  const client = requireSupabase()
  const { error } = await client.storage.from(CABINET_PHOTOS_BUCKET).remove(paths)
  if (error) throw error
}