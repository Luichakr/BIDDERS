/**
 * Cloudflare Scheduled Worker — Listing Expiry Email Reminder
 *
 * Runs daily (cron: "0 9 * * *" — every day at 09:00 UTC).
 * Finds all published cabinet cars in day 30 window and sends
 * a reminder email to the car owner via Web3Forms.
 *
 * Required secrets (set via `wrangler secret put`):
 *   SUPABASE_URL          — e.g. https://xxx.supabase.co
 *   SUPABASE_SERVICE_KEY  — service_role key (bypasses RLS)
 *   WEB3FORMS_KEY         — 8f5fde74-58b2-425b-abc1-3a2ad3f62ddb
 *
 * Deploy:
 *   cd workers/listing-expiry-reminder
 *   npx wrangler deploy
 */

const LISTING_ACTIVE_DAYS = 41
const LISTING_EMAIL_REMINDER_DAY = 30

export default {
  async scheduled(_event, env, _ctx) {
    await sendExpiryReminders(env)
  },

  // Allow manual trigger via GET /trigger (useful for testing)
  async fetch(request, env) {
    if (new URL(request.url).pathname === '/trigger') {
      await sendExpiryReminders(env)
      return new Response('Done', { status: 200 })
    }
    return new Response('Listing Expiry Reminder Worker', { status: 200 })
  },
}

async function sendExpiryReminders(env) {
  const now = Date.now()

  // Window: cars whose anchor was between (EMAIL_DAY) and (EMAIL_DAY+1) days ago
  const reminderStart = new Date(now - (LISTING_EMAIL_REMINDER_DAY + 1) * 86400000).toISOString()
  const reminderEnd   = new Date(now - LISTING_EMAIL_REMINDER_DAY       * 86400000).toISOString()
  const expiryMs      = LISTING_ACTIVE_DAYS * 86400000

  // Fetch all published cars in the reminder window
  // anchor = renewedAt if set, else publishedAt
  // We query both and union client-side (Supabase doesn't support OR easily across computed columns)
  const [withRenewed, withPublished] = await Promise.all([
    fetchCars(env, 'renewed_at', reminderStart, reminderEnd),
    fetchCars(env, 'published_at', reminderStart, reminderEnd),
  ])

  // Merge, deduplicate by id, exclude cars that already have renewedAt in window
  const byId = new Map()
  for (const car of [...withPublished, ...withRenewed]) {
    byId.set(car.id + car.user_id, car)
  }

  const cars = Array.from(byId.values()).filter((car) => {
    // Use renewedAt as anchor if available
    const anchor = car.renewed_at || car.published_at
    if (!anchor) return false
    const elapsed = (now - new Date(anchor).getTime()) / 86400000
    return elapsed >= LISTING_EMAIL_REMINDER_DAY && elapsed < LISTING_ACTIVE_DAYS
  })

  console.log(`[expiry-reminder] Found ${cars.length} cars in reminder window`)

  // Group by user
  const byUser = new Map()
  for (const car of cars) {
    if (!byUser.has(car.user_id)) byUser.set(car.user_id, [])
    byUser.get(car.user_id).push(car)
  }

  // Fetch user emails from auth.users via Supabase admin API
  const userIds = Array.from(byUser.keys())
  const users = await fetchUserEmails(env, userIds)

  let sent = 0
  for (const [userId, userCars] of byUser) {
    const email = users[userId]
    if (!email) {
      console.warn(`[expiry-reminder] No email for user ${userId}`)
      continue
    }

    const daysLeft = Math.round(LISTING_ACTIVE_DAYS - LISTING_EMAIL_REMINDER_DAY)
    await sendReminderEmail(env, email, userCars, daysLeft)
    sent++
  }

  console.log(`[expiry-reminder] Sent ${sent} reminder emails`)
}

async function fetchCars(env, anchorField, from, to) {
  const url = `${env.SUPABASE_URL}/rest/v1/cabinet_cars` +
    `?publication_status=eq.published` +
    `&${anchorField}=gte.${encodeURIComponent(from)}` +
    `&${anchorField}=lte.${encodeURIComponent(to)}` +
    `&select=id,user_id,public_title,title,make,model,year,published_at,renewed_at,expires_at`

  const res = await fetch(url, {
    headers: {
      'apikey': env.SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${env.SUPABASE_SERVICE_KEY}`,
    },
  })

  if (!res.ok) {
    console.error(`[expiry-reminder] Supabase query failed: ${res.status}`)
    return []
  }

  return res.json()
}

async function fetchUserEmails(env, userIds) {
  if (userIds.length === 0) return {}

  const result = {}

  // Supabase admin API — list users
  // We batch by fetching all and filtering (max 1000 users typically fine)
  const res = await fetch(`${env.SUPABASE_URL}/auth/v1/admin/users?per_page=1000`, {
    headers: {
      'apikey': env.SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${env.SUPABASE_SERVICE_KEY}`,
    },
  })

  if (!res.ok) {
    console.error(`[expiry-reminder] Failed to fetch users: ${res.status}`)
    return result
  }

  const { users } = await res.json()
  const idSet = new Set(userIds)

  for (const user of users ?? []) {
    if (idSet.has(user.id) && user.email) {
      result[user.id] = user.email
    }
  }

  return result
}

async function sendReminderEmail(env, toEmail, cars, daysLeft) {
  const carList = cars
    .map((car) => {
      const title = car.public_title || [car.year, car.make, car.model].filter(Boolean).join(' ') || car.title || 'Samochód'
      return `• ${title}`
    })
    .join('\n')

  const subject = cars.length === 1
    ? `Twoje ogłoszenie wygasa za ${daysLeft} dni — odnów je`
    : `${cars.length} Twoich ogłoszeń wygasa za ${daysLeft} dni — odnów je`

  const message = `Cześć!\n\nTwoje ${cars.length === 1 ? 'ogłoszenie wygasa' : 'ogłoszenia wygasają'} za ${daysLeft} dni:\n\n${carList}\n\nZaloguj się do panelu BID BIDDERS i kliknij "Odnów ogłoszenie", aby przedłużyć aktywność o kolejne 41 dni.\n\nhttps://bidbidders.com/pl/cabinet\n\n— Zespół BID BIDDERS`

  const body = {
    access_key: env.WEB3FORMS_KEY,
    from_name: 'BID BIDDERS',
    subject,
    email: toEmail,
    message,
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    console.error(`[expiry-reminder] Web3Forms send failed for ${toEmail}: ${res.status}`)
  } else {
    console.log(`[expiry-reminder] Sent to ${toEmail} (${cars.length} car(s))`)
  }
}
