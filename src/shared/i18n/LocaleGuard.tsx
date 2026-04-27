import { Navigate, Outlet, useParams } from 'react-router-dom'
import { I18nProvider } from './I18nProvider'
import { supportedLocales, type Locale } from './localeRouting'

/**
 * Mounted at "/:locale".
 *
 * Responsibilities:
 * 1. Validates the :locale param — if invalid, redirects to /en
 * 2. Provides I18nProvider with the locale from the URL
 * 3. Renders child routes via <Outlet />
 */
export function LocaleGuard() {
  const { locale } = useParams<{ locale: string }>()

  if (!locale || !supportedLocales.includes(locale as Locale)) {
    return <Navigate replace to="/en" />
  }

  return (
    <I18nProvider locale={locale as Locale}>
      <Outlet />
    </I18nProvider>
  )
}
