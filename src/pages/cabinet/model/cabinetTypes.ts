export type CabinetCarStatus =
  | 'draft'
  | 'research'
  | 'bidding'
  | 'won'
  | 'shipping'
  | 'repair'
  | 'ready'
  | 'sold'

export type CabinetPublicationStatus = 'private' | 'published'

export type CabinetPhoto = {
  id: string
  name: string
  url: string
  storagePath?: string
  sizeKb: number
  width: number
  height: number
}

export type CabinetCar = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  make: string
  model: string
  year: string
  vin: string
  lotNumber: string
  stockNumber: string
  sourceUrl: string
  auction: string
  status: CabinetCarStatus
  bodyStyle: string
  bodyCode: string
  generation: string
  trim: string
  colorExterior: string
  colorInterior: string
  engineVolume: string
  engineCode: string
  enginePowerHp: string
  fuelType: string
  drivetrain: string
  transmission: string
  mileageKm: string
  odometerUnit: string
  location: string
  countryOfOrigin: string
  importDestination: string
  ownershipType: string
  keysStatus: string
  startCondition: string
  damagePrimary: string
  damageSecondary: string
  repairEstimateUsd: string
  targetBudgetUsd: string
  purchasePriceUsd: string
  customsAndFeesUsd: string
  sellerName: string
  sellerPhone: string
  description: string
  serviceHistory: string
  modifications: string
  notes: string
  publicationStatus: CabinetPublicationStatus
  publicTitle: string
  publicSlug: string
  publicDescription: string
  publicPriceUsd: string
  publicEstimateUsd: string
  publicBadge: string
  publicHotOffer: boolean
  publishedAt: string
  photos: CabinetPhoto[]
}

export const CABINET_CAR_MAX_PHOTOS = 12
export const CABINET_PHOTO_MAX_FILE_BYTES = 5 * 1024 * 1024

export function createEmptyCabinetCar(index = 1): CabinetCar {
  const now = new Date().toISOString()

  return {
    id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `car-${Date.now()}-${index}`,
    createdAt: now,
    updatedAt: now,
    title: `Car ${index}`,
    make: '',
    model: '',
    year: '',
    vin: '',
    lotNumber: '',
    stockNumber: '',
    sourceUrl: '',
    auction: 'BID BIDDERS',
    status: 'draft',
    bodyStyle: '',
    bodyCode: '',
    generation: '',
    trim: '',
    colorExterior: '',
    colorInterior: '',
    engineVolume: '',
    engineCode: '',
    enginePowerHp: '',
    fuelType: '',
    drivetrain: '',
    transmission: '',
    mileageKm: '',
    odometerUnit: 'km',
    location: '',
    countryOfOrigin: '',
    importDestination: '',
    ownershipType: '',
    keysStatus: '',
    startCondition: '',
    damagePrimary: '',
    damageSecondary: '',
    repairEstimateUsd: '',
    targetBudgetUsd: '',
    purchasePriceUsd: '',
    customsAndFeesUsd: '',
    sellerName: '',
    sellerPhone: '',
    description: '',
    serviceHistory: '',
    modifications: '',
    notes: '',
    publicationStatus: 'private',
    publicTitle: '',
    publicSlug: '',
    publicDescription: '',
    publicPriceUsd: '',
    publicEstimateUsd: '',
    publicBadge: '',
    publicHotOffer: false,
    publishedAt: '',
    photos: [],
  }
}