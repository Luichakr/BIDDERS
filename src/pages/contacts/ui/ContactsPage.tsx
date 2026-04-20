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
    x: 280,
    y: 165,
  },
  {
    id: 'lt',
    country: 'Литва',
    flag: '🇱🇹',
    city: 'Клайпеда',
    role: 'Порт · прийом контейнерів з США',
    x: 300,
    y: 110,
  },
  {
    id: 'cz',
    country: 'Чехія',
    flag: '🇨🇿',
    city: 'Прага',
    role: 'Сертифікація · оцінка · супровід',
    x: 235,
    y: 210,
  },
  {
    id: 'uk',
    country: 'Великобританія',
    flag: '🇬🇧',
    city: 'Лондон',
    role: 'Представник · підбір RHD-авто',
    x: 110,
    y: 160,
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
      <section className="ct-section">
        <div className="ct-section__inner">
          <div className="ct-europe">
            <div className="ct-europe__head">
              <div>
                <span className="ct-europe__badge">Представники у ЄС</span>
                <h2 style={{ marginTop: 12 }}>Карта представників у Європі</h2>
                <p>Наші офіси та партнери в ключових країнах імпорту та логістики.</p>
              </div>
            </div>

            <div className="ct-europe__layout">
              {/* Decorative SVG map of Europe */}
              <div className="ct-europe__map" aria-hidden="true">
                <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Stylized continent silhouette */}
                  <defs>
                    <radialGradient id="ctEuroGlow" cx="55%" cy="45%" r="60%">
                      <stop offset="0%" stopColor="rgba(255, 92, 0, 0.18)" />
                      <stop offset="60%" stopColor="rgba(255, 92, 0, 0.04)" />
                      <stop offset="100%" stopColor="rgba(255, 92, 0, 0)" />
                    </radialGradient>
                    <filter id="ctEuroSoft" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" />
                    </filter>
                  </defs>

                  <rect x="0" y="0" width="500" height="400" fill="url(#ctEuroGlow)" />

                  {/* Abstract Europe shape */}
                  <path
                    d="M95,140 Q80,115 110,95 Q125,75 160,85 Q190,80 205,95 Q235,80 260,90 Q290,80 315,95 Q335,85 355,100 Q380,110 385,140 Q400,160 385,185 Q370,210 340,220 Q320,235 290,230 Q275,250 250,255 Q225,260 205,250 Q180,270 155,260 Q130,265 115,245 Q95,230 90,205 Q78,180 95,140 Z"
                    fill="rgba(255, 255, 255, 0.06)"
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth="1.5"
                    filter="url(#ctEuroSoft)"
                  />

                  {/* Secondary blobs (UK / Scandinavia hints) */}
                  <ellipse cx="110" cy="155" rx="22" ry="32" fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1" />
                  <ellipse cx="300" cy="75" rx="30" ry="22" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />

                  {/* Connection lines from HQ (PL) to all reps */}
                  {EUROPE_REPS.filter((r) => !r.hq).map((rep) => {
                    const hq = EUROPE_REPS.find((r) => r.hq)!
                    return (
                      <line
                        key={rep.id}
                        x1={hq.x}
                        y1={hq.y}
                        x2={rep.x}
                        y2={rep.y}
                        stroke="rgba(255, 92, 0, 0.4)"
                        strokeWidth="1.3"
                        strokeDasharray="4 4"
                      />
                    )
                  })}

                  {/* Pins */}
                  {EUROPE_REPS.map((rep) => (
                    <g key={rep.id}>
                      {/* soft glow halo */}
                      <circle cx={rep.x} cy={rep.y} r={rep.hq ? 18 : 12} fill="rgba(255, 92, 0, 0.22)" />
                      {/* core */}
                      <circle
                        cx={rep.x}
                        cy={rep.y}
                        r={rep.hq ? 9 : 6}
                        fill={rep.hq ? '#ff5c00' : '#ffffff'}
                        stroke={rep.hq ? '#ffffff' : '#ff5c00'}
                        strokeWidth="2"
                      />
                      {/* city label */}
                      <text
                        x={rep.x}
                        y={rep.y - (rep.hq ? 20 : 15)}
                        fill="#ffffff"
                        textAnchor="middle"
                        fontFamily="Manrope, sans-serif"
                        fontWeight="700"
                        fontSize="11"
                      >
                        {rep.country.split(' ')[0]}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              <div className="ct-reps">
                {EUROPE_REPS.map((rep) => (
                  <article key={rep.id} className={rep.hq ? 'ct-rep ct-rep--hq' : 'ct-rep'}>
                    <span className="ct-rep__flag" aria-hidden="true">{rep.flag}</span>
                    <span className="ct-rep__country">{rep.country}</span>
                    <span className="ct-rep__city">{rep.city}</span>
                    <span className="ct-rep__role">{rep.role}</span>
                    {rep.hq ? <span className="ct-rep__hq-tag">Головний офіс</span> : null}
                  </article>
                ))}
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
