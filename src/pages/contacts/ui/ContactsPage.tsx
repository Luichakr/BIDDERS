import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { EuropeMapBlock } from '../../../widgets/europe-map/ui/EuropeMapBlock'
import './contacts.css'

export function ContactsPage() {
  const { locale, t } = useI18n()

  const CONTACT_CHANNELS = [
    { label: t('ctChannelPhoneLabel'), value: '+48 784 890 644', href: 'tel:+48784890644', ico: '📞', hint: t('ctChannelPhoneHintMain') },
    { label: t('ctChannelPhoneLabel'), value: '+48 571 660 242', href: 'tel:+48571660242', ico: '📱', hint: t('ctChannelPhoneHintSales') },
    { label: 'Email', value: 'sales@bidbidders.com', href: 'mailto:sales@bidbidders.com', ico: '✉️', hint: t('ctChannelEmailHint') },
    { label: 'Email', value: 'info@bidbidders.com', href: 'mailto:info@bidbidders.com', ico: '✉️', hint: t('ctChannelEmailHint') },
    { label: 'Email', value: 'biuro@bidbidders.com', href: 'mailto:biuro@bidbidders.com', ico: '✉️', hint: t('ctChannelEmailHint') },
    { label: 'Telegram', value: '@bidbiders', href: 'https://t.me/bidbiders', ico: '💬', hint: t('ctChannelTelegramHint') },
  ]



  const addressQuery = t('ctAddressMapQuery')
  const addressEncoded = encodeURIComponent(addressQuery)
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${addressEncoded}`
  const wazeUrl = `https://waze.com/ul?q=${addressEncoded}&navigate=yes`
  const appleMapsUrl = `http://maps.apple.com/?daddr=${addressEncoded}&dirflg=d`
  const osmUrl = `https://www.openstreetmap.org/search?query=${addressEncoded}`

  return (
    <main className="ct-page">
      <Seo title={t('seoContactsTitle')} description={t('seoContactsDescription')} path={routePaths.contacts} />
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutomotiveBusiness',
            name: 'BIDDERS',
            description: t('ctJsonLdDesc'),
            url: 'https://bidbidders.com',
            telephone: '+48784890644',
            email: 'sales@bidbidders.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: t('ctAddressLine1'),
              addressLocality: 'Jawczyce',
              postalCode: '05-850',
              addressCountry: 'PL',
            },
            areaServed: ['PL', 'UA', 'LT', 'CZ', 'GB'],
            openingHours: 'Mo-Fr 09:00-19:00',
          }),
        }}
      />

      {/* Hero */}
      <section className="ct-hero">
        <div className="ct-hero__inner">
          <div>
            <div className="ct-hero__kicker">{t('ctHeroKicker')}</div>
            <h1 className="ct-hero__title">{t('ctHeroTitle')}</h1>
            <p className="ct-hero__sub">{t('ctHeroSub')}</p>
            <div className="ct-hero__facts">
              <div className="ct-hero__fact">
                <strong>4</strong>
                <span>{t('ctHeroFactOffices')}</span>
              </div>
              <div className="ct-hero__fact">
                <strong>48+</strong>
                <span>{t('ctHeroFactDelivery')}</span>
              </div>
              <div className="ct-hero__fact">
                <strong>24/7</strong>
                <span>{t('ctHeroFactChat')}</span>
              </div>
              <div className="ct-hero__fact">
                <strong>09–19</strong>
                <span>{t('ctHeroFactHours')}</span>
              </div>
            </div>
          </div>

          <aside className="ct-quick">
            <h2 className="ct-quick__title">{t('ctQuickTitle')}</h2>
            <p className="ct-quick__sub">{t('ctQuickSub')}</p>
            <ul className="ct-quick__list">
              {CONTACT_CHANNELS.slice(0, 3).map((channel) => (
                <li key={channel.value}>
                  <a className="ct-quick__item" href={channel.href}>
                    <span className="ct-quick__icon" aria-hidden="true">{channel.ico}</span>
                    <div className="ct-quick__body">
                      <span className="ct-quick__label">{channel.label}</span>
                      <span className="ct-quick__value">{channel.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <Link to={localizedPath(locale, routePaths.calculator)} className="ct-quick__cta">
              {t('ctQuickCta')}
            </Link>
          </aside>
        </div>
      </section>

      {/* Map + Address */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <header className="ct-section__head">
            <h2>{t('ctOfficeSectionTitle')}</h2>
            <p>{t('ctOfficeSectionSub')}</p>
          </header>

          <div className="ct-map-wrap">
            <div className="ct-map" role="img" aria-label={t('ctMapAriaLabel')}>
              <div className="ct-map__placeholder"></div>
              <div className="ct-map__grid"></div>
              <div className="ct-map__road r1"></div>
              <div className="ct-map__road r2"></div>
              <div className="ct-map__road r3"></div>
              <div className="ct-map__pin">
                <span className="ct-map__pin-mark" aria-hidden="true"></span>
                <span className="ct-map__pin-label">BIDDERS, Jawczyce</span>
              </div>
              <span className="ct-map__badge">{t('ctMapBadge')}</span>
            </div>

            <div className="ct-address">
              <div className="ct-address__card">
                <div className="ct-address__label">{t('ctAddressLabel')}</div>
                <div className="ct-address__value">
                  {t('ctAddressLine1')}<br />
                  {t('ctAddressLine2')}
                </div>
                <div className="ct-address__meta">
                  <span><strong>{t('ctAddressCoords')}</strong> 52.1862° N, 20.7786° E</span>
                  <span><strong>{t('ctAddressNearest')}</strong> Ożarów Mazowiecki</span>
                  <span><strong>{t('ctAddressFromWarsaw')}</strong> {t('ctAddressFromWarsawValue')}</span>
                </div>
              </div>

              <div className="ct-address__card">
                <div className="ct-address__label">{t('ctDirectionsLabel')}</div>
                <div className="ct-directions">
                  <a className="ct-dir-btn" href={googleMapsUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">G</span>
                    <div className="ct-dir-btn__body">
                      <span>Google</span>
                      Maps
                    </div>
                  </a>
                  <a className="ct-dir-btn" href={wazeUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">W</span>
                    <div className="ct-dir-btn__body">
                      <span>Waze</span>
                      {t('ctWazeLabel')}
                    </div>
                  </a>
                  <a className="ct-dir-btn" href={appleMapsUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">A</span>
                    <div className="ct-dir-btn__body">
                      <span>Apple</span>
                      Maps
                    </div>
                  </a>
                  <a className="ct-dir-btn" href={osmUrl} target="_blank" rel="noreferrer">
                    <span className="ct-dir-btn__ico" aria-hidden="true">O</span>
                    <div className="ct-dir-btn__body">
                      <span>Open</span>
                      StreetMap
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <header className="ct-section__head">
            <h2>{t('ctChannelsSectionTitle')}</h2>
            <p>{t('ctChannelsSectionSub')}</p>
          </header>
          <div className="ct-channels">
            {CONTACT_CHANNELS.map((channel) => (
              <a key={channel.value} href={channel.href} className="ct-channel" target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span className="ct-channel__ico" aria-hidden="true">{channel.ico}</span>
                <span className="ct-channel__label">{channel.label}</span>
                <span className="ct-channel__value">{channel.value}</span>
                <span className="ct-channel__hint">{channel.hint}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Europe Reps Map */}
      <EuropeMapBlock />

      {/* Working hours */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <header className="ct-section__head">
            <h2>{t('ctHoursSectionTitle')}</h2>
            <p>{t('ctHoursSectionSub')}</p>
          </header>

          <div className="ct-hours">
            <div className="ct-hour-card">
              <div className="ct-hour-card__head">
                <span className="ct-hour-ico" aria-hidden="true">🏢</span>
                <h3>{t('ctHoursOfficeTitle')}</h3>
              </div>
              <ul className="ct-hour-list">
                <li><span>{t('ctHoursMonFri')}</span><strong>09:00 – 19:00</strong></li>
                <li><span>{t('ctHoursSaturday')}</span><strong>{t('ctHoursOnAppointment')}</strong></li>
                <li><span>{t('ctHoursSunday')}</span><strong>{t('ctHoursDayOff')}</strong></li>
              </ul>
            </div>

            <div className="ct-hour-card">
              <div className="ct-hour-card__head">
                <span className="ct-hour-ico" aria-hidden="true">💬</span>
                <h3>{t('ctHoursOnlineTitle')}</h3>
              </div>
              <ul className="ct-hour-list">
                <li><span>{t('ctHoursMonFri')}</span><strong>08:00 – 22:00</strong></li>
                <li><span>{t('ctHoursSatSun')}</span><strong>10:00 – 18:00</strong></li>
                <li><span>{t('ctHoursTelegramChat')}</span><strong>24/7</strong></li>
              </ul>
            </div>

            <div className="ct-hour-card">
              <div className="ct-hour-card__head">
                <span className="ct-hour-ico" aria-hidden="true">🚚</span>
                <h3>{t('ctHoursDeliveryTitle')}</h3>
              </div>
              <ul className="ct-hour-list">
                <li><span>{t('ctHoursMonFri')}</span><strong>10:00 – 18:00</strong></li>
                <li><span>{t('ctHoursSaturday')}</span><strong>{t('ctHoursOnAppointment')}</strong></li>
                <li><span>{t('ctHoursDuration')}</span><strong>{t('ctHoursDurationValue')}</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="ct-section">
        <div className="ct-section__inner">
          <div className="ct-channels" style={{ maxWidth: 720, margin: '0 auto' }}>
            <Link to={localizedPath(locale, routePaths.faq)} className="ct-channel">
              <span className="ct-channel__ico" aria-hidden="true">❓</span>
              <span className="ct-channel__label">{t('ctNavFaqLabel')}</span>
              <span className="ct-channel__value">FAQ</span>
              <span className="ct-channel__hint">{t('ctNavFaqHint')}</span>
            </Link>
            <Link to={localizedPath(locale, routePaths.calculator)} className="ct-channel">
              <span className="ct-channel__ico" aria-hidden="true">🧮</span>
              <span className="ct-channel__label">{t('ctNavCalcLabel')}</span>
              <span className="ct-channel__value">{t('navCalculator')}</span>
              <span className="ct-channel__hint">{t('ctNavCalcHint')}</span>
            </Link>
            <Link to={localizedPath(locale, routePaths.home)} className="ct-channel">
              <span className="ct-channel__ico" aria-hidden="true">🏠</span>
              <span className="ct-channel__label">{t('ctNavHomeLabel')}</span>
              <span className="ct-channel__value">{t('navHome')}</span>
              <span className="ct-channel__hint">{t('ctNavHomeHint')}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
