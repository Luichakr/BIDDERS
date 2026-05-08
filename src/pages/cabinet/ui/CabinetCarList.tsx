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

export function CabinetCarList({
  filteredCars,
  selectedCar,
  search,
  statusFilter,
  statusEntries,
  copy,
  locale,
  onSearch,
  onStatusFilter,
  onSelect,
}: Props) {
  return (
    <aside className="cabinet-panel cabinet-sidebar">
      <input
        className="cabinet-search"
        type="search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={copy.searchPlaceholder}
      />

      <div className="cabinet-filter-row">
        <button
          className={`cabinet-chip ${statusFilter === 'all' ? 'cabinet-chip-active' : ''}`}
          onClick={() => onStatusFilter('all')}
          type="button"
        >
          {copy.allStatuses}
        </button>
        {statusEntries.map(([status, label]) => (
          <button
            key={status}
            className={`cabinet-chip ${statusFilter === status ? 'cabinet-chip-active' : ''}`}
            onClick={() => onStatusFilter(status)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="cabinet-list">
        {filteredCars.length === 0 && (
          <div className="cabinet-empty">{copy.emptyList}</div>
        )}

        {filteredCars.map((car) => {
          const firstPhoto = car.photos[0]
          const title = [car.year, car.make, car.model].filter(Boolean).join(' ').trim() || car.title

          return (
            <button
              className={`cabinet-card-button ${selectedCar?.id === car.id ? 'cabinet-card-button-active' : ''}`}
              key={car.id}
              onClick={() => onSelect(car.id)}
              type="button"
            >
              {firstPhoto ? (
                <img className="cabinet-card-photo" src={firstPhoto.url} alt={title} />
              ) : (
                <div className="cabinet-photo-placeholder">{copy.photoCountLabel}</div>
              )}

              <div className="cabinet-card-copy">
                <div className="cabinet-card-head">
                  <strong>{title}</strong>
                  <span className="cabinet-status">{copy.statusLabels[car.status]}</span>
                </div>
                {car.publicationStatus === 'published' && (
                  <span className="cabinet-published-badge">✓ {copy.publicationStatusLabels.published}</span>
                )}
                <span>{car.vin || car.lotNumber || car.stockNumber || 'No VIN yet'}</span>
                <div className="cabinet-card-meta">
                  <span>{car.photos.length} {copy.photoCountLabel}</span>
                  <span>{new Date(car.updatedAt).toLocaleDateString(locale)}</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </aside>
  )
}
