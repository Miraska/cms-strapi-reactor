/**
 * Seed script to populate Strapi with initial blog posts
 * Run with: npx ts-node scripts/seed-posts.ts
 *
 * Note: This script should be run after Strapi is started
 * or you can add it to the bootstrap function
 */

// Sample posts data matching the existing JSON structure
export const samplePostsEn = [
  {
    title: 'Introducing the Reactor Blog',
    slug: 'introducing-reactor-blog',
    excerpt: 'A new platform for news, insights, and updates.',
    content:
      '<p>Welcome to the Reactor Blog. Here we will share important updates, technical insights about our technology, and investment product news.</p><p>In the near future, we plan to integrate a headless CMS so that non-developers can manage this content. Our architecture is ready for it today via a repository abstraction layer.</p>',
    publishedAt: '2024-11-01T09:00:00.000Z',
  },
  {
    title: 'Technology Deep Dive',
    slug: 'technology-deep-dive',
    excerpt: 'A look at the resonant mechanism and unique features.',
    content:
      '<p>In this deep dive, we explore the core ideas behind our resonant mechanism and controlled rollout. For a high-level overview, see the Technology page. For more details, follow this series.</p>',
    publishedAt: '2024-11-10T10:00:00.000Z',
  },
  {
    title: 'Market Outlook 2025',
    slug: 'market-outlook-2025',
    excerpt: 'Key macro trends for commodity and energy markets.',
    content:
      '<h3>Macro Drivers</h3><p>We review inflation, rates, and industrial demand across regions and discuss implications for metals and energy exposure.</p><h3>Scenario Analysis</h3><p>Base, optimistic, and stressed cases with associated portfolio actions.</p>',
    publishedAt: '2024-11-20T10:00:00.000Z',
  },
  {
    title: 'Investment Strategy Basics',
    slug: 'investment-strategy-basics',
    excerpt: 'On risk, time horizon, and capital allocation.',
    content:
      '<h3>Principles</h3><p>Time horizon, risk budget, and expected drawdowns.</p><h3>Position Sizing</h3><p>Simple multiplicative rules for rebalancing and conviction scaling.</p>',
    publishedAt: '2024-12-01T10:00:00.000Z',
  },
  {
    title: 'Scientific Foundations',
    slug: 'scientific-foundations',
    excerpt: 'Research underpinning our approach.',
    content:
      '<h3>References</h3><p>Peer-reviewed sources and lab replication notes.</p><h3>Limits</h3><p>Assumptions and what would falsify them.</p>',
    publishedAt: '2024-12-10T10:00:00.000Z',
  },
  {
    title: 'Resonant Mechanism In-Depth',
    slug: 'resonant-mechanism-in-depth',
    excerpt: 'On parameters, tolerances, and control.',
    content:
      '<h3>Resonance</h3><p>We detail the required parameters, tolerances, and control loops for stable resonance.</p><h3>Measurements</h3><p>Protocols and calibration approach.</p>',
    publishedAt: '2024-12-20T10:00:00.000Z',
  },
  {
    title: 'Controlled Rollout Plan',
    slug: 'controlled-rollout-plan',
    excerpt: 'Stages and checkpoints on the road to production.',
    content:
      '<h3>Milestones</h3><p>Pilot → pre-production → production readiness with stage gates.</p><h3>Risk Management</h3><p>Operational, regulatory, and counterparty risks.</p>',
    publishedAt: '2025-01-05T10:00:00.000Z',
  },
  {
    title: 'Team and Partners',
    slug: 'team-and-partners',
    excerpt: 'Who builds, funds, and validates the work.',
    content:
      '<h3>Team</h3><p>Cross-disciplinary background across physics, engineering, and finance.</p><h3>Partners</h3><p>Labs, manufacturers, and capital partners collaborating on delivery.</p>',
    publishedAt: '2025-01-12T10:00:00.000Z',
  },
  {
    title: 'Compliance and Safety',
    slug: 'compliance-and-safety',
    excerpt: 'Standards, audits, and reporting.',
    content:
      '<h3>Regulatory Framework</h3><p>Overview of compliance requirements and certification processes.</p><h3>Safety Protocols</h3><p>Internal audits, third-party assessments, and continuous monitoring.</p>',
    publishedAt: '2025-01-20T10:00:00.000Z',
  },
];

export const samplePostsRu = [
  {
    title: 'Мы запускаем блог Reactor',
    slug: 'introducing-reactor-blog',
    excerpt: 'Новая площадка для новостей, обзоров и обновлений.',
    content:
      '<p>Добро пожаловать в блог Reactor. Здесь мы будем делиться важными обновлениями, техническими инсайтами о нашей технологии и новостями об инвестиционных продуктах.</p>',
    publishedAt: '2024-11-01T09:00:00.000Z',
  },
  {
    title: 'Технологии: подробный разбор',
    slug: 'technology-deep-dive',
    excerpt: 'Обзор резонансного механизма и уникальных особенностей.',
    content:
      '<p>В этом подробном разборе мы исследуем основные идеи нашего резонансного механизма и контролируемого развертывания.</p>',
    publishedAt: '2024-11-10T10:00:00.000Z',
  },
  {
    title: 'Рыночный взгляд на 2025 год',
    slug: 'market-outlook-2025',
    excerpt: 'Ключевые макротренды сырьевых рынков и энергии.',
    content:
      '<h3>Макро-драйверы</h3><p>Мы рассматриваем инфляцию, ставки и промышленный спрос по регионам.</p>',
    publishedAt: '2024-11-20T10:00:00.000Z',
  },
  {
    title: 'Базовые принципы инвестиционной стратегии',
    slug: 'investment-strategy-basics',
    excerpt: 'О риске, горизонте и распределении капитала.',
    content: '<h3>Принципы</h3><p>Временной горизонт, бюджет риска и ожидаемые просадки.</p>',
    publishedAt: '2024-12-01T10:00:00.000Z',
  },
  {
    title: 'Научные основы',
    slug: 'scientific-foundations',
    excerpt: 'Исследования, лежащие в основе подхода.',
    content:
      '<h3>Источники</h3><p>Рецензируемые источники и заметки о лабораторной репликации.</p>',
    publishedAt: '2024-12-10T10:00:00.000Z',
  },
  {
    title: 'Резонансный механизм: детали',
    slug: 'resonant-mechanism-in-depth',
    excerpt: 'О параметрах, допусках и управлении.',
    content:
      '<h3>Резонанс</h3><p>Мы детализируем необходимые параметры, допуски и контуры управления для стабильного резонанса.</p>',
    publishedAt: '2024-12-20T10:00:00.000Z',
  },
  {
    title: 'План управляемого внедрения',
    slug: 'controlled-rollout-plan',
    excerpt: 'Этапы и контрольные точки пути к продакшену.',
    content:
      '<h3>Вехи</h3><p>Пилот → предпродакшен → готовность к продакшену с этапными воротами.</p>',
    publishedAt: '2025-01-05T10:00:00.000Z',
  },
  {
    title: 'Команда и партнёры',
    slug: 'team-and-partners',
    excerpt: 'Кто строит, финансирует и валидирует работу.',
    content: '<h3>Команда</h3><p>Междисциплинарный опыт в физике, инженерии и финансах.</p>',
    publishedAt: '2025-01-12T10:00:00.000Z',
  },
  {
    title: 'Соответствие и безопасность',
    slug: 'compliance-and-safety',
    excerpt: 'Стандарты, аудиты и отчётность.',
    content:
      '<h3>Нормативная база</h3><p>Обзор требований соответствия и процессов сертификации.</p>',
    publishedAt: '2025-01-20T10:00:00.000Z',
  },
];

// This data can be imported and used in bootstrap or admin seeding
export default {
  en: samplePostsEn,
  ru: samplePostsRu,
};
