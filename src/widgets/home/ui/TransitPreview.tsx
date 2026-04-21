import { Link } from 'react-router-dom'
import type { InventoryItem } from '../../../shared/types/contracts'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { routes } from '../../../shared/config/routes'

interface TransitPreviewProps {
  items: InventoryItem[]
}

export function TransitPreview({ items }: TransitPreviewProps) {
  const { t } = useI18n()

  return (
    <section className="transit-preview reveal delay-2">
      <div className="transit-preview-head">
        <h2>{t('homeTransitTitle')}</h2>
        <p>{t('homeTransitDesc')}</p>
      </div>

      <div className="transit-cards">
        {items.slice(0, 3).map((item) => (
          <article key={item.id} className="transit-card">
            <div className="transit-card-image-wrap">
              <img src={item.image} alt={item.makeModel} className="transit-card-image" />
              <span className="transit-status">{t('transitTitle')}</span>
            </div>
            <div className="transit-card-body">
              <strong>{item.year} {item.makeModel}</strong>
              <p>{item.engine} · {item.mileage}</p>
              <p>{item.location}</p>
              <div className="transit-card-foot">
                <span>{item.currentBid}</span>
                <a href={item.sourceUrl} target="_blank" rel="noreferrer">{t('sourceLot')}</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link className="transit-more" to={routes.transit}>{t('homeTransitCta')}</Link>
    </section>
  )
}
