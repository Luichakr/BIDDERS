# SEO — production (bidbidders.com) TODO

Cloudflare deploy не настроен на SEO. Ниже — правила и работы, которые нужно сделать перед или после первого продового релиза.

## Правила

- В production sitemap должны входить **только** разрешённые routes:
  - `/`
  - `/pl`, `/pl/calculator`, `/pl/in-transit`, `/pl/contact`, `/pl/contacts`
  - `/en`, `/en/calculator`, `/en/in-transit`, `/en/contact`, `/en/contacts`
- Закрытые routes (`/pl/catalog`, `/pl/in-stock`, `/uk/*`, `lots/:lotId`, `cases`, `faq`, `privacy-policy`, `terms-of-use`, `calculator/orest`, `calculator-base`, `china-cars`, и любые другие, не перечисленные выше) → **noindex, nofollow**.
- Coming Soon стуб уже добавляет `<meta name="robots" content="noindex,nofollow">` в DOM.
- 404-страница тоже отдаёт `noindex,nofollow`.
- Украинская локаль `/uk/*` в production не индексируется.

## Что физически НЕ сделано (нужно сделать)

- [ ] Сгенерировать `dist/sitemap.xml` для Cloudflare-деплоя только с 11 production-URL (текущий `dist/sitemap.xml` копирует `public/sitemap.xml` → нужно либо два варианта sitemap, либо динамическая генерация при `build:cloudflare`).
- [ ] Проверить `public/robots.txt` — убедиться, что в production не открыт доступ к закрытым разделам. Если открыт — подготовить production-вариант.
- [ ] Добавить hreflang теги для `/pl` ↔ `/en` версий разрешённых страниц.
- [ ] Добавить canonical на каждую разрешённую страницу.
- [ ] Проверить, что `<Seo>` компонент использует `VITE_SITE_ORIGIN=https://bidbidders.com` в production-сборке.
- [ ] Submit sitemap в Google Search Console после первого деплоя.

## Где править

- Coming Soon stub: `src/pages/coming-soon/ui/ComingSoonPage.tsx`
- Allowlist: `src/config/productionRoutes.ts`
- Production gate: `src/app/ProductionGate.tsx`
- Sitemap (текущий): `public/sitemap.xml` → копируется в `dist/sitemap.xml`
- Robots: `public/robots.txt`

## Ограничения

- Не трогать `VITE_*` API-переменные.
- Не делать pull/rebase/merge.
- GitHub Pages версия может содержать всё — production sitemap отделён от GitHub Pages.
