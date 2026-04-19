import { useI18n } from '../../../shared/i18n/I18nProvider'

export function WhySection() {
  const { t } = useI18n()

  const points = [
    t('whyPointOne'),
    t('whyPointTwo'),
    t('whyPointThree'),
    t('whyPointFour'),
    t('whyPointFive'),
    t('whyPointSix'),
  ]

  const stats = [
    { value: t('whyStatOneValue'), label: t('whyStatOneLabel'), tone: 'default' },
    { value: t('whyStatTwoValue'), label: t('whyStatTwoLabel'), tone: 'dark' },
    { value: t('whyStatThreeValue'), label: t('whyStatThreeLabel'), tone: 'default' },
    { value: t('whyStatFourValue'), label: t('whyStatFourLabel'), tone: 'accent' },
  ]

  return (
    <section className="why-section reveal" id="about">
      <div className="why-grid">
        <article className="why-copy">
          <p className="why-kicker">{t('whyKicker')}</p>
          <h2>{t('whyTitle')}</h2>
          <p className="why-lead">{t('whyLead')}</p>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <div className="why-stats">
          {stats.map((item) => (
            <article key={item.label} className={`why-stat ${item.tone}`}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
