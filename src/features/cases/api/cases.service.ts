export interface CaseRecord {
  id: string
  model: string
  turnkey: number
  market: number
  currency: 'EUR' | 'USD'
  source: string
}

const FALLBACK_CASES: CaseRecord[] = [
  {
    id: 'case-bmw-x5-2021',
    model: 'BMW X5 xDrive45e 2021',
    turnkey: 13500,
    market: 18000,
    currency: 'EUR',
    source: 'BIDDERS internal delivery ledger',
  },
  {
    id: 'case-porsche-cayenne-2024',
    model: 'PORSCHE CAYENNE COUPE 2024',
    turnkey: 20200,
    market: 26000,
    currency: 'EUR',
    source: 'BIDDERS internal delivery ledger',
  },
  {
    id: 'case-toyota-camry-2026',
    model: 'TOYOTA CAMRY XSE 2026',
    turnkey: 16900,
    market: 21100,
    currency: 'EUR',
    source: 'BIDDERS internal delivery ledger',
  },
]

export async function getCasesData(): Promise<CaseRecord[]> {
  try {
    const response = await fetch('/data/cases.json', { cache: 'no-store' })
    if (!response.ok) {
      return FALLBACK_CASES
    }
    const payload = (await response.json()) as CaseRecord[]
    if (!Array.isArray(payload) || payload.length === 0) {
      return FALLBACK_CASES
    }
    return payload
  } catch {
    return FALLBACK_CASES
  }
}

export function formatCaseMoney(value: number, currency: 'EUR' | 'USD'): string {
  const symbol = currency === 'EUR' ? 'EUR' : 'USD'
  return `${symbol} ${value.toLocaleString('en-US')}`
}

export function getCaseSavings(caseItem: CaseRecord): number {
  return Math.max(caseItem.market - caseItem.turnkey, 0)
}
