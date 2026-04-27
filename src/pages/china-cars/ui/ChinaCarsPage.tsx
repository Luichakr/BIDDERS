import { useEffect, useState } from 'react'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { fetchChinaCars } from '../model/fetchChinaCars'
import { useI18n } from '../../../shared/i18n/I18nProvider'

export function ChinaCarsPage() {
  const { t } = useI18n()
  const [cards, setCards] = useState<AuctionCardData[]>([])

  useEffect(() => {
    let mounted = true
    const load = async () => {
      try {
        const chinaCars = await fetchChinaCars()
        if (!mounted) return
        setCards(chinaCars)
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

  return <AuctionCatalogPage title={t('navChinaCars')} cards={cards} mode="catalog" />
}
