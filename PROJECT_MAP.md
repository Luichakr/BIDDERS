# BIDDERS Project Map (Quick Edits)

## Entry / Routing
- App bootstrap: `src/main.tsx`, `src/App.tsx`
- Global layout (header/footer/cookies): `src/app/AppLayout.tsx`
- Routes: `src/app/AppRouter.tsx`
- Route constants: `src/shared/config/routes.ts`

## Data Flow (Catalog/Lot)
- Main static lot source now: `src/features/inventory/model/parser.data.ts`
- Mapping from parser items -> UI card model: `src/features/auction/model/auctionData.ts`
- Catalog/transit/in-stock page shell and card rendering: `src/features/auction/ui/AuctionCatalogPage.tsx`
- Lot details page: `src/pages/lot/ui/LotPage.tsx` (+ styles in `src/pages/lot/ui/lot.css`)

## Pages
- Home: `src/pages/home/ui/HomePage.tsx`
- Catalog: `src/pages/catalog/ui/CatalogPage.tsx`
- In stock: `src/pages/stock/ui/InStockPage.tsx`
- Transit: `src/pages/transit/ui/TransitPage.tsx`
- Blog: `src/pages/blog/ui/BlogPage.tsx`
- Contacts: `src/pages/contacts/ui/ContactsPage.tsx`
- FAQ/Cases/Calculator: `src/pages/faq/ui/FaqPage.tsx`, `src/pages/cases/ui/CasesPage.tsx`, `src/pages/calculator/ui/CalculatorPage.tsx`

## Shared UI / Widgets
- Header: `src/widgets/header/ui/Header.tsx`
- Footer: `src/widgets/footer/ui/Footer.tsx`
- Hero/Home blocks: `src/widgets/hero/ui/HeroSection.tsx`, `src/widgets/home/ui/*`

## Styling
- Main design system CSS: `src/shared/styles/premium.css`
- Tokens: `src/shared/styles/tokens.css`
- Base app styles: `src/App.css`, `src/index.css`
- Page-specific styles: e.g. `src/pages/blog/ui/blog.css`, `src/pages/contacts/ui/contacts.css`, `src/pages/lot/ui/lot.css`

## i18n
- Provider: `src/shared/i18n/I18nProvider.tsx`
- Messages (UA/PL/EN): `src/shared/i18n/messages.ts`

## Assets / Public
- Public images: `public/images/*`
- Route images: `public/images/routes/*`
- Cases dataset for home/cases: `public/data/cases.json`

## Deploy
- Vite base for GitHub Pages: `vite.config.ts` (`base: '/BIDDERS/'`)
- Deploy source folder: `docs/` (copied from `dist/`)
- Build: `npm run build`

## If You Ask Me Short
Use one-line format:
- "Header: change phone to ..."
- "Lot page: show field X under VIN"
- "Catalog card: add badge Y"
- "Home hero: replace headline"
- "Footer: update emails"
- "Route /contacts: restyle section ..."

I will jump directly to mapped files above.
