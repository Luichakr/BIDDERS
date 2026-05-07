import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BRANCHES = JSON.parse(
  readFileSync(join(__dirname, '../../data/usBranches.json'), 'utf8')
)

/**
 * Strips noise from a location name for fuzzy matching.
 * "CA - San Jose" → "san jose"
 * "IAA - Chicago" → "chicago"
 * "Copart San Jose" → "san jose"
 */
function normalize(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .replace(/\b(iaai?|copart|iaa|yard|north|south|east|west|metro|new|old|greater)\b/g, '')
    .replace(/\b[a-z]{2}\s*-\s*/g, '')   // "CA - " state prefix
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Match a location string + auction group to the closest BRANCH entry.
 *
 * @param {object} params
 * @param {string|null} params.locationName  - e.g. "San Jose", "CA - San Jose", "IAA San Jose"
 * @param {string|null} params.locationCity  - e.g. "San Jose"
 * @param {string|null} params.locationState - e.g. "CA"
 * @param {'copart'|'iaai'} params.source    - determines preferred group
 * @returns {{ branchId: number, branchName: string } | null}
 */
export function matchBranch({ locationName, locationCity, locationState, source }) {
  const group = source === 'copart' ? 'Copart' : 'IAAI'

  // ── Build candidate pools ────────────────────────────────────────────────
  const sameGroup  = BRANCHES.filter((b) => b.group === group)
  const otherGroup = BRANCHES.filter((b) => b.group !== group)

  function tryFind(pool, query) {
    if (!query) return null

    // 1. Exact match (case-insensitive)
    const exact = pool.find((b) => b.name.toLowerCase() === query.toLowerCase())
    if (exact) return exact

    // 2. Normalized exact match
    const qNorm = normalize(query)
    if (!qNorm) return null

    const normExact = pool.find((b) => normalize(b.name) === qNorm)
    if (normExact) return normExact

    // 3. Branch name includes query (normalized)
    const includes = pool.find((b) => normalize(b.name).includes(qNorm) || qNorm.includes(normalize(b.name)))
    if (includes) return includes

    return null
  }

  // Candidates in order of priority
  const queries = [locationName, locationCity].filter(Boolean)

  for (const query of queries) {
    const hit = tryFind(sameGroup, query) || tryFind(otherGroup, query)
    if (hit) return { branchId: hit.id, branchName: hit.name }
  }

  // ── Slug fallback: Copart URLs embed city in slug "ca-san-jose" ──────────
  // Try each query word as a city hint
  for (const query of queries) {
    const words = normalize(query).split(' ').filter((w) => w.length > 2)
    for (const word of words) {
      const hit =
        sameGroup.find((b) => normalize(b.name).includes(word)) ||
        otherGroup.find((b) => normalize(b.name).includes(word))
      if (hit) return { branchId: hit.id, branchName: hit.name }
    }
  }

  return null
}
