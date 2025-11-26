/**
 * Seed script for populating Strapi with sample blog posts
 * Run: npm run seed (requires Strapi to be running)
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN =
  process.env.STRAPI_ADMIN_TOKEN ||
  '7378f0f2cc60566abcc42e55ba02f74439e4ffe1de213be9ac9e4da5a84137040ab6e4e018ad0a3a0c5a01d65956e6c0ca8f7988e21f40bb251ca482ad3d23db0bdb555d62f9519fe430281ac3f60eea4eb3dcbfe062159f311535eca59dacc9f7e8d6f9c025de0bf3a595e47d35aa635240d801e1f3724c5731f991c3a39f6c';

// Sample posts data
const postsEN = [
  {
    title: 'TranscoreTM Technology: A Revolutionary Approach to Metal Transformation',
    slug: 'transcore-technology-revolutionary-approach',
    excerpt:
      'Discover how TranscoreTM technology is changing the future of metallurgy through controlled atomic transformation.',
    content: `
<h2 style="color: #EBBE00;">The Future of Metallurgy is Here</h2>

<p>Welcome to a new era of material science. <strong>TranscoreTM</strong> technology represents a paradigm shift in how we think about metal production and transformation. Unlike traditional mining and smelting processes that have remained largely unchanged for centuries, our approach operates at the <em>atomic level</em>.</p>

<figure class="image image-style-side">
  <img src="/uploads/technology_hero.jpg" alt="TranscoreTM Reactor">
  <figcaption>The TranscoreTM reactor chamber</figcaption>
</figure>

<h3>How It Works</h3>

<p>At its core, TranscoreTM utilizes precisely controlled <span style="color: #EBBE00;">electric field resonance</span> to induce atomic-level transformations. This process involves:</p>

<ul>
  <li><strong>Resonant Frequency Tuning</strong> — Each element responds to specific electromagnetic frequencies</li>
  <li><strong>Controlled Energy Transfer</strong> — Precise energy delivery ensures stable transformations</li>
  <li><strong>Atomic Restructuring</strong> — Nuclei are reconfigured without the need for particle accelerators</li>
</ul>

<blockquote>
  <p>"TranscoreTM is not just an improvement on existing processes—it's an entirely new category of technology that makes the impossible possible."</p>
  <p style="text-align: right;"><em>— Dr. Elena Vostok, Chief Science Officer</em></p>
</blockquote>

<h3 style="color: #EBBE00;">Key Advantages</h3>

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Traditional Mining</th>
      <th>TranscoreTM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Environmental Impact</td>
      <td style="color: #ff6b6b;">High</td>
      <td style="color: #51cf66;">Minimal</td>
    </tr>
    <tr>
      <td>Energy Efficiency</td>
      <td style="color: #ff6b6b;">~20%</td>
      <td style="color: #51cf66;">>90%</td>
    </tr>
    <tr>
      <td>Production Time</td>
      <td>Months</td>
      <td>Hours</td>
    </tr>
    <tr>
      <td>Purity Level</td>
      <td>95-99%</td>
      <td>99.99%+</td>
    </tr>
  </tbody>
</table>

<h3>Applications Across Industries</h3>

<p>The implications of this technology span multiple sectors:</p>

<ol>
  <li><strong>Electronics Manufacturing</strong> — Production of ultra-pure rare earth elements for semiconductors</li>
  <li><strong>Aerospace</strong> — Creation of specialized alloys with precise atomic compositions</li>
  <li><strong>Medical Technology</strong> — Synthesis of isotopes for diagnostics and treatment</li>
  <li><strong>Clean Energy</strong> — Materials for next-generation batteries and solar cells</li>
</ol>

<h3 style="color: #EBBE00;">The Science Behind the Magic</h3>

<p>While the full technical details are proprietary, the fundamental principles are rooted in <strong>quantum mechanics</strong> and <strong>nuclear physics</strong>. Our team of physicists has identified specific resonance frequencies that can:</p>

<ul>
  <li>Alter nuclear binding energies</li>
  <li>Facilitate proton-neutron transitions</li>
  <li>Enable controlled transmutation at room temperature</li>
</ul>

<p style="background-color: rgba(235, 190, 0, 0.1); padding: 20px; border-left: 4px solid #EBBE00; border-radius: 4px;">
  <strong>Important:</strong> All processes comply with international safety standards and are conducted within specially designed containment facilities.
</p>

<h3>Join the Revolution</h3>

<p>We're actively seeking partners and investors who share our vision of a sustainable future. Whether you're an institutional investor, a corporate partner, or a visionary entrepreneur, there's a place for you in the TranscoreTM ecosystem.</p>

<p><a href="/contact" style="color: #EBBE00; text-decoration: underline;">Contact us today</a> to learn more about investment opportunities and partnership programs.</p>
`,
    publishedAt: new Date('2024-11-15T10:00:00.000Z').toISOString(),
  },
  {
    title: 'Investment Opportunities in Next-Generation Energy Technology',
    slug: 'investment-opportunities-next-gen-energy',
    excerpt:
      'Learn about the unprecedented investment potential in atomic transformation technology and how early investors can benefit.',
    content: `
<h2 style="color: #EBBE00;">Why Now is the Time to Invest</h2>

<p>The global energy transition is accelerating, and with it comes <strong>unprecedented investment opportunities</strong>. REACTOR's TranscoreTM technology sits at the intersection of clean energy, materials science, and advanced manufacturing—three of the fastest-growing sectors in the global economy.</p>

<figure class="image">
  <img src="/uploads/investment_chart.png" alt="Market Growth Projection">
  <figcaption>Projected market growth for advanced materials (2024-2030)</figcaption>
</figure>

<h3>Market Opportunity</h3>

<p>The addressable market for our technology spans several high-growth sectors:</p>

<ul>
  <li><strong>Rare Earth Elements Market:</strong> <span style="color: #EBBE00;">$15.8 billion</span> by 2030</li>
  <li><strong>Precious Metals:</strong> <span style="color: #EBBE00;">$290+ billion</span> annually</li>
  <li><strong>Nuclear Medicine:</strong> <span style="color: #EBBE00;">$24 billion</span> and growing 8% YoY</li>
  <li><strong>Advanced Semiconductors:</strong> <span style="color: #EBBE00;">$1 trillion</span> by 2030</li>
</ul>

<blockquote style="border-color: #EBBE00;">
  <p>"REACTOR represents one of the most compelling investment opportunities in the deep-tech space. The potential for disruption across multiple industries is staggering."</p>
  <p style="text-align: right;"><em>— Marcus Chen, Partner at Horizon Ventures</em></p>
</blockquote>

<h3 style="color: #EBBE00;">Investment Tiers</h3>

<p>We offer flexible investment structures to accommodate different portfolio strategies:</p>

<table style="width: 100%;">
  <thead>
    <tr style="background-color: rgba(235, 190, 0, 0.2);">
      <th>Tier</th>
      <th>Minimum Investment</th>
      <th>Benefits</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: #cd7f32;">Bronze</strong></td>
      <td>$10,000</td>
      <td>Quarterly reports, investor updates</td>
    </tr>
    <tr>
      <td><strong style="color: #C0C0C0;">Silver</strong></td>
      <td>$50,000</td>
      <td>Monthly calls, priority access to new rounds</td>
    </tr>
    <tr>
      <td><strong style="color: #FFD700;">Gold</strong></td>
      <td>$250,000</td>
      <td>Board observer rights, strategic input</td>
    </tr>
    <tr>
      <td><strong style="color: #E5E4E2;">Platinum</strong></td>
      <td>$1,000,000+</td>
      <td>Board seat, co-investment opportunities</td>
    </tr>
  </tbody>
</table>

<h3>Return Projections</h3>

<p>Based on our current development trajectory and market analysis:</p>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0;">
  <div style="background: linear-gradient(135deg, rgba(235, 190, 0, 0.1), rgba(235, 190, 0, 0.05)); padding: 20px; border-radius: 12px; text-align: center;">
    <p style="font-size: 36px; font-weight: bold; color: #EBBE00; margin: 0;">10-15x</p>
    <p style="margin: 0; opacity: 0.7;">Conservative Scenario</p>
  </div>
  <div style="background: linear-gradient(135deg, rgba(235, 190, 0, 0.2), rgba(235, 190, 0, 0.1)); padding: 20px; border-radius: 12px; text-align: center;">
    <p style="font-size: 36px; font-weight: bold; color: #EBBE00; margin: 0;">25-35x</p>
    <p style="margin: 0; opacity: 0.7;">Base Scenario</p>
  </div>
  <div style="background: linear-gradient(135deg, rgba(235, 190, 0, 0.3), rgba(235, 190, 0, 0.15)); padding: 20px; border-radius: 12px; text-align: center;">
    <p style="font-size: 36px; font-weight: bold; color: #EBBE00; margin: 0;">50x+</p>
    <p style="margin: 0; opacity: 0.7;">Optimistic Scenario</p>
  </div>
</div>

<h3 style="color: #EBBE00;">Risk Considerations</h3>

<p>We believe in full transparency with our investors. Key risks include:</p>

<ol>
  <li><strong>Technology Risk:</strong> While our core process is proven, scaling presents engineering challenges</li>
  <li><strong>Regulatory Risk:</strong> Nuclear-adjacent technologies require careful compliance management</li>
  <li><strong>Market Risk:</strong> Commodity prices can affect our competitive positioning</li>
  <li><strong>Execution Risk:</strong> Rapid scaling requires exceptional operational excellence</li>
</ol>

<p style="background-color: rgba(81, 207, 102, 0.1); padding: 20px; border-left: 4px solid #51cf66; border-radius: 4px;">
  <strong>Mitigation Strategy:</strong> Our experienced leadership team, strong IP portfolio, and strategic partnerships significantly de-risk the investment thesis.
</p>

<h3>Next Steps</h3>

<p>Ready to explore investment opportunities?</p>

<ol>
  <li><strong>Schedule a Call:</strong> Speak with our investor relations team</li>
  <li><strong>Due Diligence:</strong> Access our data room with technical documentation</li>
  <li><strong>Site Visit:</strong> Tour our facilities and meet the team</li>
  <li><strong>Invest:</strong> Complete the investment process</li>
</ol>

<p><a href="/contact" style="display: inline-block; background: #EBBE00; color: #000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Request Investor Package →</a></p>
`,
    publishedAt: new Date('2024-12-01T10:00:00.000Z').toISOString(),
  },
];

const postsRU = [
  {
    title: 'Технология TranscoreTM: Революционный подход к трансформации металлов',
    slug: 'transcore-technology-revolutionary-approach',
    excerpt:
      'Узнайте, как технология TranscoreTM меняет будущее металлургии через контролируемую атомную трансформацию.',
    content: `
<h2 style="color: #EBBE00;">Будущее металлургии уже здесь</h2>

<p>Добро пожаловать в новую эру материаловедения. Технология <strong>TranscoreTM</strong> представляет собой смену парадигмы в нашем понимании производства и трансформации металлов. В отличие от традиционных процессов добычи и плавки, которые практически не менялись веками, наш подход работает на <em>атомном уровне</em>.</p>

<figure class="image image-style-side">
  <img src="/uploads/technology_hero.jpg" alt="Реактор TranscoreTM">
  <figcaption>Реакторная камера TranscoreTM</figcaption>
</figure>

<h3>Как это работает</h3>

<p>В основе TranscoreTM лежит точно контролируемый <span style="color: #EBBE00;">резонанс электрического поля</span> для индуцирования трансформаций на атомном уровне. Этот процесс включает:</p>

<ul>
  <li><strong>Настройка резонансной частоты</strong> — Каждый элемент реагирует на определённые электромагнитные частоты</li>
  <li><strong>Контролируемая передача энергии</strong> — Точная доставка энергии обеспечивает стабильные трансформации</li>
  <li><strong>Атомная реструктуризация</strong> — Ядра переконфигурируются без необходимости ускорителей частиц</li>
</ul>

<blockquote>
  <p>«TranscoreTM — это не просто улучшение существующих процессов. Это совершенно новая категория технологий, которая делает невозможное возможным.»</p>
  <p style="text-align: right;"><em>— Д-р Елена Восток, Главный научный сотрудник</em></p>
</blockquote>

<h3 style="color: #EBBE00;">Ключевые преимущества</h3>

<table>
  <thead>
    <tr>
      <th>Характеристика</th>
      <th>Традиционная добыча</th>
      <th>TranscoreTM</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Воздействие на окружающую среду</td>
      <td style="color: #ff6b6b;">Высокое</td>
      <td style="color: #51cf66;">Минимальное</td>
    </tr>
    <tr>
      <td>Энергоэффективность</td>
      <td style="color: #ff6b6b;">~20%</td>
      <td style="color: #51cf66;">>90%</td>
    </tr>
    <tr>
      <td>Время производства</td>
      <td>Месяцы</td>
      <td>Часы</td>
    </tr>
    <tr>
      <td>Уровень чистоты</td>
      <td>95-99%</td>
      <td>99.99%+</td>
    </tr>
  </tbody>
</table>

<h3>Применение в различных отраслях</h3>

<p>Последствия этой технологии охватывают множество секторов:</p>

<ol>
  <li><strong>Производство электроники</strong> — Производство сверхчистых редкоземельных элементов для полупроводников</li>
  <li><strong>Аэрокосмическая отрасль</strong> — Создание специализированных сплавов с точным атомным составом</li>
  <li><strong>Медицинские технологии</strong> — Синтез изотопов для диагностики и лечения</li>
  <li><strong>Чистая энергия</strong> — Материалы для батарей и солнечных панелей нового поколения</li>
</ol>

<p style="background-color: rgba(235, 190, 0, 0.1); padding: 20px; border-left: 4px solid #EBBE00; border-radius: 4px;">
  <strong>Важно:</strong> Все процессы соответствуют международным стандартам безопасности и проводятся в специально спроектированных изолированных помещениях.
</p>

<h3>Присоединяйтесь к революции</h3>

<p>Мы активно ищем партнёров и инвесторов, разделяющих наше видение устойчивого будущего. Будь вы институциональным инвестором, корпоративным партнёром или предпринимателем-визионером — для вас найдётся место в экосистеме TranscoreTM.</p>

<p><a href="/contact" style="color: #EBBE00; text-decoration: underline;">Свяжитесь с нами сегодня</a>, чтобы узнать больше об инвестиционных возможностях и партнёрских программах.</p>
`,
    publishedAt: new Date('2024-11-15T10:00:00.000Z').toISOString(),
  },
  {
    title: 'Инвестиционные возможности в энергетических технологиях нового поколения',
    slug: 'investment-opportunities-next-gen-energy',
    excerpt:
      'Узнайте о беспрецедентном инвестиционном потенциале технологии атомной трансформации и как ранние инвесторы могут получить выгоду.',
    content: `
<h2 style="color: #EBBE00;">Почему сейчас время инвестировать</h2>

<p>Глобальный энергетический переход ускоряется, и вместе с ним открываются <strong>беспрецедентные инвестиционные возможности</strong>. Технология TranscoreTM компании REACTOR находится на пересечении чистой энергетики, материаловедения и передового производства — трёх самых быстрорастущих секторов мировой экономики.</p>

<figure class="image">
  <img src="/uploads/investment_chart.png" alt="Прогноз роста рынка">
  <figcaption>Прогнозируемый рост рынка передовых материалов (2024-2030)</figcaption>
</figure>

<h3>Рыночные возможности</h3>

<p>Адресуемый рынок для нашей технологии охватывает несколько быстрорастущих секторов:</p>

<ul>
  <li><strong>Рынок редкоземельных элементов:</strong> <span style="color: #EBBE00;">$15,8 млрд</span> к 2030 году</li>
  <li><strong>Драгоценные металлы:</strong> <span style="color: #EBBE00;">$290+ млрд</span> ежегодно</li>
  <li><strong>Ядерная медицина:</strong> <span style="color: #EBBE00;">$24 млрд</span> с ростом 8% в год</li>
  <li><strong>Передовые полупроводники:</strong> <span style="color: #EBBE00;">$1 трлн</span> к 2030 году</li>
</ul>

<blockquote style="border-color: #EBBE00;">
  <p>«REACTOR представляет одну из самых привлекательных инвестиционных возможностей в сфере deep-tech. Потенциал для разрушения множества отраслей поразителен.»</p>
  <p style="text-align: right;"><em>— Маркус Чен, партнёр Horizon Ventures</em></p>
</blockquote>

<h3 style="color: #EBBE00;">Инвестиционные уровни</h3>

<p>Мы предлагаем гибкие инвестиционные структуры для различных портфельных стратегий:</p>

<table style="width: 100%;">
  <thead>
    <tr style="background-color: rgba(235, 190, 0, 0.2);">
      <th>Уровень</th>
      <th>Минимальная инвестиция</th>
      <th>Преимущества</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong style="color: #cd7f32;">Бронза</strong></td>
      <td>$10,000</td>
      <td>Квартальные отчёты, обновления для инвесторов</td>
    </tr>
    <tr>
      <td><strong style="color: #C0C0C0;">Серебро</strong></td>
      <td>$50,000</td>
      <td>Ежемесячные звонки, приоритетный доступ к новым раундам</td>
    </tr>
    <tr>
      <td><strong style="color: #FFD700;">Золото</strong></td>
      <td>$250,000</td>
      <td>Права наблюдателя в совете директоров, стратегический вклад</td>
    </tr>
    <tr>
      <td><strong style="color: #E5E4E2;">Платина</strong></td>
      <td>$1,000,000+</td>
      <td>Место в совете директоров, возможности со-инвестирования</td>
    </tr>
  </tbody>
</table>

<h3>Прогнозы доходности</h3>

<p>На основе нашей текущей траектории развития и анализа рынка:</p>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 30px 0;">
  <div style="background: linear-gradient(135deg, rgba(235, 190, 0, 0.1), rgba(235, 190, 0, 0.05)); padding: 20px; border-radius: 12px; text-align: center;">
    <p style="font-size: 36px; font-weight: bold; color: #EBBE00; margin: 0;">10-15x</p>
    <p style="margin: 0; opacity: 0.7;">Консервативный сценарий</p>
  </div>
  <div style="background: linear-gradient(135deg, rgba(235, 190, 0, 0.2), rgba(235, 190, 0, 0.1)); padding: 20px; border-radius: 12px; text-align: center;">
    <p style="font-size: 36px; font-weight: bold; color: #EBBE00; margin: 0;">25-35x</p>
    <p style="margin: 0; opacity: 0.7;">Базовый сценарий</p>
  </div>
  <div style="background: linear-gradient(135deg, rgba(235, 190, 0, 0.3), rgba(235, 190, 0, 0.15)); padding: 20px; border-radius: 12px; text-align: center;">
    <p style="font-size: 36px; font-weight: bold; color: #EBBE00; margin: 0;">50x+</p>
    <p style="margin: 0; opacity: 0.7;">Оптимистичный сценарий</p>
  </div>
</div>

<p style="background-color: rgba(81, 207, 102, 0.1); padding: 20px; border-left: 4px solid #51cf66; border-radius: 4px;">
  <strong>Стратегия снижения рисков:</strong> Наша опытная команда руководителей, сильный портфель интеллектуальной собственности и стратегические партнёрства значительно снижают инвестиционные риски.
</p>

<h3>Следующие шаги</h3>

<p>Готовы изучить инвестиционные возможности?</p>

<ol>
  <li><strong>Запланируйте звонок:</strong> Поговорите с нашей командой по работе с инвесторами</li>
  <li><strong>Due Diligence:</strong> Получите доступ к нашей комнате данных с технической документацией</li>
  <li><strong>Визит на объект:</strong> Посетите наши объекты и познакомьтесь с командой</li>
  <li><strong>Инвестируйте:</strong> Завершите инвестиционный процесс</li>
</ol>

<p><a href="/contact" style="display: inline-block; background: #EBBE00; color: #000; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">Запросить инвестиционный пакет →</a></p>
`,
    publishedAt: new Date('2024-12-01T10:00:00.000Z').toISOString(),
  },
];

async function createPost(postData, locale = 'en') {
  const url = `${STRAPI_URL}/api/posts`;

  const body = {
    data: {
      title: postData.title,
      slug: postData.slug,
      excerpt: postData.excerpt,
      content: postData.content,
      publishedAt: postData.publishedAt,
      locale: locale,
    },
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create post: ${response.status} ${errorText}`);
    }

    const result = await response.json();
    console.log(`✅ Created post: "${postData.title}" (${locale})`);
    return result;
  } catch (error) {
    console.error(`❌ Error creating post "${postData.title}":`, error.message);
    return null;
  }
}

async function checkStrapiConnection() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/posts`);
    if (!response.ok) {
      throw new Error(`Strapi returned ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('❌ Cannot connect to Strapi. Make sure it is running at', STRAPI_URL);
    console.error('   Error:', error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting seed process...');
  console.log(`   Strapi URL: ${STRAPI_URL}`);
  console.log('');

  // Check connection
  const isConnected = await checkStrapiConnection();
  if (!isConnected) {
    console.log('');
    console.log('💡 Tips:');
    console.log('   1. Make sure Strapi is running: cd cms && npm run develop');
    console.log('   2. Enable public POST permissions for Post content type');
    console.log('   3. Or set STRAPI_ADMIN_TOKEN environment variable');
    process.exit(1);
  }

  console.log('✅ Connected to Strapi');
  console.log('');

  // Create English posts
  console.log('📝 Creating English posts...');
  for (const post of postsEN) {
    await createPost(post, 'en');
  }
  console.log('');

  // Create Russian posts
  console.log('📝 Creating Russian posts...');
  for (const post of postsRU) {
    await createPost(post, 'ru');
  }
  console.log('');

  console.log('🎉 Seed completed!');
  console.log('');
  console.log('📋 Next steps:');
  console.log('   1. Go to Strapi admin panel: http://localhost:1337/admin');
  console.log('   2. Upload cover images for the posts');
  console.log('   3. Review and publish the posts');
}

main().catch(console.error);
