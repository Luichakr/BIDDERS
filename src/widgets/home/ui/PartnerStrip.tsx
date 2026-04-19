import { useI18n } from '../../../shared/i18n/I18nProvider'

const partners = [
  'Copart',
  'IAAI',
  'Auto1',
  'Copart.ca',
  'Manheim',
  'BCA',
  'Happy Car Service',
  'EDGE Pipeline',
  'OPENLANE',
  'Impact',
  'ACV Auctions',
  'Iron Planet',
  'Copart.de',
  'Glovis',
  'ALD Carmarket',
  'Stark Auto Sales',
  'Auksjonen',
  'AuctionTime',
  'Duocar',
  'kvdcars',
  'Euro Auctions',
  'Copart.fi',
  'Blinto',
  'Exleasingcar',
  'Boat Trader',
  'Autobid.de',
  'Taylor&Martin LLC',
  'Autorola',
  'Copart.uk',
  'Womauktion',
  'Klaravik',
  'Troostwijk Auctions',
  'Alcopa Auction',
  'Caronsale',
]

export function PartnerStrip() {
  const { t } = useI18n()

  return (
    <section className="partners reveal delay-1">
      <div className="partners-in">
        <p className="partners-label">{t('partnersTitle')}</p>
      </div>
      <div className="partners-marquee">
        <div className="partners-track">
          {partners.concat(partners).map((partner, index) => (
            <span key={`${partner}-${index}`} className="partner-chip">{partner}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
