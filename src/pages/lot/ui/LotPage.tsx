import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { allAuctionCards, getAuctionCardById } from '../../../features/auction/model/auctionData'
import { fetchInRouteCardById } from '../../../features/auction/model/inRoute.service'
import { routes } from '../../../shared/config/routes'
import './lot.css'

type LotMode = 'catalog' | 'transit' | 'in-stock'

function fmt(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function fmtEur(value: number): string {
  return `€${Math.round(value).toLocaleString('en-US')}`
}

function buildCountdownLabel(seconds: number): string {
  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  const parts: string[] = []
  if (d > 0) parts.push(`${d}д`)
  parts.push(`${String(h).padStart(2, '0')}г`)
  parts.push(`${String(m).padStart(2, '0')}хв`)
  parts.push(`${String(s).padStart(2, '0')}с`)
  return parts.join(' ')
}

const FAQ_ITEMS = [
  {
    q: 'Що це за авто і в якому воно статусі?',
    a: 'Це реальний лот з нашого inventory. Статус відображається у блоці «Статус та готовність авто» та оновлюється по мірі проходження логістики.',
  },
  {
    q: 'Які характеристики тут найважливіші?',
    a: 'Дивіться спочатку на VIN, рік, пробіг, тип пошкоджень та наявність ключа. Решта полів (кузов, двигун, колір) впливають радше на експлуатацію, а не на юридичну чистоту.',
  },
  {
    q: 'Який орієнтовний бюджет під ключ?',
    a: 'Блок «Бюджет по готовому авто» показує поточну ціну + сервіс BIDDERS. Для точного розрахунку з логістикою і митницею запустіть калькулятор у сайдбарі або на сторінці /calculator.',
  },
  {
    q: 'На що звернути увагу перед рішенням?',
    a: 'Перевірте первинне і вторинне пошкодження, тип документа (Title), наявність ключа, а також реальні фотографії в галереї. Ми радимо також запросити додаткові знімки у нашого менеджера.',
  },
]

const PURCHASE_STEPS = [
  {
    n: 1,
    title: 'Перевіряємо авто',
    text: 'Уточнюємо стан, пробіг, документи та готовність авто до видачі або подальшої доставки.',
  },
  {
    n: 2,
    title: 'Рахуємо бюджет',
    text: 'Формуємо прозорий прорахунок з урахуванням ціни авто, підготовки, сертифікації та супроводу.',
  },
  {
    n: 3,
    title: 'Оформлюємо документи',
    text: 'Готуємо оферту, договір і всі супровідні папери для безпечного передавання клієнту.',
  },
  {
    n: 4,
    title: 'Передаємо в Україні',
    text: 'Авто проходить фінальні етапи і передається разом із підтримкою команди BIDDERS.',
  },
]

export function LotPage() {
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
        const response = await fetchInRouteCardById(lotId)
        if (!mounted) {
          return
        }
        setLiveCar(response ?? undefined)
        setLiveLoadState(response ? 'loaded' : 'failed')
      } catch {
        if (!mounted) {
          return
        }
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

  const [galleryIndex, setGalleryIndex] = useState(0)
  const [watching, setWatching] = useState(false)
  const [moreSpecsOpen, setMoreSpecsOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [priceCalcOpen, setPriceCalcOpen] = useState(true)
  const [customsCalcOpen, setCustomsCalcOpen] = useState(false)
  const [countdownSeconds, setCountdownSeconds] = useState(6 * 24 * 3600 + 20 * 3600 + 25 * 60)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  const [bidValue, setBidValue] = useState(car ? car.currentBid + 500 : 0)
  const [leaseDownPct, setLeaseDownPct] = useState(30)
  const [leaseMonths, setLeaseMonths] = useState(36)

  useEffect(() => {
    if (!car) return
    setBidValue(car.currentBid + 500)
  }, [car])

  useEffect(() => {
    if (mode !== 'catalog') return
    const timer = window.setInterval(() => {
      setCountdownSeconds((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [mode])

  const images = useMemo(() => {
    if (!car) return []
    return car.images.length > 0 ? car.images : [car.image]
  }, [car])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
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
      <main className="lot-page">
        <section className="lot-empty">
          <h2>Завантажуємо авто</h2>
          <p>Отримуємо актуальні дані з API авто в дорозі.</p>
        </section>
      </main>
    )
  }

  if (!car) {
    return (
      <main className="lot-page">
        <section className="lot-empty">
          <h2>Авто не знайдено</h2>
          <p>Перевірте правильність посилання або поверніться у каталог.</p>
          <Link to={routes.catalog} className="lot-empty__btn">Перейти до каталогу</Link>
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

  const modeLabel = mode === 'transit' ? 'Авто в дорозі' : mode === 'in-stock' ? 'Авто в наявності' : 'Каталог'
  const statusPill = mode === 'transit' ? 'В дорозі' : mode === 'in-stock' ? 'В наявності' : 'На аукціоні'
  const statusPillClass = mode === 'transit' ? 'lot-status-pill transit' : mode === 'in-stock' ? 'lot-status-pill instock' : 'lot-status-pill auction'

  // Leasing placeholder (flat, no real formula)
  const leasePrice = car.currentBid
  const leaseDown = Math.round(leasePrice * (leaseDownPct / 100))
  const leaseFinanced = leasePrice - leaseDown
  const leaseMonthly = Math.round((leaseFinanced / leaseMonths) * 1.08)

  return (
    <main className="lot-page">
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
            description: `${car.title}, VIN ${car.vin}, ${car.mileageLabel}, ${car.engine}. ${statusPill}. Локація: ${car.location}.`,
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
          <Link to={routes.home}>Головна</Link>
          <span className="lot-breadcrumb__sep">›</span>
          <Link to={mode === 'transit' ? routes.transit : mode === 'in-stock' ? routes.inStock : routes.catalog}>{modeLabel}</Link>
          <span className="lot-breadcrumb__sep">›</span>
          <span className="lot-breadcrumb__current">{car.title}</span>
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
              <span className="lot-summary-item__label">Локація</span>
              <span className="lot-summary-item__value">{car.location}</span>
            </div>
            <div className="lot-summary-item">
              <span className="lot-summary-item__label">{mode === 'in-stock' ? 'Місце видачі' : 'Порт відправлення'}</span>
              <span className="lot-summary-item__value">{mode === 'in-stock' ? 'Львів' : 'США'}</span>
            </div>
            <div className="lot-summary-item">
              <span className="lot-summary-item__label">Статус</span>
              <span className="lot-summary-item__value">{statusPill}</span>
            </div>
            <div className="lot-summary-item">
              <span className="lot-summary-item__label">{mode === 'catalog' ? 'Дата аукціону' : 'Орієнт. доставка'}</span>
              <span className="lot-summary-item__value">{mode === 'catalog' ? car.auctionDateLabel : 'Уточнюється'}</span>
            </div>
          </div>
          <button className={watching ? 'lot-watch-btn active' : 'lot-watch-btn'} type="button" onClick={() => setWatching((prev) => !prev)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            {watching ? 'У спостереженні' : 'Слідкувати'}
          </button>
        </div>
      </section>

      {/* Main grid */}
      <section className="lot-main">
        <div className="lot-main__inner">
          {/* Gallery column */}
          <div className="lot-gallery">
            <div className="lot-gallery__main">
              <img src={images[galleryIndex]} alt={car.title} className="lot-gallery__img" />
              {images.length > 1 ? (
                <>
                  <button className="lot-gallery__arrow prev" type="button" onClick={() => setGalleryIndex((prev) => (prev - 1 + images.length) % images.length)} aria-label="Попереднє фото">‹</button>
                  <button className="lot-gallery__arrow next" type="button" onClick={() => setGalleryIndex((prev) => (prev + 1) % images.length)} aria-label="Наступне фото">›</button>
                </>
              ) : null}
              <div className="lot-gallery__counter">{galleryIndex + 1} / {images.length}</div>
              <div className="lot-gallery__live-badge">
                <span className="lot-gallery__live-dot"></span>
                {mode === 'catalog' ? 'Прямий аукціон' : mode === 'transit' ? 'Авто в дорозі' : 'Готове до видачі'}
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
              <h2 className="lot-spec-card__title">Основні характеристики</h2>
              <dl className="lot-spec-list">
                <div className="lot-spec-row"><dt>Lot</dt><dd>{car.id}</dd></div>
                <div className="lot-spec-row">
                  <dt>VIN</dt>
                  <dd>
                    <span className="lot-spec-mono">{car.vin}</span>
                    <button className="lot-copy-btn" type="button" onClick={() => navigator.clipboard.writeText(car.vin)}>Копіювати</button>
                  </dd>
                </div>
                <div className="lot-spec-row"><dt>Продавець</dt><dd><span className="lot-dot"></span>{car.seller}</dd></div>
                <div className="lot-spec-row"><dt>Документи</dt><dd className="lot-spec-ok">{car.titleStatus}</dd></div>
                <div className="lot-spec-row"><dt>Первинне пошкодження</dt><dd className="lot-spec-warn">{car.damage}</dd></div>
                <div className="lot-spec-row"><dt>Вторинне пошкодження</dt><dd>—</dd></div>
                <div className="lot-spec-row"><dt>Пробіг</dt><dd>{car.mileageLabel}</dd></div>
                <div className="lot-spec-row"><dt>Ключ</dt><dd>{car.keys}</dd></div>
              </dl>
            </div>

            <div className="lot-spec-card">
              <h2 className="lot-spec-card__title">Технічні характеристики</h2>
              <dl className="lot-spec-list">
                <div className="lot-spec-row"><dt>Тип кузова</dt><dd>{car.bodyStyle}</dd></div>
                <div className="lot-spec-row"><dt>Колір</dt><dd>{car.color}</dd></div>
                <div className="lot-spec-row"><dt>Двигун</dt><dd>{car.engine}</dd></div>
                <div className="lot-spec-row"><dt>Коробка передач</dt><dd>{car.transmission}</dd></div>
                <div className="lot-spec-row"><dt>Тип палива</dt><dd>{car.fuel}</dd></div>
                <div className="lot-spec-row"><dt>Тип приводу</dt><dd>{car.drive}</dd></div>

                {moreSpecsOpen ? (
                  <>
                    <div className="lot-spec-row"><dt>Початковий код</dt><dd className="lot-spec-ok">На ходу</dd></div>
                    <div className="lot-spec-row"><dt>ACV / Ретейл</dt><dd>{car.estimateLabel}</dd></div>
                    <div className="lot-spec-row"><dt>Розширений тип кузова</dt><dd>{car.bodyStyle} / 4-door</dd></div>
                    <div className="lot-spec-row"><dt>Статус продажу</dt><dd className="lot-spec-process">{statusPill}</dd></div>
                  </>
                ) : null}
              </dl>

              <button className="lot-show-more" type="button" onClick={() => setMoreSpecsOpen((prev) => !prev)}>
                {moreSpecsOpen ? 'Показати менше' : 'Показати більше (4)'}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: moreSpecsOpen ? 'rotate(180deg)' : 'none' }}><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {car.sourceUrl ? (
                <a href={car.sourceUrl} target="_blank" rel="noreferrer" className="lot-source-link">
                  Відкрити оригінальний лот на {car.auction}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3h6v6M9 3L3 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ) : null}
            </div>

            {mode === 'catalog' ? (
              <div className="lot-spec-card">
                <h2 className="lot-spec-card__title">Додаткові послуги</h2>
                <div className="lot-services">
                  {[
                    { id: 's11', num: '(11)', name: 'Автомобіль з обмеженням на покупку', price: 0 },
                    { id: 's12', num: '(12)', name: 'Небезпечний вантаж', price: 0 },
                    { id: 's13', num: '(13)', name: 'Великогабаритний', price: 120 },
                    { id: 's14', num: '(14)', name: 'Великогабаритний+', price: 240 },
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
                <p className="lot-services-note">Встановлення галочки додасть суму до орієнтовної підсумкової ціни.</p>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="lot-sidebar">
            {/* === MODE: CATALOG (auction bid + delivery calculator) === */}
            {mode === 'catalog' ? (
              <>
                <div className="lot-sb-card lot-sb-card--hero">
                  <div className="lot-sb-kicker">Поточна ставка</div>
                  <div className="lot-sb-price">{fmt(car.currentBid)}</div>
                  <div className="lot-sb-estimate">Оцінка: <strong>{car.estimateLabel}</strong></div>

                  <div className="lot-bid-block">
                    <div className="lot-bid-label">Ваша максимальна ставка</div>
                    <div className="lot-bid-input-row">
                      <button className="lot-bid-adj" type="button" onClick={() => adjustBid(-500)} aria-label="Зменшити">−</button>
                      <input className="lot-bid-input" value={fmt(bidValue)} readOnly />
                      <button className="lot-bid-adj" type="button" onClick={() => adjustBid(500)} aria-label="Збільшити">+</button>
                    </div>
                  </div>

                  <button className="lot-cta-primary" type="button">Зробити ставку зараз</button>
                  <a href="#faq" className="lot-cta-link">Як зробити ставку? →</a>

                  <div className="lot-timer">
                    <span className="lot-timer__label">Час, що залишився</span>
                    <div className={countdownSeconds <= 0 ? 'lot-timer__value expired' : 'lot-timer__value'}>
                      {countdownSeconds <= 0 ? 'Аукціон завершено' : buildCountdownLabel(countdownSeconds)}
                    </div>
                    <span className="lot-timer__end">до <strong>2 травня, 15:30</strong></span>
                  </div>
                </div>

                <div className={priceCalcOpen ? 'lot-sb-card lot-sb-accordion open' : 'lot-sb-card lot-sb-accordion'}>
                  <button className="lot-accordion-head" type="button" onClick={() => setPriceCalcOpen((prev) => !prev)}>
                    <span>Калькулятор підсумкової ціни</span>
                    <span className="lot-accordion-arrow">⌄</span>
                  </button>
                  {priceCalcOpen ? (
                    <div className="lot-accordion-body">
                      <div className="lot-calc-row"><span>Ставка (поточна)</span><strong>{fmt(bidValue)}</strong></div>
                      <div className="lot-calc-row"><span>Аукціонний збір</span><strong>$520</strong></div>
                      <div className="lot-calc-row"><span>Транспорт до порту</span><strong>$430</strong></div>
                      <div className="lot-calc-row"><span>Морська доставка</span><strong>$995</strong></div>
                      <div className="lot-calc-row"><span>Документи + сервіс BIDDERS</span><strong>$450</strong></div>
                      <div className="lot-calc-sub"><span>Разом (до митниці)</span><span>{fmt(subtotal)}</span></div>
                      <p className="lot-calc-note">Орієнтовна ціна без митних платежів. Курс USD/EUR = 0.91</p>
                    </div>
                  ) : null}
                </div>

                <div className={customsCalcOpen ? 'lot-sb-card lot-sb-accordion open' : 'lot-sb-card lot-sb-accordion'}>
                  <button className="lot-accordion-head" type="button" onClick={() => setCustomsCalcOpen((prev) => !prev)}>
                    <span>Калькулятор митних платежів</span>
                    <span className="lot-accordion-arrow">⌄</span>
                  </button>
                  {customsCalcOpen ? (
                    <div className="lot-accordion-body">
                      <div className="lot-calc-row"><span>Мито 10%</span><strong>{fmtEur(customsTax)}</strong></div>
                      <div className="lot-calc-row"><span>ПДВ 21%</span><strong>{fmtEur(vat)}</strong></div>
                      <div className="lot-calc-row"><span>Брокер та супровід</span><strong>{fmtEur(broker)}</strong></div>
                      <div className="lot-calc-sub"><span>Митні платежі</span><span>{fmtEur(customsTotal)}</span></div>
                      <div className="lot-calc-sub final"><span>Фінальна вартість</span><span>{fmtEur(finalTotal)}</span></div>
                      <p className="lot-calc-note">Розрахунок орієнтовний. Остаточна вартість може відрізнятись залежно від типу документа та країни.</p>
                    </div>
                  ) : null}
                </div>
              </>
            ) : null}

            {/* === MODE: TRANSIT (fixed price + ETA + contact CTA) === */}
            {mode === 'transit' ? (
              <>
                <div className="lot-sb-card lot-sb-card--hero">
                  <div className="lot-sb-kicker">Фінальна ціна</div>
                  <div className="lot-sb-price">{car.currentBidLabel || fmt(car.currentBid)}</div>
                  <div className="lot-sb-estimate">Фіксована вартість під ключ</div>

                  <ul className="lot-sb-facts">
                    <li><span>Продавець</span><strong>BIDDERS</strong></li>
                    <li><span>Орієнт. доставка</span><strong>В дорозі</strong></li>
                    <li><span>Локація</span><strong>{car.location}</strong></li>
                  </ul>

                  <button className="lot-cta-primary" type="button">Зв'язатися щодо авто</button>
                  <a href="tel:+48784890644" className="lot-cta-secondary">+48 784 890 644</a>
                </div>

                <div className="lot-sb-card">
                  <h3 className="lot-sb-card__title">Що входить у ціну</h3>
                  <ul className="lot-sb-list">
                    <li>Викуп на аукціоні</li>
                    <li>Транспорт США → порт</li>
                    <li>Океанська доставка</li>
                    <li>Розмитнення в Європі</li>
                    <li>Сервіс та супровід BIDDERS</li>
                  </ul>
                </div>
              </>
            ) : null}

            {/* === MODE: IN-STOCK (fixed price + leasing calc placeholder) === */}
            {mode === 'in-stock' ? (
              <>
                <div className="lot-sb-card lot-sb-card--hero">
                  <div className="lot-sb-kicker">Ціна</div>
                  <div className="lot-sb-price">{car.currentBidLabel || fmt(car.currentBid)}</div>
                  <div className="lot-sb-estimate">Готове до видачі у Львові</div>

                  <ul className="lot-sb-facts">
                    <li><span>Продавець</span><strong>CULT CARS</strong></li>
                    <li><span>Документи</span><strong>{car.titleStatus}</strong></li>
                    <li><span>Сертифікація</span><strong>Пройдено</strong></li>
                  </ul>

                  <button className="lot-cta-primary" type="button">Купити зараз</button>
                  <button className="lot-cta-secondary" type="button">Записатися на огляд</button>
                </div>

                <div className="lot-sb-card lot-sb-lease">
                  <div className="lot-sb-kicker">Калькулятор лізингу</div>
                  <h3 className="lot-sb-card__title">Щомісячний платіж</h3>
                  <div className="lot-lease-monthly">{fmt(leaseMonthly)}<span>/міс</span></div>

                  <div className="lot-lease-row">
                    <label>Перший внесок <strong>{leaseDownPct}%</strong> <span>({fmt(leaseDown)})</span></label>
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
                    <label>Термін <strong>{leaseMonths} міс</strong></label>
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

                  <p className="lot-lease-note">Розрахунок попередній. Точні умови формуємо після погодження з лізинговою компанією.</p>
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
            <h2>Опис автомобіля</h2>
            <p>Повна технічна інформація по цій карті.</p>
          </header>
          <div className="lot-desc-grid">
            <div className="lot-desc-item"><dt>Марка</dt><dd>{car.make}</dd></div>
            <div className="lot-desc-item"><dt>Модель</dt><dd>{car.model}</dd></div>
            <div className="lot-desc-item"><dt>Рік</dt><dd>{car.year}</dd></div>
            <div className="lot-desc-item"><dt>VIN</dt><dd className="lot-desc-mono">{car.vin}</dd></div>
            <div className="lot-desc-item"><dt>Ціна</dt><dd>{car.currentBidLabel || fmt(car.currentBid)}</dd></div>
            <div className="lot-desc-item"><dt>Пробіг</dt><dd>{car.mileageLabel}</dd></div>
            <div className="lot-desc-item"><dt>Статус</dt><dd>{statusPill}</dd></div>
            <div className="lot-desc-item"><dt>Локація</dt><dd>{car.location}</dd></div>
            <div className="lot-desc-item"><dt>Продавець</dt><dd>{car.seller}</dd></div>
            <div className="lot-desc-item"><dt>Тип кузова</dt><dd>{car.bodyStyle}</dd></div>
            <div className="lot-desc-item"><dt>Колір</dt><dd>{car.color}</dd></div>
            <div className="lot-desc-item"><dt>Двигун</dt><dd>{car.engine}</dd></div>
            <div className="lot-desc-item"><dt>Коробка</dt><dd>{car.transmission}</dd></div>
            <div className="lot-desc-item"><dt>Паливо</dt><dd>{car.fuel}</dd></div>
            <div className="lot-desc-item"><dt>Привід</dt><dd>{car.drive}</dd></div>
            <div className="lot-desc-item"><dt>Документи</dt><dd>{car.titleStatus}</dd></div>
          </div>
        </div>
      </section>

      {/* Important-to-know block */}
      <section className="lot-section">
        <div className="lot-section__inner">
          <header className="lot-section__head">
            <h2>Що важливо знати про {car.title}</h2>
            <p>Статус, доставка, комплектація та кроки для покупки готового авто.</p>
          </header>
          <div className="lot-know-grid">
            <article className="lot-know-card">
              <div className="lot-know-card__icon">📝</div>
              <h3>Короткий огляд</h3>
              <p>
                {car.title} — авто зі статусом <strong>«{statusPill}»</strong>. Локація: {car.location}.
                За характеристиками: {car.engine.toLowerCase()}, {car.transmission.toLowerCase()}, {car.drive}. Пробіг: {car.mileageLabel}.
              </p>
              <p>
                Поточна вартість — від {car.currentBidLabel || fmt(car.currentBid)}. Далі зніметься
                реєстрація, підготовка, сертифікація та передача в Україні.
              </p>
            </article>
            <article className="lot-know-card">
              <div className="lot-know-card__icon">🚀</div>
              <h3>Що перевірити перед рішенням</h3>
              <ul>
                <li>Список пошкоджень: <strong>{car.damage}</strong></li>
                <li>Перевірка документів: <strong>{car.titleStatus}</strong></li>
                <li>Орієнтовний бюджет: від {car.currentBidLabel || fmt(car.currentBid)} з урахуванням логістики</li>
                <li>Узгодьте бюджет видачі авто / доставки в Україну</li>
              </ul>
              <div className="lot-know-chips">
                <span className="lot-know-chip">Імпорт під ключ</span>
                <span className="lot-know-chip">Доставка і розмитнення</span>
                <span className="lot-know-chip">Консультація</span>
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
              <h2>Схожі {mode === 'transit' ? 'авто в дорозі' : mode === 'in-stock' ? 'авто в наявності' : 'авто на аукціоні'}</h2>
              <p>Ще кілька релевантних варіантів для швидкого переходу між картками.</p>
            </header>
            <div className="lot-similar">
              {similarCars.map((item) => (
                <Link to={routes.lotDetail.replace(':lotId', item.id)} key={item.id} className="lot-similar-card">
                  <div className="lot-similar-card__photo">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="lot-similar-card__body">
                    <h3>{item.title}</h3>
                    <div className="lot-similar-card__vin">VIN {item.vin.slice(0, 10)}…</div>
                    <div className="lot-similar-card__meta">
                      <span>Ціна: <strong>{item.currentBidLabel || fmt(item.currentBid)}</strong></span>
                      <span>Пробіг: <strong>{item.mileageLabel}</strong></span>
                      <span>Статус: <strong>{mode === 'transit' ? 'В дорозі' : mode === 'in-stock' ? 'В наявності' : 'На аукціоні'}</strong></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="lot-similar-links">
              <Link to={mode === 'transit' ? routes.transit : mode === 'in-stock' ? routes.inStock : routes.catalog} className="lot-similar-link">
                Усі {mode === 'transit' ? 'авто в дорозі' : mode === 'in-stock' ? 'авто в наявності' : 'лоти'}
              </Link>
              <Link to={routes.catalog} className="lot-similar-link">Каталог аукціонів</Link>
              <Link to={routes.calculator} className="lot-similar-link">Підбір авто</Link>
              <Link to={routes.calculator} className="lot-similar-link">Логістика і митниця</Link>
              <Link to={routes.blog} className="lot-similar-link">Поради у блозі</Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="lot-section" id="faq">
        <div className="lot-section__inner">
          <header className="lot-section__head">
            <h2>Поширені запитання про {car.title}</h2>
            <p>Відповіді про стан, ціну, переваги та логістику цього авто.</p>
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
            <h2>Як проходить покупка готового авто</h2>
            <p>Чотири кроки від перевірки машини до передачі ключів.</p>
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
            <h2>Що важливо знати перед рішенням по {car.title}</h2>
            <p>Стан, поточний статус і орієнтир по фінальному бюджету.</p>
          </header>
          <div className="lot-summary-grid">
            <article className="lot-summary-card">
              <div className="lot-summary-card__icon">🛈</div>
              <h3>Статус та готовність авто</h3>
              <p>
                {car.title} зараз знаходиться у статусі <strong>«{statusPill}»</strong>. Перед покупкою ми уточнюємо місцезнаходження, наявність документів і сценарій передачі в Україні.
              </p>
              <p className="lot-summary-card__facts">
                За наявними даними: документи — <strong>{car.titleStatus}</strong>, пошкодження — <strong>{car.damage}</strong>, локація — <strong>{car.location}</strong>.
              </p>
              <p>
                Якщо потрібен детальний прорахунок, команда BIDDERS допоможе з логістикою і розмитненням у реальний бюджет без прихованих сюрпризів.
              </p>
            </article>

            <article className="lot-summary-card lot-summary-card--accent">
              <div className="lot-summary-card__icon">💼</div>
              <h3>Бюджет по готовому авто</h3>
              <p>Для готового авто ми орієнтуємося на поточну ціну, підготовку, сертифікацію та супровід передачі.</p>
              <dl className="lot-budget">
                <div className="lot-budget-row"><dt>Поточна ціна авто</dt><dd>{car.currentBidLabel || fmt(car.currentBid)}</dd></div>
                <div className="lot-budget-row"><dt>Підготовка та сервіс</dt><dd>за запитом</dd></div>
                <div className="lot-budget-row"><dt>Сертифікація / реєстрація</dt><dd>індивідуально</dd></div>
                <div className="lot-budget-row lot-budget-row--total"><dt>Послуга BIDDERS</dt><dd>$450</dd></div>
              </dl>
              <div className="lot-summary-card__actions">
                <Link to={routes.calculator} className="lot-summary-cta">Підібрати авто</Link>
                <Link to={routes.contacts} className="lot-summary-cta secondary">Дізнатися про логістику</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
