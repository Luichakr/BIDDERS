import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'

export function BlogPage() {
  return (
    <main className="bp-shell-page">
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">Блог</p>
        <h1 className="bp-page-title">Матеріали про імпорт авто</h1>
        <p className="bp-page-sub">Покрокові гіди, розбір логістики, митниці та вибору лотів на Copart, IAAI, Manheim.</p>

        <section className="bp-page-grid">
          <article className="bp-page-card">
            <h2>Як купити авто з Copart: покроковий маршрут</h2>
            <p>Від фільтрації лотів до фінального розрахунку під ключ у EUR.</p>
          </article>
          <article className="bp-page-card">
            <h2>Митні сценарії 2026: що впливає на фінальну ціну</h2>
            <p>Єдиний платіж, повна ставка, часові ризики та типові помилки.</p>
          </article>
          <article className="bp-page-card">
            <h2>Як читати фото і звіти пошкоджень до ставки</h2>
            <p>Чеклист перед торгами, щоб уникнути дорогих помилок після викупу.</p>
          </article>
        </section>

        <div className="bp-inline-actions">
          <Link className="bp-btn bp-btn-secondary" to={routes.cases}>Перейти до кейсів</Link>
          <Link className="bp-btn bp-btn-primary" to={routes.home}>На головну</Link>
        </div>
      </div>
    </main>
  )
}
