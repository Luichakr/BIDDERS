import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react'
import { CAR_MAKES_MODELS } from '../../../shared/data/carMakesModels'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useAuth } from '../../../shared/auth/AuthProvider'
import { getCabinetCopy } from './cabinetContent'
import { loadCabinetCars, saveCabinetCars, type CabinetSyncMode } from '../model/cabinetStore'
import { CABINET_CAR_MAX_PHOTOS, CABINET_PHOTO_MAX_FILE_BYTES, createEmptyCabinetCar, type CabinetCar, type CabinetCarStatus, type CabinetPublicationStatus } from '../model/cabinetTypes'
import { compressPhotoAsset, createLocalCabinetPhoto } from '../model/photoCompression'
import { canDecodeVin, decodeVin, normalizeVin } from '../model/vinDecoder'
import { canUseCloudCabinet, deleteCabinetPhotosFromSupabase, uploadCabinetPhotoToSupabase } from '../model/cabinetSupabase'
import { fetchCatalogCars } from '../../../features/auction/model/inRoute.service'
import { localizedPath, routePaths } from '../../../shared/config/routes'
import '../../auth/ui/auth.css'
import './cabinet.css'

const PLATFORM_SOURCE = 'BID BIDDERS'

function buildPublicSlug(car: CabinetCar): string {
  const slug = [car.year, car.make, car.model, car.vin || car.id]
    .filter(Boolean)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  return slug || car.id
}

const LOT_START = 4123

function buildSocialDescription(car: CabinetCar): string {
  const parts = [
    [car.year, car.make, car.model].filter(Boolean).join(' '),
    car.trim,
    car.engineVolume ? `${car.engineVolume}L` : '',
    car.fuelType,
    car.transmission,
    car.mileageKm ? `${Number(car.mileageKm).toLocaleString()} km` : '',
    car.location,
  ].filter(Boolean)
  return parts.join(' · ')
}

function buildAutoLotNumber(existingCars: CabinetCar[]): string {
  let max = LOT_START - 1
  for (const c of existingCars) {
    const n = parseInt(c.lotNumber, 10)
    if (!isNaN(n) && n >= LOT_START) max = Math.max(max, n)
  }
  return String(max + 1)
}

function buildAutoStockNumber(car: CabinetCar): string {
  const year = (car.year || String(new Date().getFullYear())).slice(-2)
  const token = car.id.replace(/[^a-z0-9]/gi, '').toUpperCase().slice(0, 6)
  return `BB-${year}-${token || '000000'}`
}

export function CabinetPage() {
  const { t, locale } = useI18n()
  const lp = (path: string) => localizedPath(locale, path)
  const { user, signOut } = useAuth()
  const copy = getCabinetCopy(locale)
  const [cars, setCars] = useState<CabinetCar[]>([])
  const [selectedCarId, setSelectedCarId] = useState('')
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | CabinetCarStatus>('all')
  const [isReady, setIsReady] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [syncMode, setSyncMode] = useState<CabinetSyncMode>('local')
  const [syncMessage, setSyncMessage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [isDecodingVin, setIsDecodingVin] = useState(false)
  const [vinMessage, setVinMessage] = useState('')
  const [vinMessageTone, setVinMessageTone] = useState<'helper' | 'error'>('helper')
  const [allMakesModels, setAllMakesModels] = useState<Record<string, string[]>>(CAR_MAKES_MODELS)

  const canUseCloudSync = canUseCloudCabinet(user?.id)

  useEffect(() => {
    let isMounted = true

    loadCabinetCars({ userId: user?.id })
      .then(({ cars: storedCars, syncMode: nextSyncMode }) => {
        if (!isMounted) return
        const nextCars = storedCars.length > 0 ? storedCars : [createEmptyCabinetCar(1)]
        setCars(nextCars)
        setSelectedCarId(nextCars[0]?.id ?? '')
        setSyncMode(nextSyncMode)
        setSyncMessage(nextSyncMode === 'cloud' ? copy.syncCloudReady : copy.syncLocalReady)
        setIsReady(true)
      })
      .catch(() => {
        if (!isMounted) return
        const fallbackCars = [createEmptyCabinetCar(1)]
        setCars(fallbackCars)
        setSelectedCarId(fallbackCars[0].id)
        setSyncMode('local')
        setSyncMessage(copy.syncLocalFallback)
        setIsReady(true)
      })

    return () => {
      isMounted = false
    }
  }, [copy.syncCloudReady, copy.syncLocalFallback, copy.syncLocalReady, user?.id])

  // Track previous cars to avoid saving on initial load
  const prevCarsRef = useRef<typeof cars | null>(null)

  useEffect(() => {
    if (!isReady) return
    // Skip save if cars haven't actually changed since last render
    if (prevCarsRef.current === cars) return
    prevCarsRef.current = cars

    const timeoutId = window.setTimeout(() => {
      setIsSaving(true)
      void saveCabinetCars(cars, { userId: user?.id })
        .then((nextSyncMode) => {
          setSyncMode(nextSyncMode)
          setSyncMessage(nextSyncMode === 'cloud' ? copy.syncCloudReady : copy.syncLocalFallback)
        })
        .finally(() => {
          setIsSaving(false)
        })
    }, 2000)

    return () => window.clearTimeout(timeoutId)
  }, [cars, copy.syncCloudReady, copy.syncLocalFallback, isReady, user?.id])

  useEffect(() => {
    setVinMessage('')
    setVinMessageTone('helper')
  }, [selectedCarId])

  useEffect(() => {
    fetchCatalogCars().then((cards) => {
      const canonicalMap: Record<string, string> = {}
      for (const make of Object.keys(CAR_MAKES_MODELS)) {
        canonicalMap[make.toLowerCase()] = make
      }

      const rawAliases: Record<string, string> = {
        'mercedes benz': 'Mercedes-Benz',
        'mercedes-benz': 'Mercedes-Benz',
        'vw': 'Volkswagen',
        'land rover': 'Land Rover',
        'alfa romeo': 'Alfa Romeo',
        'aston martin': 'Aston Martin',
        'rolls royce': 'Rolls-Royce',
        'rolls-royce': 'Rolls-Royce',
      }

      function normalizeMake(raw: string): string {
        const lower = raw.toLowerCase()
        if (rawAliases[lower]) return rawAliases[lower]
        if (canonicalMap[lower]) return canonicalMap[lower]
        return raw.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      }

      const merged: Record<string, Set<string>> = {}
      for (const [make, models] of Object.entries(CAR_MAKES_MODELS)) {
        merged[make] = new Set(models)
      }

      for (const card of cards) {
        const rawMake = card.make?.trim()
        const model = card.model?.trim()
        if (!rawMake || rawMake === 'BID BID BIDDERS' || rawMake === 'Unknown') continue
        const make = normalizeMake(rawMake)
        if (!merged[make]) merged[make] = new Set()
        if (model && model !== 'Unknown') merged[make].add(model)
      }

      const result: Record<string, string[]> = {}
      for (const [make, models] of Object.entries(merged)) {
        result[make] = Array.from(models).sort((left, right) => left.localeCompare(right))
      }

      setAllMakesModels(result)
    }).catch(() => {
      setAllMakesModels(CAR_MAKES_MODELS)
    })
  }, [])

  const handleLogout = async () => {
    await signOut()
  }

  const filteredCars = useMemo(() => {
    const term = search.trim().toLowerCase()

    return [...cars]
      .filter((car) => statusFilter === 'all' || car.status === statusFilter)
      .filter((car) => {
        if (!term) return true
        return [
          car.title,
          car.make,
          car.model,
          car.vin,
          car.lotNumber,
          car.notes,
          car.description,
        ].some((value) => value.toLowerCase().includes(term))
      })
      .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt))
  }, [cars, search, statusFilter])

  const selectedCar = useMemo(
    () => cars.find((car) => car.id === selectedCarId) ?? filteredCars[0] ?? null,
    [cars, filteredCars, selectedCarId],
  )

  useEffect(() => {
    if (!selectedCar) return

    const stockNumber = buildAutoStockNumber(selectedCar)
    const nextPatch: Partial<CabinetCar> = {}

    if (!selectedCar.lotNumber) {
      nextPatch.lotNumber = buildAutoLotNumber(cars)
    }

    if (selectedCar.stockNumber !== stockNumber) {
      nextPatch.stockNumber = stockNumber
    }

    if (selectedCar.auction !== PLATFORM_SOURCE) {
      nextPatch.auction = PLATFORM_SOURCE
    }

    if (Object.keys(nextPatch).length > 0) {
      patchSelectedCar(nextPatch)
    }
  }, [selectedCar?.id, selectedCar?.vin, selectedCar?.year, selectedCar?.lotNumber, selectedCar?.stockNumber, selectedCar?.auction])

  useEffect(() => {
    if (!selectedCar && filteredCars[0]) {
      setSelectedCarId(filteredCars[0].id)
      return
    }

    if (selectedCarId && cars.some((car) => car.id === selectedCarId)) {
      return
    }

    if (cars[0]) {
      setSelectedCarId(cars[0].id)
    }
  }, [cars, filteredCars, selectedCar, selectedCarId])

  const totalPhotos = useMemo(
    () => cars.reduce((sum, car) => sum + car.photos.length, 0),
    [cars],
  )

  const activeCount = useMemo(
    () => cars.filter((car) => ['research', 'bidding', 'won', 'shipping', 'repair'].includes(car.status)).length,
    [cars],
  )

  const readyCount = useMemo(
    () => cars.filter((car) => car.status === 'ready' || car.status === 'sold').length,
    [cars],
  )

  const duplicateVinExists = useMemo(() => {
    if (!selectedCar?.vin.trim()) return false
    const normalizedVin = selectedCar.vin.trim().toUpperCase()
    return cars.some((car) => car.id !== selectedCar.id && car.vin.trim().toUpperCase() === normalizedVin)
  }, [cars, selectedCar])

  const availableModels = useMemo(
    () => (selectedCar?.make ? (allMakesModels[selectedCar.make] ?? []) : []),
    [allMakesModels, selectedCar?.make],
  )

  const statusEntries = Object.entries(copy.statusLabels) as Array<[CabinetCarStatus, string]>
  const publicationStatusEntries = Object.entries(copy.publicationStatusLabels) as Array<[CabinetPublicationStatus, string]>

  function patchSelectedCar(patch: Partial<CabinetCar>) {
    if (!selectedCar) return

    setCars((currentCars) => currentCars.map((car) => (car.id === selectedCar.id
      ? { ...car, ...patch, updatedAt: new Date().toISOString() }
      : car)))
  }

  function handleFieldChange<Key extends keyof CabinetCar>(key: Key, value: CabinetCar[Key]) {
    if (key === 'vin') {
      setVinMessage('')
      setVinMessageTone('helper')
    }

    // Auto-generate slug and publishedAt when status changes to 'published'
    if (key === 'publicationStatus' && value === 'published' && selectedCar) {
      const patch: Partial<CabinetCar> = { [key]: value }
      if (!selectedCar.publicSlug?.trim()) {
        patch.publicSlug = buildPublicSlug(selectedCar)
      }
      if (!selectedCar.publishedAt) {
        patch.publishedAt = new Date().toISOString()
      }
      if (!selectedCar.publicTitle.trim()) {
        patch.publicTitle = [selectedCar.year, selectedCar.make, selectedCar.model].filter(Boolean).join(' ').trim() || selectedCar.title
      }
      patch.auction = PLATFORM_SOURCE
      patchSelectedCar(patch)
      return
    }

    if (key === 'make' && selectedCar) {
      const nextMake = String(value)
      const modelsForMake = allMakesModels[nextMake] ?? []
      const nextModel = modelsForMake.includes(selectedCar.model) ? selectedCar.model : ''
      patchSelectedCar({ make: nextMake, model: nextModel } as Partial<CabinetCar>)
      return
    }

    patchSelectedCar({ [key]: value } as Pick<CabinetCar, Key>)
  }

  function handleAddCar() {
    const nextCar = createEmptyCabinetCar(cars.length + 1)
    setCars((currentCars) => [nextCar, ...currentCars])
    setSelectedCarId(nextCar.id)
  }

  async function handleDeleteCar() {
    if (!selectedCar) return

    if (canUseCloudSync) {
      const storagePaths = selectedCar.photos
        .map((photo) => photo.storagePath)
        .filter((path): path is string => Boolean(path))

      if (storagePaths.length > 0) {
        try {
          await deleteCabinetPhotosFromSupabase(storagePaths)
        } catch {
          setUploadError(copy.uploadErrorCloud)
        }
      }
    }

    const remainingCars = cars.filter((car) => car.id !== selectedCar.id)
    if (remainingCars.length === 0) {
      const nextCar = createEmptyCabinetCar(1)
      setCars([nextCar])
      setSelectedCarId(nextCar.id)
      return
    }

    setCars(remainingCars)
    setSelectedCarId(remainingCars[0].id)
  }

  async function handlePhotoUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? [])
    event.target.value = ''
    setUploadError('')

    if (!selectedCar || files.length === 0) return

    if (selectedCar.photos.length + files.length > CABINET_CAR_MAX_PHOTOS) {
      setUploadError(copy.uploadErrorTooMany)
      return
    }

    if (files.some((file) => file.size > CABINET_PHOTO_MAX_FILE_BYTES)) {
      setUploadError(copy.uploadErrorTooLarge)
      return
    }

    setIsUploading(true)

    try {
      const photos = []
      for (const file of files) {
        const asset = await compressPhotoAsset(file, {
          maxDimension: 1600,
          targetBytes: 520 * 1024,
        })
        const photo = canUseCloudSync
          ? await uploadCabinetPhotoToSupabase(String(user?.id), selectedCar.id, asset)
          : await createLocalCabinetPhoto(asset)
        photos.push(photo)
      }

      patchSelectedCar({ photos: [...selectedCar.photos, ...photos] })
    } catch {
      setUploadError(canUseCloudSync ? copy.uploadErrorCloud : copy.uploadErrorTooLarge)
    } finally {
      setIsUploading(false)
    }
  }

  async function handlePhotoRemove(photoId: string) {
    if (!selectedCar) return

    const photoToRemove = selectedCar.photos.find((photo) => photo.id === photoId)
    if (photoToRemove?.storagePath && canUseCloudSync) {
      try {
        await deleteCabinetPhotosFromSupabase([photoToRemove.storagePath])
      } catch {
        setUploadError(copy.uploadErrorCloud)
      }
    }

    patchSelectedCar({ photos: selectedCar.photos.filter((photo) => photo.id !== photoId) })
  }

  function handlePhotoSetPrimary(photoId: string) {
    if (!selectedCar) return
    if ((selectedCar.photos[0]?.id ?? '') === photoId) return

    const nextPhotos = [...selectedCar.photos]
    const index = nextPhotos.findIndex((photo) => photo.id === photoId)
    if (index < 0) return

    const [primary] = nextPhotos.splice(index, 1)
    nextPhotos.unshift(primary)
    patchSelectedCar({ photos: nextPhotos })
  }

  async function handleSaveNow() {
    setIsSaving(true)
    try {
      const nextSyncMode = await saveCabinetCars(cars, { userId: user?.id })
      setSyncMode(nextSyncMode)
      setSyncMessage(nextSyncMode === 'cloud' ? copy.syncCloudReady : copy.syncLocalFallback)
    } finally {
      setIsSaving(false)
    }
  }

  async function handlePublishNow() {
    if (!selectedCar) return

    const now = new Date().toISOString()
    const patch: Partial<CabinetCar> = {
      publicationStatus: 'published',
      publicSlug: selectedCar.publicSlug?.trim() || buildPublicSlug(selectedCar),
      publicTitle: selectedCar.publicTitle?.trim() || [selectedCar.year, selectedCar.make, selectedCar.model].filter(Boolean).join(' ').trim() || selectedCar.title,
      publicDescription: selectedCar.publicDescription?.trim() || buildSocialDescription(selectedCar),
      publishedAt: selectedCar.publishedAt || now,
      auction: PLATFORM_SOURCE,
      lotNumber: selectedCar.lotNumber?.trim() && /^\d+$/.test(selectedCar.lotNumber.trim()) ? selectedCar.lotNumber : buildAutoLotNumber(cars),
      stockNumber: buildAutoStockNumber(selectedCar),
    }

    const updatedCar: CabinetCar = { ...selectedCar, ...patch, updatedAt: now }
    const nextCars = cars.map((car) => (car.id === selectedCar.id ? updatedCar : car))
    setCars(nextCars)

    setIsSaving(true)
    try {
      const nextSyncMode = await saveCabinetCars(nextCars, { userId: user?.id })
      setSyncMode(nextSyncMode)
      setSyncMessage(nextSyncMode === 'cloud' ? copy.syncCloudReady : copy.syncLocalFallback)
    } finally {
      setIsSaving(false)
    }
  }

  function handlePreviewListing() {
    if (!selectedCar) return
    const slug = selectedCar.publicSlug?.trim() || buildPublicSlug(selectedCar)
    window.open(lp(`${routePaths.car}/${slug}`), '_blank', 'noopener,noreferrer')
  }

  async function handleVinBlur() {
    if (!selectedCar) return

    const normalizedCarVin = normalizeVin(selectedCar.vin)
    if (!canDecodeVin(normalizedCarVin)) {
      return
    }

    setIsDecodingVin(true)
    setVinMessage(copy.vinDecodeLoading)
    setVinMessageTone('helper')

    try {
      const decoded = await decodeVin(normalizedCarVin)
      const nextPatch: Partial<CabinetCar> = { vin: decoded.normalizedVin }

      ;(Object.keys(decoded.fields) as Array<keyof CabinetCar>).forEach((key) => {
        const value = decoded.fields[key]
        if (typeof value !== 'string' || !value) return

        const currentValue = String(selectedCar[key] ?? '').trim()
        const shouldReplaceTitle = key === 'title' && (!currentValue || currentValue.startsWith('Car '))

        if (!currentValue || shouldReplaceTitle) {
          nextPatch[key] = value as never
        }
      })

      patchSelectedCar(nextPatch)
      setVinMessage(decoded.completeness === 'full' ? copy.vinDecodeSuccess : copy.vinDecodePartial)
      setVinMessageTone('helper')
    } catch {
      setVinMessage(copy.vinDecodeError)
      setVinMessageTone('error')
    } finally {
      setIsDecodingVin(false)
    }
  }

  const makeOptions = useMemo(() => Object.keys(allMakesModels).sort(), [allMakesModels])
  const yearOptions = useMemo(() => {
    const maxYear = new Date().getFullYear() + 1
    return Array.from({ length: maxYear - 1979 }, (_, index) => String(maxYear - index))
  }, [])
  const engineVolumeOptions = useMemo(
    () => Array.from({ length: 100 }, (_, index) => ((index + 1) / 10).toFixed(1)),
    [],
  )

  const optionLocale = locale === 'uk' || locale === 'pl' ? locale : 'en'

  const translatedOptionLabels = useMemo(() => {
    const labels: Record<'uk' | 'en' | 'pl', Partial<Record<keyof CabinetCar, Record<string, string>>>> = {
      en: {
        bodyStyle: {
          Sedan: 'Sedan', Hatchback: 'Hatchback', Liftback: 'Liftback', Wagon: 'Wagon', SUV: 'SUV', Crossover: 'Crossover',
          Coupe: 'Coupe', Convertible: 'Convertible', Pickup: 'Pickup', Van: 'Van', Minivan: 'Minivan',
        },
        colorExterior: {
          Black: 'Black', White: 'White', Gray: 'Gray', Silver: 'Silver', Blue: 'Blue', Red: 'Red', Green: 'Green',
          Brown: 'Brown', Beige: 'Beige', Yellow: 'Yellow', Orange: 'Orange', Gold: 'Gold',
        },
        colorInterior: {
          Black: 'Black', Gray: 'Gray', Beige: 'Beige', Brown: 'Brown', White: 'White', Red: 'Red',
        },
        fuelType: {
          Gasoline: 'Gasoline', Diesel: 'Diesel', Hybrid: 'Hybrid', 'Plug-in Hybrid': 'Plug-in Hybrid', Electric: 'Electric',
          'LPG/CNG': 'LPG/CNG', Hydrogen: 'Hydrogen',
        },
        drivetrain: { FWD: 'FWD', RWD: 'RWD', AWD: 'AWD', '4WD': '4WD' },
        transmission: { Automatic: 'Automatic', Manual: 'Manual', CVT: 'CVT', DCT: 'DCT', Robotic: 'Robotic' },
        ownershipType: {
          'Private Owner': 'Private owner', Dealer: 'Dealer', 'Lease Return': 'Lease return', 'Bank Repo': 'Bank repossession', Insurance: 'Insurance',
        },
        keysStatus: { Present: 'Present', Missing: 'Missing', Unknown: 'Unknown' },
        startCondition: { 'Runs and Drives': 'Runs and drives', Starts: 'Starts', 'No Start': 'No start', Unknown: 'Unknown' },
        damagePrimary: {
          'Front End': 'Front end', 'Rear End': 'Rear end', Side: 'Side', Roof: 'Roof', Undercarriage: 'Undercarriage',
          'Water/Flood': 'Water/Flood', Fire: 'Fire', Vandalism: 'Vandalism', Mechanical: 'Mechanical', 'Normal Wear': 'Normal wear', Unknown: 'Unknown', None: 'None',
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
          Black: 'Чорний', White: 'Білий', Gray: 'Сірий', Silver: 'Сріблястий', Blue: 'Синій', Red: 'Червоний', Green: 'Зелений',
          Brown: 'Коричневий', Beige: 'Бежевий', Yellow: 'Жовтий', Orange: 'Помаранчевий', Gold: 'Золотий',
        },
        colorInterior: {
          Black: 'Чорний', Gray: 'Сірий', Beige: 'Бежевий', Brown: 'Коричневий', White: 'Білий', Red: 'Червоний',
        },
        fuelType: {
          Gasoline: 'Бензин', Diesel: 'Дизель', Hybrid: 'Гібрид', 'Plug-in Hybrid': 'Плагін-гібрид', Electric: 'Електро',
          'LPG/CNG': 'Газ (LPG/CNG)', Hydrogen: 'Водень',
        },
        drivetrain: { FWD: 'Передній (FWD)', RWD: 'Задній (RWD)', AWD: 'Повний (AWD)', '4WD': 'Повний (4WD)' },
        transmission: { Automatic: 'Автомат', Manual: 'Механіка', CVT: 'Варіатор (CVT)', DCT: 'Робот (DCT)', Robotic: 'Роботизована' },
        ownershipType: {
          'Private Owner': 'Приватний власник', Dealer: 'Дилер', 'Lease Return': 'Повернення з лізингу', 'Bank Repo': 'Банківське вилучення', Insurance: 'Страхова',
        },
        keysStatus: { Present: 'Є ключі', Missing: 'Немає ключів', Unknown: 'Невідомо' },
        startCondition: { 'Runs and Drives': 'Заводиться і їде', Starts: 'Заводиться', 'No Start': 'Не заводиться', Unknown: 'Невідомо' },
        damagePrimary: {
          'Front End': 'Передня частина', 'Rear End': 'Задня частина', Side: 'Бокова частина', Roof: 'Дах', Undercarriage: 'Низ кузова',
          'Water/Flood': 'Після води/потопу', Fire: 'Після пожежі', Vandalism: 'Вандалізм', Mechanical: 'Механічне', 'Normal Wear': 'Звичайний знос', Unknown: 'Невідомо', None: 'Немає',
        },
        damageSecondary: {
          None: 'Немає', 'Front End': 'Передня частина', 'Rear End': 'Задня частина', Side: 'Бокова частина', Roof: 'Дах', Undercarriage: 'Низ кузова',
          'Water/Flood': 'Після води/потопу', Fire: 'Після пожежі', Vandalism: 'Вандалізм', Mechanical: 'Механічне', Unknown: 'Невідомо',
        },
      },
      pl: {
        bodyStyle: {
          Sedan: 'Sedan', Hatchback: 'Hatchback', Liftback: 'Liftback', Wagon: 'Kombi', SUV: 'SUV', Crossover: 'Crossover',
          Coupe: 'Coupe', Convertible: 'Kabriolet', Pickup: 'Pickup', Van: 'Van', Minivan: 'Minivan',
        },
        colorExterior: {
          Black: 'Czarny', White: 'Biały', Gray: 'Szary', Silver: 'Srebrny', Blue: 'Niebieski', Red: 'Czerwony', Green: 'Zielony',
          Brown: 'Brązowy', Beige: 'Beżowy', Yellow: 'Żółty', Orange: 'Pomarańczowy', Gold: 'Złoty',
        },
        colorInterior: {
          Black: 'Czarny', Gray: 'Szary', Beige: 'Beżowy', Brown: 'Brązowy', White: 'Biały', Red: 'Czerwony',
        },
        fuelType: {
          Gasoline: 'Benzyna', Diesel: 'Diesel', Hybrid: 'Hybryda', 'Plug-in Hybrid': 'Hybryda plug-in', Electric: 'Elektryczny',
          'LPG/CNG': 'LPG/CNG', Hydrogen: 'Wodór',
        },
        drivetrain: { FWD: 'Przedni (FWD)', RWD: 'Tylny (RWD)', AWD: 'Napęd na wszystkie koła (AWD)', '4WD': '4x4 (4WD)' },
        transmission: { Automatic: 'Automatyczna', Manual: 'Manualna', CVT: 'CVT', DCT: 'DCT', Robotic: 'Zautomatyzowana' },
        ownershipType: {
          'Private Owner': 'Właściciel prywatny', Dealer: 'Dealer', 'Lease Return': 'Zwrot z leasingu', 'Bank Repo': 'Przejęcie bankowe', Insurance: 'Ubezpieczyciel',
        },
        keysStatus: { Present: 'Kluczyki są', Missing: 'Brak kluczyków', Unknown: 'Nieznane' },
        startCondition: { 'Runs and Drives': 'Odpala i jeździ', Starts: 'Odpala', 'No Start': 'Nie odpala', Unknown: 'Nieznane' },
        damagePrimary: {
          'Front End': 'Przód', 'Rear End': 'Tył', Side: 'Bok', Roof: 'Dach', Undercarriage: 'Podwozie',
          'Water/Flood': 'Zalanie', Fire: 'Pożar', Vandalism: 'Wandalizm', Mechanical: 'Mechaniczne', 'Normal Wear': 'Normalne zużycie', Unknown: 'Nieznane', None: 'Brak',
        },
        damageSecondary: {
          None: 'Brak', 'Front End': 'Przód', 'Rear End': 'Tył', Side: 'Bok', Roof: 'Dach', Undercarriage: 'Podwozie',
          'Water/Flood': 'Zalanie', Fire: 'Pożar', Vandalism: 'Wandalizm', Mechanical: 'Mechaniczne', Unknown: 'Nieznane',
        },
      },
    }

    return labels[optionLocale]
  }, [optionLocale])

  function getSelectOptionLabel(fieldKey: keyof CabinetCar, optionValue: string): string {
    if (fieldKey === 'engineVolume') {
      return `${optionValue} L`
    }
    return translatedOptionLabels[fieldKey]?.[optionValue] ?? optionValue
  }

  const selectFieldOptions: Partial<Record<keyof CabinetCar, string[]>> = useMemo(() => ({
    auction: [PLATFORM_SOURCE],
    bodyStyle: ['Sedan', 'Hatchback', 'Liftback', 'Wagon', 'SUV', 'Crossover', 'Coupe', 'Convertible', 'Pickup', 'Van', 'Minivan'],
    colorExterior: ['Black', 'White', 'Gray', 'Silver', 'Blue', 'Red', 'Green', 'Brown', 'Beige', 'Yellow', 'Orange', 'Gold'],
    colorInterior: ['Black', 'Gray', 'Beige', 'Brown', 'White', 'Red'],
    engineVolume: engineVolumeOptions,
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
  }), [engineVolumeOptions])

  return (
    <main className="px px-page cabinet-shell" style={{ paddingTop: '7.5rem', paddingBottom: '4rem' }}>
      <section className="px-section">
        <div className="cabinet-grid">
          <section className="cabinet-hero">
            <div className="cabinet-hero-head">
              <div className="cabinet-hero-copy">
                <span className="cabinet-kicker">{copy.heroMetaLabel}</span>
                <div className="cabinet-title-row">
                  <h1>{t('footerCabinet')}</h1>
                  {user && (
                    <span className="cabinet-user-pill">
                      {t('cabinetWelcome')} <strong>{user.name}</strong>
                    </span>
                  )}
                  <span className="cabinet-user-pill">
                    {isSaving ? copy.syncSaving : syncMessage || (syncMode === 'cloud' ? copy.syncCloudReady : copy.syncLocalReady)}
                  </span>
                </div>
                <p>{copy.heroLead}</p>
                {user && <p>{user.email}</p>}
              </div>

              <div className="cabinet-hero-actions">
                <button className="auth-btn auth-btn-primary" onClick={handleAddCar}>{copy.addCar}</button>
                <button className="auth-btn auth-btn-secondary" onClick={handleLogout}>{t('authLogout')}</button>
              </div>
            </div>

            <div className="cabinet-stats">
              <article className="cabinet-stat">
                <span>{copy.totalCars}</span>
                <strong>{cars.length}</strong>
              </article>
              <article className="cabinet-stat">
                <span>{copy.activeCars}</span>
                <strong>{activeCount}</strong>
              </article>
              <article className="cabinet-stat">
                <span>{copy.readyCars}</span>
                <strong>{readyCount}</strong>
              </article>
              <article className="cabinet-stat">
                <span>{copy.totalPhotos}</span>
                <strong>{totalPhotos}</strong>
              </article>
            </div>
          </section>

          <div className="cabinet-main-grid">
            <aside className="cabinet-panel cabinet-sidebar">
              <input
                className="cabinet-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={copy.searchPlaceholder}
              />

              <div className="cabinet-filter-row">
                <button
                  className={`cabinet-chip ${statusFilter === 'all' ? 'cabinet-chip-active' : ''}`}
                  onClick={() => setStatusFilter('all')}
                  type="button"
                >
                  {copy.allStatuses}
                </button>
                {statusEntries.map(([status, label]) => (
                  <button
                    key={status}
                    className={`cabinet-chip ${statusFilter === status ? 'cabinet-chip-active' : ''}`}
                    onClick={() => setStatusFilter(status)}
                    type="button"
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="cabinet-list">
                {filteredCars.length === 0 && <div className="cabinet-empty">{copy.emptyList}</div>}

                {filteredCars.map((car) => {
                  const firstPhoto = car.photos[0]
                  const title = [car.year, car.make, car.model].filter(Boolean).join(' ').trim() || car.title

                  return (
                    <button
                      className={`cabinet-card-button ${selectedCar?.id === car.id ? 'cabinet-card-button-active' : ''}`}
                      key={car.id}
                      onClick={() => setSelectedCarId(car.id)}
                      type="button"
                    >
                      {firstPhoto ? (
                        <img className="cabinet-card-photo" src={firstPhoto.url} alt={title} />
                      ) : (
                        <div className="cabinet-photo-placeholder">{copy.photoCountLabel}</div>
                      )}

                      <div className="cabinet-card-copy">
                        <div className="cabinet-card-head">
                          <strong>{title}</strong>
                          <span className="cabinet-status">{copy.statusLabels[car.status]}</span>
                        </div>
                        {car.publicationStatus === 'published' && (
                          <span className="cabinet-published-badge">✓ {copy.publicationStatusLabels.published}</span>
                        )}
                        <span>{car.vin || car.lotNumber || car.stockNumber || 'No VIN yet'}</span>
                        <div className="cabinet-card-meta">
                          <span>{car.photos.length} {copy.photoCountLabel}</span>
                          <span>{new Date(car.updatedAt).toLocaleDateString(locale)}</span>
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </aside>

            <section className="cabinet-panel cabinet-editor">
              {!selectedCar && <div className="cabinet-editor-empty">{copy.noSelection}</div>}

              {selectedCar && (
                <>
                  <div className="cabinet-editor-head">
                    <div>
                      <span className="cabinet-status">{copy.statusLabels[selectedCar.status]}</span>
                      <h2>{[selectedCar.year, selectedCar.make, selectedCar.model].filter(Boolean).join(' ').trim() || selectedCar.title}</h2>
                    </div>

                    <div className="cabinet-editor-actions">
                      <button className="auth-btn auth-btn-secondary" onClick={handleDeleteCar} type="button">{copy.deleteCar}</button>
                    </div>
                  </div>

                  <div className="cabinet-sections">
                    <section className="cabinet-section">
                      <div className="cabinet-section-head">
                        <div>
                          <h3>{copy.sectionIdentity}</h3>
                          <p>{copy.carCountLabel}: {cars.length}</p>
                        </div>
                      </div>

                      <div className="cabinet-form-grid">
                        <div className="cabinet-field">
                          <label htmlFor="car-title">{copy.fieldTitle}</label>
                          <input id="car-title" value={selectedCar.title} onChange={(event) => handleFieldChange('title', event.target.value)} />
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-year">{copy.fieldYear}</label>
                          <select id="car-year" value={selectedCar.year} onChange={(event) => handleFieldChange('year', event.target.value)}>
                            <option value="">-</option>
                            {yearOptions.map((year) => <option key={year} value={year}>{year}</option>)}
                          </select>
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-make">{copy.fieldMake}</label>
                          <select id="car-make" value={selectedCar.make} onChange={(event) => handleFieldChange('make', event.target.value)}>
                            <option value="">-</option>
                            {makeOptions.map((make) => <option key={make} value={make}>{make}</option>)}
                          </select>
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-model">{copy.fieldModel}</label>
                          <select
                            id="car-model"
                            disabled={!selectedCar.make}
                            value={selectedCar.model}
                            onChange={(event) => handleFieldChange('model', event.target.value)}
                          >
                            <option value="">-</option>
                            {availableModels.map((model) => <option key={model} value={model}>{model}</option>)}
                          </select>
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-vin">{copy.fieldVin}</label>
                          <input id="car-vin" value={selectedCar.vin} onBlur={handleVinBlur} onChange={(event) => handleFieldChange('vin', event.target.value.toUpperCase())} />
                          {duplicateVinExists && <p className="cabinet-warning">{copy.duplicateVinWarning}</p>}
                          {isDecodingVin && <p className="cabinet-helper">{copy.vinDecodeLoading}</p>}
                          {!isDecodingVin && vinMessage && (
                            <p className={vinMessageTone === 'error' ? 'cabinet-error' : 'cabinet-helper'}>{vinMessage}</p>
                          )}
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-status">{copy.fieldStatus}</label>
                          <select id="car-status" value={selectedCar.status} onChange={(event) => handleFieldChange('status', event.target.value as CabinetCarStatus)}>
                            {statusEntries.map(([status, label]) => <option key={status} value={status}>{label}</option>)}
                          </select>
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-lot">{copy.fieldLotNumber}</label>
                          <input id="car-lot" readOnly value={selectedCar.lotNumber} />
                          <p className="cabinet-helper">{copy.autoGeneratedHint}</p>
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-stock">{copy.fieldStockNumber}</label>
                          <input id="car-stock" readOnly value={selectedCar.stockNumber} />
                          <p className="cabinet-helper">{copy.autoGeneratedHint}</p>
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-source">{copy.fieldSourceUrl}</label>
                          <input id="car-source" value={selectedCar.sourceUrl} onChange={(event) => handleFieldChange('sourceUrl', event.target.value)} />
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="car-auction">{copy.fieldAuction}</label>
                          <select disabled id="car-auction" value={selectedCar.auction} onChange={(event) => handleFieldChange('auction', event.target.value)}>
                            <option value="">-</option>
                            {(selectFieldOptions.auction ?? []).map((auction) => <option key={auction} value={auction}>{getSelectOptionLabel('auction', auction)}</option>)}
                          </select>
                        </div>
                      </div>
                    </section>

                    <section className="cabinet-section">
                      <div className="cabinet-section-head">
                        <div>
                          <h3>{copy.sectionSpecs}</h3>
                          <p>{copy.fieldGeneration}, {copy.fieldEngineVolume}, {copy.fieldDrivetrain}, {copy.fieldTransmission}</p>
                        </div>
                      </div>

                      <div className="cabinet-form-grid-3">
                        {[
                          ['bodyStyle', copy.fieldBodyStyle],
                          ['bodyCode', copy.fieldBodyCode],
                          ['generation', copy.fieldGeneration],
                          ['trim', copy.fieldTrim],
                          ['colorExterior', copy.fieldColorExterior],
                          ['colorInterior', copy.fieldColorInterior],
                          ['engineVolume', copy.fieldEngineVolume],
                          ['engineCode', copy.fieldEngineCode],
                          ['enginePowerHp', copy.fieldEnginePowerHp],
                          ['fuelType', copy.fieldFuelType],
                          ['drivetrain', copy.fieldDrivetrain],
                          ['transmission', copy.fieldTransmission],
                          ['mileageKm', copy.fieldMileageKm],
                          ['odometerUnit', copy.fieldOdometerUnit],
                          ['location', copy.fieldLocation],
                        ].map(([key, label]) => {
                          const fieldKey = key as keyof CabinetCar
                          const options = selectFieldOptions[fieldKey]
                          return (
                            <div className="cabinet-field" key={key}>
                              <label htmlFor={key}>{label}</label>
                              {options ? (
                                <select id={key} value={selectedCar[fieldKey] as string} onChange={(event) => handleFieldChange(fieldKey, event.target.value as never)}>
                                  <option value="">-</option>
                                  {options.map((option) => <option key={option} value={option}>{getSelectOptionLabel(fieldKey, option)}</option>)}
                                </select>
                              ) : (
                                <input id={key} value={selectedCar[fieldKey] as string} onChange={(event) => handleFieldChange(fieldKey, event.target.value as never)} />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </section>

                    <section className="cabinet-section">
                      <div className="cabinet-section-head">
                        <div>
                          <h3>{copy.sectionLogistics}</h3>
                          <p>{copy.fieldPurchasePriceUsd}, {copy.fieldRepairEstimateUsd}, {copy.fieldCustomsAndFeesUsd}</p>
                        </div>
                      </div>

                      <div className="cabinet-form-grid-3">
                        {[
                          ['countryOfOrigin', copy.fieldCountryOfOrigin],
                          ['importDestination', copy.fieldImportDestination],
                          ['ownershipType', copy.fieldOwnershipType],
                          ['purchasePriceUsd', copy.fieldPurchasePriceUsd],
                          ['targetBudgetUsd', copy.fieldTargetBudgetUsd],
                          ['customsAndFeesUsd', copy.fieldCustomsAndFeesUsd],
                          ['sellerName', copy.fieldSellerName],
                          ['sellerPhone', copy.fieldSellerPhone],
                          ['repairEstimateUsd', copy.fieldRepairEstimateUsd],
                        ].map(([key, label]) => {
                          const fieldKey = key as keyof CabinetCar
                          const options = selectFieldOptions[fieldKey]
                          return (
                            <div className="cabinet-field" key={key}>
                              <label htmlFor={key}>{label}</label>
                              {options ? (
                                <select id={key} value={selectedCar[fieldKey] as string} onChange={(event) => handleFieldChange(fieldKey, event.target.value as never)}>
                                  <option value="">-</option>
                                  {options.map((option) => <option key={option} value={option}>{getSelectOptionLabel(fieldKey, option)}</option>)}
                                </select>
                              ) : (
                                <input id={key} value={selectedCar[fieldKey] as string} onChange={(event) => handleFieldChange(fieldKey, event.target.value as never)} />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </section>

                    <section className="cabinet-section">
                      <div className="cabinet-section-head">
                        <div>
                          <h3>{copy.sectionCondition}</h3>
                          <p>{copy.fieldDamagePrimary}, {copy.fieldDamageSecondary}, {copy.fieldKeysStatus}</p>
                        </div>
                      </div>

                      <div className="cabinet-form-grid">
                        {[
                          ['keysStatus', copy.fieldKeysStatus],
                          ['startCondition', copy.fieldStartCondition],
                          ['damagePrimary', copy.fieldDamagePrimary],
                          ['damageSecondary', copy.fieldDamageSecondary],
                        ].map(([key, label]) => {
                          const fieldKey = key as keyof CabinetCar
                          const options = selectFieldOptions[fieldKey]
                          return (
                            <div className="cabinet-field" key={key}>
                              <label htmlFor={key}>{label}</label>
                              {options ? (
                                <select id={key} value={selectedCar[fieldKey] as string} onChange={(event) => handleFieldChange(fieldKey, event.target.value as never)}>
                                  <option value="">-</option>
                                  {options.map((option) => <option key={option} value={option}>{getSelectOptionLabel(fieldKey, option)}</option>)}
                                </select>
                              ) : (
                                <input id={key} value={selectedCar[fieldKey] as string} onChange={(event) => handleFieldChange(fieldKey, event.target.value as never)} />
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </section>

                    <section className="cabinet-section">
                      <div className="cabinet-section-head">
                        <div>
                          <h3>{copy.sectionPublication}</h3>
                          <p>{copy.fieldPublicationStatus}, {copy.fieldPublicTitle}, {copy.fieldPublicPriceUsd}</p>
                        </div>
                      </div>

                      <div className="cabinet-form-grid">
                        <div className="cabinet-field">
                          <label htmlFor="publication-status">{copy.fieldPublicationStatus}</label>
                          <select
                            id="publication-status"
                            value={selectedCar.publicationStatus}
                            onChange={(event) => handleFieldChange('publicationStatus', event.target.value as CabinetPublicationStatus)}
                          >
                            {publicationStatusEntries.map(([status, label]) => <option key={status} value={status}>{label}</option>)}
                          </select>
                          <button className="auth-btn auth-btn-secondary cabinet-preview-btn" onClick={handlePreviewListing} type="button">{copy.previewListing}</button>
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="public-title">{copy.fieldPublicTitle}</label>
                          <input id="public-title" value={selectedCar.publicTitle} onChange={(event) => handleFieldChange('publicTitle', event.target.value)} />
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="public-slug">{copy.fieldPublicSlug}</label>
                          <input id="public-slug" value={selectedCar.publicSlug} onChange={(event) => handleFieldChange('publicSlug', event.target.value)} />
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="public-price-usd">{copy.fieldPublicPriceUsd}</label>
                          <input id="public-price-usd" value={selectedCar.publicPriceUsd} onChange={(event) => handleFieldChange('publicPriceUsd', event.target.value)} />
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="public-estimate-usd">{copy.fieldPublicEstimateUsd}</label>
                          <input id="public-estimate-usd" value={selectedCar.publicEstimateUsd} onChange={(event) => handleFieldChange('publicEstimateUsd', event.target.value)} />
                        </div>
                        <div className="cabinet-field">
                          <label htmlFor="public-badge">{copy.fieldPublicBadge}</label>
                          <input id="public-badge" value={selectedCar.publicBadge} onChange={(event) => handleFieldChange('publicBadge', event.target.value)} />
                        </div>
                        <div className="cabinet-field-wide">
                          <label htmlFor="public-description">{copy.fieldPublicDescription}</label>
                          <textarea id="public-description" value={selectedCar.publicDescription} onChange={(event) => handleFieldChange('publicDescription', event.target.value)} />
                        </div>
                        <label className="cabinet-field cabinet-checkbox-field" htmlFor="public-hot-offer">
                          <span>{copy.fieldPublicHotOffer}</span>
                          <input
                            id="public-hot-offer"
                            checked={selectedCar.publicHotOffer}
                            onChange={(event) => handleFieldChange('publicHotOffer', event.target.checked)}
                            type="checkbox"
                          />
                        </label>
                      </div>
                    </section>

                    <section className="cabinet-section">
                      <div className="cabinet-section-head">
                        <div>
                          <h3>{copy.sectionGallery}</h3>
                          <p>{copy.uploadHelp}</p>
                        </div>
                        <div className="cabinet-status">{selectedCar.photos.length}/{CABINET_CAR_MAX_PHOTOS}</div>
                      </div>

                      <label className="cabinet-upload-label">
                        <input accept="image/*" multiple onChange={handlePhotoUpload} type="file" />
                        {copy.addPhoto}
                      </label>

                      {isUploading && <p className="cabinet-helper">{copy.uploadProcessing}</p>}
                      {uploadError && <p className="cabinet-error">{uploadError}</p>}

                      <div className="cabinet-photo-grid">
                        {selectedCar.photos.map((photo, index) => (
                          <article className="cabinet-photo-card" key={photo.id}>
                            <img alt={photo.name} src={photo.url} />
                            <div className="cabinet-photo-copy">
                              <strong>{photo.name}</strong>
                              <span>{photo.sizeKb} KB · {photo.width}×{photo.height}</span>
                            </div>
                            {index === 0 ? (
                              <span className="cabinet-photo-badge">{copy.primaryPhotoBadge}</span>
                            ) : (
                              <button className="cabinet-photo-primary" onClick={() => handlePhotoSetPrimary(photo.id)} type="button">{copy.setPrimaryPhoto}</button>
                            )}
                            <button className="cabinet-photo-remove" onClick={() => handlePhotoRemove(photo.id)} type="button">{copy.removePhoto}</button>
                          </article>
                        ))}
                      </div>
                    </section>

                    <section className="cabinet-section">
                      <div className="cabinet-section-head">
                        <div>
                          <h3>{copy.sectionNotes}</h3>
                          <p>{copy.fieldDescription}, {copy.fieldServiceHistory}, {copy.fieldNotes}</p>
                        </div>
                      </div>

                      <div className="cabinet-form-grid">
                        {[
                          ['description', copy.fieldDescription],
                          ['serviceHistory', copy.fieldServiceHistory],
                          ['modifications', copy.fieldModifications],
                          ['notes', copy.fieldNotes],
                        ].map(([key, label]) => (
                          <div className="cabinet-field-wide" key={key}>
                            <label htmlFor={key}>{label}</label>
                            <textarea id={key} value={selectedCar[key as keyof CabinetCar] as string} onChange={(event) => handleFieldChange(key as keyof CabinetCar, event.target.value as never)} />
                          </div>
                        ))}
                      </div>
                    </section>

                    <div className="cabinet-bottom-actions">
                      <button className="auth-btn auth-btn-secondary" onClick={handleSaveNow} type="button">{copy.saveCar}</button>
                      <button className="auth-btn auth-btn-primary" onClick={handlePublishNow} type="button">{copy.publishCar}</button>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
