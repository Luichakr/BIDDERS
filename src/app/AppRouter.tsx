import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './AppLayout'
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
import { routes } from '../shared/config/routes'

function NotFoundRoute() {
  return <Navigate replace to={routes.home} />
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.catalog} element={<CatalogPage />} />
          <Route path={routes.inStock} element={<InStockPage />} />
          <Route path={routes.transit} element={<TransitPage />} />
          <Route path={routes.calculator} element={<CalculatorPage />} />
          <Route path={routes.blog} element={<BlogPage />} />
          <Route path={routes.cases} element={<CasesPage />} />
          <Route path={routes.faq} element={<FaqPage />} />
          <Route path={routes.contacts} element={<ContactsPage />} />
          <Route path={routes.privacy} element={<PrivacyPolicyPage />} />
          <Route path={routes.terms} element={<TermsPage />} />
          <Route path={routes.lotDetail} element={<LotPage />} />
          <Route path="/cars-in-transit" element={<Navigate replace to={routes.transit} />} />
        </Route>
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </BrowserRouter>
  )
}
