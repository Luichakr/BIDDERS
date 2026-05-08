// Production allowlist for Cloudflare deploy (bidbidders.com).
// Only these full paths are reachable normally; everything else renders
// the Coming Soon / Test Mode stub. See docs/SEO-PRODUCTION-TODO.md.

export const PRODUCTION_ALLOWED_ROUTES: readonly string[] = [
  '/',
  '/pl',
  '/pl/calculator',
  '/pl/in-transit',
  '/pl/contact',
  '/pl/contacts',
  '/en',
  '/en/calculator',
  '/en/in-transit',
  '/en/contact',
  '/en/contacts',
  '/pl/faq',
  '/en/faq',
  '/pl/dobieramy-auto',
] as const

export function isProductionDeploy(): boolean {
  return import.meta.env.VITE_DEPLOY_TARGET === 'cloudflare'
}

function normalize(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1)
  }
  return pathname
}

const PRODUCTION_ALLOWED_PREFIXES: readonly string[] = [
  '/pl/cars/',
  '/en/cars/',
  '/pl/cabinet',
  '/en/cabinet',
  '/uk/cabinet',
  '/pl/account',
  '/en/account',
  '/pl/account/login',
  '/en/account/login',
  '/pl/in-stock',
  '/en/in-stock',
  '/uk/in-stock',
]

export function isRouteAllowed(pathname: string): boolean {
  const p = normalize(pathname)
  if (PRODUCTION_ALLOWED_ROUTES.includes(p)) return true
  return PRODUCTION_ALLOWED_PREFIXES.some(prefix => p.startsWith(prefix))
}
