import type { CarType, ImportTaxType } from './calculatorTypes'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ResolvedAuctionLot {
  source: 'copart' | 'iaai'
  lotId: string
  title: string | null
  year: number | null
  make: string | null
  model: string | null
  bodyStyle: string | null
  mappedCarType: CarType
  mappedImportTaxType: ImportTaxType
  locationName: string | null
  locationCity: string | null
  locationState: string | null
  matchedBranchId: number | null
  matchedBranchName: string | null
  lotPrice: number
  priceSource: 'buyNow' | 'currentBid' | null
  image: string | null
  url: string
}

export interface ResolveError {
  ok: false
  error: string
}

export type ResolveResult =
  | { ok: true; partial?: false; data: ResolvedAuctionLot }
  | { ok: true; partial: true; data: ResolvedAuctionLot }   // IAAI partial: auction set, price/city need manual input
  | ResolveError

// ─── API base URL ─────────────────────────────────────────────────────────────

function getApiBase(): string {
  const fromEnv = (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_INGESTION_API_BASE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  // In production: the ingestion-api is a separate service.
  // If not configured, requests will 404 gracefully — the UI handles that case.
  return '/ingestion-api'
}

// ─── Resolver ─────────────────────────────────────────────────────────────────

/**
 * Calls the ingestion-api to resolve a Copart / IAAI lot URL
 * and returns structured data suitable for pre-filling the calculator.
 *
 * Never throws — always returns ResolveResult.
 */
export async function resolveAuctionLotUrl(url: string): Promise<ResolveResult> {
  try {
    const apiBase = getApiBase()
    const response = await fetch(`${apiBase}/api/auction-lot/resolve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
      signal: AbortSignal.timeout(30_000),
    })

    const body = (await response.json()) as { ok: boolean; partial?: boolean; data?: ResolvedAuctionLot; error?: string }

    if (!response.ok || !body.ok) {
      return { ok: false, error: body.error ?? `HTTP ${response.status}` }
    }

    if (body.partial) {
      return { ok: true, partial: true, data: body.data as ResolvedAuctionLot }
    }

    return { ok: true, data: body.data as ResolvedAuctionLot }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    return { ok: false, error: msg }
  }
}
