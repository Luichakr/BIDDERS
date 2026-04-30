import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { ROUTE_IMAGES } from '../../../shared/config/routeCards'

const LOCALE_LABELS: Record<string, string> = { uk: 'UA', pl: 'PL', en: 'EN' }
const LOCALE_ORDER = ['uk', 'pl', 'en'] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [progress, setProgress] = useState(0)
  const lastScrollY = useRef(0)
  const scrollDir = useRef<'up' | 'down'>('up')
  const [localeOpen, setLocaleOpen] = useState(false)
  const [catalogOpen, setCatalogOpen] = useState(false)
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false)
  const localeRef = useRef<HTMLDivElement | null>(null)
  const catalogRef = useRef<HTMLDivElement | null>(null)
  const catalogLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { locale, setLocale, t } = useI18n()
  const lp = (path: string) => localizedPath(locale, path)

  const closeMobile = () => setMobileOpen(false)
  const openMobile = () => { setHidden(false); setMobileOpen(true) }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0)

      // Hide on scroll down, show on scroll up (mobile only)
      if (window.innerWidth <= 768) {
        const diff = y - lastScrollY.current
        if (diff > 0) {
          scrollDir.current = 'down'
        } else if (diff < 0) {
          scrollDir.current = 'up'
        }
        if (scrollDir.current === 'down' && y > 100) {
          setHidden(true)
          document.documentElement.classList.add('header-hidden')
        } else if (scrollDir.current === 'up') {
          setHidden(false)
          document.documentElement.classList.remove('header-hidden')
        }
      } else {
        setHidden(false)
      }
      lastScrollY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!localeOpen) return
    const onDown = (e: MouseEvent) => {
      if (!localeRef.current) return
      if (!localeRef.current.contains(e.target as Node)) setLocaleOpen(false)
    }
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setLocaleOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onEsc)
    }
  }, [localeOpen])

  // Close catalog dropdown on outside click
  useEffect(() => {
    if (!catalogOpen) return
    const onDown = (e: MouseEvent) => {
      if (!catalogRef.current) return
      if (!catalogRef.current.contains(e.target as Node)) setCatalogOpen(false)
    }
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setCatalogOpen(false) }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onEsc)
    }
  }, [catalogOpen])

  const pickLocale = (value: 'uk' | 'pl' | 'en') => {
    setLocale(value)
    setLocaleOpen(false)
  }

  return (
    <>
      <header className={['px-header', scrolled ? 'scrolled' : '', hidden ? 'hidden-up' : ''].filter(Boolean).join(' ')}>
        <div className="px-header__bar">
          <NavLink className="px-header__logo" to={lp(routePaths.home)} aria-label="BIDDERS" onClick={closeMobile}>
            <img src={`${import.meta.env.BASE_URL}images/logo-carwaw-black.png`} alt="BIDDERS" />
          </NavLink>

          <nav className="px-header__nav" aria-label={t('headerPrimaryNavAria')}>
            <NavLink to={lp(routePaths.home)}>{t('navHome')}</NavLink>

            {/* Catalog dropdown */}
            <div
              ref={catalogRef}
              className={catalogOpen ? 'px-nav-dropdown open' : 'px-nav-dropdown'}
              onMouseEnter={() => {
                if (catalogLeaveTimer.current) { clearTimeout(catalogLeaveTimer.current); catalogLeaveTimer.current = null }
                setCatalogOpen(true)
              }}
              onMouseLeave={() => {
                catalogLeaveTimer.current = setTimeout(() => setCatalogOpen(false), 120)
              }}
            >
              <button
                type="button"
                className="px-nav-dropdown__trigger"
                aria-haspopup="true"
                aria-expanded={catalogOpen}
                onClick={() => setCatalogOpen((v) => !v)}
              >
                {t('navCatalog')}
                <svg className="px-nav-dropdown__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              {/* Desktop mega-menu */}
              <div className="px-mega-menu" role="menu" aria-hidden={!catalogOpen}>
                <div className="px-mega-menu__inner">
                  <NavLink className="px-mega-card" to={lp(routePaths.inStock)} role="menuitem" onClick={() => setCatalogOpen(false)}>
                    <div className="px-mega-card__img-wrap">
                      <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.inStock}`} alt={t('homeRouteStockTitle')} />
                    </div>
                    <span className="px-mega-card__label">{t('homeRouteStockTitle')}</span>
                  </NavLink>
                  <NavLink className="px-mega-card" to={lp(routePaths.transit)} role="menuitem" onClick={() => setCatalogOpen(false)}>
                    <div className="px-mega-card__img-wrap">
                      <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.transit}`} alt={t('homeRouteTransitTitle')} />
                    </div>
                    <span className="px-mega-card__label">{t('homeRouteTransitTitle')}</span>
                  </NavLink>
                  <NavLink className="px-mega-card" to={lp(routePaths.catalog)} role="menuitem" onClick={() => setCatalogOpen(false)}>
                    <div className="px-mega-card__img-wrap">
                      <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.order}`} alt={t('homeRouteOrderTitle')} />
                    </div>
                    <span className="px-mega-card__label">{t('homeRouteOrderTitle')}</span>
                  </NavLink>
                  <NavLink className="px-mega-card" to={lp(routePaths.catalog)} role="menuitem" onClick={() => setCatalogOpen(false)}>
                    <div className="px-mega-card__img-wrap">
                      <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.catalog}`} alt={t('homeRouteCatalogTitle')} />
                    </div>
                    <span className="px-mega-card__label">{t('homeRouteCatalogTitle')}</span>
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink to={lp(routePaths.calculator)}>{t('navCalculator')}</NavLink>
            <NavLink to={lp(routePaths.blog)}>{t('navBlog')}</NavLink>
            <NavLink to={lp(routePaths.faq)}>FAQ</NavLink>
            <NavLink to={lp(routePaths.contacts)}>{t('navContacts')}</NavLink>
          </nav>

          <div className="px-header__social" aria-label={t('headerSocialAria')}>
            <a href="tel:+48784890644" aria-label="Phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </a>
            <a href="https://wa.me/48784890644" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2-.17-.28-.02-.44.12-.58.13-.12.29-.33.43-.49.14-.17.19-.28.29-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37 0 1.4 1.02 2.76 1.16 2.95.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.63.6.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.33zM12.04 2C6.52 2 2.05 6.48 2.05 12c0 1.76.46 3.45 1.32 4.93L2 22l5.26-1.38c1.43.78 3.05 1.19 4.78 1.19 5.52 0 10-4.48 10-10S17.56 2 12.04 2zm0 18.19c-1.56 0-3.08-.42-4.41-1.21l-.32-.19-3.12.82.83-3.04-.21-.33a8.19 8.19 0 01-1.27-4.24c0-4.53 3.69-8.22 8.22-8.22 2.2 0 4.26.85 5.81 2.4a8.17 8.17 0 012.4 5.81c0 4.53-3.69 8.22-8.22 8.22z"/>
              </svg>
            </a>
            <a href="https://facebook.com/bidders" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63c-.27-.04-1.2-.12-2.27-.12-2.25 0-3.79 1.37-3.79 3.89v2.17H7.92v2.94h2.54V21h3.04z"/>
              </svg>
            </a>
            <a href="https://instagram.com/bidders" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://tiktok.com/@bidders" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@bidders" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
              </svg>
            </a>
          </div>

          <div className="px-header__right">
            <a href="tel:+48784890644" className="px-header__phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +48 784 890 644
            </a>

            <div
              ref={localeRef}
              className={localeOpen ? 'px-locale px-locale--dropdown open' : 'px-locale px-locale--dropdown'}
              aria-label={t('headerLanguageSwitcherAria')}
            >
              <button
                type="button"
                className="px-locale__toggle"
                aria-haspopup="listbox"
                aria-expanded={localeOpen}
                onClick={() => setLocaleOpen((value) => !value)}
              >
                <span>{LOCALE_LABELS[locale] ?? 'UA'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div className="px-locale__menu" role="listbox">
                {LOCALE_ORDER.filter((value) => value !== locale).map((value) => (
                  <button
                    key={value}
                    type="button"
                    role="option"
                    aria-selected={locale === value}
                    onClick={() => pickLocale(value)}
                  >
                    {LOCALE_LABELS[value]}
                  </button>
                ))}
              </div>
            </div>

            <NavLink to={lp(routePaths.contacts)} className="px-header__cta">
              <span>{t('headerContact')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </NavLink>

            <button
              className={mobileOpen ? 'px-burger active' : 'px-burger'}
              type="button"
              aria-label={t('headerToggleMenu')}
              aria-expanded={mobileOpen}
              onClick={() => mobileOpen ? closeMobile() : openMobile()}
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
      <nav className={mobileOpen ? 'px-mobile open' : 'px-mobile'} aria-label={t('headerMobileNavAria')}>
        <div className="px-mobile__head">
          <p className="px-mobile__kicker">{t('headerMenuLabel')}</p>
          <button type="button" className="px-mobile__close" aria-label={t('headerMenuClose')} onClick={closeMobile}>×</button>
        </div>
        <div className="px-mobile__links">
          <NavLink to={lp(routePaths.home)} onClick={closeMobile}>{t('navHome')}</NavLink>

          {/* Catalog accordion in mobile */}
          <div className={mobileCatalogOpen ? 'px-mobile-group open' : 'px-mobile-group'}>
            <button
              type="button"
              className="px-mobile-group__trigger"
              onClick={() => setMobileCatalogOpen((v) => !v)}
            >
              {t('navCatalog')}
              <svg className="px-mobile-group__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div className="px-mobile-group__list">
              <div className="px-mobile-mega">
                <NavLink className="px-mobile-mega__card" to={lp(routePaths.inStock)} onClick={closeMobile}>
                  <div className="px-mobile-mega__img-wrap">
                    <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.inStock}`} alt={t('homeRouteStockTitle')} />
                  </div>
                  <span className="px-mobile-mega__label">{t('homeRouteStockTitle')}</span>
                </NavLink>
                <NavLink className="px-mobile-mega__card" to={lp(routePaths.transit)} onClick={closeMobile}>
                  <div className="px-mobile-mega__img-wrap">
                    <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.transit}`} alt={t('homeRouteTransitTitle')} />
                  </div>
                  <span className="px-mobile-mega__label">{t('homeRouteTransitTitle')}</span>
                </NavLink>
                <NavLink className="px-mobile-mega__card" to={lp(routePaths.catalog)} onClick={closeMobile}>
                  <div className="px-mobile-mega__img-wrap">
                    <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.order}`} alt={t('homeRouteOrderTitle')} />
                  </div>
                  <span className="px-mobile-mega__label">{t('homeRouteOrderTitle')}</span>
                </NavLink>
                <NavLink className="px-mobile-mega__card" to={lp(routePaths.catalog)} onClick={closeMobile}>
                  <div className="px-mobile-mega__img-wrap">
                    <img src={`${import.meta.env.BASE_URL}${ROUTE_IMAGES.catalog}`} alt={t('homeRouteCatalogTitle')} />
                  </div>
                  <span className="px-mobile-mega__label">{t('homeRouteCatalogTitle')}</span>
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink to={lp(routePaths.calculator)} onClick={closeMobile}>{t('navCalculator')}</NavLink>
          <NavLink to={lp(routePaths.blog)} onClick={closeMobile}>{t('navBlog')}</NavLink>
          <NavLink to={lp(routePaths.cases)} onClick={closeMobile}>{t('navCases')}</NavLink>
          <NavLink to={lp(routePaths.faq)} onClick={closeMobile}>FAQ</NavLink>
          <NavLink to={lp(routePaths.contacts)} onClick={closeMobile}>{t('navContacts')}</NavLink>
        </div>

        <div className="px-mobile__contact">
          <a href="tel:+48784890644" className="px-mobile__phone">+48 784 890 644</a>
          <NavLink to={lp(routePaths.contacts)} className="px-header__cta" onClick={closeMobile}>
            <span>{t('headerContact')}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </NavLink>
        </div>

        <div className="px-mobile__social" aria-label={t('headerSocialAria')}>
          <a href="https://wa.me/48784890644" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2-.17-.28-.02-.44.12-.58.13-.12.29-.33.43-.49.14-.17.19-.28.29-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37 0 1.4 1.02 2.76 1.16 2.95.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.63.6.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.33zM12.04 2C6.52 2 2.05 6.48 2.05 12c0 1.76.46 3.45 1.32 4.93L2 22l5.26-1.38c1.43.78 3.05 1.19 4.78 1.19 5.52 0 10-4.48 10-10S17.56 2 12.04 2zm0 18.19c-1.56 0-3.08-.42-4.41-1.21l-.32-.19-3.12.82.83-3.04-.21-.33a8.19 8.19 0 01-1.27-4.24c0-4.53 3.69-8.22 8.22-8.22 2.2 0 4.26.85 5.81 2.4a8.17 8.17 0 012.4 5.81c0 4.53-3.69 8.22-8.22 8.22z"/>
            </svg>
          </a>
          <a href="https://facebook.com/bidders" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63c-.27-.04-1.2-.12-2.27-.12-2.25 0-3.79 1.37-3.79 3.89v2.17H7.92v2.94h2.54V21h3.04z"/>
            </svg>
          </a>
          <a href="https://instagram.com/bidders" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@bidders" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/>
            </svg>
          </a>
          <a href="https://youtube.com/@bidders" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"/>
            </svg>
          </a>
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
