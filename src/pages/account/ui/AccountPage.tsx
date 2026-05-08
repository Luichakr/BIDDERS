import { useAuth } from '../../../shared/auth/AuthProvider'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { localizedPath } from '../../../shared/config/routes'
import { useNavigate } from 'react-router-dom'
import '../../auth/ui/auth.css'

export function AccountPage() {
  const { user, signOut } = useAuth()
  const { locale } = useI18n()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate(localizedPath(locale, 'account/login'), { replace: true })
  }

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <h1>BID BIDDERS Account</h1>
        {user && (
          <p className="auth-lead">
            Добро пожаловать, <strong>{user.name || user.email}</strong>
          </p>
        )}

        <div className="auth-btn-row" style={{ marginTop: '1.5rem' }}>
          <button
            type="button"
            className="auth-btn auth-btn-secondary"
            onClick={handleSignOut}
          >
            Выйти
          </button>
        </div>
      </section>
    </main>
  )
}
