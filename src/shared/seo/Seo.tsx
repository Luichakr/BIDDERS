import { useEffect } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { supportedLocales, type Locale } from '../i18n/localeRouting'
import { isProductionDeploy } from '../../config/productionRoutes'

const hreflangLocales = isProductionDeploy()
  ? supportedLocales.filter(l => l !== 'uk')
  : supportedLocales

interface SeoProps {
  /** Full page title, e.g. t('seoHomeTitle') */
  title: string
  /** Meta description, e.g. t('seoHomeDescription') */
  description: string
  /** Page path WITHOUT locale prefix, e.g. '' for home, 'catalog', 'faq' */
  path: string
}

const OG_LOCALE: Record<Locale, string> = {
  uk: 'uk_UA',
  pl: 'pl_PL',
  en: 'en_US',
}

/** Returns base URL: origin + vite base path (without trailing slash) */
function siteBase(): string {
  const origin = import.meta.env.VITE_SITE_ORIGIN ?? window.location.origin
  const base = (import.meta.env.BASE_URL as string) ?? '/'
  return origin + base.replace(/\/$/, '')
}

function buildUrl(base: string, locale: string, path: string): string {
  return path ? `${base}/${locale}/${path}` : `${base}/${locale}`
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra
    ? `link[rel="${rel}"]${Object.entries(extra).map(([k, v]) => `[${k}="${v}"]`).join('')}`
    : `link[rel="${rel}"]`
  let el = document.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.href = href
}

export function Seo({ title, description, path }: SeoProps) {
  const { locale } = useI18n()

  useEffect(() => {
    const base = siteBase()
    const canonical = buildUrl(base, locale, path)

    // Page title
    document.title = title

    // Basic meta
    setMeta('name', 'description', description)

    // Robots
    setMeta('name', 'robots', 'index, follow')

    // Canonical
    setLink('canonical', canonical)

    // Hreflang alternates
    hreflangLocales.forEach(loc => {
      setLink('alternate', buildUrl(base, loc, path), { hreflang: loc })
    })
    // x-default points to English
    setLink('alternate', buildUrl(base, 'en', path), { hreflang: 'x-default' })

    // Open Graph
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'BIDDERS')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:locale', OG_LOCALE[locale])

    // Twitter card (bonus)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
  }, [title, description, path, locale])

  return null
}
