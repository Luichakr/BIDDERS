/**
 * Listing expiry logic for published cabinet cars.
 *
 * Timeline (counted from publishedAt / last renewedAt):
 *   Day 0  — published
 *   Day 25 — "Renew" button appears in cabinet
 *   Day 30 — email reminder sent (handled by Cloudflare Scheduled Worker)
 *   Day 41 — listing expires, status drops to 'private'
 */

import type { CabinetCar } from './cabinetTypes'

export const LISTING_ACTIVE_DAYS = 41
export const LISTING_RENEW_WARNING_DAY = 25   // show renew button from this day
export const LISTING_EMAIL_REMINDER_DAY = 30  // email is sent on this day

/** Compute expiry date from the last relevant anchor (renewedAt takes priority) */
export function computeExpiresAt(car: CabinetCar): Date | null {
  const anchor = car.renewedAt || car.publishedAt
  if (!anchor) return null
  const base = new Date(anchor)
  if (isNaN(base.getTime())) return null
  return new Date(base.getTime() + LISTING_ACTIVE_DAYS * 24 * 60 * 60 * 1000)
}

/** Days elapsed since anchor (negative = in the future) */
function daysSinceAnchor(car: CabinetCar): number | null {
  const anchor = car.renewedAt || car.publishedAt
  if (!anchor) return null
  const ms = Date.now() - new Date(anchor).getTime()
  return ms / (24 * 60 * 60 * 1000)
}

/** Days remaining until expiry (negative = already expired) */
export function daysUntilExpiry(car: CabinetCar): number | null {
  const elapsed = daysSinceAnchor(car)
  if (elapsed === null) return null
  return LISTING_ACTIVE_DAYS - elapsed
}

/** True when listing has passed the expiry date */
export function isListingExpired(car: CabinetCar): boolean {
  const remaining = daysUntilExpiry(car)
  return remaining !== null && remaining <= 0
}

/** True when the renew button should be visible (day 25+, not yet expired) */
export function shouldShowRenewButton(car: CabinetCar): boolean {
  if (car.publicationStatus !== 'published') return false
  const elapsed = daysSinceAnchor(car)
  if (elapsed === null) return false
  return elapsed >= LISTING_RENEW_WARNING_DAY && elapsed < LISTING_ACTIVE_DAYS
}

/** True when the car is in the email-reminder window (day 30–40) */
export function isInEmailReminderWindow(car: CabinetCar): boolean {
  const elapsed = daysSinceAnchor(car)
  if (elapsed === null) return false
  return elapsed >= LISTING_EMAIL_REMINDER_DAY && elapsed < LISTING_ACTIVE_DAYS
}

/**
 * Renew a car listing: reset anchor to now, recompute expiresAt.
 * Returns the patched car (does NOT mutate the original).
 */
export function renewListing(car: CabinetCar): CabinetCar {
  const now = new Date().toISOString()
  const renewed = { ...car, renewedAt: now }
  const expires = computeExpiresAt(renewed)
  return {
    ...renewed,
    expiresAt: expires ? expires.toISOString() : '',
    publicationStatus: 'published',
  }
}

/**
 * Set expiresAt on a freshly published car.
 * Call this when publicationStatus first changes to 'published'.
 */
export function initListingExpiry(car: CabinetCar): CabinetCar {
  if (car.expiresAt) return car  // already set, don't overwrite
  const expires = computeExpiresAt(car)
  return {
    ...car,
    expiresAt: expires ? expires.toISOString() : '',
  }
}

/** Human-readable label: "Wygasa za 6 dni" / "Wygasło" */
export function expiryLabel(car: CabinetCar, locale: 'pl' | 'uk' | 'en'): string {
  const remaining = daysUntilExpiry(car)
  if (remaining === null) return ''

  const days = Math.ceil(remaining)

  if (days <= 0) {
    return { pl: 'Wygasło', uk: 'Термін дії закінчився', en: 'Expired' }[locale]
  }

  if (locale === 'pl') return `Wygasa za ${days} ${days === 1 ? 'dzień' : 'dni'}`
  if (locale === 'uk') return `Закінчується через ${days} ${days === 1 ? 'день' : 'днів'}`
  return `Expires in ${days} day${days === 1 ? '' : 's'}`
}
