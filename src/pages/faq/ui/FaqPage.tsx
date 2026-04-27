import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'

export function FaqPage() {
  const { locale, t } = useI18n()
  return (
    <main className="bp-shell-page bp-shell-soft">
      <Seo title={t('seoFaqTitle')} description={t('seoFaqDescription')} path={routePaths.faq} />
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">{t('faqKicker')}</p>
        <h1 className="bp-page-title">{t('faqPageTitle')}</h1>
        <p className="bp-page-sub">{t('faqPageSub')}</p>

        <section className="bp-faq-list">
          <details open>
            <summary>{t('faqDeliveryTimeQuestion')}</summary>
            <p>{t('faqDeliveryTimeAnswer')}</p>
          </details>
          <details>
            <summary>{t('faqTurnkeyQuestion')}</summary>
            <p>{t('faqTurnkeyAnswer')}</p>
          </details>
          <details>
            <summary>{t('faqTransparencyQuestion')}</summary>
            <p>{t('faqTransparencyAnswer')}</p>
          </details>
          <details>
            <summary>{t('faqInspectionQuestion')}</summary>
            <p>{t('faqInspectionAnswer')}</p>
          </details>
        </section>

        <div className="bp-inline-actions">
          <Link className="bp-btn bp-btn-secondary" to="/#faq">{t('faqCtaHome')}</Link>
          <Link className="bp-btn bp-btn-primary" to={localizedPath(locale, routePaths.contacts)}>{t('faqCtaContacts')}</Link>
        </div>
      </div>
    </main>
  )
}
