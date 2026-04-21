import { createHash } from 'node:crypto'
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..', '..')

const MESSAGES_FILE = path.join(ROOT, 'src/shared/i18n/messages.ts')
const AUTO_EN_FILE = path.join(ROOT, 'src/shared/i18n/overrides/auto.en.json')
const AUTO_PL_FILE = path.join(ROOT, 'src/shared/i18n/overrides/auto.pl.json')
const MANUAL_EN_FILE = path.join(ROOT, 'src/shared/i18n/overrides/manual.en.json')
const MANUAL_PL_FILE = path.join(ROOT, 'src/shared/i18n/overrides/manual.pl.json')
const STATE_FILE = path.join(ROOT, 'src/shared/i18n/overrides/.sync-state.json')

const TARGET_LOCALES = ['en', 'pl']

function hashText(value) {
  return createHash('sha1').update(value).digest('hex')
}

function sortObject(input) {
  return Object.fromEntries(Object.entries(input).sort(([a], [b]) => a.localeCompare(b)))
}

async function readJson(filePath, fallback = {}) {
  try {
    const raw = await readFile(filePath, 'utf8')
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

function extractLocaleObject(source, locale) {
  const marker = `${locale}: {`
  const markerIndex = source.indexOf(marker)
  if (markerIndex === -1) {
    throw new Error(`Locale block not found: ${locale}`)
  }

  const braceStart = source.indexOf('{', markerIndex)
  if (braceStart === -1) {
    throw new Error(`Locale opening brace not found: ${locale}`)
  }

  let depth = 0
  let inSingleQuote = false
  let escaped = false

  for (let i = braceStart; i < source.length; i += 1) {
    const ch = source[i]

    if (inSingleQuote) {
      if (escaped) {
        escaped = false
      } else if (ch === '\\') {
        escaped = true
      } else if (ch === '\'') {
        inSingleQuote = false
      }
      continue
    }

    if (ch === '\'') {
      inSingleQuote = true
      continue
    }

    if (ch === '{') depth += 1
    if (ch === '}') {
      depth -= 1
      if (depth === 0) {
        return source.slice(braceStart, i + 1)
      }
    }
  }

  throw new Error(`Locale closing brace not found: ${locale}`)
}

function parseObjectLiteral(objectLiteral) {
  return Function(`"use strict"; return (${objectLiteral});`)()
}

function parseMessages(source) {
  const uk = parseObjectLiteral(extractLocaleObject(source, 'uk'))
  const en = parseObjectLiteral(extractLocaleObject(source, 'en'))
  const pl = parseObjectLiteral(extractLocaleObject(source, 'pl'))
  return { uk, en, pl }
}

async function translateViaOpenAI(items, targetLocale) {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey || items.length === 0) {
    return null
  }

  const localeNames = { en: 'English', pl: 'Polish' }
  const prompt = [
    `You are a professional website localization editor for automotive import services.`,
    `Translate each source value from Ukrainian into ${localeNames[targetLocale]}.`,
    `Requirements:`,
    `1) Keep SEO intent and commercial tone.`,
    `2) Keep brand names, model names, VIN, URLs and numbers unchanged.`,
    `3) Return strict JSON object only: {"key":"translation"}.`,
    `4) Preserve placeholders or punctuation exactly when meaningful.`,
    `Source JSON:`,
    JSON.stringify(Object.fromEntries(items), null, 2),
  ].join('\n')

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.I18N_TRANSLATION_MODEL || 'gpt-4.1-mini',
      temperature: 0,
      input: prompt,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`OpenAI request failed: ${response.status} ${body}`)
  }

  const payload = await response.json()
  const text = payload.output_text
  if (!text || typeof text !== 'string') {
    throw new Error('OpenAI response has no output_text')
  }

  let parsed
  try {
    parsed = JSON.parse(text)
  } catch {
    throw new Error(`Failed to parse OpenAI JSON: ${text}`)
  }

  return parsed
}

async function main() {
  const source = await readFile(MESSAGES_FILE, 'utf8')
  const base = parseMessages(source)

  const autoByLocale = {
    en: await readJson(AUTO_EN_FILE),
    pl: await readJson(AUTO_PL_FILE),
  }

  const manualByLocale = {
    en: await readJson(MANUAL_EN_FILE),
    pl: await readJson(MANUAL_PL_FILE),
  }

  const state = await readJson(STATE_FILE, { hashes: { en: {}, pl: {} } })
  const nextState = { hashes: { en: {}, pl: {} }, updatedAt: new Date().toISOString() }

  for (const locale of TARGET_LOCALES) {
    const auto = { ...autoByLocale[locale] }
    const manual = manualByLocale[locale] || {}
    const changed = []

    for (const [key, ukValue] of Object.entries(base.uk)) {
      const hash = hashText(String(ukValue))
      nextState.hashes[locale][key] = hash
      const prevHash = state.hashes?.[locale]?.[key]

      if (manual[key]) {
        continue
      }

      const shouldUpdate = !auto[key] || prevHash !== hash
      if (!shouldUpdate) {
        continue
      }

      changed.push([key, String(ukValue)])
    }

    const translated = await translateViaOpenAI(changed, locale)

    for (const [key] of changed) {
      const translatedValue = translated?.[key]
      if (typeof translatedValue === 'string' && translatedValue.trim().length > 0) {
        auto[key] = translatedValue.trim()
        continue
      }

      const fallback = auto[key] || base[locale][key] || base.uk[key]
      auto[key] = String(fallback)
    }

    for (const key of Object.keys(auto)) {
      if (!(key in base.uk)) {
        delete auto[key]
      }
    }

    autoByLocale[locale] = sortObject(auto)

    console.log(`[${locale}] updated keys: ${changed.length}`)
  }

  await writeFile(AUTO_EN_FILE, `${JSON.stringify(autoByLocale.en, null, 2)}\n`, 'utf8')
  await writeFile(AUTO_PL_FILE, `${JSON.stringify(autoByLocale.pl, null, 2)}\n`, 'utf8')
  await writeFile(STATE_FILE, `${JSON.stringify(nextState, null, 2)}\n`, 'utf8')

  console.log('i18n sync complete')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
