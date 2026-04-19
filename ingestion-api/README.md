# BIDDERS Ingestion/API Layer

Production-oriented ingestion layer for Copart + IAAI with unified schema and REST API for catalog pages.

## What This Service Does

- Extracts lots from **Copart** and **IAAI** (separate adapters)
- Normalizes both sources into one unified lot schema
- Stores normalized data locally in JSON storage (no image downloading)
- Exposes API for catalog, lot card, filters, health and manual refresh

## Compliance With Your Constraints

- Free stack only (open-source + your own infra)
- No paid APIs/proxies/captcha services
- No local photo galleries:
  - stores only external URLs (`images`, `mainImage`)
  - stores no downloaded image files

## Architecture

- `src/source/copart/` – Copart extraction flow
- `src/source/iaai/` – IAAI extraction flow
- `src/normalizers/` – source to unified model mapping
- `src/schemas/` – unified schema (`zod`)
- `src/services/` – ingestion orchestration, repository, storage
- `src/jobs/` – refresh job runner
- `src/api/` – REST endpoints
- `src/utils/` – HTTP/retries/backoff/logging helpers
- `src/config/` – env-driven configuration

## Unified Lot Schema (core)

Stored fields include:

- `source`, `lotId`, `externalId`, `url`, `vin`
- `year`, `make`, `model`, `trim`, `title`
- `damagePrimary`, `damageSecondary`, `condition`
- `odometer`, `odometerUnit`, `transmission`, `drivetrain`, `fuel`, `engine`
- `bodyStyle`, `color`, `keys`
- `saleStatus`, `saleDate`, `currentBid`, `buyNowPrice`
- `locationName`, `locationCity`, `locationState`, `seller`
- `images[]`, `mainImage`, `imageCount`
- `titleStatus`, `rawSourcePayload`
- `status` (`active|live|sold|archived|unavailable`)
- `firstSeenAt`, `lastSeenAt`, `updatedAt`

## Installation

```bash
cd ingestion-api
cp .env.example .env
npm install
```

## Run

```bash
npm run dev
```

Default API URL: `http://localhost:3001`

## Manual Refresh

```bash
npm run refresh
```

or via API:

```bash
curl -X POST http://localhost:3001/api/admin/refresh \
  -H 'content-type: application/json' \
  -d '{"sources":["copart","iaai"],"limitPerSource":50}'
```

## API Endpoints

### `GET /api/lots`
Query params:

- `page`, `pageSize`
- `source` (`copart|iaai`)
- `status`, `make`, `model`, `locationState`
- `yearFrom`, `yearTo`
- `sortBy` (default `updatedAt`), `sortDir` (`asc|desc`)

### `GET /api/lots/:id`
Returns lot by internal `id` (`copart_<lotId>`, `iaai_<lotId>`) or by `lotId`.

### `GET /api/filters`
Returns available filter values.

### `POST /api/admin/refresh`
Triggers ingestion run.

### `GET /api/health`
Health + last refresh stats.

## Data Source Strategy

1. Live extraction is attempted first:
   - Copart: lot details endpoint + anti-bot warmup cookies
   - IAAI: vehicle page + JSON extraction from page payload
2. If blocked and `ALLOW_REFERENCE_FALLBACK=true`, service bootstraps from free `rebrowser/*-dataset` CSV sample (for continuity).

## Notes For Production

- Set `CHROME_EXECUTABLE_PATH` if auto-detection misses Chrome.
- Keep `ENABLE_BROWSER_WARMUP=true` for anti-bot session generation.
- Configure `REFRESH_INTERVAL_MINUTES` to run periodic updates.
- To scale, migrate storage to PostgreSQL (schema already normalized for it).

## Frontend Integration

Your current frontend can consume:

- catalog: `GET /api/lots`
- lot page: `GET /api/lots/:id`
- filters: `GET /api/filters`

Recommended next step in frontend:
- replace `catalog.mock.ts` / `parser.data.ts` reads with requests to `/api/lots`.
