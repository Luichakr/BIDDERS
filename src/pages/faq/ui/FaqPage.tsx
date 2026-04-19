import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'

export function FaqPage() {
  return (
    <main className="bp-shell-page bp-shell-soft">
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">FAQ</p>
        <h1 className="bp-page-title">Часті запитання про імпорт авто</h1>
        <p className="bp-page-sub">Відповіді про терміни, під ключ, гарантії, застосунок і живий огляд на майданчику.</p>

        <section className="bp-faq-list">
          <details open>
            <summary>Скільки триває доставка?</summary>
            <p>У середньому 45-60 днів залежно від маршруту, порту та митного завантаження.</p>
          </details>
          <details>
            <summary>Що входить у формат під ключ?</summary>
            <p>Підбір лота, торги, викуп, логістика, митниця, документи та видача авто.</p>
          </details>
          <details>
            <summary>Які гарантії прозорості?</summary>
            <p>Один контракт, фіксація смети до торгів, VIN-перевірка і прозорі етапи угоди.</p>
          </details>
          <details>
            <summary>Чи можна приїхати на огляд?</summary>
            <p>Так, доступний огляд на майданчику за попереднім записом.</p>
          </details>
        </section>

        <div className="bp-inline-actions">
          <Link className="bp-btn bp-btn-secondary" to="/#faq">Блок FAQ на головній</Link>
          <Link className="bp-btn bp-btn-primary" to={routes.contacts}>Перейти до контактів</Link>
        </div>
      </div>
    </main>
  )
}
