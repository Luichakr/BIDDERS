import type { InventoryItem } from '../../../shared/api/contracts'
import { catalogParserInventory, transitParserInventory } from '../../inventory/model/parser.data'

export interface AuctionCardData {
  id: string
  title: string
  year: number
  make: string
  model: string
  vin: string
  auction: 'COPART' | 'IAAI'
  image: string
  images: string[]
  location: string
  mileageKm: number
  mileageLabel: string
  transmission: string
  fuel: string
  drive: string
  bodyStyle: string
  color: string
  keys: string
  seller: string
  titleStatus: string
  auctionDateLabel: string
  sourceUrl?: string
  engine: string
  damage: string
  currentBid: number
  currentBidLabel: string
  estimateLow: number
  estimateHigh: number
  estimateLabel: string
  status: 'catalog' | 'transit'
}

function parseMoney(value: string): number {
  const normalized = value.replace(/[^0-9.]/g, '')
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : 0
}

function parseKm(value: string): number {
  const normalized = value.replace(/[^0-9]/g, '')
  const parsed = Number.parseInt(normalized, 10)
  return Number.isFinite(parsed) ? parsed : 0
}

function parseMakeModel(value: string): { make: string; model: string } {
  const chunks = value.trim().split(/\s+/)
  if (chunks.length < 2) {
    return { make: value.trim(), model: '' }
  }

  return {
    make: chunks[0],
    model: chunks.slice(1).join(' '),
  }
}

function mapInventoryItem(item: InventoryItem, status: 'catalog' | 'transit'): AuctionCardData {
  const year = Number.parseInt(item.year, 10) || 2024
  const { make, model } = parseMakeModel(item.makeModel)
  const estimate = parseMoney(item.estimate)

  return {
    id: item.id,
    title: `${item.year} ${item.makeModel}`,
    year,
    make,
    model,
    vin: item.vin,
    auction: item.auction,
    image: item.image,
    images: item.images && item.images.length > 0 ? item.images : [item.image],
    location: item.location,
    mileageKm: parseKm(item.mileage),
    mileageLabel: item.mileage,
    transmission: item.transmission || 'AUTOMATIC',
    fuel: item.fuel || item.engine.split('·')[1]?.trim().toUpperCase() || 'GAS',
    drive: item.drivetrain || 'AWD',
    bodyStyle: item.bodyStyle || '—',
    color: item.color || '—',
    keys: item.keys || '—',
    seller: item.seller || '—',
    titleStatus: item.titleStatus || '—',
    auctionDateLabel: item.auctionDate || 'TBD',
    sourceUrl: item.sourceUrl,
    engine: item.engine,
    damage: item.damage,
    currentBid: parseMoney(item.currentBid),
    currentBidLabel: item.currentBid,
    estimateLow: Math.round(estimate * 0.9),
    estimateHigh: Math.round(estimate * 1.1),
    estimateLabel: item.estimate,
    status,
  }
}

export const catalogAuctionCards: AuctionCardData[] = catalogParserInventory.map((item) => mapInventoryItem(item, 'catalog'))

export const transitAuctionCards: AuctionCardData[] = transitParserInventory.map((item) => mapInventoryItem(item, 'transit'))

export const allAuctionCards: AuctionCardData[] = [...catalogAuctionCards, ...transitAuctionCards]

export function getAuctionCardById(id: string | undefined): AuctionCardData | undefined {
  if (!id) {
    return undefined
  }
  return allAuctionCards.find((card) => card.id === id)
}
