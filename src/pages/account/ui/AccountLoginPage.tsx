import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useAuth } from '../../../shared/auth/AuthProvider'
import { localizedPath } from '../../../shared/config/routes'
import '../../auth/ui/auth.css'

// Destination stored in sessionStorage so AuthCallbackPage can pick it up
const ACCOUNT_DEST_KEY = 'post_auth_dest'

export function AccountLoginPage() {
  const { locale, t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const { signInWithGoogle, isSupabaseMode } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const redirectTo = (location.state as { redirectTo?: string } | null)?.redirectTo
    ?? localizedPath(locale, 'account')

  const onGoogleClick = async () => {
    setError('')
    setIsLoading(true)

    try {
      // Tell the callback page where to go after successful auth
      sessionStorage.setItem(ACCOUNT_DEST_KEY, redirectTo)
      await signInWithGoogle(locale)

      // In mock mode, redirect immediately
      if (!isSupabaseMode) {
        sessionStorage.removeItem(ACCOUNT_DEST_KEY)
        navigate(redirectTo, { replace: true })
      }
      // In Supabase mode, the page redirects to Google → returns to /auth/callback
    } catch {
      sessionStorage.removeItem(ACCOUNT_DEST_KEY)
      setError(t('authErrorGeneric'))
      setIsLoading(false)
    }
  }

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <h1>BID BIDDERS Account</h1>
        <p className="auth-lead">Доступ только для команды BID BIDDERS.</p>

        <div className="auth-btn-row" style={{ marginTop: '1.5rem' }}>
          <button
            type="button"
            className="auth-btn auth-btn-secondary"
            onClick={onGoogleClick}
            disabled={isLoading}
          >
            {isLoading ? '...' : t('authGoogleButton')}
          </button>
        </div>

        {error && <p className="auth-lead" style={{ color: 'var(--color-error, #dc2626)', marginTop: '1rem' }}>{error}</p>}
      </section>
    </main>
  )
}
