/**
 * Cloudflare Worker — Car Listing Moderation
 *
 * Two endpoints:
 *   POST /notify  — called by Supabase DB webhook on INSERT into cabinet_cars
 *                   Sends an approval email to the moderator
 *
 *   GET  /approve?id=XXX  — link inside the email
 *                           Sets publication_status='published' in Supabase
 *
 * Required secrets (set via `wrangler secret put`):
 *   SUPABASE_URL          — e.g. https://xxx.supabase.co
 *   SUPABASE_SERVICE_KEY  — service_role key (bypasses RLS)
 *   WEB3FORMS_KEY         — your Web3Forms access key
 *   WORKER_BASE_URL       — full public URL of this worker, e.g. https://card-moderation.bidbidders.workers.dev
 *
 * Deploy:
 *   cd workers/card-moderation
 *   npx wrangler deploy
 *
 * Supabase webhook setup (Dashboard → Database → Webhooks):
 *   Table: cabinet_cars
 *   Events: Insert
 *   URL: https://card-moderation.bidbidders.workers.dev/notify
 *   HTTP method: POST
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/notify' && request.method === 'POST') {
      return handleNotify(request, env)
    }

    if (url.pathname === '/approve') {
      return handleApprove(url, env)
    }

    return new Response('Not Found', { status: 404 })
  },
}

/* ─────────────────────────────────────────────
   POST /notify
   Supabase sends: { type: 'INSERT', table: 'cabinet_cars', record: {...} }
───────────────────────────────────────────── */
async function handleNotify(request, env) {
  try {
    const body = await request.json()
    const record = body.record ?? body

    const carId    = String(record.id ?? '')
    const carTitle = [record.year, record.make, record.model].filter(Boolean).join(' ').trim()
                      || record.title || 'Новая карточка'
    const vin      = record.vin || '—'
    const status   = record.publication_status || '—'

    // Skip if already published (e.g. an update that arrived as INSERT)
    if (status === 'published') {
      return new Response('Already published, skipping', { status: 200 })
    }

    const approveUrl = `${env.WORKER_BASE_URL}/approve?id=${encodeURIComponent(carId)}`

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
          <tr><td align="center">
            <table width="560" cellpadding="0" cellspacing="0"
                   style="background:#fff;border-radius:16px;overflow:hidden;
                          box-shadow:0 4px 24px rgba(0,0,0,0.10);">
              <!-- Header -->
              <tr>
                <td style="background:#1B2A4A;padding:28px 40px;">
                  <p style="margin:0;color:#FF5C00;font-size:11px;font-weight:700;
                             letter-spacing:0.14em;text-transform:uppercase;">
                    BID BIDDERS — Модерация
                  </p>
                  <h1 style="margin:8px 0 0;color:#fff;font-size:22px;font-weight:700;">
                    Новая карточка ожидает публикации
                  </h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:32px 40px;">
                  <table width="100%" cellpadding="0" cellspacing="0"
                         style="background:#f8f9fa;border-radius:10px;padding:20px;
                                margin-bottom:28px;border:1px solid #e8e8e8;">
                    <tr>
                      <td style="padding:6px 0;">
                        <span style="color:#888;font-size:12px;">Автомобиль</span><br>
                        <strong style="font-size:17px;color:#1B2A4A;">${carTitle}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;border-top:1px solid #e8e8e8;">
                        <span style="color:#888;font-size:12px;">VIN</span><br>
                        <span style="font-size:14px;color:#333;font-family:monospace;">${vin}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:6px 0;border-top:1px solid #e8e8e8;">
                        <span style="color:#888;font-size:12px;">ID карточки</span><br>
                        <span style="font-size:12px;color:#888;font-family:monospace;">${carId}</span>
                      </td>
                    </tr>
                  </table>

                  <!-- Approve button -->
                  <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                    <tr>
                      <td style="border-radius:10px;background:#FF5C00;
                                 box-shadow:0 6px 20px rgba(255,92,0,0.35);">
                        <a href="${approveUrl}"
                           style="display:inline-block;padding:18px 44px;
                                  color:#fff;text-decoration:none;
                                  font-size:17px;font-weight:700;
                                  letter-spacing:0.03em;">
                          ✓ &nbsp;УТВЕРЖДАЮ
                        </a>
                      </td>
                    </tr>
                  </table>

                  <p style="color:#aaa;font-size:12px;margin:0;">
                    После нажатия карточка будет опубликована на сайте автоматически.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#f8f9fa;padding:16px 40px;border-top:1px solid #eee;">
                  <p style="margin:0;color:#bbb;font-size:11px;">
                    BID BIDDERS · bidbidders.com
                  </p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </body>
      </html>
    `

    const resp = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_KEY,
        to: 'bidbidders1@gmail.com',
        subject: 'УТВЕРДИ КАРТОЧКУ',
        html: emailHtml,
        from_name: 'BID BIDDERS Moderation',
      }),
    })

    if (!resp.ok) {
      const text = await resp.text()
      return new Response(`Email error: ${text}`, { status: 500 })
    }

    return new Response('Notification sent', { status: 200 })
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 })
  }
}

/* ─────────────────────────────────────────────
   GET /approve?id=XXX
   Moderator clicks the button in the email
───────────────────────────────────────────── */
async function handleApprove(url, env) {
  const carId = url.searchParams.get('id')
  if (!carId) {
    return new Response('Missing id parameter', { status: 400 })
  }

  try {
    const resp = await fetch(
      `${env.SUPABASE_URL}/rest/v1/cabinet_cars?id=eq.${encodeURIComponent(carId)}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': env.SUPABASE_SERVICE_KEY,
          'Authorization': `Bearer ${env.SUPABASE_SERVICE_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          publication_status: 'published',
          published_at: new Date().toISOString(),
        }),
      }
    )

    if (!resp.ok) {
      const text = await resp.text()
      throw new Error(`Supabase ${resp.status}: ${text}`)
    }

    return new Response(successPage(), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  } catch (err) {
    return new Response(errorPage(err.message), {
      status: 500,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }
}

/* ─────── HTML pages ─────── */

function successPage() {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Опубликовано</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:Arial,sans-serif;background:#f4f4f4;
       display:flex;justify-content:center;align-items:center;min-height:100vh;}
  .card{background:#fff;border-radius:20px;padding:56px 48px;
        text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.10);max-width:420px;width:90%;}
  .icon{font-size:56px;margin-bottom:20px;}
  h1{color:#1B2A4A;font-size:24px;font-weight:700;margin-bottom:12px;}
  p{color:#666;font-size:15px;line-height:1.5;}
</style>
</head>
<body>
  <div class="card">
    <div class="icon">✅</div>
    <h1>Карточка опубликована!</h1>
    <p>Карточка теперь видна всем пользователям на сайте bidbidders.com.</p>
  </div>
</body></html>`
}

function errorPage(message) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Ошибка</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:Arial,sans-serif;background:#f4f4f4;
       display:flex;justify-content:center;align-items:center;min-height:100vh;}
  .card{background:#fff;border-radius:20px;padding:56px 48px;
        text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.10);max-width:420px;width:90%;}
  h1{color:#c0392b;font-size:22px;font-weight:700;margin-bottom:12px;}
  p{color:#888;font-size:13px;}
</style>
</head>
<body>
  <div class="card">
    <h1>Ошибка публикации</h1>
    <p>${message}</p>
  </div>
</body></html>`
}
