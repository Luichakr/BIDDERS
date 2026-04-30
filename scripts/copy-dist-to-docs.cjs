#!/usr/bin/env node
// Copy Vite build output (dist/) into docs/ for GitHub Pages publishing.
// GitHub Pages source for this repo: branch=main, path=/docs.
// Preserves any .md files already in docs/ (e.g. DEPLOYMENT-GUIDE.md, REAL_PROJECT_STATE.md).

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const DOCS = path.join(ROOT, 'docs')

function fail(msg) {
  console.error(`[copy-dist-to-docs] ${msg}`)
  process.exit(1)
}

if (!fs.existsSync(DIST)) {
  fail(`dist/ not found at ${DIST} — run "vite build" first`)
}
if (!fs.existsSync(DOCS)) {
  fs.mkdirSync(DOCS, { recursive: true })
}

// 1. Remove old build artifacts from docs/, preserve *.md
for (const entry of fs.readdirSync(DOCS)) {
  if (entry.toLowerCase().endsWith('.md')) continue
  fs.rmSync(path.join(DOCS, entry), { recursive: true, force: true })
}

// 2. Copy dist/* into docs/
for (const entry of fs.readdirSync(DIST)) {
  fs.cpSync(path.join(DIST, entry), path.join(DOCS, entry), { recursive: true })
}

// 3. Verify required files exist
for (const required of ['index.html', '404.html']) {
  const p = path.join(DOCS, required)
  if (!fs.existsSync(p)) fail(`missing ${required} in docs/ after copy`)
}

console.log('[copy-dist-to-docs] docs/ updated from dist/')
