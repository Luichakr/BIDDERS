/**
 * check-missing-keys.mjs
 *
 * Parses messages.ts line-by-line and reports:
 *   1. Keys in MessageKey union missing from any locale
 *   2. Keys present in some locales but absent in others
 *   3. Keys in locales but not in MessageKey union (orphans)
 *
 * EXIT CODE:
 *   0 — all keys consistent
 *   1 — mismatches detected
 */

import { readFile, access } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..', '..')
const MESSAGES_FILE = path.join(ROOT, 'src/shared/i18n/messages.ts')
const MESSAGES_DIR  = path.join(ROOT, 'src/shared/i18n/messages')
const LOCALES = ['uk', 'pl', 'en']

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function exists(p) {
  try { await access(p); return true } catch { return false }
}

/**
 * Extract MessageKey union keys from source text.
 * Looks for lines like:  | 'someKey'
 * Only collects keys while inside the MessageKey type block.
 */
function extractUnionKeys(src) {
  const keys = new Set()
  let inUnion = false
  for (const line of src.split('\n')) {
    const t = line.trim()
    if (/export\s+type\s+MessageKey\s*=/.test(t)) { inUnion = true; continue }
    if (inUnion) {
      const m = t.match(/^\|\s*'([^']+)'/)
      if (m) { keys.add(m[1]); continue }
      // End of union: blank line, 'type', 'export', 'const', etc.
      if (t.length > 0 && !t.startsWith('|')) inUnion = false
    }
  }
  return keys
}

/**
 * Extract keys from a locale block by tracking brace depth line-by-line.
 * Handles files of any size.
 */
function extractLocaleKeys(src, locale) {
  const keys = new Set()
  const lines = src.split('\n')

  // Detect start of locale block: "  uk: {" or "uk: {"
  const startRe = new RegExp(`^\\s{0,4}${locale}\\s*:\\s*\\{`)
  let depth = 0
  let inside = false

  for (const line of lines) {
    if (!inside) {
      if (startRe.test(line)) {
        inside = true
        depth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length
      }
      continue
    }

    // Track brace depth
    depth += (line.match(/\{/g) || []).length
    depth -= (line.match(/\}/g) || []).length

    if (depth <= 0) break  // exited the locale block

    // Only collect top-level keys (depth === 1 means one brace in)
    if (depth === 1) {
      // Match: "  key: 'value'" or "  key: `template`"
      const m = line.match(/^\s{2,8}(\w+)\s*:/)
      if (m) keys.add(m[1])
    }
  }

  return keys
}

// ─── Load ─────────────────────────────────────────────────────────────────────

async function loadData() {
  // Try split layout
  const ukFile = path.join(MESSAGES_DIR, 'uk.ts')
  const plFile = path.join(MESSAGES_DIR, 'pl.ts')
  const enFile = path.join(MESSAGES_DIR, 'en.ts')
  const idxFile = path.join(MESSAGES_DIR, 'index.ts')

  if (await exists(ukFile) && await exists(plFile) && await exists(enFile)) {
    const [uk, pl, en, idx] = await Promise.all([
      readFile(ukFile, 'utf8'),
      readFile(plFile, 'utf8'),
      readFile(enFile, 'utf8'),
      exists(idxFile).then(e => e ? readFile(idxFile, 'utf8') : ''),
    ])
    // In split layout, each file exports a flat object — extract top-level keys
    const extractFlat = src => {
      const keys = new Set()
      for (const line of src.split('\n')) {
        const m = line.match(/^\s{0,2}(\w+)\s*:/)
        if (m && !['export', 'const', 'default', 'import', 'type', 'satisfies', 'return'].includes(m[1])) {
          keys.add(m[1])
        }
      }
      return keys
    }
    return {
      layout: 'split',
      unionKeys: extractUnionKeys(idx || en),
      localeKeys: { uk: extractFlat(uk), pl: extractFlat(pl), en: extractFlat(en) },
    }
  }

  // Single-file layout
  if (!await exists(MESSAGES_FILE)) {
    console.error('❌  Cannot find messages.ts or messages/ directory')
    process.exit(1)
  }
  const src = await readFile(MESSAGES_FILE, 'utf8')
  return {
    layout: 'single',
    unionKeys: extractUnionKeys(src),
    localeKeys: {
      uk: extractLocaleKeys(src, 'uk'),
      pl: extractLocaleKeys(src, 'pl'),
      en: extractLocaleKeys(src, 'en'),
    },
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const { layout, unionKeys, localeKeys } = await loadData()

  console.log(`\n🔑  i18n key consistency check  [layout: ${layout}]\n`)
  console.log('─'.repeat(70))

  let totalIssues = 0

  // Reference = union type (if available) or en locale
  const reference = unionKeys && unionKeys.size > 0 ? unionKeys : localeKeys.en

  // ── 1. Per-locale: missing vs reference ──────────────────────────────────

  for (const locale of LOCALES) {
    const keys = localeKeys[locale]
    const missing = [...reference].filter(k => !keys.has(k))

    if (missing.length === 0) {
      console.log(`\n✅  [${locale}]  ${keys.size} keys — all present`)
    } else {
      console.log(`\n❌  [${locale}]  missing ${missing.length} key(s):`)
      missing.forEach(k => console.log(`     - ${k}`))
      totalIssues += missing.length
    }
  }

  // ── 2. Cross-locale consistency ───────────────────────────────────────────

  const allLocaleKeys = new Set([
    ...localeKeys.uk, ...localeKeys.pl, ...localeKeys.en
  ])
  const inconsistent = []
  for (const key of allLocaleKeys) {
    const presentIn = LOCALES.filter(l => localeKeys[l].has(key))
    if (presentIn.length < LOCALES.length) {
      inconsistent.push({ key, presentIn, missingIn: LOCALES.filter(l => !localeKeys[l].has(key)) })
    }
  }

  if (inconsistent.length > 0) {
    console.log(`\n⚠️   ${inconsistent.length} key(s) present in some locales but not all:`)
    inconsistent.forEach(({ key, missingIn }) =>
      console.log(`     ${key}  — missing in [${missingIn.join(', ')}]`)
    )
    totalIssues += inconsistent.length
  } else {
    console.log('\n✅  All locale objects have identical key sets')
  }

  // ── 3. Orphan keys (in locales but not in union) ──────────────────────────

  if (unionKeys && unionKeys.size > 0) {
    const orphans = [...localeKeys.en].filter(k => !unionKeys.has(k))
    if (orphans.length > 0) {
      console.log(`\n⚠️   ${orphans.length} key(s) in locale objects but NOT in MessageKey union:`)
      orphans.forEach(k => console.log(`     + ${k}`))
      console.log('     (Add these to the MessageKey type or remove from messages)')
    } else {
      console.log('\n✅  MessageKey union matches locale keys perfectly')
    }
  }

  // ── Summary ───────────────────────────────────────────────────────────────

  console.log('\n─'.repeat(70))
  console.log('\n📊  Key counts:')
  for (const locale of LOCALES) console.log(`     [${locale}]  ${localeKeys[locale].size} keys`)
  if (unionKeys) console.log(`     [union]  ${unionKeys.size} keys in MessageKey`)

  if (totalIssues === 0) {
    console.log('\n✅  No missing keys. All locales consistent.\n')
    process.exit(0)
  } else {
    console.log(`\n❌  ${totalIssues} issue(s) found.\n`)
    process.exit(1)
  }
}

main().catch(err => { console.error(err); process.exit(1) })
