# Правила деплоя

## Source of truth

Локальная папка проекта — главный источник правды.
GitHub — зеркало полной локальной версии для тестирования.
Production-домен — стабильная публичная версия.

Нельзя подтягивать код с GitHub как более правильный.
Нельзя делать `git pull` / `rebase` / `merge` без отдельного разрешения.

---

## Правило деплоя

Есть 2 направления:

### 1. GitHub

GitHub всегда обновляется полной текущей локальной версией проекта.
Локальная папка — source of truth.
GitHub нужен для тестирования, проверки, ревью и работы тестировщиков.

Когда пользователь пишет: **«обнови GitHub»**

Нужно:
- НЕ делать `git pull` / `rebase` / `merge`
- считать локальную версию эталонной
- собрать проект через `npm run build:github`
- закоммитить все актуальные изменения проекта
- отправить полную текущую версию на GitHub
- если удалённая ветка конфликтует со старой версией, использовать безопасный `git push --force-with-lease`

### 2. Production / домен

Домен обновляется только выборочно.
На домен нельзя автоматически выкатывать весь текущий проект.

Когда пользователь пишет:
**«эта страница готова, задеплой на домен»**
или
**«выкати калькулятор на основной сайт»**

Нужно:
- определить конкретную страницу / route / функцию
- определить все связанные файлы этой страницы
- убедиться, что не попадут черновики и незавершённые разделы
- собрать production через `npm run build:cloudflare`
- выкатить только разрешённую страницу / функцию и её зависимости
- не менять другие production-страницы

---

**Важно:**
GitHub может содержать всё.
Production содержит только то, что явно разрешено пользователем.

---

## Cloudflare Pages — SPA routing

### Проблема
При деплое через `wrangler pages deploy` (без git-integration) файл `public/_redirects`
с правилом `/* /index.html 200` **не применяется** для rewrite-правил.
Cloudflare отдаёт `404.html` со статусом **HTTP 404** для всех маршрутов SPA.

### Решение (зафиксировано 2026-05-02)

Добавлены два файла:

**`functions/[[catchall]].js`** — основной механизм:
```js
// Catch-all Pages Function. Отдаёт статические файлы как есть;
// если файл не найден (404), возвращает index.html со статусом 200,
// чтобы React Router мог обработать маршрут на клиенте.
export async function onRequestGet(context) {
  const response = await context.env.ASSETS.fetch(context.request)
  if (response.status !== 404) return response
  const indexUrl = new URL('/index.html', context.request.url)
  return context.env.ASSETS.fetch(indexUrl.toString())
}
```

**`public/_redirects`** — fallback (сохранён, но не действует без Functions):
```
/* /index.html 200
```

### Результат
Все SPA-маршруты (`/pl`, `/en`, `/pl/calculator`, `/pl/in-transit`, `/pl/contacts`)
возвращают **HTTP 200**. Статические файлы (sitemap.xml, robots.txt, assets)
обрабатываются как обычно.

### Важно при будущих деплоях
- `functions/[[catchall]].js` обязателен для работы SPA на production.
- При сборке `npm run build:cloudflare` wrangler автоматически обнаруживает папку
  `functions/` в корне проекта и включает Functions bundle в деплой.
- Не удалять `functions/` — без него все direct-URL и F5 на страницах вернут 404.
