import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { InventoryFilterGroup, InventoryItem } from '../../../shared/api/contracts'

const FILTER_KEYS = ['auction', 'damage', 'fuel', 'year'] as const

type FilterKey = (typeof FILTER_KEYS)[number]

type SelectedFilters = Record<FilterKey, string[]>

function parseValues(value: string | null): string[] {
  if (!value) {
    return []
  }
  return value.split(',').filter(Boolean)
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

function matchItem(item: InventoryItem, selected: SelectedFilters): boolean {
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
  return true
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

  const filteredItems = useMemo(
    () => items.filter((item) => matchItem(item, selected)),
    [items, selected],
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

  const resetFilters = () => {
    const next = new URLSearchParams(searchParams)
    FILTER_KEYS.forEach((key) => next.delete(key))
    setSearchParams(next)
  }

  return {
    groups,
    selected,
    filteredItems,
    toggleFilter,
    resetFilters,
  }
}
