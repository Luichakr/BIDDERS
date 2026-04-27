import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { LocaleRedirect } from '../shared/i18n/LocaleRedirect'
import { LocaleGuard } from '../shared/i18n/LocaleGuard'

import { HomePage } from '../pages/home/ui/HomePage'
import { CatalogPage } from '../pages/catalog/ui/CatalogPage'
import { TransitPage } from '../pages/transit/ui/TransitPage'
import { LotPage } from '../pages/lot/ui/LotPage'
import { CalculatorPage } from '../pages/calculator/ui/CalculatorPage'
import { InStockPage } from '../pages/stock/ui/InStockPage'
import { BlogPage } from '../pages/blog/ui/BlogPage'
import { CasesPage } from '../pages/cases/ui/CasesPage'
import { FaqPage } from '../pages/faq/ui/FaqPage'
import { ContactsPage } from '../pages/contacts/ui/ContactsPage'
import { PrivacyPolicyPage } from '../pages/privacy/ui/PrivacyPolicyPage'
import { TermsPage } from '../pages/terms/ui/TermsPage'
import { ChinaCarsPage } from '../pages/china-cars/ui/ChinaCarsPage'
import { CalculatorPage as CalculatorBaseSnapshotPage } from '../features/calculator-base/snapshot/CalculatorBase.snapshot'

// ─────────────────────────────────────────────
// Legacy redirect helpers
// ─────────────────────────────────────────────

/** Redirects /lots/:lotId → /en/lots/:lotId */
function LotLegacyRedirect() {
  const { lotId } = useParams<{ lotId: string }>()
  return <Navigate replace to={`/en/lots/${lotId ?? ''}`} />
}

// ─────────────────────────────────────────────
// Router
// ─────────────────────────────────────────────

export function AppRouter() {
  return (
    /**
     * basename = import.meta.env.BASE_URL (e.g. '/BIDDERS/' for GitHub Pages)
     * All <Link to=""> and navigate() calls are relative to this basename.
     * Changing to Cloudflare/Vercel later = set BASE_URL='/' in vite.config.ts only.
     */
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Root → detect preferred locale and redirect */}
        <Route path="/" element={<LocaleRedirect />} />

        {/* Locale-prefixed routes */}
        <Route path="/:locale" element={<LocaleGuard />}>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="in-stock" element={<InStockPage />} />
            <Route path="in-transit" element={<TransitPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="calculator/orest" element={<CalculatorBaseSnapshotPage />} />
            <Route path="calculator-base" element={<CalculatorBaseSnapshotPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="cases" element={<CasesPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-of-use" element={<TermsPage />} />
            <Route path="lots/:lotId" element={<LotPage />} />
            <Route path="china-cars" element={<ChinaCarsPage />} />
          </Route>
        </Route>

        {/* ── Legacy redirects (old hash-less URLs without locale) ────────── */}
        <Route path="/catalog" element={<Navigate replace to="/en/catalog" />} />
        <Route path="/in-stock" element={<Navigate replace to="/en/in-stock" />} />
        <Route path="/in-transit" element={<Navigate replace to="/en/in-transit" />} />
        <Route path="/calculator" element={<Navigate replace to="/en/calculator" />} />
        <Route path="/calculator/orest" element={<Navigate replace to="/en/calculator/orest" />} />
        <Route path="/calculator-base" element={<Navigate replace to="/en/calculator-base" />} />
        <Route path="/blog" element={<Navigate replace to="/en/blog" />} />
        <Route path="/cases" element={<Navigate replace to="/en/cases" />} />
        <Route path="/faq" element={<Navigate replace to="/en/faq" />} />
        <Route path="/contacts" element={<Navigate replace to="/en/contacts" />} />
        <Route path="/privacy-policy" element={<Navigate replace to="/en/privacy-policy" />} />
        <Route path="/terms-of-use" element={<Navigate replace to="/en/terms-of-use" />} />
        <Route path="/china-cars" element={<Navigate replace to="/en/china-cars" />} />
        <Route path="/cars-in-transit" element={<Navigate replace to="/en/in-transit" />} />
        <Route path="/lots/:lotId" element={<LotLegacyRedirect />} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate replace to="/en" />} />
      </Routes>
    </BrowserRouter>
  )
}
