export type MarketMetric = {
  id: string
  label: string
  value: string
}

export type FeatureHighlight = {
  id: string
  title: string
  description: string
}

export type LaunchStep = {
  id: string
  order: string
  title: string
  description: string
}

export type LotDetailContract = {
  id: string
  title: string
  status: 'new' | 'evaluating' | 'approved'
  estimateUsd: number
}

export type InventoryFilterGroup = {
  id: string
  title: string
  options: string[]
}

export type InventoryItem = {
  id: string
  image: string
  images?: string[]
  year: string
  makeModel: string
  auction: 'COPART' | 'IAAI'
  damage: string
  vin: string
  location: string
  engine: string
  transmission?: string
  drivetrain?: string
  fuel?: string
  mileage: string
  currentBid: string
  buyNow: string | null
  estimate: string
  auctionDate?: string
  seller?: string
  titleStatus?: string
  bodyStyle?: string
  color?: string
  keys?: string
  hot: boolean
  discount: string | null
  sourceUrl?: string
}

export type HomePageContract = {
  hero: {
    kicker: string
    title: string
    lead: string
  }
  metrics: MarketMetric[]
  highlights: FeatureHighlight[]
  launchSteps: LaunchStep[]
  finalCall: {
    title: string
    description: string
  }
}
