import { Link } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { isProductionDeploy } from '../../../config/productionRoutes'

const isProd = isProductionDeploy()

export function Footer() {
  const { t, locale } = useI18n()
  const lp = (path: string) => localizedPath(locale, path)

  return (
    <footer className="px-footer">
      <div className="px-footer__glow" aria-hidden="true"></div>
      <div className="px-footer__inner">
        <div className="px-footer__top">
          <div className="px-footer__brand">
            <div className="px-footer__logo">
              <img src={`${import.meta.env.BASE_URL}images/logo-carwaw-white.png`} alt="BID BIDDERS" />
            </div>
            <p className="px-footer__tag">{t('footerTaglineLong')}</p>
            <div className="px-footer__soc">
              <a href="tel:+48784890644" aria-label="Phone">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              </a>
              <a href="https://www.instagram.com/bidderscom" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.tiktok.com/@bidders.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/></svg>
              </a>
              <a href="https://www.facebook.com/bidbidders" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z"/></svg>
              </a>
              <a href="https://m.me/bidbidders" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.26 2 11.5c0 2.85 1.31 5.4 3.38 7.14V22l3.1-1.7c.83.23 1.7.35 2.62.35 5.52 0 10-4.26 10-9.5S17.52 2 12 2zm1.02 12.78l-2.54-2.72-4.96 2.72 5.46-5.78 2.6 2.72 4.9-2.72-5.46 5.78z"/></svg>
              </a>
            </div>
          </div>

          <div className="px-footer__cols">
            <div className="px-footer__col">
              <h4>{t('footerNavigation')}</h4>
              <ul>
                <li><Link to={lp(routePaths.home)}>{t('navHome')}</Link></li>
                {!isProd && <li><Link to={lp(routePaths.catalog)}>{t('navCatalog')}</Link></li>}
                <li><Link to={lp(routePaths.transit)}>{t('navTransit')}</Link></li>
                <li><Link to={lp(routePaths.calculator)}>{t('footerCalculator')}</Link></li>
                <li><Link to={lp(routePaths.contacts)}>{t('footerContacts')}</Link></li>
                <li><Link to={lp(routePaths.cabinet)}>{t('footerCabinet')}</Link></li>
                <li><Link to={lp(routePaths.faq)}>{t('footerFaq')}</Link></li>
                {!isProd && <li><Link to={lp(routePaths.blog)}>{t('footerBlog')}</Link></li>}
              </ul>
            </div>

            {!isProd && (
            <div className="px-footer__col">
              <h4>{t('footerDirections')}</h4>
              <ul>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionUsa')}</Link></li>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionChina')}</Link></li>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionEurope')}</Link></li>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionMoto')}</Link></li>
              </ul>
            </div>
            )}

            <div className="px-footer__col">
              <h4>{t('footerContact')}</h4>
              <ul className="px-footer__contact">
                <li>{t('footerAddress')}</li>
                <li><a href="tel:+48784890644">+48 784 890 644</a></li>
                <li><a href="tel:+48571660242">+48 571 660 242</a></li>
                <li><a href="mailto:sales@bidbidders.com">sales@bidbidders.com</a></li>
                <li><a href="mailto:info@bidbidders.com">info@bidbidders.com</a></li>
                <li><a href="mailto:biuro@bidbidders.com">biuro@bidbidders.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-footer__brands">
          <span className="px-footer__brands-label">{t('footerLotSources')}</span>
          <div className="px-footer__ticker-wrap">
            <div className="px-footer__ticker">
              {[
                'Copart','IAAI','Manheim','ADESA','EDGEpipeline','ACVauctions',
                'Copart.ca','Impact','Stark Auto Sales','Progipix',
                'BCA','Autobid.de','Exleasingcar','Copart.fi','kvdcars',
                'Auksjonen','Ald Carmarket','Copart.de','OPENLANE','Auto One',
                'Autorola','Womauktion','Klaravik','Troostwijk','Alcopa Auction',
                'Copart.uk','Caronsale','Happy Car Service','Glovis','Duocar',
              ].map((name) => (
                <span key={name} className="px-footer__ticker-item">{name}</span>
              ))}
              {/* duplicate for seamless loop */}
              {[
                'Copart','IAAI','Manheim','ADESA','EDGEpipeline','ACVauctions',
                'Copart.ca','Impact','Stark Auto Sales','Progipix',
                'BCA','Autobid.de','Exleasingcar','Copart.fi','kvdcars',
                'Auksjonen','Ald Carmarket','Copart.de','OPENLANE','Auto One',
                'Autorola','Womauktion','Klaravik','Troostwijk','Alcopa Auction',
                'Copart.uk','Caronsale','Happy Car Service','Glovis','Duocar',
              ].map((name) => (
                <span key={`dup-${name}`} className="px-footer__ticker-item">{name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-footer__bot">
          <span>{t('footerCopyright')}</span>
          <div className="px-footer__legal">
            <Link to={lp(routePaths.privacy)}>{t('footerPrivacy')}</Link>
            <Link to={lp(routePaths.terms)}>{t('footerTerms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
