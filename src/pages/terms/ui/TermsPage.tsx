import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'

export function TermsPage() {
  const { locale, t } = useI18n()
  return (
    <main className="bp-shell-page legal-page">
      <Seo title={t('seoTermsTitle')} description={t('seoTermsDescription')} path={routePaths.terms} />
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">{t('legalKicker')}</p>
        <h1 className="bp-page-title">{t('termsTitle')}</h1>
        <p className="bp-page-sub">{t('termsSub')}</p>

        <section className="legal-section">
          <h2>{t('termsS1Title')}</h2>
          <p>{t('termsS1Text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('termsS2Title')}</h2>
          <p>{t('termsS2Text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('termsS3Title')}</h2>
          <p>{t('termsS3Text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('termsS4Title')}</h2>
          <p>{t('termsS4Text')}</p>
        </section>

        <section className="legal-section">
          <h2>{t('termsS5Title')}</h2>
          <p>{t('termsS5Text')}</p>
        </section>

        <div className="bp-inline-actions" style={{ marginTop: 26 }}>
          <Link className="bp-btn bp-btn-secondary" to={localizedPath(locale, routePaths.privacy)}>{t('termsCtaPrivacy')}</Link>
          <Link className="bp-btn bp-btn-primary" to={localizedPath(locale, routePaths.home)}>{t('termsCtaHome')}</Link>
        </div>
      </div>
    </main>
  )
}
