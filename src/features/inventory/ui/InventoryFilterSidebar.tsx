import { useState, useEffect } from 'react'
import type { InventoryFilterGroup } from '../../../shared/types/contracts'
import { useI18n } from '../../../shared/i18n/I18nProvider'

interface InventoryFilterSidebarProps {
  groups: InventoryFilterGroup[]
  selected: Record<'auction' | 'damage' | 'fuel' | 'year', string[]>
  onToggle: (key: 'auction' | 'damage' | 'fuel' | 'year', option: string) => void
  priceMin: number | null
  priceMax: number | null
  priceBounds: { globalMin: number; globalMax: number }
  onPriceRange: (min: number | null, max: number | null) => void
  onReset: () => void
}

export function InventoryFilterSidebar({
  groups,
  selected,
  onToggle,
  priceMin,
  priceMax,
  priceBounds,
  onPriceRange,
  onReset,
}: InventoryFilterSidebarProps) {
  const { t } = useI18n()

  const groupTitleMap: Record<string, string> = {
    auction: t('filterAuction'),
    damage: t('filterDamage'),
    fuel: t('filterFuel'),
    year: t('filterYear'),
  }

  // Local input state so user can type freely before committing
  const [localMin, setLocalMin] = useState(priceMin !== null ? String(priceMin) : '')
  const [localMax, setLocalMax] = useState(priceMax !== null ? String(priceMax) : '')

  // Sync if external state resets (e.g. "reset all filters")
  useEffect(() => { setLocalMin(priceMin !== null ? String(priceMin) : '') }, [priceMin])
  useEffect(() => { setLocalMax(priceMax !== null ? String(priceMax) : '') }, [priceMax])

  const commitPrice = () => {
    const min = localMin !== '' ? Number(localMin) : null
    const max = localMax !== '' ? Number(localMax) : null
    onPriceRange(min, max)
  }

  return (
    <aside className="inventory-sidebar">
      <div className="inventory-sidebar-head">
        <strong>{t('filters')}</strong>
        <button type="button" onClick={onReset}>{t('reset')}</button>
      </div>

      {/* ── Price range ────────────────────────────────── */}
      <section className="inventory-filter-group">
        <h3>{t('filterPrice')}</h3>
        <div className="inventory-price-range">
          <div className="inventory-price-field">
            <label>{t('filterPriceMin')} ($)</label>
            <input
              type="number"
              min={priceBounds.globalMin}
              max={priceBounds.globalMax}
              placeholder={String(priceBounds.globalMin)}
              value={localMin}
              onChange={(e) => setLocalMin(e.target.value)}
              onBlur={commitPrice}
              onKeyDown={(e) => e.key === 'Enter' && commitPrice()}
            />
          </div>
          <span className="inventory-price-sep">—</span>
          <div className="inventory-price-field">
            <label>{t('filterPriceMax')} ($)</label>
            <input
              type="number"
              min={priceBounds.globalMin}
              max={priceBounds.globalMax}
              placeholder={String(priceBounds.globalMax)}
              value={localMax}
              onChange={(e) => setLocalMax(e.target.value)}
              onBlur={commitPrice}
              onKeyDown={(e) => e.key === 'Enter' && commitPrice()}
            />
          </div>
        </div>
        {(priceMin !== null || priceMax !== null) && (
          <button
            type="button"
            className="inventory-price-clear"
            onClick={() => { setLocalMin(''); setLocalMax(''); onPriceRange(null, null) }}
          >
            ✕ {t('reset')}
          </button>
        )}
      </section>

      {/* ── Checkbox groups ────────────────────────────── */}
      {groups.map((group) => (
        <section className="inventory-filter-group" key={group.id}>
          <h3>{groupTitleMap[group.id] ?? group.title}</h3>
          <div className="inventory-filter-options">
            {group.options.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={selected[group.id as 'auction' | 'damage' | 'fuel' | 'year']?.includes(option)}
                  onChange={() => onToggle(group.id as 'auction' | 'damage' | 'fuel' | 'year', option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </section>
      ))}
    </aside>
  )
}
