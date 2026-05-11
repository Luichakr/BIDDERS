/**
 * Sends a moderation request email to bidbidders1@gmail.com
 * with Approve / Reject links pointing to /api/moderate
 */

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? ''
const ENDPOINT = 'https://api.web3forms.com/submit'
const SITE = import.meta.env.VITE_SITE_ORIGIN ?? 'https://bidbidders.com'

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

function buildLink(action: 'approve' | 'reject', carId: string, userId: string, section: ModerationSection): string {
  const params = new URLSearchParams({ action, carId, userId, section })
  return `${SITE}/api/moderate?${params.toString()}`
}

function buildEmailBody(car: ModerationCarInfo, section: ModerationSection): string {
  const sectionLabel = section === 'in-transit' ? 'Auta w drodze' : 'Auta w nalichii'
  const approveUrl = buildLink('approve', car.id, car.userId, section)
  const rejectUrl = buildLink('reject', car.id, car.userId, section)

  return `
NOWE ZGŁOSZENIE DO SEKCJI: ${sectionLabel.toUpperCase()}
════════════════════════════════════════════

Tytuł:      ${car.title || '—'}
Marka:      ${car.make || '—'}
Model:      ${car.model || '—'}
Rok:        ${car.year || '—'}
VIN:        ${car.vin || '—'}
Przebieg:   ${car.mileageKm ? `${car.mileageKm} km` : '—'}
Uszkodz.:   ${car.damagePrimary || '—'}
Cena:       ${car.publicPriceUsd ? `$${car.publicPriceUsd}` : '—'}
Opis:       ${car.description || '—'}

════════════════════════════════════════════
SEKCJA: ${sectionLabel}
Car ID: ${car.id}
User ID: ${car.userId}
════════════════════════════════════════════

✅ ZATWIERDZIĆ (Potwierdź):
${approveUrl}

❌ ODRZUCIĆ (Odrzuć):
${rejectUrl}

════════════════════════════════════════════
bidbidders.com
`.trim()
}

export async function sendModerationEmail(car: ModerationCarInfo, section: ModerationSection): Promise<void> {
  const sectionLabel = section === 'in-transit' ? 'Auta w drodze' : 'Auta w nalichii'

  const body = {
    access_key: ACCESS_KEY,
    subject: `[BID BIDDERS] Nowe zgłoszenie — ${sectionLabel} — ${car.title || car.make + ' ' + car.model}`,
    from_name: 'BID BIDDERS Cabinet',
    to: 'bidbidders1@gmail.com',
    message: buildEmailBody(car, section),
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) throw new Error(`Web3Forms error: ${res.status}`)

  const data = await res.json() as { success: boolean; message?: string }
  if (!data.success) throw new Error(data.message ?? 'Submission failed')
}
