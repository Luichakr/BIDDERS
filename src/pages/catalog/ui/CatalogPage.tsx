import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { catalogAuctionCards } from '../../../features/auction/model/auctionData'

export function CatalogPage() {
  return <AuctionCatalogPage title="Каталог" cards={catalogAuctionCards} mode="catalog" />
}
