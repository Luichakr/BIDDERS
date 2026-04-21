import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'
import { transitInventory } from '../../../features/inventory/model/catalog.mock'
import { formatCaseMoney, getCasesData, getCaseSavings, type CaseRecord } from '../../../features/cases/model/cases.service'

type FormType = 'b2c' | 'b2b' | null

type B2CState = {
  name: string
  phone: string
  budget: string
  scenario: string
  comment: string
}

type B2BState = {
  company: string
  phone: string
  format: string
  comment: string
}

const INITIAL_B2C: B2CState = {
  name: '',
  phone: '',
  budget: '',
  scenario: '',
  comment: '',
}

const INITIAL_B2B: B2BState = {
  company: '',
  phone: '',
  format: '',
  comment: '',
}

export function HomePage() {
  const [openForm, setOpenForm] = useState<FormType>(null)
  const [casesData, setCasesData] = useState<CaseRecord[]>([])
  const [b2c, setB2c] = useState<B2CState>(INITIAL_B2C)
  const [b2b, setB2b] = useState<B2BState>(INITIAL_B2B)
  const [b2cError, setB2cError] = useState<string>('')
  const [b2bError, setB2bError] = useState<string>('')
  const [b2cSuccess, setB2cSuccess] = useState<string>('')
  const [b2bSuccess, setB2bSuccess] = useState<string>('')
  const [isSubmittingB2c, setIsSubmittingB2c] = useState(false)
  const [isSubmittingB2b, setIsSubmittingB2b] = useState(false)
  const [b2cCountdown, setB2cCountdown] = useState<number | null>(null)
  const [b2bCountdown, setB2bCountdown] = useState<number | null>(null)
  const [showSticky, setShowSticky] = useState(false)
  const b2cModalRef = useRef<HTMLDivElement | null>(null)
  const b2bModalRef = useRef<HTMLDivElement | null>(null)
  const casesScrollRef = useRef<HTMLDivElement | null>(null)
  const [casesProgress, setCasesProgress] = useState(0)
  const [casesPage, setCasesPage] = useState(1)
  const [casesPages, setCasesPages] = useState(1)
  const [casesCanPrev, setCasesCanPrev] = useState(false)
  const [casesCanNext, setCasesCanNext] = useState(true)

  useEffect(() => {
    const el = casesScrollRef.current
    if (!el) return
    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      const ratio = max > 0 ? el.scrollLeft / max : 0
      setCasesProgress(ratio * 100)
      setCasesCanPrev(el.scrollLeft > 4)
      setCasesCanNext(el.scrollLeft < max - 4)
      const card = el.querySelector('.px-case') as HTMLElement | null
      if (card) {
        const step = card.offsetWidth
        const perView = Math.max(1, Math.round(el.clientWidth / step))
        const pages = Math.max(1, Math.ceil(casesData.length / perView))
        const current = Math.min(pages, Math.round((el.scrollLeft / (step * perView)) + 1))
        setCasesPages(pages)
        setCasesPage(current)
      }
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [casesData.length])

  const scrollCases = (direction: 'prev' | 'next') => {
    const el = casesScrollRef.current
    if (!el) return
    const card = el.querySelector('.px-case') as HTMLElement | null
    const step = card ? card.offsetWidth + 20 : 320
    el.scrollBy({ left: direction === 'next' ? step * 3 : -step * 3, behavior: 'smooth' })
  }

  useEffect(() => {
    document.title = 'Ваш надійний партнер по імпорту авто з США, Канади та Кореї | BIDDERS'
    const description = 'Авто під ключ від €8,000. Економія до €7,000. Доставка 45-60 днів. Каталог, авто в дорозі, авто в наявності, огляд на майданчику, застосунок для купівлі на аукціоні.'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.append(meta)
    }
    meta.setAttribute('content', description)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 280)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    void getCasesData().then(setCasesData)
  }, [])

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.bp-animate'))
    if (nodes.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bp-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const transitItems = useMemo(() => transitInventory.slice(0, 3), [])
  const stockItems = useMemo(() => transitInventory.slice(3, 6), [])

  const openB2C = (scenario: string) => {
    setB2c((prev) => ({ ...prev, scenario }))
    setB2cError('')
    setB2cSuccess('')
    setB2cCountdown(null)
    setOpenForm('b2c')
  }

  const openB2B = () => {
    setB2bError('')
    setB2bSuccess('')
    setB2bCountdown(null)
    setOpenForm('b2b')
  }

  const closeForms = () => setOpenForm(null)

  useEffect(() => {
    if (!openForm) return

    const modalNode = openForm === 'b2c' ? b2cModalRef.current : b2bModalRef.current
    if (!modalNode) return

    const prevActive = document.activeElement as HTMLElement | null
    const getFocusables = () =>
      Array.from(
        modalNode.querySelectorAll<HTMLElement>('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'),
      ).filter((el) => !el.hasAttribute('disabled'))

    const focusables = getFocusables()
    focusables[0]?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenForm(null)
        return
      }

      if (event.key !== 'Tab') return
      const items = getFocusables()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      prevActive?.focus()
    }
  }, [openForm])

  useEffect(() => {
    if (b2cCountdown === null) return
    if (b2cCountdown <= 0) {
      setOpenForm(null)
      setB2cSuccess('')
      setB2cCountdown(null)
      return
    }
    const timer = window.setTimeout(() => {
      setB2cCountdown((prev) => (prev === null ? null : prev - 1))
    }, 1000)
    return () => window.clearTimeout(timer)
  }, [b2cCountdown])

  useEffect(() => {
    if (b2bCountdown === null) return
    if (b2bCountdown <= 0) {
      setOpenForm(null)
      setB2bSuccess('')
      setB2bCountdown(null)
      return
    }
    const timer = window.setTimeout(() => {
      setB2bCountdown((prev) => (prev === null ? null : prev - 1))
    }, 1000)
    return () => window.clearTimeout(timer)
  }, [b2bCountdown])

  const onSubmitB2C = async (event: FormEvent) => {
    event.preventDefault()
    if (b2c.name.trim().length < 2) {
      setB2cError('Імʼя має містити мінімум 2 символи.')
      return
    }
    if (!b2c.phone.trim()) {
      setB2cError('Телефон є обовʼязковим.')
      return
    }
    setIsSubmittingB2c(true)
    setB2cError('')
    await new Promise((resolve) => window.setTimeout(resolve, 800))
    setIsSubmittingB2c(false)
    setB2cSuccess('Дякуємо! Ми отримали заявку і звʼяжемося з вами протягом 15 хвилин у робочий час.')
    setB2cCountdown(3)
    setB2c(INITIAL_B2C)
  }

  const onSubmitB2B = async (event: FormEvent) => {
    event.preventDefault()
    if (!b2b.phone.trim()) {
      setB2bError('Телефон є обовʼязковим.')
      return
    }
    if (!b2b.format.trim()) {
      setB2bError('Вкажіть формат співпраці.')
      return
    }
    setIsSubmittingB2b(true)
    setB2bError('')
    await new Promise((resolve) => window.setTimeout(resolve, 800))
    setIsSubmittingB2b(false)
    setB2bSuccess('Дякуємо! Заявку прийнято, спеціаліст B2B напряму звʼяжеться з вами для узгодження умов.')
    setB2bCountdown(3)
    setB2b(INITIAL_B2B)
  }

  return (
    <main className="home-page blueprint-home">
      <section className="px px-hero bp-animate" id="top">
        <div className="px-hero__bg" aria-hidden="true"></div>
        <div className="px-wrap">
          <div className="px-hero__grid px-hero__grid--single">
            <div>
              <span className="px-hero__eyebrow">BIDDERS · 13 років довіри</span>
              <h1 className="px-hero__title">
                Ваш надійний партнер
                <br />
                по імпорту авто з
                <br />
                <em>США, Канади та Кореї</em>
              </h1>
              <p className="px-hero__dominant">Економте до €7,000 на купівлі авто зі США</p>
              <p className="px-hero__lead">
                Від €8,000 під ключ. Середній термін доставки 45–60 днів. Ви заздалегідь знаєте фінальну вартість і отримуєте повний пакет документів.
              </p>
              <div className="px-hero__actions">
                <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C('Hero: Отримати розрахунок під ключ')}>
                  Отримати розрахунок під ключ
                </button>
                <a href="#scenario-router" className="px-btn px-btn--ghost">Дивитися авто</a>
              </div>
              <span className="px-hero__micro">Відповімо протягом 15 хвилин у робочий час</span>
              <div className="px-hero__stats">
                <div>
                  <span className="px-hero__stat-num"><em>€7K</em></span>
                  <span className="px-hero__stat-label">Середня економія</span>
                </div>
                <div>
                  <span className="px-hero__stat-num">45–60</span>
                  <span className="px-hero__stat-label">Днів доставки</span>
                </div>
                <div>
                  <span className="px-hero__stat-num">13</span>
                  <span className="px-hero__stat-label">Років на ринку</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-trust bp-animate" aria-label="Чому нам довіряють">
        <div className="px-wrap">
          <div className="px-trust__grid">
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">13 років на ринку</h3>
                <p className="px-trust__desc">США та Європа</p>
              </div>
            </article>
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">Реальна вартість</h3>
                <p className="px-trust__desc">Фіксуємо ціну ДО купівлі</p>
              </div>
            </article>
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">Трекінг у реальному часі</h3>
                <p className="px-trust__desc">Від порту до дому</p>
              </div>
            </article>
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">Підтримка 24/7</h3>
                <p className="px-trust__desc">Telegram · WhatsApp · телефон</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="scenario-router">
        <div className="px-wrap">
          <div className="px-header">
            <div>
              <p className="px-tag">Маршрутизація · Choose your path</p>
              <h2 className="px-h2">Як ви хочете <em>купити</em> авто?</h2>
              <p className="px-sub">Оберіть сценарій — і ми покажемо наступний крок за кілька секунд.</p>
            </div>
          </div>
          <div className="px-grid-4">
            <article className="px-route">
              <div className="px-route__media">
                <img src={`${import.meta.env.BASE_URL}images/routes/in-stock.webp`} alt="Авто в наявності" loading="lazy" />
                <div className="px-route__top">
                  <span className="px-route__num">01</span>
                  <span className="px-route__pill">В наявності</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9 20v-6h6v6"/></svg>
                </div>
                <h3 className="px-route__title">Авто в наявності</h3>
                <p className="px-route__desc">Можна подивитися наживо вже сьогодні на нашому майданчику.</p>
                <Link className="px-route__cta" to={routes.inStock}>
                  Дивитися авто
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </article>

            <article className="px-route">
              <div className="px-route__media">
                <img src={`${import.meta.env.BASE_URL}images/routes/transit.webp`} alt="Авто в дорозі" loading="lazy" />
                <div className="px-route__top">
                  <span className="px-route__num">02</span>
                  <span className="px-route__pill">В дорозі</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h13a4 4 0 004-4v0H8a5 5 0 00-5 4z"/><path d="M8 13l2-4h5l2 4"/><path d="M7 7h10"/></svg>
                </div>
                <h3 className="px-route__title">Авто в дорозі</h3>
                <p className="px-route__desc">Вже викуплено та рухається до Польщі. Слідкуйте за ETA.</p>
                <Link className="px-route__cta" to={routes.transit}>
                  Дивитися авто
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </article>

            <article className="px-route px-route--primary">
              <div className="px-route__media">
                <img src={`${import.meta.env.BASE_URL}images/routes/auction.jpg`} alt="Під замовлення з аукціону" loading="lazy" />
                <div className="px-route__top">
                  <span className="px-route__num">03</span>
                  <span className="px-route__pill">Під замовлення</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M6 17l4-10 4 4 4-7"/></svg>
                </div>
                <h3 className="px-route__title">Під замовлення з аукціону</h3>
                <p className="px-route__desc">Підбір, перевірка та торги під ваш бюджет — від US/EU/CN.</p>
                <button type="button" className="px-route__cta" onClick={() => openB2C('Під замовлення')}>
                  Отримати розрахунок
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </article>

            <article className="px-route">
              <div className="px-route__media">
                <img src={`${import.meta.env.BASE_URL}images/routes/catalog.webp`} alt="Каталог авто" loading="lazy" />
                <div className="px-route__top">
                  <span className="px-route__num">04</span>
                  <span className="px-route__pill">Каталог</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
                </div>
                <h3 className="px-route__title">Каталог авто</h3>
                <p className="px-route__desc">Масштабний вибір у реальному часі — 200K+ лотів на день.</p>
                <Link className="px-route__cta" to={routes.catalog}>
                  Дивитися авто
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--dark bp-animate" id="economy">
        <div className="px-wrap">
          <div className="px-header">
            <div>
              <p className="px-tag">Економіка · Real numbers</p>
              <h2 className="px-h2">Чому це <em>вигідніше</em>, ніж ринок Польщі</h2>
              <p className="px-sub px-sub--one-line">Реальна економіка на прикладах клієнтів — без округлень і маркетингу.</p>
            </div>
          </div>
          <div className="px-econ__grid">
            <div className="px-econ__cards">
              <article className="px-econ__card">
                <div className="px-econ__card-top">
                  <p className="px-econ__case">Кейс · 01</p>
                  <div className="px-econ__row"><span>Ринок Польщі</span><strong>€18,000</strong></div>
                  <div className="px-econ__row"><span>BIDDERS під ключ</span><strong>€13,500</strong></div>
                  <div className="px-econ__save">
                    <span>Економія €4,500</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </div>
                </div>
                <div className="px-econ__card-media" aria-hidden="true">
                  <img src={`${import.meta.env.BASE_URL}images/economy/case-01.jpg`} alt="" loading="lazy" />
                </div>
              </article>
              <article className="px-econ__card">
                <div className="px-econ__card-top">
                  <p className="px-econ__case">Кейс · 02</p>
                  <div className="px-econ__row"><span>Ринок Польщі</span><strong>€26,000</strong></div>
                  <div className="px-econ__row"><span>BIDDERS під ключ</span><strong>€20,200</strong></div>
                  <div className="px-econ__save">
                    <span>Економія €5,800</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </div>
                </div>
                <div className="px-econ__card-media" aria-hidden="true">
                  <img src={`${import.meta.env.BASE_URL}images/economy/case-02.avif`} alt="" loading="lazy" />
                </div>
              </article>
            </div>
            <aside className="px-econ__big">
              <div className="px-econ__big-media" aria-hidden="true">
                <img src={`${import.meta.env.BASE_URL}images/economy/money.png`} alt="" loading="lazy" />
              </div>
              <div className="px-econ__big-content">
                <p className="px-econ__big-label">Середня економія</p>
                <p className="px-econ__big-num"><em>€3.5K–€7K</em></p>
                <p className="px-econ__big-desc">Приклади базуються на реальних кейсах. Фінальна вартість залежить від моделі, стану авто та логістики.</p>
                <button type="button" className="px-btn px-btn--primary px-econ__big-btn" onClick={() => openB2C('Економіка')}>
                  <span>Порахувати мою економію</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="calculator">
        <div className="px-wrap">
          <div className="px-calc">
            <div>
              <p className="px-tag">Калькулятор · Under-the-hood</p>
              <h2 className="px-h2">Повна вартість — <em>до ставки</em></h2>
              <p className="px-sub" style={{ marginTop: 10 }}>Ви контролюєте бюджет ДО торгів, а не після.</p>
              <ul className="px-calc__check">
                <li>Лот + аукціонні комісії</li>
                <li>Транспорт до порту та океан</li>
                <li>Митниця, податки, сертифікація</li>
                <li>Оформлення та доставка у ваше місто</li>
              </ul>
              <div className="px-calc__actions">
                <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C('Калькулятор')}>
                  <span>Розрахунок під ключ</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
                <Link to={routes.calculator} className="px-btn px-btn--ghost">Відкрити калькулятор</Link>
              </div>
            </div>
            <div className="px-calc__visual" aria-hidden="true">
              <p className="px-calc__visual-title">Приклад · BMW X5 2022</p>
              <div className="px-calc__line"><span>Ставка на торгах</span><strong>€14,800</strong></div>
              <div className="px-calc__line"><span>Комісії аукціону</span><strong>€620</strong></div>
              <div className="px-calc__line"><span>Логістика + океан</span><strong>€2,100</strong></div>
              <div className="px-calc__line"><span>Митниця та оформлення</span><strong>€1,890</strong></div>
              <div className="px-calc__total"><span>Під ключ</span><strong>€19,410</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="in-transit">
        <div className="px-wrap">
          <div className="px-lots-head">
            <div>
              <p className="px-tag">Авто в дорозі · Live tracking</p>
              <h2 className="px-h2">Вже у <em>дорозі</em> до Польщі</h2>
              <p className="px-sub">Викуплені лоти з трекінгом VIN, логістики та ETA прибуття.</p>
            </div>
            <div className="px-lots-head__right">
              <div className="px-route-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                ETA · <strong>45–60 днів</strong>
              </div>
              <Link className="px-btn px-btn--ghost" to={routes.transit}>
                Усі авто
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
          <div className="px-grid-3">
            {transitItems.map((item) => (
              <article className="px-lot" key={item.id}>
                <div className="px-lot__image">
                  <img src={item.image} alt={item.makeModel} loading="lazy" />
                  <span className="px-lot__badge">В дорозі</span>
                  <span className="px-lot__price-tag">{item.currentBid.replace('$', '€')}</span>
                </div>
                <div className="px-lot__body">
                  <h3 className="px-lot__title">{item.year} {item.makeModel}</h3>
                  <p className="px-lot__vin">VIN · {item.vin}</p>
                  <div className="px-lot__journey">
                    <span className="px-lot__journey-point">USA</span>
                    <div className="px-lot__journey-line" />
                    <span className="px-lot__journey-point">POL</span>
                  </div>
                  <div className="px-lot__eta">
                    <span>Прибуття</span>
                    <strong>~ 45–60 днів</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="in-stock">
        <div className="px-wrap">
          <div className="px-lots-head">
            <div>
              <p className="px-tag">В наявності · Walk-in ready</p>
              <h2 className="px-h2">На майданчику — <em>сьогодні</em></h2>
              <p className="px-sub">Приїжджайте, порівняйте варіанти наживо, отримайте консультацію щодо документів і фінальної вартості володіння.</p>
            </div>
            <div className="px-lots-head__right">
              <div className="px-route-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                Jawczyce · <strong>05-850</strong>
              </div>
              <Link className="px-btn px-btn--ghost" to={routes.inStock}>
                Усі авто
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
          <div className="px-grid-3">
            {stockItems.map((item) => (
              <article className="px-lot" key={item.id}>
                <div className="px-lot__image">
                  <img src={item.image} alt={item.makeModel} loading="lazy" />
                  <span className="px-lot__badge">В наявності</span>
                  <span className="px-lot__price-tag">{item.currentBid.replace('$', '€')}</span>
                </div>
                <div className="px-lot__body">
                  <h3 className="px-lot__title">{item.year} {item.makeModel}</h3>
                  <p className="px-lot__vin">VIN · {item.vin}</p>
                  <div className="px-lot__eta">
                    <span>Локація</span>
                    <strong>Jawczyce, PL</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="px-cta-row">
            <p className="px-cta-row__text">Хочете <em>подивитися</em> наживо?</p>
            <button
              type="button"
              className="px-btn px-btn--primary"
              onClick={() => {
                document.getElementById('location')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                openB2C('Огляд')
              }}
            >
              <span>Записатися на огляд</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px px-section bp-animate" id="catalog-block">
        <div className="px-wrap">
          <div className="px-catalog">
            <div>
              <p className="px-tag" style={{ color: 'var(--px-orange)' }}>Каталог · Copart · IAAI · Manheim</p>
              <h2 className="px-h2" style={{ color: '#fff' }}>
                <em>200,000+</em> лотів щодня
              </h2>
              <p className="px-sub" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
                Джерела: Copart, IAAI, Manheim та інші майданчики. Фільтри за бюджетом, роком, пробігом, типом пошкоджень і статусом документів.
              </p>
              <div style={{ marginTop: 28 }}>
                <Link className="px-btn px-btn--primary" to={routes.catalog}>
                  <span>Відкрити каталог</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="px-catalog__stats">
              <div className="px-catalog__stat">
                <span className="px-catalog__stat-num">200K+</span>
                <span className="px-catalog__stat-label">Лотів щодня<br/>оновлення в реальному часі</span>
              </div>
              <div className="px-catalog__stat">
                <span className="px-catalog__stat-num">3+</span>
                <span className="px-catalog__stat-label">Аукціонних майданчики<br/>Copart · IAAI · Manheim</span>
              </div>
              <div className="px-catalog__stat">
                <span className="px-catalog__stat-num">24/7</span>
                <span className="px-catalog__stat-label">Моніторинг лотів<br/>під ваш запит</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--dark bp-animate" id="why-us">
        <div className="px-wrap">
          <div className="px-header">
            <div>
              <p className="px-tag">Чому ми · The Hidden Tax</p>
              <h2 className="px-h2 px-why__heading">
                Ринок <em>забирає</em> гроші.<br/>Ми це закриваємо.
              </h2>
              <p className="px-sub">П'ять болючих точок імпорту авто — і що ми робимо з кожною.</p>
            </div>
          </div>
          <ol className="px-grid-5">
            <li className="px-problem">
              <div className="px-problem__num">01 / 05</div>
              <svg className="px-problem__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
              <h3 className="px-problem__title">Приховані платежі</h3>
              <p className="px-problem__pain">Сюрпризи у кошторисі після торгів</p>
              <div className="px-problem__fix">Фіксований кошторис до ставки</div>
            </li>
            <li className="px-problem">
              <div className="px-problem__num">02 / 05</div>
              <svg className="px-problem__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              <h3 className="px-problem__title">Проблемний лот</h3>
              <p className="px-problem__pain">Ставка наосліп, сюрпризи після викупу</p>
              <div className="px-problem__fix">VIN, історія та експертиза до ставки</div>
            </li>
            <li className="px-problem">
              <div className="px-problem__num">03 / 05</div>
              <svg className="px-problem__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4"/><circle cx="17" cy="9" r="3"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M16 15h2a3 3 0 013 3v2"/></svg>
              <h3 className="px-problem__title">Різні підрядники</h3>
              <p className="px-problem__pain">Брокер, логіст, митник, юрист — окремо</p>
              <div className="px-problem__fix">Один договір. Єдина відповідальність</div>
            </li>
            <li className="px-problem">
              <div className="px-problem__num">04 / 05</div>
              <svg className="px-problem__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <h3 className="px-problem__title">Непрозорі строки</h3>
              <p className="px-problem__pain">«Скоро буде» без конкретних дат</p>
              <div className="px-problem__fix">Трекінг етапів у кабінеті 24/7</div>
            </li>
            <li className="px-problem">
              <div className="px-problem__num">05 / 05</div>
              <svg className="px-problem__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg>
              <h3 className="px-problem__title">Помилки в документах</h3>
              <p className="px-problem__pain">Відмови на митниці та переробки</p>
              <div className="px-problem__fix">Повний супровід оформлення</div>
            </li>
          </ol>
        </div>
      </section>

      <section className="px px-section px-section--light px-section--grad bp-animate" id="how">
        <div className="px-wrap">
          <div className="px-header px-header--split">
            <div>
              <p className="px-tag">Як це працює · The Process</p>
              <h2 className="px-h2">П'ять актів <em>від аукціону</em> до ключів</h2>
            </div>
            <p className="px-sub">Від підбору лота в США, Канаді, Європі чи Китаї — до передачі авто у вашому місті.</p>
          </div>

          <ol className="px-timeline">
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 7-7"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h9"/></svg>
              </div>
              <div className="px-step__num">ACT · 01</div>
              <h3 className="px-step__title">Бриф і бюджет</h3>
              <p className="px-step__desc">Фіксуємо задачу, строки та цільовий бюджет</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
              </div>
              <div className="px-step__num">ACT · 02</div>
              <h3 className="px-step__title">Підбір і перевірка</h3>
              <p className="px-step__desc">VIN, історія та фото — до ставки</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 12l-8 8-3-3 8-8M13 7l4-4 4 4-4 4M11 9l4 4"/></svg>
              </div>
              <div className="px-step__num">ACT · 03</div>
              <h3 className="px-step__title">Торги та викуп</h3>
              <p className="px-step__desc">Безпечна ставка та офіційний викуп лота</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-8h10l3 8h-4M6 12v6h12v-6M6 12h12"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>
              </div>
              <div className="px-step__num">ACT · 04</div>
              <h3 className="px-step__title">Доставка та митниця</h3>
              <p className="px-step__desc">Контейнер, логістика та оформлення</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.85 12.15L19 4M16 6l3 3M14 8l3 3"/></svg>
              </div>
              <div className="px-step__num">ACT · 05</div>
              <h3 className="px-step__title">Видача ключів</h3>
              <p className="px-step__desc">Авто з повним пакетом документів</p>
            </li>
          </ol>

          <div className="px-cta-row">
            <p className="px-cta-row__text">Готові <em>розрахувати</em> ваш автомобіль під ключ?</p>
            <button type="button" className="px-btn" onClick={() => openB2C('Як це працює')}>
              <span>Отримати розрахунок</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="app">
        <div className="px-wrap">
          <div className="px-app">
            <div>
              <p className="px-tag">Застосунок · Ваш кабінет</p>
              <h2 className="px-h2">Керуйте угодою <em>в один клік</em></h2>
              <p className="px-sub" style={{ marginTop: 12, marginBottom: 24 }}>
                Лоти, ставки, AI-аналіз, трекінг доставки, документи та історія платежів — в одному місці.
              </p>
              <ol className="px-app__list">
                <li>Видимість ставок у реальному часі</li>
                <li>Контроль етапів угоди та ETA</li>
                <li>Документи та платежі — прозоро</li>
                <li>Push-сповіщення про ключові події</li>
              </ol>
              <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C('Застосунок')}>
                <span>Отримати доступ</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
            <div className="px-app__preview" aria-hidden="true">
              <div className="px-app__live">Live · Синхронізовано</div>
              <div className="px-app__screen">
                <div className="px-app__screen-row"><span>Lot #44821 · BMW X5</span><strong>€14,800</strong></div>
                <div className="px-app__screen-row"><span>ETA · Контейнер MSCU</span><strong>14 днів</strong></div>
                <div className="px-app__screen-row"><span>Митниця · Gdańsk</span><strong>В роботі</strong></div>
                <div className="px-app__screen-row"><span>Документи</span><strong>3/4 готові</strong></div>
                <div className="px-app__screen-row"><span>Платежі</span><strong>€18,920 / €19,410</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--dark bp-animate" id="cases">
        <div className="px-wrap">
          <div className="px-header px-cases__header">
            <div>
              <p className="px-tag">Кейси · Receipts, not promises</p>
              <h2 className="px-h2">Реальні <em>кейси</em> клієнтів</h2>
              <p className="px-sub">Модель, ціна під ключ, ціна на ринку, підсумкова економія.</p>
            </div>
            <div className="px-cases__nav" aria-label="Навігація по кейсах">
              <div className="px-cases__count">
                <span>{String(casesPage).padStart(2, '0')}</span>
                <span className="px-cases__count-divider">/</span>
                <span>{String(casesPages).padStart(2, '0')}</span>
              </div>
              <button
                type="button"
                className="px-cases__arrow"
                aria-label="Попередні"
                onClick={() => scrollCases('prev')}
                disabled={!casesCanPrev}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button
                type="button"
                className="px-cases__arrow"
                aria-label="Наступні"
                onClick={() => scrollCases('next')}
                disabled={!casesCanNext}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
              </button>
            </div>
          </div>

          <div className="px-cases__viewport">
            <div
              className="px-cases-grid"
              ref={casesScrollRef}
              role="region"
              aria-label="Кейси клієнтів — прокрутка горизонтально"
              tabIndex={0}
            >
              {casesData.map((item) => (
                <article className="px-case" key={item.id}>
                  <div className="px-case__media">
                    {item.image ? (
                      <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.model} loading="lazy" />
                    ) : null}
                  </div>
                  <div className="px-case__body">
                    <h3 className="px-case__title">{item.model}</h3>
                    <div className="px-case__row"><span>Під ключ</span><strong>{formatCaseMoney(item.turnkey, item.currency)}</strong></div>
                    <div className="px-case__row"><span>Ринок Польщі</span><strong>{formatCaseMoney(item.market, item.currency)}</strong></div>
                    <div className="px-case__row px-case__row--save"><span>Економія</span><strong>{formatCaseMoney(getCaseSavings(item), item.currency)}</strong></div>
                    <Link className="px-case__cta" to={routes.cases} aria-label={`Дізнатися більше про ${item.model}`}>
                      Дізнатися більше
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="px-cases__hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></svg>
              <span>Прокрутіть, щоб побачити більше</span>
            </div>
            <div className="px-cases__progress" aria-hidden="true">
              <div className="px-cases__progress-bar" style={{ width: `${Math.max(16, casesProgress)}%` }}></div>
            </div>
          </div>

          <div className="px-cases__footer">
            <Link className="px-btn px-btn--ghost" to={routes.cases}>
              Всі кейси
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="instagram">
        <div className="px-wrap">
          <div className="px-insta">
            <div className="px-insta__lead">
              <p className="px-tag">Стежте за нами · Live feed</p>
              <h2 className="px-h2">Підписуйтесь на наші <em>соціальні мережі</em></h2>
              <p className="px-sub" style={{ marginTop: 12, marginBottom: 28 }}>
                Показуємо реальні авто в дорозі, огляди на майданчику та видачі клієнтам. Підписуйтесь — побачите процес зсередини.
              </p>
              <div className="px-socials">
                <a className="px-social px-social--instagram" href="https://www.instagram.com/bidders_com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <span className="px-social__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  </span>
                  <span className="px-social__label">@bidders_com</span>
                </a>
                <a className="px-social px-social--tiktok" href="https://www.tiktok.com/@bidders_com" target="_blank" rel="noreferrer" aria-label="TikTok">
                  <span className="px-social__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.3c-1.3-.4-2.4-1.3-3-2.5-.3-.6-.5-1.2-.5-1.8h-3.3v13.6c0 .9-.4 1.7-1 2.2-.7.6-1.6.9-2.5.8-1.4-.1-2.5-1.3-2.5-2.8 0-1.7 1.4-3.1 3.1-3.1.3 0 .6 0 .9.1V9.4c-.3 0-.6-.1-.9-.1C6 9.3 3 12.3 3 16s3 6.7 6.7 6.7 6.7-3 6.7-6.7V9.4c1.3.9 2.9 1.4 4.6 1.4V7.5c-.5 0-1-.4-1.4-1.2z"/></svg>
                  </span>
                  <span className="px-social__label">@bidders_com</span>
                </a>
                <a className="px-social px-social--youtube" href="https://www.youtube.com/@bidders" target="_blank" rel="noreferrer" aria-label="YouTube">
                  <span className="px-social__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2c-.3-1-1-1.8-2-2.1C19.2 4.6 12 4.6 12 4.6s-7.2 0-9 .5c-1 .3-1.7 1.1-2 2.1C.5 9 .5 12 .5 12s0 3 .5 4.8c.3 1 1 1.8 2 2.1 1.8.5 9 .5 9 .5s7.2 0 9-.5c1-.3 1.7-1.1 2-2.1.5-1.8.5-4.8.5-4.8s0-3-.5-4.8zM9.7 15.5V8.5l6 3.5-6 3.5z"/></svg>
                  </span>
                  <span className="px-social__label">BIDDERS</span>
                </a>
                <a className="px-social px-social--facebook" href="https://www.facebook.com/bidders.com.ua" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <span className="px-social__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z"/></svg>
                  </span>
                  <span className="px-social__label">bidders.com.ua</span>
                </a>
                <a className="px-social px-social--telegram" href="https://t.me/bidders" target="_blank" rel="noreferrer" aria-label="Telegram">
                  <span className="px-social__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3L2.8 11.7c-1.3.5-1.3 1.3-.2 1.6l4.9 1.5 1.9 5.8c.2.6.1.9.8.9.5 0 .7-.2 1-.5l2.4-2.3 5 3.7c.9.5 1.6.2 1.8-.9l3.3-15.5c.3-1.3-.5-1.9-1.4-1.5zm-3.6 3.4L9 15.2l-.4 3.8L7.7 15l10.6-7.3z"/></svg>
                  </span>
                  <span className="px-social__label">t.me/bidders</span>
                </a>
                <a className="px-social px-social--whatsapp" href="https://wa.me/48784890644" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <span className="px-social__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.2-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.2-.1-.3-.2-.6-.3zM12 2.1C6.5 2.1 2.1 6.5 2.1 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.2 4.9 1.2 5.5 0 9.9-4.4 9.9-9.9S17.5 2.1 12 2.1zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.2.8.8-3.1-.2-.3c-.9-1.4-1.3-3-1.3-4.6C3.4 7.2 7.2 3.4 12 3.4s8.6 3.8 8.6 8.6-3.8 8.6-8.6 8.6z"/></svg>
                  </span>
                  <span className="px-social__label">+48 784 890 644</span>
                </a>
              </div>
            </div>
            <div className="px-insta__phone" aria-hidden="true">
              <img src={`${import.meta.env.BASE_URL}images/economy/insta.png`} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section bp-animate px-location" id="location">
        <div className="px-wrap">
          <div className="px-loc">
            <div className="px-loc__info">
              <p className="px-tag">Майданчик · Польща</p>
              <h2 className="px-h2 px-loc__title">Дивіться авто <em>наживо</em></h2>
              <p className="px-sub px-loc__sub">Покажемо автомобілі, порівняємо варіанти під бюджет, пояснимо все щодо документів і строків.</p>

              <a
                className="px-loc__address"
                href="https://maps.google.com/?q=Jawczyce%20ul.%20Pozna%C5%84ska%2056%2005-850%20Polska"
                target="_blank"
                rel="noreferrer"
                aria-label="Відкрити на карті"
              >
                <span className="px-loc__address-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                </span>
                <span className="px-loc__address-text">
                  <strong>Jawczyce, Polska</strong>
                  <p>ul. Poznańska, 56, 05-850</p>
                </span>
              </a>

              <div className="px-loc__phones">
                <a className="px-loc__phone" href="tel:+48784890644" aria-label="Call +48 784 890 644">
                  <span className="px-loc__phone-num">+48 784 890 644</span>
                  <svg className="px-loc__phone-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <div className="px-loc__phone px-loc__phone--combo">
                  <a className="px-loc__phone-link" href="tel:+48571660242" aria-label="Call +48 571 660 242">
                    <span className="px-loc__phone-num">+48 571 660 242</span>
                  </a>
                  <a className="px-loc__phone-wa" href="https://wa.me/48571660242" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.28-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2-.17-.28-.02-.44.12-.58.13-.12.29-.33.43-.49.14-.17.19-.28.29-.47.09-.19.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.12-.23-.55-.47-.48-.64-.48l-.55-.01c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37 0 1.4 1.02 2.76 1.16 2.95.14.19 2.02 3.09 4.89 4.33.68.29 1.22.47 1.63.6.69.22 1.31.19 1.81.12.55-.08 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.33zM12.04 2C6.52 2 2.05 6.48 2.05 12c0 1.76.46 3.45 1.32 4.93L2 22l5.26-1.38c1.43.78 3.05 1.19 4.78 1.19 5.52 0 10-4.48 10-10S17.56 2 12.04 2z"/></svg>
                  </a>
                  <a className="px-loc__phone-arrowlink" href="tel:+48571660242" aria-label="Call +48 571 660 242">
                    <svg className="px-loc__phone-arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

              <div className="px-loc__actions">
                <a className="px-btn px-btn--ghost" href="https://maps.google.com/?q=Jawczyce%20ul.%20Pozna%C5%84ska%2056%2005-850%20Polska" target="_blank" rel="noreferrer">
                  Побудувати маршрут
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C('Огляд')}>
                  <span>Записатися на огляд</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>

            <div className="px-loc__showroom" aria-hidden="true">
              <img src={`${import.meta.env.BASE_URL}images/location/showroom.webp`} alt="" loading="lazy" />
              <span className="px-loc__kicker">BIDDERS · SHOWROOM</span>
              <span className="px-loc__pin">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="b2b">
        <div className="px-wrap">
          <div className="px-header">
            <div>
              <p className="px-tag">Партнерство · B2B</p>
              <h2 className="px-h2">Партнерьтеся або <em>продайте</em> авто</h2>
              <p className="px-sub">Для дилерів, СТО, логістів і приватних продавців.</p>
            </div>
          </div>
          <div className="px-b2b">
            <article className="px-b2b__card">
              <p className="px-b2b__num">01 · Партнерство</p>
              <h3 className="px-b2b__title">Для дилерів і СТО</h3>
              <p className="px-b2b__desc">Спільні угоди, потік лідів, довгострокова співпраця.</p>
              <ul className="px-b2b__list">
                <li>Фіксована маржа на угоду</li>
                <li>Маркетинг-підтримка та ліди</li>
                <li>Логістичний партнер на весь ланцюг</li>
              </ul>
            </article>
            <article className="px-b2b__card">
              <p className="px-b2b__num">02 · Продаж авто</p>
              <h3 className="px-b2b__title">Продати своє авто</h3>
              <p className="px-b2b__desc">Розміщення, супровід і безпечна угода під ключ.</p>
              <ul className="px-b2b__list">
                <li>Оцінка за 24 години</li>
                <li>Розміщення на наших каналах</li>
                <li>Документальний супровід</li>
              </ul>
            </article>
          </div>
          <button type="button" className="px-btn px-btn--primary" onClick={openB2B}>
            <span>Стати партнером / Продати авто</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>

      <section className="px px-section bp-animate" id="faq">
        <div className="px-wrap">
          <div className="px-header">
            <div>
              <p className="px-tag">FAQ · Straight answers</p>
              <h2 className="px-h2">Часті <em>запитання</em></h2>
            </div>
          </div>
          <div className="px-faq">
            <details>
              <summary>Терміни доставки</summary>
              <p>Середній термін доставки 45–60 днів залежно від порту та завантаженості логістики.</p>
            </details>
            <details>
              <summary>Що входить у «під ключ»</summary>
              <p>Лот, комісії, логістика, митниця, документи та видача авто у вашому місті.</p>
            </details>
            <details>
              <summary>Які гарантії</summary>
              <p>Один договір на весь шлях, прозорий кошторис і перевірка VIN до ставки.</p>
            </details>
            <details>
              <summary>Як працює застосунок</summary>
              <p>У кабінеті видно лоти, статуси, документи, етапи доставки та історію платежів.</p>
            </details>
            <details>
              <summary>Чи можна подивитися авто наживо</summary>
              <p>Так, доступний огляд на майданчику в Jawczyce за попереднім записом.</p>
            </details>
          </div>
          <div style={{ marginTop: 32 }}>
            <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C('FAQ')}>
              <span>Не знайшли відповідь? Запитайте</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px px-final bp-animate" id="contact">
        <div className="px-wrap">
          <div className="px-final__inner">
            <p className="px-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>Без зобов'язань · Final step</p>
            <h1 className="px-final__title">
              Отримайте варіанти <em>вже сьогодні</em>
            </h1>
            <p className="px-final__lead">
              Залиште заявку і отримайте персональний розрахунок під ключ з прогнозом строків та економії.
            </p>
            <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C('Фінальний CTA')}>
              <span>Отримати розрахунок під ключ</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <p className="px-final__micro">Відповімо протягом 15 хвилин у робочий час</p>
          </div>
        </div>
      </section>

      <button
        type="button"
        className={showSticky ? 'bp-sticky-btn show' : 'bp-sticky-btn'}
        onClick={() => openB2C('Sticky CTA')}
      >
        Отримати розрахунок під ключ
      </button>

      {openForm && <div className="bp-modal-backdrop" onClick={closeForms}></div>}

      {openForm === 'b2c' && (
        <div className="bp-modal" ref={b2cModalRef} role="dialog" aria-modal="true" aria-label="Основна форма B2C">
          <button type="button" className="bp-modal-close" onClick={closeForms}>×</button>
          <h3>Отримати розрахунок під ключ</h3>
          <form onSubmit={onSubmitB2C}>
            <label>
              Ім'я
              <input value={b2c.name} onChange={(e) => setB2c((prev) => ({ ...prev, name: e.target.value }))} />
            </label>
            <label>
              Телефон
              <input value={b2c.phone} onChange={(e) => setB2c((prev) => ({ ...prev, phone: e.target.value }))} />
            </label>
            <label>
              Бюджет
              <input value={b2c.budget} onChange={(e) => setB2c((prev) => ({ ...prev, budget: e.target.value }))} placeholder="Опціонально" />
            </label>
            <label>
              Сценарій покупки
              <input value={b2c.scenario} readOnly />
            </label>
            <label>
              Коментар
              <textarea value={b2c.comment} onChange={(e) => setB2c((prev) => ({ ...prev, comment: e.target.value }))}></textarea>
            </label>
            {b2cError && <p className="bp-form-error">{b2cError}</p>}
            {b2cSuccess && <p className="bp-form-success">{b2cSuccess}</p>}
            {b2cSuccess && b2cCountdown !== null && <p className="bp-form-meta">Вікно закриється через {b2cCountdown} с.</p>}
            <button type="submit" className="bp-btn bp-btn-primary" disabled={isSubmittingB2c}>
              {isSubmittingB2c ? 'Відправляємо...' : 'Надіслати заявку'}
            </button>
          </form>
        </div>
      )}

      {openForm === 'b2b' && (
        <div className="bp-modal" ref={b2bModalRef} role="dialog" aria-modal="true" aria-label="B2B форма">
          <button type="button" className="bp-modal-close" onClick={closeForms}>×</button>
          <h3>Партнерство / Продаж авто</h3>
          <form onSubmit={onSubmitB2B}>
            <label>
              Ім'я / Компанія
              <input value={b2b.company} onChange={(e) => setB2b((prev) => ({ ...prev, company: e.target.value }))} />
            </label>
            <label>
              Телефон
              <input value={b2b.phone} onChange={(e) => setB2b((prev) => ({ ...prev, phone: e.target.value }))} />
            </label>
            <label>
              Формат співпраці
              <input value={b2b.format} onChange={(e) => setB2b((prev) => ({ ...prev, format: e.target.value }))} />
            </label>
            <label>
              Коментар
              <textarea value={b2b.comment} onChange={(e) => setB2b((prev) => ({ ...prev, comment: e.target.value }))}></textarea>
            </label>
            {b2bError && <p className="bp-form-error">{b2bError}</p>}
            {b2bSuccess && <p className="bp-form-success">{b2bSuccess}</p>}
            {b2bSuccess && b2bCountdown !== null && <p className="bp-form-meta">Вікно закриється через {b2bCountdown} с.</p>}
            <button type="submit" className="bp-btn bp-btn-primary" disabled={isSubmittingB2b}>
              {isSubmittingB2b ? 'Відправляємо...' : 'Надіслати заявку'}
            </button>
          </form>
        </div>
      )}
    </main>
  )
}
