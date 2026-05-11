import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react'
import { CAR_MAKES_MODELS } from '../../../shared/data/carMakesModels'
import { useI18n } from '../../../shared/i18n/I18nProvider'
import { useAuth } from '../../../shared/auth/AuthProvider'
import { getCabinetCopy } from './cabinetContent'
import { loadCabinetCars, saveCabinetCars, type CabinetSyncMode } from '../model/cabinetStore'
import { CABINET_PHOTO_MAX_FILE_BYTES, createEmptyCabinetCar, type CabinetCar, type CabinetCarStatus, type CabinetPublicationStatus } from '../model/cabinetTypes'
import { compressPhotoAsset, createLocalCabinetPhoto } from '../model/photoCompression'
import { canDecodeVin, decodeVin, normalizeVin } from '../model/vinDecoder'
import { canUseCloudCabinet, deleteCabinetPhotosFromSupabase, uploadCabinetPhotoToSupabase } from '../model/cabinetSupabase'
import { fetchCatalogCars } from '../../../features/auction/model/inRoute.service'
import { localizedPath, routePaths } from '../../../shared/config/routes'
import { initListingExpiry, renewListing } from '../model/listingExpiry'
import { buildGetSelectOptionLabel, buildSelectFieldOptions, YEAR_OPTIONS } from '../model/cabinetFieldOptions'
import { CabinetCarList } from './CabinetCarList'
import { CabinetEditorPanel } from './CabinetEditorPanel'
import { CabinetProfilePanel } from './CabinetProfilePanel'
import './cabinet.css'

// ─── Helper functions ────────────────────────────────────────────────────────

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
  return [
    [car.year, car.make, car.model].filter(Boolean).join(' '),
    car.trim,
    car.engineVolume ? `${car.engineVolume}L` : '',
    car.fuelType,
    car.transmission,
    car.mileageKm ? `${Number(car.mileageKm).toLocaleString()} km` : '',
    car.location,
  ].filter(Boolean).join(' · ')
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

// ─── Component ───────────────────────────────────────────────────────────────

export function CabinetPage() {
  const { t, locale } = useI18n()
  const lp = (path: string) => localizedPath(locale, path)
  const { user, signOut } = useAuth()
  const copy = getCabinetCopy(locale)

  // ── State ──────────────────────────────────────────────────────────────────
  const [cars, setCars] = useState<CabinetCar[]>([])
  const [selectedCarId, setSelectedCarId] = useState('')
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | CabinetCarStatus>('all')
  const [isReady, setIsReady] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [syncMode, setSyncMode] = useState<CabinetSyncMode>('local')
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState<'cars' | 'profile'>('cars')
  const [isDecodingVin, setIsDecodingVin] = useState(false)
  const [vinMessage, setVinMessage] = useState('')
  const [vinMessageTone, setVinMessageTone] = useState<'helper' | 'error'>('helper')
  const [allMakesModels, setAllMakesModels] = useState<Record<string, string[]>>(CAR_MAKES_MODELS)

  const canUseCloudSync = canUseCloudCabinet(user?.id)

  // ── Load on mount ──────────────────────────────────────────────────────────
  const loadCars = useRef<(() => void) | undefined>(undefined)
  useEffect(() => {
    let isMounted = true
    const doLoad = () => {
      loadCabinetCars({ userId: user?.id })
        .then(({ cars: storedCars, syncMode: nextSyncMode }) => {
          if (!isMounted) return
          const nextCars = storedCars.length > 0 ? storedCars : [createEmptyCabinetCar(1)]
          setCars(nextCars)
          setSelectedCarId((prev) => prev || (nextCars[0]?.id ?? ''))
          setSyncMode(nextSyncMode)
          setIsReady(true)
        })
        .catch(() => {
          if (!isMounted) return
          const fallbackCars = [createEmptyCabinetCar(1)]
          setCars(fallbackCars)
          setSelectedCarId((prev) => prev || fallbackCars[0].id)
          setSyncMode('local')
          setIsReady(true)
        })
    }
    loadCars.current = doLoad
    doLoad()
    return () => { isMounted = false }
  }, [copy.syncCloudReady, copy.syncLocalFallback, copy.syncLocalReady, user?.id])

  // ── Autosave with 2s debounce ──────────────────────────────────────────────
  const prevCarsRef = useRef<typeof cars | null>(null)
  useEffect(() => {
    if (!isReady) return
    if (prevCarsRef.current === cars) return
    prevCarsRef.current = cars

    const id = window.setTimeout(() => {
      setIsSaving(true)
      void saveCabinetCars(cars, { userId: user?.id })
        .then((nextSyncMode) => {
          setSyncMode(nextSyncMode)
        })
        .finally(() => setIsSaving(false))
    }, 2000)
    return () => window.clearTimeout(id)
  }, [cars, copy.syncCloudReady, copy.syncLocalFallback, isReady, user?.id])

  // ── Reset VIN message on car change ───────────────────────────────────────
  useEffect(() => {
    setVinMessage('')
    setVinMessageTone('helper')
  }, [selectedCarId])

  // ── Enrich makes/models from catalog ─────────────────────────────────────
  useEffect(() => {
    fetchCatalogCars().then((cards) => {
      const canonicalMap: Record<string, string> = {}
      for (const make of Object.keys(CAR_MAKES_MODELS)) {
        canonicalMap[make.toLowerCase()] = make
      }
      const rawAliases: Record<string, string> = {
        'mercedes benz': 'Mercedes-Benz', 'mercedes-benz': 'Mercedes-Benz',
        'vw': 'Volkswagen', 'land rover': 'Land Rover', 'alfa romeo': 'Alfa Romeo',
        'aston martin': 'Aston Martin', 'rolls royce': 'Rolls-Royce', 'rolls-royce': 'Rolls-Royce',
      }
      function normalizeMake(raw: string): string {
        const lower = raw.toLowerCase()
        if (rawAliases[lower]) return rawAliases[lower]
        if (canonicalMap[lower]) return canonicalMap[lower]
        return raw.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
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
        result[make] = Array.from(models).sort((a, b) => a.localeCompare(b))
      }
      setAllMakesModels(result)
    }).catch(() => setAllMakesModels(CAR_MAKES_MODELS))
  }, [])

  // ── Filtered + selected car (filteredCars must come first) ───────────────
  const filteredCars = useMemo(() => {
    const term = search.trim().toLowerCase()
    return [...cars]
      .filter((car) => statusFilter === 'all' || car.status === statusFilter)
      .filter((car) => {
        if (!term) return true
        return [car.title, car.make, car.model, car.vin, car.lotNumber, car.notes, car.description]
          .some((v) => v.toLowerCase().includes(term))
      })
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  }, [cars, search, statusFilter])

  const selectedCar = useMemo(
    () => cars.find((car) => car.id === selectedCarId) ?? filteredCars[0] ?? null,
    [cars, selectedCarId, filteredCars],
  )

  useEffect(() => {
    if (!selectedCar && filteredCars[0]) { setSelectedCarId(filteredCars[0].id); return }
    if (selectedCarId && cars.some((c) => c.id === selectedCarId)) return
    if (cars[0]) setSelectedCarId(cars[0].id)
  }, [cars, filteredCars, selectedCar, selectedCarId])

  useEffect(() => {
    if (!selectedCar) return
    const stockNumber = buildAutoStockNumber(selectedCar)
    const patch: Partial<CabinetCar> = {}
    if (!selectedCar.lotNumber) patch.lotNumber = buildAutoLotNumber(cars)
    if (selectedCar.stockNumber !== stockNumber) patch.stockNumber = stockNumber
    if (selectedCar.auction !== PLATFORM_SOURCE) patch.auction = PLATFORM_SOURCE
    if (Object.keys(patch).length > 0) patchSelectedCar(patch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCar?.id, selectedCar?.vin, selectedCar?.year, selectedCar?.lotNumber, selectedCar?.stockNumber, selectedCar?.auction])

  // ── Derived counts ─────────────────────────────────────────────────────────
  const duplicateVinExists = useMemo(() => {
    if (!selectedCar?.vin.trim()) return false
    const norm = selectedCar.vin.trim().toUpperCase()
    return cars.some((c) => c.id !== selectedCar.id && c.vin.trim().toUpperCase() === norm)
  }, [cars, selectedCar])

  // ── Options (memoized to avoid recomputing every render) ──────────────────
  const optionLocale = locale === 'uk' || locale === 'pl' ? locale : 'en'
  const selectFieldOptions = useMemo(() => buildSelectFieldOptions(PLATFORM_SOURCE), [])
  const getSelectOptionLabel = useMemo(() => buildGetSelectOptionLabel(optionLocale as 'en' | 'uk' | 'pl'), [optionLocale])
  const makeOptions = useMemo(() => Object.keys(allMakesModels).sort(), [allMakesModels])
  const availableModels = useMemo(
    () => (selectedCar?.make ? (allMakesModels[selectedCar.make] ?? []) : []),
    [allMakesModels, selectedCar?.make],
  )

  const statusEntries = Object.entries(copy.statusLabels) as Array<[CabinetCarStatus, string]>
  const publicationStatusEntries = Object.entries(copy.publicationStatusLabels) as Array<[CabinetPublicationStatus, string]>

  // ── Patch helper ───────────────────────────────────────────────────────────
  function patchSelectedCar(patch: Partial<CabinetCar>) {
    if (!selectedCar) return
    setCars((current) => current.map((c) =>
      c.id === selectedCar.id ? { ...c, ...patch, updatedAt: new Date().toISOString() } : c
    ))
  }

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleLogout = async () => {
    await signOut()
    window.location.href = lp(routePaths.login)
  }

  function handleAddCar() {
    const nextCar = createEmptyCabinetCar(cars.length + 1)
    setCars((current) => [nextCar, ...current])
    setSelectedCarId(nextCar.id)
  }

  async function handleDeleteCar() {
    if (!selectedCar) return
    if (canUseCloudSync) {
      const paths = selectedCar.photos.map((p) => p.storagePath).filter((p): p is string => Boolean(p))
      if (paths.length > 0) {
        try { await deleteCabinetPhotosFromSupabase(paths) } catch { setUploadError(copy.uploadErrorCloud) }
      }
    }
    const remaining = cars.filter((c) => c.id !== selectedCar.id)
    if (remaining.length === 0) {
      const next = createEmptyCabinetCar(1)
      setCars([next])
      setSelectedCarId(next.id)
      return
    }
    setCars(remaining)
    setSelectedCarId(remaining[0].id)
  }

  async function handleSaveNow() {
    if (!selectedCar) return
    setIsSaving(true)
    try {
      const nextSyncMode = await saveCabinetCars(cars, { userId: user?.id })
      setSyncMode(nextSyncMode)
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
    const withExpiry = initListingExpiry(updatedCar)
    const nextCars = cars.map((c) => c.id === selectedCar.id ? withExpiry : c)
    setCars(nextCars)
    setIsSaving(true)
    try {
      const nextSyncMode = await saveCabinetCars(nextCars, { userId: user?.id })
      setSyncMode(nextSyncMode)
    } finally {
      setIsSaving(false)
    }
  }

  async function handleRenewListing() {
    if (!selectedCar) return
    const renewed = renewListing(selectedCar)
    const nextCars = cars.map((c) => c.id === selectedCar.id ? renewed : c)
    setCars(nextCars)
    setIsSaving(true)
    try {
      const nextSyncMode = await saveCabinetCars(nextCars, { userId: user?.id })
      setSyncMode(nextSyncMode)
    } finally {
      setIsSaving(false)
    }
  }

  function handlePreviewListing() {
    if (!selectedCar) return
    const slug = selectedCar.publicSlug?.trim() || buildPublicSlug(selectedCar)
    window.open(lp(`${routePaths.car}/${slug}`), '_blank', 'noopener,noreferrer')
  }

  function handleFieldChange<Key extends keyof CabinetCar>(key: Key, value: CabinetCar[Key]) {
    if (key === 'vin') { setVinMessage(''); setVinMessageTone('helper') }

    if (key === 'publicationStatus' && value === 'published' && selectedCar) {
      const now = new Date().toISOString()
      const patch: Partial<CabinetCar> = { [key]: value }
      if (!selectedCar.publicSlug?.trim()) patch.publicSlug = buildPublicSlug(selectedCar)
      if (!selectedCar.publishedAt) patch.publishedAt = now
      if (!selectedCar.publicTitle.trim()) {
        patch.publicTitle = [selectedCar.year, selectedCar.make, selectedCar.model].filter(Boolean).join(' ').trim() || selectedCar.title
      }
      patch.auction = PLATFORM_SOURCE
      const withExpiry = initListingExpiry({ ...selectedCar, ...patch })
      patch.expiresAt = withExpiry.expiresAt
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

  async function handleVinBlur() {
    if (!selectedCar) return
    const normalizedVin = normalizeVin(selectedCar.vin)
    if (!canDecodeVin(normalizedVin)) return

    setIsDecodingVin(true)
    setVinMessage(copy.vinDecodeLoading)
    setVinMessageTone('helper')
    try {
      const decoded = await decodeVin(normalizedVin)
      const nextPatch: Partial<CabinetCar> = { vin: decoded.normalizedVin }
      ;(Object.keys(decoded.fields) as Array<keyof CabinetCar>).forEach((k) => {
        const v = decoded.fields[k]
        if (typeof v !== 'string' || !v) return
        const cur = String(selectedCar[k] ?? '').trim()
        const replaceTitle = k === 'title' && (!cur || cur.startsWith('Car '))
        if (!cur || replaceTitle) nextPatch[k] = v as never
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

  async function handlePhotoUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? [])
    event.target.value = ''
    setUploadError('')
    if (!selectedCar || files.length === 0) return
    if (selectedCar.photos.length + files.length > 20) { setUploadError(copy.uploadErrorTooMany); return }
    if (files.some((f) => f.size > CABINET_PHOTO_MAX_FILE_BYTES)) { setUploadError(copy.uploadErrorTooLarge); return }

    setIsUploading(true)
    try {
      const newPhotos = []
      for (const file of files) {
        const asset = await compressPhotoAsset(file, { maxDimension: 1600, targetBytes: 400 * 1024 })
        if (canUseCloudSync && user?.id) {
          newPhotos.push(uploadCabinetPhotoToSupabase(user.id, selectedCar.id, asset))
        } else {
          newPhotos.push(createLocalCabinetPhoto(asset))
        }
      }
      const resolved = await Promise.all(newPhotos)
      patchSelectedCar({ photos: [...selectedCar.photos, ...resolved] })
    } catch {
      setUploadError(copy.uploadErrorCloud)
    } finally {
      setIsUploading(false)
    }
  }

  async function handlePhotoRemove(photoId: string) {
    if (!selectedCar) return
    const photo = selectedCar.photos.find((p) => p.id === photoId)
    if (photo?.storagePath && canUseCloudSync) {
      try { await deleteCabinetPhotosFromSupabase([photo.storagePath]) } catch { /* ignore */ }
    }
    patchSelectedCar({ photos: selectedCar.photos.filter((p) => p.id !== photoId) })
  }

  function handlePhotoSetPrimary(photoId: string) {
    if (!selectedCar) return
    const idx = selectedCar.photos.findIndex((p) => p.id === photoId)
    if (idx <= 0) return
    const next = [...selectedCar.photos]
    const [photo] = next.splice(idx, 1)
    next.unshift(photo)
    patchSelectedCar({ photos: next })
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="cb-page">
      {/* Top navigation bar */}
      <header className="cb-topbar">
        <div className="cb-topbar-left">
          <a href={lp('/')} className="cb-topbar-logo">BID BIDDERS</a>
          <span className="cb-topbar-sep">/</span>
          <span className="cb-topbar-title">{t('footerCabinet')}</span>
        </div>

        <nav className="cb-tabs">
          <button
            type="button"
            className={`cb-tab ${activeTab === 'cars' ? 'cb-tab-active' : ''}`}
            onClick={() => setActiveTab('cars')}
          >
            {t('cabinetTabCars')}
            <span className="cb-tab-count">{cars.length}</span>
          </button>
          <button
            type="button"
            className={`cb-tab ${activeTab === 'profile' ? 'cb-tab-active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            {t('cabinetTabProfile')}
          </button>
        </nav>

        <div className="cb-topbar-right">
          <span className={`cb-sync-badge ${isSaving ? 'cb-sync-saving' : ''}`}>
            {isSaving ? copy.syncSaving : syncMode === 'cloud' ? '☁ saved' : '💾 local'}
          </span>
          {activeTab === 'cars' && (
            <button type="button" className="cb-btn-add" onClick={handleAddCar}>
              + {copy.addCar}
            </button>
          )}
          <div className="cb-user-menu">
            <div className="cb-user-avatar">
              {(user?.name?.[0] ?? user?.email?.[0] ?? '?').toUpperCase()}
            </div>
            <span className="cb-user-name">{user?.name ?? user?.email}</span>
            <button type="button" className="cb-logout-btn" onClick={handleLogout}>
              {t('cabinetLogout')}
            </button>
          </div>
        </div>
      </header>

      {/* Page body */}
      <div className="cb-body">
        {activeTab === 'profile' ? (
          <div style={{ gridColumn: '1 / -1' }}>
            <CabinetProfilePanel />
          </div>
        ) : (
          <>
            {/* Sidebar */}
            <CabinetCarList
              filteredCars={filteredCars}
              selectedCar={selectedCar}
              search={search}
              statusFilter={statusFilter}
              statusEntries={statusEntries}
              copy={copy}
              locale={locale}
              onSearch={setSearch}
              onStatusFilter={setStatusFilter}
              onSelect={setSelectedCarId}
            />

            {/* Main panel */}
            <div className="cb-main">
              {!selectedCar && (
                <div className="cb-panel" style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                  {copy.noSelection}
                </div>
              )}
              {selectedCar && (
                <CabinetEditorPanel
                  selectedCar={selectedCar}
                  cars={cars}
                  copy={copy}
                  locale={locale}
                  isSaving={isSaving}
                  isUploading={isUploading}
                  uploadError={uploadError}
                  isDecodingVin={isDecodingVin}
                  vinMessage={vinMessage}
                  vinMessageTone={vinMessageTone}
                  duplicateVinExists={duplicateVinExists}
                  statusEntries={statusEntries}
                  publicationStatusEntries={publicationStatusEntries}
                  makeOptions={makeOptions}
                  yearOptions={YEAR_OPTIONS}
                  availableModels={availableModels}
                  selectFieldOptions={selectFieldOptions}
                  getSelectOptionLabel={getSelectOptionLabel}
                  onFieldChange={handleFieldChange}
                  onVinBlur={handleVinBlur}
                  onPhotoUpload={handlePhotoUpload}
                  onPhotoRemove={handlePhotoRemove}
                  onPhotoSetPrimary={handlePhotoSetPrimary}
                  onDelete={handleDeleteCar}
                  onSave={handleSaveNow}
                  onPublish={handlePublishNow}
                  onRenew={handleRenewListing}
                  onPreview={handlePreviewListing}
                  userId={user?.id}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
