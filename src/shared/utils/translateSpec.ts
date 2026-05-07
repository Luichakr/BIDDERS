const SPEC_TRANSLATIONS: Record<string, Record<string, string>> = {
  pl: {
    // Transmission
    AUTOMATIC: 'Automatyczna', AUTO: 'Automatyczna', MANUAL: 'Manualna', CVT: 'CVT',
    // Fuel
    GASOLINE: 'Benzyna', GAS: 'Benzyna', DIESEL: 'Diesel',
    HYBRID: 'Hybryda', ELECTRIC: 'Elektryczny', 'PLUG-IN HYBRID': 'Hybryda plug-in',
    // Drive
    AWD: 'AWD', FWD: 'Napęd przedni', RWD: 'Napęd tylny',
    FULL: 'Napęd 4x4', '4X4': '4x4', '4X2': '4x2', '4WD': '4WD',
    // Docs
    'ENGINE START': 'Uruchamia się', ENHANCED: 'Ulepszony', 'RUNS & DRIVES': 'Jeździ',
    'RUN & DRIVE': 'Jeździ',
  },
  uk: {
    AUTOMATIC: 'Автоматична', AUTO: 'Автоматична', MANUAL: 'Механічна', CVT: 'CVT',
    GASOLINE: 'Бензин', GAS: 'Бензин', DIESEL: 'Дизель',
    HYBRID: 'Гібрид', ELECTRIC: 'Електро', 'PLUG-IN HYBRID': 'Plug-in гібрид',
    AWD: 'AWD', FWD: 'Передній привід', RWD: 'Задній привід',
    FULL: 'Повний привід', '4X4': '4x4', '4X2': '4x2', '4WD': '4WD',
    'ENGINE START': 'Заводиться', ENHANCED: 'Покращений', 'RUNS & DRIVES': 'Їздить',
    'RUN & DRIVE': 'Їздить',
  },
  en: {
    AUTOMATIC: 'Automatic', AUTO: 'Automatic', MANUAL: 'Manual', CVT: 'CVT',
    GASOLINE: 'Gasoline', GAS: 'Gasoline', DIESEL: 'Diesel',
    HYBRID: 'Hybrid', ELECTRIC: 'Electric', 'PLUG-IN HYBRID': 'Plug-in Hybrid',
    AWD: 'AWD', FWD: 'Front-wheel Drive', RWD: 'Rear-wheel Drive',
    FULL: 'Full-time AWD', '4X4': '4x4', '4X2': '4x2', '4WD': '4WD',
    'ENGINE START': 'Engine Start', ENHANCED: 'Enhanced', 'RUNS & DRIVES': 'Runs & Drives',
    'RUN & DRIVE': 'Run & Drive',
  },
}

export function translateSpec(value: string, locale: string): string {
  if (!value || value === '—') return value
  const map = SPEC_TRANSLATIONS[locale] ?? SPEC_TRANSLATIONS['en']
  return map[value.trim().toUpperCase()] ?? value
}
