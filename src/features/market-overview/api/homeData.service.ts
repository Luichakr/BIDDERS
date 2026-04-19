import type { HomeDataClient } from '../../../shared/api/client'
import type { HomePageContract } from '../../../shared/api/contracts'
import { homePageMock } from '../model/mocks'

export class MockHomeDataService implements HomeDataClient {
  async getHomePageData(): Promise<HomePageContract> {
    return Promise.resolve(homePageMock)
  }
}
