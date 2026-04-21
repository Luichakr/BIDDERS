# Calculator: How It Works

## Source of truth
- Main implementation: `src/pages/calculator/ui/CalculatorPage.tsx`
- Styles: `src/pages/calculator/ui/calculator.css`

## Auth and API
1. Base URL is read from `VITE_CALCULATOR_API_BASE_URL`.
2. Token is read in this order:
- `VITE_CALCULATOR_API_TOKEN`
- `localStorage['lubeavtoPartnerToken']`
3. Request header is always normalized to `Authorization: Bearer <token>`.
4. Init endpoint (reference data):
- `GET /api/v0/calculator/count-pricing`
5. Calculate endpoint (final math):
- `POST /api/v0/calculator/count-pricing/calculate`

## Calculator modes
- `idle`: not enough required fields.
- `loading`: request is in flight.
- `live`: API answered correctly and totals include excise/VAT/toll.
- `fallback`: API failed, UI keeps local estimate and warning caption.

## What is required to trigger LIVE calculation
- Year in valid range.
- Engine/battery value > 0.
- Lot price > 0.
- Delivery origin selected.

Auto-request runs with debounce (~220ms) after input changes.

## Data flow
1. On mount, frontend requests init data (coefficients, options, logistics constants).
2. Init data maps to internal `ReferenceData`.
3. Form values build calculate payload:
- vehicle type, fuel type, year/engine or battery,
- auction,
- route (Klaipeda/Odesa),
- export docs fee,
- selected delivery origin,
- selected auction/vehicle coefficient rows.
4. API response is parsed into:
- auction/logistics fees,
- customs taxes (`excise`, `toll`, `vat`, optional `nonVatFee`),
- service fees.
5. Total is computed as:
- car block + logistics block + customs block + service block.

## Total formula used in UI
- `carBlock = lotPrice + auctionFee`
- `logisticsBlock = usDelivery + exportDocs + oceanDelivery + portUnload + europeDelivery + customsDelivery + borderHandling`
- `customsBlock = excise + toll + vat + nonVatFee`
- `serviceBlock = brokerFee + companyFee + insuranceFee + transferFee`
- `total = carBlock + logisticsBlock + customsBlock + serviceBlock`

## Notes on route behavior
- Odesa route disables some Klaipeda-specific rows.
- Value `999999` in ocean delivery is treated as unavailable and converted to `0`.

## Why sums differ from reference calculators
Most common reason: app is in `fallback` because API auth failed (`401/403`) or payload validation failed (`400`).
When status is `LIVE API`, totals include excise/VAT/toll and should match backend logic.

## Quick operational checklist
1. Ensure token exists in `.env.local` as `VITE_CALCULATOR_API_TOKEN` or in localStorage key `lubeavtoPartnerToken`.
2. Open calculator and verify mode badge is `LIVE API`.
3. If badge is `FALLBACK`, check browser Network for API status and response body.
4. For local static preview, build and copy `dist -> docs`, then run preview for `/BIDDERS/`.
