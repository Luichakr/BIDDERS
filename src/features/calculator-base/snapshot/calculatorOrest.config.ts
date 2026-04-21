export type EuPortCode = 'rotterdam' | 'gdynia' | 'bremerhaven' | 'klaipeda'

export interface PercentProfile {
  id: string
  label: string
  rate: number
}

export interface EuPortOption {
  id: EuPortCode
  label: string
  oceanDeliveryUsd: number
  deliveryToWarsawUsd: number
  customsAgencyUsd: number
}

export const EU_PORT_OPTIONS: EuPortOption[] = [
  { id: 'rotterdam', label: 'Rotterdam, NL', oceanDeliveryUsd: 1095, deliveryToWarsawUsd: 640, customsAgencyUsd: 540 },
  { id: 'gdynia', label: 'Gdynia, PL', oceanDeliveryUsd: 920, deliveryToWarsawUsd: 290, customsAgencyUsd: 500 },
  { id: 'bremerhaven', label: 'Bremerhaven, DE', oceanDeliveryUsd: 1030, deliveryToWarsawUsd: 510, customsAgencyUsd: 520 },
  { id: 'klaipeda', label: 'Klaipeda, LT', oceanDeliveryUsd: 980, deliveryToWarsawUsd: 430, customsAgencyUsd: 510 },
]

export const IMPORT_TAX_PROFILES: PercentProfile[] = [
  { id: 'auto-10', label: '10% (Автомобіль)', rate: 0.1 },
  { id: 'truck-22', label: '22% (Вантажний)', rate: 0.22 },
  { id: 'moto-6', label: '6% (Мотоцикл)', rate: 0.06 },
  { id: 'classic-0', label: '0% (Класика)', rate: 0 },
]

export const VAT_PROFILES: PercentProfile[] = [
  { id: 'bremerhaven-19', label: '19% (Bremerhaven)', rate: 0.19 },
  { id: 'rotterdam-21', label: '21% (Rotterdam)', rate: 0.21 },
  { id: 'gdynia-23', label: '23% (Gdynia)', rate: 0.23 },
  { id: 'classic-9', label: '9% (Класика)', rate: 0.09 },
]

export function percentLabel(rate: number): string {
  return `${Math.round(rate * 100)}%`
}

export function computeEuCustoms(customsBase: number, importTaxRate: number, vatRate: number, customsAgencyUsd: number): {
  importDuty: number
  vat: number
  customsAgency: number
  customsBlock: number
} {
  const importDuty = customsBase * importTaxRate
  const vat = (customsBase + importDuty) * vatRate
  const customsAgency = customsAgencyUsd
  const customsBlock = importDuty + vat + customsAgency

  return { importDuty, vat, customsAgency, customsBlock }
}
