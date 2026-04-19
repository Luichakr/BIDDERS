import { AuctionCatalogPage } from '../../../features/auction/ui/AuctionCatalogPage'
import { transitAuctionCards } from '../../../features/auction/model/auctionData'

export function TransitPage() {
  return <AuctionCatalogPage title="Авто в дорозі" cards={transitAuctionCards} mode="transit" />
}
