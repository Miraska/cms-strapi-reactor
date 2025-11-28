# CMS Content Management Guide

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        STRAPI CMS                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🔷 SINGLE TYPES (Pages with Dynamic Zone)                  │
│  ├── 🏠 Home Page                                           │
│  │   ├── seo: shared.seo                                    │
│  │   └── sections: [Dynamic Zone]                           │
│  │       ├── sections.hero                                  │
│  │       ├── sections.about-preview                         │
│  │       ├── sections.market                                │
│  │       ├── sections.features                              │
│  │       ├── sections.team-carousel ─────┐                  │
│  │       ├── sections.tariffs            │                  │
│  │       ├── sections.cta                │                  │
│  │       └── ...                         │                  │
│  │                                       │                  │
│  ├── 📋 About Page                       │                  │
│  ├── 💰 Investment Page                  │                  │
│  ├── ⚡ Technology Page                  │                  │
│  ├── 🤝 Partners Page ───────────────────│──┐               │
│  └── 📞 Contact Page                     │  │               │
│                                          │  │               │
│  🔷 GLOBAL (Single Type)                 │  │               │
│  └── ⚙️ Global Settings                  │  │               │
│      ├── branding (logo, favicon)        │  │               │
│      ├── navigation[]                    │  │               │
│      ├── footer                          │  │               │
│      └── social-links[]                  │  │               │
│                                          │  │               │
│  🔶 COLLECTIONS                          │  │               │
│  ├── 👤 Team Member ◄────────────────────┘  │               │
│  ├── 🤝 Partner ◄───────────────────────────┘               │
│  └── 📝 Post (Blog articles)                                │
│                                                             │
│  🔷 SHARED COMPONENTS (Building blocks)                     │
│  ├── shared.seo (meta title, description, og)               │
│  ├── shared.button (text, url, variant)                     │
│  ├── shared.card-item (title, text, icon)                   │
│  ├── shared.feature-item (title, description, icon)         │
│  ├── shared.stat-item (value, label, description)           │
│  └── shared.media-item (media, alt, caption)                │
│                                                             │
│  🔷 SECTION COMPONENTS (For Dynamic Zone)                   │
│  ├── sections.hero                                          │
│  ├── sections.features                                      │
│  ├── sections.stats                                         │
│  ├── sections.cta                                           │
│  ├── sections.team-carousel (→ Team Member relation)        │
│  ├── sections.partners-grid (→ Partner relation)            │
│  ├── sections.why-trust-us                                  │
│  ├── sections.tariffs                                       │
│  ├── sections.text-with-image                               │
│  ├── sections.rich-content                                  │
│  ├── sections.accordion                                     │
│  └── ... (15+ section types)                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                 FRONTEND (React + FSD)                      │
├─────────────────────────────────────────────────────────────┤
│  shared/                                                    │
│  ├── ui/SectionRenderer/   → Renders Dynamic Zone sections  │
│  ├── hooks/usePage.ts      → Universal usePage<T>() hook    │
│  ├── lib/useContent.ts     → useContent() with i18n fallback│
│  └── types/sections.ts     → TypeScript types for sections  │
│                                                             │
│  entities/                                                  │
│  ├── team-member/          → Team Members Collection        │
│  ├── partner/              → Partners Collection            │
│  └── post/                 → Posts Collection               │
└─────────────────────────────────────────────────────────────┘
```

## 📊 What You Can Do (Without Developer)

| Action                                  | Supported |
| --------------------------------------- | --------- |
| ✅ Change order of sections on page     | Yes       |
| ✅ Add/remove sections from page        | Yes       |
| ✅ Edit all texts, titles, descriptions | Yes       |
| ✅ Upload/change images                 | Yes       |
| ✅ Configure colors, gradients          | Yes       |
| ✅ Add/edit/remove Team Members         | Yes       |
| ✅ Add/edit/remove Partners             | Yes       |
| ✅ Create/edit blog posts               | Yes       |
| ✅ Configure navigation                 | Yes       |
| ✅ Change social links                  | Yes       |
| ❌ Create NEW page (new URL)            | No\*      |
| ❌ Add NEW section type                 | No        |
| ❌ Change section structure             | No        |

\*New pages are rarely needed and require developer to add routing.

## 🎯 Section Components Reference

### Hero Section (`sections.hero`)

| Field                | Type    | Description             |
| -------------------- | ------- | ----------------------- |
| `title`              | Text    | Main heading            |
| `subtitle`           | Text    | Subheading              |
| `cta`                | Button  | Call-to-action button   |
| `backgroundImage`    | Media   | Background image        |
| `backgroundGradient` | String  | CSS gradient            |
| `alignment`          | Enum    | left, center, right     |
| `showParticles`      | Boolean | Show particle animation |

### Features Section (`sections.features`)

| Field      | Type      | Description            |
| ---------- | --------- | ---------------------- |
| `title`    | String    | Section title          |
| `subtitle` | Text      | Section description    |
| `items[]`  | Component | Array of feature items |
| `columns`  | Enum      | 2, 3, or 4 columns     |
| `variant`  | Enum      | cards, list, icons     |

### Stats Section (`sections.stats`)

| Field             | Type      | Description            |
| ----------------- | --------- | ---------------------- |
| `title`           | String    | Section title          |
| `items[]`         | Component | Array of stat items    |
| `backgroundImage` | Media     | Background image       |
| `variant`         | Enum      | default, cards, inline |

### Team Carousel (`sections.team-carousel`)

| Field            | Type     | Description                     |
| ---------------- | -------- | ------------------------------- |
| `title`          | String   | Section title                   |
| `members`        | Relation | Link to Team Members collection |
| `showNavigation` | Boolean  | Show prev/next buttons          |
| `autoplay`       | Boolean  | Auto-rotate slides              |

### CTA Section (`sections.cta`)

| Field                | Type   | Description      |
| -------------------- | ------ | ---------------- |
| `title`              | String | Heading          |
| `description`        | Text   | Description text |
| `button`             | Button | CTA button       |
| `backgroundGradient` | String | CSS gradient     |

### Why Trust Us (`sections.why-trust-us`)

| Field           | Type      | Description          |
| --------------- | --------- | -------------------- |
| `title`         | String    | Section title        |
| `primaryText`   | String    | Main text            |
| `secondaryText` | String    | Brand name (REACTOR) |
| `cards[]`       | Component | Trust factor cards   |
| `showToggle`    | Boolean   | Show toggle switch   |

### Partners Grid (`sections.partners-grid`)

| Field             | Type     | Description                 |
| ----------------- | -------- | --------------------------- |
| `title`           | String   | Section title               |
| `partners`        | Relation | Link to Partners collection |
| `columns`         | Enum     | 3, 4, 5, 6                  |
| `showDescription` | Boolean  | Show partner descriptions   |

## 📦 Collections

### Team Member

| Field      | Type    | Required | Localized |
| ---------- | ------- | -------- | --------- |
| `name`     | String  | Yes      | No        |
| `role`     | String  | Yes      | Yes       |
| `bio`      | Text    | No       | Yes       |
| `photo`    | Media   | No       | -         |
| `linkedin` | String  | No       | -         |
| `twitter`  | String  | No       | -         |
| `email`    | Email   | No       | -         |
| `order`    | Integer | No       | -         |
| `isActive` | Boolean | No       | -         |

### Partner

| Field         | Type    | Required | Localized |
| ------------- | ------- | -------- | --------- |
| `name`        | String  | Yes      | No        |
| `description` | Text    | No       | Yes       |
| `logo`        | Media   | No       | -         |
| `url`         | String  | No       | -         |
| `order`       | Integer | No       | -         |
| `category`    | Enum    | No       | -         |
| `isActive`    | Boolean | No       | -         |

## 🔧 How to Use Dynamic Zone

### In Strapi Admin Panel

1. Go to **Content Manager** → Select page (e.g., Home Page)
2. In **Sections** field, click **Add a component**
3. Select section type (e.g., Hero, Features, CTA)
4. Fill in the section fields
5. **Drag & drop** to reorder sections
6. Click **Save** then **Publish**

### Example: Home Page Setup

```
Sections [Dynamic Zone]
├── 🎯 Hero Section
│   ├── Title: "Transforming Nuclear Energy"
│   ├── Subtitle: "Safe, clean, affordable..."
│   └── CTA: { text: "Invest Now", url: "..." }
│
├── 📊 Market Section
│   ├── Title: "Market Opportunity"
│   └── Stats: [ { value: "$10.7T", label: "..." } ]
│
├── 👥 Team Carousel
│   ├── Title: "Our Team"
│   └── Members: [Select from Team Members]
│
└── ➕ Add Section... [dropdown]
```

## 💡 Best Practices

### Content Editing

1. **Always preview before publish** - Use preview mode
2. **Keep locales in sync** - Update both EN and RU
3. **Use collections for reusable data** - Team, Partners
4. **Optimize images** - Compress before upload
5. **Test on mobile** - Check responsive layouts

### SEO

1. Fill in **SEO component** for every page
2. Use descriptive **meta titles** (< 60 chars)
3. Write compelling **meta descriptions** (< 160 chars)
4. Upload **OG images** for social sharing

### Images

| Type            | Recommended Size | Format    |
| --------------- | ---------------- | --------- |
| Hero background | 1920x1080        | JPG, WebP |
| Team photos     | 400x400          | PNG, WebP |
| Partner logos   | 200x200          | PNG, SVG  |
| Icons           | 64x64            | SVG, PNG  |
| OG images       | 1200x630         | JPG, PNG  |

## 🌐 API Endpoints

| Endpoint                             | Description             |
| ------------------------------------ | ----------------------- |
| `GET /api/home-page?locale=en`       | Home page with sections |
| `GET /api/about-page?locale=en`      | About page              |
| `GET /api/investment-page?locale=en` | Investment page         |
| `GET /api/technology-page?locale=en` | Technology page         |
| `GET /api/partners-page?locale=en`   | Partners page           |
| `GET /api/contact-page?locale=en`    | Contact page            |
| `GET /api/global-setting?locale=en`  | Global settings         |
| `GET /api/team-members?locale=en`    | Team members            |
| `GET /api/partners?locale=en`        | Partners                |
| `GET /api/posts?locale=en`           | Blog posts              |

### Query Parameters

| Parameter  | Description          | Example         |
| ---------- | -------------------- | --------------- |
| `locale`   | Language             | `?locale=ru`    |
| `populate` | Relations to include | `?populate=*`   |
| `status`   | Draft or published   | `?status=draft` |

## 🔄 Fallback System

The frontend uses a cascading fallback system:

```
1. CMS Content (Dynamic Zone)
   ↓ if empty
2. CMS Collection (Team Members, Partners)
   ↓ if empty
3. i18n Translation Files
   ↓ if missing
4. Default English Text
```

This ensures content is **never empty** even if CMS is unavailable.

## 🚀 Deployment Checklist

Before deploying content changes:

- [ ] Content is **Published** (not Draft)
- [ ] Both **EN** and **RU** locales updated
- [ ] SEO fields are filled
- [ ] Images are optimized
- [ ] Links are tested
- [ ] Preview mode checked

## ❓ Troubleshooting

### Content not showing?

1. Check if content is **Published**
2. Check correct **locale** is selected
3. Clear browser cache
4. Check API response in Network tab

### Sections not in correct order?

1. Drag sections in Strapi to reorder
2. Save and Publish
3. Wait 5 seconds for cache to clear

### Images not loading?

1. Check image is uploaded correctly
2. Verify file size < 10MB
3. Check URL in API response
4. Try re-uploading image

### Team/Partners not showing?

1. Check `isActive: true` in Collection
2. Verify relation is set in section
3. Check `order` field for sorting
