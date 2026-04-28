import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './calculator.css'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { routePaths } from '../../../shared/config/routes'
import type { MessageKey } from '../../../shared/i18n/messages'

type RoutePreset = 'klaipeda' | 'odesa'
type CarType = 'Automobiles' | 'Crossover' | 'SUVs' | 'Moto' | 'PickupTrucks'
type FuelType = string
type AuctionType = 'Copart' | 'IAAI' | 'Manheim'
type ExportDocsType = 'Usa' | 'Usa closed' | 'Canada' | 'Manheim'
type CalcMode = 'idle' | 'loading' | 'live' | 'fallback'

interface AuctionCoefficient {
  item: string
  coefficient: number
}

interface DeliveryOrigin {
  id: number
  cityName: string
  value: number
  deliveryCoefficientId: number
  deliveryCoefficient: {
    id: number
    portKey: string
    portName: string
    klaipedaValue: number
    odesaValue: number
  }
}

interface ReferenceData {
  coefficients: {
    vehicle: Array<{ item: string; coefficient: number }>
    copart: AuctionCoefficient[]
    iaai: AuctionCoefficient[]
    manheim: AuctionCoefficient[]
  }
  options: {
    fuelType: FuelType[]
    engineSize: number[]
    releaseYear: number[]
  }
  calculatorDetails: {
    brokerPriceKlaidepa: number
    unloadingFromPortBrokerOdesa: number
    deliveryToBorderKlaidepa: number
    lubeAvtoFee: number
    unloadingFromPortKlaidepa: number
    deliveryToLvivKlaidepa: number
    specialTransportPrice: number
    insuranceFee: number
    exportDocumentsFee: Record<string, number>
    deliveryCoefficientToPort: DeliveryOrigin[]
  }
}

interface BreakdownRow {
  label: string
  value: number
  group?: 'customs'
}

interface DerivedValues {
  auctionFee: number
  usDelivery: number
  exportDocs: number
  oceanDelivery: number
  portUnload: number
  europeDelivery: number
  customsDelivery: number
  borderHandling: number
  brokerFee: number
  companyFee: number
  insuranceFee: number
  transferFee: number
}

function usd(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function toSafeNumber(value: unknown): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function isElectricFuel(fuel: string): boolean {
  const normalized = String(fuel).trim().toLowerCase()
  return normalized === 'electro' || normalized === 'electric' || normalized === 'ev'
}

function toAuthorizationHeaderValue(tokenLike: string): string {
  const normalized = String(tokenLike).trim()
  if (!normalized) return ''
  return /^Bearer\s+/i.test(normalized) ? normalized : `Bearer ${normalized}`
}

const CURRENT_YEAR = new Date().getFullYear()
const API_BASE_URL = String(import.meta.env.VITE_CALCULATOR_API_BASE_URL ?? 'https://api-lubeavto-partner.azurewebsites.net').replace(/\/$/, '')
const INIT_API_URL = `${API_BASE_URL}/api/v0/calculator/count-pricing`
const CALCULATE_API_URL = `${API_BASE_URL}/api/v0/calculator/count-pricing/calculate`

function getCalculatorAuthToken(): string {
  const envToken = String(import.meta.env.VITE_CALCULATOR_API_TOKEN ?? '').trim()
  if (envToken) return envToken

  if (typeof window === 'undefined') return ''
  const localToken = String(window.localStorage.getItem('lubeavtoPartnerToken') ?? '').trim()
  if (localToken) return localToken

  return ''
}

const FALLBACK_REFERENCE_DATA: ReferenceData = {
  coefficients: {
    vehicle: [
      { item: 'Automobiles', coefficient: 800 },
      { item: 'Crossover', coefficient: 900 },
      { item: 'SUVs', coefficient: 950 },
      { item: 'Moto', coefficient: 450 },
      { item: 'PickupTrucks', coefficient: 1200 },
    ],
    copart: [
      { item: '999', coefficient: 365 },
      { item: '1999', coefficient: 535 },
      { item: '4999', coefficient: 805 },
      { item: '7999', coefficient: 990 },
      { item: '12499', coefficient: 1105 },
      { item: '14999', coefficient: 1120 },
    ],
    iaai: [
      { item: '999', coefficient: 365 },
      { item: '1999', coefficient: 535 },
      { item: '4999', coefficient: 805 },
      { item: '7999', coefficient: 990 },
      { item: '12499', coefficient: 1105 },
      { item: '14999', coefficient: 1120 },
    ],
    manheim: [
      { item: '3000', coefficient: 280 },
      { item: '10000', coefficient: 465 },
      { item: '20000', coefficient: 585 },
      { item: '30000', coefficient: 710 },
      { item: '50000', coefficient: 885 },
      { item: '999999999', coefficient: 1555 },
    ],
  },
  options: {
    fuelType: ['Gas', 'Diesel', 'Hybrid', 'Electro'],
    engineSize: [],
    releaseYear: [],
  },
  calculatorDetails: {
    brokerPriceKlaidepa: 250,
    unloadingFromPortBrokerOdesa: 670,
    deliveryToBorderKlaidepa: 80,
    lubeAvtoFee: 600,
    unloadingFromPortKlaidepa: 400,
    deliveryToLvivKlaidepa: 800,
    specialTransportPrice: 110,
    insuranceFee: 1,
    exportDocumentsFee: { Usa: 150, 'Usa closed': 200, Canada: 350, Manheim: 250 },
    deliveryCoefficientToPort: [
      { id: 1, cityName: 'ABILENE - TX', value: 420, deliveryCoefficientId: 1, deliveryCoefficient: { id: 1, portKey: 'houston_tx', portName: 'HOUSTON,TX', klaipedaValue: 900, odesaValue: 1400 } },
      { id: 2, cityName: 'ALBANY - NY', value: 325, deliveryCoefficientId: 2, deliveryCoefficient: { id: 2, portKey: 'elizabeth_nj', portName: 'New York, NY', klaipedaValue: 750, odesaValue: 1250 } },
      { id: 3, cityName: 'ALBUQUERQUE - NM', value: 770, deliveryCoefficientId: 1, deliveryCoefficient: { id: 1, portKey: 'houston_tx', portName: 'HOUSTON,TX', klaipedaValue: 900, odesaValue: 1400 } },
      { id: 296, cityName: 'ACE - Carson (CA)', value: 345, deliveryCoefficientId: 4, deliveryCoefficient: { id: 4, portKey: 'losangeles_ca', portName: 'LOSANGELES,CA', klaipedaValue: 1475, odesaValue: 999999 } },
    ],
  },
}

const EMPTY_DERIVED: DerivedValues = {
  auctionFee: 0,
  usDelivery: 0,
  exportDocs: 0,
  oceanDelivery: 0,
  portUnload: 0,
  europeDelivery: 0,
  customsDelivery: 0,
  borderHandling: 0,
  brokerFee: 0,
  companyFee: 0,
  insuranceFee: 0,
  transferFee: 0,
}

function getAuctionTable(reference: ReferenceData, auctionType: AuctionType): AuctionCoefficient[] {
  if (auctionType === 'Copart') return reference.coefficients.copart
  if (auctionType === 'IAAI') return reference.coefficients.iaai
  return reference.coefficients.manheim
}

function getAuctionCoefficientEntry(reference: ReferenceData, auctionType: AuctionType, price: number): AuctionCoefficient | null {
  const table = getAuctionTable(reference, auctionType)
  if (table.length === 0) return null

  const firstMatch = table.find((row) => price <= toSafeNumber(row.item))
  return firstMatch ?? table[table.length - 1]
}

function getAuctionFee(reference: ReferenceData, auctionType: AuctionType, price: number): number {
  const entry = getAuctionCoefficientEntry(reference, auctionType, price)
  return entry ? toSafeNumber(entry.coefficient) : 0
}

function mapInitApiToReference(initialData: unknown): ReferenceData | null {
  const payload = (initialData && typeof initialData === 'object') ? initialData as Record<string, unknown> : null
  const origins = Array.isArray(payload?.deliveryCoefficientToPort) ? payload.deliveryCoefficientToPort : []
  if (origins.length === 0) return null

  const mappedOrigins: DeliveryOrigin[] = origins.map((origin) => {
    const entry = (origin && typeof origin === 'object') ? origin as Record<string, unknown> : {}
    const rawDelivery = (entry.deliveryCoefficient && typeof entry.deliveryCoefficient === 'object')
      ? entry.deliveryCoefficient as Record<string, unknown>
      : {}

    return {
      id: toSafeNumber(entry.id),
      cityName: String(entry.cityName ?? 'Unknown'),
      value: toSafeNumber(entry.value),
      deliveryCoefficientId: toSafeNumber(entry.deliveryCoefficientId),
      deliveryCoefficient: {
        id: toSafeNumber(rawDelivery.id),
        portKey: String(rawDelivery.portKey ?? ''),
        portName: String(rawDelivery.portName ?? '—'),
        klaipedaValue: toSafeNumber(rawDelivery.klaipedaValue),
        odesaValue: toSafeNumber(rawDelivery.odesaValue),
      },
    }
  })

  const exportDocumentsFee = (payload?.exportDocumentsFee && typeof payload.exportDocumentsFee === 'object')
    ? payload.exportDocumentsFee as Record<string, number>
    : FALLBACK_REFERENCE_DATA.calculatorDetails.exportDocumentsFee

  const fuelType = Array.isArray(payload?.fuelType)
    ? payload.fuelType.map((item) => String(item)).filter(Boolean)
    : FALLBACK_REFERENCE_DATA.options.fuelType

  const engineSize = Array.isArray(payload?.engineSize)
    ? payload.engineSize.map((item) => toSafeNumber(item)).filter((value) => value > 0)
    : FALLBACK_REFERENCE_DATA.options.engineSize

  const releaseYear = Array.isArray(payload?.releaseYear)
    ? payload.releaseYear
      .map((item) => Math.round(toSafeNumber(item)))
      .filter((value) => value > 0)
    : FALLBACK_REFERENCE_DATA.options.releaseYear

  return {
    coefficients: {
      vehicle: Array.isArray(payload?.vehicleCoefficients) ? payload.vehicleCoefficients as Array<{ item: string; coefficient: number }> : FALLBACK_REFERENCE_DATA.coefficients.vehicle,
      copart: Array.isArray(payload?.copartCoefficients) ? payload.copartCoefficients as AuctionCoefficient[] : FALLBACK_REFERENCE_DATA.coefficients.copart,
      iaai: Array.isArray(payload?.iaaiCoefficients) ? payload.iaaiCoefficients as AuctionCoefficient[] : FALLBACK_REFERENCE_DATA.coefficients.iaai,
      manheim: Array.isArray(payload?.manheimCoefficients) ? payload.manheimCoefficients as AuctionCoefficient[] : FALLBACK_REFERENCE_DATA.coefficients.manheim,
    },
    options: {
      fuelType: fuelType.length > 0 ? fuelType : FALLBACK_REFERENCE_DATA.options.fuelType,
      engineSize,
      releaseYear,
    },
    calculatorDetails: {
      brokerPriceKlaidepa: toSafeNumber(payload?.brokerPriceKlaidepa),
      unloadingFromPortBrokerOdesa: toSafeNumber(payload?.unloadingFromPortBrokerOdesa),
      deliveryToBorderKlaidepa: toSafeNumber(payload?.deliveryToBorderKlaidepa),
      lubeAvtoFee: toSafeNumber(payload?.lubeAvtoFee),
      unloadingFromPortKlaidepa: toSafeNumber(payload?.unloadingFromPortKlaidepa),
      deliveryToLvivKlaidepa: toSafeNumber(payload?.deliveryToLvivKlaidepa),
      specialTransportPrice: toSafeNumber(payload?.specialTransportPrice),
      insuranceFee: 1,
      exportDocumentsFee,
      deliveryCoefficientToPort: mappedOrigins,
    },
  }
}

export function CalculatorPage() {
  const { t } = useI18n()
  const requestSeqRef = useRef(0)
  const [referenceData, setReferenceData] = useState<ReferenceData>(FALLBACK_REFERENCE_DATA)
  const [calcMode, setCalcMode] = useState<CalcMode>('idle')
  const [captionKey, setCaptionKey] = useState<MessageKey>('calcCaptionIdle')
  const [captionExtra, setCaptionExtra] = useState('')
  const [breakdownRows, setBreakdownRows] = useState<BreakdownRow[]>([])
  const [liveTotal, setLiveTotal] = useState(0)

  const [routePreset, setRoutePreset] = useState<RoutePreset>('klaipeda')
  const [carType, setCarType] = useState<CarType>('Automobiles')
  const [fuelType, setFuelType] = useState<FuelType>('Gas')
  const [auctionType, setAuctionType] = useState<AuctionType>('Copart')
  const [exportDocsType, setExportDocsType] = useState<ExportDocsType>('Usa')
  const [deliveryOrigin, setDeliveryOrigin] = useState('')
  const [carYear, setCarYear] = useState('')
  const [engineVolume, setEngineVolume] = useState('')
  const [lotPrice, setLotPrice] = useState('')
  const [insuranceIncluded, setInsuranceIncluded] = useState(true)
  const [transferIncluded, setTransferIncluded] = useState(true)
  const [derived, setDerived] = useState<DerivedValues>(EMPTY_DERIVED)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const resolvedToken = getCalculatorAuthToken()
    if (!resolvedToken) return

    const existing = String(window.localStorage.getItem('lubeavtoPartnerToken') ?? '').trim()
    if (!existing) {
      window.localStorage.setItem('lubeavtoPartnerToken', resolvedToken)
    }
  }, [])

  const lotPriceValue = toSafeNumber(lotPrice)
  const yearValue = toSafeNumber(carYear)
  const engineValue = toSafeNumber(engineVolume)
  const selectedOrigin = useMemo(
    () => referenceData.calculatorDetails.deliveryCoefficientToPort.find((entry) => String(entry.id) === deliveryOrigin),
    [deliveryOrigin, referenceData.calculatorDetails.deliveryCoefficientToPort],
  )

  const fuelOptions = referenceData.options.fuelType
  const engineSizeOptions = referenceData.options.engineSize
  const releaseYearOptions = referenceData.options.releaseYear

  const hasRequiredInputs = useMemo(() => (
    yearValue >= 2008 && yearValue <= CURRENT_YEAR && engineValue > 0 && lotPriceValue > 0
  ), [engineValue, lotPriceValue, yearValue])

  const calculateTransferFee = useCallback((price: number, auctionFee: number) => {
    if (!transferIncluded) return 0
    const rate = (exportDocsType === 'Canada' || exportDocsType === 'Manheim') ? 0.02 : 0.01
    return Math.max(1, Math.round((price + auctionFee) * rate))
  }, [exportDocsType, transferIncluded])

  const syncReferenceFields = useCallback(() => {
    if (!hasRequiredInputs || !selectedOrigin) {
      setDerived(EMPTY_DERIVED)
      return
    }

    const details = referenceData.calculatorDetails
    const auctionFee = getAuctionFee(referenceData, auctionType, lotPriceValue)
    const oceanRaw = routePreset === 'odesa'
      ? toSafeNumber(selectedOrigin.deliveryCoefficient.odesaValue)
      : toSafeNumber(selectedOrigin.deliveryCoefficient.klaipedaValue)

    const oceanDelivery = oceanRaw >= 999999 ? 0 : oceanRaw
    const next: DerivedValues = {
      auctionFee,
      usDelivery: toSafeNumber(selectedOrigin.value),
      exportDocs: toSafeNumber(details.exportDocumentsFee[exportDocsType]),
      oceanDelivery,
      portUnload: routePreset === 'odesa' ? toSafeNumber(details.unloadingFromPortBrokerOdesa) : toSafeNumber(details.unloadingFromPortKlaidepa),
      europeDelivery: routePreset === 'odesa' ? 0 : toSafeNumber(details.deliveryToLvivKlaidepa),
      customsDelivery: routePreset === 'odesa' ? 0 : toSafeNumber(details.deliveryToBorderKlaidepa),
      borderHandling: toSafeNumber(details.specialTransportPrice),
      brokerFee: routePreset === 'odesa' ? 0 : toSafeNumber(details.brokerPriceKlaidepa),
      companyFee: toSafeNumber(details.lubeAvtoFee),
      insuranceFee: insuranceIncluded ? toSafeNumber(details.insuranceFee || 1) : 0,
      transferFee: calculateTransferFee(lotPriceValue, auctionFee),
    }

    setDerived(next)
  }, [auctionType, calculateTransferFee, exportDocsType, hasRequiredInputs, insuranceIncluded, lotPriceValue, referenceData, routePreset, selectedOrigin])

  useEffect(() => {
    if (referenceData.calculatorDetails.deliveryCoefficientToPort.length === 0) {
      setDeliveryOrigin('')
      return
    }
    const exists = referenceData.calculatorDetails.deliveryCoefficientToPort.some((origin) => String(origin.id) === deliveryOrigin)
    if (!exists) {
      setDeliveryOrigin(String(referenceData.calculatorDetails.deliveryCoefficientToPort[0].id))
    }
  }, [deliveryOrigin, referenceData.calculatorDetails.deliveryCoefficientToPort])

  useEffect(() => {
    if (fuelOptions.length === 0) return
    if (!fuelOptions.includes(fuelType)) {
      setFuelType(fuelOptions[0])
    }
  }, [fuelOptions, fuelType])

  useEffect(() => {
    if (releaseYearOptions.length === 0) return
    const selectedYear = toSafeNumber(carYear)
    const exists = releaseYearOptions.some((year) => year === selectedYear)
    if (!exists) {
      setCarYear(String(releaseYearOptions[0]))
    }
  }, [carYear, releaseYearOptions])

  useEffect(() => {
    if (engineSizeOptions.length === 0) return
    const selectedEngine = toSafeNumber(engineVolume)
    const exists = engineSizeOptions.some((size) => size === selectedEngine)
    if (!exists) {
      setEngineVolume(String(engineSizeOptions[0]))
    }
  }, [engineSizeOptions, engineVolume])

  useEffect(() => {
    let isActive = true

    async function loadReference(): Promise<void> {
      try {
        const token = getCalculatorAuthToken()
        const authorization = toAuthorizationHeaderValue(token)
        const response = await fetch(INIT_API_URL, {
          cache: 'no-cache',
          headers: {
            Accept: 'application/json',
            ...(authorization ? { Authorization: authorization } : {}),
          },
        })
        if (!response.ok) throw new Error('reference-init unavailable')
        const payload: unknown = await response.json()
        const mapped = mapInitApiToReference(payload)
        if (!mapped || !isActive) return
        setReferenceData(mapped)
      } catch {
        if (!isActive) return
        setReferenceData(FALLBACK_REFERENCE_DATA)
      }
    }

    loadReference()
    return () => {
      isActive = false
    }
  }, [])

  useEffect(() => {
    syncReferenceFields()
  }, [syncReferenceFields])

  const calculateWithApi = useCallback(async () => {
    if (!hasRequiredInputs || !selectedOrigin) {
      setCalcMode('idle')
      setCaptionKey('calcCaptionIdle')
      setCaptionExtra('')
      setLiveTotal(0)
      setBreakdownRows([])
      return
    }

    const requestId = requestSeqRef.current + 1
    requestSeqRef.current = requestId
    setCalcMode('loading')
    setCaptionKey('calcCaptionLoading')
    setCaptionExtra('')

    const exportDocsValue = toSafeNumber(referenceData.calculatorDetails.exportDocumentsFee[exportDocsType])

    const payload = {
      price: lotPriceValue,
      vehicleType: carType,
      fuelType,
      releaseYear: isElectricFuel(fuelType) ? undefined : yearValue,
      engineSize: isElectricFuel(fuelType) ? undefined : (carType === 'Moto' ? Math.max(0, engineValue * 1000) : engineValue),
      batteryCapacity: isElectricFuel(fuelType) ? Math.max(0, engineValue) : 0,
      auction: auctionType,
      isKlaipeda: routePreset !== 'odesa',
      exportDocumentFee: { key: exportDocsType, value: exportDocsValue },
      deliveryCoefficientToPort: selectedOrigin,
      vehicleCoefficients: referenceData.coefficients.vehicle.find((row) => row.item === carType) ?? null,
      auctionCoefficients: getAuctionCoefficientEntry(referenceData, auctionType, lotPriceValue),
    }

    try {
      const token = getCalculatorAuthToken()
      const authorization = toAuthorizationHeaderValue(token)
      const response = await fetch(CALCULATE_API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json-patch+json',
          Accept: 'application/json',
          ...(authorization ? { Authorization: authorization } : {}),
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const responseText = await response.text().catch(() => '')
        throw new Error(`calculator-${response.status}:${responseText.slice(0, 240)}`)
      }

      const rawText = await response.text()
      let result: Record<string, unknown>
      try {
        result = JSON.parse(rawText) as Record<string, unknown>
      } catch {
        throw new Error(`calculator-invalid-json:${rawText.slice(0, 240)}`)
      }
      if (requestId !== requestSeqRef.current) return

      const resultAuction = (result.auctionCoefficients && typeof result.auctionCoefficients === 'object')
        ? result.auctionCoefficients as Record<string, unknown>
        : null
      const resultDelivery = (result.deliveryCoefficientToPort && typeof result.deliveryCoefficientToPort === 'object')
        ? result.deliveryCoefficientToPort as Record<string, unknown>
        : null
      const resultDeliveryCoefficient = (resultDelivery?.deliveryCoefficient && typeof resultDelivery.deliveryCoefficient === 'object')
        ? resultDelivery.deliveryCoefficient as Record<string, unknown>
        : null

      const apiAuctionFee = toSafeNumber(resultAuction?.coefficient)
      const apiUsDelivery = toSafeNumber(resultDelivery?.value)
      const apiExportDocs = toSafeNumber(result.exportDocumentsFee)
      const apiOceanRaw = routePreset === 'odesa'
        ? toSafeNumber(resultDeliveryCoefficient?.odesaValue)
        : toSafeNumber(resultDeliveryCoefficient?.klaipedaValue)
      const apiOceanDelivery = apiOceanRaw >= 999999 ? 0 : apiOceanRaw
      const apiPortUnload = routePreset === 'odesa' ? toSafeNumber(result.unloadingFromPortBrokerOdesa) : toSafeNumber(result.unloadingFromPortKlaidepa)
      const apiEuropeDelivery = routePreset === 'odesa' ? 0 : toSafeNumber(result.deliveryToLvivKlaidepa)
      const apiCustomsDelivery = routePreset === 'odesa' ? 0 : toSafeNumber(result.deliveryToBorderKlaidepa)
      const apiBorderHandling = toSafeNumber(result.specialTransportPrice)
      const apiBrokerFee = routePreset === 'odesa' ? 0 : toSafeNumber(result.brokerPriceKlaidepa)
      const apiCompanyFee = toSafeNumber(result.lubeAvtoFee)
      const apiInsuranceFee = insuranceIncluded ? toSafeNumber(result.insuranceFee) : 0
      const apiTransferFee = calculateTransferFee(lotPriceValue, apiAuctionFee)

      const nextDerived: DerivedValues = {
        auctionFee: apiAuctionFee,
        usDelivery: apiUsDelivery,
        exportDocs: apiExportDocs,
        oceanDelivery: apiOceanDelivery,
        portUnload: apiPortUnload,
        europeDelivery: apiEuropeDelivery,
        customsDelivery: apiCustomsDelivery,
        borderHandling: apiBorderHandling,
        brokerFee: apiBrokerFee,
        companyFee: apiCompanyFee,
        insuranceFee: apiInsuranceFee,
        transferFee: apiTransferFee,
      }

      const excise = toSafeNumber(result.excise)
      const importDuty = toSafeNumber(result.toll)
      const vat = toSafeNumber(result.vat)
      const nonVatFee = toSafeNumber(result.nonVatFee)
      const carBlock = lotPriceValue + nextDerived.auctionFee
      const logisticsBlock =
        nextDerived.usDelivery +
        nextDerived.exportDocs +
        nextDerived.oceanDelivery +
        nextDerived.portUnload +
        nextDerived.europeDelivery +
        nextDerived.customsDelivery +
        nextDerived.borderHandling
      const customsBlock = excise + importDuty + vat + nonVatFee
      const serviceBlock = nextDerived.brokerFee + nextDerived.companyFee + nextDerived.insuranceFee + nextDerived.transferFee
      const total = carBlock + logisticsBlock + customsBlock + serviceBlock

      const rows: BreakdownRow[] = [
        { label: t('calcRowCarPrice'), value: lotPriceValue },
        { label: `${t('calcRowAuctionFee')} (${auctionType})`, value: nextDerived.auctionFee },
        { label: `${t('calcRowUsDelivery')} - ${selectedOrigin.cityName}`, value: nextDerived.usDelivery },
        { label: t('calcRowExportDocs'), value: nextDerived.exportDocs },
        { label: `${t('calcRowOceanFromPrefix')} ${selectedOrigin.deliveryCoefficient.portName}`, value: nextDerived.oceanDelivery },
        { label: routePreset === 'odesa' ? t('calcRowPortUnloadOdesa') : t('calcRowPortUnloadKlaipeda'), value: nextDerived.portUnload },
      ]

      if (routePreset !== 'odesa') {
        rows.push({ label: `${t('calcRowEuDeliveryPortPrefix')} ${t('calcRouteKlaipeda')} - ${t('calcCityWarsaw')}`, value: nextDerived.europeDelivery })
        rows.push({ label: t('calcRowCustomsDelivery'), value: nextDerived.customsDelivery })
      }

      rows.push({ label: t('calcRowBorderHandling'), value: nextDerived.borderHandling })
      rows.push({ label: t('calcRowExcise'), value: excise, group: 'customs' })
      rows.push({ label: t('calcRowImportDuty'), value: importDuty, group: 'customs' })
      rows.push({ label: t('calcRowVat'), value: vat, group: 'customs' })
      if (nonVatFee > 0) rows.push({ label: t('calcRowNonVatFee'), value: nonVatFee, group: 'customs' })
      if (nextDerived.brokerFee > 0) rows.push({ label: t('calcRowBroker'), value: nextDerived.brokerFee, group: 'customs' })
      rows.push({ label: t('calcRowBiddersFee'), value: nextDerived.companyFee, group: 'customs' })
      if (nextDerived.insuranceFee > 0) rows.push({ label: t('calcRowInsuranceFee'), value: nextDerived.insuranceFee, group: 'customs' })
      if (nextDerived.transferFee > 0) rows.push({ label: t('calcRowMoneyTransfer'), value: nextDerived.transferFee, group: 'customs' })

      setDerived(nextDerived)
      setBreakdownRows(rows)
      setLiveTotal(total)
      setCaptionKey('calcCaptionLive')
      setCaptionExtra('')
      setCalcMode('live')
    } catch (error) {
      if (requestId !== requestSeqRef.current) return
      setCalcMode('fallback')
      setLiveTotal(0)
      setBreakdownRows([])
      const reason = error instanceof Error ? error.message : ''
      if (reason.includes('401')) {
        setCaptionKey('calcCaptionErr401')
        setCaptionExtra('')
        return
      }
      if (reason.includes('403')) {
        setCaptionKey('calcCaptionErr403')
        setCaptionExtra('')
        return
      }
      if (reason.includes('400')) {
        setCaptionKey('calcCaptionErr400Prefix')
        setCaptionExtra(reason.slice(0, 160))
        return
      }
      if (reason.includes('invalid-json')) {
        setCaptionKey('calcCaptionErrJson')
        setCaptionExtra('')
        return
      }
      setCaptionKey('calcCaptionFallback')
      setCaptionExtra('')
    }
  }, [auctionType, carType, engineValue, exportDocsType, fuelType, hasRequiredInputs, lotPriceValue, referenceData, routePreset, selectedOrigin, yearValue, calculateTransferFee, insuranceIncluded, t])

  useEffect(() => {
    if (!hasRequiredInputs || !selectedOrigin) {
      setCalcMode('idle')
      setCaptionKey('calcCaptionIdle')
      setCaptionExtra('')
      setLiveTotal(0)
      setBreakdownRows([])
      return
    }

    const timer = window.setTimeout(() => {
      calculateWithApi()
    }, 220)

    return () => {
      window.clearTimeout(timer)
    }
  }, [calculateWithApi, hasRequiredInputs, selectedOrigin])

  const resetPreset = () => {
    setRoutePreset('klaipeda')
    setCarType('Automobiles')
    setFuelType('Gas')
    setAuctionType('Copart')
    setExportDocsType('Usa')
    setCarYear('')
    setEngineVolume('')
    setLotPrice('')
    setInsuranceIncluded(true)
    setTransferIncluded(true)
    setCalcMode('idle')
    setCaptionKey('calcCaptionIdle')
    setCaptionExtra('')
    setBreakdownRows([])
    setLiveTotal(0)
  }

  const splitIndex = useMemo(() => {
    const explicit = breakdownRows.findIndex((row) => row.group === 'customs')
    return explicit === -1 ? Math.ceil(breakdownRows.length / 2) : explicit
  }, [breakdownRows])

  const secondaryRows = breakdownRows.slice(splitIndex)

  const localSubtotal = lotPriceValue + Object.values(derived).reduce((acc, value) => acc + value, 0)
  const total = calcMode === 'live' ? liveTotal : localSubtotal

  const modeLabel = calcMode === 'live'
    ? 'LIVE API'
    : calcMode === 'loading'
      ? 'LOADING'
      : calcMode === 'fallback'
        ? 'FALLBACK'
        : 'IDLE'

  return (
    <main className="calculator-react-page">
      <Seo title={t('seoCalculatorTitle')} description={t('seoCalculatorDescription')} path={routePaths.calculator} />
      <section className="calculator-hero">
        <div className="calculator-hero__inner">
          <div className="calculator-hero__copy">
            <div className="calculator-pill">{t('calcPill')}</div>
            <h1>{t('calcHeroTitle')}</h1>
            <p>{t('calcHeroDesc')}</p>
          </div>
          <div className="calculator-hero__note">
            <strong>{t('calcHeroNoteTitle')}</strong>
            <span>{t('calcHeroNoteDesc')}</span>
          </div>
        </div>
      </section>

      <section className="calculator-shell">
        <div className="calculator-layout">
          <article className="calculator-card calculator-card--form">
            <div className="calculator-card__head">
              <div className="calculator-kicker">{t('calcFormKicker')}</div>
              <h2>{t('calcFormTitle')}</h2>
              <p>{t('calcFormDesc')}</p>
            </div>

            <div className="calc-simple-list">
              <div className="calc-simple-row">
                <label htmlFor="routePreset">{t('calcLabelRoute')}</label>
                <select id="routePreset" className="calc-select" value={routePreset} onChange={(event) => setRoutePreset(event.target.value as RoutePreset)}>
                  <option value="klaipeda">{t('calcRouteKlaipeda')}</option>
                  <option value="odesa">{t('calcRouteOdesa')}</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="carType">{t('calcLabelCarType')}</label>
                <select id="carType" className="calc-select" value={carType} onChange={(event) => setCarType(event.target.value as CarType)}>
                  <option value="Automobiles">{t('calcCarTypeAuto')}</option>
                  <option value="Crossover">{t('calcCarTypeCrossover')}</option>
                  <option value="SUVs">{t('calcCarTypeSuv')}</option>
                  <option value="Moto">{t('calcCarTypeMoto')}</option>
                  <option value="PickupTrucks">{t('calcCarTypePickup')}</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="fuelType">{t('calcLabelFuel')}</label>
                <select id="fuelType" className="calc-select" value={fuelType} onChange={(event) => setFuelType(event.target.value)}>
                  {fuelOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === 'Gas' ? 'Benzyna' : option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="auctionType">{t('calcLabelAuction')}</label>
                <select id="auctionType" className="calc-select" value={auctionType} onChange={(event) => setAuctionType(event.target.value as AuctionType)}>
                  <option value="Copart">Copart</option>
                  <option value="IAAI">IAAI</option>
                  <option value="Manheim">Manheim</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="exportDocsType">{t('calcLabelDocType')}</label>
                <select id="exportDocsType" className="calc-select" value={exportDocsType} onChange={(event) => setExportDocsType(event.target.value as ExportDocsType)}>
                  <option value="Usa">USA</option>
                  <option value="Usa closed">USA Closed</option>
                  <option value="Canada">Canada</option>
                  <option value="Manheim">Manheim</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="deliveryOrigin">{t('calcLabelCity')}</label>
                <select id="deliveryOrigin" className="calc-select" value={deliveryOrigin} onChange={(event) => setDeliveryOrigin(event.target.value)}>
                  {referenceData.calculatorDetails.deliveryCoefficientToPort.map((origin) => (
                    <option key={origin.id} value={origin.id}>{origin.cityName}</option>
                  ))}
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="carYear">{t('calcLabelYear')}</label>
                {releaseYearOptions.length > 0 ? (
                  <select id="carYear" className="calc-select" value={carYear} onChange={(event) => setCarYear(event.target.value)}>
                    {releaseYearOptions.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                ) : (
                  <input id="carYear" className="calc-input" value={carYear} onChange={(event) => setCarYear(event.target.value)} />
                )}
              </div>

              <div className="calc-simple-row">
                <label htmlFor="engineVolume">{isElectricFuel(fuelType) ? t('calcLabelBattery') : t('calcLabelEngine')}</label>
                {engineSizeOptions.length > 0 ? (
                  <select id="engineVolume" className="calc-select" value={engineVolume} onChange={(event) => setEngineVolume(event.target.value)}>
                    {engineSizeOptions.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                ) : (
                  <input id="engineVolume" className="calc-input" value={engineVolume} onChange={(event) => setEngineVolume(event.target.value)} />
                )}
              </div>

              <div className="calc-simple-row">
                <label htmlFor="lotPrice">{t('calcLabelPrice')}</label>
                <input id="lotPrice" className="calc-input" type="number" min={0} value={lotPrice} onChange={(event) => setLotPrice(event.target.value)} />
              </div>

              <div className="calc-toggle-grid">
                <label className="calc-toggle"><input type="checkbox" checked={insuranceIncluded} onChange={(event) => setInsuranceIncluded(event.target.checked)} /><span>{t('calcLabelInsurance')}</span></label>
                <label className="calc-toggle"><input type="checkbox" checked={transferIncluded} onChange={(event) => setTransferIncluded(event.target.checked)} /><span>{t('calcLabelTransfer')}</span></label>
              </div>

              <div className="calc-input-actions">
                <button className="calc-primary" type="button" onClick={() => calculateWithApi()}>{t('calcBtnRecalc')}</button>
                <button className="calc-secondary" type="button" onClick={resetPreset}>{t('calcBtnReset')}</button>
              </div>
            </div>
          </article>

          <aside className="calculator-card calculator-card--result">
            <div className="calculator-total">
              <div className="calculator-kicker">{t('calcResultKicker')}</div>
              <div className="calculator-total__row">
                <div className="calculator-total__value">{usd(total)}</div>
                <div className="calculator-total__badge">{modeLabel}</div>
              </div>
              <p className="calculator-total__caption">{t(captionKey)}{captionExtra ? ` ${captionExtra}` : ''}</p>
            </div>

            <div className="calculator-groups">
              <div className="calculator-group">
                <div className="calculator-group__title">{t('calcGroupLogistics')}</div>
                <div className="calc-row"><span>{t('calcRowBid')}</span><strong>{usd(lotPriceValue)}</strong></div>
                <div className="calc-row"><span>{t('calcRowAuctionFee')}</span><strong>{usd(derived.auctionFee)}</strong></div>
                <div className="calc-row"><span>{t('calcRowUsDelivery')}</span><strong>{usd(derived.usDelivery)}</strong></div>
                <div className="calc-row"><span>{t('calcRowDocs')}</span><strong>{usd(derived.exportDocs)}</strong></div>
                <div className="calc-row"><span>{t('calcRowOcean')}</span><strong>{usd(derived.oceanDelivery)}</strong></div>
                <div className="calc-row"><span>{t('calcRowPortUnload')}</span><strong>{usd(derived.portUnload)}</strong></div>
                <div className="calc-row"><span>{t('calcRowEuDelivery')}</span><strong>{usd(derived.europeDelivery)}</strong></div>
                <div className="calc-row"><span>{t('calcRowCustomsDelivery')}</span><strong>{usd(derived.customsDelivery)}</strong></div>
                <div className="calc-row"><span>{t('calcRowBorderHandling')}</span><strong>{usd(derived.borderHandling)}</strong></div>
              </div>

              <div className="calculator-group">
                <div className="calculator-group__title">{t('calcGroupCustoms')}</div>
                {secondaryRows.length === 0 ? <div className="calc-row"><span>{t('calcCustomsPending')}</span><strong>—</strong></div> : null}
                {secondaryRows.map((row) => (
                  <div className="calc-row" key={row.label}><span>{row.label}</span><strong>{usd(row.value)}</strong></div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
