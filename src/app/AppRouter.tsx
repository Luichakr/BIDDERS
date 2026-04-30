import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { LocaleRedirect } from '../shared/i18n/LocaleRedirect'
import { LocaleGuard } from '../shared/i18n/LocaleGuard'
import { ComingSoonPage } from '../shared/ui/coming-soon/ComingSoonPage'

import { HomePage } from '../pages/home/ui/HomePage'
import { TransitPage } from '../pages/transit/ui/TransitPage'
import { LotPage } from '../pages/lot/ui/LotPage'
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
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Root → detect preferred locale and redirect */}
        <Route path="/" element={<LocaleRedirect />} />

        {/* Locale-prefixed routes */}
        <Route path="/:locale" element={<LocaleGuard />}>
          <Route element={<AppLayout />}>
            {/* ✅ Published pages */}
            <Route index element={<HomePage />} />
            <Route path="in-transit" element={<TransitPage />} />
            <Route path="calculator" element={<CalculatorBaseSnapshotPage />} />
            <Route path="calculator-base" element={<CalculatorBaseSnapshotPage />} />
            <Route path="lots/:lotId" element={<LotPage />} />

            {/* 🔧 Coming Soon — not yet published */}
            <Route path="catalog" element={<ComingSoonPage />} />
            <Route path="in-stock" element={<ComingSoonPage />} />
            <Route path="blog" element={<ComingSoonPage />} />
            <Route path="cases" element={<ComingSoonPage />} />
            <Route path="faq" element={<ComingSoonPage />} />
            <Route path="contacts" element={<ComingSoonPage />} />
            <Route path="privacy-policy" element={<ComingSoonPage />} />
            <Route path="terms-of-use" element={<ComingSoonPage />} />
            <Route path="china-cars" element={<ComingSoonPage />} />
            <Route path="*" element={<ComingSoonPage />} />
          </Route>
        </Route>

        {/* ── Legacy redirects ────────── */}
        <Route path="/in-transit" element={<Navigate replace to="/en/in-transit" />} />
        <Route path="/cars-in-transit" element={<Navigate replace to="/en/in-transit" />} />
        <Route path="/calculator" element={<Navigate replace to="/en/calculator" />} />
        <Route path="/calculator-base" element={<Navigate replace to="/en/calculator-base" />} />
        <Route path="/lots/:lotId" element={<LotLegacyRedirect />} />

        {/* Catch-all → Coming Soon */}
        <Route path="*" element={<ComingSoonPage />} />
      </Routes>
    </BrowserRouter>
  )
}
