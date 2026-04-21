import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'
import './contacts.css'

const CONTACT_CHANNELS = [
  { label: 'Телефон (PL)', value: '+48 784 890 644', href: 'tel:+48784890644', ico: '📞', hint: 'Головний номер, Polska' },
  { label: 'Телефон (PL)', value: '+48 571 660 242', href: 'tel:+48571660242', ico: '📱', hint: 'Менеджер з продажу' },
  { label: 'Email', value: 'info@bidbiders.com', href: 'mailto:info@bidbiders.com', ico: '✉️', hint: 'Загальні питання' },
  { label: 'Telegram', value: '@bidbiders', href: 'https://t.me/bidbiders', ico: '💬', hint: 'Швидкі відповіді у чаті' },
]

export function ContactsPage() {
  const MAP_POS_STORAGE_KEY = 'BIDDERS_CONTACTS_EU_MAP_POS_V1'
  const MAP_POINTS_STORAGE_KEY = 'BIDDERS_CONTACTS_EU_MAP_POINTS_V1'
  const SVG_VIEWBOX = { width: 760, height: 520 }
  const defaultPoints = {
    london: { x: 260, y: 263 },
    warsaw: { x: 524, y: 256 },
    klaipeda: { x: 526, y: 207 },
    prague: { x: 442, y: 273 },
    constanta: { x: 621, y: 360 },
  }

  const [points, setPoints] = useState(defaultPoints)
  const dragStateRef = useRef<{ key: keyof typeof defaultPoints; dx: number; dy: number } | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const [mapOffset, setMapOffset] = useState<{ x: number; y: number }>(() => {
    if (typeof window === 'undefined') {
      return { x: -250, y: 0 }
    }
    try {
      const raw = window.localStorage.getItem(MAP_POS_STORAGE_KEY)
      if (!raw) return { x: -250, y: 0 }
      const parsed = JSON.parse(raw) as { x?: number; y?: number }
      return {
        x: Number.isFinite(parsed?.x) ? Number(parsed.x) : -250,
        y: Number.isFinite(parsed?.y) ? Number(parsed.y) : 0,
      }
    } catch {
      return { x: -250, y: 0 }
    }
  })

  const nudgeMap = (dx: number, dy: number) => {
    setMapOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }))
  }

  const saveMapPosition = () => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(MAP_POS_STORAGE_KEY, JSON.stringify(mapOffset))
  }

  const resetMapPosition = () => {
    const defaults = { x: -250, y: 0 }
    setMapOffset(defaults)
    if (typeof window === 'undefined') return
    window.localStorage.setItem(MAP_POS_STORAGE_KEY, JSON.stringify(defaults))
  }

  const savePoints = () => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(MAP_POINTS_STORAGE_KEY, JSON.stringify(points))
  }

  const resetPoints = () => {
    setPoints(defaultPoints)
    if (typeof window === 'undefined') return
    window.localStorage.setItem(MAP_POINTS_STORAGE_KEY, JSON.stringify(defaultPoints))
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

  const startDrag = (key: keyof typeof defaultPoints, clientX: number, clientY: number) => {
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

  const endDrag = () => {
    dragStateRef.current = null
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const raw = window.localStorage.getItem(MAP_POINTS_STORAGE_KEY)
    if (!raw) return
    try {
      const saved = JSON.parse(raw)
      const merged = {
        london: { ...defaultPoints.london, ...(saved.london ?? {}) },
        warsaw: { ...defaultPoints.warsaw, ...(saved.warsaw ?? {}) },
        klaipeda: { ...defaultPoints.klaipeda, ...(saved.klaipeda ?? {}) },
        prague: { ...defaultPoints.prague, ...(saved.prague ?? {}) },
        constanta: { ...defaultPoints.constanta, ...(saved.constanta ?? {}) },
      }
      setPoints(merged)
    } catch {
      // noop
    }
  }, [])

  const addressQuery = 'Jawczyce ul. Poznańska 56 05-850 Polska'
  const addressEncoded = encodeURIComponent(addressQuery)
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressEncoded}`
  const wazeUrl = `https://waze.com/ul?q=${addressEncoded}&navigate=yes`
  const appleMapsUrl = `http://maps.apple.com/?daddr=${addressEncoded}&dirflg=d`
  const osmUrl = `https://www.openstreetmap.org/search?query=${addressEncoded}`

  return (
    <main className="ct-page">
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutomotiveBusiness',
            name: 'BIDDERS',
            description: 'Імпорт авто з аукціонів США та Європи під ключ.',
            url: 'https://bidbiders.com',
            telephone: '+48784890644',
            email: 'info@bidbiders.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'ul. Poznańska 56',
              addressLocality: 'Jawczyce',
              postalCode: '05-850',
              addressCountry: 'PL',
            },
            areaServed: ['PL', 'UA', 'LT', 'CZ', 'GB'],
            openingHours: 'Mo-Fr 09:00-19:00',
          }),
        }}
      />

      {/* Hero */}
      <section className="ct-hero">
        <div className="ct-hero__inner">
          <div>
            <div className="ct-hero__kicker">Контакти BIDDERS</div>
            <h1 className="ct-hero__title">Контакти та майданчик BIDDERS у Польщі</h1>
            <p className="ct-hero__sub">
              Приїжджайте на огляд, отримайте консультацію по документах та фінальній вартості володіння.
              Команда представників по всій Європі — від Лондона до Клайпеди.
            </p>
            <div className="ct-hero__facts">
              <div className="ct-hero__fact">
                <strong>4</strong>
                <span>Представництва у ЄС</span>
              </div>
              <div className="ct-hero__fact">
                <strong>48+</strong>
                <span>Доставлених авто щомісяця</span>
              </div>
              <div className="ct-hero__fact">
                <strong>24/7</strong>
                <span>Чат у Telegram</span>
              </div>
              <div className="ct-hero__fact">
                <strong>09–19</strong>
                <span>Робочі години, пн–пт</span>
              </div>
            </div>
          </div>

          <aside className="ct-quick">
            <h2 className="ct-quick__title">Зв'язатися швидко</h2>
            <p className="ct-quick__sub">Менеджер відповідає у робочі години. Чат — цілодобово.</p>
            <ul className="ct-quick__list">
              {CONTACT_CHANNELS.slice(0, 3).map((channel) => (
                <li key={channel.value}>
                  <a className="ct-quick__item" href={channel.href}>
                    <span className="ct-quick__icon" aria-hidden="true">{channel.ico}</span>
                    <div className="ct-quick__body">
                      <span className="ct-quick__label">{channel.label}</span>
                      <span className="ct-quick__value">{channel.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <Link to={routes.calculator} className="ct-quick__cta">
              Замовити прорахунок →
            </Link>
          </aside>
        </div>
      </section>

      {/* Map + Address */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <header className="ct-section__head">
            <h2>Головний офіс та шоурум</h2>
            <p>
              Сюди приїжджайте на особисту консультацію, огляд авто та оформлення угоди.
              Паркування є, вхід вільний за попереднім записом.
            </p>
          </header>

          <div className="ct-map-wrap">
            <div className="ct-map" role="img" aria-label="Карта BIDDERS, Польща">
              <div className="ct-map__placeholder"></div>
              <div className="ct-map__grid"></div>
              <div className="ct-map__road r1"></div>
              <div className="ct-map__road r2"></div>
              <div className="ct-map__road r3"></div>
              <div className="ct-map__pin">
                <span className="ct-map__pin-mark" aria-hidden="true"></span>
                <span className="ct-map__pin-label">BIDDERS, Jawczyce</span>
              </div>
              <span className="ct-map__badge">Головний офіс</span>
            </div>

            <div className="ct-address">
              <div className="ct-address__card">
                <div className="ct-address__label">Адреса</div>
                <div className="ct-address__value">
                  ul. Poznańska, 56<br />
                  05-850 Jawczyce, Polska
                </div>
                <div className="ct-address__meta">
                  <span><strong>Координати:</strong> 52.1862° N, 20.7786° E</span>
                  <span><strong>Ближче за все:</strong> Ożarów Mazowiecki</span>
                  <span><strong>Доїхати з Варшави:</strong> ~25 хв на авто</span>
                </div>
              </div>

              <div className="ct-address__card">
                <div className="ct-address__label">Прокласти маршрут</div>
                <div className="ct-directions">
                  <a className="ct-dir-btn" href={googleMapsUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">G</span>
                    <div className="ct-dir-btn__body">
                      <span>Google</span>
                      Maps
                    </div>
                  </a>
                  <a className="ct-dir-btn" href={wazeUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">W</span>
                    <div className="ct-dir-btn__body">
                      <span>Waze</span>
                      Навігатор
                    </div>
                  </a>
                  <a className="ct-dir-btn" href={appleMapsUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">A</span>
                    <div className="ct-dir-btn__body">
                      <span>Apple</span>
                      Maps
                    </div>
                  </a>
                  <a className="ct-dir-btn" href={osmUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">O</span>
                    <div className="ct-dir-btn__body">
                      <span>Open</span>
                      StreetMap
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <header className="ct-section__head">
            <h2>Усі канали зв'язку</h2>
            <p>
              Телефон — для швидких дзвінків. Email — для офіційних документів та комерційних пропозицій.
              Telegram — для швидких питань у будь-який час.
            </p>
          </header>
          <div className="ct-channels">
            {CONTACT_CHANNELS.map((channel) => (
              <a key={channel.value} href={channel.href} className="ct-channel" target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span className="ct-channel__ico" aria-hidden="true">{channel.ico}</span>
                <span className="ct-channel__label">{channel.label}</span>
                <span className="ct-channel__value">{channel.value}</span>
                <span className="ct-channel__hint">{channel.hint}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Europe Reps Map */}
      <section className="ct-section ct-section--dark">
        <div className="ct-section__inner">
          <div className="ct-europe">
            <div className="ct-europe__layout">
              <div className="ct-europe__left">
                <div className="ct-europe__head">
                  <span className="ct-europe__badge">Представники у ЄС</span>
                  <h2 className="ct-europe__title">Карта представників<br/>у <em>Європі</em></h2>
                  <p className="ct-europe__lead">Наші офіси та партнери в ключових країнах<br/>імпорту та логістики.</p>
                </div>

                <div className="ct-reps">
                  <article className="ct-rep ct-rep--hq">
                    <span className="ct-rep__flag" aria-hidden="true">🇵🇱</span>
                    <div className="ct-rep__body">
                      <span className="ct-rep__country">Польща</span>
                      <span className="ct-rep__city">Jawczyce (Warszawa)</span>
                    </div>
                    <span className="ct-rep__hq-tag">Головний офіс</span>
                    <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l6 6-6 6"/>
                    </svg>
                  </article>
                  <article className="ct-rep">
                    <span className="ct-rep__flag" aria-hidden="true">🇱🇹</span>
                    <div className="ct-rep__body">
                      <span className="ct-rep__country">Литва</span>
                      <span className="ct-rep__city">Клайпеда</span>
                    </div>
                    <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l6 6-6 6"/>
                    </svg>
                  </article>
                  <article className="ct-rep">
                    <span className="ct-rep__flag" aria-hidden="true">🇨🇿</span>
                    <div className="ct-rep__body">
                      <span className="ct-rep__country">Чехія</span>
                      <span className="ct-rep__city">Прага</span>
                    </div>
                    <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l6 6-6 6"/>
                    </svg>
                  </article>
                  <article className="ct-rep">
                    <span className="ct-rep__flag" aria-hidden="true">🇬🇧</span>
                    <div className="ct-rep__body">
                      <span className="ct-rep__country">Великобританія</span>
                      <span className="ct-rep__city">Лондон</span>
                    </div>
                    <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l6 6-6 6"/>
                    </svg>
                  </article>
                  <article className="ct-rep">
                    <span className="ct-rep__flag" aria-hidden="true">🇷🇴</span>
                    <div className="ct-rep__body">
                      <span className="ct-rep__country">Румунія</span>
                      <span className="ct-rep__city">Констанца</span>
                    </div>
                    <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M9 6l6 6-6 6"/>
                    </svg>
                  </article>
                </div>
              </div>

              <div
                className="ct-europe__map ct-europe__map--handoff"
                aria-label="Карта представників у Європі"
                style={{
                  backgroundImage: `url(${import.meta.env.BASE_URL}images/contacts/eu-representatives-map-bg.png)`,
                  backgroundPosition: `calc(62% + ${mapOffset.x}px) calc(50% + ${mapOffset.y}px)`,
                }}
              >
                <div className="ct-map-adjust" aria-label="Керування позицією карти">
                  <div className="ct-map-adjust__row">
                    <button type="button" onClick={() => nudgeMap(-10, 0)} title="Вліво">←</button>
                    <button type="button" onClick={() => nudgeMap(0, -10)} title="Вгору">↑</button>
                    <button type="button" onClick={() => nudgeMap(0, 10)} title="Вниз">↓</button>
                    <button type="button" onClick={() => nudgeMap(10, 0)} title="Вправо">→</button>
                  </div>
                  <div className="ct-map-adjust__row">
                    <button type="button" className="ct-map-adjust__save" onClick={saveMapPosition}>Save</button>
                    <button type="button" className="ct-map-adjust__reset" onClick={resetMapPosition}>Reset</button>
                  </div>
                  <div className="ct-map-adjust__row">
                    <button type="button" className="ct-map-adjust__save" onClick={savePoints}>Save points</button>
                    <button type="button" className="ct-map-adjust__reset" onClick={resetPoints}>Reset points</button>
                  </div>
                </div>
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

                  <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} C ${points.warsaw.x - 84},${points.warsaw.y - 18} ${points.london.x + 90},${points.london.y - 20} ${points.london.x},${points.london.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />
                  <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} L ${points.klaipeda.x},${points.klaipeda.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />
                  <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} C ${points.warsaw.x - 24},${points.warsaw.y + 8} ${points.prague.x + 30},${points.prague.y - 5} ${points.prague.x},${points.prague.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />
                  <path className="ct-europe__line" d={`M ${points.warsaw.x},${points.warsaw.y} C ${points.warsaw.x + 30},${points.warsaw.y + 40} ${points.constanta.x - 30},${points.constanta.y - 30} ${points.constanta.x},${points.constanta.y}`} fill="none" stroke="#f97316" strokeWidth="1.8" strokeDasharray="8 6" opacity="0.75" />

                  <g className="ct-europe__pin" transform={`translate(${points.london.x},${points.london.y})`} onMouseDown={(e) => startDrag('london', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                    <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                    <circle r="8" fill="#f97316" opacity="0.22" />
                    <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                    <circle r="2.5" fill="#fff" />
                    <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">Лондон</text>
                  </g>

                  <g className="ct-europe__pin ct-europe__pin--hq" transform={`translate(${points.warsaw.x},${points.warsaw.y})`} onMouseDown={(e) => startDrag('warsaw', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                    <circle className="ct-europe__pulse" r="17" fill="#f97316" opacity="0.14" />
                    <circle r="10" fill="#f97316" opacity="0.24" />
                    <circle r="6" fill="#f97316" filter="url(#ctPinGlow)" />
                    <circle r="3" fill="#fff" />
                    <text x="12" y="-12" className="ct-europe__label ct-europe__label--city">Jawczyce</text>
                    <text x="12" y="2" className="ct-europe__label ct-europe__label--sub">(Warszawa)</text>
                  </g>

                  <g className="ct-europe__pin" transform={`translate(${points.klaipeda.x},${points.klaipeda.y})`} onMouseDown={(e) => startDrag('klaipeda', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                    <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                    <circle r="8" fill="#f97316" opacity="0.22" />
                    <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                    <circle r="2.5" fill="#fff" />
                    <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">Клайпеда</text>
                  </g>

                  <g className="ct-europe__pin" transform={`translate(${points.prague.x},${points.prague.y})`} onMouseDown={(e) => startDrag('prague', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                    <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                    <circle r="8" fill="#f97316" opacity="0.22" />
                    <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                    <circle r="2.5" fill="#fff" />
                    <text x="-68" y="20" className="ct-europe__label ct-europe__label--city">Прага</text>
                  </g>

                  <g className="ct-europe__pin" transform={`translate(${points.constanta.x},${points.constanta.y})`} onMouseDown={(e) => startDrag('constanta', e.clientX, e.clientY)} style={{ cursor: 'grab' }}>
                    <circle className="ct-europe__pulse" r="14" fill="#f97316" opacity="0.13" />
                    <circle r="8" fill="#f97316" opacity="0.22" />
                    <circle r="5" fill="#f97316" filter="url(#ctPinGlow)" />
                    <circle r="2.5" fill="#fff" />
                    <text x="11" y="-10" className="ct-europe__label ct-europe__label--city">Констанца</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working hours */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <header className="ct-section__head">
            <h2>Робочі години та візити</h2>
            <p>
              Офіс працює у будні. На суботу приймаємо за попереднім записом.
              Візити бажано узгоджувати хоча б за день.
            </p>
          </header>

          <div className="ct-hours">
            <div className="ct-hour-card">
              <div className="ct-hour-card__head">
                <span className="ct-hour-ico" aria-hidden="true">🏢</span>
                <h3>Офіс / шоурум</h3>
              </div>
              <ul className="ct-hour-list">
                <li><span>Пн – Пт</span><strong>09:00 – 19:00</strong></li>
                <li><span>Субота</span><strong>за записом</strong></li>
                <li><span>Неділя</span><strong>вихідний</strong></li>
              </ul>
            </div>

            <div className="ct-hour-card">
              <div className="ct-hour-card__head">
                <span className="ct-hour-ico" aria-hidden="true">💬</span>
                <h3>Онлайн-консультації</h3>
              </div>
              <ul className="ct-hour-list">
                <li><span>Пн – Пт</span><strong>08:00 – 22:00</strong></li>
                <li><span>Сб – Нд</span><strong>10:00 – 18:00</strong></li>
                <li><span>Telegram-чат</span><strong>24/7</strong></li>
              </ul>
            </div>

            <div className="ct-hour-card">
              <div className="ct-hour-card__head">
                <span className="ct-hour-ico" aria-hidden="true">🚚</span>
                <h3>Видача авто</h3>
              </div>
              <ul className="ct-hour-list">
                <li><span>Пн – Пт</span><strong>10:00 – 18:00</strong></li>
                <li><span>Субота</span><strong>за записом</strong></li>
                <li><span>Тривалість</span><strong>~45 хв</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <div className="ct-channels" style={{ maxWidth: 720, margin: '0 auto' }}>
            <Link to={routes.faq} className="ct-channel">
              <span className="ct-channel__ico" aria-hidden="true">❓</span>
              <span className="ct-channel__label">Питання</span>
              <span className="ct-channel__value">FAQ</span>
              <span className="ct-channel__hint">Поширені запитання та короткі відповіді.</span>
            </Link>
            <Link to={routes.calculator} className="ct-channel">
              <span className="ct-channel__ico" aria-hidden="true">🧮</span>
              <span className="ct-channel__label">Прорахунок</span>
              <span className="ct-channel__value">Калькулятор</span>
              <span className="ct-channel__hint">Орієнтовна вартість авто під ключ.</span>
            </Link>
            <Link to={routes.home} className="ct-channel">
              <span className="ct-channel__ico" aria-hidden="true">🏠</span>
              <span className="ct-channel__label">Повернутись</span>
              <span className="ct-channel__value">На головну</span>
              <span className="ct-channel__hint">Наші послуги та переваги.</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
