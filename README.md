# Skriptorium Blog

Блог проекта Skriptorium, созданный на Vue 3 с использованием Composition API, Vue Router, TypeScript и SCSS.

## Технологии

- **Vue 3** - Composition API
- **Vue Router** - маршрутизация
- **TypeScript** - типизация
- **SCSS** - стилизация
- **Vite** - сборщик
- **Nginx** - веб-сервер для production

## Разработка

```bash
# Установка зависимостей
pnpm install

# Запуск dev-сервера
pnpm dev

# Сборка для production
pnpm build

# Превью production сборки
pnpm preview
```

## Структура проекта

```
blog/
├── src/
│   ├── views/          # Страницы блога
│   ├── router/         # Конфигурация маршрутов
│   ├── styles/         # SCSS стили
│   ├── App.vue         # Главный компонент
│   └── main.ts         # Точка входа
├── public/             # Статические файлы
├── Dockerfile          # Docker образ
└── nginx.conf          # Конфигурация Nginx
```

## Разделы блога

- **Главная** (`/`) - обзор проекта
- **О проекте** (`/about`) - информация о Skriptorium
- **Возможности** (`/features`) - функции платформы
- **Технологии** (`/technology`) - технологический стек
- **Контакты** (`/contact`) - контактная информация

## Docker

Блог развертывается через Docker и доступен по адресу `blog.skriptorium.ru` через Traefik.

