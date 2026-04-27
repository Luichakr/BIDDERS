import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { formatCaseMoney, getCasesData, getCaseSavings, type CaseRecord } from '../../../features/cases/model/cases.service'

export function CasesPage() {
  const { locale, t } = useI18n()
  const [caseData, setCaseData] = useState<CaseRecord[]>([])

  useEffect(() => {
    void getCasesData().then(setCaseData)
  }, [])

  return (
    <main className="bp-shell-page bp-shell-soft">
      <Seo title={t('seoCasesTitle')} description={t('seoCasesDescription')} path={routePaths.cases} />
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">{t('casesKicker')}</p>
        <h1 className="bp-page-title">{t('casesPageTitle')}</h1>
        <p className="bp-page-sub">{t('casesPageSub')}</p>

        <section className="bp-cases-grid">
          {caseData.map((item) => (
            <article className="bp-case-card" key={item.id}>
              <h2>{item.model}</h2>
              <div className="bp-case-row"><span>{t('casesLabelTurnkey')}</span><strong>{formatCaseMoney(item.turnkey, item.currency)}</strong></div>
              <div className="bp-case-row"><span>{t('casesLabelMarket')}</span><strong>{formatCaseMoney(item.market, item.currency)}</strong></div>
              <div className="bp-case-row bp-case-row-save"><span>{t('casesLabelSavings')}</span><strong>{formatCaseMoney(getCaseSavings(item), item.currency)}</strong></div>
            </article>
          ))}
        </section>

        <div className="bp-inline-actions">
          <Link className="bp-btn bp-btn-secondary" to={localizedPath(locale, routePaths.blog)}>{t('casesCtaBlog')}</Link>
          <Link className="bp-btn bp-btn-primary" to={localizedPath(locale, routePaths.home)}>{t('casesCtaHome')}</Link>
        </div>
      </div>
    </main>
  )
}
