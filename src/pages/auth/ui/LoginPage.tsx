import { type FormEvent, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useAuth } from '../../../shared/auth/AuthProvider'
import './auth.css'

export function LoginPage() {
  const { locale, t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const lp = (path: string) => localizedPath(locale, path)
  const { isSupabaseMode, signIn, signInWithGoogle } = useAuth()
  const redirectTo = (location.state as { redirectTo?: string } | null)?.redirectTo ?? lp(routePaths.cabinet)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const normalizedEmail = email.trim().toLowerCase()
    if (!normalizedEmail || !password.trim()) return

    setError('')
    setIsLoading(true)

    try {
      await signIn(normalizedEmail, password.trim())
      navigate(redirectTo)
    } catch {
      setError(t('authErrorGeneric'))
    } finally {
      setIsLoading(false)
    }
  }

  const onGoogleClick = async () => {
    setError('')
    setIsLoading(true)

    try {
      if (isSupabaseMode) {
        await signInWithGoogle(locale)
        return
      }

      await signInWithGoogle(locale)
      navigate(redirectTo)
    } catch {
      setError(t('authErrorGeneric'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <h1>{t('authLoginTitle')}</h1>
        <p className="auth-lead">{t('authLoginLead')}</p>
        {!isSupabaseMode && <p className="auth-lead">{t('authModeMock')}</p>}

        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            {t('authEmailLabel')}
            <input
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            {t('authPasswordLabel')}
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="auth-btn-row">
            <button type="submit" className="auth-btn auth-btn-primary" disabled={isLoading}>{t('authLoginSubmit')}</button>
            <button type="button" className="auth-btn auth-btn-secondary" onClick={onGoogleClick} disabled={isLoading}>{t('authGoogleButton')}</button>
          </div>

          {error && <p className="auth-lead">{error}</p>}
        </form>

        <p className="auth-foot">
          {t('authNoAccount')} <Link to={lp(routePaths.register)}>{t('authGoRegister')}</Link>
        </p>
      </section>
    </main>
  )
}
