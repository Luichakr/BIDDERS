import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'

type CookieChoice = 'accepted' | 'necessary'

const CONSENT_KEY = 'bidders_cookie_consent_v1'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

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
    <section className="cookie-banner" role="dialog" aria-live="polite" aria-label="Налаштування cookie">
      <div className="cookie-banner__content">
        <div className="cookie-banner__copy">
          <p className="cookie-banner__title">Ми використовуємо файли cookie</p>
          <p className="cookie-banner__text">Щоб сайт працював стабільно та швидко, ми використовуємо необхідні cookie. Аналітичні cookie допомагають покращувати сервіс. Ви можете обрати формат згоди.</p>
        </div>
        <div className="cookie-banner__actions">
          <button type="button" className="bp-btn bp-btn-secondary" onClick={() => setChoice('necessary')}>Лише необхідні</button>
          <button type="button" className="bp-btn bp-btn-primary" onClick={() => setChoice('accepted')}>Прийняти всі</button>
          <Link className="cookie-banner__link" to={routes.privacy}>Детальніше</Link>
        </div>
      </div>
    </section>
  )
}
