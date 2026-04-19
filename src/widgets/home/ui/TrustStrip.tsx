import { useI18n } from '../../../shared/i18n/I18nProvider'

export function TrustStrip() {
  const { t } = useI18n()

  const items = [
    { title: t('trustOneTitle'), description: t('trustOneDesc') },
    { title: t('trustTwoTitle'), description: t('trustTwoDesc') },
    { title: t('trustThreeTitle'), description: t('trustThreeDesc') },
    { title: t('trustFourTitle'), description: t('trustFourDesc') },
  ]

  return (
    <section className="trust reveal">
      <div className="trust-in">
        {items.map((item, index) => (
          <article key={item.title} className="trust-item">
            <div className="trust-icon" aria-hidden="true">
              {index === 0 && <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}
              {index === 1 && <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M12 7v4m0 0v4m0-4h4m-4 0H8"/></svg>}
              {index === 2 && <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>}
              {index === 3 && <svg viewBox="0 0 24 24" strokeWidth="1.8"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>}
            </div>
            <div className="trust-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
