import type { CabinetCar } from './cabinetTypes'
import { canUseCloudCabinet, loadCabinetCarsFromSupabase, saveCabinetCarsToSupabase } from './cabinetSupabase'

const DB_NAME = 'bidbidders-cabinet'
const STORE_NAME = 'workspace'
const RECORD_ID = 'garage'

export type CabinetSyncMode = 'local' | 'cloud'

type CabinetStoreOptions = {
  userId?: string | null
}

type GarageRecord = {
  id: string
  cars: CabinetCar[]
}

function openDb() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1)

    request.onerror = () => reject(request.error)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
    request.onsuccess = () => resolve(request.result)
  })
}

async function loadCabinetCarsFromIndexedDb(): Promise<CabinetCar[]> {
  if (typeof window === 'undefined' || !window.indexedDB) return []

  const db = await openDb()

  return new Promise<CabinetCar[]>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readonly')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.get(RECORD_ID)

    request.onerror = () => reject(request.error)
    request.onsuccess = () => {
      const record = request.result as GarageRecord | undefined
      resolve(Array.isArray(record?.cars) ? record.cars : [])
    }

    transaction.oncomplete = () => db.close()
    transaction.onerror = () => reject(transaction.error)
  })
}

async function saveCabinetCarsToIndexedDb(cars: CabinetCar[]): Promise<void> {
  if (typeof window === 'undefined' || !window.indexedDB) return

  const db = await openDb()

  return new Promise<void>((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, 'readwrite')
    const store = transaction.objectStore(STORE_NAME)
    const request = store.put({ id: RECORD_ID, cars } satisfies GarageRecord)

    request.onerror = () => reject(request.error)
    transaction.oncomplete = () => {
      db.close()
      resolve()
    }
    transaction.onerror = () => reject(transaction.error)
  })
}

export async function loadCabinetCars(options: CabinetStoreOptions = {}): Promise<{ cars: CabinetCar[]; syncMode: CabinetSyncMode }> {
  const localCars = await loadCabinetCarsFromIndexedDb()

  if (!canUseCloudCabinet(options.userId)) {
    return {
      cars: localCars,
      syncMode: 'local',
    }
  }

  try {
    const cloudCars = await loadCabinetCarsFromSupabase(String(options.userId))

    if (cloudCars.length === 0 && localCars.length > 0) {
      await saveCabinetCarsToSupabase(String(options.userId), localCars)
      return {
        cars: localCars,
        syncMode: 'cloud',
      }
    }

    await saveCabinetCarsToIndexedDb(cloudCars)
    return {
      cars: cloudCars,
      syncMode: 'cloud',
    }
  } catch {
    return {
      cars: localCars,
      syncMode: 'local',
    }
  }
}

export async function saveCabinetCars(cars: CabinetCar[], options: CabinetStoreOptions = {}): Promise<CabinetSyncMode> {
  await saveCabinetCarsToIndexedDb(cars)

  if (!canUseCloudCabinet(options.userId)) {
    return 'local'
  }

  try {
    await saveCabinetCarsToSupabase(String(options.userId), cars)
    return 'cloud'
  } catch {
    return 'local'
  }
}