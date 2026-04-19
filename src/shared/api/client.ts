import type { HomePageContract } from './contracts'

export interface HomeDataClient {
  getHomePageData: () => Promise<HomePageContract>
}
