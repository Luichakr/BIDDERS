import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { inStockAuctionCards } from '../../../features/auction/model/auctionData'

export function InStockPage() {
  return <AuctionCatalogPage title="Авто в наявності" cards={inStockAuctionCards} mode="in-stock" />
}
