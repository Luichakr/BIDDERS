import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { useAuth } from './AuthProvider'
import { isAccountWhitelisted } from './accountWhitelist'
import { localizedPath } from '../config/routes'

/**
 * Route guard: user must be authenticated AND in the account whitelist.
 * Not authenticated → redirect to /account/login
 * Authenticated but not whitelisted → redirect to home
 */
export function WhitelistRoute() {
  const { locale, t } = useI18n()
  const { user, isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <main className="auth-wrap">
        <section className="auth-card">
          <h1>{t('authSessionLoadingTitle')}</h1>
          <p className="auth-lead">{t('authSessionLoadingLead')}</p>
        </section>
      </main>
    )
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={localizedPath(locale, 'account/login')}
        state={{ redirectTo: location.pathname }}
      />
    )
  }

  if (!isAccountWhitelisted(user?.email, user?.id)) {
    return (
      <Navigate replace to={localizedPath(locale, '')} />
    )
  }

  return <Outlet />
}
