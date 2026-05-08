import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useAuth } from '../../../shared/auth/AuthProvider'
import './auth.css'

export function RegisterPage() {
  const { locale, t } = useI18n()
  const lp = (path: string) => localizedPath(locale, path)
  const { isSupabaseMode, signUp } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    const normalizedEmail = email.trim().toLowerCase()
    const normalizedName = name.trim()
    const normalizedPassword = password.trim()

    if (!normalizedEmail || !normalizedName) return
    if (normalizedPassword.length < 6) {
      setError(t('authPasswordMinLength'))
      return
    }

    setIsLoading(true)

    try {
      await signUp(normalizedName, normalizedEmail, normalizedPassword)
      if (isSupabaseMode) {
        setEmailSent(true)
      }
    } catch {
      setError(t('authErrorGeneric'))
    } finally {
      setIsLoading(false)
    }
  }

  if (emailSent) {
    return (
      <div className="auth-page">
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
        <div className="auth-form-side">
          <div className="auth-box">
            <div className="auth-verify-screen">
              <div className="auth-verify-icon">✉️</div>
              <div className="auth-box-header">
                <h1>{t('authEmailVerifyTitle')}</h1>
                <p>{t('authEmailVerifyLead')}</p>
              </div>
              <p className="auth-foot-link">
                <Link to={lp(routePaths.login)}>{t('authEmailVerifyBack')}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
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
            <h1>{t('authRegisterTitle')}</h1>
            <p>{t('authRegisterLead')}</p>
            {!isSupabaseMode && <p style={{ color: '#94a3b8', fontSize: '13px' }}>{t('authModeMock')}</p>}
          </div>

          <form onSubmit={onSubmit}>
            <div className="auth-fields">
              <div className="auth-field">
                <label htmlFor="reg-name">{t('authNameLabel')}</label>
                <input
                  id="reg-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="auth-field">
                <label htmlFor="reg-email">{t('authEmailLabel')}</label>
                <input
                  id="reg-email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="auth-field">
                <label htmlFor="reg-password">{t('authPasswordLabel')}</label>
                <input
                  id="reg-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  minLength={6}
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
              {t('authRegisterSubmit')}
            </button>
          </form>

          <p className="auth-foot-link">
            {t('authHaveAccount')} <Link to={lp(routePaths.login)}>{t('authGoLogin')}</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
