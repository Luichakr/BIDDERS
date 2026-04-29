# Парсер Copart + IAAI — как это работает

## Общая схема

```
GitHub Actions (каждые 2 часа)
        │
        ▼
  fetch-lots.js          ← главный скрипт
   ├── copart.js         ← парсер Copart
   └── iaai.js           ← парсер IAAI
        │
        ▼
  mapper.js              ← конвертация в наш формат
        │
        ▼
  public/data/lots.json  ← статичный файл (1–2 MB)
        │
        ▼
  fetchCatalogCars()     ← фронт читает этот файл
        │
        ▼
  Каталог аукционов      ← живые данные на сайте
```

---

## Откуда берутся данные

### Copart (copart.com)

Copart не даёт официального API, но их сайт грузит данные через
незащищённые XHR-запросы. Мы используем те же эндпоинты.

**Поиск лотов:**
```
GET https://www.copart.com/public/lots/search-results/
    ?query=bmw&page=0&size=20&sort=saleDate,desc
```

**Детали одного лота:**
```
GET https://www.copart.com/public/data/lotdetails/info/{lotNumber}
```

**Что возвращает (168+ полей):**
- `ln`          — Lot Number
- `vin`         — VIN
- `year`        — Год
- `mkn`         — Марка (MAKE)
- `lm`          — Модель
- `la`          — Пробег (odometer)
- `eng`         — Двигатель
- `tmtp`        — Трансмиссия
- `drv`         — Привод
- `ft`          — Тип топлива
- `clr`         — Цвет
- `dd`          — Основное повреждение
- `sdd`         — Вторичное повреждение
- `hk`          — Есть ключи (YES/NO)
- `titlgrp`     — Статус документов (SALVAGE / CLEAN / etc)
- `bid`         — Текущая ставка
- `bn`          — Buy It Now цена
- `rcost`       — Оценочная стоимость (ACV)
- `imgs`        — Массив URL фотографий
- `thmb`        — Превью фото
- `sdt`         — Дата/время аукциона (UNIX timestamp ms)
- `tzn`         — Часовой пояс (например "US/Eastern")
- `lcy`         — Город
- `lcs`         — Штат
- `slnm`        — Название продавца
- `sy`          — Номер склада

**Таймер до аукциона** считается так:
```js
const endTime = new Date(lot.sdt) // UNIX ms → Date
const secondsLeft = Math.floor((endTime - Date.now()) / 1000)
```

---

### IAAI (iaai.com)

IAAI тоже грузит данные через внутренние JSON-эндпоинты.

**Поиск лотов:**
```
GET https://www.iaai.com/Search
    ?SearchVehicles=true&make=BMW&page=1&rowsPerPage=20
```

**Детали одного лота:**
```
GET https://www.iaai.com/vehmedia/images/{stockNumber}
GET https://www.iaai.com/vehicle-details/{stockNumber}
```

**Что возвращает (~50 полей):**
- `stockNumber`      — Номер лота
- `vin`              — VIN
- `year`, `make`, `model` — Год, марка, модель
- `engine`           — Двигатель
- `transmission`     — Трансмиссия
- `drivelineType`    — Привод
- `fuelType`         — Топливо
- `exteriorColor`    — Цвет
- `primaryDamage`    — Основное повреждение
- `secondaryDamage`  — Вторичное повреждение
- `odometer`         — Пробег
- `hasKeys`          — Ключи
- `titleType`        — Статус документов
- `currentBid`       — Текущая ставка
- `acv`              — Оценочная стоимость
- `saleDate`         — Дата аукциона (ISO 8601)
- `saleTime`         — Время аукциона
- `branchLocation`   — Локация (город, штат)
- `sellerName`       — Продавец
- `images[]`         — Массив HD фото

---

## Формат нашего lots.json

```json
[
  {
    "id": "75432198",
    "source": "copart",
    "title": "2022 BMW X5",
    "make": "BMW",
    "model": "X5",
    "year": 2022,
    "vin": "5UXCR6C09N9K12345",
    "engine": "3.0L TURBOCHARGED",
    "transmission": "AUTOMATIC",
    "drive": "AWD",
    "fuel": "Gasoline",
    "color": "Black",
    "mileageKm": 45000,
    "mileageLabel": "45 000 km",
    "damage": "Front End",
    "damageSec": "All Over",
    "titleStatus": "Salvage Certificate",
    "hasKeys": true,
    "currentBid": 18500,
    "currentBidLabel": "$18,500",
    "estimateLabel": "$42,000",
    "location": "Atlanta, GA",
    "seller": "GEICO",
    "auction": "Copart",
    "auctionEndTime": "2026-05-02T15:30:00-05:00",
    "auctionEndMs": 1746201000000,
    "image": "https://cs.copart.com/v1/AUTH_.../image.jpg",
    "images": [
      "https://cs.copart.com/v1/AUTH_.../01.jpg",
      "https://cs.copart.com/v1/AUTH_.../02.jpg"
    ],
    "sourceUrl": "https://www.copart.com/lot/75432198",
    "status": "catalog",
    "fetchedAt": "2026-04-28T10:00:00Z"
  }
]
```

---

## Файловая структура

```
scripts/parser/
  HOW_IT_WORKS.md     ← этот файл
  fetch-lots.js       ← главный скрипт (запускает оба парсера)
  copart.js           ← парсер Copart
  iaai.js             ← парсер IAAI
  mapper.js           ← конвертация данных в наш формат
  probe.js            ← [ШАГ 1] разведка — смотрим сырые данные

public/data/
  lots.json           ← готовый файл для сайта

.github/workflows/
  fetch-lots.yml      ← автозапуск каждые 2 часа
```

---

## Защита от блокировок

1. **User-Agent** — имитируем браузер Chrome
2. **Задержки** — пауза 1–2 сек между запросами
3. **Лимит** — не больше 200 лотов за один запуск
4. **Fallback** — если запрос упал, пропускаем лот, не ломаем весь скрипт
5. **Старый файл** — если Action упал целиком, сайт продолжает работать со старым lots.json

---

## Как запустить вручную

```bash
# Шаг 1 — разведка (смотрим сырые данные)
node scripts/parser/probe.js

# Шаг 2+ — полный сбор данных
node scripts/parser/fetch-lots.js
```

---

## Частые вопросы

**Почему не официальный API?**
Copart и IAAI не предоставляют публичного API. Все решения — это
использование тех же запросов, что делает браузер при открытии сайта.

**Это законно?**
Мы читаем публично доступные данные (те же что видит любой посетитель сайта).
Данные не кешируются дольше 2 часов. Не используем авторизацию других пользователей.

**Что если Copart изменит структуру?**
GitHub Action выдаст ошибку, нам придёт уведомление на email.
Сайт продолжит показывать последний рабочий lots.json.

**Сколько лотов грузить?**
Рекомендуется 100–200 лотов за раз. Этого хватает для каталога,
и не нагружает ни их сервер, ни наш сайт.
