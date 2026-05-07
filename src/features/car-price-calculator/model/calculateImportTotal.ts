import type { CalcInput, CalcResult } from './calculatorTypes'
import { VEHICLE_MULTIPLIERS } from './vehicleMultipliers'
import { getImportTaxRate } from './taxRules'
import { getAuctionFee } from './auctionFees'
import { EU_PORTS } from './euPorts'
import { getUsRoute } from './usRoutes'

export function calculateImportTotal(input: CalcInput): CalcResult | null {
  const { lotPrice, auction, branchId, euPortId, carType, importTaxType, eurUsdRate } = input

  // 1. Find route (trucking + shipping)
  const route = getUsRoute(branchId, euPortId)
  if (!route) return null

  // 2. Auction fee
  const auctionFee = getAuctionFee(auction, lotPrice)

  // 3. Vehicle ocean multiplier (stored for reference; shipping field already reflects vehicle size)
  const vehicleMultiplier = VEHICLE_MULTIPLIERS[carType]

  // 4. Logistics base in USD
  // oceanDelivery = route.shipping directly (no multiplier applied — matches /new reference calculator)
  const usDelivery = route.trucking
  const oceanDelivery = route.shipping
  const logisticsBase = lotPrice + auctionFee + usDelivery + oceanDelivery

  // 5. Convert logistics base to EUR
  const logisticsBaseEur = logisticsBase * eurUsdRate

  // 6. Customs in EUR
  const importTaxRate = getImportTaxRate(importTaxType)
  const port = EU_PORTS[euPortId]
  const vatRate = port.vatRate
  const customsAgencyEur = port.customsAgencyEur // 500 EUR fixed

  const importDutyEur = logisticsBaseEur * importTaxRate
  const vatAmountEur = (logisticsBaseEur + importDutyEur) * vatRate

  // 7. BidBidders fee
  const bidBiddersFeeUsd = 450
  const bidBiddersFeeEur = bidBiddersFeeUsd * eurUsdRate

  // 8. Total in EUR
  const totalEur = logisticsBaseEur + importDutyEur + vatAmountEur + customsAgencyEur + bidBiddersFeeEur

  return {
    lotPrice,
    auctionFee,
    usDelivery,
    oceanDelivery,
    logisticsBase,
    logisticsBaseEur,
    importDutyEur,
    vatAmountEur,
    customsAgencyEur,
    bidBiddersFeeUsd,
    totalEur,
    importTaxRate,
    vatRate,
    vehicleMultiplier,
    eurUsdRate,
  }
}
