/**
 * ШАГ 3 — ГЛАВНЫЙ СКРИПТ
 *
 * Запускает Copart + IAAI парсеры, маппит данные,
 * сохраняет в public/data/lots.json
 *
 * Запуск:
 *   node scripts/parser/fetch-lots.cjs
 *   node scripts/parser/fetch-lots.cjs --only=copart
 *   node scripts/parser/fetch-lots.cjs --only=iaai
 */

const fs   = require('fs')
const path = require('path')

const { fetchCopartLots } = require('./copart.cjs')
const { fetchIaaiLots }   = require('./iaai.cjs')
const { mapCopart, mapIaai } = require('./mapper.cjs')

// ─── Настройки ────────────────────────────────────────────────────────────────

const OUTPUT_PATH = path.resolve(__dirname, '../../public/data/lots.json')
const ONLY = process.argv.find(a => a.startsWith('--only='))?.split('=')[1]

// ─── Утилиты ──────────────────────────────────────────────────────────────────

function ensureDir(filePath) {
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function loadExisting() {
  try {
    if (fs.existsSync(OUTPUT_PATH)) {
      return JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf8'))
    }
  } catch { /* файл повреждён */ }
  return []
}

function saveJson(lots) {
  ensureDir(OUTPUT_PATH)
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(lots, null, 2), 'utf8')
  const kb = Math.round(fs.statSync(OUTPUT_PATH).size / 1024)
  console.log(`\n💾 Сохранено: ${OUTPUT_PATH}`)
  console.log(`   Лотов: ${lots.length}, размер: ${kb} KB`)
}

function printSummary(lots) {
  const copartCount = lots.filter(l => l.source === 'copart').length
  const iaaiCount   = lots.filter(l => l.source === 'iaai').length
  const withTimer   = lots.filter(l => l.auctionEndMs && l.auctionEndMs > Date.now()).length
  const withPhotos  = lots.filter(l => l.images?.length > 0).length

  console.log('\n📊 Итоговая статистика:')
  console.log(`   Всего лотов:    ${lots.length}`)
  console.log(`   Copart:         ${copartCount}`)
  console.log(`   IAAI:           ${iaaiCount}`)
  console.log(`   С таймером:     ${withTimer} (аукцион ещё не закончился)`)
  console.log(`   С фото:         ${withPhotos}`)

  if (lots.length > 0) {
    console.log('\n🚗 Примеры лотов:')
    lots.slice(0, 3).forEach(l => {
      const timer = l.auctionEndMs
        ? (() => {
            const s = Math.floor((l.auctionEndMs - Date.now()) / 1000)
            if (s <= 0) return 'завершён'
            const d = Math.floor(s / 86400)
            const h = Math.floor((s % 86400) / 3600)
            return `через ${d}д ${h}ч`
          })()
        : '—'
      console.log(`   [${l.source.toUpperCase()}] ${l.title} | ${l.currentBidLabel} | фото: ${l.images?.length ?? 0} | таймер: ${timer}`)
    })
  }
}

// ─── Главная функция ──────────────────────────────────────────────────────────

async function main() {
  console.log('═'.repeat(60))
  console.log('  BIDDERS — Сбор лотов с аукционов')
  console.log(`  Дата: ${new Date().toISOString()}`)
  if (ONLY) console.log(`  Режим: только ${ONLY.toUpperCase()}`)
  console.log('═'.repeat(60))

  const mapped = []
  let errorCount = 0

  // ── Copart ──────────────────────────────────────────────────────────────────
  if (!ONLY || ONLY === 'copart') {
    let rawCopart = []
    try {
      rawCopart = await fetchCopartLots()
    } catch (err) {
      console.log(`\n❌ Copart упал: ${err.message}`)
      errorCount++
    }

    for (const raw of rawCopart) {
      try {
        const lot = mapCopart(raw)
        // Фильтруем пустые лоты
        if (lot.id && lot.title && lot.title.length > 4) {
          mapped.push(lot)
        }
      } catch (err) {
        console.log(`  ⚠️  Маппинг Copart лота: ${err.message}`)
      }
    }
  }

  // ── IAAI ────────────────────────────────────────────────────────────────────
  if (!ONLY || ONLY === 'iaai') {
    let rawIaai = []
    try {
      rawIaai = await fetchIaaiLots()
    } catch (err) {
      console.log(`\n❌ IAAI упал: ${err.message}`)
      errorCount++
    }

    for (const raw of rawIaai) {
      try {
        const lot = mapIaai(raw)
        if (lot.id && lot.title && lot.title.length > 4) {
          mapped.push(lot)
        }
      } catch (err) {
        console.log(`  ⚠️  Маппинг IAAI лота: ${err.message}`)
      }
    }
  }

  // ── Fallback: если ничего не собрали — сохраняем старый файл ────────────────
  if (mapped.length === 0) {
    console.log('\n⚠️  Новых данных нет — оставляем старый lots.json')
    const existing = loadExisting()
    console.log(`   Старых лотов: ${existing.length}`)
    process.exit(errorCount > 0 ? 1 : 0)
  }

  // ── Сохраняем ────────────────────────────────────────────────────────────────
  saveJson(mapped)
  printSummary(mapped)

  console.log('\n✅ Готово! lots.json обновлён.')
  console.log('   Следующий шаг: подключить fetchCatalogCars() к этому файлу.')
}

main().catch(err => {
  console.error('\n💥 Критическая ошибка:', err.message)
  console.error(err.stack)

  // Сохраняем старый файл если есть
  const existing = loadExisting()
  if (existing.length > 0) {
    console.log(`\n🛡  Сохраняем старый lots.json (${existing.length} лотов)`)
  }

  process.exit(1)
})
