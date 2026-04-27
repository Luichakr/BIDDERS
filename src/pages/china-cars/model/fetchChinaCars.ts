import type { AuctionCardData } from '../../../features/auction/model/auctionData'

// Прокси-функция для динамического парсинга лотов с west-motor.pl
// Работает через backend-прокси или серверную функцию (например, через own API route)

export async function fetchChinaCars(): Promise<AuctionCardData[]> {
  const res = await fetch('/api/proxy-china-cars')
  if (!res.ok) return []
  return await res.json()
}
