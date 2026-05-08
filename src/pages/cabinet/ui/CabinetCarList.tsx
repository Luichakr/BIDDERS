import type { CabinetCar, CabinetCarStatus } from '../model/cabinetTypes'
import type { CabinetCopy } from './cabinetContent'

type Props = {
  filteredCars: CabinetCar[]
  selectedCar: CabinetCar | null
  search: string
  statusFilter: 'all' | CabinetCarStatus
  statusEntries: Array<[CabinetCarStatus, string]>
  copy: CabinetCopy
  locale: string
  onSearch: (value: string) => void
  onStatusFilter: (value: 'all' | CabinetCarStatus) => void
  onSelect: (id: string) => void
}

const STATUS_STYLE: Record<CabinetCarStatus, string> = {
  draft: 'cb-status-research',
  research: 'cb-status-research',
  bidding: 'cb-status-bidding',
  won: 'cb-status-won',
  shipping: 'cb-status-shipping',
  repair: 'cb-status-repair',
  ready: 'cb-status-ready',
  sold: 'cb-status-sold',
}

export function CabinetCarList({
  filteredCars, selectedCar, search, statusFilter,
  statusEntries, copy, locale, onSearch, onStatusFilter, onSelect,
}: Props) {
  return (
    <aside className="cb-sidebar">
      <div className="cb-sidebar-panel">
        <input
          className="cb-search"
          type="search"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={copy.searchPlaceholder}
        />

        <div className="cb-filters">
          <button
            type="button"
            className={`cb-chip ${statusFilter === 'all' ? 'cb-chip-on' : ''}`}
            onClick={() => onStatusFilter('all')}
          >
            {copy.allStatuses}
          </button>
          {statusEntries.map(([status, label]) => (
            <button
              key={status}
              type="button"
              className={`cb-chip ${statusFilter === status ? 'cb-chip-on' : ''}`}
              onClick={() => onStatusFilter(status)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="cb-car-list">
          {filteredCars.length === 0 && (
            <div className="cb-car-list-empty">{copy.emptyList}</div>
          )}
          {filteredCars.map((car) => {
            const firstPhoto = car.photos[0]
            const title = [car.year, car.make, car.model].filter(Boolean).join(' ').trim() || car.title
            const isActive = selectedCar?.id === car.id
            return (
              <button
                key={car.id}
                type="button"
                className={`cb-car-card ${isActive ? 'cb-car-card-active' : ''}`}
                onClick={() => onSelect(car.id)}
              >
                {firstPhoto ? (
                  <img className="cb-car-thumb" src={firstPhoto.url} alt={title} />
                ) : (
                  <div className="cb-car-thumb-empty">🚗</div>
                )}
                <div className="cb-car-info">
                  <div className="cb-car-name">{title || 'Nowe auto'}</div>
                  <div className="cb-car-meta">
                    {car.vin ? car.vin.slice(-8) : car.lotNumber || '—'} · {new Date(car.updatedAt).toLocaleDateString(locale)}
                  </div>
                </div>
                <span className={`cb-car-badge ${car.publicationStatus === 'published' ? 'cb-car-badge-pub' : ''} ${STATUS_STYLE[car.status]}`}>
                  {car.publicationStatus === 'published' ? '✓' : copy.statusLabels[car.status]}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
