# Real Project State

## Stack
- React
- TypeScript
- Vite

## Build
- npm run build:github → base /BIDDERS/
- npm run build:cloudflare → base /

## API
- данные приходят только из API
- локальные fallback-данные удалены
- используется VITE_CALCULATOR_API_BASE_URL и TOKEN

## Transit Page
- нет bootstrap cache
- нет localStorage
- нет 40 машин
- используется skeleton loader
- загрузка только через API

## Deploy model
- GitHub = полный проект
- production = выборочные страницы
