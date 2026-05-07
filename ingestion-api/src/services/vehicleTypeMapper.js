/**
 * Maps raw vehicle body/type strings from Copart / IAAI
 * to the calculator's CarType and ImportTaxType.
 *
 * Calculator types:
 *   CarType:       Automobiles | Crossover | SUVs | Moto | PickupTrucks
 *   ImportTaxType: standard    | electric  | truck | motorcycle
 */

const BODY_RULES = [
  // Motorcycle / moto
  {
    patterns: [/motor\s?cycle/i, /\bmoto\b/i, /\bbike\b/i, /\bscooter\b/i, /\batv\b/i, /\bpwc\b/i, /\bsnow\b/i],
    carType: 'Moto',
    importTaxType: 'motorcycle',
  },
  // Pickup trucks
  {
    patterns: [/\bpickup\b/i, /\btruck\b/i, /crew\s?cab/i, /extended\s?cab/i, /\bstep.*cab/i, /\bregular\s?cab/i],
    carType: 'PickupTrucks',
    importTaxType: 'truck',
  },
  // SUV
  {
    patterns: [/\bsuv\b/i, /sport.?utility/i, /\b4x4\b/i],
    carType: 'SUVs',
    importTaxType: 'standard',
  },
  // Crossover
  {
    patterns: [/\bcrossover\b/i, /\bcuv\b/i],
    carType: 'Crossover',
    importTaxType: 'standard',
  },
  // Automobiles (sedan / hatchback / coupe / convertible / wagon / van / minivan)
  {
    patterns: [/\bsedan\b/i, /\bhatchback\b/i, /\bcoupe\b/i, /\bconvert/i, /\bwagon\b/i, /\bvan\b/i, /\bminivan\b/i, /\bcabriolet\b/i],
    carType: 'Automobiles',
    importTaxType: 'standard',
  },
]

/**
 * @param {object} params
 * @param {string|null} params.bodyStyle   - e.g. "Sedan", "SUV", "Convertible"
 * @param {string|null} params.vehicleType - raw vehicle type string
 * @param {string|null} params.fuel        - e.g. "Electric", "Hybrid", "Gas"
 * @returns {{ carType: string, importTaxType: string }}
 */
export function mapVehicleType({ bodyStyle = null, vehicleType = null, fuel = null } = {}) {
  const haystack = [bodyStyle, vehicleType].filter(Boolean).join(' ').toLowerCase()

  let carType = 'Automobiles'
  let importTaxType = 'standard'

  if (haystack) {
    for (const rule of BODY_RULES) {
      if (rule.patterns.some((re) => re.test(haystack))) {
        carType = rule.carType
        importTaxType = rule.importTaxType
        break
      }
    }
  }

  // Electric override — always wins over other importTaxType (except motorcycle)
  if (importTaxType !== 'motorcycle') {
    const fuelStr = (fuel || '').toLowerCase()
    if (/electric|ev\b|battery/i.test(fuelStr) || /electric/i.test(haystack)) {
      importTaxType = 'electric'
    }
  }

  return { carType, importTaxType }
}
