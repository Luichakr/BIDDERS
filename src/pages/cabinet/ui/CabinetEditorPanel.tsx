import type { ChangeEvent } from 'react'
import { expiryLabel, isListingExpired, shouldShowRenewButton } from '../model/listingExpiry'
import { CABINET_CAR_MAX_PHOTOS, type CabinetCar, type CabinetCarStatus, type CabinetPublicationStatus } from '../model/cabinetTypes'
import type { CabinetCopy } from './cabinetContent'

type Props = {
  selectedCar: CabinetCar
  cars: CabinetCar[]
  copy: CabinetCopy
  locale: string
  isSaving: boolean
  isUploading: boolean
  uploadError: string
  isDecodingVin: boolean
  vinMessage: string
  vinMessageTone: 'helper' | 'error'
  duplicateVinExists: boolean
  statusEntries: Array<[CabinetCarStatus, string]>
  publicationStatusEntries: Array<[CabinetPublicationStatus, string]>
  makeOptions: string[]
  yearOptions: string[]
  availableModels: string[]
  selectFieldOptions: Partial<Record<keyof CabinetCar, string[]>>
  getSelectOptionLabel: (fieldKey: keyof CabinetCar, value: string) => string
  onFieldChange: <K extends keyof CabinetCar>(key: K, value: CabinetCar[K]) => void
  onVinBlur: () => void
  onPhotoUpload: (event: ChangeEvent<HTMLInputElement>) => void
  onPhotoRemove: (id: string) => void
  onPhotoSetPrimary: (id: string) => void
  onDelete: () => void
  onSave: () => void
  onPublish: () => void
  onRenew: () => void
  onPreview: () => void
}

type FieldRowProps = {
  fieldKey: keyof CabinetCar
  label: string
  car: CabinetCar
  selectFieldOptions: Partial<Record<keyof CabinetCar, string[]>>
  getSelectOptionLabel: (fieldKey: keyof CabinetCar, value: string) => string
  onFieldChange: <K extends keyof CabinetCar>(key: K, value: CabinetCar[K]) => void
  disabled?: boolean
}

function FieldRow({ fieldKey, label, car, selectFieldOptions, getSelectOptionLabel, onFieldChange, disabled }: FieldRowProps) {
  const options = selectFieldOptions[fieldKey]
  return (
    <div className="cb-field">
      <label htmlFor={fieldKey}>{label}</label>
      {options ? (
        <select
          id={fieldKey}
          disabled={disabled}
          value={car[fieldKey] as string}
          onChange={(e) => onFieldChange(fieldKey, e.target.value as never)}
        >
          <option value="">-</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{getSelectOptionLabel(fieldKey, opt)}</option>
          ))}
        </select>
      ) : (
        <input
          id={fieldKey}
          value={car[fieldKey] as string}
          onChange={(e) => onFieldChange(fieldKey, e.target.value as never)}
        />
      )}
    </div>
  )
}

export function CabinetEditorPanel({
  selectedCar,
  cars: _cars,
  copy,
  locale,
  isSaving,
  isUploading,
  uploadError,
  isDecodingVin,
  vinMessage,
  vinMessageTone,
  duplicateVinExists,
  statusEntries,
  publicationStatusEntries,
  makeOptions,
  yearOptions,
  availableModels,
  selectFieldOptions,
  getSelectOptionLabel,
  onFieldChange,
  onVinBlur,
  onPhotoUpload,
  onPhotoRemove,
  onPhotoSetPrimary,
  onDelete,
  onSave,
  onPublish,
  onRenew,
  onPreview,
}: Props) {
  return (
    <div className="cb-panel">
      {/* Editor header */}
      <div className="cb-panel-head">
        <div>
          <h2>{[selectedCar.year, selectedCar.make, selectedCar.model].filter(Boolean).join(' ').trim() || selectedCar.title}</h2>
          <p className="cb-panel-head-sub">{copy.statusLabels[selectedCar.status]}</p>
        </div>
        <div className="cb-panel-actions">
          <button className="cb-btn cb-btn-danger" onClick={onDelete} type="button">{copy.deleteCar}</button>
        </div>
      </div>

      <div className="cb-sections">

        {/* ── Identity ────────────────────────────────────────────────── */}
        <div className="cb-section">
          <div className="cb-section-title">{copy.sectionIdentity}</div>

          <div className="cb-grid-2">
            <div className="cb-field">
              <label htmlFor="car-title">{copy.fieldTitle}</label>
              <input id="car-title" value={selectedCar.title} onChange={(e) => onFieldChange('title', e.target.value)} />
            </div>
            <div className="cb-field">
              <label htmlFor="car-year">{copy.fieldYear}</label>
              <select id="car-year" value={selectedCar.year} onChange={(e) => onFieldChange('year', e.target.value)}>
                <option value="">-</option>
                {yearOptions.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
            <div className="cb-field">
              <label htmlFor="car-make">{copy.fieldMake}</label>
              <select id="car-make" value={selectedCar.make} onChange={(e) => onFieldChange('make', e.target.value)}>
                <option value="">-</option>
                {makeOptions.map((make) => <option key={make} value={make}>{make}</option>)}
              </select>
            </div>
            <div className="cb-field">
              <label htmlFor="car-model">{copy.fieldModel}</label>
              <select
                id="car-model"
                disabled={!selectedCar.make}
                value={selectedCar.model}
                onChange={(e) => onFieldChange('model', e.target.value)}
              >
                <option value="">-</option>
                {availableModels.map((model) => <option key={model} value={model}>{model}</option>)}
              </select>
            </div>
            <div className="cb-field">
              <label htmlFor="car-vin">{copy.fieldVin}</label>
              <input
                id="car-vin"
                value={selectedCar.vin}
                onBlur={onVinBlur}
                onChange={(e) => onFieldChange('vin', e.target.value.toUpperCase())}
              />
              {duplicateVinExists && <p className="cb-field-hint cb-field-hint-warn">{copy.duplicateVinWarning}</p>}
              {isDecodingVin && <p className="cb-field-hint">{copy.vinDecodeLoading}</p>}
              {!isDecodingVin && vinMessage && (
                <p className={vinMessageTone === 'error' ? 'cb-field-hint cb-field-hint-err' : 'cb-field-hint'}>{vinMessage}</p>
              )}
            </div>
            <div className="cb-field">
              <label htmlFor="car-status">{copy.fieldStatus}</label>
              <select id="car-status" value={selectedCar.status} onChange={(e) => onFieldChange('status', e.target.value as CabinetCarStatus)}>
                {statusEntries.map(([status, label]) => <option key={status} value={status}>{label}</option>)}
              </select>
            </div>
            <div className="cb-field">
              <label htmlFor="car-lot">{copy.fieldLotNumber}</label>
              <input id="car-lot" readOnly value={selectedCar.lotNumber} />
              <p className="cb-field-hint">{copy.autoGeneratedHint}</p>
            </div>
            <div className="cb-field">
              <label htmlFor="car-stock">{copy.fieldStockNumber}</label>
              <input id="car-stock" readOnly value={selectedCar.stockNumber} />
              <p className="cb-field-hint">{copy.autoGeneratedHint}</p>
            </div>
            <div className="cb-field">
              <label htmlFor="car-source">{copy.fieldSourceUrl}</label>
              <input id="car-source" value={selectedCar.sourceUrl} onChange={(e) => onFieldChange('sourceUrl', e.target.value)} />
            </div>
            <div className="cb-field">
              <label htmlFor="car-auction">{copy.fieldAuction}</label>
              <select disabled id="car-auction" value={selectedCar.auction} onChange={(e) => onFieldChange('auction', e.target.value)}>
                <option value="">-</option>
                {(selectFieldOptions.auction ?? []).map((a) => (
                  <option key={a} value={a}>{getSelectOptionLabel('auction', a)}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── Specs ───────────────────────────────────────────────────── */}
        <div className="cb-section">
          <div className="cb-section-title">{copy.sectionSpecs}</div>
          <div className="cb-grid-3">
            {(
              [
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
              ] as Array<[keyof CabinetCar, string]>
            ).map(([key, label]) => (
              <FieldRow
                key={key}
                fieldKey={key}
                label={label}
                car={selectedCar}
                selectFieldOptions={selectFieldOptions}
                getSelectOptionLabel={getSelectOptionLabel}
                onFieldChange={onFieldChange}
              />
            ))}
          </div>
        </div>

        {/* ── Logistics ───────────────────────────────────────────────── */}
        <div className="cb-section">
          <div className="cb-section-title">{copy.sectionLogistics}</div>
          <div className="cb-grid-3">
            {(
              [
                ['countryOfOrigin', copy.fieldCountryOfOrigin],
                ['importDestination', copy.fieldImportDestination],
                ['ownershipType', copy.fieldOwnershipType],
                ['purchasePriceUsd', copy.fieldPurchasePriceUsd],
                ['targetBudgetUsd', copy.fieldTargetBudgetUsd],
                ['customsAndFeesUsd', copy.fieldCustomsAndFeesUsd],
                ['sellerName', copy.fieldSellerName],
                ['sellerPhone', copy.fieldSellerPhone],
                ['repairEstimateUsd', copy.fieldRepairEstimateUsd],
              ] as Array<[keyof CabinetCar, string]>
            ).map(([key, label]) => (
              <FieldRow
                key={key}
                fieldKey={key}
                label={label}
                car={selectedCar}
                selectFieldOptions={selectFieldOptions}
                getSelectOptionLabel={getSelectOptionLabel}
                onFieldChange={onFieldChange}
              />
            ))}
          </div>
        </div>

        {/* ── Condition ───────────────────────────────────────────────── */}
        <div className="cb-section">
          <div className="cb-section-title">{copy.sectionCondition}</div>
          <div className="cb-grid-2">
            {(
              [
                ['keysStatus', copy.fieldKeysStatus],
                ['startCondition', copy.fieldStartCondition],
                ['damagePrimary', copy.fieldDamagePrimary],
                ['damageSecondary', copy.fieldDamageSecondary],
              ] as Array<[keyof CabinetCar, string]>
            ).map(([key, label]) => (
              <FieldRow
                key={key}
                fieldKey={key}
                label={label}
                car={selectedCar}
                selectFieldOptions={selectFieldOptions}
                getSelectOptionLabel={getSelectOptionLabel}
                onFieldChange={onFieldChange}
              />
            ))}
          </div>
        </div>

        {/* ── Publication ─────────────────────────────────────────────── */}
        <div className="cb-section">
          <div className="cb-section-title">{copy.sectionPublication}</div>
          <div className="cb-grid-2">
            <div className="cb-field">
              <label htmlFor="publication-status">{copy.fieldPublicationStatus}</label>
              <select
                id="publication-status"
                value={selectedCar.publicationStatus}
                onChange={(e) => onFieldChange('publicationStatus', e.target.value as CabinetPublicationStatus)}
              >
                {publicationStatusEntries.map(([status, label]) => (
                  <option key={status} value={status}>{label}</option>
                ))}
              </select>
              <button className="cb-btn cb-btn-ghost" onClick={onPreview} type="button" style={{ marginTop: '6px' }}>
                {copy.previewListing}
              </button>
            </div>
            <div className="cb-field">
              <label htmlFor="public-title">{copy.fieldPublicTitle}</label>
              <input id="public-title" value={selectedCar.publicTitle} onChange={(e) => onFieldChange('publicTitle', e.target.value)} />
            </div>
            <div className="cb-field">
              <label htmlFor="public-slug">{copy.fieldPublicSlug}</label>
              <input id="public-slug" value={selectedCar.publicSlug} onChange={(e) => onFieldChange('publicSlug', e.target.value)} />
            </div>
            <div className="cb-field">
              <label htmlFor="public-price-usd">{copy.fieldPublicPriceUsd}</label>
              <input id="public-price-usd" value={selectedCar.publicPriceUsd} onChange={(e) => onFieldChange('publicPriceUsd', e.target.value)} />
            </div>
            <div className="cb-field">
              <label htmlFor="public-estimate-usd">{copy.fieldPublicEstimateUsd}</label>
              <input id="public-estimate-usd" value={selectedCar.publicEstimateUsd} onChange={(e) => onFieldChange('publicEstimateUsd', e.target.value)} />
            </div>
            <div className="cb-field">
              <label htmlFor="public-badge">{copy.fieldPublicBadge}</label>
              <input id="public-badge" value={selectedCar.publicBadge} onChange={(e) => onFieldChange('publicBadge', e.target.value)} />
            </div>
            <div className="cb-field cb-grid-full">
              <label htmlFor="public-description">{copy.fieldPublicDescription}</label>
              <textarea id="public-description" value={selectedCar.publicDescription} onChange={(e) => onFieldChange('publicDescription', e.target.value)} />
            </div>
            <label className="cb-field" htmlFor="public-hot-offer" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                id="public-hot-offer"
                checked={selectedCar.publicHotOffer}
                onChange={(e) => onFieldChange('publicHotOffer', e.target.checked)}
                type="checkbox"
                style={{ width: 'auto' }}
              />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#475569' }}>{copy.fieldPublicHotOffer}</span>
            </label>
          </div>
        </div>

        {/* ── Gallery ─────────────────────────────────────────────────── */}
        <div className="cb-section">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div className="cb-section-title" style={{ margin: 0 }}>{copy.sectionGallery}</div>
            <span className="cb-field-hint">{selectedCar.photos.length}/{CABINET_CAR_MAX_PHOTOS}</span>
          </div>

          <div className="cb-photo-grid">
            {selectedCar.photos.map((photo, index) => (
              <div className="cb-photo-item" key={photo.id}>
                <img alt={photo.name} src={photo.url} />
                <div className="cb-photo-actions">
                  {index !== 0 && (
                    <button className="cb-photo-btn cb-photo-btn-pin" onClick={() => onPhotoSetPrimary(photo.id)} type="button" title={copy.setPrimaryPhoto}>★</button>
                  )}
                  {index === 0 && (
                    <button className="cb-photo-btn cb-photo-btn-pin cb-photo-btn-pin-on" type="button" title={copy.primaryPhotoBadge}>★</button>
                  )}
                  <button className="cb-photo-btn cb-photo-btn-del" onClick={() => onPhotoRemove(photo.id)} type="button" title={copy.removePhoto}>✕</button>
                </div>
              </div>
            ))}
            {selectedCar.photos.length < CABINET_CAR_MAX_PHOTOS && (
              <label className="cb-photo-upload">
                <input accept="image/*" multiple onChange={onPhotoUpload} type="file" />
                + {copy.addPhoto}
              </label>
            )}
          </div>

          {isUploading && <p className="cb-field-hint" style={{ marginTop: '8px' }}>{copy.uploadProcessing}</p>}
          {uploadError && <p className="cb-field-hint cb-field-hint-err" style={{ marginTop: '8px' }}>{uploadError}</p>}
        </div>

        {/* ── Notes ───────────────────────────────────────────────────── */}
        <div className="cb-section">
          <div className="cb-section-title">{copy.sectionNotes}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(
              [
                ['description', copy.fieldDescription],
                ['serviceHistory', copy.fieldServiceHistory],
                ['modifications', copy.fieldModifications],
                ['notes', copy.fieldNotes],
              ] as Array<[keyof CabinetCar, string]>
            ).map(([key, label]) => (
              <div className="cb-field" key={key}>
                <label htmlFor={key as string}>{label}</label>
                <textarea
                  id={key as string}
                  value={selectedCar[key] as string}
                  onChange={(e) => onFieldChange(key, e.target.value as never)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Expiry banner + actions ──────────────────────────────────── */}
        {selectedCar.publicationStatus === 'published' && (
          <div className="cb-section">
            <div className={`cb-expiry-warn ${isListingExpired(selectedCar) ? 'cb-expiry-exp' : ''}`}>
              <span className="cb-expiry-msg">{expiryLabel(selectedCar, locale as 'pl' | 'uk' | 'en')}</span>
              {shouldShowRenewButton(selectedCar) && (
                <button
                  className="cb-btn cb-btn-primary"
                  onClick={onRenew}
                  type="button"
                  disabled={isSaving}
                >
                  {copy.renewListing}
                </button>
              )}
            </div>
          </div>
        )}

      </div>

      <div className="cb-panel-footer">
        <button className="cb-btn" onClick={onSave} type="button">{copy.saveCar}</button>
        <button className="cb-btn cb-btn-primary" onClick={onPublish} type="button">{copy.publishCar}</button>
      </div>
    </div>
  )
}
