import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { messages, type MessageKey } from './messages'
import { autoOverrides, manualOverrides } from './overrides'
import {
  type Locale,
  replaceLocaleInPath,
  saveLocale,
} from './localeRouting'

// ─────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────

type I18nContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

// ─────────────────────────────────────────────
// Provider
// locale comes from URL (passed by LocaleGuard)
// ─────────────────────────────────────────────

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode
  locale: Locale
}) {
  const navigate = useNavigate()
  const location = useLocation()

  // Keep <html lang=""> in sync with current locale
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  /**
   * Switches language:
   * 1. Saves choice to localStorage (so next root visit keeps this lang)
   * 2. Navigates to the same page under the new locale prefix
   */
  const setLocale = useCallback(
    (next: Locale) => {
      saveLocale(next)
      navigate(replaceLocaleInPath(location.pathname, next))
    },
    [navigate, location.pathname],
  )

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string) => {
        const typedKey = key as MessageKey
        const manual = manualOverrides[locale]?.[typedKey]
        if (manual) return manual
        const auto = autoOverrides[locale]?.[typedKey]
        if (auto) return auto
        // Fallback order: current locale → English → raw key
        return messages[locale][typedKey] ?? messages.en[typedKey] ?? key
      },
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// ─────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
