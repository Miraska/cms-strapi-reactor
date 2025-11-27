# CMS Content Management Guide

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        STRAPI CMS                           │
├─────────────────────────────────────────────────────────────┤
│  PAGES (Single Types) - каждая страница отдельно:           │
│  ├── 🏠 Home Page         - секции + Dynamic Zone           │
│  ├── 📋 About Page        - секции страницы About           │
│  ├── ⚡ Technology Page   - секции страницы Technology      │
│  ├── 💰 Investment Page   - секции страницы Investment      │
│  ├── 🤝 Partners Page     - секции страницы Partners        │
│  └── 📞 Contact Page      - секции страницы Contact         │
│                                                             │
│  SETTINGS:                                                  │
│  └── ⚙️ Global Settings   - Navigation, Footer, Social      │
│                                                             │
│  COLLECTIONS:                                               │
│  └── 📰 Posts             - Blog posts / Resources          │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                 FRONTEND (React + FSD + TypeScript)         │
├─────────────────────────────────────────────────────────────┤
│  shared/                                                    │
│  ├── hooks/usePage.ts     → Universal usePage<T>() hook     │
│  ├── lib/useContent.ts    → useContent() with i18n fallback │
│  ├── lib/preview.tsx      → Preview mode context & hook     │
│  └── api/strapi/          → fetchPageContent() service      │
│                                                             │
│  entities/                                                  │
│  ├── home-page/types.ts   → TypeScript types only           │
│  ├── about-page/types.ts  → TypeScript types only           │
│  ├── global-settings/     → Navigation, Social Links        │
│  └── ...                  → Types for each page             │
└─────────────────────────────────────────────────────────────┘
```

## Global Settings Fields

### Navigation Items (`navItems`)

Добавляйте и управляйте элементами навигации:

| Field        | Description                       |
| ------------ | --------------------------------- |
| `label`      | Текст ссылки (локализуемый)       |
| `path`       | URL путь (например `/investment`) |
| `isExternal` | Открывать в новой вкладке         |
| `order`      | Порядок сортировки                |
| `isActive`   | Показывать/скрывать пункт         |

### Social Links (`socialLinks`)

Управление социальными сетями:

| Field      | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| `platform` | Платформа: linkedin, twitter, facebook, instagram, youtube, telegram, email, website |
| `url`      | URL ссылки                                                                           |
| `label`    | Альтернативный текст                                                                 |
| `isActive` | Показывать/скрывать                                                                  |

### Branding (Favicon & Logo)

| Field     | Description                                         |
| --------- | --------------------------------------------------- |
| `favicon` | Иконка сайта (favicon) - загрузите PNG, SVG или ICO |
| `logo`    | Логотип сайта для шапки                             |

**Рекомендации для favicon:**

- Размер: 32x32 или 64x64 пикселей
- Форматы: PNG, SVG (рекомендуется), ICO
- SVG автоматически масштабируется

### Other Fields

| Field                   | Description                         |
| ----------------------- | ----------------------------------- |
| `siteName`              | Название сайта                      |
| `siteDescription`       | Описание сайта (локализуемый)       |
| `navigation`            | Устаревшее - только текст навигации |
| `footer`                | Контент футера                      |
| `common`                | Общие UI тексты                     |
| `generationOpportunity` | CTA секция                          |
| `investButtonUrl`       | URL кнопки инвестиций               |
| `investButtonText`      | Текст кнопки инвестиций             |
| `contactFormEmails`     | Email получателей форм              |

## Two Ways to Use Content

### 1. Static Sections (простой подход)

Секции в фиксированном порядке. Контент-менеджер меняет только текст.

```tsx
// Простое использование - фиксированная структура
function HomePage() {
  const heroTitle = useContent('home', 'hero.title', 'home.heroTitle');
  const heroSubtitle = useContent('home', 'hero.subtitle', 'home.heroSubtitle');

  return (
    <>
      <HeroSection title={heroTitle} subtitle={heroSubtitle} />
      <AboutSection />
      <MarketSection />
    </>
  );
}
```

### 2. Dynamic Zones (гибкий подход)

Контент-менеджер может менять порядок и состав секций.

```tsx
import { DynamicSections } from '@/shared/ui';

const componentMap = {
  'home.hero-section': HeroSection,
  'home.about-section': AboutSection,
  'home.market-section': MarketSection,
  'global.generation-opportunity': GenerationOpportunity,
};

function HomePage() {
  const { content, isPreview } = usePage<HomePageContent>('home');

  return (
    <DynamicSections
      sections={content?.sections}
      componentMap={componentMap}
      isPreview={isPreview}
    />
  );
}
```

## Usage Examples

### Simple Content with Fallback

```tsx
import { useContent } from '@/shared/lib';

function HeroSection() {
  // CMS path: hero.title, fallback: i18n key 'home.heroTitle'
  const title = useContent('home', 'hero.title', 'home.heroTitle');
  const subtitle = useContent('home', 'hero.subtitle', 'home.heroSubtitle');

  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}
```

### Section Content (multiple fields)

```tsx
import { useContentSection } from '@/shared/lib';

function MarketSection() {
  const market = useContentSection('home', 'market', {
    title: 'home.marketTitle',
    benefit1: 'home.marketBenefit1',
    benefit2: 'home.marketBenefit2',
    benefit3: 'home.marketBenefit3',
  });

  return (
    <section>
      <h2>{market.title}</h2>
      <ul>
        <li>{market.benefit1}</li>
        <li>{market.benefit2}</li>
        <li>{market.benefit3}</li>
      </ul>
    </section>
  );
}
```

### Raw Page Content

```tsx
import { usePage } from '@/shared/hooks';
import type { HomePageContent } from '@/entities';

function CustomSection() {
  const { content, isLoading, isPreview } = usePage<HomePageContent>('home');

  if (isLoading) return <Spinner />;

  return (
    <div>
      {isPreview && <div className="preview-badge">Preview Mode</div>}
      <h1>{content?.hero?.title}</h1>
    </div>
  );
}
```

### Global Settings & Navigation

```tsx
import { useGlobalSettings } from '@/entities';

function Header() {
  const { settings } = useGlobalSettings();

  return (
    <nav>
      {/* Use structured navItems if available */}
      {settings.navItems?.map((item) => (
        <a key={item.path} href={item.path} target={item.isExternal ? '_blank' : undefined}>
          {item.label}
        </a>
      ))}

      {/* Invest button with CMS text */}
      <a href={settings.investButtonUrl}>{settings.investButtonText}</a>
    </nav>
  );
}
```

### Social Links in Footer

```tsx
import { useGlobalSettings } from '@/entities';

function Footer() {
  const { settings } = useGlobalSettings();

  return (
    <div className="social-links">
      {settings.socialLinks?.map((link) => (
        <a key={link.platform} href={link.url} aria-label={link.label || link.platform}>
          <SocialIcon platform={link.platform} />
        </a>
      ))}
    </div>
  );
}
```

## Preview Mode

### Setup in Strapi

1. Configure `config/admin.ts`:

```typescript
preview: {
  enabled: true,
  allowedOrigins: [env('CLIENT_URL')],
  async handler(uid, { documentId, locale, status }) {
    // Returns preview URL for frontend
  },
},
```

2. Set environment variables:

```env
CLIENT_URL=http://localhost:5173
PREVIEW_SECRET=your-secret-key
```

### Using Preview in Frontend

Preview mode is automatically detected via URL parameters:

```tsx
import { usePreview } from '@/shared/lib';

function PageComponent() {
  const { isPreview, contentStatus, disablePreview } = usePreview();

  // contentStatus is 'draft' in preview mode, 'published' otherwise
  // API calls automatically use correct status

  return (
    <div>
      {isPreview && (
        <div className="preview-banner">
          Preview Mode
          <button onClick={disablePreview}>Exit</button>
        </div>
      )}
      <Content />
    </div>
  );
}
```

Preview URL format: `https://yoursite.com/?preview=true&secret=xxx`

## Content Types Reference

### 🏠 Home Page

| Section          | Fields                                                     |
| ---------------- | ---------------------------------------------------------- |
| `seo`            | metaTitle, metaDescription, canonicalUrl, ogImage          |
| `hero`           | title, subtitle, ctaButtonText, ctaButtonUrl               |
| `about`          | text, fromLabel, toLabel, quote                            |
| `market`         | title, benefit1-4, statsTitle, statsPerMonth, statsProfit  |
| `invest`         | title, description, card1-3Title, card1-3Text              |
| `tariffs`        | title, scenarioTitle, earlyInvestment, equity, pricingText |
| `team`           | title, members[], previousLabel, nextLabel                 |
| `crowdinvesting` | title, description, cardTopText, openToAll                 |
| `whyTrustUs`     | title, reactorTitle, card1-4Text                           |
| `technology`     | title, processText, synthesisText, altersText              |
| `sections`       | **Dynamic Zone** - reorderable sections                    |

### ⚙️ Global Settings

| Field                   | Description                           |
| ----------------------- | ------------------------------------- |
| `siteName`              | Website name                          |
| `siteDescription`       | Website description (localized)       |
| `favicon`               | Site favicon (PNG, SVG, ICO)          |
| `logo`                  | Site logo for header                  |
| `navigation`            | Menu item texts (legacy)              |
| `navItems`              | Structured navigation items with URLs |
| `footer`                | Footer content                        |
| `common`                | Common UI texts                       |
| `generationOpportunity` | CTA section                           |
| `socialLinks`           | Social media links (structured)       |
| `investButtonUrl`       | Main CTA button URL                   |
| `investButtonText`      | Main CTA button text                  |
| `contactFormEmails`     | Contact form recipients               |
| `contactFormSubject`    | Email subject                         |

## API Endpoints

| Endpoint                             | Description             |
| ------------------------------------ | ----------------------- |
| `GET /api/home-page?locale=en`       | Home page content       |
| `GET /api/about-page?locale=en`      | About page content      |
| `GET /api/technology-page?locale=en` | Technology page content |
| `GET /api/investment-page?locale=en` | Investment page content |
| `GET /api/partners-page?locale=en`   | Partners page content   |
| `GET /api/contact-page?locale=en`    | Contact page content    |
| `GET /api/global-setting?locale=en`  | Global settings         |
| `GET /api/posts?locale=en`           | Blog posts              |

### Preview API

For preview mode, add `status=draft`:

```
GET /api/home-page?locale=en&status=draft
```

## Environment Variables

### Strapi (.env)

```env
# Required
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-salt
ADMIN_JWT_SECRET=your-jwt-secret
TRANSFER_TOKEN_SALT=your-salt
JWT_SECRET=your-jwt-secret

# Preview
CLIENT_URL=http://localhost:5173
PREVIEW_SECRET=your-secret-key
```

### Frontend (.env)

```env
# Strapi Connection
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_TOKEN=your-api-token
VITE_USE_STRAPI=true

# Preview Mode
VITE_PREVIEW_SECRET=your-secret-key
```

## Best Practices

1. **Always provide i18n fallback** - Content is never empty
2. **Use TypeScript types** - Import from `@/entities`
3. **Cache wisely** - React Query caches for 5 minutes
4. **Preview before publish** - Use built-in preview
5. **Keep locales updated** - They serve as fallback content
6. **Use navItems** - Prefer structured navItems over navigation
7. **Use socialLinks array** - Platform + URL structure

## Troubleshooting

### Content not updating?

- Check if content is published (not draft)
- Refresh page to clear React Query cache
- Verify correct locale is selected

### Preview not working?

- Check `CLIENT_URL` env variable in Strapi
- Verify `VITE_PREVIEW_SECRET` matches Strapi's `PREVIEW_SECRET`
- Ensure URL has correct format: `?preview=true&secret=xxx`

### Navigation not changing?

- Add items to `navItems` array in Global Settings
- Set `isActive: true` for items to show
- Set correct `order` for sorting

### Social links not showing?

- Add links to `socialLinks` component in Global Settings
- Set `isActive: true` for links to show
- Ensure URL format is correct (e.g., `mailto:` for email)

### API errors?

- Run Strapi: `cd cms-strapi-reactor && npm run dev`
- Check permissions: Settings → Roles → Public
- Verify populate config includes all needed relations
