/**
 * Cloudflare Pages Function: POST /api/send-moderation
 * Sends a moderation request email via Resend with HTML buttons.
 *
 * Required env var in Cloudflare Pages:
 *   RESEND_API_KEY — from resend.com
 */

const SITE = 'https://bidbidders.com'
const TO_EMAIL = 'sales@bidbidders.com'
const FROM_EMAIL = 'noreply@bidbidders.com'

function buildLink(action, carId, userId, section, lotNumber) {
  const params = new URLSearchParams({ action, carId, userId, section, lotNumber: lotNumber || '' })
  return `${SITE}/api/moderate?${params.toString()}`
}

function buildHtml(car, section) {
  const sectionLabel = section === 'in-transit' ? '🚢 Auta w drodze' : '🏠 Auta w nalichii'
  const approveUrl = buildLink('approve', car.id, car.userId, section, car.lotNumber)
  const rejectUrl = buildLink('reject', car.id, car.userId, section, car.lotNumber)

  return `<!DOCTYPE html>
<html lang="pl">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
<div style="max-width:560px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08)">

  <div style="background:#e85d04;padding:24px 32px">
    <div style="color:#fff;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.75">BID BIDDERS · Moderacja</div>
    <h1 style="color:#fff;margin:8px 0 4px;font-size:22px;font-weight:700">📢 Nowe zgłoszenie</h1>
    <div style="color:#ffe0cc;font-size:14px">Sekcja: <strong>${sectionLabel}</strong></div>
  </div>

  <div style="padding:28px 32px">
    <table style="width:100%;border-collapse:collapse;font-size:14px;color:#0f172a">
      <tr><td style="padding:7px 0;color:#64748b;width:120px;vertical-align:top">Lot #</td><td style="padding:7px 0;font-weight:700;color:#e85d04">${car.lotNumber || '—'}</td></tr>
      <tr><td style="padding:7px 0;color:#64748b">Tytuł</td><td style="padding:7px 0;font-weight:600">${car.title || '—'}</td></tr>
      <tr><td style="padding:7px 0;color:#64748b">Marka / Model</td><td style="padding:7px 0">${[car.make, car.model].filter(Boolean).join(' ') || '—'}</td></tr>
      <tr><td style="padding:7px 0;color:#64748b">Rok</td><td style="padding:7px 0">${car.year || '—'}</td></tr>
      <tr><td style="padding:7px 0;color:#64748b">VIN</td><td style="padding:7px 0;font-family:monospace;font-size:13px">${car.vin || '—'}</td></tr>
      <tr><td style="padding:7px 0;color:#64748b">Przebieg</td><td style="padding:7px 0">${car.mileageKm ? car.mileageKm + ' km' : '—'}</td></tr>
      <tr><td style="padding:7px 0;color:#64748b">Uszkodzenia</td><td style="padding:7px 0">${car.damagePrimary || '—'}</td></tr>
      <tr><td style="padding:7px 0;color:#64748b">Cena</td><td style="padding:7px 0">${car.publicPriceUsd ? '$' + car.publicPriceUsd : '—'}</td></tr>
    </table>

    <div style="margin-top:28px">
      <a href="${approveUrl}"
         style="display:inline-block;padding:14px 32px;background:#16a34a;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:16px;margin-right:12px">
        ✅ ZATWIERDŹ
      </a>
      <a href="${rejectUrl}"
         style="display:inline-block;padding:14px 32px;background:#dc2626;color:#fff;text-decoration:none;border-radius:8px;font-weight:700;font-size:16px">
        ❌ ODRZUĆ
      </a>
    </div>

    <div style="margin-top:20px;padding:12px 16px;background:#f8fafc;border-radius:8px;font-size:11px;color:#94a3b8;line-height:1.6">
      Car ID: ${car.id}<br/>User ID: ${car.userId}
    </div>
  </div>

  <div style="padding:14px 32px;background:#f8fafc;text-align:center;font-size:12px;color:#94a3b8">
    bidbidders.com
  </div>
</div>
</body></html>`
}

export async function onRequestPost({ request, env }) {
  // CORS preflight
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  let car, section
  try {
    const body = await request.json()
    car = body.car
    section = body.section
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } })
  }

  if (!car?.id || !car?.userId || !section) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } })
  }

  const apiKey = env.RESEND_API_KEY
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } })
  }

  const sectionLabel = section === 'in-transit' ? 'Auta w drodze' : 'Auta w nalichii'
  const subject = `[BID BIDDERS] Nowe zgłoszenie — ${sectionLabel} — ${car.title || [car.make, car.model].filter(Boolean).join(' ') || 'Pojazd'}`

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      html: buildHtml(car, section),
    }),
  })

  const data = await res.json()

  if (!res.ok) {
    return new Response(JSON.stringify({ error: data }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders } })
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } })
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
