import React, { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import '../../../pages/contacts/ui/contacts.css'

const MAP_POINTS_STORAGE_KEY = 'BIDDERS_CONTACTS_EU_MAP_POINTS_V2'
const SVG_VIEWBOX = { width: 760, height: 520 }
// Keep disabled in production; set true temporarily to drag and calibrate points.
const MAP_CALIBRATION_ENABLED = false

type NormalizedPoint = { u: number; v: number }

const defaultNormalizedPoints = {
  london:    { u: 260 / SVG_VIEWBOX.width, v: 263 / SVG_VIEWBOX.height },
  warsaw:    { u: 524 / SVG_VIEWBOX.width, v: 256 / SVG_VIEWBOX.height },
  klaipeda:  { u: 526 / SVG_VIEWBOX.width, v: 207 / SVG_VIEWBOX.height },
  prague:    { u: 442 / SVG_VIEWBOX.width, v: 273 / SVG_VIEWBOX.height },
  constanta: { u: 621 / SVG_VIEWBOX.width, v: 360 / SVG_VIEWBOX.height },
}

type PointKey = keyof typeof defaultNormalizedPoints
type CountryKey = 'poland' | 'lithuania' | 'czechia' | 'uk' | 'romania'

const CONTACTS_DATA: Record<CountryKey, { phone: string; email: string; address: string }> = {
  poland: {
    phone: '+48 784 890 644',
    email: 'sales@bidbidders.com',
    address: 'Jawczyce (Warsaw), Poznanska 56, 05-850, Poland',
  },
  lithuania: {
    phone: '+48 784 890 644',
    email: 'sales@bidbidders.com',
    address: 'Klaipeda, Lithuania',
  },
  czechia: {
    phone: '+48 571 660 242',
    email: 'sales@bidbidders.com',
    address: 'Prague, Czech Republic',
  },
  uk: {
    phone: '+48 571 660 242',
    email: 'sales@bidbidders.com',
    address: 'London, United Kingdom',
  },
  romania: {
    phone: '+48 571 660 242',
    email: 'sales@bidbidders.com',
    address: 'Constanta, Romania',
  },
}

export function EuropeMapBlock() {
  const { t } = useI18n()
  const [normalizedPoints, setNormalizedPoints] = useState(defaultNormalizedPoints)
  const [expandedCountry, setExpandedCountry] = useState<CountryKey>('poland')
  const dragStateRef = useRef<{ key: PointKey; dx: number; dy: number } | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)

  const points = {
    london: {
      x: normalizedPoints.london.u * SVG_VIEWBOX.width,
      y: normalizedPoints.london.v * SVG_VIEWBOX.height,
    },
    warsaw: {
      x: normalizedPoints.warsaw.u * SVG_VIEWBOX.width,
      y: normalizedPoints.warsaw.v * SVG_VIEWBOX.height,
    },
    klaipeda: {
      x: normalizedPoints.klaipeda.u * SVG_VIEWBOX.width,
      y: normalizedPoints.klaipeda.v * SVG_VIEWBOX.height,
    },
    prague: {
      x: normalizedPoints.prague.u * SVG_VIEWBOX.width,
      y: normalizedPoints.prague.v * SVG_VIEWBOX.height,
    },
    constanta: {
      x: normalizedPoints.constanta.u * SVG_VIEWBOX.width,
      y: normalizedPoints.constanta.v * SVG_VIEWBOX.height,
    },
  }

  const toSvgPoint = (clientX: number, clientY: number) => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    if (!rect.width || !rect.height) return null
    return {
      x: ((clientX - rect.left) / rect.width) * SVG_VIEWBOX.width,
      y: ((clientY - rect.top) / rect.height) * SVG_VIEWBOX.height,
    }
  }

  const startDrag = (key: PointKey, clientX: number, clientY: number) => {
    if (!MAP_CALIBRATION_ENABLED) return
    const p = toSvgPoint(clientX, clientY)
    if (!p) return
    dragStateRef.current = { key, dx: p.x - points[key].x, dy: p.y - points[key].y }
  }

  const moveDrag = (clientX: number, clientY: number) => {
    if (!MAP_CALIBRATION_ENABLED) return
    const drag = dragStateRef.current
    if (!drag) return
    const p = toSvgPoint(clientX, clientY)
    if (!p) return
    const nextX = Math.max(10, Math.min(SVG_VIEWBOX.width - 10, p.x - drag.dx))
    const nextY = Math.max(10, Math.min(SVG_VIEWBOX.height - 10, p.y - drag.dy))
    setNormalizedPoints((prev) => ({
      ...prev,
      [drag.key]: {
        u: nextX / SVG_VIEWBOX.width,
        v: nextY / SVG_VIEWBOX.height,
      } as NormalizedPoint,
    }))
  }

  const endDrag = () => { dragStateRef.current = null }

  useEffect(() => {
    if (!MAP_CALIBRATION_ENABLED) return
    if (typeof window === 'undefined') return
    const raw = window.localStorage.getItem(MAP_POINTS_STORAGE_KEY)
    if (!raw) return
    try {
      const saved = JSON.parse(raw)
      setNormalizedPoints({
        london:    { ...defaultNormalizedPoints.london,    ...(saved.london    ?? {}) },
        warsaw:    { ...defaultNormalizedPoints.warsaw,    ...(saved.warsaw    ?? {}) },
        klaipeda:  { ...defaultNormalizedPoints.klaipeda,  ...(saved.klaipeda  ?? {}) },
        prague:    { ...defaultNormalizedPoints.prague,    ...(saved.prague    ?? {}) },
        constanta: { ...defaultNormalizedPoints.constanta, ...(saved.constanta ?? {}) },
      })
    } catch { /* noop */ }
  }, [])

  useEffect(() => {
    if (!MAP_CALIBRATION_ENABLED) return
    if (typeof window === 'undefined') return
    window.localStorage.setItem(MAP_POINTS_STORAGE_KEY, JSON.stringify(normalizedPoints))
  }, [normalizedPoints])

  const Arrow = () => (
    <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6"/>
    </svg>
  )

  const repCards: Array<{ key: CountryKey; flag: string; country: string; city: string; isHq?: boolean }> = [
    { key: 'poland', flag: '🇵🇱', country: t('ctRepCountryPoland'), city: 'Jawczyce (Warszawa)', isHq: true },
    { key: 'lithuania', flag: '🇱🇹', country: t('ctRepCountryLithuania'), city: t('ctCityKlaipeda') },
    { key: 'czechia', flag: '🇨🇿', country: t('ctRepCountryCzechia'), city: t('ctCityPrague') },
    { key: 'uk', flag: '🇬🇧', country: t('ctRepCountryUK'), city: t('ctCityLondon') },
    { key: 'romania', flag: '🇷🇴', country: t('ctRepCountryRomania'), city: t('ctCityConstanta') },
  ]

  return (
    <section className="ct-section ct-section--dark" style={{ '--ct-navy': 'var(--px-navy, #1b2a4a)', '--ct-navy-deep': 'var(--px-navy-deep, #0f1a33)', '--ct-accent': 'var(--px-orange, #ff5c00)', '--ct-accent-hot': 'var(--px-orange-hot, #ff7a2f)', '--ct-accent-soft': 'var(--px-orange-soft, rgba(255,92,0,0.12))', '--ct-text': 'var(--px-text, #1a2236)', '--ct-muted': 'var(--px-text-muted, #5a6478)', '--ct-line': 'var(--px-line, rgba(26,34,54,0.1))', '--ct-radius-md': '18px', '--ct-radius-lg': '24px' } as React.CSSProperties}>
      <div className="ct-section__inner">
        <div className="ct-europe">
          <div className="ct-europe__layout">

            {/* Left: list */}
            <div className="ct-europe__left">
              <div className="ct-europe__head">
                <span className="ct-europe__badge">{t('ctEuropeBadge')}</span>
                <h2 className="ct-europe__title">
                  {t('ctEuropeTitle').split('\n').map((line, i) =>
                    i === 0 ? line : <><br key={i} /><em>{line}</em></>
                  )}
                </h2>
                <p className="ct-europe__lead">{t('ctEuropeLead')}</p>
              </div>

              <div className="ct-reps">
                {repCards.map((rep) => {
                  const isExpanded = expandedCountry === rep.key
                  const contact = CONTACTS_DATA[rep.key]

                  return (
                    <React.Fragment key={rep.key}>
                      <button
                        className={`ct-rep ${rep.isHq ? 'ct-rep--hq' : ''} ${isExpanded ? 'ct-rep--expanded' : ''}`}
                        onClick={() => setExpandedCountry(rep.key)}
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={`ct-rep-details-${rep.key}`}
                      >
                        <span className="ct-rep__flag" aria-hidden="true">{rep.flag}</span>
                        <div className="ct-rep__body">
                          <span className="ct-rep__country">{rep.country}</span>
                          <span className="ct-rep__city">{rep.city}</span>
                        </div>
                        {rep.isHq ? <span className="ct-rep__hq-tag">{t('ctRepHqTag')}</span> : null}
                        <Arrow />
                      </button>

                      {isExpanded ? (
                        <div id={`ct-rep-details-${rep.key}`} className="ct-rep__details" aria-live="polite">
                          <div className="ct-rep__detail-row">
                            <span className="ct-rep__detail-icon">📞</span>
                            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                          </div>
                          <div className="ct-rep__detail-row">
                            <span className="ct-rep__detail-icon">✉️</span>
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                          </div>
                          <div className="ct-rep__detail-row">
                            <span className="ct-rep__detail-icon">📍</span>
                            <span>{contact.address}</span>
                          </div>
                        </div>
                      ) : null}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>

            {/* Right: map */}
            <div
              className="ct-europe__map"
              aria-label={t('ctEuropeMapAriaLabel')}
            >
              <svg
                ref={svgRef}
                viewBox="0 0 760 520"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
              >
                <image
                  href={`${import.meta.env.BASE_URL}images/contacts/eu-representatives-map-bg.png`}
                  x="0"
                  y="0"
                  width={SVG_VIEWBOX.width}
                  height={SVG_VIEWBOX.height}
                  preserveAspectRatio="xMidYMid slice"
                />

                <defs>
                  <filter id="ctPinGlow" x="-200%" y="-200%" width="500%" height="500%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
                    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b2" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="b2" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Lines */}
                <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} C ${points.warsaw.x - 84},${points.warsaw.y - 18} ${points.london.x + 90},${points.london.y - 20} ${points.london.x},${points.london.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />
                <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} L ${points.klaipeda.x},${points.klaipeda.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />
                <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} C ${points.warsaw.x - 24},${points.warsaw.y + 8} ${points.prague.x + 30},${points.prague.y - 5} ${points.prague.x},${points.prague.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />
                <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} C ${points.warsaw.x + 30},${points.warsaw.y + 40} ${points.constanta.x - 30},${points.constanta.y - 30} ${points.constanta.x},${points.constanta.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />

                {/* London */}
                <g className="ct-europe__pin" transform={`translate(${points.london.x},${points.london.y})`} onMouseDown={(e) => startDrag('london', e.clientX, e.clientY)} style={{ cursor: MAP_CALIBRATION_ENABLED ? 'grab' : 'default' }}>
                  <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                  <circle r="8" fill="#f97316" opacity="0.22" />
                  <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="2.5" fill="#fff" />
                  <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">{t('ctCityLondon')}</text>
                </g>

                {/* Warsaw HQ */}
                <g className="ct-europe__pin ct-europe__pin--hq" transform={`translate(${points.warsaw.x},${points.warsaw.y})`} onMouseDown={(e) => startDrag('warsaw', e.clientX, e.clientY)} style={{ cursor: MAP_CALIBRATION_ENABLED ? 'grab' : 'default' }}>
                  <circle className="ct-europe__pulse" r="17" fill="#f97316" opacity="0.14" />
                  <circle r="10" fill="#f97316" opacity="0.24" />
                  <circle r="6" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="3" fill="#fff" />
                  <text x="12" y="-12" className="ct-europe__label ct-europe__label--city">Jawczyce</text>
                  <text x="12" y="2" className="ct-europe__label ct-europe__label--sub">(Warszawa)</text>
                </g>

                {/* Klaipeda */}
                <g className="ct-europe__pin" transform={`translate(${points.klaipeda.x},${points.klaipeda.y})`} onMouseDown={(e) => startDrag('klaipeda', e.clientX, e.clientY)} style={{ cursor: MAP_CALIBRATION_ENABLED ? 'grab' : 'default' }}>
                  <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                  <circle r="8" fill="#f97316" opacity="0.22" />
                  <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="2.5" fill="#fff" />
                  <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">{t('ctCityKlaipeda')}</text>
                </g>

                {/* Prague */}
                <g className="ct-europe__pin" transform={`translate(${points.prague.x},${points.prague.y})`} onMouseDown={(e) => startDrag('prague', e.clientX, e.clientY)} style={{ cursor: MAP_CALIBRATION_ENABLED ? 'grab' : 'default' }}>
                  <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                  <circle r="8" fill="#f97316" opacity="0.22" />
                  <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="2.5" fill="#fff" />
                  <text x="-68" y="20" className="ct-europe__label ct-europe__label--city">{t('ctCityPrague')}</text>
                </g>

                {/* Constanta */}
                <g className="ct-europe__pin" transform={`translate(${points.constanta.x},${points.constanta.y})`} onMouseDown={(e) => startDrag('constanta', e.clientX, e.clientY)} style={{ cursor: MAP_CALIBRATION_ENABLED ? 'grab' : 'default' }}>
                  <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                  <circle r="8" fill="#f97316" opacity="0.22" />
                  <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="2.5" fill="#fff" />
                  <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">{t('ctCityConstanta')}</text>
                </g>
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
