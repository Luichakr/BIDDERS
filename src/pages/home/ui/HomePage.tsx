import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'
import { formatCaseMoney, getCasesData, getCaseSavings, type CaseRecord } from '../../../features/cases/model/cases.service'
import { useI18n } from '../../../shared/i18n/I18nProvider'

type FormType = 'b2c' | 'b2b' | null

type B2CState = {
  name: string
  phone: string
  email: string
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
  email: '',
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
  const { locale, t } = useI18n()
  const [openForm, setOpenForm] = useState<FormType>(null)
  const [casesData, setCasesData] = useState<CaseRecord[]>([])
  const [b2c, setB2c] = useState<B2CState>(INITIAL_B2C)
  const [b2b, setB2b] = useState<B2BState>(INITIAL_B2B)
  const [b2cBodyType, setB2cBodyType] = useState('sedan')
  const [b2cYearMin, setB2cYearMin] = useState(2018)
  const [b2cYearMax, setB2cYearMax] = useState(2024)
  const [b2cBudgetMin, setB2cBudgetMin] = useState(10000)
  const [b2cBudgetMax, setB2cBudgetMax] = useState(18000)
  const [b2cError, setB2cError] = useState<string>('')
  const [b2bError, setB2bError] = useState<string>('')
  const [b2cSuccess, setB2cSuccess] = useState<string>('')
  const [b2bSuccess, setB2bSuccess] = useState<string>('')
  const [isSubmittingB2c, setIsSubmittingB2c] = useState(false)
  const [isSubmittingB2b, setIsSubmittingB2b] = useState(false)
  const [b2cCountdown, setB2cCountdown] = useState<number | null>(null)
  const [b2bCountdown, setB2bCountdown] = useState<number | null>(null)
  const [showSticky, setShowSticky] = useState(false)
  const CALC_PORTS = useMemo(() => ([
    { id: 'rotterdam',   label: 'Rotterdam, NL',   ocean: 1095, delivery: 640, agency: 540, vat: 0.21 },
    { id: 'gdynia',      label: 'Gdynia, PL',      ocean:  920, delivery: 290, agency: 500, vat: 0.23 },
    { id: 'bremerhaven', label: 'Bremerhaven, DE', ocean: 1030, delivery: 510, agency: 520, vat: 0.19 },
    { id: 'klaipeda',    label: 'Klaipeda, LT',    ocean:  980, delivery: 430, agency: 510, vat: 0.21 },
  ]), [])
  const [calcBid, setCalcBid] = useState<number>(14800)
  const [calcPortId, setCalcPortId] = useState<string>('gdynia')
  const calc = useMemo(() => {
    const bid = Math.max(0, Number.isFinite(calcBid) ? calcBid : 0)
    const port = CALC_PORTS.find(p => p.id === calcPortId) ?? CALC_PORTS[1]
    const auctionFee = bid <= 2000 ? 365 : bid <= 5000 ? 580 : bid <= 10000 ? 830 : bid <= 15000 ? 980 : bid <= 20000 ? 1080 : 1200
    const biddersFee = 600
    const insurance = 80
    const transferFee = 80
    const commission = auctionFee + biddersFee + insurance + transferFee
    const usInland = 270
    const exportDocs = 150
    const logisticsEu = usInland + exportDocs + port.ocean
    const customsBase = bid + auctionFee + usInland + exportDocs + port.ocean
    const importDuty = Math.round(customsBase * 0.10)
    const vat = Math.round((customsBase + importDuty) * port.vat)
    const taxes = importDuty + vat + port.agency
    const cityDelivery = port.delivery
    const total = bid + commission + logisticsEu + taxes + cityDelivery
    const savings = Math.round(total * 0.118)
    return { bid, port, commission, logisticsEu, taxes, cityDelivery, total, savings }
  }, [calcBid, calcPortId, CALC_PORTS])
  const fmtEur = (n: number) => '€' + Math.round(n).toLocaleString('en-US')
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
    const title = t('seoHomeTitle')
    const description = t('seoHomeDescription')
    document.title = title

    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.append(meta)
      }
      meta.setAttribute('content', content)
    }

    const setMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.append(meta)
      }
      meta.setAttribute('content', content)
    }

    setMetaName('description', description)
    setMetaName('twitter:title', title)
    setMetaName('twitter:description', description)
    setMetaProperty('og:title', title)
    setMetaProperty('og:description', description)
    setMetaProperty('og:locale', locale)
  }, [locale, t])

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

  const transitItems = useMemo(
    () => [
      {
        id: '19272',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/bmw-5-series-19272.jpg`,
        year: '2024',
        makeModel: 'BMW 5 Series',
        vin: 'WBA53FJ02RCS33742',
        currentBid: '€53,400',
      },
      {
        id: '17634',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/mercedes-gle53-amg-17634.jpg`,
        year: '2022',
        makeModel: 'Mercedes-Benz GLE 53 AMG',
        vin: '4JGFB6BB9NA588130',
        currentBid: '€50,900',
      },
      {
        id: '17325',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/range-rover-17325.jpg`,
        year: '2019',
        makeModel: 'Land Rover Range Rover',
        vin: 'SALGS2RK6JA383116',
        currentBid: '€49,900',
      },
      {
        id: '18378',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/bmw-x7-18378.jpg`,
        year: '2019',
        makeModel: 'BMW X7',
        vin: '5UXCW2C51KL083498',
        currentBid: '€46,500',
      },
      {
        id: '18911',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/audi-q5-18911.jpg`,
        year: '2012',
        makeModel: 'Audi Q5',
        vin: 'WA1LFAFP2CA048307',
        currentBid: '€7,800',
      },
      {
        id: '20021',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/audi-a6-20021.jpg`,
        year: '2020',
        makeModel: 'Audi A6',
        vin: 'WAUZZZF22LN062806',
        currentBid: '€31,500',
      },
    ],
    [],
  )
  const stockItems = useMemo(
    () => [
      {
        id: 'stock-placeholder-1',
        image: `${import.meta.env.BASE_URL}images/routes/in-stock-cars-bidders-poland.png`,
        year: '2022',
        makeModel: 'BMW X7',
        vin: 'WBA000...1201',
        currentBid: '€59,900',
      },
      {
        id: 'stock-placeholder-2',
        image: `${import.meta.env.BASE_URL}images/routes/in-stock.webp`,
        year: '2021',
        makeModel: 'Audi A6',
        vin: 'WAU000...2202',
        currentBid: '€33,500',
      },
      {
        id: 'stock-placeholder-3',
        image: `${import.meta.env.BASE_URL}images/location/showroom.webp`,
        year: '2020',
        makeModel: 'BMW M3',
        vin: 'WBS000...3303',
        currentBid: '€48,700',
      },
      {
        id: 'stock-placeholder-4',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/bmw-5-series-19272.jpg`,
        year: '2019',
        makeModel: 'BMW 5 Series',
        vin: 'WBA000...4404',
        currentBid: '€27,900',
      },
      {
        id: 'stock-placeholder-5',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/audi-a6-20021.jpg`,
        year: '2018',
        makeModel: 'Audi Q5',
        vin: 'WAU000...5505',
        currentBid: '€24,300',
      },
      {
        id: 'stock-placeholder-6',
        image: `${import.meta.env.BASE_URL}images/transit-showcase/mercedes-gle53-amg-17634.jpg`,
        year: '2022',
        makeModel: 'Mercedes-Benz GLE',
        vin: '4JG000...6606',
        currentBid: '€62,400',
      },
    ],
    [],
  )

  const budgetUi = useMemo(() => {
    if (locale === 'en') {
      return {
        title: 'We will pick a car for your budget',
        subtitle: 'Specify body type, year, and budget. Our manager will send 2–3 real auction options with a full cost estimate.',
        bodyTypeLabel: 'Which body type fits you?',
        yearLabel: 'Year',
        yearRangeLabel: 'Range',
        budgetLabel: 'Your budget',
        budgetHint: 'Estimate',
        contactsLabel: 'Contact details',
        submit: 'Pick a car',
        consent: 'By clicking the button, you agree to personal data processing for vehicle подбор.',
        phonePlaceholder: '+48 000 000 000',
        emailPlaceholder: 'you@email.com',
      }
    }
    if (locale === 'pl') {
      return {
        title: 'Dobierzemy auto do Twojego budżetu',
        subtitle: 'Wskaż typ nadwozia, rocznik i budżet. Menedżer wyśle 2–3 realne opcje z aukcji wraz z pełną kalkulacją.',
        bodyTypeLabel: 'Jaki typ nadwozia Ci odpowiada?',
        yearLabel: 'Rok produkcji',
        yearRangeLabel: 'Zakres',
        budgetLabel: 'Twój budżet',
        budgetHint: 'Orientacyjnie',
        contactsLabel: 'Dane kontaktowe',
        submit: 'Dobierz auto',
        consent: 'Klikając przycisk, zgadzasz się na przetwarzanie danych osobowych do doboru auta.',
        phonePlaceholder: '+48 000 000 000',
        emailPlaceholder: 'you@email.com',
      }
    }
    return {
      title: 'Підберемо авто під ваш бюджет',
      subtitle: 'Вкажіть тип кузова, рік і бюджет. Менеджер надішле 2–3 реальних варіанти з аукціону та повний розрахунок вартості.',
      bodyTypeLabel: 'Який тип кузова вам підходить?',
      yearLabel: 'Рік випуску',
      yearRangeLabel: 'Діапазон',
      budgetLabel: 'Ваш бюджет',
      budgetHint: 'Орієнтир',
      contactsLabel: 'Контактні дані',
      submit: 'Підібрати авто',
      consent: 'Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних для підбору автомобіля.',
      phonePlaceholder: '+48 000 000 000',
      emailPlaceholder: 'you@email.com',
    }
  }, [locale])

  const bodyTypeItems = useMemo(() => {
    const labels =
      locale === 'en'
        ? {
            sedan: 'Sedan',
            crossover: 'Crossover',
            coupe: 'Coupe',
            hatchback: 'Hatchback',
            cabriolet: 'Cabriolet',
            minivan: 'Minivan',
            microbus: 'Microbus',
            pickup: 'Pick up',
          }
        : locale === 'pl'
          ? {
              sedan: 'Sedan',
              crossover: 'Crossover',
              coupe: 'Coupe',
              hatchback: 'Hatchback',
              cabriolet: 'Kabriolet',
              minivan: 'Minivan',
              microbus: 'Mikrobus',
              pickup: 'Pick up',
            }
          : {
              sedan: 'Седан',
              crossover: 'Кросовер',
              coupe: 'Купе',
              hatchback: 'Хетчбек',
              cabriolet: 'Кабріолет',
              minivan: 'Мінівен',
              microbus: 'Мікроавтобус',
              pickup: 'Pick up',
            }

    return [
      { id: 'sedan', image: `${import.meta.env.BASE_URL}images/body-types/sedan.webp`, label: labels.sedan },
      { id: 'crossover', image: `${import.meta.env.BASE_URL}images/body-types/crossover.webp`, label: labels.crossover },
      { id: 'coupe', image: `${import.meta.env.BASE_URL}images/body-types/coupe.webp`, label: labels.coupe },
      { id: 'hatchback', image: `${import.meta.env.BASE_URL}images/body-types/hatchback.webp`, label: labels.hatchback },
      { id: 'cabriolet', image: `${import.meta.env.BASE_URL}images/body-types/cabriolet.webp`, label: labels.cabriolet },
      { id: 'minivan', image: `${import.meta.env.BASE_URL}images/body-types/minivan.webp`, label: labels.minivan },
      { id: 'microbus', image: `${import.meta.env.BASE_URL}images/body-types/microbus.webp`, label: labels.microbus },
      { id: 'pickup', image: `${import.meta.env.BASE_URL}images/body-types/pickup.webp`, label: labels.pickup },
    ]
  }, [locale])

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
      setB2cError(t('homeB2cNameError'))
      return
    }
    if (!b2c.phone.trim()) {
      setB2cError(t('homePhoneRequiredError'))
      return
    }
    setIsSubmittingB2c(true)
    setB2cError('')
    await new Promise((resolve) => window.setTimeout(resolve, 800))
    setIsSubmittingB2c(false)
    setB2cSuccess(t('homeB2cSuccess'))
    setB2cCountdown(3)
    setB2c(INITIAL_B2C)
    setB2cBodyType('sedan')
    setB2cYearMin(2018)
    setB2cYearMax(2024)
    setB2cBudgetMin(10000)
    setB2cBudgetMax(18000)
  }

  const onSubmitB2B = async (event: FormEvent) => {
    event.preventDefault()
    if (!b2b.phone.trim()) {
      setB2bError(t('homePhoneRequiredError'))
      return
    }
    if (!b2b.format.trim()) {
      setB2bError(t('homeB2bFormatError'))
      return
    }
    setIsSubmittingB2b(true)
    setB2bError('')
    await new Promise((resolve) => window.setTimeout(resolve, 800))
    setIsSubmittingB2b(false)
    setB2bSuccess(t('homeB2bSuccess'))
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
              <span className="px-hero__eyebrow">{t('homeHeroEyebrow')}</span>
              <h1 className="px-hero__title">
                {t('homeHeroTitleLineOne')}
                <br />
                {t('homeHeroTitleLineTwo')}
                <br />
                <em>{t('homeHeroTitleAccent')}</em>
              </h1>
              <p className="px-hero__dominant">{t('homeHeroDominant')}</p>
              <p className="px-hero__lead">
                {t('homeHeroLead')}
              </p>
              <div className="px-hero__actions">
                <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C(t('homeScenarioHero'))}>
                  {t('homeHeroPrimaryCta')}
                </button>
                <a href="#scenario-router" className="px-btn px-btn--ghost">{t('homeHeroSecondaryCta')}</a>
              </div>
              <span className="px-hero__micro">{t('homeHeroMicro')}</span>
              <div className="px-hero__stats">
                <div>
                  <span className="px-hero__stat-num"><em>€7K</em></span>
                  <span className="px-hero__stat-label">{t('homeHeroStatSavings')}</span>
                </div>
                <div>
                  <span className="px-hero__stat-num">45–60</span>
                  <span className="px-hero__stat-label">{t('homeHeroStatDeliveryDays')}</span>
                </div>
                <div>
                  <span className="px-hero__stat-num">13</span>
                  <span className="px-hero__stat-label">{t('homeHeroStatYears')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-trust bp-animate" aria-label={t('homeTrustAria')}>
        <div className="px-wrap">
          <div className="px-trust__grid">
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">{t('homeTrustOneTitle')}</h3>
                <p className="px-trust__desc">{t('homeTrustOneDesc')}</p>
              </div>
            </article>
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">{t('homeTrustTwoTitle')}</h3>
                <p className="px-trust__desc">{t('homeTrustTwoDesc')}</p>
              </div>
            </article>
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">{t('homeTrustThreeTitle')}</h3>
                <p className="px-trust__desc">{t('homeTrustThreeDesc')}</p>
              </div>
            </article>
            <article className="px-trust__item">
              <div className="px-trust__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              </div>
              <div>
                <h3 className="px-trust__title">{t('homeTrustFourTitle')}</h3>
                <p className="px-trust__desc">{t('homeTrustFourDesc')}</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="scenario-router">
        <div className="px-wrap">
          <div className="px-header">
            <div>
              <p className="px-tag">{t('homeRouteKicker')}</p>
              <h2 className="px-h2">{t('homeRouteTitle')}</h2>
              <p className="px-sub">{t('homeRouteLead')}</p>
            </div>
          </div>
          <div className="px-grid-4">
            <article className="px-route">
              <div className="px-route__media">
                <img
                  src={`${import.meta.env.BASE_URL}images/routes/in-stock-2026-04-22.png`}
                  alt={t('routeInStockAlt')}
                  title={t('routeInStockAlt')}
                  loading="lazy"
                />
                <div className="px-route__top">
                  <span className="px-route__num">01</span>
                  <span className="px-route__pill">{t('homeRoutePillStock')}</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5L12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9 20v-6h6v6"/></svg>
                </div>
                <h3 className="px-route__title">{t('homeRouteStockTitle')}</h3>
                <p className="px-route__desc">{t('homeRouteStockDesc')}</p>
                <Link className="px-route__cta" to={routes.inStock}>
                  {t('homeRouteViewCarsCta')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </article>

            <article className="px-route">
              <div className="px-route__media">
                <img src={`${import.meta.env.BASE_URL}images/routes/transit-chatgpt-2026-04-22.png`} alt={t('routeTransitAlt')} loading="lazy" />
                <div className="px-route__top">
                  <span className="px-route__num">02</span>
                  <span className="px-route__pill">{t('homeRoutePillTransit')}</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h13a4 4 0 004-4v0H8a5 5 0 00-5 4z"/><path d="M8 13l2-4h5l2 4"/><path d="M7 7h10"/></svg>
                </div>
                <h3 className="px-route__title">{t('homeRouteTransitTitle')}</h3>
                <p className="px-route__desc">{t('homeRouteTransitDesc')}</p>
                <Link className="px-route__cta" to={routes.transit}>
                  {t('homeRouteViewCarsCta')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </article>

            <article className="px-route px-route--primary">
              <div className="px-route__media">
                <img src={`${import.meta.env.BASE_URL}images/routes/order-blue-2026-04-22.png`} alt={t('routeAuctionAlt')} loading="lazy" />
                <div className="px-route__top">
                  <span className="px-route__num">03</span>
                  <span className="px-route__pill">{t('homeRoutePillOrder')}</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16"/><path d="M6 17l4-10 4 4 4-7"/></svg>
                </div>
                <h3 className="px-route__title">{t('homeRouteOrderTitle')}</h3>
                <p className="px-route__desc">{t('homeRouteOrderDesc')}</p>
                <button type="button" className="px-route__cta" onClick={() => openB2C(t('homeScenarioOrder'))}>
                  {t('homeRouteGetEstimateCta')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </article>

            <article className="px-route">
              <div className="px-route__media">
                <img src={`${import.meta.env.BASE_URL}images/routes/catalog-app.webp`} alt={t('routeCatalogAlt')} loading="lazy" />
                <div className="px-route__top">
                  <span className="px-route__num">04</span>
                  <span className="px-route__pill">{t('homeRoutePillCatalog')}</span>
                </div>
              </div>
              <div className="px-route__body">
                <div className="px-route__icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg>
                </div>
                <h3 className="px-route__title">{t('homeRouteCatalogTitle')}</h3>
                <p className="px-route__desc">{t('homeRouteCatalogDesc')}</p>
                <Link className="px-route__cta" to={routes.catalog}>
                  {t('homeRouteViewCarsCta')}
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
              <p className="px-tag">{t('homeEconKicker')}</p>
              <h2 className="px-h2">{t('homeEconTitle')}</h2>
              <p className="px-sub px-sub--one-line">{t('homeEconLead')}</p>
            </div>
          </div>
          <div className="px-econ__grid">
            <div className="px-econ__cards">
              <article className="px-econ__card">
                <div className="px-econ__card-top">
                  <p className="px-econ__case">{t('homeEconCase')} 01</p>
                  <div className="px-econ__row"><span>{t('homeEconMarket')}</span><strong>€18,000</strong></div>
                  <div className="px-econ__row"><span>{t('homeEconTurnkey')}</span><strong>€13,500</strong></div>
                  <div className="px-econ__save">
                    <span>{t('homeEconSave')} €4,500</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
                  </div>
                </div>
                <div className="px-econ__card-media" aria-hidden="true">
                  <img src={`${import.meta.env.BASE_URL}images/economy/case-01.jpg`} alt="" loading="lazy" />
                </div>
              </article>
              <article className="px-econ__card">
                <div className="px-econ__card-top">
                  <p className="px-econ__case">{t('homeEconCase')} 02</p>
                  <div className="px-econ__row"><span>{t('homeEconMarket')}</span><strong>€26,000</strong></div>
                  <div className="px-econ__row"><span>{t('homeEconTurnkey')}</span><strong>€20,200</strong></div>
                  <div className="px-econ__save">
                    <span>{t('homeEconSave')} €5,800</span>
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
                <p className="px-econ__big-label">{t('homeEconAvgSave')}</p>
                <p className="px-econ__big-num"><em>€3.5K–€7K</em></p>
                <p className="px-econ__big-desc">{t('homeEconDesc')}</p>
                <button type="button" className="px-btn px-btn--primary px-econ__big-btn" onClick={() => openB2C(t('homeEconKicker'))}>
                  <span>{t('homeEconBtn')}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="calculator">
        <div className="px-wrap">
          <div className="px-calcx">
            <div className="px-calcx__grid">
              <div className="px-calcx__left">
                <p className="px-tag">{t('homeCalcKicker')}</p>
                <h2 className="px-h2">{t('homeCalcTitle')}</h2>
                <p className="px-sub" style={{ marginTop: 12 }}>{t('homeCalcLead')}</p>
                <ul className="px-calc__check" style={{ marginTop: 24 }}>
                  <li>{t('homeCalcCheck1')}</li>
                  <li>{t('homeCalcCheck2')}</li>
                  <li>{t('homeCalcCheck3')}</li>
                  <li>{t('homeCalcCheck4')}</li>
                </ul>
                <div className="px-calcx__badge">
                  <div className="px-calcx__badge-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.8 5.8 21 7 14 2 9.3 9 8.5 12 2"/></svg>
                  </div>
                  <div>
                    <strong>{t('homeCalcBadge')}</strong>
                    <p>{t('homeCalcBadgeSave').replace('{amount}', fmtEur(calc.savings))}</p>
                  </div>
                </div>
                <div className="px-calc__actions" style={{ marginTop: 24 }}>
                  <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C(t('homeCalcKicker'))}>
                    <span>{t('homeCalcBtn')}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </button>
                  <Link to={routes.calculator} className="px-btn px-btn--ghost">{t('homeCalcBtnOpen')}</Link>
                </div>
              </div>

              <div className="px-calcx__right">
                <div
                  className="px-calcx__car"
                  aria-hidden="true"
                  style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/calc-car.jpg)` }}
                />
                <div className="px-calcx__card">
                  <div className="px-calcx__card-head">
                    <div>
                      <p className="px-calcx__card-tag">{t('homeCalcCardTag')}</p>
                      <p className="px-calcx__card-title">{t('homeCalcCardTitle')}</p>
                    </div>
                    <label className="px-calcx__dest" aria-label={t('homeCalcDestLabel')}>
                      <select value={calcPortId} onChange={(e) => setCalcPortId(e.target.value)}>
                        {CALC_PORTS.map(p => (
                          <option key={p.id} value={p.id}>USA → {p.label}</option>
                        ))}
                      </select>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </label>
                  </div>

                  <label className="px-calcx__bid px-calcx__bid--active">
                    <span className="px-calcx__bid-label">
                      {t('homeCalcBidLabel')}
                      <em className="px-calcx__bid-hint">{t('homeCalcBidHint')}</em>
                    </span>
                    <div className="px-calcx__bid-input">
                      <span className="px-calcx__bid-cur">€</span>
                      <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        step={100}
                        value={Number.isFinite(calcBid) ? calcBid : ''}
                        onChange={(e) => setCalcBid(Number(e.target.value.replace(/[^\d]/g, '')) || 0)}
                        onFocus={(e) => e.currentTarget.select()}
                        aria-label={t('homeCalcBidAria')}
                      />
                      <svg className="px-calcx__bid-pencil" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
                    </div>
                  </label>

                  <div className="px-calcx__rows">
                    <div className="px-calc__line"><span>{t('homeCalcLine1')}</span><strong>{fmtEur(calc.commission)}</strong></div>
                    <div className="px-calc__line"><span>{t('homeCalcLine2')}</span><strong>{fmtEur(calc.logisticsEu)}</strong></div>
                    <div className="px-calc__line"><span>{t('homeCalcLine3').replace('{vat}', String(Math.round(calc.port.vat * 100)))}</span><strong>{fmtEur(calc.taxes)}</strong></div>
                    <div className="px-calc__line"><span>{t('homeCalcLine4')}</span><strong>{fmtEur(calc.cityDelivery)}</strong></div>
                  </div>

                  <div className="px-calc__total">
                    <span>{t('homeCalcTotal').replace('{port}', calc.port.label)}</span>
                    <strong>{fmtEur(calc.total)}</strong>
                  </div>

                  <p className="px-calcx__note">
                    {t('homeCalcNote')}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-calcx__steps" aria-label={t('homeHowKicker')}>
              {[
                { n: 1, t: t('homeCalcStep1'), d: t('homeCalcStep1Desc') },
                { n: 2, t: t('homeCalcStep2'), d: t('homeCalcStep2Desc') },
                { n: 3, t: t('homeCalcStep3'), d: t('homeCalcStep3Desc') },
                { n: 4, t: t('homeCalcStep4'), d: t('homeCalcStep4Desc') },
              ].map((s, i, arr) => (
                <div key={s.n} className="px-calcx__step">
                  <div className="px-calcx__step-num">{s.n}</div>
                  <div>
                    <strong>{s.t}</strong>
                    <p>{s.d}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <svg className="px-calcx__step-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  )}
                </div>
              ))}
            </div>

            <div className="px-calcx__trust">
              <div>
                <strong>{t('homeCalcTrust1')}</strong>
                <p>{t('homeCalcTrust1Desc')}</p>
              </div>
              <div>
                <strong>{t('homeCalcTrust2')}</strong>
                <p>{t('homeCalcTrust2Desc')}</p>
              </div>
              <div>
                <strong>{t('homeCalcTrust3')}</strong>
                <p>{t('homeCalcTrust3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="in-transit">
        <div className="px-wrap">
          <div className="px-lots-head">
            <div>
              <p className="px-tag">{t('homeTransitKicker')}</p>
              <h2 className="px-h2">{t('homeTransitHeading')}</h2>
              <p className="px-sub">{t('homeTransitLead')}</p>
            </div>
            <div className="px-lots-head__right">
              <div className="px-route-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                {t('homeTransitEta')}
              </div>
              <Link className="px-btn px-btn--ghost" to={routes.transit} aria-label={t('homeTransitCtaAll')}>
                {t('homeTransitCtaAll')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
          <div className="px-grid-3 px-grid-3--scroll">
            {transitItems.map((item) => (
              <Link className="px-lot px-lot--link" key={item.id} to={routes.lotDetail.replace(':lotId', item.id)}>
                <div className="px-lot__image">
                  <img src={item.image} alt={t('routeTransitAlt')} loading="lazy" />
                  <span className="px-lot__badge">{t('homeTransitBadge')}</span>
                  <span className="px-lot__price-tag">{item.currentBid}</span>
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
                    <span>{locale === 'pl' ? 'Przyjazd' : locale === 'en' ? 'Arrival' : 'Прибуття'}</span>
                    <strong>{t('homeTransitEta').replace('ETA · ', '~ ')}</strong>
                  </div>
                </div>
              </Link>
            ))}

            <article className="px-lot px-lot--cta">
              <div className="px-lot__image px-lot__image--cta">
                <img
                  src={`${import.meta.env.BASE_URL}images/transit-showcase/bmw-x7-18378.jpg`}
                  alt={t('transitCtaAlt')}
                  loading="lazy"
                />
                <span className="px-lot__badge px-lot__badge--cta">{locale === 'pl' ? '1800+ w drodze' : locale === 'en' ? '1800+ in transit' : '1800+ в дорозі'}</span>
              </div>
              <div className="px-lot__body px-lot__body--cta">
                <h3 className="px-lot__title px-lot__title--cta">{t('homeTransitCardViewAll')}</h3>
                <p className="px-lot__desc px-lot__desc--cta">{t('homeTransitCardMore')}</p>
                <Link className="px-route__cta px-route__cta--inline" to={routes.transit} aria-label={t('homeTransitCtaViewAll')}>
                  {t('homeTransitCtaViewAll')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="in-stock">
        <div className="px-wrap">
          <div className="px-lots-head">
            <div>
              <p className="px-tag">{t('homeStockKicker')}</p>
              <h2 className="px-h2">{t('homeStockHeading')}</h2>
              <p className="px-sub">{t('homeStockLead')}</p>
            </div>
            <div className="px-lots-head__right">
              <div className="px-route-chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                {t('homeStockLocation')}
              </div>
              <Link className="px-btn px-btn--ghost" to={routes.inStock} aria-label={t('homeStockCtaAll')}>
                {t('homeStockCtaAll')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
          <div className="px-grid-3 px-grid-3--scroll">
            {stockItems.map((item) => (
              <article className="px-lot" key={item.id}>
                <div className="px-lot__image">
                  <img src={item.image} alt={item.makeModel} loading="lazy" />
                  <span className="px-lot__badge">{t('homeStockBadge')}</span>
                  <span className="px-lot__price-tag">{item.currentBid}</span>
                </div>
                <div className="px-lot__body">
                  <h3 className="px-lot__title">{item.year} {item.makeModel}</h3>
                  <p className="px-lot__vin">VIN · {item.vin}</p>
                  <div className="px-lot__eta">
                    <span>{t('homeStockLoc')}</span>
                    <strong>{t('homeStockLocCity')}</strong>
                  </div>
                </div>
              </article>
            ))}

            <article className="px-lot px-lot--cta">
              <div className="px-lot__image px-lot__image--cta">
                <img
                  src={`${import.meta.env.BASE_URL}images/routes/in-stock-cars-bidders-poland.png`}
                  alt={t('stockCtaAlt')}
                  loading="lazy"
                />
                <span className="px-lot__badge px-lot__badge--cta">{t('homeStockBadge')}</span>
              </div>
              <div className="px-lot__body px-lot__body--cta">
                <h3 className="px-lot__title px-lot__title--cta">{t('homeStockCardViewAll')}</h3>
                <p className="px-lot__desc px-lot__desc--cta">{t('homeStockCardViewAllDesc')}</p>
                <Link className="px-route__cta px-route__cta--inline" to={routes.inStock} aria-label={t('homeStockCardViewAllCta')}>
                  {t('homeStockCardViewAllCta')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
          <div className="px-cta-row">
            <p className="px-cta-row__text">{t('homeStockLiveQuestion')}</p>
            <button
              type="button"
              className="px-btn px-btn--primary"
              onClick={() => {
                document.getElementById('location')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                openB2C(t('homeStockLiveSchedule'))
              }}
            >
              <span>{t('homeStockLiveSchedule')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px px-section bp-animate" id="catalog-block">
        <div className="px-wrap">
          <div className="px-catalog2">
            <div className="px-catalog2__top">
              <div className="px-catalog2__left">
                <p className="px-tag" style={{ color: 'var(--px-orange)' }}>{t('homeCatalogKicker')}</p>
                <h2 className="px-h2" style={{ color: '#fff' }}>
                  {t('homeCatalogHeading').split(' ').slice(0, 1).join(' ')}<br/>{t('homeCatalogHeading').split(' ').slice(1).join(' ')}
                </h2>
                <p className="px-sub" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
                  {t('homeCatalogLead')}
                </p>
                <div className="px-catalog2__actions">
                  <Link className="px-btn px-btn--primary" to={routes.catalog}>
                    <span>{t('homeCatalogCta')}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </Link>
                  <a className="px-catalog2__video" href="#how">
                    <span className="px-catalog2__video-play" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </span>
                    <span>
                      <strong>{t('homeCatalogVideo')}</strong>
                      <em>{t('homeCatalogVideoTime')}</em>
                    </span>
                  </a>
                </div>
              </div>

              <div className="px-catalog2__center" aria-hidden="true">
                <div className="px-catalog2__map">
                  <span className="px-catalog2__pin px-catalog2__pin--us">USA</span>
                  <span className="px-catalog2__pin px-catalog2__pin--eu">EUROPE</span>
                </div>
                <img className="px-catalog2__car" src={`${import.meta.env.BASE_URL}images/catalog/app.webp`} alt="" />
              </div>

              <div className="px-catalog2__stats">
                <div className="px-catalog2__stat">
                  <span className="px-catalog2__stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 13l2-6a2 2 0 0 1 2-1.5h10a2 2 0 0 1 2 1.5l2 6v5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5z"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg>
                  </span>
                  <div>
                    <strong>{t('homeCatalogStat1Value')}</strong>
                    <p>{t('homeCatalogStat1Label')}</p>
                  </div>
                </div>
                <div className="px-catalog2__stat">
                  <span className="px-catalog2__stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4l6 6-8 8H6v-6z"/><path d="M3 21h18"/></svg>
                  </span>
                  <div>
                    <strong>{t('homeCatalogStat2Value')}</strong>
                    <p>{t('homeCatalogStat2Label')}</p>
                  </div>
                </div>
                <div className="px-catalog2__stat">
                  <span className="px-catalog2__stat-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </span>
                  <div>
                    <strong>{t('homeCatalogStat3Value')}</strong>
                    <p>{t('homeCatalogStat3Label')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-catalog2__features">
              <div className="px-catalog2__feat">
                <span className="px-catalog2__feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18l-7 9v6l-4 2v-8z"/></svg>
                </span>
                <div>
                  <strong>{t('homeCatalogFeat1Title')}</strong>
                  <p>{t('homeCatalogFeat1Desc')}</p>
                </div>
              </div>
              <div className="px-catalog2__feat">
                <span className="px-catalog2__feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>
                </span>
                <div>
                  <strong>{t('homeCatalogFeat2Title')}</strong>
                  <p>{t('homeCatalogFeat2Desc')}</p>
                </div>
              </div>
              <div className="px-catalog2__feat">
                <span className="px-catalog2__feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>
                </span>
                <div>
                  <strong>{t('homeCatalogFeat3Title')}</strong>
                  <p>{t('homeCatalogFeat3Desc')}</p>
                </div>
              </div>
              <div className="px-catalog2__feat">
                <span className="px-catalog2__feat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4v6c0 5-3.5 9-9 10-5.5-1-9-5-9-10V6z"/></svg>
                </span>
                <div>
                  <strong>{t('homeCatalogFeat4Title')}</strong>
                  <p>{t('homeCatalogFeat4Desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light px-section--grad bp-animate" id="how">
        <div className="px-wrap">
          <div className="px-header px-header--split">
            <div>
              <p className="px-tag">{t('homeHowKicker')}</p>
              <h2 className="px-h2">{t('homeHowHeading')}</h2>
            </div>
            <p className="px-sub">{t('homeHowLead')}</p>
          </div>

          <ol className="px-timeline">
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3 7-7"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h9"/></svg>
              </div>
              <div className="px-step__num">{t('homeHowAct')} 01</div>
              <h3 className="px-step__title">{t('homeStep1Title')}</h3>
              <p className="px-step__desc">{t('homeStep1Desc')}</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
              </div>
              <div className="px-step__num">{t('homeHowAct')} 02</div>
              <h3 className="px-step__title">{t('homeStep2Title')}</h3>
              <p className="px-step__desc">{t('homeStep2Desc')}</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 12l-8 8-3-3 8-8M13 7l4-4 4 4-4 4M11 9l4 4"/></svg>
              </div>
              <div className="px-step__num">{t('homeHowAct')} 03</div>
              <h3 className="px-step__title">{t('homeStep3Title')}</h3>
              <p className="px-step__desc">{t('homeStep3Desc')}</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-8h10l3 8h-4M6 12v6h12v-6M6 12h12"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>
              </div>
              <div className="px-step__num">{t('homeHowAct')} 04</div>
              <h3 className="px-step__title">{t('homeStep4Title')}</h3>
              <p className="px-step__desc">{t('homeStep4Desc')}</p>
            </li>
            <li className="px-step">
              <div className="px-step__dot">
                <svg className="px-step__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.85 12.15L19 4M16 6l3 3M14 8l3 3"/></svg>
              </div>
              <div className="px-step__num">{t('homeHowAct')} 05</div>
              <h3 className="px-step__title">{t('homeStep5Title')}</h3>
              <p className="px-step__desc">{t('homeStep5Desc')}</p>
            </li>
          </ol>

          <div className="px-cta-row">
            <p className="px-cta-row__text">{t('homeHowCtaLead')}</p>
            <button type="button" className="px-btn" onClick={() => openB2C(t('homeHowCtaBtn'))}>
              <span>{t('homeHowCtaBtn')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="app">
        <div className="px-wrap">
          <div className="px-app">
            <div>
              <p className="px-tag">{t('homeAppKicker')}</p>
              <h2 className="px-h2">{t('homeAppHeading')}</h2>
              <p className="px-sub" style={{ marginTop: 12, marginBottom: 24 }}>
                {t('homeAppLead')}
              </p>
              <ol className="px-app__list">
                <li>{t('homeAppFeature1')}</li>
                <li>{t('homeAppFeature2')}</li>
                <li>{t('homeAppFeature3')}</li>
                <li>{t('homeAppFeature4')}</li>
              </ol>
              <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C(t('homeAppCta'))}>
                <span>{t('homeAppCta')}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>
            <div className="px-app__preview" aria-hidden="true">
              <div className="px-app__live">{t('homeAppLive')}</div>
              <div className="px-app__screen">
                <div className="px-app__screen-row"><span>{t('homeAppRow1Label')}</span><strong>€14,800</strong></div>
                <div className="px-app__screen-row"><span>{t('homeAppRow2Label')}</span><strong>{locale === 'pl' ? '14 dni' : locale === 'en' ? '14 days' : '14 днів'}</strong></div>
                <div className="px-app__screen-row"><span>{t('homeAppRow3Label')}</span><strong>{locale === 'pl' ? 'W toku' : locale === 'en' ? 'In progress' : 'В роботі'}</strong></div>
                <div className="px-app__screen-row"><span>{t('homeAppRow4Label')}</span><strong>{locale === 'pl' ? '3/4 gotowe' : locale === 'en' ? '3/4 ready' : '3/4 готові'}</strong></div>
                <div className="px-app__screen-row"><span>{t('homeAppRow5Label')}</span><strong>€18,920 / €19,410</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--dark bp-animate" id="cases">
        <div className="px-wrap">
          <div className="px-header px-cases__header">
            <div>
              <p className="px-tag">{t('homeCasesKicker')}</p>
              <h2 className="px-h2">{t('homeCasesHeading')}</h2>
              <p className="px-sub">{t('homeCasesLead')}</p>
            </div>
            <div className="px-cases__nav" aria-label={t('homeCasesNavLabel')}>
              <div className="px-cases__count">
                <span>{String(casesPage).padStart(2, '0')}</span>
                <span className="px-cases__count-divider">/</span>
                <span>{String(casesPages).padStart(2, '0')}</span>
              </div>
              <button
                type="button"
                className="px-cases__arrow"
                aria-label={t('homeCasesNavPrev')}
                onClick={() => scrollCases('prev')}
                disabled={!casesCanPrev}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button
                type="button"
                className="px-cases__arrow"
                aria-label={t('homeCasesNavNext')}
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
              aria-label={t('homeCasesViewportLabel')}
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
                    <div className="px-case__row"><span>{t('homeCasesRowLabel1')}</span><strong>{formatCaseMoney(item.turnkey, item.currency)}</strong></div>
                    <div className="px-case__row"><span>{t('homeCasesRowLabel2')}</span><strong>{formatCaseMoney(item.market, item.currency)}</strong></div>
                    <div className="px-case__row px-case__row--save"><span>{t('homeCasesRowLabel3')}</span><strong>{formatCaseMoney(getCaseSavings(item), item.currency)}</strong></div>
                    <Link className="px-case__cta" to={routes.cases} aria-label={`${t('homeCasesCardMore')} ${item.model}`}>
                      {t('homeCasesCardMore')}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="px-cases__hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></svg>
              <span>{t('homeCasesHint')}</span>
            </div>
            <div className="px-cases__progress" aria-hidden="true">
              <div className="px-cases__progress-bar" style={{ width: `${Math.max(16, casesProgress)}%` }}></div>
            </div>
          </div>

          <div className="px-cases__footer">
            <Link className="px-btn px-btn--ghost" to={routes.cases}>
              {t('homeCasesFooter')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="px px-section px-section--light bp-animate" id="instagram">
        <div className="px-wrap">
          <div className="px-insta">
            <div className="px-insta__lead">
              <p className="px-tag">{t('homeSocialKicker')}</p>
              <h2 className="px-h2">{t('homeSocialHeading')}</h2>
              <p className="px-sub" style={{ marginTop: 12, marginBottom: 28 }}>
                {t('homeSocialLead')}
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
              <p className="px-tag">{t('homeLocKicker')}</p>
              <h2 className="px-h2 px-loc__title">{t('homeLocHeading')}</h2>
              <p className="px-sub px-loc__sub">{t('homeLocLead')}</p>

              <a
                className="px-loc__address"
                href="https://maps.google.com/?q=Jawczyce%20ul.%20Pozna%C5%84ska%2056%2005-850%20Polska"
                target="_blank"
                rel="noreferrer"
                aria-label={t('homeLocMapClick')}
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
                  {t('homeLocRoute')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C(t('homeLocShowroom'))}>
                  <span>{t('homeLocShowroom')}</span>
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
              <p className="px-tag">{t('homeB2bKicker')}</p>
              <h2 className="px-h2">{t('homeB2bHeading')}</h2>
              <p className="px-sub">{t('homeB2bLead')}</p>
            </div>
          </div>
          <div className="px-b2b">
            <article className="px-b2b__card">
              <p className="px-b2b__num">{t('homeB2bCard1Num')}</p>
              <h3 className="px-b2b__title">{t('homeB2bCard1Title')}</h3>
              <p className="px-b2b__desc">{t('homeB2bCard1Desc')}</p>
              <ul className="px-b2b__list">
                <li>{t('homeB2bCard1Item1')}</li>
                <li>{t('homeB2bCard1Item2')}</li>
                <li>{t('homeB2bCard1Item3')}</li>
              </ul>
            </article>
            <article className="px-b2b__card">
              <p className="px-b2b__num">{t('homeB2bCard2Num')}</p>
              <h3 className="px-b2b__title">{t('homeB2bCard2Title')}</h3>
              <p className="px-b2b__desc">{t('homeB2bCard2Desc')}</p>
              <ul className="px-b2b__list">
                <li>{t('homeB2bCard2Item1')}</li>
                <li>{t('homeB2bCard2Item2')}</li>
                <li>{t('homeB2bCard2Item3')}</li>
              </ul>
            </article>
          </div>
          <button type="button" className="px-btn px-btn--primary" onClick={openB2B}>
            <span>{t('homeB2bCta')}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>

      <section className="px px-section bp-animate" id="faq">
        <div className="px-wrap">
          <div className="px-header">
            <div>
              <p className="px-tag">{t('homeFaqKicker')}</p>
              <h2 className="px-h2">{t('homeFaqHeading')}</h2>
            </div>
          </div>
          <div className="px-faq">
            <details>
              <summary>{t('homeFaq1Q')}</summary>
              <p>{t('homeFaq1A')}</p>
            </details>
            <details>
              <summary>{t('homeFaq2Q')}</summary>
              <p>{t('homeFaq2A')}</p>
            </details>
            <details>
              <summary>{t('homeFaq3Q')}</summary>
              <p>{t('homeFaq3A')}</p>
            </details>
            <details>
              <summary>{t('homeFaq4Q')}</summary>
              <p>{t('homeFaq4A')}</p>
            </details>
            <details>
              <summary>{t('homeFaq5Q')}</summary>
              <p>{t('homeFaq5A')}</p>
            </details>
          </div>
          <div style={{ marginTop: 32 }}>
            <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C(t('homeFaqCtaButton'))}>
              <span>{t('homeFaqCtaButton')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px px-final bp-animate" id="contact">
        <div className="px-wrap">
          <div className="px-final__inner">
            <p className="px-tag" style={{ justifyContent: 'center', display: 'inline-flex' }}>{t('homeFinalTag')}</p>
            <h1 className="px-final__title">
              {t('homeFinalTitle')} <em>{t('homeFinalTitleAccent')}</em>
            </h1>
            <p className="px-final__lead">
              {t('homeFinalLead')}
            </p>
            <button type="button" className="px-btn px-btn--primary" onClick={() => openB2C(t('homeScenarioFinalCta'))}>
              <span>{t('homeFinalPrimaryCta')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <p className="px-final__micro">{t('homeFinalMicro')}</p>
          </div>
        </div>
      </section>

      <button
        type="button"
        className={showSticky ? 'bp-sticky-btn show' : 'bp-sticky-btn'}
        onClick={() => openB2C(t('homeScenarioSticky'))}
      >
        {t('homeStickyCta')}
      </button>

      {openForm && <div className="bp-modal-backdrop" onClick={closeForms}></div>}

      {openForm === 'b2c' && (
        <div className="bp-modal bp-modal--budget" ref={b2cModalRef} role="dialog" aria-modal="true" aria-label={t('homeModalB2cAria')}>
          <button type="button" className="bp-modal-close" onClick={closeForms}>×</button>
          <h3 className="bp-budget-modal__title">{budgetUi.title}</h3>
          <p className="bp-budget-modal__lead">{budgetUi.subtitle}</p>

          <form onSubmit={onSubmitB2C}>
            <section className="bp-budget-block">
              <p className="bp-budget-block__label">{budgetUi.bodyTypeLabel}</p>
              <div className="bp-budget-bodytypes">
                {bodyTypeItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={item.id === b2cBodyType ? 'bp-budget-bodytype is-active' : 'bp-budget-bodytype'}
                    onClick={() => setB2cBodyType(item.id)}
                  >
                    <img src={item.image} alt={item.label} loading="lazy" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </section>

            <div className="bp-budget-sliders">
              <section className="bp-budget-block">
                <div className="bp-budget-block__head">
                  <p className="bp-budget-block__label">{budgetUi.yearLabel}</p>
                  <span className="bp-budget-chip">{b2cYearMin} - {b2cYearMax}</span>
                </div>
                <p className="bp-budget-block__hint">{budgetUi.yearRangeLabel}</p>
                <div className="bp-budget-range">
                  <div className="bp-budget-range__track"></div>
                  <div
                    className="bp-budget-range__active"
                    style={{
                      left: `${((b2cYearMin - 2005) / (2025 - 2005)) * 100}%`,
                      width: `${((b2cYearMax - b2cYearMin) / (2025 - 2005)) * 100}%`,
                    }}
                  ></div>
                  <input
                    type="range"
                    min={2005}
                    max={2025}
                    value={b2cYearMin}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      setB2cYearMin(Math.min(value, b2cYearMax - 1))
                    }}
                  />
                  <input
                    type="range"
                    min={2005}
                    max={2025}
                    value={b2cYearMax}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      setB2cYearMax(Math.max(value, b2cYearMin + 1))
                    }}
                  />
                </div>
                <div className="bp-budget-range__ends">
                  <span>2005</span>
                  <span>2025</span>
                </div>
              </section>

              <section className="bp-budget-block">
                <div className="bp-budget-block__head">
                  <p className="bp-budget-block__label">{budgetUi.budgetLabel}</p>
                  <span className="bp-budget-chip">
                    ${b2cBudgetMin.toLocaleString('en-US')} - ${b2cBudgetMax.toLocaleString('en-US')}
                  </span>
                </div>
                <p className="bp-budget-block__hint">{budgetUi.budgetHint}</p>
                <div className="bp-budget-range">
                  <div className="bp-budget-range__track"></div>
                  <div
                    className="bp-budget-range__active"
                    style={{
                      left: `${((b2cBudgetMin - 3000) / (50000 - 3000)) * 100}%`,
                      width: `${((b2cBudgetMax - b2cBudgetMin) / (50000 - 3000)) * 100}%`,
                    }}
                  ></div>
                  <input
                    type="range"
                    min={3000}
                    max={50000}
                    step={500}
                    value={b2cBudgetMin}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      setB2cBudgetMin(Math.min(value, b2cBudgetMax - 500))
                    }}
                  />
                  <input
                    type="range"
                    min={3000}
                    max={50000}
                    step={500}
                    value={b2cBudgetMax}
                    onChange={(e) => {
                      const value = Number(e.target.value)
                      setB2cBudgetMax(Math.max(value, b2cBudgetMin + 500))
                    }}
                  />
                </div>
                <div className="bp-budget-range__ends">
                  <span>$3,000</span>
                  <span>$50,000</span>
                </div>
              </section>
            </div>

            <section className="bp-budget-block">
              <p className="bp-budget-block__label">{budgetUi.contactsLabel}</p>
              <div className="bp-budget-fields">
                <label>
                  {t('homeModalNameLabel')}
                  <input value={b2c.name} onChange={(e) => setB2c((prev) => ({ ...prev, name: e.target.value }))} />
                </label>
                <label>
                  {t('homeModalPhoneLabel')}
                  <input
                    value={b2c.phone}
                    onChange={(e) => setB2c((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder={budgetUi.phonePlaceholder}
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    value={b2c.email}
                    onChange={(e) => setB2c((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder={budgetUi.emailPlaceholder}
                  />
                </label>
              </div>
            </section>

            <label>
              {t('homeModalScenarioLabel')}
              <input
                value={`${b2c.scenario} | ${bodyTypeItems.find((item) => item.id === b2cBodyType)?.label ?? b2cBodyType} | ${b2cYearMin}-${b2cYearMax} | $${b2cBudgetMin.toLocaleString('en-US')}-$${b2cBudgetMax.toLocaleString('en-US')}`}
                readOnly
              />
            </label>
            <label>
              {t('homeModalCommentLabel')}
              <textarea value={b2c.comment} onChange={(e) => setB2c((prev) => ({ ...prev, comment: e.target.value }))}></textarea>
            </label>
            {b2cError && <p className="bp-form-error">{b2cError}</p>}
            {b2cSuccess && <p className="bp-form-success">{b2cSuccess}</p>}
            {b2cSuccess && b2cCountdown !== null && <p className="bp-form-meta">{t('homeModalAutoClose')} {b2cCountdown} {locale === 'pl' ? 's.' : locale === 'en' ? 'sec.' : 'с.'}</p>}
            <button type="submit" className="bp-btn bp-btn-primary" disabled={isSubmittingB2c}>
              {isSubmittingB2c ? t('homeModalSending') : budgetUi.submit}
            </button>
            <p className="bp-budget-consent">{budgetUi.consent}</p>
          </form>
        </div>
      )}

      {openForm === 'b2b' && (
        <div className="bp-modal" ref={b2bModalRef} role="dialog" aria-modal="true" aria-label={t('homeModalB2bAria')}>
          <button type="button" className="bp-modal-close" onClick={closeForms}>×</button>
          <h3>{t('homeModalB2bTitle')}</h3>
          <form onSubmit={onSubmitB2B}>
            <label>
              {t('homeModalCompanyLabel')}
              <input value={b2b.company} onChange={(e) => setB2b((prev) => ({ ...prev, company: e.target.value }))} />
            </label>
            <label>
              {t('homeModalPhoneLabel')}
              <input value={b2b.phone} onChange={(e) => setB2b((prev) => ({ ...prev, phone: e.target.value }))} />
            </label>
            <label>
              {t('homeModalFormatLabel')}
              <input value={b2b.format} onChange={(e) => setB2b((prev) => ({ ...prev, format: e.target.value }))} />
            </label>
            <label>
              {t('homeModalCommentLabel')}
              <textarea value={b2b.comment} onChange={(e) => setB2b((prev) => ({ ...prev, comment: e.target.value }))}></textarea>
            </label>
            {b2bError && <p className="bp-form-error">{b2bError}</p>}
            {b2bSuccess && <p className="bp-form-success">{b2bSuccess}</p>}
            {b2bSuccess && b2bCountdown !== null && <p className="bp-form-meta">{t('homeModalAutoClose')} {b2bCountdown} {locale === 'pl' ? 's.' : locale === 'en' ? 'sec.' : 'с.'}</p>}
            <button type="submit" className="bp-btn bp-btn-primary" disabled={isSubmittingB2b}>
              {isSubmittingB2b ? t('homeModalSending') : t('homeModalSubmit')}
            </button>
          </form>
        </div>
      )}
    </main>
  )
}
