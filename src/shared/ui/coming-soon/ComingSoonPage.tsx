import { useNavigate } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'
import './coming-soon.css'

const copy = {
  en: {
    badge: 'Coming Soon',
    title: 'This section is under development',
    desc: "We're working hard to bring you this feature. It will be published very soon.",
    btn: '← Back to Home',
  },
  pl: {
    badge: 'Wkrótce',
    title: 'Ta sekcja jest w trakcie budowy',
    desc: 'Ciężko pracujemy, aby dostarczyć Ci tę funkcję. Zostanie opublikowana bardzo wkrótce.',
    btn: '← Wróć na stronę główną',
  },
}

export function ComingSoonPage() {
  const { locale } = useI18n()
  const navigate = useNavigate()
  const t = copy[locale as keyof typeof copy] ?? copy.en

  return (
    <div className="cs-overlay">
      <div className="cs-card">
        <div className="cs-icon">🔧</div>
        <span className="cs-badge">{t.badge}</span>
        <h1 className="cs-title">{t.title}</h1>
        <p className="cs-desc">{t.desc}</p>
        <button className="cs-btn" onClick={() => navigate('/')}>
          {t.btn}
        </button>
      </div>
    </div>
  )
}
