import { useEffect, useState } from 'react'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { fetchPublishedAuctionCards, mapCabinetCarToPublicAuctionCard } from '../../../features/auction/model/publicInventory'
import { inStockAuctionCards } from '../../../features/auction/model/auctionData'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { loadCabinetCars } from '../../cabinet/model/cabinetStore'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { routePaths } from '../../../shared/config/routes'

export function InStockPage() {
  const { t } = useI18n()
  const [cards, setCards] = useState<AuctionCardData[]>(inStockAuctionCards)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPublishedCards = async () => {
      try {
        // Try to load from Supabase first
        const publishedCards = await fetchPublishedAuctionCards()
        // Combine published cabinet cars with legacy in-stock inventory
        // Published cars take precedence (appear first)
        setCards([...publishedCards, ...inStockAuctionCards])
      } catch (error) {
        // Supabase not configured or error — fall back to cabinet cars from IndexedDB
        console.warn('Failed to load published inventory from Supabase, falling back to local cabinet:', error)
        try {
          const { cars: cabinetCars } = await loadCabinetCars({})
          const publishedLocal = cabinetCars
            .map(car => mapCabinetCarToPublicAuctionCard(car))
            .filter((card): card is AuctionCardData => card !== null)
          // Combine published cabinet cars with legacy in-stock inventory
          setCards([...publishedLocal, ...inStockAuctionCards])
        } catch (fallbackError) {
          // Both sources failed — use mock data
          console.warn('Failed to load published inventory from cabinet:', fallbackError)
          setCards(inStockAuctionCards)
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
