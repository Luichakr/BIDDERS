import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'
import { formatCaseMoney, getCasesData, getCaseSavings, type CaseRecord } from '../../../features/cases/api/cases.service'

export function CasesPage() {
  const [caseData, setCaseData] = useState<CaseRecord[]>([])

  useEffect(() => {
    void getCasesData().then(setCaseData)
  }, [])

  return (
    <main className="bp-shell-page bp-shell-soft">
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">Кейси</p>
        <h1 className="bp-page-title">Реальні кейси клієнтів BIDDERS</h1>
        <p className="bp-page-sub">Єдина методика порівняння: ціна під ключ, ціна ринку Польщі, фінальна економія.</p>

        <section className="bp-cases-grid">
          {caseData.map((item) => (
            <article className="bp-case-card" key={item.id}>
              <h2>{item.model}</h2>
              <div className="bp-case-row"><span>Під ключ</span><strong>{formatCaseMoney(item.turnkey, item.currency)}</strong></div>
              <div className="bp-case-row"><span>Ринок Польщі</span><strong>{formatCaseMoney(item.market, item.currency)}</strong></div>
              <div className="bp-case-row bp-case-row-save"><span>Економія</span><strong>{formatCaseMoney(getCaseSavings(item), item.currency)}</strong></div>
            </article>
          ))}
        </section>

        <div className="bp-inline-actions">
          <Link className="bp-btn bp-btn-secondary" to={routes.blog}>Читати блог</Link>
          <Link className="bp-btn bp-btn-primary" to={routes.home}>На головну</Link>
        </div>
      </div>
    </main>
  )
}
