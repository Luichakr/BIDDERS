/**
 * Parses Copart / IAAI lot URLs and extracts source + lot ID.
 *
 * Supported formats:
 *   Copart:
 *     https://www.copart.com/lot/96023035/2006-mercedes-benz-sl-500-ca-san-jose
 *     https://www.copart.com/lot/96023035
 *   IAAI:
 *     https://www.iaai.com/ru-ru/VehicleDetail/45416740~US
 *     https://www.iaai.com/VehicleDetail/45416740~US
 *     https://www.iaai.com/vehicledetails/45416740
 *
 * @param {string} rawUrl
 * @returns {{ source: 'copart'|'iaai', id: string } | null}
 */
export function parseAuctionUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return null

  let url
  try {
    url = new URL(rawUrl.trim())
  } catch {
    return null
  }

  const host = url.hostname.toLowerCase().replace(/^www\./, '')

  // ── Copart ────────────────────────────────────────────────────────────────
  if (host === 'copart.com') {
    // /lot/96023035 or /lot/96023035/slug
    const match = url.pathname.match(/\/lot\/(\d+)/i)
    if (match) return { source: 'copart', id: match[1] }
    return null
  }

  // ── IAAI ──────────────────────────────────────────────────────────────────
  if (host === 'iaai.com') {
    // /VehicleDetail/45416740~US  or  /ru-ru/VehicleDetail/45416740~US
    const detailMatch = url.pathname.match(/vehicledetail\/(\d+)/i)
    if (detailMatch) return { source: 'iaai', id: detailMatch[1] }

    // /vehicledetails/45416740
    const detailsMatch = url.pathname.match(/vehicledetails\/(\d+)/i)
    if (detailsMatch) return { source: 'iaai', id: detailsMatch[1] }

    return null
  }

  return null
}
