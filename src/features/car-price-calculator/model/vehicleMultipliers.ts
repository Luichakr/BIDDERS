import type { CarType } from './calculatorTypes'

// Ocean freight multipliers by vehicle type
// Source: NewBidBiddersTable VEHICLE_OCEAN_COEFF / BASE_OCEAN_COEFF (900)
// Automobiles: 800/900 ≈ 0.8889
// Crossover:   900/900 = 1.0
// SUVs:        950/900 ≈ 1.0556
// Moto:        450/900 = 0.5
// PickupTrucks:1200/900 ≈ 1.3333
export const VEHICLE_MULTIPLIERS: Record<CarType, number> = {
  Automobiles:  800 / 900,
  Crossover:    900 / 900,
  SUVs:         950 / 900,
  Moto:         450 / 900,
  PickupTrucks: 1200 / 900,
}
