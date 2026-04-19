import { Outlet } from 'react-router-dom'
import { Header } from '../widgets/header/ui/Header'
import { Footer } from '../widgets/footer/ui/Footer'
import { CookieConsent } from '../widgets/cookie-consent/ui/CookieConsent'

export function AppLayout() {
  return (
    <div className="site-root">
      <Header />
      <div className="app-shell">
        <Outlet />
      </div>
      <CookieConsent />
      <Footer />
    </div>
  )
}
