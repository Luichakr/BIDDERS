/**
 * Sends lead email via Web3Forms API.
 * Access key is obtained at https://web3forms.com — enter sales@bidbidders.com,
 * confirm via email link, and paste the key into VITE_WEB3FORMS_KEY in .env
 */

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? ''
const ENDPOINT = 'https://api.web3forms.com/submit'

export type B2CLeadPayload = {
  // Contact
  name: string
  phone: string
  email: string
  // Car preferences
  bodyType: string
  yearMin: number
  yearMax: number
  budgetMin: number
  budgetMax: number
  make: string
  model: string
  generation: string
  drive: string
  fuel: string
  gearbox: string
  color: string
  damageType: string
  steering: string
  power: string
  engineVol: string
  // Extra
  scenario: string
  comment: string
}

export type B2BLeadPayload = {
  company: string
  phone: string
  format: string
  comment: string
}

function formatB2CMessage(p: B2CLeadPayload): string {
  const lines: string[] = []

  lines.push('=== NOWA ZAЯВКА B2C — DOBÓR AUTA ===')
  lines.push('')
  lines.push('— DANE KONTAKTOWE —')
  lines.push(`Imię:     ${p.name || '—'}`)
  lines.push(`Telefon:  ${p.phone || '—'}`)
  lines.push(`Email:    ${p.email || '—'}`)
  lines.push('')
  lines.push('— PARAMETRY AUTA —')
  lines.push(`Nadwozie:    ${p.bodyType || '—'}`)
  lines.push(`Rok:         ${p.yearMin} – ${p.yearMax}`)
  lines.push(`Budżet:      $${p.budgetMin.toLocaleString('en-US')} – $${p.budgetMax.toLocaleString('en-US')}`)
  lines.push(`Marka:       ${p.make || '—'}`)
  lines.push(`Model:       ${p.model || '—'}`)
  lines.push(`Generacja:   ${p.generation || '—'}`)
  lines.push(`Napęd:       ${p.drive || '—'}`)
  lines.push(`Paliwo:      ${p.fuel || '—'}`)
  lines.push(`Skrzynia:    ${p.gearbox || '—'}`)
  lines.push(`Kolor:       ${p.color || '—'}`)
  lines.push(`Uszkodzenia: ${p.damageType || '—'}`)
  lines.push(`Kierownica:  ${p.steering || '—'}`)
  lines.push(`Moc:         ${p.power ? `${p.power} KM` : '—'}`)
  lines.push(`Silnik:      ${p.engineVol ? `${p.engineVol}L` : '—'}`)
  if (p.scenario) {
    lines.push('')
    lines.push('— SCENARIUSZ —')
    lines.push(p.scenario)
  }
  if (p.comment) {
    lines.push('')
    lines.push('— KOMENTARZ —')
    lines.push(p.comment)
  }
  lines.push('')
  lines.push('---')
  lines.push('bidbidders.com')

  return lines.join('\n')
}

function formatB2BMessage(p: B2BLeadPayload): string {
  const lines: string[] = []

  lines.push('=== NOWA ZAЯВКА B2B — WSPÓŁPRACA ===')
  lines.push('')
  lines.push('— DANE FIRMY —')
  lines.push(`Firma:    ${p.company || '—'}`)
  lines.push(`Telefon:  ${p.phone || '—'}`)
  lines.push(`Format:   ${p.format || '—'}`)
  if (p.comment) {
    lines.push('')
    lines.push('— KOMENTARZ —')
    lines.push(p.comment)
  }
  lines.push('')
  lines.push('---')
  lines.push('bidbidders.com')

  return lines.join('\n')
}

export async function sendB2CLead(payload: B2CLeadPayload): Promise<void> {
  const body = {
    access_key: ACCESS_KEY,
    subject: `[BIDDERS] Nowe zapytanie B2C — ${payload.name || payload.phone}`,
    from_name: 'BIDDERS Website',
    replyto: payload.email || undefined,
    message: formatB2CMessage(payload),
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`Web3Forms error: ${res.status}`)
  }

  const data = await res.json() as { success: boolean; message?: string }
  if (!data.success) {
    throw new Error(data.message ?? 'Submission failed')
  }
}

export async function sendB2BLead(payload: B2BLeadPayload): Promise<void> {
  const body = {
    access_key: ACCESS_KEY,
    subject: `[BIDDERS] Nowe zapytanie B2B — ${payload.company || payload.phone}`,
    from_name: 'BIDDERS Website',
    message: formatB2BMessage(payload),
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`Web3Forms error: ${res.status}`)
  }

  const data = await res.json() as { success: boolean; message?: string }
  if (!data.success) {
    throw new Error(data.message ?? 'Submission failed')
  }
}
