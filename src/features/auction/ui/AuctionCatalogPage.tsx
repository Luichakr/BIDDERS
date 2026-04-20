import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { AuctionCardData } from '../model/auctionData'
import { routes } from '../../../shared/config/routes'
import './auction-catalog.css'

interface AuctionCatalogPageProps {
  title: string
  cards: AuctionCardData[]
  mode: 'catalog' | 'transit' | 'in-stock'
}

type SortMode = 'price_desc' | 'price_asc' | 'year_desc' | 'year_asc' | 'mileage_asc' | 'mileage_desc'
type LayoutMode = 'list' | 'grid'
type FilterGroupKey = 'doc' | 'odo' | 'year' | 'brand' | 'model' | 'engine' | 'trans' | 'drive' | 'postal'

function formatUsd(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function formatKm(value: number): string {
  if (value >= 1000) {
    return `${Math.round(value / 1000)} 000`
  }
  return String(Math.round(value))
}

function parseYearRange(cards: AuctionCardData[]): [number, number] {
  const years = cards.map((card) => card.year)
  const min = Math.min(...years)
  const max = Math.max(...years)
  return [Number.isFinite(min) ? min : 2005, Number.isFinite(max) ? max : 2027]
}

function parseMileageRange(cards: AuctionCardData[]): [number, number] {
  const mileages = cards.map((card) => card.mileageKm)
  const minRaw = Math.min(...mileages)
  const maxRaw = Math.max(...mileages)
  const min = Number.isFinite(minRaw) ? Math.floor(minRaw / 5000) * 5000 : 0
  const max = Number.isFinite(maxRaw) ? Math.ceil(maxRaw / 5000) * 5000 : 300000
  return [Math.max(0, min), Math.max(5000, max)]
}

function toggleStringFilter(value: string, list: string[]): string[] {
  return list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value]
}

function toggleNumberFilter(value: number, list: number[]): number[] {
  return list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value]
}

export function AuctionCatalogPage({ title, cards, mode }: AuctionCatalogPageProps) {
  const navigate = useNavigate()
  const [sortOpen, setSortOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sortMode, setSortMode] = useState<SortMode>('price_desc')
  const [layout, setLayout] = useState<LayoutMode>('list')

  const [selectedDocTypes, setSelectedDocTypes] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedModels, setSelectedModels] = useState<string[]>([])
  const [selectedFuels, setSelectedFuels] = useState<string[]>([])
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>([])
  const [selectedDrive, setSelectedDrive] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<number[]>([])
  const [odoMin, setOdoMin] = useState<number>(() => parseMileageRange(cards)[0])
  const [odoMax, setOdoMax] = useState<number>(() => parseMileageRange(cards)[1])
  const [yearFrom, setYearFrom] = useState<number | ''>('')
  const [yearTo, setYearTo] = useState<number | ''>('')
  const [openGroups, setOpenGroups] = useState<Record<FilterGroupKey, boolean>>({
    doc: true,
    odo: true,
    year: true,
    brand: true,
    model: true,
    engine: false,
    trans: false,
    drive: false,
    postal: false,
  })

  const [brandSearch, setBrandSearch] = useState('')
  const [modelSearch, setModelSearch] = useState('')

  const [slideByCard, setSlideByCard] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {}
    cards.forEach((card) => {
      init[card.id] = 0
    })
    return init
  })

  const docs = ['ENGINE START', 'ENHANCED', 'RUNS & DRIVES', 'Run & Drive']
  const transmissions = ['AUTOMATIC', 'MANUAL']
  const drives = ['4x2', '4x4', 'AWD', 'RWD', 'FWD']

  const docByCardId = useMemo(() => {
    const map: Record<string, string> = {}
    cards.forEach((card, index) => {
      map[card.id] = docs[index % docs.length]
    })
    return map
  }, [cards])

  const [minYearAll, maxYearAll] = useMemo(() => parseYearRange(cards), [cards])
  const [odoMinLimit, odoMaxLimit] = useMemo(() => parseMileageRange(cards), [cards])
  const odoRange = Math.max(1, odoMaxLimit - odoMinLimit)
  const odoFillLeft = ((odoMin - odoMinLimit) / odoRange) * 100
  const odoFillRight = 100 - ((odoMax - odoMinLimit) / odoRange) * 100

  const uniqueBrands = useMemo(() => Array.from(new Set(cards.map((card) => card.make))).sort(), [cards])
  const uniqueModels = useMemo(() => Array.from(new Set(cards.map((card) => card.model))).sort(), [cards])
  const uniqueFuels = useMemo(() => Array.from(new Set(cards.map((card) => card.fuel))).sort(), [cards])
  const uniqueYears = useMemo(() => Array.from(new Set(cards.map((card) => card.year))).sort((a, b) => b - a), [cards])

  const filteredBrands = useMemo(() => {
    const query = brandSearch.trim().toLowerCase()
    if (!query) return uniqueBrands
    return uniqueBrands.filter((brand) => brand.toLowerCase().includes(query))
  }, [brandSearch, uniqueBrands])

  const filteredModels = useMemo(() => {
    const query = modelSearch.trim().toLowerCase()
    if (!query) return uniqueModels
    return uniqueModels.filter((model) => model.toLowerCase().includes(query))
  }, [modelSearch, uniqueModels])

  const sortLabelMap: Record<SortMode, string> = {
    price_desc: 'Спочатку дорожчі',
    price_asc: 'Спочатку дешевші',
    year_desc: 'Новіші за роком',
    year_asc: 'Старіші за роком',
    mileage_asc: 'Менший пробіг',
    mileage_desc: 'Більший пробіг',
  }

  const filteredCards = useMemo(() => {
    const items = cards.filter((card) => {
      if (selectedDocTypes.length > 0 && !selectedDocTypes.includes(docByCardId[card.id] ?? docs[0])) return false
      if (selectedBrands.length > 0 && !selectedBrands.includes(card.make)) return false
      if (selectedModels.length > 0 && !selectedModels.includes(card.model)) return false
      if (selectedFuels.length > 0 && !selectedFuels.includes(card.fuel)) return false
      if (selectedTransmission.length > 0 && !selectedTransmission.includes(card.transmission)) return false
      if (selectedDrive.length > 0 && !selectedDrive.includes(card.drive)) return false
      if (selectedYears.length > 0 && !selectedYears.includes(card.year)) return false

      if (yearFrom !== '' && card.year < yearFrom) return false
      if (yearTo !== '' && card.year > yearTo) return false
      if (card.mileageKm < odoMin || card.mileageKm > odoMax) return false

      return true
    })

    const sorted = [...items]
    sorted.sort((a, b) => {
      switch (sortMode) {
        case 'price_desc': return b.currentBid - a.currentBid
        case 'price_asc': return a.currentBid - b.currentBid
        case 'year_desc': return b.year - a.year
        case 'year_asc': return a.year - b.year
        case 'mileage_asc': return a.mileageKm - b.mileageKm
        case 'mileage_desc': return b.mileageKm - a.mileageKm
        default: return 0
      }
    })

    return sorted
  }, [cards, docByCardId, docs, odoMax, odoMin, selectedBrands, selectedDocTypes, selectedDrive, selectedFuels, selectedModels, selectedTransmission, selectedYears, sortMode, yearFrom, yearTo])

  const activeChips = [
    ...selectedDocTypes.map((value) => ({ type: 'doc' as const, value })),
    ...selectedBrands.map((value) => ({ type: 'brand' as const, value })),
    ...selectedModels.map((value) => ({ type: 'model' as const, value })),
    ...selectedFuels.map((value) => ({ type: 'fuel' as const, value })),
    ...selectedTransmission.map((value) => ({ type: 'trans' as const, value })),
    ...selectedDrive.map((value) => ({ type: 'drive' as const, value })),
    ...selectedYears.map((value) => ({ type: 'year' as const, value: String(value) })),
    ...(yearFrom !== '' || yearTo !== '' ? [{ type: 'yearRange' as const, value: `${yearFrom || minYearAll} - ${yearTo || maxYearAll}` }] : []),
  ]

  const resetAll = () => {
    setSelectedDocTypes([])
    setSelectedBrands([])
    setSelectedModels([])
    setSelectedFuels([])
    setSelectedTransmission([])
    setSelectedDrive([])
    setSelectedYears([])
    setOdoMin(odoMinLimit)
    setOdoMax(odoMaxLimit)
    setYearFrom('')
    setYearTo('')
    setBrandSearch('')
    setModelSearch('')
  }

  const removeChip = (type: 'doc' | 'brand' | 'model' | 'fuel' | 'trans' | 'drive' | 'year' | 'yearRange', value: string) => {
    if (type === 'doc') setSelectedDocTypes((prev) => prev.filter((entry) => entry !== value))
    if (type === 'brand') setSelectedBrands((prev) => prev.filter((entry) => entry !== value))
    if (type === 'model') setSelectedModels((prev) => prev.filter((entry) => entry !== value))
    if (type === 'fuel') setSelectedFuels((prev) => prev.filter((entry) => entry !== value))
    if (type === 'trans') setSelectedTransmission((prev) => prev.filter((entry) => entry !== value))
    if (type === 'drive') setSelectedDrive((prev) => prev.filter((entry) => entry !== value))
    if (type === 'year') setSelectedYears((prev) => prev.filter((entry) => String(entry) !== value))
    if (type === 'yearRange') {
      setYearFrom('')
      setYearTo('')
    }
  }

  const toggleGroup = (key: FilterGroupKey) => {
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const showSlidesForCard = (card: AuctionCardData): string[] => {
    if (card.images.length > 0) {
      return card.images
    }
    return [card.image]
  }

  const moveSlide = (cardId: string, total: number, step: -1 | 1) => {
    setSlideByCard((prev) => {
      const current = prev[cardId] ?? 0
      const next = (current + step + total) % total
      return { ...prev, [cardId]: next }
    })
  }

  const renderCard = (card: AuctionCardData) => {
    const slides = showSlidesForCard(card)
    const slideIndex = slideByCard[card.id] ?? 0
    const currentImage = slides[slideIndex] || card.image
    const docType = docByCardId[card.id] ?? docs[0]

    const isFixedPrice = mode === 'transit' || mode === 'in-stock'
      const topBadgeLabel = mode === 'transit' ? 'В ДОРОЗІ' : mode === 'in-stock' ? 'В НАЯВНОСТІ' : 'NEW'
      const auctionBadgeLabel = mode === 'transit' ? 'В НАЯВН.' : mode === 'in-stock' ? 'ГОТОВЕ' : card.auction
      const sellerLabel = mode === 'transit' ? 'Локальний' : mode === 'in-stock' ? 'CULT CARS' : card.auction
      const statusLabel = mode === 'transit' ? 'В дорозі' : mode === 'in-stock' ? 'В наявності' : 'На аукціоні'
      const priceLabel = mode === 'transit' ? 'Ціна' : mode === 'in-stock' ? 'Ціна' : 'Поточна ставка'
      const priceNote = mode === 'transit'
        ? 'Продавець: BIDDERS'
        : mode === 'in-stock'
          ? 'Доступне до лізингу'
          : `Оцінка: ${card.estimateLabel}`

      return (
      <article className="car-card" key={card.id} onClick={() => navigate(routes.lotDetail.replace(':lotId', card.id))}>
        <div className="card-badge-new">{topBadgeLabel}</div>

        <div className="card-photo" data-slides={slides.length}>
          <img src={currentImage} className="slide-img" alt={card.title} />
          <button className="slide-btn slide-prev" type="button" onClick={(event) => {
            event.stopPropagation()
            moveSlide(card.id, slides.length, -1)
          }}>‹</button>
          <button className="slide-btn slide-next" type="button" onClick={(event) => {
            event.stopPropagation()
            moveSlide(card.id, slides.length, 1)
          }}>›</button>
          <div className="slide-counter"><span className="slide-cur">{slideIndex + 1}</span> / <span className="slide-tot">{slides.length}</span></div>
          <div className="photo-overlay"></div>
        </div>

        <div className="card-body">
          <div className="card-top">
            <div className="card-title-block">
              <h3 className="card-title">{card.title}</h3>
              <div className="card-vin">{card.vin} · <span>{sellerLabel}</span></div>
            </div>
            <span className={isFixedPrice ? 'auction-badge available' : 'auction-badge'}>{auctionBadgeLabel}</span>
            <button className="fav-btn" type="button" onClick={(event) => event.stopPropagation()}>♡</button>
          </div>

          <div className="card-specs">
            <span className="spec-tag doc-tag">{docType}</span>
            <span className="spec-tag">{card.drive}</span>
            <span className="spec-tag">{card.engine}</span>
            <span className="spec-tag">{card.fuel}</span>
            <span className="spec-tag">{card.transmission}</span>
          </div>

          <div className="card-details">
            <div className="detail-item"><span className="detail-label">Кілометраж</span><span className="detail-value">{card.mileageLabel}</span></div>
            <div className="detail-item"><span className="detail-label">Місце</span><span className="detail-value">{card.location}</span></div>
            <div className="detail-item"><span className="detail-label">Пошкодження</span><span className="detail-value">{card.damage}</span></div>
            <div className="detail-item"><span className="detail-label">Статус</span><span className={isFixedPrice ? 'detail-value status-onward' : 'detail-value'}>{statusLabel}</span></div>
          </div>
        </div>

        <div className="card-price">
          <div>
            <div className="current-bid-label">{priceLabel}</div>
            <div className="current-bid-val">{card.currentBidLabel || formatUsd(card.currentBid)}</div>
          </div>
          <div className="bid-note">{priceNote}</div>
          <button className="btn-auction" type="button">Детальніше</button>
        </div>
      </article>
    )
  }

  return (
    <main className="page-wrapper catalog-page-react">
      <section className="catalog-bar">
        <div className="catalog-bar-inner">
          <div className="breadcrumb">
            <Link to={routes.home}>Головна</Link>
            <svg width="5" height="9" viewBox="0 0 5 9" fill="none"><path d="M1 1l3 3.5L1 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            <span className="current">{title}</span>
          </div>

          <div className="active-chips" id="activeChips">
            {activeChips.map((chip) => (
              <div className="chip" key={`${chip.type}-${chip.value}`}>
                {chip.value}
                <button type="button" onClick={() => removeChip(chip.type, chip.value)}>x</button>
              </div>
            ))}
          </div>

          <button className="filter-btn-mobile" type="button" onClick={() => setDrawerOpen(true)}>Фільтри</button>

          <div className="sort-wrap">
            <button className="sort-btn" type="button" onClick={() => setSortOpen((prev) => !prev)}>
              <span id="sortCurrent">{sortLabelMap[sortMode]}</span>
            </button>
            <div className={sortOpen ? 'sort-menu open' : 'sort-menu'} id="sortMenu">
              {(Object.keys(sortLabelMap) as SortMode[]).map((modeValue) => (
                <button
                  type="button"
                  key={modeValue}
                  className={sortMode === modeValue ? 'sort-option active' : 'sort-option'}
                  onClick={() => {
                    setSortMode(modeValue)
                    setSortOpen(false)
                  }}
                >
                  {sortLabelMap[modeValue]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="catalog-layout">
        <aside className={drawerOpen ? 'sidebar open-mobile' : 'sidebar'} id="sidebar">
          <div className="sidebar-header">
            <span className="sidebar-title">Фільтри пошуку</span>
            <button className="reset-btn" type="button" onClick={resetAll}>Reset All</button>
          </div>

          <div className="toggle-row"><span className="toggle-label">Wholesale - Тільки автомобілі</span><button className="toggle-switch on" type="button"></button></div>
          <div className="toggle-row"><span className="toggle-label">Нещодавно додані - Last 24 Hours</span><button className="toggle-switch" type="button"></button></div>
          <div className="toggle-row"><span className="toggle-label">Виключити авто на аукціоні</span><button className="toggle-switch" type="button"></button></div>

          <div className={selectedDocTypes.length > 0 ? 'filter-group open has-selection' : 'filter-group open'} data-filter="doc">
            <div className="filter-head" onClick={() => toggleGroup('doc')}>
              <div className="filter-head-left"><span className="filter-name">Тип документа</span><span className="filter-count">{selectedDocTypes.length}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedDocTypes([])
              }}>Скинути</button>
              <span className={openGroups.doc ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.doc ? (
              <div className="filter-body">
                <div className="filter-inner">
                  {docs.map((doc) => (
                    <label className="cb-item" key={doc}>
                      <input type="checkbox" checked={selectedDocTypes.includes(doc)} onChange={() => setSelectedDocTypes((prev) => toggleStringFilter(doc, prev))} />
                      <span className="cb-box"></span>
                      <span className="cb-label">{doc}</span>
                    </label>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="filter-group odo-group open" data-filter="odo">
            <div className="filter-head" onClick={() => toggleGroup('odo')}>
              <div className="filter-head-left"><span className="filter-name">Одометр</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setOdoMin(odoMinLimit)
                setOdoMax(odoMaxLimit)
              }}>Скинути</button>
              <span className={openGroups.odo ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.odo ? (
              <div className="filter-body">
                <div className="filter-inner">
                  <div className="dual-range-wrap">
                    <div className="dual-range-labels">
                      <span>від <span className="range-val" id="odoMinLabel">{formatKm(odoMin)}</span> km</span>
                      <span>до <span className="range-val" id="odoMaxLabel">{formatKm(odoMax)}</span> km</span>
                    </div>
                    <div className="dual-range">
                      <div className="dual-range-track">
                        <div
                          className="dual-range-fill"
                          id="odoRangeFill"
                          style={{ left: `${odoFillLeft}%`, right: `${odoFillRight}%` }}
                        ></div>
                      </div>
                      <input
                        type="range"
                        min={odoMinLimit}
                        max={odoMaxLimit}
                        step={5000}
                        value={odoMin}
                        onChange={(event) => setOdoMin(Math.min(Number(event.target.value), odoMax))}
                      />
                      <input
                        type="range"
                        min={odoMinLimit}
                        max={odoMaxLimit}
                        step={5000}
                        value={odoMax}
                        onChange={(event) => setOdoMax(Math.max(Number(event.target.value), odoMin))}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className={(selectedYears.length > 0 || yearFrom !== '' || yearTo !== '') ? 'filter-group year-group open has-selection' : 'filter-group year-group open'} data-filter="year">
            <div className="filter-head" onClick={() => toggleGroup('year')}>
              <div className="filter-head-left"><span className="filter-name">Рік</span><span className="filter-count">{selectedYears.length + ((yearFrom !== '' || yearTo !== '') ? 1 : 0)}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedYears([])
                setYearFrom('')
                setYearTo('')
              }}>Скинути</button>
              <span className={openGroups.year ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.year ? (
              <div className="filter-body">
                <div className="filter-inner">
                  <div className="year-range">
                    <input className="year-input" type="number" placeholder="Від" value={yearFrom} min={minYearAll} max={maxYearAll} onChange={(event) => setYearFrom(event.target.value ? Number(event.target.value) : '')} />
                    <span className="year-sep">-</span>
                    <input className="year-input" type="number" placeholder="До" value={yearTo} min={minYearAll} max={maxYearAll} onChange={(event) => setYearTo(event.target.value ? Number(event.target.value) : '')} />
                  </div>
                  <div id="filterYearList">
                    {uniqueYears.map((year) => (
                      <label className="cb-item" key={year}>
                        <input type="checkbox" checked={selectedYears.includes(year)} onChange={() => setSelectedYears((prev) => toggleNumberFilter(year, prev))} />
                        <span className="cb-box"></span>
                        <span className="cb-label">{year}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className={selectedBrands.length > 0 ? 'filter-group open has-selection' : 'filter-group open'} data-filter="brand">
            <div className="filter-head" onClick={() => toggleGroup('brand')}>
              <div className="filter-head-left"><span className="filter-name">Марка</span><span className="filter-count">{selectedBrands.length}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedBrands([])
              }}>Скинути</button>
              <span className={openGroups.brand ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.brand ? (
              <div className="filter-body">
                <div className="filter-inner">
                  <div className="filter-search-wrap"><input className="filter-search" type="text" placeholder="Шукати..." value={brandSearch} onChange={(event) => setBrandSearch(event.target.value)} /></div>
                  <div id="filterBrandList" className="filter-list">
                    {filteredBrands.map((brand) => (
                      <label className="cb-item" key={brand}>
                        <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => setSelectedBrands((prev) => toggleStringFilter(brand, prev))} />
                        <span className="cb-box"></span>
                        <span className="cb-label">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className={selectedModels.length > 0 ? 'filter-group open has-selection' : 'filter-group open'} data-filter="model">
            <div className="filter-head" onClick={() => toggleGroup('model')}>
              <div className="filter-head-left"><span className="filter-name">Модель</span><span className="filter-count">{selectedModels.length}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedModels([])
              }}>Скинути</button>
              <span className={openGroups.model ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.model ? (
              <div className="filter-body">
                <div className="filter-inner">
                  <div className="filter-search-wrap"><input className="filter-search" type="text" placeholder="Шукати..." value={modelSearch} onChange={(event) => setModelSearch(event.target.value)} /></div>
                  <div id="filterModelList" className="filter-list">
                    {filteredModels.map((model) => (
                      <label className="cb-item" key={model}>
                        <input type="checkbox" checked={selectedModels.includes(model)} onChange={() => setSelectedModels((prev) => toggleStringFilter(model, prev))} />
                        <span className="cb-box"></span>
                        <span className="cb-label">{model}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className={selectedFuels.length > 0 ? 'filter-group has-selection' : 'filter-group'} data-filter="engine">
            <div className="filter-head" onClick={() => toggleGroup('engine')}>
              <div className="filter-head-left"><span className="filter-name">Тип двигуна</span><span className="filter-count">{selectedFuels.length}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedFuels([])
              }}>Скинути</button>
              <span className={openGroups.engine ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.engine ? (
              <div className="filter-body"><div className="filter-inner">
                {uniqueFuels.map((fuel) => (
                  <label className="cb-item" key={fuel}>
                    <input type="checkbox" checked={selectedFuels.includes(fuel)} onChange={() => setSelectedFuels((prev) => toggleStringFilter(fuel, prev))} />
                    <span className="cb-box"></span>
                    <span className="cb-label">{fuel}</span>
                  </label>
                ))}
              </div></div>
            ) : null}
          </div>

          <div className={selectedTransmission.length > 0 ? 'filter-group has-selection' : 'filter-group'} data-filter="trans">
            <div className="filter-head" onClick={() => toggleGroup('trans')}>
              <div className="filter-head-left"><span className="filter-name">Передача</span><span className="filter-count">{selectedTransmission.length}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedTransmission([])
              }}>Скинути</button>
              <span className={openGroups.trans ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.trans ? (
              <div className="filter-body"><div className="filter-inner">
                {transmissions.map((value) => (
                  <label className="cb-item" key={value}>
                    <input type="checkbox" checked={selectedTransmission.includes(value)} onChange={() => setSelectedTransmission((prev) => toggleStringFilter(value, prev))} />
                    <span className="cb-box"></span>
                    <span className="cb-label">{value}</span>
                  </label>
                ))}
              </div></div>
            ) : null}
          </div>

          <div className={selectedDrive.length > 0 ? 'filter-group has-selection' : 'filter-group'} data-filter="drive">
            <div className="filter-head" onClick={() => toggleGroup('drive')}>
              <div className="filter-head-left"><span className="filter-name">Привідний механізм</span><span className="filter-count">{selectedDrive.length}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedDrive([])
              }}>Скинути</button>
              <span className={openGroups.drive ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.drive ? (
              <div className="filter-body"><div className="filter-inner">
                {drives.map((value) => (
                  <label className="cb-item" key={value}>
                    <input type="checkbox" checked={selectedDrive.includes(value)} onChange={() => setSelectedDrive((prev) => toggleStringFilter(value, prev))} />
                    <span className="cb-box"></span>
                    <span className="cb-label">{value}</span>
                  </label>
                ))}
              </div></div>
            ) : null}
          </div>

          <div className="filter-group" data-filter="postal">
            <div className="filter-head" onClick={() => toggleGroup('postal')}>
              <div className="filter-head-left"><span className="filter-name">Пошук за поштовим індексом</span></div>
              <span className={openGroups.postal ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
            </div>
            {openGroups.postal ? (
              <div className="filter-body">
                <div className="filter-inner">
                  <div className="postal-row">
                    <input className="postal-input" type="text" placeholder="Поштовий індекс" />
                    <select className="postal-select"><option>50 mi</option><option>100 mi</option><option>200 mi</option></select>
                  </div>
                  <div className="postal-btn-wrap"><button className="postal-btn" type="button">Шукати</button></div>
                </div>
              </div>
            ) : null}
          </div>
        </aside>

        <section className="catalog-main">
          <div className="catalog-tabs">
            {mode === 'catalog' ? (
              <>
                <button className="tab-item active" type="button">Все <span className="tab-count">{filteredCards.length}</span></button>
                <button className="tab-item" type="button">Відкриті аукціони <span className="tab-count">{Math.max(0, filteredCards.length - 2)}</span></button>
                <button className="tab-item" type="button">В процесі <span className="tab-count">{Math.min(3, filteredCards.length)}</span></button>
                <button className="tab-item" type="button">Завершені сьогодні <span className="tab-count">1</span></button>
                <button className="tab-item" type="button">Швидка покупка <span className="tab-count">{Math.max(1, Math.round(filteredCards.length / 2))}</span></button>
                <button className="tab-archive" type="button">Архівні аукціони</button>
              </>
            ) : mode === 'in-stock' ? (
              <>
                <button className="tab-item active" type="button">В наявності <span className="tab-count">{filteredCards.length}</span></button>
                <button className="tab-item" type="button">Готові до передачі <span className="tab-count">{Math.min(2, filteredCards.length)}</span></button>
                <button className="tab-item" type="button">Під замовлення <span className="tab-count">{Math.max(1, Math.round(filteredCards.length / 2))}</span></button>
              </>
            ) : (
              <button className="tab-item active" type="button">Авто в дорозі <span className="tab-count" id="tabCount">{filteredCards.length}</span></button>
            )}
          </div>

          <div className="results-head">
            <span className="results-count"><strong id="resultsCount">{filteredCards.length}</strong> автомобілів знайдено</span>
            <div className="layout-switcher" id="layoutSwitcher">
              <button className={layout === 'list' ? 'layout-btn active' : 'layout-btn'} type="button" onClick={() => setLayout('list')}>List</button>
              <button className={layout === 'grid' ? 'layout-btn active' : 'layout-btn'} type="button" onClick={() => setLayout('grid')}>Grid</button>
            </div>
          </div>

          <div className={layout === 'grid' ? 'car-list layout-grid' : 'car-list'} id="carList">
            {filteredCards.map(renderCard)}
          </div>

          <div className="load-more"><button className="btn-load" type="button">Завантажити ще</button></div>
        </section>
      </section>

      <button className={drawerOpen ? 'drawer-overlay open' : 'drawer-overlay'} type="button" onClick={() => setDrawerOpen(false)} aria-label="Close drawer"></button>
    </main>
  )
}
