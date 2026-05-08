import type { Locale } from '../i18n/messages'
import { localizedPath } from '../config/routes'

export const authCallbackPath = 'auth/callback'

export function getAuthCallbackUrl(locale: Locale) {
  // BASE_URL is '/' on Cloudflare and '/BIDDERS/' on GitHub Pages.
  // localizedPath already returns '/pl/...' with a leading slash,
  // so strip the trailing slash from BASE_URL to avoid double-slash.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return `${window.location.origin}${base}${localizedPath(locale, authCallbackPath)}`
}