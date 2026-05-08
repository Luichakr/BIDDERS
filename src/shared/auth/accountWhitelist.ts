/**
 * Account section whitelist.
 * Only users whose email OR Supabase uid appears here can access /account.
 * Add entries as needed — emails are matched case-insensitively.
 */

export const ACCOUNT_WHITELIST_EMAILS: readonly string[] = [
  'leechansb@gmail.com',
]

export const ACCOUNT_WHITELIST_UIDS: readonly string[] = [
  // add Supabase uids here when needed
]

export function isAccountWhitelisted(email?: string | null, uid?: string | null): boolean {
  if (uid && ACCOUNT_WHITELIST_UIDS.includes(uid)) return true
  if (email && ACCOUNT_WHITELIST_EMAILS.includes(email.toLowerCase().trim())) return true
  return false
}
