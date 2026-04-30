import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// VITE_TARGET=production → bidbidders.com (Cloudflare Pages)
// VITE_TARGET не задано    → GitHub Pages (staging/dev)
const isProd = process.env.VITE_TARGET === 'production'

export default defineConfig({
  base: isProd ? '/' : '/BIDDERS/',
  plugins: [react(), cloudflare()],
  define: {
    __IS_PROD__: isProd,
  },
})