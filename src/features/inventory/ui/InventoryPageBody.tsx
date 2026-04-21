import type { InventoryItem } from '../../../shared/types/contracts'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useInventoryFilters } from '../model/useInventoryFilters'
import { InventoryFilterSidebar } from './InventoryFilterSidebar'
import { InventoryList } from './InventoryList'

interface InventoryPageBodyProps {
  title: string
  items: InventoryItem[]
}

export function InventoryPageBody({ title, items }: InventoryPageBodyProps) {
  const { t } = useI18n()
  const { groups, selected, filteredItems, toggleFilter, resetFilters } = useInventoryFilters(items)

  return (
    <main className="inventory-page">
      <InventoryFilterSidebar
        groups={groups}
        selected={selected}
        onToggle={toggleFilter}
        onReset={resetFilters}
      />
      <section>
        <div className="inventory-results-head">
          <div>
            <h1>{title}</h1>
            <p>{filteredItems.length} {t('resultsSuffix')}</p>
          </div>
          <button className="inventory-sort" type="button">{t('sortLabel')}</button>
        </div>
        <InventoryList items={filteredItems} />
      </section>
    </main>
  )
}
