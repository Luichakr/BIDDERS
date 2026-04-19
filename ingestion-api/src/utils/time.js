export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function randomInt(min, max) {
  const lo = Math.ceil(min)
  const hi = Math.floor(max)
  return Math.floor(Math.random() * (hi - lo + 1)) + lo
}

export function nowIso() {
  return new Date().toISOString()
}

export function toIsoOrNull(value) {
  if (!value) return null
  const d = new Date(value)
  return Number.isNaN(d.getTime()) ? null : d.toISOString()
}
