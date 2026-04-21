import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { messages, type Locale, type MessageKey } from './messages'
import { autoOverrides, manualOverrides } from './overrides'

type I18nContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
  t: (key: MessageKey) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'bidbiders-locale'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'uk' || saved === 'en' || saved === 'pl') {
      return saved
    }
    return 'uk'
  })

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => {
        const manual = manualOverrides[locale]?.[key]
        if (manual) return manual
        const auto = autoOverrides[locale]?.[key]
        if (auto) return auto
        return messages[locale][key] ?? messages.uk[key]
      },
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
