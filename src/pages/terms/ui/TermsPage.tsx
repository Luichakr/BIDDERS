import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'

export function TermsPage() {
  const { locale, t } = useI18n()
  return (
    <main className="bp-shell-page legal-page">
      <Seo title={t('seoTermsTitle')} description={t('seoTermsDescription')} path={routePaths.terms} />
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
          <Link className="bp-btn bp-btn-secondary" to={localizedPath(locale, routePaths.privacy)}>Політика конфіденційності</Link>
          <Link className="bp-btn bp-btn-primary" to={localizedPath(locale, routePaths.home)}>На головну</Link>
        </div>
      </div>
    </main>
  )
}
