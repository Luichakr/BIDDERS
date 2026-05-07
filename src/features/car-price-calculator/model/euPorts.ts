import type { EuPortId } from './calculatorTypes'

export interface EuPort {
  id: EuPortId
  name: string
  vatRate: number
  customsAgencyEur: number
}

export const EU_PORTS: Record<EuPortId, EuPort> = {
  rotterdam: {
    id: 'rotterdam',
    name: 'Rotterdam, NL',
    vatRate: 0.21,
    customsAgencyEur: 500,
  },
  gdynia: {
    id: 'gdynia',
    name: 'Gdynia, PL',
    vatRate: 0.23,
    customsAgencyEur: 500,
  },
  bremerhaven: {
    id: 'bremerhaven',
    name: 'Bremerhaven, DE',
    vatRate: 0.19,
    customsAgencyEur: 500,
  },
  klaipeda: {
    id: 'klaipeda',
    name: 'Klaipeda, LT',
    vatRate: 0.21,
    customsAgencyEur: 500,
  },
}
