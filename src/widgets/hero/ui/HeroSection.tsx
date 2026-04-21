import type { HomePageContract } from '../../../shared/types/contracts'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'

type HeroSectionProps = Pick<HomePageContract, 'hero' | 'metrics'>

export function HeroSection({ hero }: HeroSectionProps) {
  const { t } = useI18n()

  return (
    <section className="home-hero" id="top">
      <div className="home-hero-overlay"></div>
      <div className="home-hero-in reveal">
        <div className="home-hero-content">
          <p className="hero-kicker">
            <span></span>
            {t('heroKicker') || hero.kicker}
          </p>
          <h1>
            {t('heroTitlePartOne')}
            <br />
            {t('heroTitlePartTwo')}
            <br />
            <span>{t('heroTitleAccent')}</span>
          </h1>
          <p className="hero-lead">{t('heroLead') || hero.lead}</p>
          <div className="hero-actions">
            <Link to={routes.catalog} className="btn-hero primary">{t('heroPrimary')}</Link>
            <Link to={routes.home} className="btn-hero ghost">{t('heroSecondary')}</Link>
          </div>

          <div className="hero-scenarios">
            <Link to={routes.catalog} className="hero-scenario">
              <span className="hero-scenario__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9 20v-6h6v6"/></svg>
              </span>
              <span className="hero-scenario__text">
                <strong>{t('heroScenarioOneTitle')}</strong>
                <small>{t('heroScenarioOneDesc')}</small>
              </span>
            </Link>
            <Link to={routes.transit} className="hero-scenario">
              <span className="hero-scenario__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h13a4 4 0 004-4v0H8a5 5 0 00-5 4z"/><path d="M8 13l2-4h5l2 4"/><path d="M7 7h10"/></svg>
              </span>
              <span className="hero-scenario__text">
                <strong>{t('heroScenarioTwoTitle')}</strong>
                <small>{t('heroScenarioTwoDesc')}</small>
              </span>
            </Link>
            <Link to={routes.lotDetail.replace(':lotId', 'custom')} className="hero-scenario">
              <span className="hero-scenario__icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M6 17l4-10 4 4 4-7"/></svg>
              </span>
              <span className="hero-scenario__text">
                <strong>{t('heroScenarioThreeTitle')}</strong>
                <small>{t('heroScenarioThreeDesc')}</small>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
