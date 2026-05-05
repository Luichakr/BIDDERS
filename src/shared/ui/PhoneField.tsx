import { useState, useEffect, useRef } from 'react'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import type { Country } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './PhoneField.css'

interface Props {
  value: string
  onChange: (value: string) => void
}

function detectCountry(): Country {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    if (tz.includes('Warsaw') || tz.includes('Bratislava') || tz.includes('Prague')) return 'PL'
    if (tz.includes('Kiev') || tz.includes('Kyiv')) return 'UA'
    if (tz.includes('London')) return 'GB'
    if (tz.includes('Berlin') || tz.includes('Vienna') || tz.includes('Zurich')) return 'DE'
    if (tz.includes('Paris') || tz.includes('Brussels')) return 'FR'
    if (tz.includes('Amsterdam')) return 'NL'
    if (tz.includes('Stockholm')) return 'SE'
    if (tz.includes('Moscow') || tz.includes('Samara')) return 'RU'
    if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles')) return 'US'
    if (tz.includes('Toronto') || tz.includes('Vancouver')) return 'CA'
    const lang = navigator.language?.toLowerCase() ?? ''
    if (lang.startsWith('pl')) return 'PL'
    if (lang.startsWith('uk')) return 'UA'
    if (lang.startsWith('de')) return 'DE'
    if (lang.startsWith('fr')) return 'FR'
    if (lang.startsWith('ru')) return 'RU'
    if (lang.startsWith('en-gb')) return 'GB'
    if (lang.startsWith('en')) return 'US'
  } catch { /* ignore */ }
  return 'PL'
}

export function PhoneField({ value, onChange }: Props) {
  const [country, setCountry] = useState<Country>('PL')
  const [touched, setTouched] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { setCountry(detectCountry()) }, [])

  const isValid = !value || isValidPhoneNumber(value)
  const showError = touched && value && !isValid

  return (
    <div
      ref={ref}
      className={`pf-wrap${showError ? ' pf-wrap--error' : ''}`}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) {
          setTouched(true)
        }
      }}
    >
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry={country}
        country={country}
        onCountryChange={(c) => c && setCountry(c)}
        value={value}
        onChange={(v) => onChange(v ?? '')}
        limitMaxLength
      />
      {showError && (
        <span className="pf-error">Nieprawidłowy numer telefonu</span>
      )}
    </div>
  )
}
