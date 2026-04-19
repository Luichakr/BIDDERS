import { Link } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { routes } from '../../../shared/config/routes'

export function Footer() {
  const { t } = useI18n()

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
              <a href="#" aria-label={t('footerTelegram')}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-16.5 6.925a2.25 2.25 0 00.153 4.218l3.982 1.23 2.005 6.019a1 1 0 001.782.258l2.695-3.417 4.203 3.102a2.25 2.25 0 003.516-1.418l2.25-14.625a2.25 2.25 0 00-4.064-1.507z"/></svg>
              </a>
              <a href="#" aria-label={t('footerYoutube')}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              </a>
              <a href="#" aria-label={t('footerInstagram')}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label={t('footerFacebook')}>
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className="px-footer__cols">
            <div className="px-footer__col">
              <h4>{t('footerNavigation')}</h4>
              <ul>
                <li><a href={routes.home}>{t('navHome')}</a></li>
                <li><a href={routes.catalog}>{t('navCatalog')}</a></li>
                <li><a href={routes.transit}>{t('navTransit')}</a></li>
                <li><a href={routes.blog}>{t('footerBlog')}</a></li>
              </ul>
            </div>

            <div className="px-footer__col">
              <h4>{t('footerDirections')}</h4>
              <ul>
                <li><a href={routes.catalog}>{t('footerDirectionUsa')}</a></li>
                <li><a href={routes.catalog}>{t('footerDirectionChina')}</a></li>
                <li><a href={routes.catalog}>{t('footerDirectionEurope')}</a></li>
                <li><a href={routes.catalog}>{t('footerDirectionMoto')}</a></li>
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
          <span className="px-footer__brands-label">Офіційні джерела лотів</span>
          <div className="px-footer__brands-row">
            <img src={`${import.meta.env.BASE_URL}images/copart-logo.png`} alt="Copart" />
            <img src={`${import.meta.env.BASE_URL}images/copart-logo.png`} alt="IAAI" />
            <img src={`${import.meta.env.BASE_URL}images/copart-logo.png`} alt="Manheim" />
            <img src={`${import.meta.env.BASE_URL}images/copart-logo.png`} alt="ADESA" />
            <img src={`${import.meta.env.BASE_URL}images/copart-logo.png`} alt="Auto Auction" />
            <img src={`${import.meta.env.BASE_URL}images/copart-logo.png`} alt="Impact Auto" />
          </div>
        </div>

        <div className="px-footer__bot">
          <span>{t('footerCopyright')}</span>
          <div className="px-footer__legal">
            <Link to={routes.privacy}>{t('footerPrivacy')}</Link>
            <Link to={routes.terms}>{t('footerTerms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
