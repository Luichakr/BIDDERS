/**
 * Static option lists and translated labels for cabinet form selects.
 * Extracted from CabinetPage to keep it lean.
 */
import type { CabinetCar } from './cabinetTypes'

export type OptionLocale = 'en' | 'uk' | 'pl'

// ─── Translated labels ──────────────────────────────────────────────────────

type FieldTranslations = Partial<Record<keyof CabinetCar, Record<string, string>>>

const TRANSLATED_OPTION_LABELS: Record<OptionLocale, FieldTranslations> = {
  en: {
    bodyStyle: {
      Sedan: 'Sedan', Hatchback: 'Hatchback', Liftback: 'Liftback', Wagon: 'Wagon', SUV: 'SUV', Crossover: 'Crossover',
      Coupe: 'Coupe', Convertible: 'Convertible', Pickup: 'Pickup', Van: 'Van', Minivan: 'Minivan',
    },
    colorExterior: {
      Black: 'Black', White: 'White', Gray: 'Gray', Silver: 'Silver', Blue: 'Blue', Red: 'Red', Green: 'Green',
      Brown: 'Brown', Beige: 'Beige', Yellow: 'Yellow', Orange: 'Orange', Gold: 'Gold',
    },
    colorInterior: { Black: 'Black', Gray: 'Gray', Beige: 'Beige', Brown: 'Brown', White: 'White', Red: 'Red' },
    fuelType: {
      Gasoline: 'Gasoline', Diesel: 'Diesel', Hybrid: 'Hybrid', 'Plug-in Hybrid': 'Plug-in Hybrid', Electric: 'Electric',
      'LPG/CNG': 'LPG/CNG', Hydrogen: 'Hydrogen',
    },
    drivetrain: { FWD: 'FWD', RWD: 'RWD', AWD: 'AWD', '4WD': '4WD' },
    transmission: { Automatic: 'Automatic', Manual: 'Manual', CVT: 'CVT', DCT: 'DCT', Robotic: 'Robotic' },
    ownershipType: {
      'Private Owner': 'Private owner', Dealer: 'Dealer', 'Lease Return': 'Lease return',
      'Bank Repo': 'Bank repossession', Insurance: 'Insurance',
    },
    keysStatus: { Present: 'Present', Missing: 'Missing', Unknown: 'Unknown' },
    startCondition: { 'Runs and Drives': 'Runs and drives', Starts: 'Starts', 'No Start': 'No start', Unknown: 'Unknown' },
    damagePrimary: {
      'Front End': 'Front end', 'Rear End': 'Rear end', Side: 'Side', Roof: 'Roof', Undercarriage: 'Undercarriage',
      'Water/Flood': 'Water/Flood', Fire: 'Fire', Vandalism: 'Vandalism', Mechanical: 'Mechanical',
      'Normal Wear': 'Normal wear', Unknown: 'Unknown', None: 'None',
    },
    damageSecondary: {
      None: 'None', 'Front End': 'Front end', 'Rear End': 'Rear end', Side: 'Side', Roof: 'Roof', Undercarriage: 'Undercarriage',
      'Water/Flood': 'Water/Flood', Fire: 'Fire', Vandalism: 'Vandalism', Mechanical: 'Mechanical', Unknown: 'Unknown',
    },
  },
  uk: {
    bodyStyle: {
      Sedan: 'Седан', Hatchback: 'Хетчбек', Liftback: 'Ліфтбек', Wagon: 'Універсал', SUV: 'Позашляховик', Crossover: 'Кросовер',
      Coupe: 'Купе', Convertible: 'Кабріолет', Pickup: 'Пікап', Van: 'Фургон', Minivan: 'Мінівен',
    },
    colorExterior: {
      Black: 'Чорний', White: 'Білий', Gray: 'Сірий', Silver: 'Сріблястий', Blue: 'Синій', Red: 'Червоний',
      Green: 'Зелений', Brown: 'Коричневий', Beige: 'Бежевий', Yellow: 'Жовтий', Orange: 'Помаранчевий', Gold: 'Золотий',
    },
    colorInterior: { Black: 'Чорний', Gray: 'Сірий', Beige: 'Бежевий', Brown: 'Коричневий', White: 'Білий', Red: 'Червоний' },
    fuelType: {
      Gasoline: 'Бензин', Diesel: 'Дизель', Hybrid: 'Гібрид', 'Plug-in Hybrid': 'Плагін-гібрид', Electric: 'Електро',
      'LPG/CNG': 'Газ (LPG/CNG)', Hydrogen: 'Водень',
    },
    drivetrain: { FWD: 'Передній (FWD)', RWD: 'Задній (RWD)', AWD: 'Повний (AWD)', '4WD': 'Повний (4WD)' },
    transmission: { Automatic: 'Автомат', Manual: 'Механіка', CVT: 'Варіатор (CVT)', DCT: 'Робот (DCT)', Robotic: 'Роботизована' },
    ownershipType: {
      'Private Owner': 'Приватний власник', Dealer: 'Дилер', 'Lease Return': 'Повернення з лізингу',
      'Bank Repo': 'Банківське вилучення', Insurance: 'Страхова',
    },
    keysStatus: { Present: 'Є ключі', Missing: 'Немає ключів', Unknown: 'Невідомо' },
    startCondition: { 'Runs and Drives': 'Заводиться і їде', Starts: 'Заводиться', 'No Start': 'Не заводиться', Unknown: 'Невідомо' },
    damagePrimary: {
      'Front End': 'Передня частина', 'Rear End': 'Задня частина', Side: 'Бокова частина', Roof: 'Дах', Undercarriage: 'Низ кузова',
      'Water/Flood': 'Після води/потопу', Fire: 'Після пожежі', Vandalism: 'Вандалізм', Mechanical: 'Механічне',
      'Normal Wear': 'Звичайний знос', Unknown: 'Невідомо', None: 'Немає',
    },
    damageSecondary: {
      None: 'Немає', 'Front End': 'Передня частина', 'Rear End': 'Задня частина', Side: 'Бокова частина', Roof: 'Дах',
      Undercarriage: 'Низ кузова', 'Water/Flood': 'Після води/потопу', Fire: 'Після пожежі',
      Vandalism: 'Вандалізм', Mechanical: 'Механічне', Unknown: 'Невідомо',
    },
  },
  pl: {
    bodyStyle: {
      Sedan: 'Sedan', Hatchback: 'Hatchback', Liftback: 'Liftback', Wagon: 'Kombi', SUV: 'SUV', Crossover: 'Crossover',
      Coupe: 'Coupe', Convertible: 'Kabriolet', Pickup: 'Pickup', Van: 'Van', Minivan: 'Minivan',
    },
    colorExterior: {
      Black: 'Czarny', White: 'Biały', Gray: 'Szary', Silver: 'Srebrny', Blue: 'Niebieski', Red: 'Czerwony',
      Green: 'Zielony', Brown: 'Brązowy', Beige: 'Beżowy', Yellow: 'Żółty', Orange: 'Pomarańczowy', Gold: 'Złoty',
    },
    colorInterior: { Black: 'Czarny', Gray: 'Szary', Beige: 'Beżowy', Brown: 'Brązowy', White: 'Biały', Red: 'Czerwony' },
    fuelType: {
      Gasoline: 'Benzyna', Diesel: 'Diesel', Hybrid: 'Hybryda', 'Plug-in Hybrid': 'Hybryda plug-in', Electric: 'Elektryczny',
      'LPG/CNG': 'LPG/CNG', Hydrogen: 'Wodór',
    },
    drivetrain: { FWD: 'Przedni (FWD)', RWD: 'Tylny (RWD)', AWD: 'Napęd na wszystkie koła (AWD)', '4WD': '4x4 (4WD)' },
    transmission: { Automatic: 'Automatyczna', Manual: 'Manualna', CVT: 'CVT', DCT: 'DCT', Robotic: 'Zautomatyzowana' },
    ownershipType: {
      'Private Owner': 'Właściciel prywatny', Dealer: 'Dealer', 'Lease Return': 'Zwrot z leasingu',
      'Bank Repo': 'Przejęcie bankowe', Insurance: 'Ubezpieczyciel',
    },
    keysStatus: { Present: 'Kluczyki są', Missing: 'Brak kluczyków', Unknown: 'Nieznane' },
    startCondition: { 'Runs and Drives': 'Odpala i jeździ', Starts: 'Odpala', 'No Start': 'Nie odpala', Unknown: 'Nieznane' },
    damagePrimary: {
      'Front End': 'Przód', 'Rear End': 'Tył', Side: 'Bok', Roof: 'Dach', Undercarriage: 'Podwozie',
      'Water/Flood': 'Zalanie', Fire: 'Pożar', Vandalism: 'Wandalizm', Mechanical: 'Mechaniczne',
      'Normal Wear': 'Normalne zużycie', Unknown: 'Nieznane', None: 'Brak',
    },
    damageSecondary: {
      None: 'Brak', 'Front End': 'Przód', 'Rear End': 'Tył', Side: 'Bok', Roof: 'Dach', Undercarriage: 'Podwozie',
      'Water/Flood': 'Zalanie', Fire: 'Pożar', Vandalism: 'Wandalizm', Mechanical: 'Mechaniczne', Unknown: 'Nieznane',
    },
  },
}

// ─── Static option value lists ───────────────────────────────────────────────

export const CABINET_SELECT_OPTIONS: Partial<Record<keyof CabinetCar, string[]>> = {
  bodyStyle: ['Sedan', 'Hatchback', 'Liftback', 'Wagon', 'SUV', 'Crossover', 'Coupe', 'Convertible', 'Pickup', 'Van', 'Minivan'],
  colorExterior: ['Black', 'White', 'Gray', 'Silver', 'Blue', 'Red', 'Green', 'Brown', 'Beige', 'Yellow', 'Orange', 'Gold'],
  colorInterior: ['Black', 'Gray', 'Beige', 'Brown', 'White', 'Red'],
  fuelType: ['Gasoline', 'Diesel', 'Hybrid', 'Plug-in Hybrid', 'Electric', 'LPG/CNG', 'Hydrogen'],
  drivetrain: ['FWD', 'RWD', 'AWD', '4WD'],
  transmission: ['Automatic', 'Manual', 'CVT', 'DCT', 'Robotic'],
  odometerUnit: ['km', 'mi'],
  countryOfOrigin: ['USA', 'Canada', 'Germany', 'France', 'Italy', 'Spain', 'Poland', 'Netherlands', 'Belgium', 'Czech Republic', 'Sweden', 'Norway', 'Japan', 'South Korea', 'China', 'UAE'],
  importDestination: ['Poland', 'Ukraine', 'Lithuania', 'Germany', 'Czech Republic', 'Romania'],
  ownershipType: ['Private Owner', 'Dealer', 'Lease Return', 'Bank Repo', 'Insurance'],
  keysStatus: ['Present', 'Missing', 'Unknown'],
  startCondition: ['Runs and Drives', 'Starts', 'No Start', 'Unknown'],
  damagePrimary: ['Front End', 'Rear End', 'Side', 'Roof', 'Undercarriage', 'Water/Flood', 'Fire', 'Vandalism', 'Mechanical', 'Normal Wear', 'Unknown'],
  damageSecondary: ['None', 'Front End', 'Rear End', 'Side', 'Roof', 'Undercarriage', 'Water/Flood', 'Fire', 'Vandalism', 'Mechanical', 'Unknown'],
}

export const YEAR_OPTIONS: string[] = (() => {
  const maxYear = new Date().getFullYear() + 1
  return Array.from({ length: maxYear - 1979 }, (_, i) => String(maxYear - i))
})()

export const ENGINE_VOLUME_OPTIONS: string[] = Array.from(
  { length: 100 },
  (_, i) => ((i + 1) / 10).toFixed(1),
)

// ─── Hook-like function (pure, not a React hook) ─────────────────────────────

export function buildSelectFieldOptions(
  platformSource: string,
): Partial<Record<keyof CabinetCar, string[]>> {
  return {
    auction: [platformSource],
    ...CABINET_SELECT_OPTIONS,
    engineVolume: ENGINE_VOLUME_OPTIONS,
  }
}

export function buildGetSelectOptionLabel(
  locale: OptionLocale,
): (fieldKey: keyof CabinetCar, optionValue: string) => string {
  const labels = TRANSLATED_OPTION_LABELS[locale]
  return (fieldKey, optionValue) => {
    if (fieldKey === 'engineVolume') return `${optionValue} L`
    return labels[fieldKey]?.[optionValue] ?? optionValue
  }
}
