/**
 * Seed script to populate Strapi with page content from locales
 * 
 * This script imports existing content from the frontend's i18n locales
 * into Strapi CMS, providing initial content for content managers to edit.
 * 
 * Run with: npx ts-node scripts/seed-page-content.ts
 */

// =============================================================================
// HOME PAGE CONTENT
// =============================================================================

export const homePageContent = {
  en: {
    seo: {
      metaTitle: 'Technology That Transforms Matter Itself',
      metaDescription: 'REACTOR offers investment in TranscoreTM, a patented technology for atomic metal transformation.',
    },
    hero: {
      title: 'TranscoreTM — Technology That Transforms Matter Itself',
      subtitle: 'A patented atomic transformation technology that converts one metal into another',
      ctaButtonText: 'Invest Now',
      ctaButtonUrl: 'https://goldenafrica-invest.com',
    },
    about: {
      text: 'TranscoreTM is a patented atomic transformation technology that enables the conversion of one metal into another through controlled resonant manipulation of matter.',
      fromLabel: 'from',
      toLabel: 'to',
      quote: '*This is not magic. This is new physics, realized in a functional device.',
    },
    market: {
      title: 'Applications and Market',
      benefit1: 'Gold and platinum extraction without mining',
      benefit2: 'Production of strategic and rare-earth metals',
      benefit3: 'Import substitution in electronics manufacturing',
      benefit4: 'Clean production for energy and medicine',
      statsTitle: '$1 Million',
      statsPerMonth: '/month',
      statsProfit: 'Profit per device',
      goldMarketLabel: 'Gold market',
      goldMarketAmount: '$13 Trillion +',
    },
    invest: {
      title: 'Why invest in REACTOR?',
      description: 'Be part of the next industrial revolution.',
      card1Title: 'You gain equity<br />in the company',
      card1Text: 'Investors become shareholders in REACTOR, directly participating in our growth and success.',
      card2Title: 'Participate in scaling<br />a breakthrough technology',
      card2Text: 'Our proprietary reactor systems are designed to unlock new levels of efficiency in clean energy generation.',
      card3Title: 'Potential returns of 10–50×<br />as the company grows',
      card3Text: 'As we move from pilot to commercial scale, investors benefit from exponential growth opportunities.',
    },
    tariffs: {
      title: 'How much can\nan investor earn',
      scenarioTitle: 'Base scenario:',
      earlyInvestment: 'Early Investment: $10.000',
      equity: 'Equity: 0.1%',
      pricingText: "Assuming commercialization and market entry, the company's valuation could reach:",
      growthMinimal: 'Minimal Growth',
      companyValuation: 'Company Valuation',
      yourWorth: 'Your 0.1% Worth',
    },
    team: {
      title: 'Meet the team',
      previousLabel: 'Previous',
      nextLabel: 'Next',
    },
    crowdinvesting: {
      title: 'Crowdinvesting\nParticipation',
      description: 'Become part of our success story.',
      cardTopText: 'Early investors receive the best terms',
      openToAll: 'Open to all',
      managedViaBackOffice: 'Managed via back-office',
      minimumEntry: 'Minimum entry',
      minimumEntryAmount: '$100',
    },
    whyTrustUs: {
      title: 'Why Trust Us?',
      reactorTitle: 'Reactor',
      card1Text: 'Accessible documentation, tests,\nand patents',
      card2Text: 'Functional prototype\nalready exists',
      card3Text: 'Team: scientists, engineers,and\nglobal expertise',
      card4Text: 'Backed by private investors\nand international partners',
    },
    technology: {
      title: 'How does the\ntechnology work',
      processText: 'The process occurs without radiation, explosions, or nuclear waste.',
      synthesisText: 'This is peaceful metal synthesis, achievable in a compact unit.',
      altersText: 'TranscoreTM alters the atomic structure of matter via:',
    },
  },
  ru: {
    seo: {
      metaTitle: 'Технология, которая трансформирует саму материю',
      metaDescription: 'REACTOR предлагает инвестиции в TranscoreTM — запатентованную технологию атомной трансформации металлов.',
    },
    hero: {
      title: 'TranscoreTM — Технология, которая трансформирует саму материю',
      subtitle: 'Запатентованная технология атомной трансформации, превращающая один металл в другой',
      ctaButtonText: 'Инвестировать',
      ctaButtonUrl: 'https://goldenafrica-invest.com',
    },
    about: {
      text: 'TranscoreTM — это запатентованная технология атомной трансформации, позволяющая преобразовывать один металл в другой посредством контролируемого резонансного воздействия на материю.',
      fromLabel: 'из',
      toLabel: 'в',
      quote: '*Это не магия. Это новая физика, реализованная в функциональном устройстве.',
    },
    market: {
      title: 'Применение и рынок',
      benefit1: 'Добыча золота и платины без горных работ',
      benefit2: 'Производство стратегических и редкоземельных металлов',
      benefit3: 'Импортозамещение в производстве электроники',
      benefit4: 'Чистое производство для энергетики и медицины',
      statsTitle: '$1 миллион',
      statsPerMonth: '/месяц',
      statsProfit: 'Прибыль с одного устройства',
      goldMarketLabel: 'Рынок золота',
      goldMarketAmount: '$13 триллионов +',
    },
    invest: {
      title: 'Почему инвестировать в REACTOR?',
      description: 'Станьте частью следующей промышленной революции.',
      card1Title: 'Вы получаете долю<br />в компании',
      card1Text: 'Инвесторы становятся акционерами REACTOR, непосредственно участвуя в нашем росте и успехе.',
      card2Title: 'Участие в масштабировании<br />прорывной технологии',
      card2Text: 'Наши запатентованные реакторные системы разработаны для достижения нового уровня эффективности.',
      card3Title: 'Потенциальная доходность 10–50×<br />по мере роста компании',
      card3Text: 'По мере перехода от пилотного проекта к коммерческому масштабу инвесторы получают возможности экспоненциального роста.',
    },
    tariffs: {
      title: 'Сколько может\nзаработать инвестор',
      scenarioTitle: 'Базовый сценарий:',
      earlyInvestment: 'Ранние инвестиции: $10.000',
      equity: 'Доля: 0.1%',
      pricingText: 'При условии коммерциализации и выхода на рынок оценка компании может достичь:',
      growthMinimal: 'Минимальный рост',
      companyValuation: 'Оценка компании',
      yourWorth: 'Ваши 0.1% стоят',
    },
    team: {
      title: 'Познакомьтесь с командой',
      previousLabel: 'Назад',
      nextLabel: 'Вперёд',
    },
    crowdinvesting: {
      title: 'Краудинвестинг\nУчастие',
      description: 'Станьте частью нашей истории успеха.',
      cardTopText: 'Ранние инвесторы получают лучшие условия',
      openToAll: 'Открыто для всех',
      managedViaBackOffice: 'Управляется через личный кабинет',
      minimumEntry: 'Минимальный вход',
      minimumEntryAmount: '$100',
    },
    whyTrustUs: {
      title: 'Почему нам доверяют?',
      reactorTitle: 'Reactor',
      card1Text: 'Доступная документация, тесты\nи патенты',
      card2Text: 'Функционирующий прототип\nуже существует',
      card3Text: 'Команда: учёные, инженеры и\nмеждународная экспертиза',
      card4Text: 'Поддержка частных инвесторов\nи международных партнёров',
    },
    technology: {
      title: 'Как работает\nтехнология',
      processText: 'Процесс происходит без радиации, взрывов или ядерных отходов.',
      synthesisText: 'Это мирный синтез металлов, достижимый в компактной установке.',
      altersText: 'TranscoreTM изменяет атомную структуру материи посредством:',
    },
  },
};

// =============================================================================
// ABOUT PAGE CONTENT
// =============================================================================

export const aboutPageContent = {
  en: {
    seo: {
      metaTitle: 'About REACTOR Project',
      metaDescription: 'Learn about REACTOR - forging the future of clean metallurgy with TranscoreTM technology.',
    },
    hero: {
      label: 'About Project',
      title: 'Reactor: Forging the Future, Not Melting It',
      text: "Welcome to the dawn of a new industrial era.",
    },
    ambition: {
      kicker: 'Our Ambition',
      title: 'Building the Infrastructure\nof Tomorrow',
      description: "Our vision is vast and meticulously planned.",
      goal1: 'Manufacture and deploy industrial-scale Reactor systems.',
      goal2: 'Become a leading supplier of synthesized rare-earth materials.',
      goal3: 'Continuously push the boundaries of material science.',
      goal4: 'Integrate into the global supply chain as a cornerstone of clean technology.',
    },
    profit: {
      card1Title: 'A Clear Path to Profit and Impact',
      card1Text: 'The REACTOR project is a 5–6 year journey, mapped across 16 distinct stages.',
      card2Title: 'An Unparalleled Investment Opportunity',
      card2Text: 'This is a ground-floor opportunity with a total investment volume of $140 million USD.',
      card3Title: 'The Engine of Innovation: The SINTEZMET Complex',
      card3Text: 'Our first production complex is being engineered as a center of excellence.',
    },
    transcor: {
      kicker: 'The Core of Our Revolution:',
      title: 'The Transcor Method',
      description: 'At the heart of REACTOR lies our proprietary Transcor technology.',
    },
    marketWaiting: {
      title: 'A Market Waiting for Our Metals',
      intro: "The transition to a green, electrified world is dependent on metals that are currently scarce.",
      card1: 'Electric vehicles and high-efficiency generators.',
      card2: 'Wind turbines and solar energy systems.',
      card3: 'Microelectronics, advanced sensors, and MEMS devices.',
      card4: 'Aerospace, defense, and medical equipment.',
      conclusion: 'Our potential clients are the titans of industry.',
    },
    joinUs: {
      title: 'Join Us in Building a New Industry',
      text1: 'REACTOR is more than a company; it is a collective of visionary engineers and physicists.',
      text2: 'We are actively seeking strategic investors and forward-thinking partners.',
      text3: "The metal of the future won't be mined from the earth. It will be coded by a field.",
    },
  },
  ru: {
    seo: {
      metaTitle: 'О проекте REACTOR',
      metaDescription: 'Узнайте о REACTOR - формируем будущее чистой металлургии с технологией TranscoreTM.',
    },
    hero: {
      label: 'О проекте',
      title: 'Reactor: Создаём будущее, а не плавим его',
      text: 'Добро пожаловать в рассвет новой промышленной эры.',
    },
    ambition: {
      kicker: 'Наши амбиции',
      title: 'Строим инфраструктуру\nзавтрашнего дня',
      description: 'Наше видение масштабно и тщательно спланировано.',
      goal1: 'Производство и развёртывание промышленных реакторных систем.',
      goal2: 'Стать ведущим поставщиком синтезированных редкоземельных материалов.',
      goal3: 'Непрерывно расширять границы материаловедения.',
      goal4: 'Интегрироваться в глобальную цепочку поставок как основа чистых технологий.',
    },
    profit: {
      card1Title: 'Чёткий путь к прибыли и влиянию',
      card1Text: 'Проект REACTOR — это путь на 5–6 лет, разбитый на 16 этапов.',
      card2Title: 'Беспрецедентная инвестиционная возможность',
      card2Text: 'Это возможность войти на первом этаже с общим объёмом инвестиций $140 миллионов.',
      card3Title: 'Двигатель инноваций: Комплекс СИНТЕЗМЕТ',
      card3Text: 'Наш первый производственный комплекс проектируется как центр передового опыта.',
    },
    transcor: {
      kicker: 'Сердце нашей революции:',
      title: 'Метод Transcor',
      description: 'В основе REACTOR лежит наша запатентованная технология Transcor.',
    },
    marketWaiting: {
      title: 'Рынок, ожидающий наши металлы',
      intro: 'Переход к зелёному, электрифицированному миру зависит от металлов, которые сейчас дефицитны.',
      card1: 'Электромобили и высокоэффективные генераторы.',
      card2: 'Ветряные турбины и солнечные энергосистемы.',
      card3: 'Микроэлектроника, передовые датчики и МЭМС устройства.',
      card4: 'Аэрокосмическая отрасль, оборона и медицинское оборудование.',
      conclusion: 'Наши потенциальные клиенты — титаны индустрии.',
    },
    joinUs: {
      title: 'Присоединяйтесь к созданию новой индустрии',
      text1: 'REACTOR — это коллектив визионеров: инженеров и физиков.',
      text2: 'Мы активно ищем стратегических инвесторов и дальновидных партнёров.',
      text3: 'Металл будущего не будет добываться из земли. Он будет закодирован полем.',
    },
  },
};

// =============================================================================
// TECHNOLOGY PAGE CONTENT
// =============================================================================

export const technologyPageContent = {
  en: {
    seo: {
      metaTitle: 'TranscoreTM Technology',
      metaDescription: 'Discover how TranscoreTM technology works - resonant atomic restructuring.',
    },
    uniqueFeatures: {
      title: 'What makes it unique?',
      feature1Title: 'No radioactivity',
      feature1Desc: 'Meets all environmental standards.',
      feature2Title: 'Physical prototype exists',
      feature2Desc: 'Demonstrates repeatable elemental conversion.',
      feature3Title: 'Globally deployable',
      feature3Desc: 'No mines, logistics, or chemicals required.',
      feature4Title: 'Unmatched economic potential',
      feature4Desc: 'Valuable metals synthesized at near‑zero cost.',
    },
    resonant: {
      title: 'How does the\ntechnology work',
      subtitle1: 'TranscoreTM operates on the premise that atoms can transition between states.',
      subtitle2: 'This is controlled atomic restructuring—no explosions, waste, or radiation.',
      pill1: 'Conditions enabling atomic reconfiguration',
      pill2: 'Wave‑based tuning to atomic energy levels',
      pill3: 'Targeted electromagnetic/acoustic stimulation',
    },
    scientific: {
      title: 'Scientific foundation',
      text: 'Every innovation is built on rigorous scientific research.',
      bullet1: 'Alternative nuclear models',
      bullet2: "Yuri Stepanovich Rybnikov's structural matter theory",
      bullet3: 'Resonant atomic excitation concepts',
    },
    controlledRollout: {
      title: 'Controlled rollout',
      subtitle: 'Given its global market impact, SINTEZMET ensures:',
      caption1: 'International patent\nprotection',
      caption2: 'Device tracking and\nauthentication',
      caption3: 'Equitable distribution via crowdinvesting',
    },
    carousel: {
      slide1Title: 'Resonant excitation of electro-atoms',
      slide1Description: 'The process occurs without radiation or nuclear waste.',
      slide2Title: 'Controlled fields and frequencies',
      slide2Description: 'The system precisely regulates electromagnetic fields.',
      slide3Title: 'Reconfiguration of conduction line principles',
      slide3Description: 'Our design redefines how electrons travel.',
    },
  },
  ru: {
    seo: {
      metaTitle: 'Технология TranscoreTM',
      metaDescription: 'Узнайте, как работает технология TranscoreTM — резонансная атомная реструктуризация.',
    },
    uniqueFeatures: {
      title: 'Что делает её уникальной?',
      feature1Title: 'Без радиоактивности',
      feature1Desc: 'Соответствует всем экологическим стандартам.',
      feature2Title: 'Физический прототип существует',
      feature2Desc: 'Демонстрирует повторяемое преобразование элементов.',
      feature3Title: 'Глобальное развёртывание',
      feature3Desc: 'Не требует шахт, логистики или химикатов.',
      feature4Title: 'Непревзойдённый экономический потенциал',
      feature4Desc: 'Ценные металлы синтезируются практически при нулевой стоимости.',
    },
    resonant: {
      title: 'Как работает\nтехнология',
      subtitle1: 'TranscoreTM основан на предпосылке, что атомы могут переходить между состояниями.',
      subtitle2: 'Это контролируемая атомная реструктуризация — без взрывов, отходов или радиации.',
      pill1: 'Условия для атомной реконфигурации',
      pill2: 'Волновая настройка на атомные энергетические уровни',
      pill3: 'Направленная электромагнитная/акустическая стимуляция',
    },
    scientific: {
      title: 'Научная основа',
      text: 'Каждая инновация построена на строгих научных исследованиях.',
      bullet1: 'Альтернативные ядерные модели',
      bullet2: 'Теория структурной материи Юрия Степановича Рыбникова',
      bullet3: 'Концепции резонансного атомного возбуждения',
    },
    controlledRollout: {
      title: 'Контролируемое внедрение',
      subtitle: 'Учитывая глобальное влияние на рынок, СИНТЕЗМЕТ обеспечивает:',
      caption1: 'Международную патентную\nзащиту',
      caption2: 'Отслеживание и\nаутентификацию устройств',
      caption3: 'Справедливое распределение через краудинвестинг',
    },
    carousel: {
      slide1Title: 'Резонансное возбуждение электро-атомов',
      slide1Description: 'Процесс происходит без радиации или ядерных отходов.',
      slide2Title: 'Контролируемые поля и частоты',
      slide2Description: 'Система точно регулирует электромагнитные поля.',
      slide3Title: 'Реконфигурация принципов проводимости',
      slide3Description: 'Наш дизайн переопределяет, как электроны движутся.',
    },
  },
};

// =============================================================================
// GLOBAL SETTINGS CONTENT
// =============================================================================

export const globalSettingsContent = {
  en: {
    siteName: 'REACTOR',
    siteDescription: 'REACTOR - Clean Energy Solutions. TranscoreTM technology for atomic metal transformation.',
    navigation: {
      investment: 'Investment',
      technology: 'Technology',
      aboutProject: 'About Project',
      resources: 'Resources',
      partners: 'Partners',
      contact: 'Contact',
    },
    footer: {
      title: 'Reactor',
      copyright: 'All rights reserved',
      mapLabel: 'Map',
      socialLabel: 'Social',
    },
    common: {
      investNow: 'Invest Now',
      learnMore: 'Learn more',
      language: 'Language',
      error: 'Error',
      loading: 'Loading...',
      goHome: 'Go Home',
    },
    generationOpportunity: {
      title: 'Once-in-a-generation\nopportunity',
      description: 'TranscoreTM can revolutionize metallurgy, energy, and the global economy.',
      buttonText: 'Invest Now',
    },
    socialLinks: {
      telegram: '',
      twitter: '',
      linkedin: '',
    },
    investButtonUrl: 'https://goldenafrica-invest.com',
    contactFormEmails: ['example@gmail.com'],
    contactFormSubject: 'New inquiry from REACTOR website',
  },
  ru: {
    siteName: 'REACTOR',
    siteDescription: 'REACTOR - Решения чистой энергии. Технология TranscoreTM.',
    navigation: {
      investment: 'Инвестиции',
      technology: 'Технология',
      aboutProject: 'О проекте',
      resources: 'Ресурсы',
      partners: 'Партнёры',
      contact: 'Контакты',
    },
    footer: {
      title: 'Reactor',
      copyright: 'Все права защищены',
      mapLabel: 'Карта',
      socialLabel: 'Соцсети',
    },
    common: {
      investNow: 'Инвестировать',
      learnMore: 'Подробнее',
      language: 'Язык',
      error: 'Ошибка',
      loading: 'Загрузка...',
      goHome: 'На главную',
    },
    generationOpportunity: {
      title: 'Уникальная возможность\nпоколения',
      description: 'TranscoreTM может революционизировать металлургию и мировую экономику.',
      buttonText: 'Инвестировать',
    },
    socialLinks: {
      telegram: '',
      twitter: '',
      linkedin: '',
    },
    investButtonUrl: 'https://goldenafrica-invest.com',
    contactFormEmails: ['example@gmail.com'],
    contactFormSubject: 'Новая заявка с сайта REACTOR',
  },
};

// =============================================================================
// INVESTMENT PAGE CONTENT
// =============================================================================

export const investmentPageContent = {
  en: {
    seo: {
      metaTitle: 'Investment Opportunities',
      metaDescription: 'Invest in REACTOR - be part of the next industrial revolution.',
    },
    hero: {
      label: 'Investment',
      title: 'Invest in the Future of Metal Synthesis',
      subtitle: 'Join us in revolutionizing the global materials industry.',
    },
    whyTrustUs: {
      title: 'Why Trust REACTOR?',
      subtitle: 'Our commitment to transparency and innovation.',
      reason1Title: 'Proven Technology',
      reason1Text: 'Working prototype with documented results.',
      reason2Title: 'Expert Team',
      reason2Text: 'Scientists and engineers with decades of experience.',
      reason3Title: 'Clear Roadmap',
      reason3Text: '16-stage development plan with measurable milestones.',
      reason4Title: 'Global Partners',
      reason4Text: 'International backing and strategic partnerships.',
    },
    format: {
      title: 'Investment Format',
      subtitle: 'Flexible options for every investor.',
      card1: 'Equity participation in REACTOR',
      card2: 'Managed through secure back-office',
      card3: 'Regular updates and reports',
    },
    profit: {
      title: 'Profit Potential',
      subtitle: 'Conservative and optimistic scenarios.',
      card1Title: '$10M Valuation',
      card1Text: 'Your 0.1% = $10,000',
      card2Title: '$50M Valuation',
      card2Text: 'Your 0.1% = $50,000',
      card3Title: '$100M Valuation',
      card3Text: 'Your 0.1% = $100,000',
      card4Title: '$500M Valuation',
      card4Text: 'Your 0.1% = $500,000',
      note: '*Projections based on market analysis. Returns not guaranteed.',
    },
    whyInvest: {
      title: 'Why Invest Now?',
      block1Title: 'Early Stage Advantage',
      block1Line1: 'Best valuations',
      block1Line2: 'Maximum growth potential',
      block1Line3: 'Priority access',
      block2Title: 'Market Opportunity',
      block2Line1: '$13T+ gold market',
      block2Line2: 'Growing rare earth demand',
      block2Line3: 'Green tech revolution',
      block3Title: 'Competitive Edge',
      block3Line1: 'Patented technology',
      block3Line2: 'No mining required',
      block3Line3: 'Zero emissions',
      block4Title: 'Exit Strategy',
      block4Line1: 'IPO potential',
      block4Line2: 'Strategic acquisition',
      block4Line3: 'Dividend distribution',
    },
    anyone: {
      title: 'Anyone Can Invest',
      top1: 'Individual investors',
      top2: 'Family offices',
      top3: 'Venture funds',
      top4: 'Strategic partners',
      divider: 'Starting from just $100',
      bottom1: 'Secure platform',
      bottom2: 'Legal compliance',
      bottom3: 'Transparent process',
      cta: 'Start Investing Today',
    },
  },
  ru: {
    seo: {
      metaTitle: 'Инвестиционные возможности',
      metaDescription: 'Инвестируйте в REACTOR - станьте частью следующей промышленной революции.',
    },
    hero: {
      label: 'Инвестиции',
      title: 'Инвестируйте в будущее синтеза металлов',
      subtitle: 'Присоединяйтесь к революции в глобальной индустрии материалов.',
    },
    whyTrustUs: {
      title: 'Почему доверять REACTOR?',
      subtitle: 'Наша приверженность прозрачности и инновациям.',
      reason1Title: 'Проверенная технология',
      reason1Text: 'Работающий прототип с документированными результатами.',
      reason2Title: 'Экспертная команда',
      reason2Text: 'Учёные и инженеры с десятилетиями опыта.',
      reason3Title: 'Чёткий план',
      reason3Text: '16-этапный план развития с измеримыми вехами.',
      reason4Title: 'Глобальные партнёры',
      reason4Text: 'Международная поддержка и стратегические партнёрства.',
    },
    format: {
      title: 'Формат инвестиций',
      subtitle: 'Гибкие опции для каждого инвестора.',
      card1: 'Долевое участие в REACTOR',
      card2: 'Управление через безопасный личный кабинет',
      card3: 'Регулярные обновления и отчёты',
    },
    profit: {
      title: 'Потенциал прибыли',
      subtitle: 'Консервативные и оптимистичные сценарии.',
      card1Title: 'Оценка $10M',
      card1Text: 'Ваши 0.1% = $10,000',
      card2Title: 'Оценка $50M',
      card2Text: 'Ваши 0.1% = $50,000',
      card3Title: 'Оценка $100M',
      card3Text: 'Ваши 0.1% = $100,000',
      card4Title: 'Оценка $500M',
      card4Text: 'Ваши 0.1% = $500,000',
      note: '*Прогнозы основаны на анализе рынка. Доходность не гарантирована.',
    },
    whyInvest: {
      title: 'Почему инвестировать сейчас?',
      block1Title: 'Преимущество ранней стадии',
      block1Line1: 'Лучшие оценки',
      block1Line2: 'Максимальный потенциал роста',
      block1Line3: 'Приоритетный доступ',
      block2Title: 'Рыночная возможность',
      block2Line1: 'Рынок золота $13T+',
      block2Line2: 'Растущий спрос на редкоземельные элементы',
      block2Line3: 'Революция зелёных технологий',
      block3Title: 'Конкурентное преимущество',
      block3Line1: 'Запатентованная технология',
      block3Line2: 'Не требуется добыча',
      block3Line3: 'Нулевые выбросы',
      block4Title: 'Стратегия выхода',
      block4Line1: 'Потенциал IPO',
      block4Line2: 'Стратегическое приобретение',
      block4Line3: 'Распределение дивидендов',
    },
    anyone: {
      title: 'Инвестировать может каждый',
      top1: 'Частные инвесторы',
      top2: 'Семейные офисы',
      top3: 'Венчурные фонды',
      top4: 'Стратегические партнёры',
      divider: 'Начиная всего от $100',
      bottom1: 'Безопасная платформа',
      bottom2: 'Юридическое соответствие',
      bottom3: 'Прозрачный процесс',
      cta: 'Начать инвестировать',
    },
  },
};

// =============================================================================
// PARTNERS PAGE CONTENT
// =============================================================================

export const partnersPageContent = {
  en: {
    seo: {
      metaTitle: 'Partners',
      metaDescription: 'Meet our strategic partners and collaborators.',
    },
    hero: {
      label: 'Partners',
      title: 'Strategic Partnerships',
      subtitle: 'Building the future together with industry leaders.',
      ctaButton: 'Become a Partner',
    },
    moreThanCompany: {
      title: 'More Than a Company',
      textMuted: 'REACTOR represents a new paradigm in materials science.',
      textStrong: 'We are building an ecosystem of innovation.',
      quote: 'Together, we can reshape the global economy.',
    },
    list: {
      title: 'Our Partners',
      drahoDescription: 'Strategic partner in Africa region.',
    },
  },
  ru: {
    seo: {
      metaTitle: 'Партнёры',
      metaDescription: 'Познакомьтесь с нашими стратегическими партнёрами.',
    },
    hero: {
      label: 'Партнёры',
      title: 'Стратегические партнёрства',
      subtitle: 'Строим будущее вместе с лидерами индустрии.',
      ctaButton: 'Стать партнёром',
    },
    moreThanCompany: {
      title: 'Больше чем компания',
      textMuted: 'REACTOR представляет новую парадигму в материаловедении.',
      textStrong: 'Мы создаём экосистему инноваций.',
      quote: 'Вместе мы можем изменить мировую экономику.',
    },
    list: {
      title: 'Наши партнёры',
      drahoDescription: 'Стратегический партнёр в регионе Африки.',
    },
  },
};

// =============================================================================
// CONTACT PAGE CONTENT
// =============================================================================

export const contactPageContent = {
  en: {
    seo: {
      metaTitle: 'Contact Us',
      metaDescription: 'Get in touch with the REACTOR team.',
    },
    hero: {
      title: 'Get in Touch',
      subtitle: 'We would love to hear from you.',
    },
    form: {
      sectionTitle: 'Contact Form',
      sectionSubtitle: 'Fill out the form and we will get back to you.',
      benefitsHeader: 'Why Contact Us?',
      benefit1: 'Learn about investment opportunities',
      benefit2: 'Explore partnership possibilities',
      benefit3: 'Get answers to your questions',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      companyLabel: 'Company',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitButton: 'Send Message',
      successMessage: 'Thank you! Your message has been sent.',
      errorMessage: 'Something went wrong. Please try again.',
    },
  },
  ru: {
    seo: {
      metaTitle: 'Контакты',
      metaDescription: 'Свяжитесь с командой REACTOR.',
    },
    hero: {
      title: 'Свяжитесь с нами',
      subtitle: 'Мы будем рады услышать вас.',
    },
    form: {
      sectionTitle: 'Форма обратной связи',
      sectionSubtitle: 'Заполните форму и мы свяжемся с вами.',
      benefitsHeader: 'Почему связаться с нами?',
      benefit1: 'Узнать об инвестиционных возможностях',
      benefit2: 'Изучить возможности партнёрства',
      benefit3: 'Получить ответы на ваши вопросы',
      firstNameLabel: 'Имя',
      lastNameLabel: 'Фамилия',
      companyLabel: 'Компания',
      emailLabel: 'Email',
      messageLabel: 'Сообщение',
      submitButton: 'Отправить',
      successMessage: 'Спасибо! Ваше сообщение отправлено.',
      errorMessage: 'Что-то пошло не так. Попробуйте ещё раз.',
    },
  },
};

// =============================================================================
// EXPORT ALL
// =============================================================================

export default {
  homePage: homePageContent,
  aboutPage: aboutPageContent,
  technologyPage: technologyPageContent,
  investmentPage: investmentPageContent,
  partnersPage: partnersPageContent,
  contactPage: contactPageContent,
  globalSettings: globalSettingsContent,
};
