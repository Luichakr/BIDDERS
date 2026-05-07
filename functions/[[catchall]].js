// Cloudflare Pages catch-all function for SPA routing.
// For car detail pages (/*/cars/<slug>) it injects OG meta tags server-side
// so Telegram / WhatsApp / Facebook show the real car photo + title in previews.

const CAR_PATH_RE = /^\/(?:pl|en|uk)\/cars\/([^/?#]+)/

/** Extract VIN from slug like "bmw-2-series-gran-coupe-2026-wba83qq00t7t28178" */
function vinFromSlug(slug) {
  const parts = slug.split('-')
  // Look for a 17-char alphanumeric segment (standard VIN)
  for (let i = parts.length - 1; i >= 0; i--) {
    if (/^[A-Za-z0-9]{17}$/.test(parts[i])) return parts[i].toUpperCase()
  }
  return parts[parts.length - 1].toUpperCase()
}

function escapeHtml(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function onRequestGet(context) {
  const { request, env } = context
  const url = new URL(request.url)
  const match = CAR_PATH_RE.exec(url.pathname)

  // Not a car page — serve normally
  if (!match) {
    const response = await env.ASSETS.fetch(request)
    if (response.status !== 404) return response
    return env.ASSETS.fetch(new URL('/index.html', request.url).toString())
  }

  const slug = match[1]
  const vin = vinFromSlug(slug)

  // Fetch index.html and vin-index.json in parallel
  const [indexRes, vinRes] = await Promise.all([
    env.ASSETS.fetch(new URL('/index.html', request.url).toString()),
    env.ASSETS.fetch(new URL('/data/vin-index.json', request.url).toString()),
  ])

  if (!indexRes.ok) return indexRes

  const html = await indexRes.text()

  // Try to find car by VIN
  let car = null
  if (vinRes.ok) {
    try {
      const index = await vinRes.json()
      car = index[vin] ?? null
    } catch { /* ignore */ }
  }

  if (!car) {
    // Unknown car — return plain index.html, React will handle it
    return new Response(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    })
  }

  const title = escapeHtml(`${car.title} | BID BIDDERS`)
  const descParts = [
    car.mileage ? `Przebieg: ${car.mileage}` : null,
    car.engine ? String(car.engine) : null,
    car.location ? `Lokalizacja: ${car.location}` : null,
    'Import aut ze Stanów • BID BIDDERS',
  ].filter(Boolean)
  const desc = escapeHtml(descParts.join(' • '))
  const image = escapeHtml(car.image ?? 'https://bidbidders.com/og-image.jpg')
  const canonical = escapeHtml(request.url)

  const ogTags = `
  <title>${title}</title>
  <meta name="description" content="${desc}" />
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="BID BIDDERS" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${desc}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="800" />
  <meta property="og:url" content="${canonical}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${desc}" />
  <meta name="twitter:image" content="${image}" />`

  const injected = html
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta\s+name="description"[^>]*>/gi, '')
    .replace(/<meta\s+property="og:[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^>]*>/gi, '')
    .replace('</head>', `${ogTags}\n</head>`)

  return new Response(injected, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  })
}
