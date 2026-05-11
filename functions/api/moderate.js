/**
 * Cloudflare Pages Function: /api/moderate
 * Handles moderation approve/reject links from email.
 *
 * Required env vars in Cloudflare Pages (Settings → Environment variables):
 *   SUPABASE_URL        — same as VITE_SUPABASE_URL
 *   SUPABASE_SERVICE_KEY — service_role key from Supabase Settings → API
 */

const SECTION_LABELS = {
  'in-transit': 'Auta w drodze',
  'in-stock': 'Auta w nalichii',
}

const STATUS_MAP = {
  approve: 'published',
  reject: 'rejected',
}

function html(title, body, color = '#16a34a') {
  return new Response(
    `<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title} — BID BIDDERS</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px}
    .card{background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.1);padding:48px 40px;max-width:480px;width:100%;text-align:center}
    .icon{font-size:56px;margin-bottom:16px}
    h1{font-size:24px;font-weight:700;color:#0f172a;margin-bottom:8px}
    p{color:#475569;font-size:15px;line-height:1.6;margin-bottom:6px}
    .badge{display:inline-block;padding:4px 14px;border-radius:999px;font-size:13px;font-weight:600;color:#fff;background:${color};margin:12px 0 20px}
    a{color:#e85d04;text-decoration:none;font-weight:600}
    a:hover{text-decoration:underline}
  </style>
</head>
<body>
  <div class="card">
    ${body}
    <a href="https://bidbidders.com">← bidbidders.com</a>
  </div>
</body>
</html>`,
    { headers: { 'Content-Type': 'text/html;charset=utf-8' } },
  )
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url)
  const action = url.searchParams.get('action')
  const carId = url.searchParams.get('carId')
  const userId = url.searchParams.get('userId')
  const section = url.searchParams.get('section')
  const lotNumber = url.searchParams.get('lotNumber') || carId

  // ── Validate params ────────────────────────────────────────────────────────
  if (!action || !carId || !userId || !section) {
    return html(
      'Błędny link',
      `<div class="icon">⚠️</div>
       <h1>Nieprawidłowy link</h1>
       <p>Link jest niekompletny lub uszkodzony.</p><br/>`,
      '#dc2626',
    )
  }

  if (!STATUS_MAP[action]) {
    return html(
      'Nieznana akcja',
      `<div class="icon">❓</div>
       <h1>Nieznana akcja</h1>
       <p>Akcja "${action}" jest nieobsługiwana.</p><br/>`,
      '#dc2626',
    )
  }

  // ── Supabase credentials ───────────────────────────────────────────────────
  const supabaseUrl = env.SUPABASE_URL
  const serviceKey = env.SUPABASE_SERVICE_KEY

  if (!supabaseUrl || !serviceKey) {
    return html(
      'Błąd konfiguracji',
      `<div class="icon">🔧</div>
       <h1>Błąd konfiguracji serwera</h1>
       <p>Brak zmiennych środowiskowych SUPABASE_URL / SUPABASE_SERVICE_KEY.<br/>Skontaktuj się z administratorem.</p><br/>`,
      '#dc2626',
    )
  }

  const newStatus = STATUS_MAP[action]
  const sectionLabel = SECTION_LABELS[section] ?? section

  // ── Update cabinet_cars in Supabase ────────────────────────────────────────
  try {
    const apiUrl = `${supabaseUrl}/rest/v1/cabinet_cars?user_id=eq.${encodeURIComponent(userId)}&id=eq.${encodeURIComponent(carId)}`

    const res = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        publication_status: newStatus,
        updated_at: new Date().toISOString(),
      }),
    })

    if (!res.ok) {
      const errText = await res.text()
      throw new Error(`Supabase error ${res.status}: ${errText}`)
    }
  } catch (err) {
    return html(
      'Błąd',
      `<div class="icon">❌</div>
       <h1>Wystąpił błąd</h1>
       <p>${String(err)}</p><br/>`,
      '#dc2626',
    )
  }

  // ── Success page ───────────────────────────────────────────────────────────
  if (action === 'approve') {
    return html(
      'Zatwierdzone',
      `<div class="icon">✅</div>
       <h1>Ogłoszenie zatwierdzone!</h1>
       <div class="badge">ZATWIERDZONO</div>
       <p>Samochód <strong>Lot #${lotNumber}</strong> został dodany do sekcji</p>
       <p><strong>${sectionLabel}</strong></p>
       <br/>`,
      '#16a34a',
    )
  } else {
    return html(
      'Odrzucone',
      `<div class="icon">🚫</div>
       <h1>Ogłoszenie odrzucone</h1>
       <div class="badge" style="background:#dc2626">ODRZUCONO</div>
       <p>Samochód <strong>Lot #${lotNumber}</strong> nie został opublikowany.</p>
       <br/>`,
      '#dc2626',
    )
  }
}
