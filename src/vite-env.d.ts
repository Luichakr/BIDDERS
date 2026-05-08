/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL?: string
  readonly VITE_SUPABASE_ANON_KEY?: string
  readonly VITE_SITE_ORIGIN?: string
  readonly VITE_DEPLOY_TARGET?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}