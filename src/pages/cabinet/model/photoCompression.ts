import type { CabinetPhoto } from './cabinetTypes'

type CompressionOptions = {
  maxDimension: number
  targetBytes: number
}

export type CompressedPhotoAsset = {
  id: string
  name: string
  blob: Blob
  sizeKb: number
  width: number
  height: number
}

function readImageFile(file: File) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(reader.error)
    reader.onload = () => {
      const image = new Image()
      image.onerror = () => reject(new Error('Failed to decode image'))
      image.onload = () => resolve(image)
      image.src = String(reader.result)
    }
    reader.readAsDataURL(file)
  })
}

function canvasToBlob(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to encode image'))
        return
      }
      resolve(blob)
    }, 'image/webp', quality)
  })
}

function blobToDataUrl(blob: Blob) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(reader.error)
    reader.onload = () => resolve(String(reader.result))
    reader.readAsDataURL(blob)
  })
}

export async function compressPhotoAsset(file: File, options: CompressionOptions): Promise<CompressedPhotoAsset> {
  const image = await readImageFile(file)
  const ratio = Math.min(1, options.maxDimension / Math.max(image.width, image.height))
  const targetWidth = Math.max(1, Math.round(image.width * ratio))
  const targetHeight = Math.max(1, Math.round(image.height * ratio))

  const canvas = document.createElement('canvas')
  canvas.width = targetWidth
  canvas.height = targetHeight

  const context = canvas.getContext('2d')
  if (!context) {
    throw new Error('Canvas is not supported')
  }

  context.drawImage(image, 0, 0, targetWidth, targetHeight)

  let quality = 0.82
  let blob = await canvasToBlob(canvas, quality)

  while (blob.size > options.targetBytes && quality > 0.45) {
    quality -= 0.08
    blob = await canvasToBlob(canvas, quality)
  }

  return {
    id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `photo-${Date.now()}`,
    name: file.name.replace(/\.[^.]+$/, '') + '.webp',
    blob,
    sizeKb: Math.max(1, Math.round(blob.size / 1024)),
    width: targetWidth,
    height: targetHeight,
  }
}

export async function createLocalCabinetPhoto(asset: CompressedPhotoAsset): Promise<CabinetPhoto> {
  return {
    id: asset.id,
    name: asset.name,
    url: await blobToDataUrl(asset.blob),
    sizeKb: asset.sizeKb,
    width: asset.width,
    height: asset.height,
  }
}

export async function compressPhotoFile(file: File, options: CompressionOptions): Promise<CabinetPhoto> {
  const asset = await compressPhotoAsset(file, options)
  return createLocalCabinetPhoto(asset)
}