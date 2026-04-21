# Calculator Base Snapshot

This folder contains a frozen baseline of the current production calculator logic.

## Included files
- `CalculatorBase.snapshot.tsx` - full React implementation snapshot of the current calculator page.
- `calculator-base.snapshot.css` - full styling snapshot used by the calculator UI.

## Why this exists
We will use this snapshot as a safe starting point for the next phase:
- destination update: from Ukraine to Warsaw,
- route/port update: from Klaipeda to Bremerhaven,
- iterative logic changes without touching the currently working calculator page.

## Current assumptions inside snapshot
- route presets are currently based on Klaipeda/Odesa flow.
- labels and captions are tuned for Ukraine customs flow.
- API payload and derived fields include current customs/tax structure used in the live calculator.

## Recommended next implementation step
1. Fork this snapshot into a new working calculator module (for example: Warsaw/Bremerhaven calculator).
2. Replace route presets and delivery legs.
3. Re-map customs and service blocks to the new destination logic.
4. Keep this snapshot unchanged as a rollback/reference point.
