import { Link } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'

type Copy = {
  title: string
  body1: string
  body2: string
  cta: string
}

const COPY: Record<'pl' | 'en' | 'uk', Copy> = {
  pl: {
    title: 'Strona jest obecnie w trybie testowym.',
    body1: 'Ta sekcja nie jest jeszcze publicznie dostępna.',
    body2: 'Skontaktuj się z nami, a pomożemy dobrać samochód pod Twój budżet.',
    cta: 'Skontaktuj się',
  },
  en: {
    title: 'This page is currently in test mode.',
    body1: 'This section is not publicly available yet.',
    body2: 'Contact us and we will help you choose a car within your budget.',
    cta: 'Contact us',
  },
  // No spec for UK — fall back to EN copy. The destination link below
  // still routes to /en/contacts since /uk/* is not in the allowlist.
  uk: {
    title: 'This page is currently in test mode.',
    body1: 'This section is not publicly available yet.',
    body2: 'Contact us and we will help you choose a car within your budget.',
    cta: 'Contact us',
  },
}

export function ComingSoonPage() {
  const { locale } = useI18n()
  const copy = COPY[locale] ?? COPY.en
  const contactsPath = locale === 'pl' ? '/pl/contacts' : '/en/contacts'

  return (
    <section className="coming-soon" style={{ padding: '64px 24px', maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginTop: 0 }}>{copy.title}</h1>
      <p>{copy.body1}</p>
      <p>{copy.body2}</p>
      <Link className="btn btn-primary" to={contactsPath} style={{ display: 'inline-block', marginTop: 24 }}>
        {copy.cta}
      </Link>
      <meta name="robots" content="noindex,nofollow" />
    </section>
  )
}
