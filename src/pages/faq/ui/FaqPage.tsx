import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import type { MessageKey } from '../../../shared/i18n/messages'
import './faq.css'

const FAQ_ITEMS: [MessageKey, MessageKey][] = [
  ['faqFullQ1', 'faqFullA1'],
  ['faqFullQ2', 'faqFullA2'],
  ['faqFullQ3', 'faqFullA3'],
  ['faqFullQ4', 'faqFullA4'],
  ['faqFullQ5', 'faqFullA5'],
  ['faqFullQ6', 'faqFullA6'],
  ['faqFullQ7', 'faqFullA7'],
  ['faqFullQ8', 'faqFullA8'],
  ['faqFullQ9', 'faqFullA9'],
  ['faqFullQ10', 'faqFullA10'],
  ['faqFullQ11', 'faqFullA11'],
  ['faqFullQ12', 'faqFullA12'],
  ['faqFullQ13', 'faqFullA13'],
  ['faqFullQ14', 'faqFullA14'],
  ['faqFullQ15', 'faqFullA15'],
  ['faqFullQ16', 'faqFullA16'],
  ['faqFullQ17', 'faqFullA17'],
  ['faqFullQ18', 'faqFullA18'],
]

function FaqSchema() {
  const { t } = useI18n()

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(([qKey, aKey]) => ({
        '@type': 'Question',
        name: t(qKey),
        acceptedAnswer: { '@type': 'Answer', text: t(aKey) },
      })),
    }

    const existing = document.querySelectorAll('script[data-schema="faq"]')
    existing.forEach(el => el.remove())

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset['schema'] = 'faq'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.querySelectorAll('script[data-schema="faq"]').forEach(el => el.remove())
    }
  }, [t])

  return null
}

export function FaqPage() {
  const { locale, t } = useI18n()

  return (
    <main className="faq-page">
      <Seo
        title={t('seoFaqFullTitle')}
        description={t('seoFaqFullDescription')}
        path={routePaths.faq}
      />
      <FaqSchema />

      <section className="faq-hero">
        <div className="faq-hero__inner">
          <p className="faq-hero__kicker">{t('faqFullKicker')}</p>
          <h1 className="faq-hero__title">{t('faqFullTitle')}</h1>
          <p className="faq-hero__sub">{t('faqFullSub')}</p>
        </div>
      </section>

      <section className="faq-body">
        <div className="faq-body__inner">
          <div className="faq-list">
            {FAQ_ITEMS.map(([qKey, aKey]) => (
              <details key={qKey} className="faq-item">
                <summary className="faq-item__question">{t(qKey)}</summary>
                <p className="faq-item__answer">{t(aKey)}</p>
              </details>
            ))}
          </div>

          <aside className="faq-sidebar">
            <div className="faq-sidebar__box">
              <p className="faq-sidebar__label">Szybkie linki</p>
              <Link to={localizedPath(locale, routePaths.calculator)} className="faq-sidebar__link faq-sidebar__link--primary">
                {t('faqFullCtaCalc')}
              </Link>
              <Link to={localizedPath(locale, routePaths.transit)} className="faq-sidebar__link">
                {t('faqFullCtaTransit')}
              </Link>
              <Link to={localizedPath(locale, routePaths.contacts)} className="faq-sidebar__link">
                {t('faqFullCtaContacts')}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
