/**
 * find-hardcoded-text.mjs
 *
 * Scans all .tsx source files and reports hardcoded visible text that should
 * be moved to messages.ts.
 *
 * EXIT CODE:
 *   0  — no critical issues found
 *   1  — critical hardcoded strings detected
 *
 * NON-CRITICAL (allowed exceptions, not reported):
 *   Brand names, currencies, VIN, emails, phones, URLs, technical IDs, route paths.
 */

import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.resolve(__dirname, '..', '..', 'src')

// ─── Patterns that identify UI-visible text ───────────────────────────────────

// Cyrillic (Ukrainian / Russian)
const CYRILLIC = /[А-Яа-яІіЇїЄєҐґ]/

// Polish-specific characters
const POLISH = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/

// English words inside JSX (at least 3 chars, starts with uppercase or is a phrase)
// We only flag when inside JSX context (after > or inside attribute value)
const ENGLISH_PHRASE = /[A-Z][a-z]{3,}(\s+[a-z]{2,}){1,}/

// ─── Allowlist — not flagged as critical ─────────────────────────────────────

const ALLOWED_PATTERNS = [
  // Brand names
  /^BIDDERS$/i,
  /^Copart$/i,
  /^IAAI$/i,
  /^Manheim$/i,
  /^BMW$/i,
  /^Audi$/i,
  /^Tesla$/i,
  /^Mercedes[\-\s]?Benz$/i,
  /^Ford$/i,
  /^Toyota$/i,
  /^Honda$/i,
  /^Kia$/i,
  /^Hyundai$/i,
  /^Volkswagen$/i,
  /^Chevrolet$/i,
  /^Nissan$/i,
  /^Dodge$/i,
  /^Jeep$/i,
  /^YouTube$/i,
  /^TikTok$/i,
  /^Instagram$/i,
  /^Facebook$/i,
  /^Telegram$/i,
  // Currencies / units
  /^(USD|EUR|PLN|UAH)$/,
  /^€|^\$|^₴|^zł/,
  // Technical
  /^VIN$/i,
  /^ID$/i,
  /^OK$/i,
  /^B2B$/i,
  /^B2C$/i,
  /^CTA$/i,
  /^FAQ$/i,
  /^SEO$/i,
  /^API$/i,
  /^TODO$/i,
  // Emails
  /@[a-z0-9.]+\.[a-z]{2,}/i,
  // Phone numbers
  /^\+?[\d\s\-\(\)]{7,}/,
  // URLs
  /^https?:\/\//,
  /^\/BIDDERS\//,
  // Route segments
  /^(catalog|in-stock|in-transit|calculator|blog|cases|faq|contacts|privacy-policy|terms-of-use|lots)$/,
  // Pure numbers / codes
  /^\d+(\.\d+)?$/,
  // Short tech strings
  /^[A-Z0-9_]{1,4}$/,
]

function isAllowed(text) {
  const trimmed = text.trim()
  if (!trimmed || trimmed.length < 2) return true
  return ALLOWED_PATTERNS.some(p => p.test(trimmed))
}

// ─── Lines to skip entirely ───────────────────────────────────────────────────

function shouldSkipLine(line) {
  const t = line.trim()
  return (
    t.startsWith('//') ||          // single-line comment
    t.startsWith('*') ||           // JSDoc
    t.startsWith('/*') ||          // block comment
    t.startsWith('import ') ||     // import
    t.startsWith('export type') || // type def
    t.startsWith("| '") ||        // MessageKey union
    t.includes("console.") ||
    t.includes('className=') && !CYRILLIC.test(t) && !POLISH.test(t) ||
    t.startsWith('//') ||
    /^\s*\*/.test(line)            // JSDoc lines
  )
}

// ─── Extract candidate text from a line ──────────────────────────────────────

function extractCandidates(line) {
  const results = []

  // 1. Cyrillic / Polish in any position (very likely UI text)
  if (CYRILLIC.test(line) || POLISH.test(line)) {
    // Skip if it's inside t('...') or t("...")
    if (/\bt\(["']/.test(line)) return results
    // Skip if it's a key in messages object (messages.ts pattern: key: '...',)
    if (/^\s+\w+:\s*['"]/.test(line) && line.includes('messages')) return results

    // Extract the actual string fragments
    const strMatches = line.matchAll(/['"`]([^'"`\n]{2,120})['"`]/g)
    for (const m of strMatches) {
      const val = m[1].trim()
      if ((CYRILLIC.test(val) || POLISH.test(val)) && !isAllowed(val)) {
        results.push({ text: val, type: 'string' })
      }
    }

    // Extract JSX text content (between > and <)
    const jsxMatches = line.matchAll(/>([^<>{}\n]{3,120})</g)
    for (const m of jsxMatches) {
      const val = m[1].trim()
      if ((CYRILLIC.test(val) || POLISH.test(val)) && !isAllowed(val)) {
        results.push({ text: val, type: 'jsx-text' })
      }
    }
  }

  // 2. Hardcoded attributes — placeholder, aria-label, alt, title
  const attrMatches = line.matchAll(/(?:placeholder|aria-label|aria-labelledby|alt|title)\s*=\s*["']([^"'\n]{3,})["']/g)
  for (const m of attrMatches) {
    const val = m[1].trim()
    if ((CYRILLIC.test(val) || POLISH.test(val)) && !isAllowed(val)) {
      results.push({ text: val, type: 'attribute' })
    }
  }

  return results
}

// ─── Skip these files / dirs ─────────────────────────────────────────────────

const SKIP_PATHS = [
  'messages.ts',
  'messages/',
  'overrides/',
  'LanguageSuggestion.tsx', // intentionally hardcoded per spec
  'Seo.tsx',
  '.d.ts',
  'node_modules',
  '__tests__',
  '.test.',
  '.spec.',
]

function shouldSkipFile(filePath) {
  return SKIP_PATHS.some(s => filePath.includes(s))
}

// ─── Recursive file walker ────────────────────────────────────────────────────

async function walkTsx(dir, files = []) {
  const entries = await readdir(dir)
  for (const entry of entries) {
    const full = path.join(dir, entry)
    const s = await stat(full)
    if (s.isDirectory()) {
      if (entry === 'node_modules' || entry.startsWith('.')) continue
      await walkTsx(full, files)
    } else if (entry.endsWith('.tsx') || entry.endsWith('.ts')) {
      if (!shouldSkipFile(full)) files.push(full)
    }
  }
  return files
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const files = await walkTsx(SRC)
  const issues = []

  for (const filePath of files.sort()) {
    const content = await readFile(filePath, 'utf8')
    const lines = content.split('\n')
    const relPath = path.relative(path.resolve(__dirname, '..', '..'), filePath)

    // Track if we're inside a multi-line comment
    let inBlockComment = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const lineNo = i + 1

      // Block comment tracking
      if (line.includes('/*')) inBlockComment = true
      if (line.includes('*/')) { inBlockComment = false; continue }
      if (inBlockComment) continue

      if (shouldSkipLine(line)) continue

      const candidates = extractCandidates(line)
      for (const { text, type } of candidates) {
        issues.push({ file: relPath, line: lineNo, text, type })
      }
    }
  }

  // ─── Report ────────────────────────────────────────────────────────────────

  if (issues.length === 0) {
    console.log('\n✅  No critical hardcoded text found.\n')
    process.exit(0)
  }

  console.log(`\n🔍  Hardcoded text report — ${issues.length} issue(s) found\n`)
  console.log('─'.repeat(80))

  let currentFile = ''
  for (const { file, line, text, type } of issues) {
    if (file !== currentFile) {
      console.log(`\n📄  ${file}`)
      currentFile = file
    }
    const typeLabel = type === 'attribute' ? '[attr] ' : '[text] '
    console.log(`  Line ${String(line).padStart(4, ' ')}  ${typeLabel}${text}`)
  }

  console.log('\n─'.repeat(80))

  // Summary by file
  const byFile = {}
  for (const { file } of issues) byFile[file] = (byFile[file] ?? 0) + 1
  console.log('\n📊  Summary by file:')
  Object.entries(byFile)
    .sort(([, a], [, b]) => b - a)
    .forEach(([f, n]) => console.log(`  ${String(n).padStart(3)} issue(s)  ${f}`))

  console.log(`\n⚠️   Total: ${issues.length} critical hardcoded strings to localize.\n`)
  process.exit(1)
}

main().catch(err => { console.error(err); process.exit(1) })
