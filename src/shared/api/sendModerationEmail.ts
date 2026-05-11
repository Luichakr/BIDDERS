/**
 * Sends a moderation request email via /api/send-moderation (Cloudflare Pages Function → Resend)
 * with HTML Approve / Reject buttons pointing to /api/moderate
 */

const ENDPOINT = '/api/send-moderation'

export type ModerationSection = 'in-transit' | 'in-stock'

export interface ModerationCarInfo {
  id: string
  userId: string
  title: string
  make: string
  model: string
  year: string
  vin: string
  mileageKm: string
  damagePrimary: string
  publicPriceUsd: string
  description: string
}

export async function sendModerationEmail(car: ModerationCarInfo, section: ModerationSection): Promise<void> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ car, section }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`send-moderation error ${res.status}: ${err}`)
  }

  const data = await res.json() as { ok?: boolean; error?: unknown }
  if (!data.ok) throw new Error(String(data.error ?? 'Failed'))
}
