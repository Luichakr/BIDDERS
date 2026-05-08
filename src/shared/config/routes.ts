/**
 * Path segments WITHOUT locale prefix and WITHOUT leading slash.
 * Use together with localizedPath() from localeRouting.ts.
 *
 * Example:
 *   import { routePaths, localizedPath } from '@/shared/config/routes'
 *   import { useI18n } from '@/shared/i18n/I18nProvider'
 *
 *   const { locale } = useI18n()
 *   <Link to={localizedPath(locale, routePaths.catalog)} />
 */
export const routePaths = {
  home: '',
  catalog: 'catalog',
  inStock: 'in-stock',
  transit: 'in-transit',
  calculator: 'calculator',
  login: 'login',
  register: 'register',
  cabinet: 'cabinet',
  calculatorBase: 'calculator-base',
  blog: 'blog',
  cases: 'cases',
  faq: 'faq',
  contacts: 'contacts',
  privacy: 'privacy-policy',
  terms: 'terms-of-use',
  lotDetail: 'lots/:lotId',
  car: 'cars',
  chinaCars: 'china-cars',
  dobieramyAuto: 'dobieramy-auto',
} as const

export type RoutePath = (typeof routePaths)[keyof typeof routePaths]

// Re-export localizedPath for convenience so components have a single import point.
export { localizedPath } from '../i18n/localeRouting'
