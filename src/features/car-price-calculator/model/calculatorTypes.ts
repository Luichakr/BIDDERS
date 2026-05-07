export type AuctionType = 'Copart' | 'IAAI' | 'Manheim'
export type CarType = 'Automobiles' | 'Crossover' | 'SUVs' | 'Moto' | 'PickupTrucks'
export type EuPortId = 'rotterdam' | 'gdynia' | 'bremerhaven' | 'klaipeda'
export type ImportTaxType = 'standard' | 'electric' | 'truck' | 'motorcycle'

export interface CalcInput {
  lotPrice: number         // цена лота в USD
  auction: AuctionType
  branchId: number         // id отделения bid.cars (BRANCHES[i].id)
  euPortId: EuPortId
  carType: CarType
  importTaxType: ImportTaxType
  eurUsdRate: number       // курс USD→EUR (например 0.92)
}

export interface CalcResult {
  // Компоненты в USD
  lotPrice: number
  auctionFee: number
  usDelivery: number       // trucking
  oceanDelivery: number    // shipping × vehicleMultiplier
  logisticsBase: number    // = lotPrice + auctionFee + usDelivery + oceanDelivery

  // Таможня в EUR
  logisticsBaseEur: number
  importDutyEur: number
  vatAmountEur: number
  customsAgencyEur: number // 500 EUR фиксированно

  // Финальные сборы в USD
  bidBiddersFeeUsd: number  // 450 USD фиксированно

  // Итог
  totalEur: number         // логистика в EUR + пошлина + НДС + агентство + bidBidders в EUR

  // Ставки использованные в расчёте
  importTaxRate: number
  vatRate: number
  vehicleMultiplier: number
  eurUsdRate: number
}
