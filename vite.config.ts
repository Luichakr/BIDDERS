import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// Deploy targets:
//   VITE_DEPLOY_TARGET=github-pages  -> base: '/BIDDERS/'   (repo subpath)
//   VITE_DEPLOY_TARGET=cloudflare    -> base: '/'           (root domain)
// Default (dev / unspecified): '/BIDDERS/' to preserve current behavior.
export default defineConfig(() => {
  const target = process.env.VITE_DEPLOY_TARGET
  const base = target === 'cloudflare' ? '/' : '/BIDDERS/'
  return {
    base,
    plugins: [react()],
  }
})
