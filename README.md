# Reactor CMS (Strapi)

Headless CMS на базе Strapi для управления контентом сайта Reactor.

## Быстрый старт

### Требования

- Node.js >= 20.x
- npm или yarn

### Установка

```bash
cd cms
npm install
```

### Запуск в режиме разработки

```bash
npm run develop
```

CMS будет доступна по адресу:

- **Admin Panel**: http://localhost:1337/admin
- **API**: http://localhost:1337/api

### Первый запуск

1. При первом запуске создайте учётную запись администратора
2. Перейдите в **Settings → Internationalization** и добавьте нужные локали (ru, vi, fr)
3. Перейдите в **Settings → Users & Permissions → Roles → Public**
4. Включите разрешения:
   - Post: `find` и `findOne`
   - Contact-form: `submit`
5. Сохраните изменения
6. Создайте `.env` файл с SMTP и получателями (см. раздел "Настройка Email")

## Наполнение контентом (Seed)

### Автоматический seed

После первого запуска Strapi можно загрузить демо-контент:

```bash
# Запустите в отдельном терминале (Strapi должен быть запущен)
npm run seed
```

**Важно:** Для работы seed-скрипта нужно:

1. Временно включить публичные права на создание постов:
   - Settings → Users & Permissions → Roles → Public
   - Post → Включить `create`
   - Сохранить

2. Или использовать API-токен:
   ```bash
   STRAPI_ADMIN_TOKEN=your-api-token npm run seed
   ```

После seed не забудьте отключить публичное создание постов!

### Ручное создание контента

1. Откройте http://localhost:1337/admin
2. Перейдите в **Content Manager → Post**
3. Нажмите **Create new entry**
4. Заполните поля:
   - **Title** — заголовок статьи
   - **Slug** — URL-идентификатор (генерируется автоматически)
   - **Excerpt** — краткое описание для карточки
   - **Content** — полный текст статьи (поддерживает форматирование)
   - **Cover Image** — обложка статьи
5. Нажмите **Publish**

## Rich Text Editor

Strapi v5 включает встроенный редактор с поддержкой:

- **Заголовки** (H1-H6)
- **Форматирование** (жирный, курсив, подчёркивание)
- **Списки** (маркированные и нумерованные)
- **Ссылки**
- **Изображения** (вставка через Media Library)
- **Цитаты**
- **Код**

### Расширенный редактор (CKEditor)

Для более продвинутого редактирования (цвета, таблицы, HTML):

```bash
npm install @ckeditor/strapi-plugin-ckeditor
npm run build
npm run develop
```

После установки в админке появится CKEditor с расширенными возможностями (его нужно будет активировать).

## Контент-типы

### Post (Статья)

Поля:

- `title` (String, обязательное, локализуемое) - Заголовок статьи
- `slug` (UID, обязательное) - URL-идентификатор
- `excerpt` (Text, обязательное, локализуемое) - Краткое описание
- `content` (Rich Text, локализуемое) - Полный текст статьи
- `coverImage` (Media) - Обложка статьи

### Site Settings (Настройки сайта)

Single Type для глобальных настроек сайта.

На текущем этапе публичных полей нет.

Примечание: контактная форма теперь не использует Site Settings для email‑получателей и темы — они задаются через переменные окружения.

#### Настройка Email для контактной формы

Настройки разделены на 2 части:

**1. Технические настройки SMTP (ТОЛЬКО в `.env`):**

```env
# SMTP Configuration (обязательно)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

**2. Бизнес-настройки (в CMS Global Settings ИЛИ `.env`):**

| Настройка | CMS поле | ENV переменная |
|-----------|----------|----------------|
| Получатели | `contactFormEmails` (JSON массив) | `CONTACT_FORM_RECIPIENTS` |
| Тема письма | `contactFormSubject` | `CONTACT_FORM_SUBJECT` |
| Email отправителя | `contactFromEmail` | `SMTP_FROM_EMAIL` |
| Имя отправителя | `contactFromName` | `SMTP_FROM_NAME` |

**Приоритет:** CMS → ENV (если в CMS не заполнено, берётся из ENV)

#### Настройка Gmail

⚠️ **Важно:** Gmail НЕ принимает обычные пароли! Нужен **App Password**:

1. Включите двухфакторную аутентификацию в Google аккаунте
2. Перейдите: Google Account → Security → 2-Step Verification → App passwords
3. Создайте новый App Password для "Mail"
4. Используйте этот 16-символьный пароль в `SMTP_PASSWORD`

#### Другие почтовые провайдеры

| Провайдер | SMTP_HOST             | SMTP_PORT |
| --------- | --------------------- | --------- |
| Gmail     | smtp.gmail.com        | 587       |
| Яндекс    | smtp.yandex.ru        | 587       |
| Mail.ru   | smtp.mail.ru          | 587       |
| Outlook   | smtp-mail.outlook.com | 587       |

## API Endpoints

### Получить все посты

```
GET /api/posts?locale=ru&populate=coverImage&sort=publishedAt:desc
```

### Получить пост по slug

```
GET /api/posts?filters[slug][$eq]=my-post-slug&locale=ru&populate=coverImage
```

### Получить настройки сайта

```
GET /api/site-setting
```

### Отправить контактную форму

```
POST /api/contact-form/submit
Content-Type: application/json

{
  "firstName": "Иван",
  "lastName": "Иванов",
  "company": "ООО Компания",
  "email": "ivan@example.com",
  "message": "Текст сообщения"
}
```

**Ответ успешной отправки:**

```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

### Параметры запроса

- `locale` - Язык контента (en, ru, vi, fr)
- `populate` - Связанные поля для загрузки (coverImage)
- `sort` - Сортировка (publishedAt:desc)
- `pagination[page]` - Номер страницы
- `pagination[pageSize]` - Количество записей на странице

## Интеграция с Frontend

### Переменные окружения (.env в корне проекта)

```env
# Включить Strapi CMS
VITE_USE_STRAPI=true

# URL Strapi API
VITE_STRAPI_URL=http://localhost:1337

# API Token (опционально для публичного контента)
VITE_STRAPI_TOKEN=
```

### Переключение между CMS и локальными файлами

Установите `VITE_USE_STRAPI=false` чтобы использовать локальные JSON файлы вместо Strapi.

## Скрипты

```bash
# Разработка
npm run develop

# Сборка для продакшена
npm run build

# Запуск в продакшене
npm run start

# Загрузка демо-данных
npm run seed
```

## Структура проекта

```
cms/
├── config/              # Конфигурация Strapi
│   ├── middlewares.ts   # CORS и middleware
│   ├── plugins.ts       # Плагины (i18n, upload)
│   └── database.ts      # База данных (SQLite по умолчанию)
├── scripts/
│   └── seed.mjs         # Скрипт загрузки демо-данных
├── src/
│   ├── api/             # API и контент-типы
│   │   ├── post/        # Post content type (статьи)
│   │   ├── site-setting/# Site Settings (настройки сайта)
│   │   └── contact-form/# Contact Form API (отправка email)
│   ├── admin/           # Кастомизация админки
│   └── index.ts         # Bootstrap и регистрация
├── public/              # Статические файлы и загрузки
└── database/            # SQLite база данных
```

## Продакшен

Для продакшена рекомендуется:

1. Использовать PostgreSQL или MySQL вместо SQLite
2. Настроить облачное хранилище для медиафайлов (AWS S3, Cloudinary)
3. Использовать переменные окружения для secrets
4. Настроить HTTPS через reverse proxy (nginx)

### Деплой (Railway или VPS)

- В репозитории добавлены готовые GitHub Actions:
  - `CI` — сборка Strapi на каждый push/PR
  - `Deploy to Railway` — деплой в Railway по push в `main` (нужны `RAILWAY_TOKEN`, `RAILWAY_PROJECT_ID`, `RAILWAY_SERVICE_ID`)
  - `Build and Deploy to VPS (Docker)` — сборка образа в GHCR и деплой на VPS через SSH (нужны `VPS_*` и `GHCR_*` секреты)
- Подробная инструкция: см. `DEPLOYMENT.md`

### Пример .env для продакшена

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database (PostgreSQL)
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=your-password
DATABASE_SSL=false

# SMTP Technical Settings (REQUIRED - only in ENV)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-gmail-app-password

# Contact Form Fallbacks (optional - can be set in CMS Global Settings instead)
SMTP_FROM_EMAIL=your-email@gmail.com
SMTP_FROM_NAME=REACTOR Website
CONTACT_FORM_RECIPIENTS=admin@example.com,sales@example.com
CONTACT_FORM_SUBJECT=Новая заявка с сайта REACTOR
```

Дополнительно для продакшена:

```env
# Разрешённые origins для CORS (через запятую)
CORS_ORIGIN=https://your-frontend.example.com

# Публичный URL CMS (для генерации ссылок)
PUBLIC_URL=https://cms.example.com
```

## Troubleshooting

### Ошибка CORS

Убедитесь, что в `config/middlewares.ts` добавлен ваш домен фронтенда.

### Посты не отображаются

1. Проверьте, что посты опубликованы (статус Published)
2. Проверьте права Public для Post: `find` и `findOne`
3. Проверьте, что `coverImage` добавлен в `populate`

### Изображения не загружаются

Проверьте URL Strapi в переменной `VITE_STRAPI_URL`.
