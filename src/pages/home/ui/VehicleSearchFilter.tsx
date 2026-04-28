import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { localizedPath, routePaths } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'

type VehicleType = 'cars' | 'motos' | 'atv'

interface Props {
  makesModels: Record<string, string[]>
}

const YEAR_NOW = new Date().getFullYear()
const YEARS = Array.from({ length: YEAR_NOW - 1989 }, (_, i) => YEAR_NOW - i)

export function VehicleSearchFilter({ makesModels }: Props) {
  const { locale } = useI18n()
  const navigate = useNavigate()

  const [vehicleType, setVehicleType] = useState<VehicleType>('cars')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')
  const [vin, setVin] = useState('')
  const [copart, setCopart] = useState(true)
  const [iaai, setIaai] = useState(true)

  const allMakes = useMemo(() => Object.keys(makesModels).sort(), [makesModels])
  const availableModels = useMemo(() => {
    if (!make) return []
    return (makesModels[make] ?? []).sort()
  }, [makesModels, make])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (make) params.set('make', make)
    if (model) params.set('model', model)
    if (yearFrom) params.set('yearFrom', yearFrom)
    if (yearTo) params.set('yearTo', yearTo)
    if (vin) params.set('vin', vin)
    if (!copart) params.set('copart', '0')
    if (!iaai) params.set('iaai', '0')
    const base = localizedPath(locale, routePaths.catalog)
    navigate(`${base}?${params.toString()}`)
  }

  const tabs: { id: VehicleType; label: string; icon: string }[] = [
    { id: 'cars',  label: 'Samochody', icon: '🚗' },
    { id: 'motos', label: 'Motocykle', icon: '🏍' },
    { id: 'atv',   label: 'ATV / SUV',  icon: '🚙' },
  ]

  return (
    <div className="vsf-wrapper">
      <div className="px-wrap">
        <div className="vsf-card">

          {/* Tabs */}
          <div className="vsf-tabs" role="tablist">
            {tabs.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={vehicleType === tab.id}
                className={`vsf-tab ${vehicleType === tab.id ? 'vsf-tab--active' : ''}`}
                onClick={() => setVehicleType(tab.id)}
                type="button"
              >
                <span className="vsf-tab__icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="vsf-form" onSubmit={handleSearch}>
            {/* Row 1: Make / Model / Year from / Year to */}
            <div className="vsf-row vsf-row--main">
              <div className="vsf-field vsf-field--make">
                <label className="vsf-label">Marka</label>
                <div className="vsf-select-wrap">
                  <select
                    className="vsf-select"
                    value={make}
                    onChange={e => { setMake(e.target.value); setModel('') }}
                  >
                    <option value="">Wszystkie marki</option>
                    {allMakes.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <span className="vsf-select-chevron">▾</span>
                </div>
              </div>

              <div className="vsf-field vsf-field--model">
                <label className="vsf-label">Model</label>
                <div className="vsf-select-wrap">
                  <select
                    className="vsf-select"
                    value={model}
                    onChange={e => setModel(e.target.value)}
                    disabled={!make}
                  >
                    <option value="">Wszystkie modele</option>
                    {availableModels.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <span className="vsf-select-chevron">▾</span>
                </div>
              </div>

              <div className="vsf-field vsf-field--year">
                <label className="vsf-label">Rok od</label>
                <div className="vsf-select-wrap">
                  <select className="vsf-select" value={yearFrom} onChange={e => setYearFrom(e.target.value)}>
                    <option value="">Od</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                  <span className="vsf-select-chevron">▾</span>
                </div>
              </div>

              <div className="vsf-field vsf-field--year">
                <label className="vsf-label">Rok do</label>
                <div className="vsf-select-wrap">
                  <select className="vsf-select" value={yearTo} onChange={e => setYearTo(e.target.value)}>
                    <option value="">Do</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                  <span className="vsf-select-chevron">▾</span>
                </div>
              </div>
            </div>

            {/* Row 2: VIN / Auction toggles / Search button */}
            <div className="vsf-row vsf-row--secondary">
              <div className="vsf-field vsf-field--vin">
                <label className="vsf-label">VIN / Lot</label>
                <input
                  className="vsf-input"
                  type="text"
                  placeholder="np. 1HGCM82633A004352"
                  value={vin}
                  onChange={e => setVin(e.target.value)}
                />
              </div>

              <div className="vsf-auction-group">
                <label className="vsf-label">Aukcja</label>
                <div className="vsf-toggles">
                  <button
                    type="button"
                    className={`vsf-toggle ${copart ? 'vsf-toggle--on' : ''}`}
                    onClick={() => setCopart(!copart)}
                  >
                    <span className="vsf-toggle__dot" />
                    Copart
                  </button>
                  <button
                    type="button"
                    className={`vsf-toggle ${iaai ? 'vsf-toggle--on' : ''}`}
                    onClick={() => setIaai(!iaai)}
                  >
                    <span className="vsf-toggle__dot" />
                    IAAI
                  </button>
                </div>
              </div>

              <button type="submit" className="vsf-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                Szukaj
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
