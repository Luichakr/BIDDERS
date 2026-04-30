import { useEffect, useState } from 'react'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { fetchInRouteCards } from '../../../features/auction/model/inRoute.service'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { routePaths } from '../../../shared/config/routes'

export function TransitPage() {
  const { t } = useI18n()
  const [cards, setCards] = useState<AuctionCardData[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    let mounted = true

    const load = async () => {
      try {
        const liveCards = await fetchInRouteCards()
        if (!mounted) return
        setCards(liveCards)
      } catch {
        if (!mounted) return
        setCards([])
      } finally {
        if (mounted) setLoading(false)
      }
    }

    void load()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      <Seo title={t('seoTransitTitle')} description={t('seoTransitDescription')} path={routePaths.transit} />
      <AuctionCatalogPage title={t('transitTitle')} cards={cards} mode="transit" isLoading={loading} />
    </>
  )
}
