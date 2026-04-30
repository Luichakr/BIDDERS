import React, { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, useParams } from 'react-router-dom'
import { allAuctionCards, getAuctionCardById } from '../../../features/auction/model/auctionData'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'
import { fetchInRouteCardById, fetchCatalogLotById } from '../../../features/auction/model/inRoute.service'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import './lot.css'

type LotMode = 'catalog' | 'transit' | 'in-stock'

function formatAddress(loc: string): React.ReactNode {
  // Split before postal code pattern like "05-850"
  const match = loc.match(/^(.+?),\s*(\d{2}-\d{3}.*)$/)
  if (match) return <>{match[1].trim()},<br />{match[2].trim()}</>
  return loc
}

function fmt(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function fmtEur(value: number): string {
  return `€${Math.round(value).toLocaleString('en-US')}`
}

function buildCountdownLabel(
  seconds: number,
  units: { d: string; h: string; m: string; s: string },
): string {
  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  const parts: string[] = []
  if (d > 0) parts.push(`${d}${units.d}`)
  parts.push(`${String(h).padStart(2, '0')}${units.h}`)
  parts.push(`${String(m).padStart(2, '0')}${units.m}`)
  parts.push(`${String(s).padStart(2, '0')}${units.s}`)
  return parts.join(' ')
}

export function LotPage() {
  const { locale, t } = useI18n()
  const lp = (path: string) => localizedPath(locale, path)
  const { lotId } = useParams<{ lotId: string }>()
  const fallbackCar = getAuctionCardById(lotId)
  const [liveCar, setLiveCar] = useState<typeof fallbackCar>(undefined)
  const [liveLoadState, setLiveLoadState] = useState<'idle' | 'loading' | 'loaded' | 'failed'>('idle')
  const isNumericLotId = /^\d+$/.test(lotId ?? '')

  useEffect(() => {
    if (!lotId || !isNumericLotId) {
      setLiveCar(undefined)
      setLiveLoadState('idle')
      return
    }

    let mounted = true
    setLiveLoadState('loading')

    const load = async () => {
      try {
        // Try lots.json first (Copart/IAAI parser data)
        const fromJson = await fetchCatalogLotById(lotId)
        if (fromJson) {
          if (!mounted) return
          setLiveCar(fromJson)
          setLiveLoadState('loaded')
          return
        }
        // Fallback: legacy in-route API
        const response = await fetchInRouteCardById(lotId)
        if (!mounted) return
        setLiveCar(response ?? undefined)
        setLiveLoadState(response ? 'loaded' : 'failed')
      } catch {
        if (!mounted) return
        setLiveCar(undefined)
        setLiveLoadState('failed')
      }
    }

    void load()

    return () => {
      mounted = false
    }
  }, [isNumericLotId, lotId])

  const car = liveCar ?? fallbackCar
  const mode: LotMode = (car?.status as LotMode) ?? 'catalog'

  // Translate status key strings returned by inRoute.service (e.g. 'statusDamageUnknown', 'statusDocsCustom|statusSold')
  const ts = (key: string) => key.split('|').map(k => t(k.trim())).join(' · ')

  const [galleryIndex, setGalleryIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [watching, setWatching] = useState(false)
  const [moreSpecsOpen, setMoreSpecsOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [priceCalcOpen, setPriceCalcOpen] = useState(true)
  const [customsCalcOpen, setCustomsCalcOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  const [bidValue, setBidValue] = useState(car ? car.currentBid + 100 : 0)
  const [leaseDownPct, setLeaseDownPct] = useState(30)
  const [leaseMonths, setLeaseMonths] = useState(36)

  useEffect(() => {
    if (!car) return
    setBidValue(car.currentBid + 100)
  }, [car])

  // Buy Now
  const lotBuyNow = (car as AuctionCardData & { buyNow?: number | null; buyNowLabel?: string | null })?.buyNow ?? null
  const lotBuyNowLabel = (car as AuctionCardData & { buyNowLabel?: string | null })?.buyNowLabel ?? (lotBuyNow ? `$${Math.round(lotBuyNow).toLocaleString('en-US')}` : null)

  // Таймер — считаем от auctionEndMs или auctionDateLabel
  const auctionEndMs = (car as AuctionCardData & { auctionEndMs?: number | null })?.auctionEndMs ?? null
  const [countdownSeconds, setCountdownSeconds] = useState(() => {
    if (auctionEndMs) return Math.max(0, Math.floor((auctionEndMs - Date.now()) / 1000))
    return 0
  })

  useEffect(() => {
    if (mode !== 'catalog') return
    if (!auctionEndMs) return
    const update = () => setCountdownSeconds(Math.max(0, Math.floor((auctionEndMs - Date.now()) / 1000)))
    update()
    const timer = window.setInterval(update, 1000)
    return () => window.clearInterval(timer)
  }, [mode, auctionEndMs])

  const auctionEndLabel = useMemo(() => {
    if (!auctionEndMs) return car?.auctionDateLabel ?? '—'
    const d = new Date(auctionEndMs)
    const localeCode = locale === 'pl' ? 'pl-PL' : 'en-US'
    return d.toLocaleString(localeCode, { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })
  }, [auctionEndMs, locale, car?.auctionDateLabel])

  const images = useMemo(() => {
    if (!car) return []
    const all = car.images.length > 0 ? car.images : [car.image]
    return all.slice(0, 12)
  }, [car])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setLightboxOpen(false); return }
      const total = images.length
      if (total <= 1) return
      if (event.key === 'ArrowLeft') setGalleryIndex((prev) => (prev - 1 + total) % total)
      if (event.key === 'ArrowRight') setGalleryIndex((prev) => (prev + 1) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length])

  const similarCars = useMemo(() => {
    if (!car) return []
    return allAuctionCards
      .filter((item) => item.id !== car.id && item.status === car.status)
      .slice(0, 5)
  }, [car])

  const subtotal = bidValue + 520 + 430 + 995 + 450 + selectedServices.length * 120
  const subtotalEur = subtotal * 0.91
  const customsTax = subtotalEur * 0.1
  const vat = (subtotalEur + customsTax) * 0.21
  const broker = 250
  const customsTotal = customsTax + vat + broker
  const finalTotal = subtotalEur + customsTotal

  if (!car && isNumericLotId && liveLoadState === 'loading') {
    return (
      <main className="lot-page lot-page--skeleton">
        {/* breadcrumb skeleton */}
        <div className="lot-breadcrumb">
          <div className="lot-breadcrumb__inner">
            <div className="lsk lsk--w80" />
            <span className="lot-breadcrumb__sep">›</span>
            <div className="lsk lsk--w120" />
            <span className="lot-breadcrumb__sep">›</span>
            <div className="lsk lsk--w200" />
          </div>
        </div>

        {/* title bar skeleton */}
        <section className="lot-title-bar">
          <div className="lot-title-bar__inner">
            <div className="lot-title-bar__main">
              <div className="lsk lsk--title" />
              <div className="lsk-meta">
                <div className="lsk lsk--w120" />
                <div className="lsk lsk--w80" />
                <div className="lsk lsk--pill" />
              </div>
            </div>
            <div className="lot-title-bar__summary">
              {[1,2,3,4].map(i => (
                <div className="lot-summary-item" key={i}>
                  <div className="lsk lsk--w60" />
                  <div className="lsk lsk--w100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* main grid skeleton */}
        <section className="lot-main">
          <div className="lot-main__inner">
            {/* gallery */}
            <div className="lot-gallery">
              <div className="lsk lsk--photo" />
              <div className="lsk-thumbs">
                {[1,2,3,4,5].map(i => <div className="lsk lsk--thumb" key={i} />)}
              </div>
            </div>
            {/* specs */}
            <div className="lot-specs">
              <div className="lsk-card">
                <div className="lsk lsk--w160 lsk--heading" />
                {[1,2,3,4,5,6].map(i => (
                  <div className="lsk-row" key={i}>
                    <div className="lsk lsk--w100" />
                    <div className="lsk lsk--w140" />
                  </div>
                ))}
              </div>
              <div className="lsk-card" style={{ marginTop: 16 }}>
                <div className="lsk lsk--w160 lsk--heading" />
                {[1,2,3,4].map(i => (
                  <div className="lsk-row" key={i}>
                    <div className="lsk lsk--w100" />
                    <div className="lsk lsk--w120" />
                  </div>
                ))}
              </div>
            </div>
            {/* sidebar */}
            <aside className="lot-sidebar">
              <div className="lsk-card lsk-card--hero">
                <div className="lsk lsk--w80" />
                <div className="lsk lsk--price" />
                <div className="lsk lsk--w160" />
                <div className="lsk lsk--btn" style={{ marginTop: 24 }} />
                <div className="lsk lsk--btn lsk--btn-outline" style={{ marginTop: 10 }} />
              </div>
            </aside>
          </div>
        </section>
      </main>
    )
  }

  if (!car) {
    return (
      <main className="lot-page">
        <section className="lot-empty">
          <h2>{t('lotNotFound')}</h2>
          <p>{t('lotNotFoundDesc')}</p>
          <Link to={lp(routePaths.catalog)} className="lot-empty__btn">{t('lotNotFoundBtn')}</Link>
        </section>
      </main>
    )
  }

  const toggleService = (id: string) => {
    setSelectedServices((prev) => prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id])
  }

  const adjustBid = (delta: number) => {
    setBidValue((prev) => Math.max(car.currentBid, prev + delta))
  }

  const modeLabel = mode === 'transit' ? t('lotModeTransit') : mode === 'in-stock' ? t('lotModeInStock') : t('lotModeCatalog')
  const statusPill = mode === 'transit' ? t('lotStatusTransit') : mode === 'in-stock' ? t('lotStatusInStock') : t('lotStatusAtAuction')
  const statusPillClass = mode === 'transit' ? 'lot-status-pill transit' : mode === 'in-stock' ? 'lot-status-pill instock' : 'lot-status-pill auction'

  // Leasing placeholder (flat, no real formula)
  const leasePrice = car.currentBid
  const leaseDown = Math.round(leasePrice * (leaseDownPct / 100))
  const leaseFinanced = leasePrice - leaseDown
  const leaseMonthly = Math.round((leaseFinanced / leaseMonths) * 1.08)

  const FAQ_ITEMS = [
    { q: t('lotFaq1Q'), a: t('lotFaq1A') },
    { q: t('lotFaq2Q'), a: t('lotFaq2A') },
    { q: t('lotFaq3Q'), a: t('lotFaq3A') },
    { q: t('lotFaq4Q'), a: t('lotFaq4A') },
  ]

  const PURCHASE_STEPS = [
    { n: 1, title: t('lotStep1Title'), text: t('lotStep1Text') },
    { n: 2, title: t('lotStep2Title'), text: t('lotStep2Text') },
    { n: 3, title: t('lotStep3Title'), text: t('lotStep3Text') },
    { n: 4, title: t('lotStep4Title'), text: t('lotStep4Text') },
  ]

  const timerUnits = {
    d: t('lotTimerDays'),
    h: t('lotTimerHours'),
    m: t('lotTimerMinutes'),
    s: t('lotTimerSeconds'),
  }

  return (
    <>
    <main className="lot-page">
      <Seo
        title={car.title ? `${car.title} | BIDDERS` : t('seoLotTitle')}
        description={t('seoLotDescription')}
        path={`${routePaths.lotDetail.replace(':lotId', lotId ?? '')}`}
      />
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: car.title,
            image: images,
            sku: car.id,
            description: `${car.title}, VIN ${car.vin}, ${car.mileageLabel}, ${car.engine}. ${statusPill}. Location: ${car.location}.`,
            brand: { '@type': 'Brand', name: car.make },
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: car.currentBid,
              availability: mode === 'in-stock' ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
              itemCondition: 'https://schema.org/UsedCondition',
            },
          }),
        }}
      />

      {/* Breadcrumb */}
      <div className="lot-breadcrumb">
        <div className="lot-breadcrumb__inner">
          <Link to={lp(routePaths.home)}>{t('navHome')}</Link>
          <span className="lot-breadcrumb__sep">›</span>
          <Link to={lp(mode === 'transit' ? routePaths.transit : mode === 'in-stock' ? routePaths.inStock : routePaths.catalog)}>{modeLabel}</Link>
          <span className="lot-breadcrumb__sep">›</span>
          <span className="lot-breadcrumb__current">{car.title}</span>
          <Link
            to={lp(mode === 'transit' ? routePaths.transit : mode === 'in-stock' ? routePaths.inStock : routePaths.catalog)}
            className="lot-back-btn"
          >
            ← {modeLabel}
          </Link>
        </div>
      </div>

      {/* Title bar */}
      <section className="lot-title-bar">
        <div className="lot-title-bar__inner">
          <div className="lot-title-bar__main">
            <h1 className="lot-title">{car.title}</h1>
            <div className="lot-title__meta">
              <span className="lot-vin">VIN <strong>{car.vin}</strong></span>
              <span className="lot-lot-num">Lot: {car.id}</span>
              <span className={statusPillClass}>{statusPill}</span>
            </div>
          </div>
          <div className="lot-title-bar__summary">
            <div className="lot-summary-item">
              <span className="lot-summary-item__label">{t('lotLabelLocation')}</span>
              <span className="lot-summary-item__value">{formatAddress(car.location)}</span>
            </div>
            <div className="lot-summary-item">
              <span className="lot-summary-item__label">{mode === 'in-stock' ? t('lotLabelPickupPoint') : t('lotLabelDispatchPort')}</span>
              <span className="lot-summary-item__value">{mode === 'in-stock' ? t('lotPickupCity') : t('lotDispatchCountry')}</span>
            </div>
            <div className="lot-summary-item">
              <span className="lot-summary-item__label">{t('lotLabelStatus')}</span>
              <span className="lot-summary-item__value">{statusPill}</span>
            </div>
            <div className="lot-summary-item">
              <span className="lot-summary-item__label">{mode === 'catalog' ? t('lotLabelAuctionDate') : t('lotLabelEstDelivery')}</span>
              <span className="lot-summary-item__value">{mode === 'catalog' ? car.auctionDateLabel : t('lotDeliveryTbd')}</span>
            </div>
          </div>
          <button className={watching ? 'lot-watch-btn active' : 'lot-watch-btn'} type="button" onClick={() => setWatching((prev) => !prev)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            {watching ? t('lotWatching') : t('lotWatch')}
          </button>
        </div>
      </section>

      {/* Main grid */}
      <section className="lot-main">
        <div className="lot-main__inner">
          {/* Gallery column */}
          <div className="lot-gallery">
            <div className="lot-gallery__main">
              <img
                src={images[galleryIndex]}
                alt={car.title}
                className="lot-gallery__img"
                style={{ cursor: 'zoom-in' }}
                onClick={() => setLightboxOpen(true)}
              />
              {images.length > 1 ? (
                <>
                  <button className="lot-gallery__arrow prev" type="button" onClick={() => setGalleryIndex((prev) => (prev - 1 + images.length) % images.length)} aria-label={t('lotGalleryPrev')}>‹</button>
                  <button className="lot-gallery__arrow next" type="button" onClick={() => setGalleryIndex((prev) => (prev + 1) % images.length)} aria-label={t('lotGalleryNext')}>›</button>
                </>
              ) : null}
              <div className="lot-gallery__counter">{galleryIndex + 1} / {images.length}</div>
              <div className="lot-gallery__live-badge">
                <span className="lot-gallery__live-dot"></span>
                {mode === 'catalog' ? t('lotLiveBadgeAuction') : mode === 'transit' ? t('lotLiveBadgeTransit') : t('lotLiveBadgeReady')}
              </div>
            </div>

            <div className="lot-gallery__thumbs">
              {images.map((src, index) => (
                <button key={`${src}-${index}`} type="button" className={galleryIndex === index ? 'lot-thumb active' : 'lot-thumb'} onClick={() => setGalleryIndex(index)}>
                  <img src={src} alt={`${car.title} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Specs column */}
          <div className="lot-specs">
            <div className="lot-spec-card">
              <h2 className="lot-spec-card__title">{t('lotSpecsMainTitle')}</h2>
              <dl className="lot-spec-list">
                <div className="lot-spec-row"><dt>Lot</dt><dd>{car.id}</dd></div>
                <div className="lot-spec-row">
                  <dt>VIN</dt>
                  <dd>
                    {car.vin ? (
                      <>
                        <span className="lot-spec-mono">{car.vin}</span>
                        <button className="lot-copy-btn" type="button" onClick={() => navigator.clipboard.writeText(car.vin)}>{t('lotCopyVin')}</button>
                      </>
                    ) : (
                      <span className="lot-spec-muted">—</span>
                    )}
                  </dd>
                </div>
                <div className="lot-spec-row"><dt>{t('lotLabelSeller')}</dt><dd><span className="lot-dot"></span>{car.seller}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelDocuments')}</dt><dd className="lot-spec-ok">{ts(car.titleStatus ?? '')}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelPrimaryDamage')}</dt><dd className="lot-spec-warn">{ts(car.damage)}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelSecondaryDamage')}</dt><dd>—</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelMileage')}</dt><dd>{car.mileageLabel}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelKeys')}</dt><dd>{ts(car.keys ?? '')}</dd></div>
              </dl>
            </div>

            <div className="lot-spec-card">
              <h2 className="lot-spec-card__title">{t('lotSpecsTechTitle')}</h2>
              <dl className="lot-spec-list">
                <div className="lot-spec-row"><dt>{t('lotLabelBodyType')}</dt><dd>{car.bodyStyle}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelColor')}</dt><dd>{car.color}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelEngine')}</dt><dd>{car.engine}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelTransmission')}</dt><dd>{car.transmission}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelFuel')}</dt><dd>{car.fuel}</dd></div>
                <div className="lot-spec-row"><dt>{t('lotLabelDrive')}</dt><dd>{car.drive}</dd></div>

                {moreSpecsOpen ? (
                  <>
                    <div className="lot-spec-row"><dt>{t('lotLabelStartCode')}</dt><dd className="lot-spec-ok">{t('lotLabelStartCodeValue')}</dd></div>
                    <div className="lot-spec-row"><dt>{t('lotLabelAcvRetail')}</dt><dd>{car.estimateLabel}</dd></div>
                    <div className="lot-spec-row"><dt>{t('lotLabelBodyExtended')}</dt><dd>{car.bodyStyle} / 4-door</dd></div>
                    <div className="lot-spec-row"><dt>{t('lotLabelSaleStatus')}</dt><dd className="lot-spec-process">{statusPill}</dd></div>
                  </>
                ) : null}
              </dl>

              <button className="lot-show-more" type="button" onClick={() => setMoreSpecsOpen((prev) => !prev)}>
                {moreSpecsOpen ? t('lotShowLess') : t('lotShowMore')}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: moreSpecsOpen ? 'rotate(180deg)' : 'none' }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {car.sourceUrl ? (
                <a href={car.sourceUrl} target="_blank" rel="noreferrer" className="lot-source-link">
                  {t('lotSourceLink')} {car.auction}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3h6v6M9 3L3 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ) : null}
            </div>

            {mode === 'catalog' ? (
              <div className="lot-spec-card">
                <h2 className="lot-spec-card__title">{t('lotServicesTitle')}</h2>
                <div className="lot-services">
                  {[
                    { id: 's11', num: '(11)', name: t('lotService11'), price: 0 },
                    { id: 's12', num: '(12)', name: t('lotService12'), price: 0 },
                    { id: 's13', num: '(13)', name: t('lotService13'), price: 120 },
                    { id: 's14', num: '(14)', name: t('lotService14'), price: 240 },
                  ].map((service) => {
                    const checked = selectedServices.includes(service.id)
                    return (
                      <label className="lot-service-row" key={service.id}>
                        <span className="lot-service-num">{service.num}</span>
                        <input type="checkbox" checked={checked} onChange={() => toggleService(service.id)} />
                        <span className="lot-service-cb" aria-hidden="true"></span>
                        <span className="lot-service-name">{service.name}</span>
                        <span className="lot-service-price">{service.price > 0 ? fmt(service.price) : '$0'}</span>
                      </label>
                    )
                  })}
                </div>
                <p className="lot-services-note">{t('lotServicesNote')}</p>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="lot-sidebar">
            {/* === MODE: CATALOG (auction bid + delivery calculator) === */}
            {mode === 'catalog' ? (
              <>
                <div className="lot-sb-card lot-sb-card--hero">
                  <div className="lot-sb-kicker">{t('lotSbCurrentBid')}</div>
                  <div className="lot-sb-price">{fmt(car.currentBid)}</div>

                  <div className="lot-bid-block">
                    <div className="lot-bid-label">{t('lotSbMaxBid')}</div>
                    <div className="lot-bid-input-row">
                      <button className="lot-bid-adj" type="button" onClick={() => adjustBid(-100)} aria-label={t('lotSbDecrease')}>−</button>
                      <input className="lot-bid-input" value={fmt(bidValue)} readOnly />
                      <button className="lot-bid-adj" type="button" onClick={() => adjustBid(100)} aria-label={t('lotSbIncrease')}>+</button>
                    </div>
                  </div>

                  <button className="lot-cta-primary" type="button">{t('lotSbBidNow')}</button>
                  <a href="#faq" className="lot-cta-link">{t('lotSbHowToBid')}</a>

                  <div className="lot-timer">
                    <span className="lot-timer__label">{t('lotSbTimeLeft')}</span>
                    <div className={countdownSeconds <= 0 ? 'lot-timer__value expired' : 'lot-timer__value'}>
                      {countdownSeconds <= 0 ? t('lotSbAuctionEnded') : buildCountdownLabel(countdownSeconds, timerUnits)}
                    </div>
                    <span className="lot-timer__end">{t('lotSbTimerUntil')} <strong>{auctionEndLabel}</strong></span>
                  </div>
                </div>

                {lotBuyNow != null && lotBuyNow > 0 && (
                  <div className="lot-sb-card lot-buynow-block">
                    <div className="lot-buynow-label">
                      <span className="lot-buynow-tag">KUP TERAZ</span>
                      <span className="lot-buynow-sub">{t('lotBuyNowDesc') || 'Natychmiastowy zakup bez licytacji'}</span>
                    </div>
                    <div className="lot-buynow-price">{lotBuyNowLabel}</div>
                    <button className="lot-cta-buynow" type="button">{t('lotBuyNowBtn') || 'Kup teraz'}</button>
                  </div>
                )}

                <div className={priceCalcOpen ? 'lot-sb-card lot-sb-accordion open' : 'lot-sb-card lot-sb-accordion'}>
                  <button className="lot-accordion-head" type="button" onClick={() => setPriceCalcOpen((prev) => !prev)}>
                    <span>{t('lotSbCalcTitle')}</span>
                    <span className="lot-accordion-arrow">⌄</span>
                  </button>
                  {priceCalcOpen ? (
                    <div className="lot-accordion-body">
                      <div className="lot-calc-row"><span>{t('lotCalcBid')}</span><strong>{fmt(bidValue)}</strong></div>
                      <div className="lot-calc-row"><span>{t('lotCalcAuctionFee')}</span><strong>$520</strong></div>
                      <div className="lot-calc-row"><span>{t('lotCalcTransport')}</span><strong>$430</strong></div>
                      <div className="lot-calc-row"><span>{t('lotCalcShipping')}</span><strong>$995</strong></div>
                      <div className="lot-calc-row"><span>{t('lotCalcDocs')}</span><strong>$450</strong></div>
                      <div className="lot-calc-sub"><span>{t('lotCalcSubtotal')}</span><span>{fmt(subtotal)}</span></div>
                      <p className="lot-calc-note">{t('lotCalcNote')}</p>
                    </div>
                  ) : null}
                </div>

                <div className={customsCalcOpen ? 'lot-sb-card lot-sb-accordion open' : 'lot-sb-card lot-sb-accordion'}>
                  <button className="lot-accordion-head" type="button" onClick={() => setCustomsCalcOpen((prev) => !prev)}>
                    <span>{t('lotCustomsCalcTitle')}</span>
                    <span className="lot-accordion-arrow">⌄</span>
                  </button>
                  {customsCalcOpen ? (
                    <div className="lot-accordion-body">
                      <div className="lot-calc-row"><span>{t('lotCustomsDuty')}</span><strong>{fmtEur(customsTax)}</strong></div>
                      <div className="lot-calc-row"><span>{t('lotCustomsVat')}</span><strong>{fmtEur(vat)}</strong></div>
                      <div className="lot-calc-row"><span>{t('lotCustomsBroker')}</span><strong>{fmtEur(broker)}</strong></div>
                      <div className="lot-calc-sub"><span>{t('lotCustomsTotal')}</span><span>{fmtEur(customsTotal)}</span></div>
                      <div className="lot-calc-sub final"><span>{t('lotCustomsFinal')}</span><span>{fmtEur(finalTotal)}</span></div>
                      <p className="lot-calc-note">{t('lotCustomsNote')}</p>
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}

            {/* === MODE: TRANSIT (fixed price + ETA + contact CTA) === */}
            {mode === 'transit' ? (
              <>
                <div className="lot-sb-card lot-sb-card--hero">
                  <div className="lot-sb-kicker">{t('lotSbFinalPrice')}</div>
                  <div className="lot-sb-price">{car.currentBidLabel || fmt(car.currentBid)}</div>
                  <div className="lot-sb-estimate">{t('lotSbTurnkeyFixed')}</div>

                  <ul className="lot-sb-facts">
                    <li><span>{t('lotLabelSeller')}</span><strong>BIDDERS</strong></li>
                    <li><span>{t('lotSbFactDelivery')}</span><strong>{t('lotSbFactDeliveryValue')}</strong></li>
                    <li><span>{t('lotLabelLocation')}</span><strong>{formatAddress(car.location)}</strong></li>
                  </ul>

                  <button className="lot-cta-primary" type="button">{t('lotSbContact')}</button>
                  <a href="tel:+48784890644" className="lot-cta-secondary">+48 784 890 644</a>
                </div>

                <div className="lot-sb-card">
                  <h3 className="lot-sb-card__title">{t('lotSbWhatsIncluded')}</h3>
                  <ul className="lot-sb-list">
                    <li>{t('lotSbIncluded1')}</li>
                    <li>{t('lotSbIncluded2')}</li>
                    <li>{t('lotSbIncluded3')}</li>
                    <li>{t('lotSbIncluded4')}</li>
                    <li>{t('lotSbIncluded5')}</li>
                  </ul>
                </div>
              </>
            ) : null}

            {/* === MODE: IN-STOCK (fixed price + leasing calc placeholder) === */}
            {mode === 'in-stock' ? (
              <>
                <div className="lot-sb-card lot-sb-card--hero">
                  <div className="lot-sb-kicker">{t('lotSbPriceKicker')}</div>
                  <div className="lot-sb-price">{car.currentBidLabel || fmt(car.currentBid)}</div>
                  <div className="lot-sb-estimate">{t('lotSbReadyLviv')}</div>

                  <ul className="lot-sb-facts">
                    <li><span>{t('lotLabelSeller')}</span><strong>CULT CARS</strong></li>
                    <li><span>{t('lotLabelDocuments')}</span><strong>{ts(car.titleStatus ?? '')}</strong></li>
                    <li><span>{t('lotSbFactCert')}</span><strong>{t('lotSbFactCertValue')}</strong></li>
                  </ul>

                  <button className="lot-cta-primary" type="button">{t('lotSbBuyNow')}</button>
                  <button className="lot-cta-secondary" type="button">{t('lotSbScheduleView')}</button>
                </div>

                <div className="lot-sb-card lot-sb-lease">
                  <div className="lot-sb-kicker">{t('lotSbLeaseCalc')}</div>
                  <h3 className="lot-sb-card__title">{t('lotSbMonthlyPayment')}</h3>
                  <div className="lot-lease-monthly">{fmt(leaseMonthly)}<span>{t('lotSbPerMonth')}</span></div>

                  <div className="lot-lease-row">
                    <label>{t('lotSbDownPayment')} <strong>{leaseDownPct}%</strong> <span>({fmt(leaseDown)})</span></label>
                    <input
                      type="range"
                      min={10}
                      max={60}
                      step={5}
                      value={leaseDownPct}
                      onChange={(event) => setLeaseDownPct(Number(event.target.value))}
                    />
                  </div>

                  <div className="lot-lease-row">
                    <label>{t('lotSbLeaseTerm')} <strong>{leaseMonths} {t('lotSbLeaseMonths')}</strong></label>
                    <div className="lot-lease-chips">
                      {[24, 36, 48, 60].map((m) => (
                        <button
                          key={m}
                          type="button"
                          className={leaseMonths === m ? 'lot-lease-chip active' : 'lot-lease-chip'}
                          onClick={() => setLeaseMonths(m)}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="lot-lease-note">{t('lotSbLeaseNote')}</p>
                </div>
              </>
            ) : null}
          </aside>
        </div>
      </section>

      {/* Description */}
      <section className="lot-section">
        <div className="lot-section__inner">
          <header className="lot-section__head">
            <h2>{t('lotDescTitle')}</h2>
            <p>{t('lotDescSubtitle')}</p>
          </header>
          <div className="lot-desc-grid">
            <div className="lot-desc-item"><dt>{t('lotLabelMake')}</dt><dd>{car.make}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelModel')}</dt><dd>{car.model}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelYear')}</dt><dd>{car.year}</dd></div>
            <div className="lot-desc-item"><dt>VIN</dt><dd className="lot-desc-mono">{car.vin}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelPrice')}</dt><dd>{car.currentBidLabel || fmt(car.currentBid)}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelMileage')}</dt><dd>{car.mileageLabel}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelStatus')}</dt><dd>{statusPill}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelLocation')}</dt><dd>{car.location}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelSeller')}</dt><dd>{car.seller}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelBodyType')}</dt><dd>{car.bodyStyle}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelColor')}</dt><dd>{car.color}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelEngine')}</dt><dd>{car.engine}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelTransmission')}</dt><dd>{car.transmission}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelFuel')}</dt><dd>{car.fuel}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelDrive')}</dt><dd>{car.drive}</dd></div>
            <div className="lot-desc-item"><dt>{t('lotLabelDocuments')}</dt><dd>{ts(car.titleStatus ?? '')}</dd></div>
          </div>
        </div>
      </section>

      {/* Important-to-know block */}
      <section className="lot-section">
        <div className="lot-section__inner">
          <header className="lot-section__head">
            <h2>{t('lotKnowTitle')} {car.title}</h2>
            <p>{t('lotKnowSubtitle')}</p>
          </header>
          <div className="lot-know-grid">
            <article className="lot-know-card">
              <div className="lot-know-card__icon">📝</div>
              <h3>{t('lotKnowOverviewTitle')}</h3>
              <p>
                {car.title} — {t('lotKnowOverviewStatus')} <strong>«{statusPill}»</strong>. {t('lotKnowOverviewLoc')} {car.location}.{' '}
                {t('lotKnowOverviewSpecs')} {car.engine.toLowerCase()}, {car.transmission.toLowerCase()}, {car.drive}. {t('lotKnowOverviewMileage')} {car.mileageLabel}.
              </p>
              <p>
                {t('lotKnowPriceFrom')} {car.currentBidLabel || fmt(car.currentBid)}. {t('lotKnowPriceEnd')}
              </p>
            </article>
            <article className="lot-know-card">
              <div className="lot-know-card__icon">🚀</div>
              <h3>{t('lotKnowCheckTitle')}</h3>
              <ul>
                <li>{t('lotKnowCheckDamage')} <strong>{ts(car.damage)}</strong></li>
                <li>{t('lotKnowCheckDocs')} <strong>{ts(car.titleStatus ?? '')}</strong></li>
                <li>{t('lotKnowCheckBudget')} {car.currentBidLabel || fmt(car.currentBid)} {t('lotKnowCheckBudgetSuffix')}</li>
                <li>{t('lotKnowCheckAgreement')}</li>
              </ul>
              <div className="lot-know-chips">
                <span className="lot-know-chip">{t('lotKnowChip1')}</span>
                <span className="lot-know-chip">{t('lotKnowChip2')}</span>
                <span className="lot-know-chip">{t('lotKnowChip3')}</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Similar lots */}
      {similarCars.length > 0 ? (
        <section className="lot-section">
          <div className="lot-section__inner">
            <header className="lot-section__head">
              <h2>
                {t('lotSimilarTitle')}{' '}
                {mode === 'transit' ? t('lotSimilarTitleTransit') : mode === 'in-stock' ? t('lotSimilarTitleInStock') : t('lotSimilarTitleCatalog')}
              </h2>
              <p>{t('lotSimilarSubtitle')}</p>
            </header>
            <div className="lot-similar">
              {similarCars.map((item) => (
                <Link to={lp(`lots/${item.id}`)} key={item.id} className="lot-similar-card">
                  <div className="lot-similar-card__photo">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="lot-similar-card__body">
                    <h3>{item.title}</h3>
                    <div className="lot-similar-card__vin">VIN {item.vin.slice(0, 10)}…</div>
                    <div className="lot-similar-card__meta">
                      <span>{t('lotSimilarPriceLabel')} <strong>{item.currentBidLabel || fmt(item.currentBid)}</strong></span>
                      <span>{t('lotSimilarMileageLabel')} <strong>{item.mileageLabel}</strong></span>
                      <span>{t('lotSimilarStatusLabel')} <strong>{mode === 'transit' ? t('lotStatusTransit') : mode === 'in-stock' ? t('lotStatusInStock') : t('lotStatusAtAuction')}</strong></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="lot-similar-links">
              <Link to={lp(mode === 'transit' ? routePaths.transit : mode === 'in-stock' ? routePaths.inStock : routePaths.catalog)} className="lot-similar-link">
                {mode === 'transit' ? t('lotSimilarAllTransit') : mode === 'in-stock' ? t('lotSimilarAllInStock') : t('lotSimilarAllCatalog')}
              </Link>
              <Link to={lp(routePaths.catalog)} className="lot-similar-link">{t('lotSimilarLinkCatalog')}</Link>
              <Link to={lp(routePaths.calculator)} className="lot-similar-link">{t('lotSimilarLinkCar')}</Link>
              <Link to={lp(routePaths.calculator)} className="lot-similar-link">{t('lotSimilarLinkLogistics')}</Link>
              <Link to={lp(routePaths.blog)} className="lot-similar-link">{t('lotSimilarLinkBlog')}</Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="lot-section" id="faq">
        <div className="lot-section__inner">
          <header className="lot-section__head">
            <h2>{t('lotFaqTitle')} {car.title}</h2>
            <p>{t('lotFaqSubtitle')}</p>
          </header>
          <div className="lot-faq">
            {FAQ_ITEMS.map((item, index) => (
              <div key={item.q} className={faqOpen === index ? 'lot-faq-item open' : 'lot-faq-item'}>
                <button
                  className="lot-faq-q"
                  type="button"
                  onClick={() => setFaqOpen((prev) => (prev === index ? null : index))}
                  aria-expanded={faqOpen === index}
                >
                  <span>{item.q}</span>
                  <span className="lot-faq-ico">⌄</span>
                </button>
                {faqOpen === index ? (
                  <div className="lot-faq-a"><p>{item.a}</p></div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="lot-section">
        <div className="lot-section__inner">
          <header className="lot-section__head">
            <h2>{t('lotStepsTitle')}</h2>
            <p>{t('lotStepsSubtitle')}</p>
          </header>
          <div className="lot-steps">
            {PURCHASE_STEPS.map((step) => (
              <article className="lot-step" key={step.n}>
                <div className="lot-step__num">{step.n}</div>
                <h3 className="lot-step__title">{step.title}</h3>
                <p className="lot-step__text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Summary cards (Status + Budget) */}
      <section className="lot-section">
        <div className="lot-section__inner">
          <header className="lot-section__head">
            <h2>{t('lotSummaryTitle')} {car.title}</h2>
            <p>{t('lotSummarySubtitle')}</p>
          </header>
          <div className="lot-summary-grid">
            <article className="lot-summary-card">
              <div className="lot-summary-card__icon">🛈</div>
              <h3>{t('lotSummaryStatusTitle')}</h3>
              <p>
                {car.title} {t('lotSummaryStatusP1')} <strong>«{statusPill}»</strong>. {t('lotSummaryStatusP2')}
              </p>
              <p className="lot-summary-card__facts">
                {t('lotSummaryStatusFacts')} <strong>{ts(car.titleStatus ?? '')}</strong>, {t('lotSummaryStatusFactsDmg')} <strong>{ts(car.damage)}</strong>, {t('lotSummaryStatusFactsLoc')} <strong>{car.location}</strong>.
              </p>
              <p>
                {t('lotSummaryStatusP3')}
              </p>
            </article>

            <article className="lot-summary-card lot-summary-card--accent">
              <div className="lot-summary-card__icon">💼</div>
              <h3>{t('lotSummaryBudgetTitle')}</h3>
              <p>{t('lotSummaryBudgetLead')}</p>
              <dl className="lot-budget">
                <div className="lot-budget-row"><dt>{t('lotBudgetCurrentPrice')}</dt><dd>{car.currentBidLabel || fmt(car.currentBid)}</dd></div>
                <div className="lot-budget-row"><dt>{t('lotBudgetPrep')}</dt><dd>{t('lotBudgetPrepValue')}</dd></div>
                <div className="lot-budget-row"><dt>{t('lotBudgetCert')}</dt><dd>{t('lotBudgetCertValue')}</dd></div>
                <div className="lot-budget-row lot-budget-row--total"><dt>{t('lotBudgetService')}</dt><dd>$450</dd></div>
              </dl>
              <div className="lot-summary-card__actions">
                <Link to={lp(routePaths.calculator)} className="lot-summary-cta">{t('lotSummaryCtaCar')}</Link>
                <Link to={lp(routePaths.contacts)} className="lot-summary-cta secondary">{t('lotSummaryCtaLogistics')}</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

      {lightboxOpen && createPortal(
        <div className="lb-overlay" onClick={() => setLightboxOpen(false)} role="dialog" aria-modal="true">
          <button className="lb-close" type="button" onClick={() => setLightboxOpen(false)} aria-label="Zamknij">✕</button>
          {images.length > 1 && (
            <button className="lb-nav lb-nav--prev" type="button" onClick={(e) => { e.stopPropagation(); setGalleryIndex((prev) => (prev - 1 + images.length) % images.length) }} aria-label="Poprzednie">‹</button>
          )}
          <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={images[galleryIndex]} className="lb-img" alt={car.title} />
          </div>
          {images.length > 1 && (
            <button className="lb-nav lb-nav--next" type="button" onClick={(e) => { e.stopPropagation(); setGalleryIndex((prev) => (prev + 1) % images.length) }} aria-label="Następne">›</button>
          )}
          {images.length > 1 && (
            <div className="lb-counter">{galleryIndex + 1} / {images.length}</div>
          )}
        </div>,
        document.body
      )}
    </>
  )
}
