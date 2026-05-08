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
    <div className="cabinet-field">
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
  cars,
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
    <section className="cabinet-panel cabinet-editor">
      {/* Editor header */}
      <div className="cabinet-editor-head">
        <div>
          <span className="cabinet-status">{copy.statusLabels[selectedCar.status]}</span>
          <h2>{[selectedCar.year, selectedCar.make, selectedCar.model].filter(Boolean).join(' ').trim() || selectedCar.title}</h2>
        </div>
        <div className="cabinet-editor-actions">
          <button className="auth-btn auth-btn-secondary" onClick={onDelete} type="button">{copy.deleteCar}</button>
        </div>
      </div>

      <div className="cabinet-sections">

        {/* ── Identity ────────────────────────────────────────────────── */}
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
              <input id="car-title" value={selectedCar.title} onChange={(e) => onFieldChange('title', e.target.value)} />
            </div>
            <div className="cabinet-field">
              <label htmlFor="car-year">{copy.fieldYear}</label>
              <select id="car-year" value={selectedCar.year} onChange={(e) => onFieldChange('year', e.target.value)}>
                <option value="">-</option>
                {yearOptions.map((year) => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
            <div className="cabinet-field">
              <label htmlFor="car-make">{copy.fieldMake}</label>
              <select id="car-make" value={selectedCar.make} onChange={(e) => onFieldChange('make', e.target.value)}>
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
                onChange={(e) => onFieldChange('model', e.target.value)}
              >
                <option value="">-</option>
                {availableModels.map((model) => <option key={model} value={model}>{model}</option>)}
              </select>
            </div>
            <div className="cabinet-field">
              <label htmlFor="car-vin">{copy.fieldVin}</label>
              <input
                id="car-vin"
                value={selectedCar.vin}
                onBlur={onVinBlur}
                onChange={(e) => onFieldChange('vin', e.target.value.toUpperCase())}
              />
              {duplicateVinExists && <p className="cabinet-warning">{copy.duplicateVinWarning}</p>}
              {isDecodingVin && <p className="cabinet-helper">{copy.vinDecodeLoading}</p>}
              {!isDecodingVin && vinMessage && (
                <p className={vinMessageTone === 'error' ? 'cabinet-error' : 'cabinet-helper'}>{vinMessage}</p>
              )}
            </div>
            <div className="cabinet-field">
              <label htmlFor="car-status">{copy.fieldStatus}</label>
              <select id="car-status" value={selectedCar.status} onChange={(e) => onFieldChange('status', e.target.value as CabinetCarStatus)}>
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
              <input id="car-source" value={selectedCar.sourceUrl} onChange={(e) => onFieldChange('sourceUrl', e.target.value)} />
            </div>
            <div className="cabinet-field">
              <label htmlFor="car-auction">{copy.fieldAuction}</label>
              <select disabled id="car-auction" value={selectedCar.auction} onChange={(e) => onFieldChange('auction', e.target.value)}>
                <option value="">-</option>
                {(selectFieldOptions.auction ?? []).map((a) => (
                  <option key={a} value={a}>{getSelectOptionLabel('auction', a)}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* ── Specs ───────────────────────────────────────────────────── */}
        <section className="cabinet-section">
          <div className="cabinet-section-head">
            <div>
              <h3>{copy.sectionSpecs}</h3>
              <p>{copy.fieldGeneration}, {copy.fieldEngineVolume}, {copy.fieldDrivetrain}, {copy.fieldTransmission}</p>
            </div>
          </div>
          <div className="cabinet-form-grid-3">
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
        </section>

        {/* ── Logistics ───────────────────────────────────────────────── */}
        <section className="cabinet-section">
          <div className="cabinet-section-head">
            <div>
              <h3>{copy.sectionLogistics}</h3>
              <p>{copy.fieldPurchasePriceUsd}, {copy.fieldRepairEstimateUsd}, {copy.fieldCustomsAndFeesUsd}</p>
            </div>
          </div>
          <div className="cabinet-form-grid-3">
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
        </section>

        {/* ── Condition ───────────────────────────────────────────────── */}
        <section className="cabinet-section">
          <div className="cabinet-section-head">
            <div>
              <h3>{copy.sectionCondition}</h3>
              <p>{copy.fieldDamagePrimary}, {copy.fieldDamageSecondary}, {copy.fieldKeysStatus}</p>
            </div>
          </div>
          <div className="cabinet-form-grid">
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
        </section>

        {/* ── Publication ─────────────────────────────────────────────── */}
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
                onChange={(e) => onFieldChange('publicationStatus', e.target.value as CabinetPublicationStatus)}
              >
                {publicationStatusEntries.map(([status, label]) => (
                  <option key={status} value={status}>{label}</option>
                ))}
              </select>
              <button className="auth-btn auth-btn-secondary cabinet-preview-btn" onClick={onPreview} type="button">
                {copy.previewListing}
              </button>
            </div>
            <div className="cabinet-field">
              <label htmlFor="public-title">{copy.fieldPublicTitle}</label>
              <input id="public-title" value={selectedCar.publicTitle} onChange={(e) => onFieldChange('publicTitle', e.target.value)} />
            </div>
            <div className="cabinet-field">
              <label htmlFor="public-slug">{copy.fieldPublicSlug}</label>
              <input id="public-slug" value={selectedCar.publicSlug} onChange={(e) => onFieldChange('publicSlug', e.target.value)} />
            </div>
            <div className="cabinet-field">
              <label htmlFor="public-price-usd">{copy.fieldPublicPriceUsd}</label>
              <input id="public-price-usd" value={selectedCar.publicPriceUsd} onChange={(e) => onFieldChange('publicPriceUsd', e.target.value)} />
            </div>
            <div className="cabinet-field">
              <label htmlFor="public-estimate-usd">{copy.fieldPublicEstimateUsd}</label>
              <input id="public-estimate-usd" value={selectedCar.publicEstimateUsd} onChange={(e) => onFieldChange('publicEstimateUsd', e.target.value)} />
            </div>
            <div className="cabinet-field">
              <label htmlFor="public-badge">{copy.fieldPublicBadge}</label>
              <input id="public-badge" value={selectedCar.publicBadge} onChange={(e) => onFieldChange('publicBadge', e.target.value)} />
            </div>
            <div className="cabinet-field-wide">
              <label htmlFor="public-description">{copy.fieldPublicDescription}</label>
              <textarea id="public-description" value={selectedCar.publicDescription} onChange={(e) => onFieldChange('publicDescription', e.target.value)} />
            </div>
            <label className="cabinet-field cabinet-checkbox-field" htmlFor="public-hot-offer">
              <span>{copy.fieldPublicHotOffer}</span>
              <input
                id="public-hot-offer"
                checked={selectedCar.publicHotOffer}
                onChange={(e) => onFieldChange('publicHotOffer', e.target.checked)}
                type="checkbox"
              />
            </label>
          </div>
        </section>

        {/* ── Gallery ─────────────────────────────────────────────────── */}
        <section className="cabinet-section">
          <div className="cabinet-section-head">
            <div>
              <h3>{copy.sectionGallery}</h3>
              <p>{copy.uploadHelp}</p>
            </div>
            <div className="cabinet-status">{selectedCar.photos.length}/{CABINET_CAR_MAX_PHOTOS}</div>
          </div>

          <label className="cabinet-upload-label">
            <input accept="image/*" multiple onChange={onPhotoUpload} type="file" />
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
                  <button className="cabinet-photo-primary" onClick={() => onPhotoSetPrimary(photo.id)} type="button">
                    {copy.setPrimaryPhoto}
                  </button>
                )}
                <button className="cabinet-photo-remove" onClick={() => onPhotoRemove(photo.id)} type="button">
                  {copy.removePhoto}
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ── Notes ───────────────────────────────────────────────────── */}
        <section className="cabinet-section">
          <div className="cabinet-section-head">
            <div>
              <h3>{copy.sectionNotes}</h3>
              <p>{copy.fieldDescription}, {copy.fieldServiceHistory}, {copy.fieldNotes}</p>
            </div>
          </div>
          <div className="cabinet-form-grid">
            {(
              [
                ['description', copy.fieldDescription],
                ['serviceHistory', copy.fieldServiceHistory],
                ['modifications', copy.fieldModifications],
                ['notes', copy.fieldNotes],
              ] as Array<[keyof CabinetCar, string]>
            ).map(([key, label]) => (
              <div className="cabinet-field-wide" key={key}>
                <label htmlFor={key as string}>{label}</label>
                <textarea
                  id={key as string}
                  value={selectedCar[key] as string}
                  onChange={(e) => onFieldChange(key, e.target.value as never)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Expiry banner + actions ──────────────────────────────────── */}
        {selectedCar.publicationStatus === 'published' && (
          <div className={`cabinet-expiry-banner ${isListingExpired(selectedCar) ? 'cabinet-expiry-banner--expired' : 'cabinet-expiry-banner--warning'}`}>
            <span>{expiryLabel(selectedCar, locale as 'pl' | 'uk' | 'en')}</span>
            {shouldShowRenewButton(selectedCar) && (
              <button
                className="auth-btn auth-btn-primary cabinet-renew-btn"
                onClick={onRenew}
                type="button"
                disabled={isSaving}
              >
                {copy.renewListing}
              </button>
            )}
          </div>
        )}

        <div className="cabinet-bottom-actions">
          <button className="auth-btn auth-btn-secondary" onClick={onSave} type="button">{copy.saveCar}</button>
          <button className="auth-btn auth-btn-primary" onClick={onPublish} type="button">{copy.publishCar}</button>
        </div>

      </div>
    </section>
  )
}
