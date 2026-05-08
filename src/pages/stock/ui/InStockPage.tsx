import { useEffect, useState } from 'react'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { fetchPublishedAuctionCards, mapCabinetCarToPublicAuctionCard } from '../../../features/auction/model/publicInventory'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { loadCabinetCars } from '../../cabinet/model/cabinetStore'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { routePaths } from '../../../shared/config/routes'

export function InStockPage() {
  const { t } = useI18n()
  const [cards, setCards] = useState<AuctionCardData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPublishedCards = async () => {
      try {
        // Load only real published cards from Supabase
        const publishedCards = await fetchPublishedAuctionCards()
        setCards(publishedCards)
      } catch (error) {
        // Supabase not configured or error — fall back to cabinet cars from IndexedDB
        console.warn('Failed to load published inventory from Supabase, falling back to local cabinet:', error)
        try {
          const { cars: cabinetCars } = await loadCabinetCars({})
          const publishedLocal = cabinetCars
            .map(car => mapCabinetCarToPublicAuctionCard(car))
            .filter((card): card is AuctionCardData => card !== null)
          setCards(publishedLocal)
        } catch (fallbackError) {
          console.warn('Failed to load published inventory from cabinet:', fallbackError)
          setCards([])
        }
      } finally {
        setIsLoading(false)
      }
    }

    void loadPublishedCards()
  }, [])

  return (
    <>
      <Seo title={t('seoInStockTitle')} description={t('seoInStockDescription')} path={routePaths.inStock} />
      <AuctionCatalogPage title={t('catalogTitle')} cards={cards} mode="in-stock" isLoading={isLoading} />
    </>
  )
}
