import type { AuctionType } from './calculatorTypes'

export type AuctionFeeRow = { maxAmount: number; fee: number }

export const BIDBIDDERS_AUCTION_FEES: Record<"Copart" | "IAAI" | "Manheim", AuctionFeeRow[]> = {
  "Copart": [
    {
      "maxAmount": 49,
      "fee": 131
    },
    {
      "maxAmount": 99,
      "fee": 131
    },
    {
      "maxAmount": 199,
      "fee": 205
    },
    {
      "maxAmount": 299,
      "fee": 240
    },
    {
      "maxAmount": 349,
      "fee": 265
    },
    {
      "maxAmount": 399,
      "fee": 280
    },
    {
      "maxAmount": 449,
      "fee": 305
    },
    {
      "maxAmount": 499,
      "fee": 315
    },
    {
      "maxAmount": 549,
      "fee": 340
    },
    {
      "maxAmount": 599,
      "fee": 350
    },
    {
      "maxAmount": 699,
      "fee": 365
    },
    {
      "maxAmount": 799,
      "fee": 390
    },
    {
      "maxAmount": 899,
      "fee": 410
    },
    {
      "maxAmount": 999,
      "fee": 425
    },
    {
      "maxAmount": 1199,
      "fee": 465
    },
    {
      "maxAmount": 1299,
      "fee": 485
    },
    {
      "maxAmount": 1399,
      "fee": 500
    },
    {
      "maxAmount": 1499,
      "fee": 515
    },
    {
      "maxAmount": 1599,
      "fee": 540
    },
    {
      "maxAmount": 1699,
      "fee": 555
    },
    {
      "maxAmount": 1799,
      "fee": 575
    },
    {
      "maxAmount": 1999,
      "fee": 595
    },
    {
      "maxAmount": 2399,
      "fee": 630
    },
    {
      "maxAmount": 2499,
      "fee": 665
    },
    {
      "maxAmount": 2999,
      "fee": 700
    },
    {
      "maxAmount": 3499,
      "fee": 745
    },
    {
      "maxAmount": 3999,
      "fee": 795
    },
    {
      "maxAmount": 4499,
      "fee": 855
    },
    {
      "maxAmount": 4999,
      "fee": 880
    },
    {
      "maxAmount": 5999,
      "fee": 930
    },
    {
      "maxAmount": 6499,
      "fee": 975
    },
    {
      "maxAmount": 6999,
      "fee": 995
    },
    {
      "maxAmount": 7499,
      "fee": 1030
    },
    {
      "maxAmount": 7999,
      "fee": 1050
    },
    {
      "maxAmount": 8499,
      "fee": 1090
    },
    {
      "maxAmount": 8999,
      "fee": 1110
    },
    {
      "maxAmount": 9999,
      "fee": 1110
    },
    {
      "maxAmount": 10499,
      "fee": 1140
    },
    {
      "maxAmount": 10999,
      "fee": 1140
    },
    {
      "maxAmount": 11499,
      "fee": 1140
    },
    {
      "maxAmount": 11999,
      "fee": 1150
    },
    {
      "maxAmount": 12499,
      "fee": 1165
    },
    {
      "maxAmount": 14999,
      "fee": 1180
    }
  ],
  "IAAI": [
    {
      "maxAmount": 49,
      "fee": 131
    },
    {
      "maxAmount": 99,
      "fee": 131
    },
    {
      "maxAmount": 199,
      "fee": 205
    },
    {
      "maxAmount": 299,
      "fee": 240
    },
    {
      "maxAmount": 349,
      "fee": 265
    },
    {
      "maxAmount": 399,
      "fee": 280
    },
    {
      "maxAmount": 449,
      "fee": 305
    },
    {
      "maxAmount": 499,
      "fee": 315
    },
    {
      "maxAmount": 549,
      "fee": 340
    },
    {
      "maxAmount": 599,
      "fee": 350
    },
    {
      "maxAmount": 699,
      "fee": 365
    },
    {
      "maxAmount": 799,
      "fee": 390
    },
    {
      "maxAmount": 899,
      "fee": 410
    },
    {
      "maxAmount": 999,
      "fee": 425
    },
    {
      "maxAmount": 1199,
      "fee": 465
    },
    {
      "maxAmount": 1299,
      "fee": 485
    },
    {
      "maxAmount": 1399,
      "fee": 500
    },
    {
      "maxAmount": 1499,
      "fee": 515
    },
    {
      "maxAmount": 1599,
      "fee": 540
    },
    {
      "maxAmount": 1699,
      "fee": 555
    },
    {
      "maxAmount": 1799,
      "fee": 575
    },
    {
      "maxAmount": 1999,
      "fee": 595
    },
    {
      "maxAmount": 2399,
      "fee": 630
    },
    {
      "maxAmount": 2499,
      "fee": 665
    },
    {
      "maxAmount": 2999,
      "fee": 700
    },
    {
      "maxAmount": 3499,
      "fee": 745
    },
    {
      "maxAmount": 3999,
      "fee": 795
    },
    {
      "maxAmount": 4499,
      "fee": 855
    },
    {
      "maxAmount": 4999,
      "fee": 880
    },
    {
      "maxAmount": 5999,
      "fee": 930
    },
    {
      "maxAmount": 6499,
      "fee": 975
    },
    {
      "maxAmount": 6999,
      "fee": 995
    },
    {
      "maxAmount": 7499,
      "fee": 1030
    },
    {
      "maxAmount": 7999,
      "fee": 1050
    },
    {
      "maxAmount": 8499,
      "fee": 1090
    },
    {
      "maxAmount": 8999,
      "fee": 1110
    },
    {
      "maxAmount": 9999,
      "fee": 1110
    },
    {
      "maxAmount": 10499,
      "fee": 1140
    },
    {
      "maxAmount": 10999,
      "fee": 1140
    },
    {
      "maxAmount": 11499,
      "fee": 1140
    },
    {
      "maxAmount": 11999,
      "fee": 1150
    },
    {
      "maxAmount": 12499,
      "fee": 1165
    },
    {
      "maxAmount": 14999,
      "fee": 1180
    }
  ],
  "Manheim": [
    {
      "maxAmount": 1000,
      "fee": 225
    },
    {
      "maxAmount": 3000,
      "fee": 280
    },
    {
      "maxAmount": 5000,
      "fee": 340
    },
    {
      "maxAmount": 7000,
      "fee": 390
    },
    {
      "maxAmount": 9000,
      "fee": 425
    },
    {
      "maxAmount": 11000,
      "fee": 465
    },
    {
      "maxAmount": 13000,
      "fee": 495
    },
    {
      "maxAmount": 15000,
      "fee": 525
    },
    {
      "maxAmount": 17000,
      "fee": 555
    },
    {
      "maxAmount": 19000,
      "fee": 585
    },
    {
      "maxAmount": 21000,
      "fee": 610
    },
    {
      "maxAmount": 23000,
      "fee": 630
    },
    {
      "maxAmount": 25000,
      "fee": 655
    },
    {
      "maxAmount": 27000,
      "fee": 685
    },
    {
      "maxAmount": 30000,
      "fee": 710
    },
    {
      "maxAmount": 32500,
      "fee": 735
    },
    {
      "maxAmount": 35000,
      "fee": 760
    },
    {
      "maxAmount": 37500,
      "fee": 785
    },
    {
      "maxAmount": 40000,
      "fee": 810
    },
    {
      "maxAmount": 45000,
      "fee": 835
    },
    {
      "maxAmount": 50000,
      "fee": 885
    },
    {
      "maxAmount": 60000,
      "fee": 935
    },
    {
      "maxAmount": 70000,
      "fee": 1035
    },
    {
      "maxAmount": 80000,
      "fee": 1135
    },
    {
      "maxAmount": 90000,
      "fee": 1235
    },
    {
      "maxAmount": 100000,
      "fee": 1335
    },
    {
      "maxAmount": 110000,
      "fee": 1435
    },
    {
      "maxAmount": 999999999,
      "fee": 1555
    }
  ]
} as const

export function getAuctionFee(auction: AuctionType, lotPrice: number): number {
  const table = BIDBIDDERS_AUCTION_FEES[auction] as AuctionFeeRow[]
  if (!table.length) return 0
  const entry = table.find((r) => lotPrice <= r.maxAmount)
  if (!entry) {
    // BidCars fallback for prices above table max: lotPrice * 0.06 + internetBidFee(160) + fixed(130)
    if (auction === 'Copart' || auction === 'IAAI') return Math.round(lotPrice * 0.06) + 290
    return table[table.length - 1]?.fee ?? 0
  }
  return entry.fee ?? 0
}
