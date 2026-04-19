import type { InventoryFilterGroup } from '../../../shared/api/contracts'
import { useI18n } from '../../../shared/i18n/I18nProvider'

interface InventoryFilterSidebarProps {
  groups: InventoryFilterGroup[]
  selected: Record<'auction' | 'damage' | 'fuel' | 'year', string[]>
  onToggle: (key: 'auction' | 'damage' | 'fuel' | 'year', option: string) => void
  onReset: () => void
}

export function InventoryFilterSidebar({ groups, selected, onToggle, onReset }: InventoryFilterSidebarProps) {
  const { t } = useI18n()

  const groupTitleMap: Record<string, string> = {
    auction: t('filterAuction'),
    damage: t('filterDamage'),
    fuel: t('filterFuel'),
    year: t('filterYear'),
  }

  return (
    <aside className="inventory-sidebar">
      <div className="inventory-sidebar-head">
        <strong>{t('filters')}</strong>
        <button type="button" onClick={onReset}>{t('reset')}</button>
      </div>

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
