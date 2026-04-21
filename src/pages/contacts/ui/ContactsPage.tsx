import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'
import './contacts.css'

interface EuropeRep {
  id: string
  country: string
  flag: string
  city: string
  role: string
  hq?: boolean
  // SVG coordinates on our decorative map (viewBox 0 0 500 400)
  x: number
  y: number
}

const EUROPE_REPS: EuropeRep[] = [
  {
    id: 'pl',
    country: 'Польща',
    flag: '🇵🇱',
    city: 'Jawczyce (Warszawa)',
    role: 'Головний офіс · логістика · передача авто',
    hq: true,
    x: 430,
    y: 240,
  },
  {
    id: 'lt',
    country: 'Литва',
    flag: '🇱🇹',
    city: 'Клайпеда',
    role: 'Порт · прийом контейнерів з США',
    x: 490,
    y: 140,
  },
  {
    id: 'cz',
    country: 'Чехія',
    flag: '🇨🇿',
    city: 'Прага',
    role: 'Сертифікація · оцінка · супровід',
    x: 365,
    y: 320,
  },
  {
    id: 'uk',
    country: 'Великобританія',
    flag: '🇬🇧',
    city: 'Лондон',
    role: 'Представник · підбір RHD-авто',
    x: 180,
    y: 210,
  },
]

const CONTACT_CHANNELS = [
  { label: 'Телефон (PL)', value: '+48 784 890 644', href: 'tel:+48784890644', ico: '📞', hint: 'Головний номер, Polska' },
  { label: 'Телефон (PL)', value: '+48 571 660 242', href: 'tel:+48571660242', ico: '📱', hint: 'Менеджер з продажу' },
  { label: 'Email', value: 'info@bidbiders.com', href: 'mailto:info@bidbiders.com', ico: '✉️', hint: 'Загальні питання' },
  { label: 'Telegram', value: '@bidbiders', href: 'https://t.me/bidbiders', ico: '💬', hint: 'Швидкі відповіді у чаті' },
]

export function ContactsPage() {
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
              {/* LEFT: heading + cards */}
              <div className="ct-europe__left">
                <div className="ct-europe__head">
                  <span className="ct-europe__badge">Представники у ЄС</span>
                  <h2 className="ct-europe__title">Карта представників<br/>у <em>Європі</em></h2>
                  <p className="ct-europe__lead">Наші офіси та партнери в ключових країнах<br/>імпорту та логістики.</p>
                </div>

                <div className="ct-reps">
                  {EUROPE_REPS.map((rep) => (
                    <article key={rep.id} className={rep.hq ? 'ct-rep ct-rep--hq' : 'ct-rep'}>
                      <span className="ct-rep__flag" aria-hidden="true">{rep.flag}</span>
                      <div className="ct-rep__body">
                        <span className="ct-rep__country">{rep.country}</span>
                        <span className="ct-rep__city">{rep.city}</span>
                      </div>
                      {rep.hq
                        ? <span className="ct-rep__hq-tag">Головний офіс</span>
                        : null}
                      <svg className="ct-rep__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 6l6 6-6 6"/>
                      </svg>
                    </article>
                  ))}
                </div>
              </div>

              {/* RIGHT: clean map canvas with animated pins + arcs (no continent silhouette) */}
              <div className="ct-europe__map" aria-hidden="true">
                <svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <radialGradient id="ctEuroGlow" cx="62%" cy="45%" r="60%">
                      <stop offset="0%" stopColor="rgba(255, 92, 0, 0.22)" />
                      <stop offset="55%" stopColor="rgba(255, 92, 0, 0.05)" />
                      <stop offset="100%" stopColor="rgba(255, 92, 0, 0)" />
                    </radialGradient>
                    <filter id="ctPinGlow" x="-120%" y="-120%" width="340%" height="340%">
                      <feGaussianBlur stdDeviation="10" />
                    </filter>
                  </defs>

                  {/* Ambient orange glow */}
                  <rect x="0" y="0" width="600" height="500" fill="url(#ctEuroGlow)" />

                  {/* Animated dashed arcs from HQ (PL) out to each rep */}
                  {EUROPE_REPS.filter((r) => !r.hq).map((rep, i) => {
                    const hq = EUROPE_REPS.find((r) => r.hq)!
                    const mx = (hq.x + rep.x) / 2
                    const my = (hq.y + rep.y) / 2 - 40
                    return (
                      <path
                        key={rep.id}
                        d={`M${hq.x},${hq.y} Q${mx},${my} ${rep.x},${rep.y}`}
                        fill="none"
                        stroke="rgba(255, 92, 0, 0.85)"
                        strokeWidth="1.8"
                        strokeDasharray="5 7"
                        strokeLinecap="round"
                        className={`ct-europe__line ct-europe__line--${i}`}
                      />
                    )
                  })}

                  {/* Pins */}
                  {EUROPE_REPS.map((rep, i) => (
                    <g key={rep.id} className={`ct-europe__pin ${rep.hq ? 'ct-europe__pin--hq' : ''}`} style={{ animationDelay: `${i * 0.35}s` } as CSSProperties}>
                      <circle cx={rep.x} cy={rep.y} r={rep.hq ? 34 : 24} fill="rgba(255, 92, 0, 0.32)" filter="url(#ctPinGlow)" />
                      <circle className="ct-europe__pulse ct-europe__pulse--a" cx={rep.x} cy={rep.y} r={rep.hq ? 11 : 8} fill="none" stroke="rgba(255, 92, 0, 0.75)" strokeWidth="2" />
                      <circle className="ct-europe__pulse ct-europe__pulse--b" cx={rep.x} cy={rep.y} r={rep.hq ? 11 : 8} fill="none" stroke="rgba(255, 92, 0, 0.5)" strokeWidth="2" />
                      <circle
                        cx={rep.x}
                        cy={rep.y}
                        r={rep.hq ? 10 : 7}
                        fill="#ff5c00"
                        stroke="#ffffff"
                        strokeWidth={rep.hq ? 3 : 2}
                        className="ct-europe__dot"
                      />
                      <text
                        x={rep.x}
                        y={rep.y - (rep.hq ? 22 : 16)}
                        fill="#ffffff"
                        textAnchor="middle"
                        fontFamily="Manrope, sans-serif"
                        fontWeight="800"
                        fontSize={rep.hq ? 14 : 12}
                        className="ct-europe__label"
                      >
                        {rep.hq ? 'Jawczyce' : rep.city.split(' ')[0]}
                      </text>
                      {rep.hq ? (
                        <text
                          x={rep.x}
                          y={rep.y - 8}
                          fill="rgba(255,255,255,0.85)"
                          textAnchor="middle"
                          fontFamily="Manrope, sans-serif"
                          fontWeight="700"
                          fontSize="11"
                          className="ct-europe__label"
                        >
                          (Warszawa)
                        </text>
                      ) : null}
                    </g>
                  ))}
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
