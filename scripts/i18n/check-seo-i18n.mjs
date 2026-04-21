import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..', '..')

const TARGET_GLOBS = [
  'src/pages/home/ui/HomePage.tsx',
  'src/widgets/header/ui/Header.tsx',
  'src/widgets/cookie-consent/ui/CookieConsent.tsx',
]

const CYRILLIC = /[А-Яа-яІіЇїЄєҐґ]/

async function main() {
  const issues = []

  for (const relPath of TARGET_GLOBS) {
    const filePath = path.join(ROOT, relPath)
    const content = await readFile(filePath, 'utf8')
    const lines = content.split('\n')

    lines.forEach((line, index) => {
      const lineNo = index + 1

      if (/document\.title\s*=\s*['"]/.test(line) && !line.includes('t(')) {
        issues.push(`${relPath}:${lineNo} hardcoded document.title`)
      }

      if (/setAttribute\(\s*['"]content['"],\s*['"]/.test(line) && !line.includes('t(')) {
        issues.push(`${relPath}:${lineNo} hardcoded meta description`)
      }

      if (/alt\s*=\s*"[^"]*"/.test(line) && CYRILLIC.test(line) && !line.includes('t(')) {
        issues.push(`${relPath}:${lineNo} hardcoded localized alt text`)
      }
    })
  }

  if (issues.length > 0) {
    console.error('SEO/i18n check failed:')
    for (const issue of issues) {
      console.error(`- ${issue}`)
    }
    process.exitCode = 1
    return
  }

  console.log('SEO/i18n check passed')
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
