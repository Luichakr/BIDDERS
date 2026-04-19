import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'

export function ContactsPage() {
  return (
    <main className="bp-shell-page">
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">Контакти</p>
        <h1 className="bp-page-title">Контакти та майданчик BIDDERS</h1>
        <p className="bp-page-sub">Приїжджайте на огляд, отримаєте консультацію по документах та фінальній вартості володіння.</p>

        <section className="bp-location-grid">
          <div>
            <h2>Адреса</h2>
            <p>Jawczyce, ul. Poznańska, 56, 05-850, Polska</p>
            <p><a href="tel:+48784890644">+48 784 890 644</a></p>
            <p><a href="tel:+48571660242">+48 571 660 242</a></p>
            <p><a href="mailto:info@bidbiders.com">info@bidbiders.com</a></p>
          </div>
          <div className="bp-inline-actions bp-location-actions">
            <a className="bp-btn bp-btn-secondary" href="https://maps.google.com/?q=Jawczyce%20ul.%20Pozna%C5%84ska%2056%2005-850%20Polska" target="_blank" rel="noreferrer">Побудувати маршрут</a>
            <Link className="bp-btn bp-btn-primary" to="/#contact">Контактний блок на головній</Link>
          </div>
        </section>

        <div className="bp-inline-actions" style={{ marginTop: 20 }}>
          <Link className="bp-btn bp-btn-secondary" to={routes.faq}>Перейти до FAQ</Link>
          <Link className="bp-btn bp-btn-primary" to={routes.home}>На головну</Link>
        </div>
      </div>
    </main>
  )
}
