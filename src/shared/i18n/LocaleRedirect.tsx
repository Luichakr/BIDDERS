import { Navigate } from 'react-router-dom'
import { getPreferredLocale } from './localeRouting'

/**
 * Mounted at path "/".
 * Detects the user's preferred locale and immediately redirects to /{locale}.
 *
 * Priority: localStorage → browser language → 'en'
 */
export function LocaleRedirect() {
  const locale = getPreferredLocale()
  return <Navigate replace to={`/${locale}`} />
}
