import { useEffect, useState } from 'react'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { fetchInRouteCards } from '../../../features/auction/model/inRoute.service'

const TRANSIT_BOOTSTRAP_CACHE_KEY = 'BIDDERS_TRANSIT_BOOTSTRAP_V1'
const TRANSIT_BOOTSTRAP_LIMIT = 40

function sortByPriceDesc(cards: AuctionCardData[]): AuctionCardData[] {
  return [...cards].sort((a, b) => b.currentBid - a.currentBid)
}

function readTransitBootstrapCache(): AuctionCardData[] {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(TRANSIT_BOOTSTRAP_CACHE_KEY)
    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) {
      return []
    }

    return parsed.filter((card): card is AuctionCardData => {
      return (
        card &&
        typeof card === 'object' &&
        typeof card.id === 'string' &&
        typeof card.title === 'string' &&
        typeof card.currentBid === 'number' &&
        Array.isArray(card.images)
      )
    })
  } catch {
    return []
  }
}

function writeTransitBootstrapCache(cards: AuctionCardData[]): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const topCards = sortByPriceDesc(cards).slice(0, TRANSIT_BOOTSTRAP_LIMIT)
    window.localStorage.setItem(TRANSIT_BOOTSTRAP_CACHE_KEY, JSON.stringify(topCards))
  } catch {
    // ignore localStorage errors (quota/private mode)
  }
}

export function TransitPage() {
  const [cards, setCards] = useState<AuctionCardData[]>(() => readTransitBootstrapCache())

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        const liveCards = await fetchInRouteCards()
        if (!mounted) return
        setCards(liveCards)
        writeTransitBootstrapCache(liveCards)
      } catch {
        if (!mounted) return
        // keep bootstrap cache on network error
      }
    }

    void load()

    return () => {
      mounted = false
    }
  }, [])

  return <AuctionCatalogPage title="Авто в дорозі" cards={cards} mode="transit" />
}
