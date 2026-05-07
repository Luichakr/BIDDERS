/**
 * /pl/dobieramy-auto — Standalone Polish landing page (NO header / footer / sticky).
 *
 * Reuses the EXACT same look as the B2C "We will pick a car for your budget"
 * popup that lives on HomePage — same CSS classes (bp-modal--budget, bp-budget-*),
 * just with the modal's fixed-position centering overridden so the popup IS
 * the page contents.
 *
 * UTM parameters from the URL (utm_source, utm_medium, utm_campaign, utm_content,
 * utm_term, gclid, fbclid) are appended to the lead's `scenario` so the email
 * shows where the lead came from (FB Groups, Meta Ads, Google Ads, etc.).
 */

import { useEffect, useMemo, useState, type FormEvent, type CSSProperties } from 'react'
import { CAR_MAKES_MODELS } from '../../../shared/data/carMakesModels'
import { sendB2CLead } from '../../../shared/api/sendLeadEmail'
import { PhoneField } from '../../../shared/ui/PhoneField'
import { isValidPhoneNumber } from 'react-phone-number-input'

// ─── Slider math (copied from HomePage) ───────────────────────────────────────

const YEAR_BREAK_SLIDER = 250
const YEAR_BREAK_VALUE  = 2000
const YEAR_MIN          = 1950
const YEAR_MAX          = 2027
const YEAR_SLIDER_MAX   = 1000

const yearToSlider = (year: number): number =>
  year <= YEAR_BREAK_VALUE
    ? Math.round(((year - YEAR_MIN) / (YEAR_BREAK_VALUE - YEAR_MIN)) * YEAR_BREAK_SLIDER)
    : Math.round(YEAR_BREAK_SLIDER + ((year - YEAR_BREAK_VALUE) / (YEAR_MAX - YEAR_BREAK_VALUE)) * (YEAR_SLIDER_MAX - YEAR_BREAK_SLIDER))

const sliderToYear = (slider: number): number =>
  slider <= YEAR_BREAK_SLIDER
    ? Math.round(YEAR_MIN + (slider / YEAR_BREAK_SLIDER) * (YEAR_BREAK_VALUE - YEAR_MIN))
    : Math.round(YEAR_BREAK_VALUE + ((slider - YEAR_BREAK_SLIDER) / (YEAR_SLIDER_MAX - YEAR_BREAK_SLIDER)) * (YEAR_MAX - YEAR_BREAK_VALUE))

const BUDGET_BREAK_SLIDER = 750
const BUDGET_BREAK_PRICE  = 75000
const BUDGET_MAX_PRICE    = 2000000
const BUDGET_SLIDER_MAX   = 1000

const priceToSlider = (price: number): number =>
  price <= BUDGET_BREAK_PRICE
    ? Math.round((price / BUDGET_BREAK_PRICE) * BUDGET_BREAK_SLIDER)
    : Math.round(BUDGET_BREAK_SLIDER + ((price - BUDGET_BREAK_PRICE) / (BUDGET_MAX_PRICE - BUDGET_BREAK_PRICE)) * (BUDGET_SLIDER_MAX - BUDGET_BREAK_SLIDER))

const sliderToPrice = (slider: number): number => {
  if (slider <= BUDGET_BREAK_SLIDER) {
    const raw = (slider / BUDGET_BREAK_SLIDER) * BUDGET_BREAK_PRICE
    return Math.round(raw / 500) * 500
  }
  const raw = BUDGET_BREAK_PRICE + ((slider - BUDGET_BREAK_SLIDER) / (BUDGET_SLIDER_MAX - BUDGET_BREAK_SLIDER)) * (BUDGET_MAX_PRICE - BUDGET_BREAK_PRICE)
  return Math.round(raw / 1000) * 1000
}

// ─── Body types (Polish labels) ───────────────────────────────────────────────

const BODY_TYPES = [
  { id: 'sedan',     label: 'Sedan' },
  { id: 'crossover', label: 'Crossover' },
  { id: 'coupe',     label: 'Coupe' },
  { id: 'hatchback', label: 'Hatchback' },
  { id: 'cabriolet', label: 'Kabriolet' },
  { id: 'minivan',   label: 'Minivan' },
  { id: 'microbus',  label: 'Mikrobus' },
  { id: 'pickup',    label: 'Pickup' },
]

// ─── UTM extractor ────────────────────────────────────────────────────────────

const TRACKING_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'] as const

function readTrackingParams(): string {
  if (typeof window === 'undefined') return ''
  const params = new URLSearchParams(window.location.search)
  const parts: string[] = []
  for (const k of TRACKING_KEYS) {
    const v = params.get(k)
    if (v) parts.push(`${k}=${v}`)
  }
  return parts.join(' | ')
}

// ─── Page-level CSS overrides ─────────────────────────────────────────────────
// .bp-modal is `position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%)` —
// we kill that here so the same markup renders as page content, not a modal.

const HOST_STYLE: CSSProperties = {
  minHeight: '100dvh',
  background: '#0a0e1a',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '24px 12px 48px',
  boxSizing: 'border-box',
}

const PAGE_MODAL_STYLE: CSSProperties = {
  position: 'static',
  transform: 'none',
  left: 'auto',
  top: 'auto',
  margin: 0,
  maxHeight: 'none',
  overflow: 'visible',
  width: '100%',
  maxWidth: 'min(860px, 100%)',
}

// ─── Component ────────────────────────────────────────────────────────────────

export function DobieramyAutoPage() {
  // Form state
  const [bodyType,   setBodyType]   = useState('sedan')
  const [yearMin,    setYearMin]    = useState(2008)
  const [yearMax,    setYearMax]    = useState(2025)
  const [budgetMin,  setBudgetMin]  = useState(0)
  const [budgetMax,  setBudgetMax]  = useState(30000)
  const [make,       setMake]       = useState('')
  const [model,      setModel]      = useState('')
  const [generation, setGeneration] = useState('')
  const [drive,      setDrive]      = useState('')
  const [fuel,       setFuel]       = useState('')
  const [gearbox,    setGearbox]    = useState('')
  const [color,      setColor]      = useState('')
  const [damageType, setDamageType] = useState('')
  const [steering,   setSteering]   = useState('')
  const [power,      setPower]      = useState('')
  const [engineVol,  setEngineVol]  = useState('')

  const [name,    setName]    = useState('')
  const [phone,   setPhone]   = useState('')
  const [email,   setEmail]   = useState('')
  const [comment, setComment] = useState('')

  const [error,      setError]      = useState('')
  const [success,    setSuccess]    = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const allMakes        = useMemo(() => Object.keys(CAR_MAKES_MODELS).sort(), [])
  const availableModels = useMemo(() => (make ? (CAR_MAKES_MODELS[make] ?? []).sort() : []), [make])

  const bodyTypeItems = useMemo(
    () => BODY_TYPES.map((b) => ({
      ...b,
      image: `${import.meta.env.BASE_URL}images/body-types/${b.id}.webp`,
    })),
    [],
  )

  // Page meta
  useEffect(() => {
    const prevTitle = document.title
    document.title = 'Dobieramy auto pod Twój budżet | BidBidders'
    const meta = document.querySelector('meta[name="description"]')
    const prevDesc = meta?.getAttribute('content') ?? null
    meta?.setAttribute('content', 'Powiedz nam, jakiego auta szukasz — dobierzemy 2-3 oferty z aukcji USA z pełnym kosztorysem.')
    return () => {
      document.title = prevTitle
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc)
    }
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (name.trim().length < 2) { setError('Imię musi mieć co najmniej 2 znaki'); return }
    if (!phone.trim())          { setError('Numer telefonu jest wymagany'); return }
    if (!isValidPhoneNumber(phone)) { setError('Wprowadź poprawny numer telefonu'); return }

    setSubmitting(true)
    setError('')

    const tracking = readTrackingParams()
    const scenario = tracking
      ? `Lądowanie: dobieramy-auto | ${tracking}`
      : 'Lądowanie: dobieramy-auto'

    try {
      await sendB2CLead({
        name, phone, email,
        bodyType: BODY_TYPES.find((b) => b.id === bodyType)?.label ?? bodyType,
        yearMin, yearMax, budgetMin, budgetMax,
        make, model, generation, drive, fuel, gearbox, color, damageType, steering, power, engineVol,
        scenario,
        comment,
      })
    } catch {
      // silent — still show thank-you to the user
    }
    setSubmitting(false)
    setSuccess(true)
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div style={HOST_STYLE}>
      <div className="bp-modal bp-modal--budget" style={PAGE_MODAL_STYLE} role="dialog" aria-label="Dobieramy auto pod Twój budżet">
        {success ? (
          <div className="bp-thank-you">
            <div className="bp-thank-you__icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="32" fill="#FF5C00" fillOpacity="0.12"/>
                <circle cx="32" cy="32" r="24" fill="#FF5C00" fillOpacity="0.18"/>
                <path d="M20 33l9 9 15-17" stroke="#FF5C00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="bp-thank-you__title">Dziękujemy!</h3>
            <p className="bp-thank-you__text">
              Twoje zgłoszenie zostało przyjęte. Oddzwonimy do&nbsp;Ciebie
              w&nbsp;ciągu 2&nbsp;godzin roboczych.
            </p>
            <a href="/pl" className="bp-btn bp-btn-primary bp-thank-you__btn">Wróć na stronę główną</a>
          </div>
        ) : (
          <>
            <h3 className="bp-budget-modal__title">Dobieramy auto pod Twój budżet</h3>
            <p className="bp-budget-modal__lead">
              Wskaż typ nadwozia, rok i&nbsp;budżet. Nasz menedżer wyśle 2-3 realne oferty
              z&nbsp;aukcji USA z&nbsp;pełnym kosztorysem.
            </p>

            <form onSubmit={handleSubmit}>
              <section className="bp-budget-block">
                <p className="bp-budget-block__label">Jaki typ nadwozia Cię interesuje?</p>
                <div className="bp-budget-bodytypes">
                  {bodyTypeItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={item.id === bodyType ? 'bp-budget-bodytype is-active' : 'bp-budget-bodytype'}
                      onClick={() => setBodyType(item.id)}
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
                    <p className="bp-budget-block__label">Rok produkcji</p>
                    <div className="bp-budget-chip bp-budget-chip--editable">
                      <input
                        type="number" min={1950} max={2027}
                        value={yearMin}
                        onChange={(e) => {
                          const v = Number(e.target.value)
                          if (!Number.isFinite(v)) return
                          setYearMin(Math.min(Math.max(v, 1950), yearMax - 1))
                        }}
                      />
                      <span>–</span>
                      <input
                        type="number" min={1950} max={2027}
                        value={yearMax}
                        onChange={(e) => {
                          const v = Number(e.target.value)
                          if (!Number.isFinite(v)) return
                          setYearMax(Math.max(Math.min(v, 2027), yearMin + 1))
                        }}
                      />
                    </div>
                  </div>
                  <p className="bp-budget-block__hint">Zakres lat</p>
                  <div className="bp-budget-range">
                    <div className="bp-budget-range__rail">
                      <div className="bp-budget-range__track"></div>
                      <div
                        className="bp-budget-range__active"
                        style={{
                          left: `${(yearToSlider(yearMin) / YEAR_SLIDER_MAX) * 100}%`,
                          width: `${((yearToSlider(yearMax) - yearToSlider(yearMin)) / YEAR_SLIDER_MAX) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <input type="range" min={0} max={YEAR_SLIDER_MAX} step={1}
                      value={yearToSlider(yearMin)}
                      onChange={(e) => setYearMin(Math.min(sliderToYear(Number(e.target.value)), yearMax - 1))}
                    />
                    <input type="range" min={0} max={YEAR_SLIDER_MAX} step={1}
                      value={yearToSlider(yearMax)}
                      onChange={(e) => setYearMax(Math.max(sliderToYear(Number(e.target.value)), yearMin + 1))}
                    />
                  </div>
                  <div className="bp-budget-range__ends">
                    <span>1950</span>
                    <span className="bp-budget-range__ends-break" style={{ left: '25%' }}>2000</span>
                    <span>2027</span>
                  </div>
                </section>

                <section className="bp-budget-block">
                  <div className="bp-budget-block__head">
                    <p className="bp-budget-block__label">Twój budżet</p>
                    <div className="bp-budget-chip bp-budget-chip--editable">
                      <span className="bp-budget-chip__pre">$</span>
                      <input type="number" min={0} max={BUDGET_MAX_PRICE} step={500}
                        value={budgetMin}
                        onChange={(e) => {
                          const v = Number(e.target.value)
                          if (!Number.isFinite(v)) return
                          setBudgetMin(Math.min(Math.max(v, 0), budgetMax - 500))
                        }}
                      />
                      <span>–</span>
                      <span className="bp-budget-chip__pre">$</span>
                      <input type="number" min={0} max={BUDGET_MAX_PRICE} step={500}
                        value={budgetMax}
                        onChange={(e) => {
                          const v = Number(e.target.value)
                          if (!Number.isFinite(v)) return
                          setBudgetMax(Math.max(Math.min(v, BUDGET_MAX_PRICE), budgetMin + 500))
                        }}
                      />
                    </div>
                  </div>
                  <p className="bp-budget-block__hint">Cena auta + transport + cło</p>
                  <div className="bp-budget-range">
                    <div className="bp-budget-range__rail">
                      <div className="bp-budget-range__track"></div>
                      <div
                        className="bp-budget-range__active"
                        style={{
                          left: `${(priceToSlider(budgetMin) / BUDGET_SLIDER_MAX) * 100}%`,
                          width: `${((priceToSlider(budgetMax) - priceToSlider(budgetMin)) / BUDGET_SLIDER_MAX) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <input type="range" min={0} max={BUDGET_SLIDER_MAX} step={1}
                      value={priceToSlider(budgetMin)}
                      onChange={(e) => setBudgetMin(Math.min(sliderToPrice(Number(e.target.value)), budgetMax - 500))}
                    />
                    <input type="range" min={0} max={BUDGET_SLIDER_MAX} step={1}
                      value={priceToSlider(budgetMax)}
                      onChange={(e) => setBudgetMax(Math.max(sliderToPrice(Number(e.target.value)), budgetMin + 500))}
                    />
                  </div>
                  <div className="bp-budget-range__ends">
                    <span>$0</span>
                    <span className="bp-budget-range__ends-break">$75K</span>
                    <span>$2M</span>
                  </div>
                </section>
              </div>

              <section className="bp-budget-block">
                <p className="bp-budget-block__label">Szczegóły (opcjonalnie)</p>
                <div className="bp-budget-extras">
                  <label>Marka
                    <select value={make} onChange={(e) => { setMake(e.target.value); setModel('') }}>
                      <option value="">— dowolna —</option>
                      {allMakes.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </label>
                  <label>Model
                    <select value={model} onChange={(e) => setModel(e.target.value)} disabled={!make}>
                      <option value="">— dowolny —</option>
                      {availableModels.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </label>
                  <label>Generacja<input value={generation} onChange={(e) => setGeneration(e.target.value)} /></label>
                  <label>Napęd
                    <select value={drive} onChange={(e) => setDrive(e.target.value)}>
                      <option value="">— dowolny —</option>
                      <option value="AWD / 4×4">AWD / 4×4</option>
                      <option value="FWD">FWD (przód)</option>
                      <option value="RWD">RWD (tył)</option>
                    </select>
                  </label>
                  <label>Paliwo
                    <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
                      <option value="">— dowolne —</option>
                      <option value="Benzyna">Benzyna</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Hybryda">Hybryda</option>
                      <option value="Elektryczny">Elektryczny</option>
                      <option value="LPG">LPG</option>
                    </select>
                  </label>
                  <label>Skrzynia
                    <select value={gearbox} onChange={(e) => setGearbox(e.target.value)}>
                      <option value="">— dowolna —</option>
                      <option value="Automatyczna">Automatyczna</option>
                      <option value="Manualna">Manualna</option>
                      <option value="CVT">CVT</option>
                    </select>
                  </label>
                  <label>Kolor
                    <select value={color} onChange={(e) => setColor(e.target.value)}>
                      <option value="">— dowolny —</option>
                      <option value="Biały">Biały</option>
                      <option value="Czarny">Czarny</option>
                      <option value="Szary">Szary</option>
                      <option value="Srebrny">Srebrny</option>
                      <option value="Czerwony">Czerwony</option>
                      <option value="Niebieski">Niebieski</option>
                      <option value="Zielony">Zielony</option>
                      <option value="Inny">Inny</option>
                    </select>
                  </label>
                  <label>Rodzaj uszkodzeń
                    <select value={damageType} onChange={(e) => setDamageType(e.target.value)}>
                      <option value="">— dowolny —</option>
                      <option value="Bez uszkodzeń">Bez uszkodzeń</option>
                      <option value="Frontalne">Frontalne</option>
                      <option value="Tylne">Tylne</option>
                      <option value="Boczne">Boczne</option>
                      <option value="Zalane">Zalane</option>
                      <option value="Inne">Inne</option>
                    </select>
                  </label>
                  <label>Kierownica
                    <select value={steering} onChange={(e) => setSteering(e.target.value)}>
                      <option value="">— dowolna —</option>
                      <option value="Lewa">Lewa</option>
                      <option value="Prawa">Prawa</option>
                    </select>
                  </label>
                  <label>Moc (KM)<input type="number" min="0" value={power} onChange={(e) => setPower(e.target.value)} placeholder="np. 150" /></label>
                  <label>Pojemność (L)<input type="number" min="0" step="0.1" value={engineVol} onChange={(e) => setEngineVol(e.target.value)} placeholder="np. 2.0" /></label>
                </div>
              </section>

              <section className="bp-budget-block">
                <p className="bp-budget-block__label">Twoje dane kontaktowe</p>
                <div className="bp-budget-fields">
                  <label>Imię i nazwisko
                    <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
                  </label>
                  <label>Telefon
                    <PhoneField value={phone} onChange={(v) => setPhone(v)} />
                  </label>
                  <label>Email
                    <input
                      type="email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com" autoComplete="email"
                    />
                  </label>
                </div>
              </section>

              <label>
                Dodatkowe uwagi
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
              </label>

              {error && <p className="bp-form-error">{error}</p>}

              <button type="submit" className="bp-btn bp-btn-primary" disabled={submitting}>
                {submitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
              </button>

              <p className="bp-budget-consent">
                Wysyłając formularz wyrażasz zgodę na przetwarzanie danych osobowych
                w&nbsp;celu kontaktu w&nbsp;sprawie zamówienia.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
