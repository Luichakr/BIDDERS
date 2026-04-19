import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { catalogAuctionCards } from '../../../features/auction/model/auctionData'

export function InStockPage() {
  return <AuctionCatalogPage title="Авто в наявності" cards={catalogAuctionCards} mode="catalog" />
}
