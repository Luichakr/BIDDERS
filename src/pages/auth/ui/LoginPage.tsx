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
      await signInWithGoogle(locale)
      if (!isSupabaseMode) {
        navigate(redirectTo)
      }
    } catch {
      setError(t('authErrorGeneric'))
      setIsLoading(false)
    }
  }

  return (
    <div className="auth-page">
      {/* Left branding panel */}
      <div className="auth-brand">
        <Link to={lp('/')} className="auth-brand-logo">
          BID BIDDERS
        </Link>
        <span className="auth-brand-tagline">Platforma aukcji samochodowych</span>
        <h2 className="auth-brand-heading">
          Kupuj auta<br />z <span>USA i Europy</span>
        </h2>
        <ul className="auth-brand-points">
          <li>Dostęp do aukcji Copart, IAAI, Manheim</li>
          <li>Kalkulacja kosztów importu w czasie rzeczywistym</li>
          <li>Panel zarządzania pojazdami</li>
          <li>Wsparcie na każdym etapie zakupu</li>
        </ul>
      </div>

      {/* Right form panel */}
      <div className="auth-form-side">
        <div className="auth-box">
          <div className="auth-box-header">
            <h1>{t('authLoginTitle')}</h1>
            <p>{t('authLoginLead')}</p>
            {!isSupabaseMode && <p style={{ color: '#94a3b8', fontSize: '13px' }}>{t('authModeMock')}</p>}
          </div>

          {/* Google button */}
          <button
            type="button"
            className="auth-google-btn"
            onClick={onGoogleClick}
            disabled={isLoading}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {t('authGoogleButton')}
          </button>

          <div className="auth-divider">{t('authOrDivider')}</div>

          {/* Email/password form */}
          <form onSubmit={onSubmit}>
            <div className="auth-fields">
              <div className="auth-field">
                <label htmlFor="login-email">{t('authEmailLabel')}</label>
                <input
                  id="login-email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="auth-field">
                <label htmlFor="login-password">{t('authPasswordLabel')}</label>
                <input
                  id="login-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <div className="auth-error-msg" style={{ marginTop: '12px' }}>{error}</div>}

            <button
              type="submit"
              className="auth-submit-btn"
              disabled={isLoading}
              style={{ marginTop: '16px' }}
            >
              {t('authLoginSubmit')}
            </button>
          </form>

          <p className="auth-foot-link">
            {t('authNoAccount')} <Link to={lp(routePaths.register)}>{t('authGoRegister')}</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
