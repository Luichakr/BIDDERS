/**
 * report-i18n-coverage.mjs
 *
 * Aggregates output from find-hardcoded-text.mjs and shows a per-file
 * coverage report: how many lines use t() vs still have hardcoded strings.
 *
 * Run standalone:  node scripts/i18n/report-i18n-coverage.mjs
 *
 * EXIT CODE: always 0 (informational only)
 */

import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..', '..')
const SRC = path.join(ROOT, 'src')

const CYRILLIC = /[А-Яа-яІіЇїЄєҐґ]/
const POLISH   = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/

const SKIP_FILES = [
  'messages.ts', 'messages/', 'overrides/',
  'LanguageSuggestion.tsx', 'Seo.tsx',
  '.d.ts', '__tests__', '.test.', '.spec.',
]

function skipFile(fp) { return SKIP_FILES.some(s => fp.includes(s)) }

async function walk(dir, out = []) {
  for (const entry of await readdir(dir)) {
    if (entry.startsWith('.') || entry === 'node_modules') continue
    const full = path.join(dir, entry)
    if ((await stat(full)).isDirectory()) { await walk(full, out); continue }
    if ((entry.endsWith('.tsx') || entry.endsWith('.ts')) && !skipFile(full)) out.push(full)
  }
  return out
}

async function analyseFile(filePath) {
  const src = await readFile(filePath, 'utf8')
  const lines = src.split('\n')
  let tCalls = 0, hardcoded = 0, total = 0
  let inBlock = false

  for (const line of lines) {
    if (line.includes('/*')) inBlock = true
    if (line.includes('*/')) { inBlock = false; continue }
    if (inBlock || line.trim().startsWith('//') || line.trim().startsWith('*')) continue
    if (line.trim().startsWith('import ') || /^\s*\|\s*'/.test(line)) continue

    total++
    if (/\bt\(['"]/.test(line)) tCalls++
    if ((CYRILLIC.test(line) || POLISH.test(line)) && !/\bt\(['"]/.test(line)) hardcoded++
  }

  return { tCalls, hardcoded, total }
}

async function main() {
  const files = (await walk(SRC)).sort()
  const rows = []

  for (const fp of files) {
    const rel = path.relative(ROOT, fp)
    const { tCalls, hardcoded, total } = await analyseFile(fp)
    if (tCalls === 0 && hardcoded === 0) continue  // nothing relevant — skip
    rows.push({ file: rel, tCalls, hardcoded, total })
  }

  console.log('\n📊  i18n Coverage Report\n')
  console.log('─'.repeat(90))
  console.log(
    'File'.padEnd(60) +
    't() calls'.padStart(10) +
    'Hardcoded'.padStart(11) +
    'Status'.padStart(10)
  )
  console.log('─'.repeat(90))

  let totalT = 0, totalH = 0
  for (const { file, tCalls, hardcoded } of rows) {
    totalT += tCalls
    totalH += hardcoded
    const status = hardcoded === 0 ? '✅ clean' : hardcoded <= 5 ? '⚠️  few' : '❌ needs work'
    console.log(
      file.padEnd(60) +
      String(tCalls).padStart(10) +
      String(hardcoded).padStart(11) +
      status.padStart(10)
    )
  }

  console.log('─'.repeat(90))
  console.log(
    'TOTAL'.padEnd(60) +
    String(totalT).padStart(10) +
    String(totalH).padStart(11)
  )

  console.log('\n')
  if (totalH === 0) {
    console.log('✅  All files clean — no critical hardcoded text detected.\n')
  } else {
    console.log(`⚠️   ${totalH} hardcoded string(s) remain across ${rows.filter(r => r.hardcoded > 0).length} file(s).\n`)
    console.log('Files needing work:')
    rows
      .filter(r => r.hardcoded > 0)
      .sort((a, b) => b.hardcoded - a.hardcoded)
      .forEach(r => console.log(`  ${String(r.hardcoded).padStart(3)}  ${r.file}`))
    console.log()
  }
}

main().catch(err => { console.error(err); process.exit(1) })
