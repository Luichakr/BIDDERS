import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'

type CookieChoice = 'accepted' | 'necessary'

const CONSENT_KEY = 'bidders_cookie_consent_v1'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY)
    if (!saved) {
      setVisible(true)
    }
  }, [])

  const setChoice = (choice: CookieChoice) => {
    window.localStorage.setItem(CONSENT_KEY, choice)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <section className="cookie-banner" role="dialog" aria-live="polite" aria-label={t('cookieAriaLabel')}>
      <div className="cookie-banner__content">
        <div className="cookie-banner__copy">
          <p className="cookie-banner__title">{t('cookieTitle')}</p>
          <p className="cookie-banner__text">{t('cookieText')}</p>
        </div>
        <div className="cookie-banner__actions">
          <button type="button" className="bp-btn bp-btn-secondary" onClick={() => setChoice('necessary')}>{t('cookieNecessary')}</button>
          <button type="button" className="bp-btn bp-btn-primary" onClick={() => setChoice('accepted')}>{t('cookieAccept')}</button>
          <Link className="cookie-banner__link" to={routes.privacy}>{t('cookieDetails')}</Link>
        </div>
      </div>
    </section>
  )
}
