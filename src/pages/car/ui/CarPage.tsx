import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { fetchInRouteCards } from '../../../features/auction/model/inRoute.service'
import type { AuctionCardData } from '../../../features/auction/model/auctionData'

function parseVinFromSlug(slug: string): string {
  const parts = slug.split('-')
  // VIN is always 17 alphanumeric chars — look for it from the end
  for (let i = parts.length - 1; i >= 0; i--) {
    if (parts[i].length === 17) return parts[i].toUpperCase()
  }
  // Fallback: last segment
  return (parts[parts.length - 1] ?? '').toUpperCase()
}

function parseTitleFromSlug(slug: string): string {
  const parts = slug.split('-')
  // Remove last segment (VIN or id), keep rest
  const titleParts = parts.slice(0, -1)
  return titleParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ')
}

export function CarPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, locale } = useI18n()
  const [card, setCard] = useState<AuctionCardData | null | 'loading'>('loading')

  const vin = slug ? parseVinFromSlug(slug) : ''
  const slugTitle = slug ? parseTitleFromSlug(slug) : ''

  useEffect(() => {
    if (!slug) { setCard(null); return }
    let mounted = true

    const load = async () => {
      try {
        const cards = await fetchInRouteCards()
        const found = cards.find(c => c.vin && c.vin.toUpperCase() === vin) ?? null
        if (mounted) setCard(found)
      } catch {
        if (mounted) setCard(null)
      }
    }

    void load()
    return () => { mounted = false }
  }, [slug, vin])

  const isLoading = card === 'loading'
  const carData = card !== 'loading' ? card : null

  const pageTitle = carData
    ? `${carData.make} ${carData.model} ${carData.year} ${t('carPageH1Suffix')} | BID BIDDERS`
    : `${slugTitle} ${t('carPageH1Suffix')} | BID BIDDERS`

  const pageDescription = t('carPageSeoText')

  const ogImage = carData?.images?.[0] || carData?.image
    || `${import.meta.env.VITE_SITE_ORIGIN ?? 'https://bidbidders.com'}/og-image.jpg`

  const canonicalPath = slug ? `cars/${slug}` : 'cars'

  return (
    <main className="bp-shell-page bp-shell-soft">
      <Seo
        title={pageTitle}
        description={pageDescription}
        path={canonicalPath}
        ogImage={ogImage}
      />

      <div className="bp-wrap">
        {isLoading ? (
          <div className="car-page-loading">
            <div className="skeleton-line skeleton-line--title" style={{ width: 320 }} />
            <div className="skeleton-line skeleton-line--sub" style={{ width: 200 }} />
          </div>
        ) : carData ? (
          <>
            <h1 className="bp-page-title">
              {carData.make} {carData.model} {carData.year} {t('carPageH1Suffix')}
            </h1>

            <div className="car-page-gallery">
              {(carData.images?.length > 0 ? carData.images : [carData.image]).slice(0, 4).map((src, i) => (
                <img key={i} src={src} alt={`${carData.make} ${carData.model} ${carData.year}`} className="car-page-gallery__img" />
              ))}
            </div>

            <div className="car-page-details">
              <div className="car-page-detail-row"><span className="car-page-detail-label">{t('carPageLabelVin')}</span><strong>{carData.vin || '—'}</strong></div>
              <div className="car-page-detail-row"><span className="car-page-detail-label">{t('carPageLabelYear')}</span><strong>{carData.year}</strong></div>
              <div className="car-page-detail-row"><span className="car-page-detail-label">{t('carPageLabelMake')}</span><strong>{carData.make}</strong></div>
              <div className="car-page-detail-row"><span className="car-page-detail-label">{t('carPageLabelModel')}</span><strong>{carData.model}</strong></div>
              <div className="car-page-detail-row"><span className="car-page-detail-label">{t('carPageLabelLocation')}</span><strong>{carData.location || '—'}</strong></div>
              <div className="car-page-detail-row"><span className="car-page-detail-label">{t('carPageLabelMileage')}</span><strong>{carData.mileageLabel || '—'}</strong></div>
            </div>

            <p className="bp-page-sub car-page-seo-text">{t('carPageSeoText')}</p>
          </>
        ) : (
          <>
            <h1 className="bp-page-title">{slugTitle}</h1>
            <p className="bp-page-sub">{t('carPageNotFound')}</p>
          </>
        )}

        <div className="bp-inline-actions">
          <Link className="bp-btn bp-btn-primary" to={localizedPath(locale, routePaths.transit)}>{t('carPageCtaTransit')}</Link>
          <Link className="bp-btn bp-btn-secondary" to={localizedPath(locale, routePaths.calculator)}>{t('carPageCtaCalc')}</Link>
          <Link className="bp-btn bp-btn-secondary" to={localizedPath(locale, routePaths.contacts)}>{t('carPageCtaContacts')}</Link>
        </div>
      </div>
    </main>
  )
}
