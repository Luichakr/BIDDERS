import { z } from 'zod'

export const lotStatusSchema = z.enum(['active', 'live', 'sold', 'archived', 'unavailable'])

export const unifiedLotSchema = z.object({
  id: z.string(),
  source: z.enum(['copart', 'iaai']),
  lotId: z.string(),
  externalId: z.string().nullable(),
  url: z.string().url().nullable(),
  vin: z.string().nullable(),
  year: z.number().int().nullable(),
  make: z.string().nullable(),
  model: z.string().nullable(),
  trim: z.string().nullable(),
  title: z.string().nullable(),
  damagePrimary: z.string().nullable(),
  damageSecondary: z.string().nullable(),
  condition: z.string().nullable(),
  odometer: z.number().nullable(),
  odometerUnit: z.string().nullable(),
  transmission: z.string().nullable(),
  drivetrain: z.string().nullable(),
  fuel: z.string().nullable(),
  engine: z.string().nullable(),
  bodyStyle: z.string().nullable(),
  color: z.string().nullable(),
  keys: z.string().nullable(),
  saleStatus: z.string().nullable(),
  saleDate: z.string().nullable(),
  currentBid: z.number().nullable(),
  buyNowPrice: z.number().nullable(),
  locationName: z.string().nullable(),
  locationCity: z.string().nullable(),
  locationState: z.string().nullable(),
  seller: z.string().nullable(),
  images: z.array(z.string().url()),
  mainImage: z.string().url().nullable(),
  imageCount: z.number().int().nonnegative(),
  titleStatus: z.string().nullable(),
  rawSourcePayload: z.unknown(),
  status: lotStatusSchema,
  firstSeenAt: z.string(),
  lastSeenAt: z.string(),
  updatedAt: z.string(),
})

export function validateLotOrThrow(lot) {
  return unifiedLotSchema.parse(lot)
}
