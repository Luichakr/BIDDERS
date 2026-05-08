import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { localizedPath, routePaths } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useAuth } from '../../../shared/auth/AuthProvider'
import './auth.css'

export function AuthCallbackPage() {
  const { locale, t } = useI18n()
  const navigate = useNavigate()
  const { refreshUser } = useAuth()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isMounted = true

    refreshUser()
      .then(() => {
        if (!isMounted) return
        // If AccountLoginPage stored a custom destination, use it (e.g. /account)
        const dest = sessionStorage.getItem('post_auth_dest')
        if (dest) {
          sessionStorage.removeItem('post_auth_dest')
          navigate(dest, { replace: true })
          return
        }
        navigate(localizedPath(locale, routePaths.cabinet), { replace: true })
      })
      .catch(() => {
        if (!isMounted) return
        setHasError(true)
      })

    return () => {
      isMounted = false
    }
  }, [locale, navigate, refreshUser])

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <h1>{hasError ? t('authCallbackErrorTitle') : t('authCallbackLoadingTitle')}</h1>
        <p className="auth-lead">{hasError ? t('authCallbackErrorLead') : t('authCallbackLoadingLead')}</p>
      </section>
    </main>
  )
}