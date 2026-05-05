import React, { useEffect, useRef, useState } from 'react'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import '../../../pages/contacts/ui/contacts.css'

const MAP_POINTS_STORAGE_KEY = 'BIDDERS_CONTACTS_EU_MAP_POINTS_V1'
const SVG_VIEWBOX = { width: 760, height: 520 }
const MAP_OFFSET = { x: -165, y: 0 }

const defaultPoints = {
  london:    { x: 260, y: 263 },
  warsaw:    { x: 524, y: 256 },
  klaipeda:  { x: 526, y: 207 },
  prague:    { x: 442, y: 273 },
  constanta: { x: 621, y: 360 },
}

type PointKey = keyof typeof defaultPoints

export function EuropeMapBlock() {
  const { t } = useI18n()
  const [points, setPoints] = useState(defaultPoints)
  const dragStateRef = useRef<{ key: PointKey; dx: number; dy: number } | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)

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
    const p = toSvgPoint(clientX, clientY)
    if (!p) return
    dragStateRef.current = { key, dx: p.x - points[key].x, dy: p.y - points[key].y }
  }

  const moveDrag = (clientX: number, clientY: number) => {
    const drag = dragStateRef.current
    if (!drag) return
    const p = toSvgPoint(clientX, clientY)
    if (!p) return
    const nextX = Math.max(10, Math.min(SVG_VIEWBOX.width - 10, p.x - drag.dx))
    const nextY = Math.max(10, Math.min(SVG_VIEWBOX.height - 10, p.y - drag.dy))
    setPoints((prev) => ({ ...prev, [drag.key]: { x: nextX, y: nextY } }))
  }

  const endDrag = () => { dragStateRef.current = null }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const raw = window.localStorage.getItem(MAP_POINTS_STORAGE_KEY)
    if (!raw) return
    try {
      const saved = JSON.parse(raw)
      setPoints({
        london:    { ...defaultPoints.london,    ...(saved.london    ?? {}) },
        warsaw:    { ...defaultPoints.warsaw,    ...(saved.warsaw    ?? {}) },
        klaipeda:  { ...defaultPoints.klaipeda,  ...(saved.klaipeda  ?? {}) },
        prague:    { ...defaultPoints.prague,    ...(saved.prague    ?? {}) },
        constanta: { ...defaultPoints.constanta, ...(saved.constanta ?? {}) },
      })
    } catch { /* noop */ }
  }, [])

  const Arrow = () => (
    <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6l6 6-6 6"/>
    </svg>
  )

  return (
    <section className="ct-section ct-section--dark bp-animate" style={{ '--ct-navy': 'var(--px-navy, #1b2a4a)', '--ct-navy-deep': 'var(--px-navy-deep, #0f1a33)', '--ct-accent': 'var(--px-orange, #ff5c00)', '--ct-accent-hot': 'var(--px-orange-hot, #ff7a2f)', '--ct-accent-soft': 'var(--px-orange-soft, rgba(255,92,0,0.12))', '--ct-text': 'var(--px-text, #1a2236)', '--ct-muted': 'var(--px-text-muted, #5a6478)', '--ct-line': 'var(--px-line, rgba(26,34,54,0.1))', '--ct-radius-md': '18px', '--ct-radius-lg': '24px' } as React.CSSProperties}>
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
                <article className="ct-rep ct-rep--hq">
                  <span className="ct-rep__flag" aria-hidden="true">🇵🇱</span>
                  <div className="ct-rep__body">
                    <span className="ct-rep__country">{t('ctRepCountryPoland')}</span>
                    <span className="ct-rep__city">Jawczyce (Warszawa)</span>
                  </div>
                  <span className="ct-rep__hq-tag">{t('ctRepHqTag')}</span>
                  <Arrow />
                </article>
                <article className="ct-rep">
                  <span className="ct-rep__flag" aria-hidden="true">🇱🇹</span>
                  <div className="ct-rep__body">
                    <span className="ct-rep__country">{t('ctRepCountryLithuania')}</span>
                    <span className="ct-rep__city">{t('ctCityKlaipeda')}</span>
                  </div>
                  <Arrow />
                </article>
                <article className="ct-rep">
                  <span className="ct-rep__flag" aria-hidden="true">🇨🇿</span>
                  <div className="ct-rep__body">
                    <span className="ct-rep__country">{t('ctRepCountryCzechia')}</span>
                    <span className="ct-rep__city">{t('ctCityPrague')}</span>
                  </div>
                  <Arrow />
                </article>
                <article className="ct-rep">
                  <span className="ct-rep__flag" aria-hidden="true">🇬🇧</span>
                  <div className="ct-rep__body">
                    <span className="ct-rep__country">{t('ctRepCountryUK')}</span>
                    <span className="ct-rep__city">{t('ctCityLondon')}</span>
                  </div>
                  <Arrow />
                </article>
                <article className="ct-rep">
                  <span className="ct-rep__flag" aria-hidden="true">🇷🇴</span>
                  <div className="ct-rep__body">
                    <span className="ct-rep__country">{t('ctRepCountryRomania')}</span>
                    <span className="ct-rep__city">{t('ctCityConstanta')}</span>
                  </div>
                  <Arrow />
                </article>
              </div>
            </div>

            {/* Right: map */}
            <div
              className="ct-europe__map ct-europe__map--handoff"
              aria-label={t('ctEuropeMapAriaLabel')}
              style={{
                backgroundImage: `url(${import.meta.env.BASE_URL}images/contacts/eu-representatives-map-bg.png)`,
                backgroundPosition: `calc(62% + ${MAP_OFFSET.x}px) calc(50% + ${MAP_OFFSET.y}px)`,
              }}
            >
              <svg
                ref={svgRef}
                viewBox="0 0 760 520"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                onMouseMove={(e) => moveDrag(e.clientX, e.clientY)}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
              >
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
                <g className="ct-europe__pin" transform={`translate(${points.london.x},${points.london.y})`} onMouseDown={(e) => startDrag('london', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                  <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                  <circle r="8" fill="#f97316" opacity="0.22" />
                  <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="2.5" fill="#fff" />
                  <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">{t('ctCityLondon')}</text>
                </g>

                {/* Warsaw HQ */}
                <g className="ct-europe__pin ct-europe__pin--hq" transform={`translate(${points.warsaw.x},${points.warsaw.y})`} onMouseDown={(e) => startDrag('warsaw', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                  <circle className="ct-europe__pulse" r="17" fill="#f97316" opacity="0.14" />
                  <circle r="10" fill="#f97316" opacity="0.24" />
                  <circle r="6" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="3" fill="#fff" />
                  <text x="12" y="-12" className="ct-europe__label ct-europe__label--city">Jawczyce</text>
                  <text x="12" y="2" className="ct-europe__label ct-europe__label--sub">(Warszawa)</text>
                </g>

                {/* Klaipeda */}
                <g className="ct-europe__pin" transform={`translate(${points.klaipeda.x},${points.klaipeda.y})`} onMouseDown={(e) => startDrag('klaipeda', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                  <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                  <circle r="8" fill="#f97316" opacity="0.22" />
                  <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="2.5" fill="#fff" />
                  <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">{t('ctCityKlaipeda')}</text>
                </g>

                {/* Prague */}
                <g className="ct-europe__pin" transform={`translate(${points.prague.x},${points.prague.y})`} onMouseDown={(e) => startDrag('prague', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                  <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                  <circle r="8" fill="#f97316" opacity="0.22" />
                  <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                  <circle r="2.5" fill="#fff" />
                  <text x="-68" y="20" className="ct-europe__label ct-europe__label--city">{t('ctCityPrague')}</text>
                </g>

                {/* Constanta */}
                <g className="ct-europe__pin" transform={`translate(${points.constanta.x},${points.constanta.y})`} onMouseDown={(e) => startDrag('constanta', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
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
