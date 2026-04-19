import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './calculator.css'

type RoutePreset = 'klaipeda' | 'odesa'
type CarType = 'Automobiles' | 'Crossover' | 'SUVs' | 'Moto' | 'PickupTrucks'
type FuelType = 'Gas' | 'Diesel' | 'Hybrid' | 'Electro'
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
  deliveryCoefficient: {
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

const CURRENT_YEAR = new Date().getFullYear()
const INIT_API_URL = 'https://api-lubeavto.azurewebsites.net/api/v0/calculator/count-pricing'
const CALCULATE_API_URL = 'https://api-lubeavto.azurewebsites.net/api/v0/calculator/count-pricing/calculate'

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
      { id: 1, cityName: 'ABILENE - TX', value: 420, deliveryCoefficient: { portName: 'HOUSTON,TX', klaipedaValue: 900, odesaValue: 1400 } },
      { id: 2, cityName: 'ALBANY - NY', value: 325, deliveryCoefficient: { portName: 'New York, NY', klaipedaValue: 750, odesaValue: 1250 } },
      { id: 3, cityName: 'ALBUQUERQUE - NM', value: 770, deliveryCoefficient: { portName: 'HOUSTON,TX', klaipedaValue: 900, odesaValue: 1400 } },
      { id: 296, cityName: 'ACE - Carson (CA)', value: 345, deliveryCoefficient: { portName: 'LOSANGELES,CA', klaipedaValue: 1475, odesaValue: 999999 } },
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

function getAuctionFee(reference: ReferenceData, auctionType: AuctionType, price: number): number {
  const table = getAuctionTable(reference, auctionType)
  const entry = table.find((row) => price <= toSafeNumber(row.item))
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
      deliveryCoefficient: {
        portName: String(rawDelivery.portName ?? '—'),
        klaipedaValue: toSafeNumber(rawDelivery.klaipedaValue),
        odesaValue: toSafeNumber(rawDelivery.odesaValue),
      },
    }
  })

  const exportDocumentsFee = (payload?.exportDocumentsFee && typeof payload.exportDocumentsFee === 'object')
    ? payload.exportDocumentsFee as Record<string, number>
    : FALLBACK_REFERENCE_DATA.calculatorDetails.exportDocumentsFee

  return {
    coefficients: {
      vehicle: Array.isArray(payload?.vehicleCoefficients) ? payload.vehicleCoefficients as Array<{ item: string; coefficient: number }> : FALLBACK_REFERENCE_DATA.coefficients.vehicle,
      copart: Array.isArray(payload?.copartCoefficients) ? payload.copartCoefficients as AuctionCoefficient[] : FALLBACK_REFERENCE_DATA.coefficients.copart,
      iaai: Array.isArray(payload?.iaaiCoefficients) ? payload.iaaiCoefficients as AuctionCoefficient[] : FALLBACK_REFERENCE_DATA.coefficients.iaai,
      manheim: Array.isArray(payload?.manheimCoefficients) ? payload.manheimCoefficients as AuctionCoefficient[] : FALLBACK_REFERENCE_DATA.coefficients.manheim,
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
  const requestSeqRef = useRef(0)
  const [referenceData, setReferenceData] = useState<ReferenceData>(FALLBACK_REFERENCE_DATA)
  const [calcMode, setCalcMode] = useState<CalcMode>('idle')
  const [caption, setCaption] = useState('Поки що калькулятор у нейтральному стані. Жодних випадкових сум до введення ваших даних.')
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

  const lotPriceValue = toSafeNumber(lotPrice)
  const yearValue = toSafeNumber(carYear)
  const engineValue = toSafeNumber(engineVolume)
  const selectedOrigin = useMemo(
    () => referenceData.calculatorDetails.deliveryCoefficientToPort.find((entry) => String(entry.id) === deliveryOrigin),
    [deliveryOrigin, referenceData.calculatorDetails.deliveryCoefficientToPort],
  )

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
    let isActive = true

    async function loadReference(): Promise<void> {
      try {
        const response = await fetch(INIT_API_URL, { cache: 'no-cache' })
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
      setCaption('Поки що калькулятор у нейтральному стані. Жодних випадкових сум до введення ваших даних.')
      setLiveTotal(0)
      setBreakdownRows([])
      return
    }

    const requestId = requestSeqRef.current + 1
    requestSeqRef.current = requestId
    setCalcMode('loading')
    setCaption('Підсумок оновлюється після відповіді API-движка.')

    const payload = {
      price: lotPriceValue,
      vehicleType: carType,
      fuelType,
      releaseYear: fuelType === 'Electro' ? undefined : yearValue,
      engineSize: fuelType === 'Electro' ? undefined : (carType === 'Moto' ? Math.max(0, engineValue * 1000) : engineValue),
      batteryCapacity: fuelType === 'Electro' ? Math.max(0, engineValue) : 0,
      auction: auctionType,
      isKlaipeda: routePreset !== 'odesa',
      exportDocumentFee: { key: exportDocsType, value: derived.exportDocs },
      deliveryCoefficientToPort: selectedOrigin,
    }

    try {
      const response = await fetch(CALCULATE_API_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json-patch+json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error(`calculator-${response.status}`)
      const result = await response.json() as Record<string, unknown>
      if (requestId !== requestSeqRef.current) return

      const excise = toSafeNumber(result.excise)
      const importDuty = toSafeNumber(result.toll)
      const vat = toSafeNumber(result.vat)
      const nonVatFee = toSafeNumber(result.nonVatFee)
      const carBlock = lotPriceValue + derived.auctionFee
      const logisticsBlock =
        derived.usDelivery +
        derived.exportDocs +
        derived.oceanDelivery +
        derived.portUnload +
        derived.europeDelivery +
        derived.customsDelivery +
        derived.borderHandling
      const customsBlock = excise + importDuty + vat + nonVatFee
      const serviceBlock = derived.brokerFee + derived.companyFee + derived.insuranceFee + derived.transferFee
      const total = carBlock + logisticsBlock + customsBlock + serviceBlock

      const rows: BreakdownRow[] = [
        { label: 'Вартість авто / ставка', value: lotPriceValue },
        { label: `Аукціонний збір (${auctionType})`, value: derived.auctionFee },
        { label: `Доставка по США - ${selectedOrigin.cityName}`, value: derived.usDelivery },
        { label: 'Документи на експорт авто', value: derived.exportDocs },
        { label: `Доставка з США - ${selectedOrigin.deliveryCoefficient.portName}`, value: derived.oceanDelivery },
        { label: routePreset === 'odesa' ? 'Вигрузка з порту Одеса + брокер' : 'Вигрузка з порту Клайпеда', value: derived.portUnload },
      ]

      if (routePreset !== 'odesa') {
        rows.push({ label: 'Доставка Клайпеда - Варшава', value: derived.europeDelivery })
        rows.push({ label: 'Доставка на митницю', value: derived.customsDelivery })
      }

      rows.push({ label: 'Проходження кордону та залучення спец. транспорту', value: derived.borderHandling })
      rows.push({ label: 'Акциз', value: excise })
      rows.push({ label: 'Ввізне мито', value: importDuty })
      rows.push({ label: 'ПДВ', value: vat })
      if (nonVatFee > 0) rows.push({ label: 'Фінансовий збір за не сплату ПДВ', value: nonVatFee })
      if (derived.brokerFee > 0) rows.push({ label: 'Брокерські послуги', value: derived.brokerFee })
      rows.push({ label: 'Комісія BIDDERS', value: derived.companyFee })
      if (derived.insuranceFee > 0) rows.push({ label: 'Страхування', value: derived.insuranceFee })
      if (derived.transferFee > 0) rows.push({ label: 'Комісія за переказ коштів в США', value: derived.transferFee })

      setBreakdownRows(rows)
      setLiveTotal(total)
      setCaption('Підсумкова сума вже враховує логістику, митницю та сервісні витрати.')
      setCalcMode('live')
    } catch {
      if (requestId !== requestSeqRef.current) return
      setCalcMode('fallback')
      setLiveTotal(0)
      setBreakdownRows([])
      setCaption('Точний підсумок зараз не отримано. Для ручного прорахунку перейдіть у контакти.')
    }
  }, [auctionType, carType, derived, engineValue, exportDocsType, fuelType, hasRequiredInputs, lotPriceValue, routePreset, selectedOrigin, yearValue])

  useEffect(() => {
    if (!hasRequiredInputs || !selectedOrigin) {
      setCalcMode('idle')
      setCaption('Поки що калькулятор у нейтральному стані. Жодних випадкових сум до введення ваших даних.')
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
    setCaption('Поки що калькулятор у нейтральному стані. Жодних випадкових сум до введення ваших даних.')
    setBreakdownRows([])
    setLiveTotal(0)
  }

  const splitIndex = useMemo(() => {
    const explicit = breakdownRows.findIndex((row) => /Акциз|Ввізне мито|ПДВ/i.test(row.label))
    return explicit === -1 ? Math.ceil(breakdownRows.length / 2) : explicit
  }, [breakdownRows])

  const primaryRows = breakdownRows.slice(0, splitIndex)
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
      <section className="calculator-hero">
        <div className="calculator-hero__inner">
          <div className="calculator-hero__copy">
            <div className="calculator-pill">Калькулятор імпорту</div>
            <h1>Розрахуйте реальну вартість авто під ключ ще до ставки на аукціоні</h1>
            <p>Повторили структуру CarAuction: від ставки до фінальної вартості з митницею та сервісом BIDDERS.</p>
          </div>
          <div className="calculator-hero__note">
            <strong>Що враховується</strong>
            <span>Ставка, аукціонний збір, доставка, документи, брокер, комісія, страхування та податки.</span>
          </div>
        </div>
      </section>

      <section className="calculator-shell">
        <div className="calculator-layout">
          <article className="calculator-card calculator-card--form">
            <div className="calculator-card__head">
              <div className="calculator-kicker">Параметри авто</div>
              <h2>Введіть вихідні дані</h2>
              <p>Потік розрахунку повторює CarAuction: швидкий локальний підрахунок + точний API з fallback-поведінкою.</p>
            </div>

            <div className="calc-simple-list">
              <div className="calc-simple-row">
                <label htmlFor="routePreset">Маршрут / порт</label>
                <select id="routePreset" className="calc-select" value={routePreset} onChange={(event) => setRoutePreset(event.target.value as RoutePreset)}>
                  <option value="klaipeda">Клайпеда</option>
                  <option value="odesa">Одеса</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="carType">Тип авто</label>
                <select id="carType" className="calc-select" value={carType} onChange={(event) => setCarType(event.target.value as CarType)}>
                  <option value="Automobiles">Легковий</option>
                  <option value="Crossover">Кросовер</option>
                  <option value="SUVs">Позашляховик</option>
                  <option value="Moto">Мотоцикл</option>
                  <option value="PickupTrucks">Бус / Пікап</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="fuelType">Тип двигуна</label>
                <select id="fuelType" className="calc-select" value={fuelType} onChange={(event) => setFuelType(event.target.value as FuelType)}>
                  <option value="Gas">Бензин</option>
                  <option value="Diesel">Дизель</option>
                  <option value="Hybrid">Гібрид</option>
                  <option value="Electro">Електро</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="auctionType">Аукціон</label>
                <select id="auctionType" className="calc-select" value={auctionType} onChange={(event) => setAuctionType(event.target.value as AuctionType)}>
                  <option value="Copart">Copart</option>
                  <option value="IAAI">IAAI</option>
                  <option value="Manheim">Manheim</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="exportDocsType">Тип документів</label>
                <select id="exportDocsType" className="calc-select" value={exportDocsType} onChange={(event) => setExportDocsType(event.target.value as ExportDocsType)}>
                  <option value="Usa">USA</option>
                  <option value="Usa closed">USA Closed</option>
                  <option value="Canada">Canada</option>
                  <option value="Manheim">Manheim</option>
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="deliveryOrigin">Місто відправки</label>
                <select id="deliveryOrigin" className="calc-select" value={deliveryOrigin} onChange={(event) => setDeliveryOrigin(event.target.value)}>
                  {referenceData.calculatorDetails.deliveryCoefficientToPort.map((origin) => (
                    <option key={origin.id} value={origin.id}>{origin.cityName}</option>
                  ))}
                </select>
              </div>

              <div className="calc-simple-row">
                <label htmlFor="carYear">Рік випуску</label>
                <input id="carYear" className="calc-input" value={carYear} onChange={(event) => setCarYear(event.target.value)} />
              </div>

              <div className="calc-simple-row">
                <label htmlFor="engineVolume">{fuelType === 'Electro' ? 'Ємність батареї' : "Об'єм двигуна"}</label>
                <input id="engineVolume" className="calc-input" value={engineVolume} onChange={(event) => setEngineVolume(event.target.value)} />
              </div>

              <div className="calc-simple-row">
                <label htmlFor="lotPrice">Ціна авто / ставка</label>
                <input id="lotPrice" className="calc-input" type="number" min={0} value={lotPrice} onChange={(event) => setLotPrice(event.target.value)} />
              </div>

              <div className="calc-toggle-grid">
                <label className="calc-toggle"><input type="checkbox" checked={insuranceIncluded} onChange={(event) => setInsuranceIncluded(event.target.checked)} /><span>Страхування</span></label>
                <label className="calc-toggle"><input type="checkbox" checked={transferIncluded} onChange={(event) => setTransferIncluded(event.target.checked)} /><span>Переказ коштів</span></label>
              </div>

              <div className="calc-input-actions">
                <button className="calc-primary" type="button" onClick={() => calculateWithApi()}>Перерахувати</button>
                <button className="calc-secondary" type="button" onClick={resetPreset}>Скинути</button>
              </div>
            </div>
          </article>

          <aside className="calculator-card calculator-card--result">
            <div className="calculator-total">
              <div className="calculator-kicker">Підсумок</div>
              <div className="calculator-total__row">
                <div className="calculator-total__value">{usd(total)}</div>
                <div className="calculator-total__badge">{modeLabel}</div>
              </div>
              <p className="calculator-total__caption">{caption}</p>
            </div>

            <div className="calculator-groups">
              <div className="calculator-group">
                <div className="calculator-group__title">Аукціон та логістика</div>
                <div className="calc-row"><span>Ставка</span><strong>{usd(lotPriceValue)}</strong></div>
                <div className="calc-row"><span>Аукціонний збір</span><strong>{usd(derived.auctionFee)}</strong></div>
                <div className="calc-row"><span>Доставка по США</span><strong>{usd(derived.usDelivery)}</strong></div>
                <div className="calc-row"><span>Документи</span><strong>{usd(derived.exportDocs)}</strong></div>
                <div className="calc-row"><span>Морська доставка</span><strong>{usd(derived.oceanDelivery)}</strong></div>
                <div className="calc-row"><span>Вигрузка з порту</span><strong>{usd(derived.portUnload)}</strong></div>
                <div className="calc-row"><span>Доставка порт - ЄС</span><strong>{usd(derived.europeDelivery)}</strong></div>
                <div className="calc-row"><span>Доставка на митницю</span><strong>{usd(derived.customsDelivery)}</strong></div>
              </div>

              <div className="calculator-group">
                <div className="calculator-group__title">Деталізація</div>
                {calcMode === 'loading' ? <div className="calc-row"><span>Готуємо payload та очікуємо відповідь API</span><strong>...</strong></div> : null}
                {calcMode === 'fallback' ? <div className="calc-row"><span>API-розрахунок тимчасово недоступний</span><strong>—</strong></div> : null}
                {calcMode !== 'loading' && calcMode !== 'fallback' && primaryRows.length === 0 ? <div className="calc-row"><span>Митниця та сервіс зʼявляться після заповнення основних полів</span><strong>$0</strong></div> : null}
                {primaryRows.map((row) => (
                  <div className="calc-row" key={row.label}><span>{row.label}</span><strong>{usd(row.value)}</strong></div>
                ))}
              </div>

              <div className="calculator-group">
                <div className="calculator-group__title">Митниця та сервіс</div>
                {secondaryRows.map((row) => (
                  <div className="calc-row" key={row.label}><span>{row.label}</span><strong>{usd(row.value)}</strong></div>
                ))}
                <div className="calc-row"><span>Кордон / спецтранспорт</span><strong>{usd(derived.borderHandling)}</strong></div>
                <div className="calc-row"><span>Брокер</span><strong>{usd(derived.brokerFee)}</strong></div>
                <div className="calc-row"><span>Комісія BIDDERS</span><strong>{usd(derived.companyFee)}</strong></div>
                <div className="calc-row"><span>Страхування</span><strong>{usd(derived.insuranceFee)}</strong></div>
                <div className="calc-row"><span>Переказ коштів</span><strong>{usd(derived.transferFee)}</strong></div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
