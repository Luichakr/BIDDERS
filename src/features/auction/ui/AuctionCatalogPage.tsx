import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { AuctionCardData } from '../model/auctionData'
import { fetchInRouteCardById } from '../model/inRoute.service'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import './auction-catalog.css'

function getDamageLevel(damage: string): 'green' | 'yellow' | 'red' | 'gray' {
  const d = damage.toUpperCase()
  if (!d || d === '—') return 'gray'
  if (d.includes('RUNS') || d.includes('DRIVES') || d.includes('MINOR') || d.includes('NORMAL') || d.includes('ZUŻYCIE')) return 'yellow'
  if (d.includes('FRONT') || d.includes('REAR') || d.includes('SIDE') || d.includes('ROLL') || d.includes('BURN') || d.includes('FIRE') || d.includes('ALL OVER')) return 'red'
  if (d.includes('DENT') || d.includes('SCRATCH') || d.includes('HAIL') || d.includes('VANDAL') || d.includes('THEFT')) return 'yellow'
  if (d.includes('ENGINE') || d.includes('TRANSMISSION') || d.includes('MECHANICAL')) return 'red'
  return 'gray'
}

type TimerUnits = { d: string; h: string; m: string; s: string }

function formatCountdown(ms: number, u: TimerUnits): string {
  if (ms <= 0) return '—'
  const totalSec = Math.floor(ms / 1000)
  const d = Math.floor(totalSec / 86400)
  const h = Math.floor((totalSec % 86400) / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  if (d > 0) return `${d}${u.d} ${h}${u.h} ${m}${u.m}`
  if (h > 0) return `${h}${u.h} ${m}${u.m} ${s}${u.s}`
  return `${m}${u.m} ${s}${u.s}`
}

function AuctionTimer({ endMs, units }: { endMs: number; units: TimerUnits }) {
  const [remaining, setRemaining] = useState(() => endMs - Date.now())
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const tick = () => {
      const r = endMs - Date.now()
      setRemaining(r)
      if (r > 0) rafRef.current = window.setTimeout(tick, 1000)
    }
    tick()
    return () => clearTimeout(rafRef.current)
  }, [endMs])

  if (remaining <= 0) return null
  const urgent = remaining < 3_600_000 // < 1 hour
  return (
    <div className={`auction-timer${urgent ? ' auction-timer--urgent' : ''}`}>
      <span className="auction-timer__icon">⏱</span>
      {formatCountdown(remaining, units)}
    </div>
  )
}

interface AuctionCatalogPageProps {
  title: string
  cards: AuctionCardData[]
  mode: 'catalog' | 'transit' | 'in-stock'
  isLoading?: boolean
}

type SortMode = 'auction_asc' | 'price_desc' | 'price_asc' | 'year_desc' | 'year_asc' | 'mileage_asc' | 'mileage_desc'
type LayoutMode = 'list' | 'grid'
type FilterGroupKey = 'doc' | 'odo' | 'year' | 'brand' | 'model' | 'engine' | 'trans' | 'drive' | 'postal'

function formatUsd(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
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

export function AuctionCatalogPage({ title, cards, mode, isLoading = false }: AuctionCatalogPageProps) {
  const navigate = useNavigate()
  const { locale, t } = useI18n()
  const timerUnits: TimerUnits = { d: t('timerUnitD'), h: t('timerUnitH'), m: t('timerUnitM'), s: t('timerUnitS') }
  const [sortOpen, setSortOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [sortMode, setSortMode] = useState<SortMode>(mode === 'catalog' ? 'auction_asc' : 'price_desc')
  const [layout, setLayout] = useState<LayoutMode>('grid')
  const [visibleCount, setVisibleCount] = useState(20)

  const [selectedDocTypes, setSelectedDocTypes] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedModels, setSelectedModels] = useState<string[]>([])
  const [selectedFuels, setSelectedFuels] = useState<string[]>([])
  const [selectedTransmission, setSelectedTransmission] = useState<string[]>([])
  const [selectedDrive, setSelectedDrive] = useState<string[]>([])
  const [selectedYears, setSelectedYears] = useState<number[]>([])
  const [odoMin, setOdoMin] = useState<number>(() => parseMileageRange(cards)[0])
  const [odoMax, setOdoMax] = useState<number>(() => parseMileageRange(cards)[1])
  const [odoMinInput, setOdoMinInput] = useState<string>('')
  const [odoMaxInput, setOdoMaxInput] = useState<string>('')
  const [yearMinInput, setYearMinInput] = useState<string>('')
  const [yearMaxInput, setYearMaxInput] = useState<string>('')
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
  const [activeTab, setActiveTab] = useState<'all' | 'open' | 'live' | 'closed' | 'buynow'>('all')

  const [slideByCard, setSlideByCard] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {}
    cards.forEach((card) => {
      init[card.id] = 0
    })
    return init
  })
  const [galleryOverrides, setGalleryOverrides] = useState<Record<string, string[]>>({})
  const [galleryLoadingIds, setGalleryLoadingIds] = useState<Record<string, boolean>>({})

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

  const sortLabelMap: Record<SortMode, string> = {
    auction_asc: t('catalogSortAuctionTime'),
    price_desc: t('catalogSortPriceDesc'),
    price_asc: t('catalogSortPriceAsc'),
    year_desc: t('catalogSortYearDesc'),
    year_asc: t('catalogSortYearAsc'),
    mileage_asc: t('catalogSortMileageAsc'),
    mileage_desc: t('catalogSortMileageDesc'),
  }

  useEffect(() => {
    setOdoMin(odoMinLimit)
    setOdoMax(odoMaxLimit)
  }, [odoMaxLimit, odoMinLimit])

  useEffect(() => {
    setOdoMinInput(String(Math.round(odoMin)))
    setOdoMaxInput(String(Math.round(odoMax)))
  }, [odoMax, odoMin])

  useEffect(() => {
    if (yearFrom === '') return
    setYearMinInput(String(Math.round(yearFrom)))
  }, [yearFrom])

  useEffect(() => {
    if (yearTo === '') return
    setYearMaxInput(String(Math.round(yearTo)))
  }, [yearTo])

  const uniqueBrands = useMemo(() => Array.from(new Set(cards.map((card) => card.make))).sort(), [cards])
  const uniqueModels = useMemo(() => Array.from(new Set(cards.map((card) => card.model))).sort(), [cards])
  const uniqueFuels = useMemo(() => Array.from(new Set(cards.map((card) => card.fuel))).sort(), [cards])
  const uniqueTransmissions = useMemo(() => Array.from(new Set(cards.map((card) => card.transmission))).sort(), [cards])
  const uniqueYears = useMemo(() => Array.from(new Set(cards.map((card) => card.year))).sort((a, b) => b - a), [cards])

  const matchesCard = (
    card: AuctionCardData,
    overrides?: {
      selectedDocTypes?: string[]
      selectedBrands?: string[]
      selectedModels?: string[]
      selectedFuels?: string[]
      selectedTransmission?: string[]
      selectedDrive?: string[]
      selectedYears?: number[]
      yearFrom?: number | ''
      yearTo?: number | ''
      odoMin?: number
      odoMax?: number
    },
  ) => {
    const docFilter = overrides?.selectedDocTypes ?? selectedDocTypes
    const brandFilter = overrides?.selectedBrands ?? selectedBrands
    const modelFilter = overrides?.selectedModels ?? selectedModels
    const fuelFilter = overrides?.selectedFuels ?? selectedFuels
    const transmissionFilter = overrides?.selectedTransmission ?? selectedTransmission
    const driveFilter = overrides?.selectedDrive ?? selectedDrive
    const yearFilter = overrides?.selectedYears ?? selectedYears
    const yearFromFilter = overrides?.yearFrom ?? yearFrom
    const yearToFilter = overrides?.yearTo ?? yearTo
    const odoMinFilter = overrides?.odoMin ?? odoMin
    const odoMaxFilter = overrides?.odoMax ?? odoMax

    if (docFilter.length > 0 && !docFilter.includes(docByCardId[card.id] ?? docs[0])) return false
    if (brandFilter.length > 0 && !brandFilter.includes(card.make)) return false
    if (modelFilter.length > 0 && !modelFilter.includes(card.model)) return false
    if (fuelFilter.length > 0 && !fuelFilter.includes(card.fuel)) return false
    if (transmissionFilter.length > 0 && !transmissionFilter.includes(card.transmission)) return false
    if (driveFilter.length > 0 && !driveFilter.includes(card.drive)) return false
    if (yearFilter.length > 0 && !yearFilter.includes(card.year)) return false

    if (yearFromFilter !== '' && card.year < yearFromFilter) return false
    if (yearToFilter !== '' && card.year > yearToFilter) return false
    if (card.mileageKm < odoMinFilter || card.mileageKm > odoMaxFilter) return false

    return true
  }

  const filteredCards = useMemo(() => {
    const items = cards.filter((card) => matchesCard(card))

    const sorted = [...items]
    sorted.sort((a, b) => {
      const aEnd = (a as AuctionCardData & { auctionEndMs?: number | null }).auctionEndMs ?? 0
      const bEnd = (b as AuctionCardData & { auctionEndMs?: number | null }).auctionEndMs ?? 0
      switch (sortMode) {
        case 'auction_asc': {
          // Сначала активные аукционы (ближайшие), потом без таймера
          const now = Date.now()
          const aActive = aEnd > now ? aEnd : Infinity
          const bActive = bEnd > now ? bEnd : Infinity
          return aActive - bActive
        }
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

  const brandOptionCounts = useMemo(() => {
    const counts = new Map<string, number>()
    cards.forEach((card) => {
      if (!matchesCard(card, { selectedBrands: [] })) return
      counts.set(card.make, (counts.get(card.make) ?? 0) + 1)
    })
    return counts
  }, [cards, docByCardId, docs, odoMax, odoMin, selectedDocTypes, selectedDrive, selectedFuels, selectedModels, selectedTransmission, selectedYears, yearFrom, yearTo])

  const modelOptionCounts = useMemo(() => {
    const counts = new Map<string, number>()
    cards.forEach((card) => {
      if (!matchesCard(card, { selectedModels: [] })) return
      counts.set(card.model, (counts.get(card.model) ?? 0) + 1)
    })
    return counts
  }, [cards, docByCardId, docs, odoMax, odoMin, selectedBrands, selectedDocTypes, selectedDrive, selectedFuels, selectedTransmission, selectedYears, yearFrom, yearTo])

  const fuelOptionCounts = useMemo(() => {
    const counts = new Map<string, number>()
    cards.forEach((card) => {
      if (!matchesCard(card, { selectedFuels: [] })) return
      counts.set(card.fuel, (counts.get(card.fuel) ?? 0) + 1)
    })
    return counts
  }, [cards, docByCardId, docs, odoMax, odoMin, selectedBrands, selectedDocTypes, selectedDrive, selectedModels, selectedTransmission, selectedYears, yearFrom, yearTo])

  const transmissionOptionCounts = useMemo(() => {
    const counts = new Map<string, number>()
    cards.forEach((card) => {
      if (!matchesCard(card, { selectedTransmission: [] })) return
      counts.set(card.transmission, (counts.get(card.transmission) ?? 0) + 1)
    })
    return counts
  }, [cards, docByCardId, docs, odoMax, odoMin, selectedBrands, selectedDocTypes, selectedDrive, selectedFuels, selectedModels, selectedYears, yearFrom, yearTo])

  const yearOptionCounts = useMemo(() => {
    const counts = new Map<number, number>()
    cards.forEach((card) => {
      if (!matchesCard(card, { selectedYears: [] })) return
      counts.set(card.year, (counts.get(card.year) ?? 0) + 1)
    })
    return counts
  }, [cards, docByCardId, docs, odoMax, odoMin, selectedBrands, selectedDocTypes, selectedDrive, selectedFuels, selectedModels, selectedTransmission, yearFrom, yearTo])

  const filteredBrands = useMemo(() => {
    const query = brandSearch.trim().toLowerCase()
    const available = uniqueBrands.filter((brand) => {
      const count = brandOptionCounts.get(brand) ?? 0
      return count > 0 || selectedBrands.includes(brand)
    })
    if (!query) return available
    return available.filter((brand) => brand.toLowerCase().includes(query))
  }, [brandOptionCounts, brandSearch, selectedBrands, uniqueBrands])

  const filteredModels = useMemo(() => {
    const query = modelSearch.trim().toLowerCase()
    const available = uniqueModels.filter((model) => {
      const count = modelOptionCounts.get(model) ?? 0
      return count > 0 || selectedModels.includes(model)
    })
    if (!query) return available
    return available.filter((model) => model.toLowerCase().includes(query))
  }, [modelOptionCounts, modelSearch, selectedModels, uniqueModels])

  useEffect(() => {
    setVisibleCount(20)
  }, [cards, mode, sortMode, selectedBrands, selectedDocTypes, selectedDrive, selectedFuels, selectedModels, selectedTransmission, selectedYears, yearFrom, yearTo, odoMin, odoMax])

  useEffect(() => {
    if (mode !== 'transit') return
    setSelectedYears([])
    setYearFrom(minYearAll)
    setYearTo(maxYearAll)
  }, [maxYearAll, minYearAll, mode])

  const now = Date.now()
  const tabFilteredCards = useMemo(() => {
    if (mode !== 'catalog' || activeTab === 'all') return filteredCards
    return filteredCards.filter((c) => {
      const endMs = (c as AuctionCardData & { auctionEndMs?: number | null }).auctionEndMs
      const buyNow = (c as AuctionCardData & { buyNow?: number }).buyNow
      if (activeTab === 'buynow') return buyNow != null && buyNow > 0
      if (!endMs) return false
      if (activeTab === 'open') return endMs > now
      if (activeTab === 'live') return endMs > now && endMs - now < 24 * 3600 * 1000
      if (activeTab === 'closed') {
        const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0)
        return endMs < now && endMs > startOfToday.getTime()
      }
      return true
    })
  }, [filteredCards, activeTab, mode])

  const tabCounts = useMemo(() => {
    if (mode !== 'catalog') return {}
    const open = filteredCards.filter(c => { const e = (c as AuctionCardData & { auctionEndMs?: number | null }).auctionEndMs; return e && e > now }).length
    const live = filteredCards.filter(c => { const e = (c as AuctionCardData & { auctionEndMs?: number | null }).auctionEndMs; return e && e > now && e - now < 24 * 3600 * 1000 }).length
    const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0)
    const closed = filteredCards.filter(c => { const e = (c as AuctionCardData & { auctionEndMs?: number | null }).auctionEndMs; return e && e < now && e > startOfToday.getTime() }).length
    const buynow = filteredCards.filter(c => { const b = (c as AuctionCardData & { buyNow?: number }).buyNow; return b != null && b > 0 }).length
    return { open, live, closed, buynow }
  }, [filteredCards, mode])

  const visibleCards = useMemo(() => tabFilteredCards.slice(0, visibleCount), [tabFilteredCards, visibleCount])
  const hasMoreCards = visibleCount < tabFilteredCards.length

  const activeChips = [
    ...selectedDocTypes.map((value) => ({ type: 'doc' as const, value })),
    ...selectedBrands.map((value) => ({ type: 'brand' as const, value })),
    ...selectedModels.map((value) => ({ type: 'model' as const, value })),
    ...selectedFuels.map((value) => ({ type: 'fuel' as const, value })),
    ...selectedTransmission.map((value) => ({ type: 'trans' as const, value })),
    ...selectedDrive.map((value) => ({ type: 'drive' as const, value })),
    ...selectedYears.map((value) => ({ type: 'year' as const, value: String(value) })),
    ...(mode !== 'transit' && (yearFrom !== '' || yearTo !== '') ? [{ type: 'yearRange' as const, value: `${yearFrom || minYearAll} - ${yearTo || maxYearAll}` }] : []),
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
    setYearFrom(mode === 'transit' ? minYearAll : '')
    setYearTo(mode === 'transit' ? maxYearAll : '')
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

  const handleOdoMinChange = (rawValue: number) => {
    const nextValue = Math.max(odoMinLimit, Math.min(rawValue, odoMax))
    setOdoMin(nextValue)
  }

  const handleOdoMaxChange = (rawValue: number) => {
    const nextValue = Math.min(odoMaxLimit, Math.max(rawValue, odoMin))
    setOdoMax(nextValue)
  }

  const handleYearMinChange = (rawValue: number) => {
    const currentMax = yearTo === '' ? maxYearAll : yearTo
    const nextValue = Math.max(minYearAll, Math.min(rawValue, currentMax))
    setYearFrom(nextValue)
  }

  const handleYearMaxChange = (rawValue: number) => {
    const currentMin = yearFrom === '' ? minYearAll : yearFrom
    const nextValue = Math.min(maxYearAll, Math.max(rawValue, currentMin))
    setYearTo(nextValue)
  }

  const handleOdoMinInputChange = (rawValue: string) => {
    setOdoMinInput(rawValue)
    if (rawValue.trim() === '') return
    const parsed = Number(rawValue)
    if (!Number.isFinite(parsed)) return
    handleOdoMinChange(parsed)
  }

  const handleOdoMaxInputChange = (rawValue: string) => {
    setOdoMaxInput(rawValue)
    if (rawValue.trim() === '') return
    const parsed = Number(rawValue)
    if (!Number.isFinite(parsed)) return
    handleOdoMaxChange(parsed)
  }

  const commitOdoInputs = () => {
    const minParsed = Number(odoMinInput)
    const maxParsed = Number(odoMaxInput)

    if (Number.isFinite(minParsed)) {
      handleOdoMinChange(minParsed)
    } else {
      setOdoMinInput(String(Math.round(odoMin)))
    }

    if (Number.isFinite(maxParsed)) {
      handleOdoMaxChange(maxParsed)
    } else {
      setOdoMaxInput(String(Math.round(odoMax)))
    }
  }

  const handleYearMinInputChange = (rawValue: string) => {
    setYearMinInput(rawValue)
    if (rawValue.trim() === '') return
    const parsed = Number(rawValue)
    if (!Number.isFinite(parsed)) return
    handleYearMinChange(parsed)
  }

  const handleYearMaxInputChange = (rawValue: string) => {
    setYearMaxInput(rawValue)
    if (rawValue.trim() === '') return
    const parsed = Number(rawValue)
    if (!Number.isFinite(parsed)) return
    handleYearMaxChange(parsed)
  }

  const commitYearInputs = () => {
    const minParsed = Number(yearMinInput)
    const maxParsed = Number(yearMaxInput)

    if (Number.isFinite(minParsed)) {
      handleYearMinChange(minParsed)
    } else if (yearFrom !== '') {
      setYearMinInput(String(Math.round(yearFrom)))
    }

    if (Number.isFinite(maxParsed)) {
      handleYearMaxChange(maxParsed)
    } else if (yearTo !== '') {
      setYearMaxInput(String(Math.round(yearTo)))
    }
  }

  const showSlidesForCard = (card: AuctionCardData): string[] => {
    const overrideGallery = galleryOverrides[card.id]
    if (overrideGallery && overrideGallery.length > 0) {
      return overrideGallery
    }
    if (card.images.length > 0) {
      return card.images
    }
    return [card.image]
  }

  const hydrateGalleryForTransitCard = async (cardId: string, step: -1 | 1 = 1) => {
    if ((mode !== 'transit' && mode !== 'catalog') || !/^\d+$/.test(cardId) || galleryLoadingIds[cardId]) {
      return
    }

    setGalleryLoadingIds((prev) => ({ ...prev, [cardId]: true }))
    try {
      const liveCard = await fetchInRouteCardById(cardId)
      const images = liveCard?.images?.filter(Boolean) ?? []
      if (images.length > 1) {
        setGalleryOverrides((prev) => ({ ...prev, [cardId]: images }))
        // immediately apply the direction after hydration
        setSlideByCard((prev) => {
          const current = prev[cardId] ?? 0
          const next = (current + step + images.length) % images.length
          return { ...prev, [cardId]: next }
        })
      }
    } catch {
      // keep single image state if gallery request fails
    } finally {
      setGalleryLoadingIds((prev) => ({ ...prev, [cardId]: false }))
    }
  }

  const moveSlide = (cardId: string, total: number, step: -1 | 1) => {
    if (total <= 1) {
      void hydrateGalleryForTransitCard(cardId, step)
      return
    }
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
    const topBadgeLabel = mode === 'transit'
      ? t('catalogBadgeInTransit')
      : mode === 'in-stock'
        ? t('catalogBadgeInStock')
        : t('catalogBadgeNew')
    const auctionBadgeLabel = mode === 'transit'
      ? t('catalogAuctionBadgeAvailable')
      : mode === 'in-stock'
        ? t('catalogAuctionBadgeReady')
        : card.auction
    const sellerLabel = mode === 'transit'
      ? t('catalogSellerLocal')
      : mode === 'in-stock'
        ? 'CULT CARS'
        : card.auction
    const statusLabel = mode === 'transit'
      ? t('catalogStatusInTransit')
      : mode === 'in-stock'
        ? t('catalogStatusInStock')
        : t('catalogStatusAtAuction')
    const hasBuyNow = mode === 'catalog' && card.buyNow != null && card.buyNow > 0
    const priceLabel = mode === 'transit' || mode === 'in-stock'
      ? t('catalogPriceLabel')
      : hasBuyNow
        ? t('catalogTabBuyNow')
        : t('catalogCurrentBidLabel')
    const displayPrice = hasBuyNow
      ? (card.buyNowLabel ?? `$${card.buyNow}`)
      : (card.currentBidLabel || (card.currentBid > 0 ? formatUsd(card.currentBid) : '—'))
    const priceNote = mode === 'transit'
      ? t('catalogPriceNoteSeller')
      : mode === 'in-stock'
        ? t('catalogPriceNoteLease')
        : null

    return (
      <article className="car-card" key={card.id} onClick={() => navigate(localizedPath(locale, `lots/${card.id}`))}>
        <div className="card-badge-new">{topBadgeLabel}</div>

        <div className="card-photo" data-slides={slides.length}>
          <img
            src={currentImage}
            className="slide-img"
            alt={card.title}
          />
          <button className="slide-btn slide-prev" type="button" onClick={(event) => {
            event.stopPropagation()
            moveSlide(card.id, slides.length, -1)
          }}>‹</button>
          <button className="slide-btn slide-next" type="button" onClick={(event) => {
            event.stopPropagation()
            moveSlide(card.id, slides.length, 1)
          }}>›</button>
          <div className="photo-overlay"></div>
          {hasBuyNow && (
            <div className="card-buynow-badge">
              <span className="card-buynow-badge__label">KUP TERAZ</span>
              <span className="card-buynow-badge__price">{card.buyNowLabel}</span>
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="card-top">
            <div className="card-title-block">
              <h3 className="card-title">{card.title}</h3>
              <div className="card-vin">
                {card.vin ? card.vin : `Lot #${card.id}`}
                {' · '}<span>{sellerLabel}</span>
              </div>
            </div>
            {!isFixedPrice && <span className="auction-badge">{auctionBadgeLabel}</span>}
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
            <div className="detail-item"><span className="detail-label">{t('catalogDetailMileage')}</span><span className="detail-value">{card.mileageLabel}</span></div>
            <div className="detail-item"><span className="detail-label">{t('catalogDetailLocation')}</span><span className="detail-value">{card.location}</span></div>
            <div className="detail-item">
              <span className="detail-label">{t('catalogDetailDamage')}</span>
              <span className={`detail-value damage-tag damage-tag--${getDamageLevel(card.damage)}`}>{card.damage.split('|').map(k => t(k.trim())).join(' · ')}</span>
            </div>
            <div className="detail-item"><span className="detail-label">{t('catalogDetailStatus')}</span><span className={isFixedPrice ? 'detail-value status-onward' : 'detail-value'}>{statusLabel}</span></div>
          </div>
        </div>

        <div className="card-price">
          <div>
            <div className="current-bid-label">{priceLabel}</div>
            <div className={`current-bid-val${hasBuyNow ? ' current-bid-val--buynow' : ''}`}>{displayPrice}</div>
            {hasBuyNow && (
              <div className="card-current-bid-row">
                <span className="card-current-bid-row__label">{t('catalogCurrentBidLabel')}</span>
                <span className="card-current-bid-row__val">
                  {card.currentBid > 0 ? (card.currentBidLabel || formatUsd(card.currentBid)) : '—'}
                </span>
              </div>
            )}
          </div>
          {mode === 'catalog' && card.auctionEndMs && card.auctionEndMs > Date.now() && (
            <AuctionTimer endMs={card.auctionEndMs} units={timerUnits} />
          )}
          <div className="bid-note">{priceNote}</div>
          <button className="btn-auction" type="button">{t('catalogCardDetails')}</button>
        </div>
      </article>
    )
  }

  return (
    <main className="page-wrapper catalog-page-react">
      <section className="catalog-bar">
        <div className="catalog-bar-inner">
          <div className="breadcrumb">
            <Link to={localizedPath(locale, routePaths.home)}>{t('navHome')}</Link>
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

          <button className="filter-btn-mobile" type="button" onClick={() => setDrawerOpen(true)}>{t('catalogFilterBtn')}</button>

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
            <span className="sidebar-title">{t('catalogFilterTitle')}</span>
            <button className="reset-btn" type="button" onClick={resetAll}>{t('catalogFilterResetAll')}</button>
          </div>

          {mode !== 'transit' ? (
            <>
              <div className="toggle-row"><span className="toggle-label">{t('catalogToggleWholesale')}</span><button className="toggle-switch on" type="button"></button></div>
              <div className="toggle-row"><span className="toggle-label">{t('catalogToggleRecent')}</span><button className="toggle-switch" type="button"></button></div>
              <div className="toggle-row"><span className="toggle-label">{t('catalogToggleExcludeActive')}</span><button className="toggle-switch" type="button"></button></div>
            </>
          ) : null}

          {mode !== 'transit' ? (
          <div className={selectedDocTypes.length > 0 ? 'filter-group open has-selection' : 'filter-group open'} data-filter="doc">
            <div className="filter-head" onClick={() => toggleGroup('doc')}>
              <div className="filter-head-left"><span className="filter-name">{t('catalogFilterDocType')}</span><span className="filter-count">{selectedDocTypes.length}</span></div>
              <button className="filter-reset" type="button" onClick={(event) => {
                event.stopPropagation()
                setSelectedDocTypes([])
              }}>{t('catalogFilterReset')}</button>
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
          ) : null}

          {mode === 'transit' ? (
            <>
              <div className={(selectedYears.length > 0 || yearFrom !== '' || yearTo !== '') ? 'filter-group year-group open has-selection' : 'filter-group year-group open'} data-filter="year">
                <div className="filter-head" onClick={() => toggleGroup('year')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterYear')}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setYearFrom(minYearAll)
                    setYearTo(maxYearAll)
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.year ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.year ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="dual-range-wrap">
                        <div className="dual-range-labels">
                          <span>
                            {t('catalogRangeFrom')}
                            <input
                              className="range-val-input"
                              inputMode="numeric"
                              value={yearMinInput}
                              onChange={(event) => handleYearMinInputChange(event.target.value.replace(/[^0-9]/g, ''))}
                              onBlur={commitYearInputs}
                            />
                          </span>
                          <span>
                            {t('catalogRangeTo')}
                            <input
                              className="range-val-input"
                              inputMode="numeric"
                              value={yearMaxInput}
                              onChange={(event) => handleYearMaxInputChange(event.target.value.replace(/[^0-9]/g, ''))}
                              onBlur={commitYearInputs}
                            />
                          </span>
                        </div>
                        <div className="dual-range">
                          <div className="dual-range-track">
                            <div
                              className="dual-range-fill"
                              style={{
                                left: `${(((yearFrom === '' ? minYearAll : yearFrom) - minYearAll) / Math.max(1, maxYearAll - minYearAll)) * 100}%`,
                                right: `${100 - ((((yearTo === '' ? maxYearAll : yearTo) - minYearAll) / Math.max(1, maxYearAll - minYearAll)) * 100)}%`,
                              }}
                            ></div>
                          </div>
                          <input
                            type="range"
                            min={minYearAll}
                            max={maxYearAll}
                            step={1}
                            value={yearFrom === '' ? minYearAll : yearFrom}
                            onInput={(event) => handleYearMinChange(Number((event.target as HTMLInputElement).value))}
                            onChange={(event) => handleYearMinChange(Number(event.target.value))}
                          />
                          <input
                            type="range"
                            min={minYearAll}
                            max={maxYearAll}
                            step={1}
                            value={yearTo === '' ? maxYearAll : yearTo}
                            onInput={(event) => handleYearMaxChange(Number((event.target as HTMLInputElement).value))}
                            onChange={(event) => handleYearMaxChange(Number(event.target.value))}
                          />
                        </div>
                      </div>

                      <div id="filterYearList" className="filter-list">
                        {uniqueYears
                          .filter((year) => (yearOptionCounts.get(year) ?? 0) > 0 || selectedYears.includes(year))
                          .map((year) => {
                            const count = yearOptionCounts.get(year) ?? 0
                            return (
                              <label className="cb-item" key={year}>
                                <input type="checkbox" checked={selectedYears.includes(year)} onChange={() => setSelectedYears((prev) => toggleNumberFilter(year, prev))} />
                                <span className="cb-box"></span>
                                <span className="cb-label"><span>{year}</span><span className="cb-count">{count} {t('catalogCountSuffix')}</span></span>
                              </label>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className={selectedBrands.length > 0 ? 'filter-group open has-selection' : 'filter-group open'} data-filter="brand">
                <div className="filter-head" onClick={() => toggleGroup('brand')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterBrand')}</span><span className="filter-count">{selectedBrands.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedBrands([])
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.brand ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.brand ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="filter-search-wrap"><input className="filter-search" type="text" placeholder={t('catalogSearchPlaceholder')} value={brandSearch} onChange={(event) => setBrandSearch(event.target.value)} /></div>
                      <div id="filterBrandList" className="filter-list">
                        {filteredBrands.map((brand) => {
                          const count = brandOptionCounts.get(brand) ?? 0
                          return (
                            <label className="cb-item" key={brand}>
                              <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => setSelectedBrands((prev) => toggleStringFilter(brand, prev))} />
                              <span className="cb-box"></span>
                              <span className="cb-label"><span>{brand}</span><span className="cb-count">{count} {t('catalogCountSuffix')}</span></span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className={selectedModels.length > 0 ? 'filter-group open has-selection' : 'filter-group open'} data-filter="model">
                <div className="filter-head" onClick={() => toggleGroup('model')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterModel')}</span><span className="filter-count">{selectedModels.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedModels([])
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.model ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.model ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="filter-search-wrap"><input className="filter-search" type="text" placeholder={t('catalogSearchPlaceholder')} value={modelSearch} onChange={(event) => setModelSearch(event.target.value)} /></div>
                      <div id="filterModelList" className="filter-list">
                        {filteredModels.map((model) => {
                          const count = modelOptionCounts.get(model) ?? 0
                          return (
                            <label className="cb-item" key={model}>
                              <input type="checkbox" checked={selectedModels.includes(model)} onChange={() => setSelectedModels((prev) => toggleStringFilter(model, prev))} />
                              <span className="cb-box"></span>
                              <span className="cb-label"><span>{model}</span><span className="cb-count">{count} {t('catalogCountSuffix')}</span></span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="filter-group odo-group open" data-filter="odo">
                <div className="filter-head" onClick={() => toggleGroup('odo')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterMileage')}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setOdoMin(odoMinLimit)
                    setOdoMax(odoMaxLimit)
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.odo ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.odo ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="dual-range-wrap">
                        <div className="dual-range-labels">
                          <span>
                            {t('catalogRangeFrom')}
                            <input
                              className="range-val-input"
                              id="odoMinLabel"
                              inputMode="numeric"
                              value={odoMinInput}
                              onChange={(event) => handleOdoMinInputChange(event.target.value.replace(/[^0-9]/g, ''))}
                              onBlur={commitOdoInputs}
                            />
                            km
                          </span>
                          <span>
                            {t('catalogRangeTo')}
                            <input
                              className="range-val-input"
                              id="odoMaxLabel"
                              inputMode="numeric"
                              value={odoMaxInput}
                              onChange={(event) => handleOdoMaxInputChange(event.target.value.replace(/[^0-9]/g, ''))}
                              onBlur={commitOdoInputs}
                            />
                            km
                          </span>
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
                            step={1000}
                            value={odoMin}
                            onInput={(event) => handleOdoMinChange(Number((event.target as HTMLInputElement).value))}
                            onChange={(event) => handleOdoMinChange(Number(event.target.value))}
                          />
                          <input
                            type="range"
                            min={odoMinLimit}
                            max={odoMaxLimit}
                            step={1000}
                            value={odoMax}
                            onInput={(event) => handleOdoMaxChange(Number((event.target as HTMLInputElement).value))}
                            onChange={(event) => handleOdoMaxChange(Number(event.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className={selectedFuels.length > 0 ? 'filter-group has-selection' : 'filter-group'} data-filter="engine">
                <div className="filter-head" onClick={() => toggleGroup('engine')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterFuel')}</span><span className="filter-count">{selectedFuels.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedFuels([])
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.engine ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.engine ? (
                  <div className="filter-body"><div className="filter-inner">
                    {uniqueFuels
                      .filter((fuel) => (fuelOptionCounts.get(fuel) ?? 0) > 0 || selectedFuels.includes(fuel))
                      .map((fuel) => {
                        const count = fuelOptionCounts.get(fuel) ?? 0
                        return (
                          <label className="cb-item" key={fuel}>
                            <input type="checkbox" checked={selectedFuels.includes(fuel)} onChange={() => setSelectedFuels((prev) => toggleStringFilter(fuel, prev))} />
                            <span className="cb-box"></span>
                            <span className="cb-label"><span>{fuel}</span><span className="cb-count">{count} {t('catalogCountSuffix')}</span></span>
                          </label>
                        )
                      })}
                  </div></div>
                ) : null}
              </div>

              <div className={selectedTransmission.length > 0 ? 'filter-group has-selection' : 'filter-group'} data-filter="trans">
                <div className="filter-head" onClick={() => toggleGroup('trans')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterTrans')}</span><span className="filter-count">{selectedTransmission.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedTransmission([])
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.trans ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.trans ? (
                  <div className="filter-body"><div className="filter-inner">
                    {uniqueTransmissions
                      .filter((value) => (transmissionOptionCounts.get(value) ?? 0) > 0 || selectedTransmission.includes(value))
                      .map((value) => {
                        const count = transmissionOptionCounts.get(value) ?? 0
                        return (
                          <label className="cb-item" key={value}>
                            <input type="checkbox" checked={selectedTransmission.includes(value)} onChange={() => setSelectedTransmission((prev) => toggleStringFilter(value, prev))} />
                            <span className="cb-box"></span>
                            <span className="cb-label"><span>{value}</span><span className="cb-count">{count} {t('catalogCountSuffix')}</span></span>
                          </label>
                        )
                      })}
                  </div></div>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <div className="filter-group odo-group open" data-filter="odo">
                <div className="filter-head" onClick={() => toggleGroup('odo')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterMileage')}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setOdoMin(odoMinLimit)
                    setOdoMax(odoMaxLimit)
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.odo ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.odo ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="dual-range-wrap">
                        <div className="dual-range-labels">
                          <span>
                            {t('catalogRangeFrom')}
                            <input
                              className="range-val-input"
                              id="odoMinLabel"
                              inputMode="numeric"
                              value={odoMinInput}
                              onChange={(event) => handleOdoMinInputChange(event.target.value.replace(/[^0-9]/g, ''))}
                              onBlur={commitOdoInputs}
                            />
                            km
                          </span>
                          <span>
                            {t('catalogRangeTo')}
                            <input
                              className="range-val-input"
                              id="odoMaxLabel"
                              inputMode="numeric"
                              value={odoMaxInput}
                              onChange={(event) => handleOdoMaxInputChange(event.target.value.replace(/[^0-9]/g, ''))}
                              onBlur={commitOdoInputs}
                            />
                            km
                          </span>
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
                            step={1000}
                            value={odoMin}
                            onInput={(event) => handleOdoMinChange(Number((event.target as HTMLInputElement).value))}
                            onChange={(event) => handleOdoMinChange(Number(event.target.value))}
                          />
                          <input
                            type="range"
                            min={odoMinLimit}
                            max={odoMaxLimit}
                            step={1000}
                            value={odoMax}
                            onInput={(event) => handleOdoMaxChange(Number((event.target as HTMLInputElement).value))}
                            onChange={(event) => handleOdoMaxChange(Number(event.target.value))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className={(selectedYears.length > 0 || yearFrom !== '' || yearTo !== '') ? 'filter-group year-group open has-selection' : 'filter-group year-group open'} data-filter="year">
                <div className="filter-head" onClick={() => toggleGroup('year')}>
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterYear')}</span><span className="filter-count">{selectedYears.length + ((yearFrom !== '' || yearTo !== '') ? 1 : 0)}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedYears([])
                    setYearFrom('')
                    setYearTo('')
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.year ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.year ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="year-range">
                        <input className="year-input" type="number" placeholder={t('catalogYearFrom')} value={yearFrom} min={minYearAll} max={maxYearAll} onChange={(event) => setYearFrom(event.target.value ? Number(event.target.value) : '')} />
                        <span className="year-sep">-</span>
                        <input className="year-input" type="number" placeholder={t('catalogYearTo')} value={yearTo} min={minYearAll} max={maxYearAll} onChange={(event) => setYearTo(event.target.value ? Number(event.target.value) : '')} />
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
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterBrand')}</span><span className="filter-count">{selectedBrands.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedBrands([])
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.brand ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.brand ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="filter-search-wrap"><input className="filter-search" type="text" placeholder={t('catalogSearchPlaceholder')} value={brandSearch} onChange={(event) => setBrandSearch(event.target.value)} /></div>
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
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterModel')}</span><span className="filter-count">{selectedModels.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedModels([])
                  }}>{t('catalogFilterReset')}</button>
                  <span className={openGroups.model ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.model ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="filter-search-wrap"><input className="filter-search" type="text" placeholder={t('catalogSearchPlaceholder')} value={modelSearch} onChange={(event) => setModelSearch(event.target.value)} /></div>
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
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterFuel')}</span><span className="filter-count">{selectedFuels.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedFuels([])
                  }}>{t('catalogFilterReset')}</button>
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
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterTrans')}</span><span className="filter-count">{selectedTransmission.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedTransmission([])
                  }}>{t('catalogFilterReset')}</button>
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
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterDrive')}</span><span className="filter-count">{selectedDrive.length}</span></div>
                  <button className="filter-reset" type="button" onClick={(event) => {
                    event.stopPropagation()
                    setSelectedDrive([])
                  }}>{t('catalogFilterReset')}</button>
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
                  <div className="filter-head-left"><span className="filter-name">{t('catalogFilterPostal')}</span></div>
                  <span className={openGroups.postal ? 'filter-arrow open' : 'filter-arrow'}>⌄</span>
                </div>
                {openGroups.postal ? (
                  <div className="filter-body">
                    <div className="filter-inner">
                      <div className="postal-row">
                        <input className="postal-input" type="text" placeholder={t('catalogPostalPlaceholder')} />
                        <select className="postal-select"><option>50 mi</option><option>100 mi</option><option>200 mi</option></select>
                      </div>
                      <div className="postal-btn-wrap"><button className="postal-btn" type="button">{t('catalogPostalSearch')}</button></div>
                    </div>
                  </div>
                ) : null}
              </div>
            </>
          )}
        </aside>

        <section className="catalog-main">
          {mode !== 'transit' && (
            <div className="catalog-tabs">
              {mode === 'catalog' ? (
                <>
                  <button className={activeTab === 'all' ? 'tab-item active' : 'tab-item'} type="button" onClick={() => { setActiveTab('all'); setVisibleCount(20) }}>{t('catalogTabAll')} <span className="tab-count">{filteredCards.length}</span></button>
                  <button className={activeTab === 'open' ? 'tab-item active' : 'tab-item'} type="button" onClick={() => { setActiveTab('open'); setVisibleCount(20) }}>{t('catalogTabOpenAuctions')} <span className="tab-count">{tabCounts.open ?? 0}</span></button>
                  <button className={activeTab === 'live' ? 'tab-item active' : 'tab-item'} type="button" onClick={() => { setActiveTab('live'); setVisibleCount(20) }}>{t('catalogTabInProgress')} <span className="tab-count">{tabCounts.live ?? 0}</span></button>
                  <button className={activeTab === 'closed' ? 'tab-item active' : 'tab-item'} type="button" onClick={() => { setActiveTab('closed'); setVisibleCount(20) }}>{t('catalogTabClosedToday')} <span className="tab-count">{tabCounts.closed ?? 0}</span></button>
                  <button className={activeTab === 'buynow' ? 'tab-item active' : 'tab-item'} type="button" onClick={() => { setActiveTab('buynow'); setVisibleCount(20) }}>{t('catalogTabBuyNow')} <span className="tab-count">{tabCounts.buynow ?? 0}</span></button>
                  <button className="tab-archive" type="button">{t('catalogTabArchive')}</button>
                </>
              ) : (
                <>
                  <button className="tab-item active" type="button">{t('catalogTabInStock')} <span className="tab-count">{filteredCards.length}</span></button>
                  <button className="tab-item" type="button">{t('catalogTabReadyToTransfer')} <span className="tab-count">{Math.min(2, filteredCards.length)}</span></button>
                  <button className="tab-item" type="button">{t('catalogTabOnOrder')} <span className="tab-count">{Math.max(1, Math.round(filteredCards.length / 2))}</span></button>
                </>
              )}
            </div>
          )}

          <div className="results-head">
            <span className="results-count"><strong id="resultsCount">{tabFilteredCards.length}</strong> {t('catalogResultsCount')}</span>
            <div className="layout-switcher" id="layoutSwitcher">
              <button className={layout === 'list' ? 'layout-btn active' : 'layout-btn'} type="button" onClick={() => setLayout('list')}>{t('catalogLayoutList')}</button>
              <button className={layout === 'grid' ? 'layout-btn active' : 'layout-btn'} type="button" onClick={() => setLayout('grid')}>{t('catalogLayoutGrid')}</button>
            </div>
          </div>

          <div className={layout === 'grid' ? 'car-list layout-grid' : 'car-list'} id="carList">
            {isLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div className="car-card car-card--skeleton" key={i} aria-hidden="true">
                    <div className="skeleton-photo" />
                    <div className="skeleton-body">
                      <div className="skeleton-line skeleton-line--title" />
                      <div className="skeleton-line skeleton-line--sub" />
                      <div className="skeleton-specs">
                        <div className="skeleton-tag" />
                        <div className="skeleton-tag" />
                        <div className="skeleton-tag" />
                      </div>
                      <div className="skeleton-details">
                        <div className="skeleton-line skeleton-line--detail" />
                        <div className="skeleton-line skeleton-line--detail" />
                      </div>
                    </div>
                    <div className="skeleton-price">
                      <div className="skeleton-line skeleton-line--price" />
                      <div className="skeleton-btn" />
                    </div>
                  </div>
                ))
              : visibleCards.map(renderCard)}
          </div>

          {hasMoreCards ? (
            <div className="load-more">
              <button className="btn-load" type="button" onClick={() => setVisibleCount((prev) => prev + 20)}>{t('catalogLoadMore')}</button>
            </div>
          ) : null}
        </section>
      </section>

      <button className={drawerOpen ? 'drawer-overlay open' : 'drawer-overlay'} type="button" onClick={() => setDrawerOpen(false)} aria-label="Close drawer"></button>
    </main>
  )
}
