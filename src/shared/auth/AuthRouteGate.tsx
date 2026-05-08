import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { localizedPath, routePaths } from '../config/routes'
import { useI18n } from '../i18n/I18nProvider'
import { useAuth } from './AuthProvider'

function AuthLoadingScreen() {
  const { t } = useI18n()

  return (
    <main className="auth-wrap">
      <section className="auth-card">
        <h1>{t('authSessionLoadingTitle')}</h1>
        <p className="auth-lead">{t('authSessionLoadingLead')}</p>
      </section>
    </main>
  )
}

export function ProtectedRoute() {
  const { locale } = useI18n()
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <AuthLoadingScreen />
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={localizedPath(locale, routePaths.login)}
        state={{ redirectTo: location.pathname }}
      />
    )
  }

  return <Outlet />
}

export function GuestOnlyRoute() {
  const { locale } = useI18n()
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <AuthLoadingScreen />
  }

  if (isAuthenticated) {
    return <Navigate replace to={localizedPath(locale, routePaths.cabinet)} />
  }

  return <Outlet />
}