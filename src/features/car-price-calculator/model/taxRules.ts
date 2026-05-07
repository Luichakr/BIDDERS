import type { ImportTaxType } from './calculatorTypes'

const IMPORT_TAX_RATES: Record<ImportTaxType, number> = {
  standard:   0.10,
  electric:   0.00,
  truck:      0.22,
  motorcycle: 0.06,
}

export function getImportTaxRate(type: ImportTaxType): number {
  return IMPORT_TAX_RATES[type]
}
