import { useEffect, useState } from 'react'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { fetchCatalogCars } from '../../../features/auction/model/inRoute.service'

export function CatalogPage() {
  const [cards, setCards] = useState<AuctionCardData[]>([])

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        const liveCards = await fetchCatalogCars()
        if (!mounted) return
        setCards(liveCards)
      } catch {
        if (!mounted) return
        setCards([])
      }
    }

    void load()

    return () => {
      mounted = false
    }
  }, [])

  return <AuctionCatalogPage title="Каталог" cards={cards} mode="catalog" />
}
