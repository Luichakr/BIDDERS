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

function buildEmailHtml(car: ModerationCarInfo, section: ModerationSection): string {
  const sectionLabel = section === 'in-transit' ? 'Auta w drodze' : 'Auta w nalichii'
  const approveUrl = buildLink('approve', car.id, car.userId, section)
  const rejectUrl = buildLink('reject', car.id, car.userId, section)

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Nowe zgłoszenie</title></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08)">
  <div style="background:#e85d04;padding:24px 32px">
    <div style="color:#fff;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.8">BID BIDDERS</div>
    <h1 style="color:#fff;margin:6px 0 0;font-size:22px;font-weight:700">📢 Nowe zgłoszenie</h1>
    <div style="color:#ffe0cc;font-size:14px;margin-top:4px">Sekcja: <strong>${sectionLabel}</strong></div>
  </div>
  <div style="padding:28px 32px">
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      <tr><td style="padding:6px 0;color:#64748b;width:110px">Tytuł</td><td style="padding:6px 0;font-weight:600;color:#0f172a">${car.title || '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">Marka</td><td style="padding:6px 0;color:#0f172a">${car.make || '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">Model</td><td style="padding:6px 0;color:#0f172a">${car.model || '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">Rok</td><td style="padding:6px 0;color:#0f172a">${car.year || '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">VIN</td><td style="padding:6px 0;color:#0f172a;font-family:monospace">${car.vin || '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">Przebieg</td><td style="padding:6px 0;color:#0f172a">${car.mileageKm ? `${car.mileageKm} km` : '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">Uszkodzenia</td><td style="padding:6px 0;color:#0f172a">${car.damagePrimary || '—'}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">Cena</td><td style="padding:6px 0;color:#0f172a">${car.publicPriceUsd ? `$${car.publicPriceUsd}` : '—'}</td></tr>
    </table>
    <div style="margin-top:28px;display:flex;gap:12px">
      <a href="${approveUrl}" style="display:inline-block;padding:14px 28px;background:#16a34a;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:15px">✅ ZATWIERDŹ</a>
      <a href="${rejectUrl}" style="display:inline-block;padding:14px 28px;background:#dc2626;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:15px">❌ ODRZUĆ</a>
    </div>
    <div style="margin-top:20px;padding:12px 16px;background:#f8fafc;border-radius:8px;font-size:12px;color:#94a3b8">
      Car ID: ${car.id}<br/>User ID: ${car.userId}
    </div>
  </div>
  <div style="padding:16px 32px;background:#f8fafc;text-align:center;font-size:12px;color:#94a3b8">bidbidders.com</div>
</div>
</body></html>`
}

export async function sendModerationEmail(car: ModerationCarInfo, section: ModerationSection): Promise<void> {
  const sectionLabel = section === 'in-transit' ? 'Auta w drodze' : 'Auta w nalichii'

  const body = {
    access_key: ACCESS_KEY,
    subject: `[BID BIDDERS] Nowe zgłoszenie — ${sectionLabel} — ${car.title || car.make + ' ' + car.model}`,
    from_name: 'BID BIDDERS Cabinet',
    to: 'bidbidders1@gmail.com',
    html: buildEmailHtml(car, section),
    message: `Nowe zgłoszenie: ${car.title || car.make + ' ' + car.model} → ${sectionLabel}`,
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
