// TODO: Legal texts (privacy-uk.txt, privacy-en.txt, privacy-pl.txt) require
// final review and approval by the legal department before publication.
import type { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { routePaths, localizedPath } from '../../../shared/config/routes'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { Seo } from '../../../shared/seo/Seo'
import rawUk from '../../../content/legal/privacy-uk.txt?raw'
import rawEn from '../../../content/legal/privacy-en.txt?raw'
import rawPl from '../../../content/legal/privacy-pl.txt?raw'

type PolicyBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'bullet'; text: string }

function normalizePolicyText(raw: string) {
  return raw
    .replace(/\u2028/g, '\n\n')
    .replace(/\u00a0/g, ' ')
    .replace(/\r/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function buildPolicyBlocks(raw: string): PolicyBlock[] {
  const normalized = normalizePolicyText(raw)
  const lines = normalized
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0 && line.toLowerCase() !== 'x')

  return lines.map((line) => {
    if (/^(?:[IVXLCM]+\.|\d+\.)\s+/u.test(line)) {
      return { type: 'heading', text: line }
    }
    if (/^[•\-–]\s+/u.test(line)) {
      return { type: 'bullet', text: line.replace(/^[•\-–]\s+/u, '') }
    }
    return { type: 'paragraph', text: line }
  })
}

const RAW_BY_LOCALE = { uk: rawUk, en: rawEn, pl: rawPl }

export function PrivacyPolicyPage() {
  const { locale, t } = useI18n()
  const rawText = RAW_BY_LOCALE[locale] ?? rawPl
  const blocks = buildPolicyBlocks(rawText)
  const content = [] as ReactElement[]
  let listBuffer: string[] = []

  const flushList = () => {
    if (listBuffer.length === 0) return
    content.push(
      <ul className="legal-list" key={`list-${content.length}`}>
        {listBuffer.map((item, index) => (
          <li className="legal-row" key={`${item.slice(0, 24)}-${index}`}>{item}</li>
        ))}
      </ul>,
    )
    listBuffer = []
  }

  blocks.forEach((block, index) => {
    if (block.type === 'bullet') {
      listBuffer.push(block.text)
      return
    }
    flushList()
    if (block.type === 'heading') {
      content.push(
        <h2 className="legal-row legal-row-heading" key={`h-${index}`}>
          {block.text}
        </h2>,
      )
      return
    }
    content.push(
      <p className="legal-row" key={`p-${index}`}>
        {block.text}
      </p>,
    )
  })

  flushList()

  return (
    <main className="bp-shell-page bp-shell-soft legal-page">
      <Seo title={t('seoPrivacyTitle')} description={t('seoPrivacyDescription')} path={routePaths.privacy} />
      <div className="bp-wrap">
        <p className="bp-kicker bp-kicker-dark">{t('legalKicker')}</p>
        <h1 className="bp-page-title">{t('privacyTitle')}</h1>
        <p className="bp-page-sub">{t('privacySub')}</p>

        <article className="legal-raw" aria-label={t('privacyTitle')}>
          {content}
        </article>

        <div className="bp-inline-actions" style={{ marginTop: 26 }}>
          <Link className="bp-btn bp-btn-secondary" to={localizedPath(locale, routePaths.terms)}>{t('privacyCtaTerms')}</Link>
          <Link className="bp-btn bp-btn-primary" to={localizedPath(locale, routePaths.home)}>{t('privacyCtaHome')}</Link>
        </div>
      </div>
    </main>
  )
}
