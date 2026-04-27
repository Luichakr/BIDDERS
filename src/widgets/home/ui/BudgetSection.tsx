import { Link } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { routePaths, localizedPath } from '../../../shared/config/routes'

export function BudgetSection() {
  const { t, locale } = useI18n()
  const lp = (path: string) => localizedPath(locale, path)

  const cards = [
    {
      range: t('budgetRangeOne'),
      items: [t('budgetOneItemOne'), t('budgetOneItemTwo'), t('budgetOneItemThree')],
    },
    {
      range: t('budgetRangeTwo'),
      items: [t('budgetTwoItemOne'), t('budgetTwoItemTwo'), t('budgetTwoItemThree')],
    },
    {
      range: t('budgetRangeThree'),
      items: [t('budgetThreeItemOne'), t('budgetThreeItemTwo'), t('budgetThreeItemThree')],
    },
  ]

  return (
    <section className="budget-section reveal" id="budget">
      <div className="budget-head">
        <p className="budget-kicker">{t('budgetKicker')}</p>
        <h2>{t('budgetTitle')}</h2>
      </div>

      <div className="budget-grid">
        {cards.map((card) => (
          <article key={card.range} className="budget-card">
            <div className="budget-top" aria-hidden="true"></div>
            <strong>{card.range}</strong>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link to={lp(routePaths.catalog)}>{t('budgetCta')}</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
