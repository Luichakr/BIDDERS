export const supportedLocales = ['pl', 'en'] as const
export type Locale = 'pl' | 'en'
export const defaultLocale: Locale = 'en'
export const localeStorageKey = 'bidbiders-locale'

/**
 * Normalizes any BCP-47 language tag to a supported locale.
 * 'uk-UA' → 'uk', 'pl-PL' → 'pl', 'en-GB' → 'en'
 * Everything else → null (caller should fall back to defaultLocale)
 */
export function normalizeLocale(value?: string | null): Locale | null {
  if (!value) return null
  const normalized = value.toLowerCase().split('-')[0]
  if (normalized === 'pl') return 'pl'
  if (normalized === 'en') return 'en'
  return null
}

/** Reads browser language list and returns the first matching supported locale. */
export function getBrowserLocale(): Locale {
  const languages =
    typeof navigator !== 'undefined' && navigator.languages?.length
      ? navigator.languages
      : typeof navigator !== 'undefined'
        ? [navigator.language]
        : []

  for (const lang of languages) {
    const locale = normalizeLocale(lang)
    if (locale) return locale
  }
  return defaultLocale
}

/** Reads user's manually saved locale from localStorage. */
export function getSavedLocale(): Locale | null {
  try {
    const saved = window.localStorage.getItem(localeStorageKey)
    return normalizeLocale(saved)
  } catch {
    return null
  }
}

/** Saves locale to localStorage. */
export function saveLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(localeStorageKey, locale)
  } catch {
    // ignore (private browsing, quota, etc.)
  }
}

/**
 * Priority: manually saved → browser language → english fallback
 */
export function getPreferredLocale(): Locale {
  return getSavedLocale() ?? getBrowserLocale() ?? defaultLocale
}

/**
 * Replaces the locale segment in a pathname.
 * Works with BrowserRouter basename — pathname is already stripped of base.
 *
 * replaceLocaleInPath('/uk/catalog', 'pl') → '/pl/catalog'
 * replaceLocaleInPath('/contacts', 'uk')   → '/uk/contacts'
 */
export function replaceLocaleInPath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split('/').filter(Boolean)
  if (supportedLocales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale
  } else {
    segments.unshift(nextLocale)
  }
  return `/${segments.join('/')}`
}

/**
 * Builds a localized path.
 * Works relative to BrowserRouter basename — no need to include /BIDDERS/.
 *
 * localizedPath('uk', 'catalog')      → '/uk/catalog'
 * localizedPath('pl', 'lots/abc123') → '/pl/lots/abc123'
 * localizedPath('en')                → '/en'
 */
export function localizedPath(locale: Locale, path = ''): string {
  const cleanPath = path.replace(/^\/+/, '')
  return cleanPath ? `/${locale}/${cleanPath}` : `/${locale}`
}
