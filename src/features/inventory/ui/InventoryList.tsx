import type { InventoryItem } from '../../../shared/types/contracts'
import { useI18n } from '../../../shared/i18n/I18nProvider'

interface InventoryListProps {
  items: InventoryItem[]
}

export function InventoryList({ items }: InventoryListProps) {
  const { t } = useI18n()

  if (items.length === 0) {
    return <div className="inventory-empty">{t('noResults')}</div>
  }

  return (
    <div className="inventory-list">
      {items.map((item) => (
        <article className="inventory-row" key={item.id}>
          <div className="inventory-photo-wrap">
            <img src={item.image} alt={`${item.year} ${item.makeModel}`} className="inventory-photo" />
            <div className="inventory-photo-badges">
              <span className="badge-auction">{item.year} {item.auction}</span>
              {item.hot ? <span className="badge-hot">HOT</span> : null}
              {item.discount ? <span className="badge-discount">{item.discount}</span> : null}
              <span className="badge-damage">{item.damage}</span>
            </div>
          </div>

          <div className="inventory-main">
            <h3>{item.makeModel}</h3>
            <p className="inventory-sub">VIN: {item.vin} · {item.location}</p>
            <p className="inventory-sub">{item.engine} · {item.mileage}</p>
            {item.sourceUrl ? (
              <a className="inventory-source" href={item.sourceUrl} target="_blank" rel="noreferrer">
                {t('sourceLot')}
              </a>
            ) : null}
          </div>

          <div className="inventory-price">
            <p>{t('currentBid')}</p>
            <strong>{item.currentBid}</strong>
            {item.buyNow ? <span>{t('buyNow')}: {item.buyNow}</span> : null}
            <small>{t('estValue')}: {item.estimate}</small>
            <button type="button">{t('bidNow')}</button>
          </div>
        </article>
      ))}
    </div>
  )
}
