import { useEffect, useState } from 'react'
import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { fetchInRouteCards } from '../../../features/auction/model/inRoute.service'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { Link } from 'react-router'
import { routePaths, localizedPath } from '../../../shared/config/routes'

export function TransitPage() {
  const { t, locale } = useI18n()
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
      <section className="transit-seo-intro">
        <div className="transit-seo-intro__inner">
          <h2 className="transit-seo-intro__h2">{t('transitSeoH2')}</h2>
          <p>{t('transitSeoP1')}</p>
          <p>{t('transitSeoP2')}</p>
          <p>{t('transitSeoP3')}</p>
          <div className="transit-seo-intro__ctas">
            <Link to={localizedPath(locale, routePaths.calculator)} className="transit-seo-intro__cta transit-seo-intro__cta--primary">
              {t('transitSeoCtaCalc')}
            </Link>
            <Link to={localizedPath(locale, routePaths.contacts)} className="transit-seo-intro__cta transit-seo-intro__cta--secondary">
              {t('transitSeoCtaContacts')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
