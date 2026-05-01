import { Outlet, useLocation } from 'react-router-dom'
import { isProductionDeploy, isRouteAllowed } from '../config/productionRoutes'
import { ComingSoonPage } from '../pages/coming-soon/ui/ComingSoonPage'

// Wraps locale-prefixed routes. In production (Cloudflare) target,
// any pathname not in PRODUCTION_ALLOWED_ROUTES is replaced with the
// Coming Soon stub. In other targets (dev / GitHub Pages) it's a
// transparent passthrough.
export function ProductionGate() {
  const { pathname } = useLocation()
  if (isProductionDeploy() && !isRouteAllowed(pathname)) {
    return <ComingSoonPage />
  }
  return <Outlet />
}
