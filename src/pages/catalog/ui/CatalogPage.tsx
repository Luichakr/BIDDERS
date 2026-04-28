import { useEffect, useState } from 'react'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { fetchCatalogCars } from '../../../features/auction/model/inRoute.service'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { routePaths } from '../../../shared/config/routes'

export function CatalogPage() {
  const { t } = useI18n()
  const [cards, setCards] = useState<AuctionCardData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      setIsLoading(true)
      try {
        const liveCards = await fetchCatalogCars()
        if (!mounted) return
        setCards(liveCards)
      } catch {
        if (!mounted) return
        setCards([])
      } finally {
        if (mounted) setIsLoading(false)
      }
    }

    void load()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      <Seo title={t('seoCatalogTitle')} description={t('seoCatalogDescription')} path={routePaths.catalog} />
      <AuctionCatalogPage title={t('catalogTitle')} cards={cards} mode="catalog" isLoading={isLoading} />
    </>
  )
}
