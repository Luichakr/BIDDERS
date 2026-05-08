# Auth Setup

This project now supports two auth modes:

- Demo mode: active when Supabase env vars are missing. Login, registration, and cabinet still work locally via browser storage.
- Supabase mode: active when `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set. Email/password auth and Google OAuth use real Supabase sessions.

## 1. Local env

Create `.env.local` from `.env.example` and fill in:

```env
VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
VITE_SITE_ORIGIN=http://localhost:7771
```

## 2. Supabase provider setup

In Supabase Dashboard:

1. Open Authentication -> Providers -> Google.
2. Enable Google provider.
3. Paste your Google client ID and secret.

## 3. Redirect URLs

Add these URLs in both Google OAuth console and Supabase auth settings.

Development:

- `http://localhost:7771/BIDDERS/en/auth/callback`
- `http://localhost:7771/BIDDERS/uk/auth/callback`
- `http://localhost:7771/BIDDERS/pl/auth/callback`

Production examples:

- `https://bidbidders.com/en/auth/callback`
- `https://bidbidders.com/uk/auth/callback`
- `https://bidbidders.com/pl/auth/callback`

If the final production host is different, replace `bidbidders.com` with the actual domain.

## 4. Current auth routes

- `/:locale/login`
- `/:locale/register`
- `/:locale/cabinet`
- `/:locale/auth/callback`

## 5. Runtime behavior

- `/cabinet` is protected and redirects guests to localized login.
- `/login` and `/register` are guest-only and redirect authenticated users to cabinet.
- Google OAuth returns to localized callback and then forwards to cabinet.
- Auth state is centralized in `AuthProvider`.

## 6. Main files

- `src/shared/auth/AuthProvider.tsx`
- `src/shared/auth/AuthRouteGate.tsx`
- `src/shared/auth/supabaseAuth.ts`
- `src/pages/auth/ui/AuthCallbackPage.tsx`

## 7. Verification checklist

- In demo mode, login and register still open cabinet.
- Opening `/:locale/cabinet` while logged out redirects to `/:locale/login`.
- In Supabase mode, Google login redirects to `/:locale/auth/callback` and then to `/:locale/cabinet`.
- Logout clears cabinet access and returns protected-route behavior.