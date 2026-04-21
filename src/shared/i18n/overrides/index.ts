import autoEn from './auto.en.json'
import autoPl from './auto.pl.json'
import manualEn from './manual.en.json'
import manualPl from './manual.pl.json'
import type { Locale, MessageKey } from '../messages'

type PartialMessages = Partial<Record<MessageKey, string>>

type LocaleOverrides = Partial<Record<Locale, PartialMessages>>

const toPartialMessages = (value: unknown): PartialMessages => {
  if (!value || typeof value !== 'object') {
    return {}
  }
  return value as PartialMessages
}

export const autoOverrides: LocaleOverrides = {
  en: toPartialMessages(autoEn),
  pl: toPartialMessages(autoPl),
}

export const manualOverrides: LocaleOverrides = {
  en: toPartialMessages(manualEn),
  pl: toPartialMessages(manualPl),
}
