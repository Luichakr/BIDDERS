import { useEffect, useState } from 'react'
import { useI18n } from './I18nProvider'
import { getBrowserLocale, getSavedLocale, type Locale } from './localeRouting'

const DISMISSED_KEY = 'bidbiders-locale-prompt-dismissed'

const FLAG: Record<Locale, string> = {
  uk: '🇺🇦',
  pl: '🇵🇱',
  en: '🇬🇧',
}

const COPY: Record<Locale, { text: string; confirm: string; dismiss: string }> = {
  uk: {
    text: 'Схоже, вам зручніше українською. Перейти на українську версію?',
    confirm: 'Перейти',
    dismiss: 'Залишитися',
  },
  pl: {
    text: 'Wygląda na to, że preferujesz język polski. Przejść na polską wersję?',
    confirm: 'Przejdź',
    dismiss: 'Zostań',
  },
  en: {
    text: 'Looks like English may be more convenient for you. Switch to English?',
    confirm: 'Switch',
    dismiss: 'Stay',
  },
}

export function LanguageSuggestion() {
  const { locale, setLocale } = useI18n()
  const [suggestedLocale, setSuggestedLocale] = useState<Locale | null>(null)

  useEffect(() => {
    // Don't show if user already manually chose a locale
    if (getSavedLocale() !== null) return
    // Don't show if already dismissed
    if (window.localStorage.getItem(DISMISSED_KEY) === 'true') return

    const browser = getBrowserLocale()
    // Only show when browser locale differs from current page locale
    if (browser !== locale) {
      setSuggestedLocale(browser)
    }
  }, [locale])

  const handleConfirm = () => {
    if (!suggestedLocale) return
    setSuggestedLocale(null)
    setLocale(suggestedLocale)
  }

  const handleDismiss = () => {
    window.localStorage.setItem(DISMISSED_KEY, 'true')
    setSuggestedLocale(null)
  }

  if (!suggestedLocale) return null

  const copy = COPY[suggestedLocale]
  const flag = FLAG[suggestedLocale]

  return (
    <div className="lang-suggest" role="alert" aria-live="polite">
      <div className="lang-suggest__inner">
        <span className="lang-suggest__flag" aria-hidden="true">{flag}</span>
        <p className="lang-suggest__text">{copy.text}</p>
        <div className="lang-suggest__actions">
          <button
            type="button"
            className="lang-suggest__btn lang-suggest__btn--primary"
            onClick={handleConfirm}
          >
            {copy.confirm}
          </button>
          <button
            type="button"
            className="lang-suggest__btn lang-suggest__btn--ghost"
            onClick={handleDismiss}
          >
            {copy.dismiss}
          </button>
        </div>
        <button
          type="button"
          className="lang-suggest__close"
          aria-label="Close"
          onClick={handleDismiss}
        >
          ×
        </button>
      </div>
    </div>
  )
}
