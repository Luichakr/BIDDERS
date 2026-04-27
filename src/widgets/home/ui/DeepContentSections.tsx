import { useI18n } from '../../../shared/i18n/I18nProvider'

export function DeepContentSections() {
  const { t } = useI18n()

  const calcLeft = [
    t('dcCalcLeft1'),
    t('dcCalcLeft2'),
    t('dcCalcLeft3'),
    t('dcCalcLeft4'),
    t('dcCalcLeft5'),
    t('dcCalcLeft6'),
  ]

  const calcRight = [
    t('dcCalcRight1'),
    t('dcCalcRight2'),
    t('dcCalcRight3'),
    t('dcCalcRight4'),
    t('dcCalcRight5'),
    t('dcCalcRight6'),
  ]

  const appFeatures = [
    t('dcAppFeature1'),
    t('dcAppFeature2'),
    t('dcAppFeature3'),
    t('dcAppFeature4'),
  ]

  const faqs = [
    { q: t('dcFaq1Q'), a: t('dcFaq1A') },
    { q: t('dcFaq2Q'), a: t('dcFaq2A') },
    { q: t('dcFaq3Q'), a: t('dcFaq3A') },
    { q: t('dcFaq4Q'), a: t('dcFaq4A') },
  ]

  return (
    <>
      <section className="homex-section homex-calculator reveal" id="calculator">
        <div className="homex-head">
          <p className="homex-kicker">{t('dcCalcKicker')}</p>
          <h2>{t('dcCalcTitle')}</h2>
          <p>{t('dcCalcSub')}</p>
        </div>

        <div className="homex-calc-grid">
          <article className="homex-calc-card">
            <h3>{t('dcCalcLeftTitle')}</h3>
            <ul>
              {calcLeft.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </article>

          <article className="homex-calc-card">
            <h3>{t('dcCalcRightTitle')}</h3>
            <ul>
              {calcRight.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </article>
        </div>

        <div className="homex-calc-steps">
          <div>
            <h3>{t('dcCalcStepsTitle')}</h3>
            <ol>
              <li>{t('dcCalcStep1')}</li>
              <li>{t('dcCalcStep2')}</li>
              <li>{t('dcCalcStep3')}</li>
              <li>{t('dcCalcStep4')}</li>
            </ol>
          </div>
          <div className="homex-calc-actions">
            <a href="/catalog">{t('dcCalcCtaCatalog')}</a>
            <a href="tel:+48784890644">{t('dcCalcCtaPhoneLabel')}</a>
          </div>
        </div>
      </section>

      <section className="homex-section homex-video reveal">
        <div className="homex-head">
          <p className="homex-kicker">{t('dcVideoKicker')}</p>
          <h2>{t('dcVideoTitle')}</h2>
          <p>{t('dcVideoSub')}</p>
        </div>

        <div className="homex-video-card">
          <img src="/images/hero-main-banner.png" alt={t('dcVideoImgAlt')} />
          <button type="button" aria-label="Play demo">▶</button>
        </div>
      </section>

      <section className="homex-section homex-app reveal" id="app">
        <div className="homex-app-grid">
          <div>
            <p className="homex-kicker">{t('dcAppKicker')}</p>
            <h2>{t('dcAppTitle')}</h2>
            <p className="homex-app-lead">{t('dcAppLead')}</p>
            <ul>
              {appFeatures.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <div className="homex-store-buttons">
              <a href="#">App Store</a>
              <a href="#">Google Play</a>
            </div>
          </div>

          <aside className="homex-phone-mock">
            <div className="homex-phone-screen">
              <strong>BIDBIDERS</strong>
              <p>2024 Hummer EV SUV</p>
              <span>{t('dcAppStatus')}</span>
              <span>{t('dcAppEta')}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="homex-section homex-desktop reveal">
        <div className="homex-head">
          <p className="homex-kicker">{t('dcDesktopKicker')}</p>
          <h2>{t('dcDesktopTitle')}</h2>
          <p>{t('dcDesktopSub')}</p>
        </div>
        <div className="homex-desktop-actions">
          <a href="/catalog">Windows</a>
          <a href="/catalog">macOS</a>
        </div>
      </section>

      <section className="homex-section homex-feedback reveal" id="feedback">
        <div className="homex-head">
          <p className="homex-kicker">{t('dcFeedbackKicker')}</p>
          <h2>{t('dcFeedbackTitle')}</h2>
        </div>

        <div className="homex-feedback-grid">
          <article>
            <p>{t('dcReview1')}</p>
            <span>{t('dcReview1Author')}</span>
          </article>
          <article>
            <p>{t('dcReview2')}</p>
            <span>{t('dcReview2Author')}</span>
          </article>
          <article>
            <p>{t('dcReview3')}</p>
            <span>{t('dcReview3Author')}</span>
          </article>
        </div>
      </section>

      <section className="homex-section homex-faq reveal" id="faq">
        <div className="homex-head">
          <p className="homex-kicker">{t('dcFaqKicker')}</p>
          <h2>{t('dcFaqTitle')}</h2>
        </div>

        <div className="homex-faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="homex-section homex-blog reveal" id="blog">
        <div className="homex-head">
          <p className="homex-kicker">{t('dcBlogKicker')}</p>
          <h2>{t('dcBlogTitle')}</h2>
        </div>
        <div className="homex-blog-grid">
          <article>
            <h3>{t('dcBlogPost1Title')}</h3>
            <a href="#">{t('dcBlogReadLink')}</a>
          </article>
          <article>
            <h3>{t('dcBlogPost2Title')}</h3>
            <a href="#">{t('dcBlogReadLink')}</a>
          </article>
          <article>
            <h3>{t('dcBlogPost3Title')}</h3>
            <a href="#">{t('dcBlogReadLink')}</a>
          </article>
        </div>
      </section>
    </>
  )
}
