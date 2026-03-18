# Skriptorium Landing

Лендинг-страница проекта Skriptorium, современное веб-приложение на **Nuxt 4** с использованием Vue 3, TypeScript и SCSS.
Сайт - https://skriptorium.ru/.

## 🚀 Технологический стек 

Nuxt 4 / Vue 3 / TypeScript / SCSS / Reka UI / Vite / Iconify / Docker

## 📦 Установка и запуск

### Требования

- Node.js 18+
- pnpm (рекомендуется)

### Разработка

```bash
# Установка зависимостей
pnpm install

# Запуск dev-сервера (http://localhost:3000)
pnpm dev

# Линтинг кода
pnpm lint

# Проверка линтинга
pnpm lint:check
```

### Production

```bash
# Сборка для production
pnpm build

# Локальный preview production сборки
pnpm preview

# Генерирование статического сайта
pnpm generate
```

### Docker

```bash
# Сборка Docker образа
docker build -t skriptorium-landing .

# Запуск контейнера
docker run -p 3000:3000 skriptorium-landing
```

## 📁 Структура проекта

```
skriptorium-landing/
├── app/
│   ├── assets/
│   │   ├── icons/      # SVG иконки
│   │   └── scss/       # Стили (переменные, основные стили, шрифты)
│   ├── components/     # Vue компоненты
│   │   ├── Header.vue
│   │   ├── Pricing.vue
│   │   ├── Features.vue
│   │   ├── Form.vue
│   │   ├── Card.vue
│   │   └── ...
│   ├── pages/          # Страницы приложения
│   │   ├── index.vue   # Главная страница
│   │   ├── about.vue   # О проекте
│   │   ├── contact.vue # Контакты
│   │   └── pricing.vue # Тарифы
│   └── app.vue         # Главный компонент приложения
├── public/             # Статические файлы (robots.txt, шрифты)
├── docker-compose.yml  # Docker Compose конфигурация
├── Dockerfile          # Docker образ
├── nuxt.config.ts      # Конфигурация Nuxt
└── vite.config.ts      # Конфигурация Vite
```

## 🎨 Основные страницы

- **Главная** (`/`) - презентация платформы Skriptorium с информацией о функциях и тарифах
- **О проекте** (`/about`) - техническая информация о Skriptorium (в разработке)
- **Контакты** (`/contact`) - форма обратной связи (в разработке)
- **Тарифы** (`/pricing`) - расширенная информация о ценах и планах подписки (в разработке)

## 🛠️ Основные компоненты

- **Header** - навигация и мобильное меню
- **Title** - основной заголовок
- **Features** - информация о функциях платформы
- **Pricing** - таблица с тарифами
- **Form** - форма сбора контактов
- **Card** - универсальные карточки
- **ButtonCTA** - кнопки вызова действия
