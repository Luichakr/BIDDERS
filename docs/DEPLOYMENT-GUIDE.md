# Deployment Guide

## Source of truth
- локальная папка — основная версия
- GitHub — зеркало полной версии
- production-домен — только вручную разрешённые страницы

## Команды

### Обновить GitHub
npm run build:github
git add .
git commit -m "update"
git push --force-with-lease

### Деплой на домен
npm run build:cloudflare
деплой dist/ в Cloudflare Pages

## Важно
- не делать git pull / rebase / merge
- не считать GitHub более правильным
- не выкатывать весь проект на домен
- деплой на домен только по явной команде
