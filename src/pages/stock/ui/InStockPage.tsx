import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { inStockAuctionCards } from '../../../features/auction/model/auctionData'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { routePaths } from '../../../shared/config/routes'

export function InStockPage() {
  const { t } = useI18n()
  return (
    <>
      <Seo title={t('seoInStockTitle')} description={t('seoInStockDescription')} path={routePaths.inStock} />
      <AuctionCatalogPage title={t('catalogTitle')} cards={inStockAuctionCards} mode="in-stock" />
    </>
  )
}
