import type { Locale } from '../i18n/messages'
import { localizedPath } from '../config/routes'

export const authCallbackPath = 'auth/callback'

export function getAuthCallbackUrl(locale: Locale) {
  return `${window.location.origin}${import.meta.env.BASE_URL}${localizedPath(locale, authCallbackPath)}`
}