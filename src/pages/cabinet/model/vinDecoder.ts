import type { CabinetCar } from './cabinetTypes'

type VpicResult = {
  Variable?: string | null
  Value?: string | null
}

export type VinDecodeResult = {
  normalizedVin: string
  fields: Partial<CabinetCar>
  warnings: string[]
  completeness: 'full' | 'partial'
  source: 'nhtsa-vpic'
}

const VIN_LENGTH = 17

function cleanValue(value: string | null | undefined) {
  const nextValue = String(value ?? '').trim()
  if (!nextValue || nextValue === '0' || nextValue === 'Not Applicable') {
    return ''
  }
  return nextValue
}

function getVariableValue(results: VpicResult[], variable: string) {
  const match = results.find((item) => item.Variable === variable)
  return cleanValue(match?.Value)
}

function joinValues(values: Array<string | null | undefined>, separator = ' ') {
  return values.map((value) => cleanValue(value)).filter(Boolean).join(separator).trim()
}

export function normalizeVin(vin: string) {
  return vin.toUpperCase().replace(/[^A-Z0-9]/g, '')
}

export function canDecodeVin(vin: string) {
  return normalizeVin(vin).length === VIN_LENGTH
}

export async function decodeVin(vin: string): Promise<VinDecodeResult> {
  const normalizedVin = normalizeVin(vin)

  if (normalizedVin.length !== VIN_LENGTH) {
    throw new Error('VIN must be 17 characters long')
  }

  const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinextended/${encodeURIComponent(normalizedVin)}?format=json`)
  if (!response.ok) {
    throw new Error('VIN decode request failed')
  }

  const payload = await response.json() as { Results?: VpicResult[] }
  const results = Array.isArray(payload.Results) ? payload.Results : []

  const make = getVariableValue(results, 'Make')
  const model = getVariableValue(results, 'Model')
  const year = getVariableValue(results, 'Model Year')
  const bodyStyle = getVariableValue(results, 'Body Class')
  const generation = joinValues([
    getVariableValue(results, 'Series'),
    getVariableValue(results, 'Series2'),
  ])
  const trim = joinValues([
    getVariableValue(results, 'Trim'),
    getVariableValue(results, 'Trim2'),
  ])
  const engineVolume = getVariableValue(results, 'Displacement (L)')
  const engineCode = joinValues([
    getVariableValue(results, 'Engine Model'),
    getVariableValue(results, 'Engine Configuration'),
  ], ' / ')
  const enginePowerHp = getVariableValue(results, 'Engine Brake (hp) From')
  const fuelType = getVariableValue(results, 'Fuel Type - Primary')
  const drivetrain = getVariableValue(results, 'Drive Type')
  const transmission = joinValues([
    getVariableValue(results, 'Transmission Style'),
    getVariableValue(results, 'Transmission Speeds'),
  ])
  const countryOfOrigin = getVariableValue(results, 'Plant Country')
  const location = joinValues([
    getVariableValue(results, 'Plant City'),
    getVariableValue(results, 'Plant State'),
    countryOfOrigin,
  ], ', ')

  const fields: Partial<CabinetCar> = {
    vin: normalizedVin,
    make,
    model,
    year,
    bodyStyle,
    generation,
    trim,
    engineVolume: engineVolume ? `${engineVolume} L` : '',
    engineCode,
    enginePowerHp,
    fuelType,
    drivetrain,
    transmission,
    countryOfOrigin,
    location,
  }

  const decodedTitle = joinValues([year, make, model])
  if (decodedTitle) {
    fields.title = decodedTitle
  }

  const warnings = [getVariableValue(results, 'Error Text')].filter(Boolean)
  const errorCode = getVariableValue(results, 'Error Code')
  const populatedFieldsCount = Object.values(fields).filter(Boolean).length

  if (populatedFieldsCount <= 1) {
    throw new Error('VIN decoder returned no usable vehicle details')
  }

  return {
    normalizedVin,
    fields,
    warnings,
    completeness: errorCode === '0' && populatedFieldsCount >= 6 ? 'full' : 'partial',
    source: 'nhtsa-vpic',
  }
}