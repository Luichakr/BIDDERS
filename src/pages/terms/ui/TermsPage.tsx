import { Link } from 'react-router-dom'
import { routes } from '../../../shared/config/routes'

export function TermsPage() {
  return (
    <main className="bp-shell-page legal-page">
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">Юридична інформація</p>
        <h1 className="bp-page-title">Умови використання</h1>
        <p className="bp-page-sub">Користуючись сайтом BIDDERS, ви погоджуєтесь із цими умовами.</p>

        <section className="legal-section">
          <h2>1. Загальні положення</h2>
          <p>Сайт має інформаційний характер і не є публічною офертою. Фінальні умови співпраці визначаються індивідуальним договором.</p>
        </section>

        <section className="legal-section">
          <h2>2. Контент і авторські права</h2>
          <p>Тексти, дизайн, графіка та інші матеріали сайту належать BIDDERS або використовуються на законних підставах.</p>
        </section>

        <section className="legal-section">
          <h2>3. Обмеження відповідальності</h2>
          <p>Ми докладаємо максимум зусиль для точності інформації, однак не гарантуємо повну відсутність технічних помилок чи затримок оновлення даних.</p>
        </section>

        <section className="legal-section">
          <h2>4. Заявки та комунікація</h2>
          <p>Надсилаючи заявку, ви підтверджуєте достовірність наданих даних і погоджуєтесь на зворотний зв'язок для обробки запиту.</p>
        </section>

        <section className="legal-section">
          <h2>5. Застосовне право</h2>
          <p>До правовідносин застосовується законодавство Польщі, якщо інше не передбачено договором.</p>
        </section>

        <div className="bp-inline-actions" style={{ marginTop: 26 }}>
          <Link className="bp-btn bp-btn-secondary" to={routes.privacy}>Політика конфіденційності</Link>
          <Link className="bp-btn bp-btn-primary" to={routes.home}>На головну</Link>
        </div>
      </div>
    </main>
  )
}
