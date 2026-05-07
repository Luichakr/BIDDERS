import { useEffect, useState } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ExchangeRates {
  /** USD per 1 EUR  (e.g. 0.8555) — used as eurUsdRate in calculations */
  eurUsdRate: number
  /** PLN per 1 EUR  (e.g. 4.2551) — for future Polish locale display */
  eurPlnRate: number
  /** PLN per 1 USD  (e.g. 3.6403) — for future Polish locale display */
  usdPlnRate: number
  /** Date string from NBP (e.g. "2026-05-05") — for display in UI */
  rateDate: string
}

// ─── Fallback values (NBP average 2025) ──────────────────────────────────────

export const FALLBACK_EUR_USD_RATE = 0.8533  // kept for backward compat

export const FALLBACK_RATES: ExchangeRates = {
  eurUsdRate: 0.8533,
  eurPlnRate: 4.25,
  usdPlnRate: 3.63,
  rateDate: '',
}

// ─── Fetch ────────────────────────────────────────────────────────────────────

/**
 * Fetches EUR/USD, EUR/PLN, USD/PLN rates from NBP Poland API (table A).
 * One request — all rates in a single response.
 * Falls back to FALLBACK_RATES on any error.
 */
export async function fetchExchangeRates(): Promise<ExchangeRates> {
  const response = await fetch('https://api.nbp.pl/api/exchangerates/tables/A/?format=json')
  const data = await response.json()
  const table = data[0] as { effectiveDate: string; rates: Array<{ code: string; mid: number }> }
  const rates = table?.rates ?? []

  const usdPln = rates.find((r) => r.code === 'USD')?.mid
  const eurPln = rates.find((r) => r.code === 'EUR')?.mid

  if (!usdPln || !eurPln) return FALLBACK_RATES

  return {
    eurUsdRate: usdPln / eurPln,   // USD per 1 EUR
    eurPlnRate: eurPln,             // PLN per 1 EUR
    usdPlnRate: usdPln,             // PLN per 1 USD
    rateDate: table.effectiveDate ?? '',
  }
}

/** @deprecated Use fetchExchangeRates instead */
export async function fetchEurUsdRate(): Promise<number> {
  return fetchExchangeRates().then((r) => r.eurUsdRate)
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export interface UseExchangeRateResult {
  eurUsdRate: number
  eurPlnRate: number
  usdPlnRate: number
  rateDate: string
  loading: boolean
  error: string | null
}

/**
 * React hook. Fetches all NBP rates on mount (once per session).
 * Returns fallback values while loading or on error.
 */
export function useExchangeRate(): UseExchangeRateResult {
  const [rates, setRates] = useState<ExchangeRates>(FALLBACK_RATES)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetchExchangeRates()
      .then((r) => { setRates(r); setError(null) })
      .catch(() => { setError('Failed to fetch exchange rates') })
      .finally(() => { setLoading(false) })
  }, [])

  return { ...rates, loading, error }
}
