export const API_BASE_URL = String(
  import.meta.env.VITE_CALCULATOR_API_BASE_URL ?? 'https://api-lubeavto-partner.azurewebsites.net'
).replace(/\/$/, '')

export function getAuthToken(): string {
  const envToken = String(import.meta.env.VITE_CALCULATOR_API_TOKEN ?? '').trim()
  if (envToken) return envToken

  if (typeof window === 'undefined') return ''
  return (
    String(window.localStorage.getItem('BIDDERS_API_TOKEN') ?? '').trim() ||
    String(window.localStorage.getItem('lubeavtoPartnerToken') ?? '').trim()
  )
}

export function toAuthHeader(token: string): string {
  const t = token.trim()
  if (!t) return ''
  return /^Bearer\s+/i.test(t) ? t : `Bearer ${t}`
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getAuthToken()
  const authHeader = toAuthHeader(token)
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: 'no-store',
    ...init,
    headers: {
      ...(authHeader ? { Authorization: authHeader } : {}),
      ...(init?.headers ?? {}),
    },
  })
  if (!response.ok) {
    throw new Error(`API error ${response.status} — ${path}`)
  }
  return (await response.json()) as T
}
