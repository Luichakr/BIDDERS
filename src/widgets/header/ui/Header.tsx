import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { routes } from '../../../shared/config/routes'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const { locale, setLocale, t } = useI18n()

  const closeMobile = () => setMobileOpen(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={scrolled ? 'px-header scrolled' : 'px-header'}>
        <div className="px-header__bar">
          <NavLink className="px-header__logo" to={routes.home} aria-label="BIDDERS" onClick={closeMobile}>
            <img src={`${import.meta.env.BASE_URL}images/logo-carwaw-black.png`} alt="BIDDERS" />
          </NavLink>

          <nav className="px-header__nav" aria-label="Primary navigation">
            <NavLink to={routes.home}>{t('navHome')}</NavLink>
            <NavLink to={routes.catalog}>{t('navCatalog')}</NavLink>
            <NavLink to={routes.transit}>{t('navTransit')}</NavLink>
            <NavLink to={routes.calculator}>{t('navCalculator')}</NavLink>
            <NavLink to={routes.blog}>Блог</NavLink>
            <NavLink to={routes.faq}>FAQ</NavLink>
            <NavLink to={routes.contacts}>Контакти</NavLink>
          </nav>

          <div className="px-header__right">
            <a href="tel:+48784890644" className="px-header__phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +48 784 890 644
            </a>

            <div className="px-locale" role="group" aria-label="Language switcher">
              <button type="button" className={locale === 'uk' ? 'active' : ''} onClick={() => setLocale('uk')}>UA</button>
              <button type="button" className={locale === 'pl' ? 'active' : ''} onClick={() => setLocale('pl')}>PL</button>
              <button type="button" className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')}>EN</button>
            </div>

            <NavLink to={routes.contacts} className="px-header__cta">
              <span>{t('headerContact')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </NavLink>

            <button
              className={mobileOpen ? 'px-burger active' : 'px-burger'}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className="px-header__progress" style={{ width: `${progress}%` }} aria-hidden="true"></div>
      </header>

      <div className={mobileOpen ? 'px-mobile-backdrop open' : 'px-mobile-backdrop'} onClick={closeMobile}></div>
      <nav className={mobileOpen ? 'px-mobile open' : 'px-mobile'} aria-label="Mobile menu">
        <div className="px-mobile__head">
          <p className="px-mobile__kicker">Меню · BIDDERS</p>
          <button type="button" className="px-mobile__close" aria-label="Close" onClick={closeMobile}>×</button>
        </div>
        <div className="px-mobile__links">
          <NavLink to={routes.home} onClick={closeMobile}>{t('navHome')}</NavLink>
          <NavLink to={routes.catalog} onClick={closeMobile}>{t('navCatalog')}</NavLink>
          <NavLink to={routes.inStock} onClick={closeMobile}>Авто в наявності</NavLink>
          <NavLink to={routes.transit} onClick={closeMobile}>{t('navTransit')}</NavLink>
          <NavLink to={routes.calculator} onClick={closeMobile}>{t('navCalculator')}</NavLink>
          <NavLink to={routes.blog} onClick={closeMobile}>Блог</NavLink>
          <NavLink to={routes.cases} onClick={closeMobile}>Кейси</NavLink>
          <NavLink to={routes.faq} onClick={closeMobile}>FAQ</NavLink>
          <NavLink to={routes.contacts} onClick={closeMobile}>Контакти</NavLink>
        </div>

        <div className="px-mobile__contact">
          <a href="tel:+48784890644" className="px-mobile__phone">+48 784 890 644</a>
          <NavLink to={routes.contacts} className="px-header__cta" onClick={closeMobile}>
            <span>{t('headerContact')}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </NavLink>
        </div>

        <div className="px-locale px-locale--mobile">
          <button type="button" className={locale === 'uk' ? 'active' : ''} onClick={() => setLocale('uk')}>UA</button>
          <button type="button" className={locale === 'pl' ? 'active' : ''} onClick={() => setLocale('pl')}>PL</button>
          <button type="button" className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')}>EN</button>
        </div>
      </nav>
    </>
  )
}
