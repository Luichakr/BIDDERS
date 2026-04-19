import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuctionCardById } from '../../../features/auction/model/auctionData'
import './lot.css'

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

export function LotPage() {
  const { lotId } = useParams<{ lotId: string }>()
  const car = getAuctionCardById(lotId)

  const [galleryIndex, setGalleryIndex] = useState(0)
  const [watching, setWatching] = useState(false)
  const [moreSpecsOpen, setMoreSpecsOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [priceCalcOpen, setPriceCalcOpen] = useState(true)
  const [customsCalcOpen, setCustomsCalcOpen] = useState(false)
  const [countdownSeconds, setCountdownSeconds] = useState(6 * 24 * 3600 + 20 * 3600 + 25 * 60)

  const [bidValue, setBidValue] = useState(car ? car.currentBid + 500 : 0)

  useEffect(() => {
    if (!car) return
    setBidValue(car.currentBid + 500)
  }, [car])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdownSeconds((prev) => Math.max(0, prev - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!car) return
      const total = images.length
      if (total <= 1) return
      if (event.key === 'ArrowLeft') setGalleryIndex((prev) => (prev - 1 + total) % total)
      if (event.key === 'ArrowRight') setGalleryIndex((prev) => (prev + 1) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const images = useMemo(() => {
    if (!car) return []
    return car.images.length > 0 ? car.images : [car.image]
  }, [car])

  const subtotal = bidValue + 520 + 430 + 995 + 450 + selectedServices.length * 120
  const subtotalEur = subtotal * 0.91
  const customsTax = subtotalEur * 0.1
  const vat = (subtotalEur + customsTax) * 0.21
  const broker = 250
  const customsTotal = customsTax + vat + broker
  const finalTotal = subtotalEur + customsTotal

  if (!car) {
    return (
      <main className="lot-page">
        <section className="lot-empty">
          <h2>Авто не знайдено</h2>
          <p>Перевірте правильність посилання або поверніться у каталог.</p>
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

  return (
    <main className="lot-page">
      <div className="breadcrumb-bar">
        <div className="breadcrumb-inner">
          <span>Головна</span>
          <span>/</span>
          <span>{car.status === 'transit' ? 'Авто в дорозі' : 'Каталог'}</span>
          <span>/</span>
          <span>{car.title}</span>
        </div>
      </div>

      <section className="car-title-bar">
        <div className="car-title-inner">
          <div className="car-title-left">
            <h1 className="car-title-main">{car.title}</h1>
            <div className="car-title-badges">
              <span className="badge-vin">VIN {car.vin}</span>
              <span className="badge-lot">Lot: {car.id}</span>
              <span className={car.auction === 'IAAI' ? 'badge-auction-iaai' : 'badge-auction-copart'}>{car.auction}</span>
            </div>
          </div>

          <div className="car-title-center">
            <div className="title-meta-item"><span className="title-meta-label">Місцезнаходження</span><span className="title-meta-value">{car.location}</span></div>
            <div className="title-meta-item"><span className="title-meta-label">Порт відправлення</span><span className="title-meta-value">New York</span></div>
            <div className="title-meta-item"><span className="title-meta-label">Відстань</span><span className="title-meta-value">354 mil (220 km)</span></div>
            <div className="title-meta-item"><span className="title-meta-label">Орієнтовна доставка</span><span className="title-meta-value">18 квітня - 2 травня</span></div>
          </div>

          <div className="car-title-right">
            <button className={watching ? 'watch-btn active' : 'watch-btn'} type="button" onClick={() => setWatching((prev) => !prev)}>
              {watching ? 'У спостереженні' : 'Наблюдати'}
            </button>
          </div>
        </div>
      </section>

      <div className="auction-direct-bar"><div className="auction-direct-badge">★ Прямий аукціон - 2 травня, 15:30</div></div>

      <section className="car-main">
        <div className="gallery-col">
          <div className="gallery-main-wrap">
            <img className="gallery-main-img" src={images[galleryIndex]} alt={car.title} />
            <button className="gallery-arrow prev" type="button" onClick={() => setGalleryIndex((prev) => (prev - 1 + images.length) % images.length)}>‹</button>
            <button className="gallery-arrow next" type="button" onClick={() => setGalleryIndex((prev) => (prev + 1) % images.length)}>›</button>
            <div className="gallery-counter">{galleryIndex + 1} / {images.length}</div>
          </div>

          <div className="gallery-thumbs">
            {images.map((src, index) => (
              <button key={`${src}-${index}`} type="button" className={galleryIndex === index ? 'thumb-item active' : 'thumb-item'} onClick={() => setGalleryIndex(index)}>
                <img src={src} alt={`${car.title} ${index + 1}`} />
              </button>
            ))}
          </div>

          <a href="#" className="gallery-show-all" onClick={(event) => event.preventDefault()}>Показати всі фото ({images.length})</a>
        </div>

        <div className="specs-col">
          <div className="specs-section">
            <div className="specs-section-title">Основні характеристики</div>
            <div className="spec-row"><span className="spec-label">Lot</span><span className="spec-value" id="sLot">{car.id}</span></div>
            <div className="spec-row"><span className="spec-label">VIN</span><span className="spec-value vin-val" id="sVin">{car.vin}</span><button className="copy-btn" type="button" onClick={() => navigator.clipboard.writeText(car.vin)}>Копіювати</button></div>
            <div className="spec-row"><span className="spec-label">Продавець</span><span className="spec-value"><span className="seller-dot"></span>BIDDERS</span></div>
            <div className="spec-row"><span className="spec-label">Документи</span><span className="spec-value doc-ok">Salvage</span></div>
            <div className="spec-row"><span className="spec-label">Первинне пошкодження</span><span className="spec-value damage-val">{car.damage}</span></div>
            <div className="spec-row"><span className="spec-label">Вторинне пошкодження</span><span className="spec-value">—</span></div>
            <div className="spec-row"><span className="spec-label">Пробіг</span><span className="spec-value">{car.mileageLabel}</span></div>
            <div className="spec-row"><span className="spec-label">Ключ</span><span className="spec-value">Присутній</span></div>
          </div>

          <div className="specs-section">
            <div className="specs-section-title">Технічні характеристики</div>
            <div className="spec-row"><span className="spec-label">Тип кузова</span><span className="spec-value">SUV</span></div>
            <div className="spec-row"><span className="spec-label">Колір</span><span className="spec-value">Чорний</span></div>
            <div className="spec-row"><span className="spec-label">Двигун</span><span className="spec-value">{car.engine}</span></div>
            <div className="spec-row"><span className="spec-label">Коробка передач</span><span className="spec-value">{car.transmission}</span></div>
            <div className="spec-row"><span className="spec-label">Тип палива</span><span className="spec-value">{car.fuel}</span></div>
            <div className="spec-row"><span className="spec-label">Тип приводу</span><span className="spec-value">{car.drive}</span></div>

            <div className={moreSpecsOpen ? 'specs-more-rows open' : 'specs-more-rows'} id="specsMoreRows">
              <div className="spec-row"><span className="spec-label">Початковий код</span><span className="spec-value start-ok">На ходу</span></div>
              <div className="spec-row"><span className="spec-label">ACV / ERC</span><span className="spec-value">{car.estimateLabel}</span></div>
              <div className="spec-row"><span className="spec-label">Розширений тип кузова</span><span className="spec-value">SUV / 4-door</span></div>
              <div className="spec-row"><span className="spec-label">Статус продажу</span><span className="spec-value status-process">В процесі</span></div>
            </div>

            <button className="show-more-btn" type="button" onClick={() => setMoreSpecsOpen((prev) => !prev)}>
              {moreSpecsOpen ? 'Показати менше' : 'Показати більше (4)'}
            </button>
          </div>

          <div className="services-section">
            <div className="services-title">Додаткові послуги</div>
            {[
              { id: 's11', num: '(11)', name: 'Автомобіль з обмеженням на покупку', price: 0 },
              { id: 's12', num: '(12)', name: 'Небезпечний вантаж', price: 0 },
              { id: 's13', num: '(13)', name: 'Великогабаритний', price: 120 },
              { id: 's14', num: '(14)', name: 'Великогабаритний+', price: 240 },
            ].map((service) => {
              const checked = selectedServices.includes(service.id)
              return (
                <button className="service-row" key={service.id} type="button" onClick={() => toggleService(service.id)}>
                  <span className="service-num">{service.num}</span>
                  <span className={checked ? 'service-cb checked' : 'service-cb'}></span>
                  <span className="service-name">{service.name}</span>
                  <span className="service-price">{service.price > 0 ? fmt(service.price) : '$0'}</span>
                </button>
              )
            })}
            <div className="services-note">Встановлення галочки додасть суму до орієнтовної підсумкової ціни.</div>
          </div>
        </div>

        <aside className="sidebar-col">
          <div className="sb-card">
            <div className="bid-block">
              <div className="bid-label">Поточна ставка</div>
              <div className="bid-current">{fmt(car.currentBid)}</div>
              <div className="bid-input-label">Ваша максимальна ставка</div>
              <div className="bid-input-row">
                <button className="bid-adj-btn" type="button" onClick={() => adjustBid(-500)}>−</button>
                <input className="bid-input" value={fmt(bidValue)} readOnly />
                <button className="bid-adj-btn" type="button" onClick={() => adjustBid(500)}>+</button>
              </div>
              <button className="bid-cta" type="button">Зробити ставку зараз</button>
              <a href="#" className="bid-how" onClick={(event) => event.preventDefault()}>Як зробити ставку?</a>
            </div>

            <div className="timer-block">
              <div className="timer-label">Час, що залишився</div>
              <div className={countdownSeconds <= 0 ? 'timer-display expired' : 'timer-display'}>{countdownSeconds <= 0 ? 'Аукціон завершено' : buildCountdownLabel(countdownSeconds)}</div>
              <div className="timer-end">до <strong>2 травня, 15:30</strong></div>
            </div>
          </div>

          <div className="sb-card">
            <div className={priceCalcOpen ? 'calc-accordion open' : 'calc-accordion'}>
              <button className="calc-header" type="button" onClick={() => setPriceCalcOpen((prev) => !prev)}>
                <div className="calc-header-left"><span className="calc-header-title">Калькулятор підсумкової ціни</span><span className="calc-currency">EUR</span></div>
                <span className="calc-arrow">⌄</span>
              </button>
              {priceCalcOpen ? (
                <div className="calc-body"><div className="calc-inner">
                  <div className="calc-estimate-badge">Оціночна вартість</div>
                  <div className="calc-range">{car.estimateLabel}</div>
                  <div className="calc-row"><span className="calc-row-label">Ставка (поточна)</span><span className="calc-row-value">{fmt(bidValue)}</span></div>
                  <div className="calc-row"><span className="calc-row-label">Аукціонний збір</span><span className="calc-row-value">$520</span></div>
                  <div className="calc-row"><span className="calc-row-label">Транспорт до порту</span><span className="calc-row-value">$430</span></div>
                  <div className="calc-row"><span className="calc-row-label">Морська доставка</span><span className="calc-row-value">$995</span></div>
                  <div className="calc-row"><span className="calc-row-label">Документи та сервіс BIDDERS</span><span className="calc-row-value">$450</span></div>
                  <div className="calc-subtotal"><span>Разом (до митниці)</span><span>{fmt(subtotal)}</span></div>
                  <div className="calc-note">Орієнтовна ціна без митних платежів. Курс USD/EUR = 0.91</div>
                </div></div>
              ) : null}
            </div>
          </div>

          <div className="sb-card">
            <div className={customsCalcOpen ? 'calc-accordion open' : 'calc-accordion'}>
              <button className="calc-header" type="button" onClick={() => setCustomsCalcOpen((prev) => !prev)}>
                <div className="calc-header-left"><span className="calc-header-title">Калькулятор митних платежів</span></div>
                <span className="calc-arrow">⌄</span>
              </button>
              {customsCalcOpen ? (
                <div className="calc-body"><div className="calc-inner">
                  <div className="calc-row"><span className="calc-row-label">Мито 10%</span><span className="calc-row-value">{fmtEur(customsTax)}</span></div>
                  <div className="calc-row"><span className="calc-row-label">ПДВ 21%</span><span className="calc-row-value">{fmtEur(vat)}</span></div>
                  <div className="calc-row"><span className="calc-row-label">Брокер та супровід</span><span className="calc-row-value">{fmtEur(broker)}</span></div>
                  <div className="calc-subtotal"><span>Митні платежі</span><span>{fmtEur(customsTotal)}</span></div>
                  <div className="calc-subtotal final"><span>Фінальна вартість</span><span>{fmtEur(finalTotal)}</span></div>
                  <div className="calc-note">Розрахунок орієнтовний. Остаточна вартість може відрізнятись залежно від типу документа та країни.</div>
                </div></div>
              ) : null}
            </div>
          </div>
        </aside>
      </section>

      <section className="lot-sections">
        <article className="lot-section-card">
          <h2>Опис автомобіля</h2>
          <p>{car.title} з VIN {car.vin}. Поточний статус лота: {car.status === 'transit' ? 'в дорозі' : 'на аукціоні'}.</p>
        </article>

        <article className="lot-section-card">
          <h2>Часті запитання</h2>
          <p>Після виграшу ставки ми організовуємо доставку до порту, завантаження в контейнер та супровід розмитнення.</p>
        </article>
      </section>
    </main>
  )
}
