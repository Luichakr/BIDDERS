import { Link } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { routePaths, localizedPath } from '../../../shared/config/routes'

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
              <img src={`${import.meta.env.BASE_URL}images/logo-carwaw-white.png`} alt="BIDDERS" />
            </div>
            <p className="px-footer__tag">{t('footerTaglineLong')}</p>
            <div className="px-footer__soc">
              <a href="https://t.me/bidders" target="_blank" rel="noopener noreferrer" aria-label={t('footerTelegram')}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-16.5 6.925a2.25 2.25 0 00.153 4.218l3.982 1.23 2.005 6.019a1 1 0 001.782.258l2.695-3.417 4.203 3.102a2.25 2.25 0 003.516-1.418l2.25-14.625a2.25 2.25 0 00-4.064-1.507z"/></svg>
              </a>
              <a href="https://youtube.com/@bidders" target="_blank" rel="noopener noreferrer" aria-label={t('footerYoutube')}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
              <a href="https://instagram.com/bidders_com" target="_blank" rel="noopener noreferrer" aria-label={t('footerInstagram')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://tiktok.com/@bidders" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/></svg>
              </a>
              <a href="https://facebook.com/bidders.com.ua" target="_blank" rel="noopener noreferrer" aria-label={t('footerFacebook')}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className="px-footer__cols">
            <div className="px-footer__col">
              <h4>{t('footerNavigation')}</h4>
              <ul>
                <li><Link to={lp(routePaths.home)}>{t('navHome')}</Link></li>
                <li><Link to={lp(routePaths.catalog)}>{t('navCatalog')}</Link></li>
                <li><Link to={lp(routePaths.transit)}>{t('navTransit')}</Link></li>
                <li><Link to={lp(routePaths.blog)}>{t('footerBlog')}</Link></li>
              </ul>
            </div>

            <div className="px-footer__col">
              <h4>{t('footerDirections')}</h4>
              <ul>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionUsa')}</Link></li>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionChina')}</Link></li>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionEurope')}</Link></li>
                <li><Link to={lp(routePaths.catalog)}>{t('footerDirectionMoto')}</Link></li>
              </ul>
            </div>

            <div className="px-footer__col">
              <h4>{t('footerContact')}</h4>
              <ul className="px-footer__contact">
                <li>{t('footerAddress')}</li>
                <li><a href="tel:+48784890644">+48 784 890 644</a></li>
                <li><a href="tel:+48571660242">+48 571 660 242</a></li>
                <li><a href="mailto:info@bidders.pl">info@bidders.pl</a></li>
                <li><a href="mailto:sales@bidders.pl">sales@bidders.pl</a></li>
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
