import { useMemo, useRef, useState } from 'react'
import './calculator-base.snapshot.css'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import type { MessageKey } from '../../../shared/i18n/messages'
import { calculateImportTotal } from '../../car-price-calculator/model/calculateImportTotal'
import type { AuctionType, CarType, EuPortId, ImportTaxType } from '../../car-price-calculator/model/calculatorTypes'
import { EU_PORTS } from '../../car-price-calculator/model/euPorts'
import { useExchangeRate, FALLBACK_EUR_USD_RATE } from '../../car-price-calculator/model/exchangeRate'
import { BRANCHES } from '../../car-price-calculator/model/usRoutes'
import { resolveAuctionLotUrl } from '../../car-price-calculator/model/auctionLotResolver'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function eur(value: number): string {
  return `€${Math.round(value).toLocaleString('en-US')}`
}

function usd(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function toSafeNumber(value: unknown): number {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

// ─── Constants ───────────────────────────────────────────────────────────────

const EU_PORT_LIST: { id: EuPortId; label: string }[] = [
  { id: 'rotterdam',   label: 'Rotterdam, NL (21%)' },
  { id: 'bremerhaven', label: 'Bremerhaven, DE (19%)' },
  { id: 'klaipeda',    label: 'Klaipeda, LT (21%)' },
  { id: 'gdynia',      label: 'Gdynia, PL (23%)' },
]

const IMPORT_TAX_OPTIONS: { id: ImportTaxType; labelKey: MessageKey }[] = [
  { id: 'standard',   labelKey: 'calcTaxAuto' },
  { id: 'truck',      labelKey: 'calcTaxTruck' },
  { id: 'motorcycle', labelKey: 'calcTaxMoto' },
  { id: 'electric',   labelKey: 'calcTaxClassic0' },
]

const CAR_TYPE_OPTIONS: { value: CarType; labelKey: MessageKey }[] = [
  { value: 'Automobiles',  labelKey: 'calcCarTypeAuto' },
  { value: 'Crossover',    labelKey: 'calcCarTypeCrossover' },
  { value: 'SUVs',         labelKey: 'calcCarTypeSuv' },
  { value: 'PickupTrucks', labelKey: 'calcCarTypePickup' },
  { value: 'Moto',         labelKey: 'calcCarTypeMoto' },
]

// Only auctions that have bid.cars route data
const AUCTION_OPTIONS: AuctionType[] = ['Copart', 'IAAI']

// ─── Searchable Branch Select ─────────────────────────────────────────────────

interface BranchSelectProps {
  branches: { id: number; name: string }[]
  value: number | null
  onChange: (id: number) => void
  placeholder: string
  notFoundText: string
}

function BranchSelect({ branches, value, onChange, placeholder, notFoundText }: BranchSelectProps) {
  const [query, setQuery]     = useState('')
  const [open, setOpen]       = useState(false)
  const wrapRef               = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return branches
    return branches.filter((b) => b.name.toLowerCase().includes(q))
  }, [branches, query])

  const selectedName = branches.find((b) => b.id === value)?.name ?? ''

  const handleSelect = (id: number) => {
    onChange(id)
    setQuery('')
    setOpen(false)
  }

  const handleBlur = (e: React.FocusEvent) => {
    if (wrapRef.current && !wrapRef.current.contains(e.relatedTarget as Node)) {
      setOpen(false)
      setQuery('')
    }
  }

  return (
    <div ref={wrapRef} className="calc-branch-wrap" onBlur={handleBlur}>
      <input
        className="calc-input calc-branch-input"
        type="text"
        placeholder={open ? placeholder : selectedName || placeholder}
        value={open ? query : selectedName}
        onFocus={() => { setOpen(true); setQuery('') }}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      {open && (
        <div className="calc-branch-dropdown">
          {filtered.length === 0 ? (
            <div className="calc-branch-empty">{notFoundText}</div>
          ) : (
            filtered.map((b) => (
              <button
                key={b.id}
                type="button"
                className={`calc-branch-option${b.id === value ? ' calc-branch-option--active' : ''}`}
                onMouseDown={(e) => { e.preventDefault(); handleSelect(b.id) }}
              >
                {b.name}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function CalculatorPage() {
  const { t } = useI18n()

  // Exchange rate (live NBP, silent fallback)
  const { eurUsdRate, loading: rateLoading } = useExchangeRate()

  // Form state
  const [lotPrice,      setLotPrice]      = useState('')
  const [auction,       setAuction]       = useState<AuctionType>('Copart')
  const [branchId,      setBranchId]      = useState<number | null>(null)
  const [euPortId,      setEuPortId]      = useState<EuPortId>('rotterdam')
  const [carType,       setCarType]       = useState<CarType>('Automobiles')
  const [importTaxType, setImportTaxType] = useState<ImportTaxType>('standard')

  // Auction URL resolver state
  const [auctionUrl,        setAuctionUrl]        = useState('')
  const [auctionUrlStatus,  setAuctionUrlStatus]  = useState<'idle' | 'loading' | 'success' | 'warning' | 'error'>('idle')
  const [auctionUrlMessage, setAuctionUrlMessage] = useState('')
  const [requireManualBranch, setRequireManualBranch] = useState(false)

  // Branches filtered by selected auction, sorted alphabetically
  const filteredBranches = useMemo(
    () => BRANCHES.filter((b) => b.group === auction).sort((a, b) => a.name.localeCompare(b.name)),
    [auction],
  )

  // Effective branch: keep current if still valid, otherwise pick first available
  const effectiveBranchId = useMemo(() => {
    if (branchId !== null && filteredBranches.some((b) => b.id === branchId)) return branchId
    if (requireManualBranch) return null
    return filteredBranches[0]?.id ?? null
  }, [branchId, filteredBranches, requireManualBranch])

  const lotPriceValue = toSafeNumber(lotPrice)
  const hasInputs     = lotPriceValue > 0 && effectiveBranchId !== null
  const showEmptyState = effectiveBranchId !== null && lotPriceValue === 0

  // Core calculation — only calculateImportTotal, no local formulas
  const result = useMemo(() => {
    if (!hasInputs || effectiveBranchId === null) return null
    return calculateImportTotal({
      lotPrice: lotPriceValue,
      auction,
      branchId: effectiveBranchId,
      euPortId,
      carType,
      importTaxType,
      eurUsdRate: rateLoading ? FALLBACK_EUR_USD_RATE : eurUsdRate,
    })
  }, [hasInputs, lotPriceValue, auction, effectiveBranchId, euPortId, carType, importTaxType, eurUsdRate, rateLoading])

  const handleAuctionChange = (next: AuctionType) => {
    setAuction(next)
    setBranchId(null) // reset → effectiveBranchId picks first of new auction
    setRequireManualBranch(false)
  }

  const handleResolveUrl = async () => {
    const url = auctionUrl.trim()
    if (!url) return

    // IAAI is temporarily unavailable in link resolver flow.
    // Short-circuit before any API call to avoid unnecessary wait.
    if (/iaai\.com/i.test(url)) {
      setAuction('IAAI')
      setAuctionUrlStatus('error')
      setAuctionUrlMessage(t('calcAuctionUrlIaaiUnavailable'))
      return
    }

    setAuctionUrlStatus('loading')
    setAuctionUrlMessage(t('calcAuctionUrlLoading'))

    const result = await resolveAuctionLotUrl(url)

    if (!result.ok) {
      const isUnsupported = result.error?.toLowerCase().includes('unsupported')
      setAuctionUrlStatus('error')
      setAuctionUrlMessage(isUnsupported ? t('calcAuctionUrlUnsupported') : t('calcAuctionUrlError'))
      return
    }

    const d = result.data

    // Auto-fill form fields from resolved lot
    if (d.lotPrice > 0) setLotPrice(String(d.lotPrice))
    if (d.source === 'copart' || d.source === 'iaai') {
      const nextAuction: AuctionType = d.source === 'copart' ? 'Copart' : 'IAAI'
      setAuction(nextAuction)
      setBranchId(null)
    }
    if (d.matchedBranchId !== null) {
      setBranchId(d.matchedBranchId)
      setRequireManualBranch(false)
    } else if (d.locationCity || d.locationName) {
      // CF Worker doesn't match branches; do it client-side using city/name from API.
      const auctionGroup = d.source === 'copart' ? 'Copart' : 'IAAI'
      const needle = String(d.locationCity || d.locationName).toLowerCase().trim()
      const matched = BRANCHES.find(
        (b) => b.group === auctionGroup && b.name.toLowerCase() === needle,
      ) ?? BRANCHES.find(
        (b) => b.group === auctionGroup && b.name.toLowerCase().includes(needle),
      )
      if (matched) {
        setBranchId(matched.id)
        setRequireManualBranch(false)
      } else {
        setRequireManualBranch(true)
      }
    } else {
      setRequireManualBranch(true)
    }
    if (d.mappedCarType)       setCarType(d.mappedCarType)
    if (d.mappedImportTaxType) setImportTaxType(d.mappedImportTaxType)

    // Partial result (IAAI anti-bot blocked full data — auction type set, rest manual)
    if (result.partial) {
      setAuctionUrlStatus('warning')
      setAuctionUrlMessage(d.source === 'iaai' ? t('calcAuctionUrlIaaiPartial') : t('calcAuctionUrlPartial'))
      return
    }

    const title = [d.year, d.make, d.model].filter(Boolean).join(' ') || d.title || d.lotId

    // Re-check whether we ended up with a branch (server matched OR client matched above)
    const auctionGroup = d.source === 'copart' ? 'Copart' : 'IAAI'
    const needle       = String(d.locationCity || d.locationName || '').toLowerCase().trim()
    const clientMatchedBranch =
      d.matchedBranchId !== null ||
      (needle && BRANCHES.some(
        (b) => b.group === auctionGroup &&
          (b.name.toLowerCase() === needle || b.name.toLowerCase().includes(needle)),
      ))

    if (!clientMatchedBranch) {
      setAuctionUrlStatus('warning')
      setAuctionUrlMessage(t('calcAuctionUrlBranchMissing'))
    } else {
      setAuctionUrlStatus('success')
      setAuctionUrlMessage(t('calcAuctionUrlSuccess').replace('{title}', title))
    }
  }

  return (
    <main className="calculator-react-page">
      {/* Hero */}
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

          {/* ── Left: Form ── */}
          <article className="calculator-card calculator-card--form">
            <div className="calculator-card__head">
              <div className="calculator-kicker">{t('calcFormKicker')}</div>
              <h2>{t('calcFormTitle2')}</h2>
              <p>{t('calcFormDesc2')}</p>
            </div>

            <div className="calc-simple-list">

              {/* 0. Auction URL auto-fill */}
              <div className="calc-auction-url-row">
                <label htmlFor="auctionUrl">{t('calcAuctionUrlLabel')}</label>
                <div className="calc-auction-url-control">
                  <input
                    id="auctionUrl"
                    className="calc-input"
                    type="url"
                    placeholder={t('calcAuctionUrlPlaceholder')}
                    value={auctionUrl}
                    onChange={(e) => { setAuctionUrl(e.target.value); setAuctionUrlStatus('idle') }}
                    onKeyDown={(e) => { if (e.key === 'Enter') void handleResolveUrl() }}
                  />
                  <button
                    type="button"
                    className="calc-auction-url-button"
                    disabled={auctionUrlStatus === 'loading' || !auctionUrl.trim()}
                    onClick={() => void handleResolveUrl()}
                  >
                    {auctionUrlStatus === 'loading' ? '…' : t('calcAuctionUrlButton')}
                  </button>
                </div>
                {auctionUrlStatus !== 'idle' && auctionUrlStatus !== 'loading' && auctionUrlMessage && (
                  <div className={`calc-auction-url-message calc-auction-url-message--${auctionUrlStatus}`}>
                    {auctionUrlMessage}
                  </div>
                )}
              </div>

              {/* 1. Lot price */}
              <div className="calc-simple-row">
                <label htmlFor="lotPrice">{t('calcLabelPrice')}</label>
                <input
                  id="lotPrice"
                  className={`calc-input calc-input--price${!lotPrice ? ' calc-input--price-empty' : ''}`}
                  type="number"
                  min={0}
                  placeholder={t('calcPricePlaceholder')}
                  value={lotPrice}
                  onChange={(e) => setLotPrice(e.target.value)}
                />
              </div>

              {/* 2. Auction */}
              <div className="calc-simple-row">
                <label htmlFor="auction">{t('calcLabelAuction')}</label>
                <select
                  id="auction"
                  className="calc-select"
                  value={auction}
                  onChange={(e) => handleAuctionChange(e.target.value as AuctionType)}
                >
                  {AUCTION_OPTIONS.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* 3. Branch / city — searchable */}
              <div className="calc-simple-row">
                <label>{t('calcLabelCity')}</label>
                <BranchSelect
                  branches={filteredBranches}
                  value={effectiveBranchId}
                  onChange={(id) => { setBranchId(id); setRequireManualBranch(false) }}
                  placeholder={t('calcBranchPlaceholder')}
                  notFoundText={t('calcBranchNotFound')}
                />
              </div>

              {/* 4. EU Port */}
              <div className="calc-simple-row">
                <label htmlFor="euPort">{t('calcLabelEuPort')}</label>
                <select
                  id="euPort"
                  className="calc-select"
                  value={euPortId}
                  onChange={(e) => setEuPortId(e.target.value as EuPortId)}
                >
                  {EU_PORT_LIST.map((p) => (
                    <option key={p.id} value={p.id}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* 5. Car type */}
              <div className="calc-simple-row">
                <label htmlFor="carType">{t('calcLabelCarType')}</label>
                <select
                  id="carType"
                  className="calc-select"
                  value={carType}
                  onChange={(e) => setCarType(e.target.value as CarType)}
                >
                  {CAR_TYPE_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{t(o.labelKey)}</option>
                  ))}
                </select>
              </div>

              {/* 6. Import tax */}
              <div className="calc-simple-row">
                <label htmlFor="importTaxType">{t('calcLabelImportTax')}</label>
                <select
                  id="importTaxType"
                  className="calc-select"
                  value={importTaxType}
                  onChange={(e) => setImportTaxType(e.target.value as ImportTaxType)}
                >
                  {IMPORT_TAX_OPTIONS.map((o) => (
                    <option key={o.id} value={o.id}>{t(o.labelKey)}</option>
                  ))}
                </select>
              </div>

            </div>
          </article>

          {/* ── Right: Result ── */}
          <aside className="calculator-card calculator-card--result">
            <div className="calculator-total">
              <div className="calculator-kicker">{t('calcResultKicker2')}</div>
              <div className="calculator-total__row">
                <div className="calculator-total__value">
                  {result ? eur(result.totalEur) : '—'}
                </div>
              </div>
              <p className="calculator-total__caption">
                {!hasInputs
                  ? t('calcCaptionIdle2')
                  : result === null
                    ? t('calcRouteUnavailable2')
                    : t('calcCaptionResult')}
              </p>
            </div>

            {(result || showEmptyState) ? (
              <div className="calculator-groups">

                {/* Logistics */}
                <div className="calculator-group">
                  <div className="calculator-group__title">{t('calcGroupLogistics')}</div>
                  <div className="calc-row">
                    <span>{t('calcRowCarPrice2')}</span>
                    <strong>{result ? usd(result.lotPrice) : '—'}</strong>
                  </div>
                  <div className="calc-row">
                    <span>{t('calcRowAuctionFee')}</span>
                    <strong>{result ? usd(result.auctionFee) : '—'}</strong>
                  </div>
                  <div className="calc-row">
                    <span>{t('calcRowUsDelivery2')}</span>
                    <strong>{result ? usd(result.usDelivery) : '—'}</strong>
                  </div>
                  <div className="calc-row">
                    <span>{t('calcRowOceanDelivery')}</span>
                    <strong>{result ? usd(result.oceanDelivery) : '—'}</strong>
                  </div>
                </div>

                {/* Customs base — separating row between groups */}
                <div className="calc-customs-base">
                  <span>{t('calcRowCustomsBase')}</span>
                  <strong>{result ? usd(result.logisticsBase) : '—'}</strong>
                </div>

                {/* Customs */}
                <div className="calculator-group">
                  <div className="calculator-group__title">{t('calcGroupCustoms')}</div>
                  <div className="calc-row">
                    <span>{t('calcLabelImportTax')}{result ? ` (${Math.round(result.importTaxRate * 100)}%)` : ''}</span>
                    <strong>{result ? eur(result.importDutyEur) : '—'}</strong>
                  </div>
                  <div className="calc-row">
                    <span>{t('calcRowVat')}{result ? ` (${Math.round(result.vatRate * 100)}% · ${EU_PORTS[euPortId].name})` : ` · ${EU_PORTS[euPortId].name}`}</span>
                    <strong>{result ? eur(result.vatAmountEur) : '—'}</strong>
                  </div>
                  <div className="calc-row">
                    <span>{t('calcRowCustomsAgency')}</span>
                    <strong>{result ? eur(result.customsAgencyEur) : '—'}</strong>
                  </div>
                  <div className="calc-row">
                    <span>{t('calcRowBiddersFee2')}</span>
                    <strong>{result ? usd(result.bidBiddersFeeUsd) : '—'}</strong>
                  </div>
                  <div className="calc-row calc-row--total">
                    <span>{t('calcRowTotal')}</span>
                    <strong>{result ? eur(result.totalEur) : '—'}</strong>
                  </div>
                </div>

              </div>
            ) : null}
          </aside>

        </div>
      </section>

      {/* SEO block */}
      <section className="calc-seo-block">
        <div className="calc-seo-block__inner">
          <h2 className="calc-seo-block__title">{t('calcSeoTitle')}</h2>
          <p className="calc-seo-block__text">{t('calcSeoP1')}</p>
          <p className="calc-seo-block__text">{t('calcSeoP2')}</p>
          <div className="calc-faq">
            <h3 className="calc-faq__title">{t('calcFaqTitle')}</h3>
            {([
              ['calcFaqQ1', 'calcFaqA1'],
              ['calcFaqQ2', 'calcFaqA2'],
              ['calcFaqQ3', 'calcFaqA3'],
              ['calcFaqQ4', 'calcFaqA4'],
              ['calcFaqQ5', 'calcFaqA5'],
              ['calcFaqQ6', 'calcFaqA6'],
            ] as [MessageKey, MessageKey][]).map(([qKey, aKey]) => (
              <details key={qKey} className="calc-faq__item">
                <summary className="calc-faq__question">{t(qKey)}</summary>
                <p className="calc-faq__answer">{t(aKey)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
