import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { InventoryFilterGroup, InventoryItem } from '../../../shared/types/contracts'

const FILTER_KEYS = ['auction', 'damage', 'fuel', 'year'] as const

type FilterKey = (typeof FILTER_KEYS)[number]

type SelectedFilters = Record<FilterKey, string[]>

function parseValues(value: string | null): string[] {
  if (!value) {
    return []
  }
  return value.split(',').filter(Boolean)
}

/** Parse "$7,800" or "€1 200" → number (0 if unparseable) */
function parseBid(raw: string): number {
  const num = Number(raw.replace(/[^0-9.]/g, ''))
  return isNaN(num) ? 0 : num
}

function buildFilters(items: InventoryItem[]): InventoryFilterGroup[] {
  const auctions = Array.from(new Set(items.map((item) => item.auction))).sort()
  const damage = Array.from(new Set(items.map((item) => item.damage))).sort()
  const fuel = Array.from(new Set(items.map((item) => item.engine.split('·')[1]?.trim() ?? 'Unknown'))).sort()
  const year = Array.from(new Set(items.map((item) => item.year))).sort((a, b) => Number(b) - Number(a))

  return [
    { id: 'auction', title: 'AUCTION', options: auctions },
    { id: 'damage', title: 'DAMAGE', options: damage },
    { id: 'fuel', title: 'FUEL', options: fuel },
    { id: 'year', title: 'YEAR', options: year },
  ]
}

function matchItem(
  item: InventoryItem,
  selected: SelectedFilters,
  priceMin: number | null,
  priceMax: number | null,
): boolean {
  if (selected.auction.length > 0 && !selected.auction.includes(item.auction)) {
    return false
  }
  if (selected.damage.length > 0 && !selected.damage.includes(item.damage)) {
    return false
  }
  const fuel = item.engine.split('·')[1]?.trim() ?? 'Unknown'
  if (selected.fuel.length > 0 && !selected.fuel.includes(fuel)) {
    return false
  }
  if (selected.year.length > 0 && !selected.year.includes(item.year)) {
    return false
  }
  const bid = parseBid(item.currentBid)
  if (priceMin !== null && bid < priceMin) return false
  if (priceMax !== null && bid > priceMax) return false
  return true
}

/** Derive min/max bid across all items (rounded to nice steps) */
export function derivePriceBounds(items: InventoryItem[]): { globalMin: number; globalMax: number } {
  if (items.length === 0) return { globalMin: 0, globalMax: 10000 }
  const bids = items.map((i) => parseBid(i.currentBid)).filter((v) => v > 0)
  if (bids.length === 0) return { globalMin: 0, globalMax: 10000 }
  return { globalMin: Math.min(...bids), globalMax: Math.max(...bids) }
}

export function useInventoryFilters(items: InventoryItem[]) {
  const [searchParams, setSearchParams] = useSearchParams()

  const groups = useMemo(() => buildFilters(items), [items])

  const selected = useMemo<SelectedFilters>(
    () => ({
      auction: parseValues(searchParams.get('auction')),
      damage: parseValues(searchParams.get('damage')),
      fuel: parseValues(searchParams.get('fuel')),
      year: parseValues(searchParams.get('year')),
    }),
    [searchParams],
  )

  const priceMin = useMemo(() => {
    const raw = searchParams.get('priceMin')
    return raw ? Number(raw) : null
  }, [searchParams])

  const priceMax = useMemo(() => {
    const raw = searchParams.get('priceMax')
    return raw ? Number(raw) : null
  }, [searchParams])

  const priceBounds = useMemo(() => derivePriceBounds(items), [items])

  const filteredItems = useMemo(
    () => items.filter((item) => matchItem(item, selected, priceMin, priceMax)),
    [items, selected, priceMin, priceMax],
  )

  const toggleFilter = (key: FilterKey, option: string) => {
    const next = new URLSearchParams(searchParams)
    const current = new Set(parseValues(next.get(key)))

    if (current.has(option)) {
      current.delete(option)
    } else {
      current.add(option)
    }

    const value = Array.from(current)
    if (value.length === 0) {
      next.delete(key)
    } else {
      next.set(key, value.join(','))
    }

    setSearchParams(next)
  }

  const setPriceRange = (min: number | null, max: number | null) => {
    const next = new URLSearchParams(searchParams)
    if (min !== null) next.set('priceMin', String(min))
    else next.delete('priceMin')
    if (max !== null) next.set('priceMax', String(max))
    else next.delete('priceMax')
    setSearchParams(next)
  }

  const resetFilters = () => {
    const next = new URLSearchParams(searchParams)
    FILTER_KEYS.forEach((key) => next.delete(key))
    next.delete('priceMin')
    next.delete('priceMax')
    setSearchParams(next)
  }

  return {
    groups,
    selected,
    priceMin,
    priceMax,
    priceBounds,
    filteredItems,
    toggleFilter,
    setPriceRange,
    resetFilters,
  }
}
