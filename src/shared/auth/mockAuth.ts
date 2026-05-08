export type AuthUser = {
  id: string
  name: string
  email: string
  provider: 'password' | 'google'
}

const AUTH_USER_KEY = 'BIDDERS_AUTH_USER'

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

export function createMockUserId(email: string, provider: AuthUser['provider']) {
  const normalizedEmail = email.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'user'
  return `mock-${provider}-${normalizedEmail}`
}

export function getAuthUser(): AuthUser | null {
  if (!canUseStorage()) return null
  const raw = window.localStorage.getItem(AUTH_USER_KEY)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as Partial<AuthUser>
    if (!parsed?.email) return null
    const provider = parsed.provider === 'google' ? 'google' : 'password'
    return {
      id: parsed.id || createMockUserId(parsed.email, provider),
      name: parsed.name ?? parsed.email.split('@')[0] ?? 'User',
      email: parsed.email,
      provider,
    }
  } catch {
    return null
  }
}

export function setAuthUser(user: AuthUser) {
  if (!canUseStorage()) return
  window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user))
}

export function clearAuthUser() {
  if (!canUseStorage()) return
  window.localStorage.removeItem(AUTH_USER_KEY)
}
