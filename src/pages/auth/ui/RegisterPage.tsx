import { type FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useAuth } from '../../../shared/auth/AuthProvider'
import './auth.css'

export function RegisterPage() {
  const { locale, t } = useI18n()
  const navigate = useNavigate()
  const lp = (path: string) => localizedPath(locale, path)
  const { isSupabaseMode, signUp } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')

    const normalizedEmail = email.trim().toLowerCase()
    const normalizedName = name.trim()
    const normalizedPassword = password.trim()
    if (!normalizedEmail || !normalizedName || normalizedPassword.length < 6) return

    setIsLoading(true)

    try {
      await signUp(normalizedName, normalizedEmail, normalizedPassword)
      navigate(lp(routePaths.cabinet))
    } catch {
      setError(t('authErrorGeneric'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <h1>{t('authRegisterTitle')}</h1>
        <p className="auth-lead">{t('authRegisterLead')}</p>
        {!isSupabaseMode && <p className="auth-lead">{t('authModeMock')}</p>}

        <form className="auth-form" onSubmit={onSubmit}>
          <label>
            {t('authNameLabel')}
            <input
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="auth-btn-row">
            <button type="submit" className="auth-btn auth-btn-primary" disabled={isLoading}>{t('authRegisterSubmit')}</button>
          </div>

          {error && <p className="auth-lead">{error}</p>}
        </form>

        <p className="auth-foot">
          {t('authHaveAccount')} <Link to={lp(routePaths.login)}>{t('authGoLogin')}</Link>
        </p>
      </section>
    </main>
  )
}
