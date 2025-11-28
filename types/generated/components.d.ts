import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAmbitionSection extends Struct.ComponentSchema {
  collectionName: 'components_about_ambition_sections';
  info: {
    description: 'About page ambition/goals section with list items';
    displayName: 'Ambition Section';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    goals: Schema.Attribute.Component<'shared.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images'>;
    kicker: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface AboutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_about_hero_sections';
  info: {
    description: 'Hero section for about page';
    displayName: 'About Hero Section';
    icon: 'landscape';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface AboutJoinUsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_join_us_sections';
  info: {
    description: 'About page CTA section with title and multiple texts';
    displayName: 'Join Us Section';
    icon: 'handHeart';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    texts: Schema.Attribute.Component<'shared.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface AboutMarketWaitingSection extends Struct.ComponentSchema {
  collectionName: 'components_about_market_waiting_sections';
  info: {
    description: 'A Market Waiting for Our Metals section';
    displayName: 'About Market Waiting Section';
    icon: 'globe';
  };
  attributes: {
    card1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card4: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    conclusion: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    intro: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface AboutProfitSection extends Struct.ComponentSchema {
  collectionName: 'components_about_profit_sections';
  info: {
    description: 'About page profit cards with scroll animation';
    displayName: 'Profit Cards Section';
    icon: 'chartBubble';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface AboutTranscorSection extends Struct.ComponentSchema {
  collectionName: 'components_about_transcor_sections';
  info: {
    description: 'The Transcor Method section';
    displayName: 'About Transcor Section';
    icon: 'atom';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    kicker: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ArticleTocItem extends Struct.ComponentSchema {
  collectionName: 'components_article_toc_items';
  info: {
    description: 'A single item in the table of contents for article navigation';
    displayName: 'Table of Contents Item';
    icon: 'bulletList';
  };
  attributes: {
    anchorId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ContactFormSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_sections';
  info: {
    description: 'Contact form section with labels and messages';
    displayName: 'Contact Form Section';
    icon: 'envelop';
  };
  attributes: {
    benefit1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    benefit2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    benefit3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    benefitsHeader: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    companyLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    emailLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    errorMessage: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    firstNameLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    lastNameLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    messageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sectionSubtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    sectionTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    submitButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    successMessage: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface ContactHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_contact_hero_sections';
  info: {
    description: 'Hero section for contact page';
    displayName: 'Contact Hero Section';
    icon: 'landscape';
  };
  attributes: {
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    description: 'Footer content and social links';
    displayName: 'Footer';
    icon: 'apps';
  };
  attributes: {
    copyright: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    mapLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    socialLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    socialLinks: Schema.Attribute.Component<'global.social-link', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface GlobalGenerationOpportunity extends Struct.ComponentSchema {
  collectionName: 'components_global_generation_opportunities';
  info: {
    description: 'Once-in-a-generation opportunity section used on multiple pages';
    displayName: 'Generation Opportunity';
    icon: 'star';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface GlobalNavItem extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_items';
  info: {
    description: 'Navigation menu item with label and URL';
    displayName: 'Navigation Item';
    icon: 'cursor';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    path: Schema.Attribute.String & Schema.Attribute.Required & Schema.Attribute.DefaultTo<'/'>;
  };
}

export interface GlobalNavigation extends Struct.ComponentSchema {
  collectionName: 'components_global_navigations';
  info: {
    description: 'Main navigation menu items and invest button settings';
    displayName: 'Navigation';
    icon: 'layer';
  };
  attributes: {
    aboutProject: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    contact: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    investButtonText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Invest Now'>;
    investButtonUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'https://goldenafrica-invest.com'>;
    investButtonVariant: Schema.Attribute.Enumeration<
      ['primary', 'yellow', 'secondary', 'white', 'outline']
    > &
      Schema.Attribute.DefaultTo<'white'>;
    investment: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    partners: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    resources: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    technology: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface GlobalSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_global_social_links';
  info: {
    description: 'Social media link with platform name, URL and optional custom icon';
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    customIcon: Schema.Attribute.Media<'images'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    platform: Schema.Attribute.Enumeration<
      [
        'linkedin',
        'twitter',
        'facebook',
        'instagram',
        'youtube',
        'telegram',
        'email',
        'website',
        'custom',
      ]
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_home_about_sections';
  info: {
    description: 'About TranscoreTM section on home page';
    displayName: 'Home About Section';
    icon: 'information';
  };
  attributes: {
    fromLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    quote: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    toLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeCrowdinvestingSection extends Struct.ComponentSchema {
  collectionName: 'components_home_crowdinvesting_sections';
  info: {
    description: 'Crowdinvesting Participation section';
    displayName: 'Home Crowdinvesting Section';
    icon: 'handHeart';
  };
  attributes: {
    cardTopText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    managedViaBackOffice: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    minimumEntry: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    minimumEntryAmount: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    openToAll: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    description: 'Hero section for the home page';
    displayName: 'Home Hero Section';
    icon: 'landscape';
  };
  attributes: {
    ctaButtonText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    ctaButtonUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeInvestSection extends Struct.ComponentSchema {
  collectionName: 'components_home_invest_sections';
  info: {
    description: 'Why invest in REACTOR section';
    displayName: 'Home Invest Section';
    icon: 'seed';
  };
  attributes: {
    card1Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card1Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card2Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card2Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card3Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card3Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeMarketSection extends Struct.ComponentSchema {
  collectionName: 'components_home_market_sections';
  info: {
    description: 'Applications and Market section';
    displayName: 'Home Market Section';
    icon: 'chartBubble';
  };
  attributes: {
    benefit1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    benefit2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    benefit3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    benefit4: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    goldMarketAmount: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    goldMarketLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    statsPerMonth: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    statsProfit: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    statsTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeTariffsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_tariffs_sections';
  info: {
    description: 'How much can an investor earn section';
    displayName: 'Home Tariffs Section';
    icon: 'priceTag';
  };
  attributes: {
    companyValuation: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    earlyInvestment: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    equity: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    growthMinimal: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pricingText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    scenarioTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    yourWorth: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_home_team_sections';
  info: {
    description: 'Meet the team section';
    displayName: 'Home Team Section';
    icon: 'user';
  };
  attributes: {
    members: Schema.Attribute.Component<'shared.team-member', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    nextLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    previousLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeTechnologySection extends Struct.ComponentSchema {
  collectionName: 'components_home_technology_sections';
  info: {
    description: 'How does the technology work section on home page';
    displayName: 'Home Technology Section';
    icon: 'cog';
  };
  attributes: {
    altersText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    processText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    synthesisText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomeWhyTrustUsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_why_trust_us_sections';
  info: {
    description: 'Why Trust Us info section';
    displayName: 'Home Why Trust Us Section';
    icon: 'shield';
  };
  attributes: {
    card1Text: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card2Text: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card3Text: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card4Text: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reactorTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface InvestmentAnyoneSection extends Struct.ComponentSchema {
  collectionName: 'components_investment_anyone_sections';
  info: {
    description: 'Anyone can become an investor section';
    displayName: 'Investment Anyone Can Invest Section';
    icon: 'user';
  };
  attributes: {
    bottom1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    bottom2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    bottom3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cta: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    divider: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    top1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    top2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    top3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    top4: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface InvestmentFormatSection extends Struct.ComponentSchema {
  collectionName: 'components_investment_format_sections';
  info: {
    description: 'Investment Format section';
    displayName: 'Investment Format Section';
    icon: 'grid';
  };
  attributes: {
    card1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface InvestmentHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_investment_hero_sections';
  info: {
    description: 'Hero section for investment page';
    displayName: 'Investment Hero Section';
    icon: 'landscape';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface InvestmentProfitSection extends Struct.ComponentSchema {
  collectionName: 'components_investment_profit_sections';
  info: {
    description: 'How investor profit section';
    displayName: 'Investment Profit Section';
    icon: 'chartPie';
  };
  attributes: {
    card1Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card1Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card2Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card2Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card3Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card3Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card4Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    card4Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    note: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface InvestmentWhyInvestSection extends Struct.ComponentSchema {
  collectionName: 'components_investment_why_invest_sections';
  info: {
    description: 'Why invest in SINTEZMET now section';
    displayName: 'Investment Why Invest Now Section';
    icon: 'question';
  };
  attributes: {
    block1Line1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block1Line2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block1Line3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block1Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block2Line1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block2Line2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block2Line3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block2Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block3Line1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block3Line2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block3Line3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block3Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block4Line1: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block4Line2: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block4Line3: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    block4Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface InvestmentWhyTrustUsSection extends Struct.ComponentSchema {
  collectionName: 'components_investment_why_trust_us_sections';
  info: {
    description: 'Why trust us section on investment page';
    displayName: 'Investment Why Trust Us Section';
    icon: 'shield';
  };
  attributes: {
    reason1Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reason1Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reason2Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reason2Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reason3Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reason3Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reason4Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    reason4Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PartnersHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_partners_hero_sections';
  info: {
    description: 'Hero section for partners page';
    displayName: 'Partners Hero Section';
    icon: 'landscape';
  };
  attributes: {
    ctaButton: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PartnersListSection extends Struct.ComponentSchema {
  collectionName: 'components_partners_list_sections';
  info: {
    description: 'Partners that go with us section';
    displayName: 'Partners List Section';
    icon: 'grid';
  };
  attributes: {
    drahoDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface PartnersMoreThanCompanySection extends Struct.ComponentSchema {
  collectionName: 'components_partners_more_than_company_sections';
  info: {
    description: 'More than a company section';
    displayName: 'Partners More Than Company Section';
    icon: 'heart';
  };
  attributes: {
    quote: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    textMuted: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    textStrong: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsAboutPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_previews';
  info: {
    description: 'Company about section with animated text and quote';
    displayName: 'About Preview Section';
    icon: 'information';
  };
  attributes: {
    fromLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    quote: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    toLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_sections_accordions';
  info: {
    description: 'FAQ-style accordion with expandable items';
    displayName: 'Accordion Section';
    icon: 'bulletList';
  };
  attributes: {
    allowMultiple: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    items: Schema.Attribute.Component<'shared.card-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_infos';
  info: {
    description: 'Contact form and information section';
    displayName: 'Contact Info Section';
    icon: 'envelop';
  };
  attributes: {
    emailLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Email'>;
    formTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    messageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Message'>;
    nameLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Name'>;
    showForm: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    submitButtonText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Send'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    successMessage: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsCrowdinvesting extends Struct.ComponentSchema {
  collectionName: 'components_sections_crowdinvestings';
  info: {
    description: 'Crowdinvesting information section';
    displayName: 'Crowdinvesting Section';
    icon: 'handHeart';
  };
  attributes: {
    cardTopText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    features: Schema.Attribute.Component<'shared.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    minimumEntryAmount: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    minimumEntryLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    description: 'Call-to-action section with title, description and button';
    displayName: 'CTA Section';
    icon: 'cursor';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_features';
  info: {
    description: 'Section with feature cards grid';
    displayName: 'Features Section';
    icon: 'apps';
  };
  attributes: {
    columns: Schema.Attribute.Enumeration<['2', '3', '4']> & Schema.Attribute.DefaultTo<'3'>;
    items: Schema.Attribute.Component<'shared.feature-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Schema.Attribute.Enumeration<['cards', 'list', 'icons']> &
      Schema.Attribute.DefaultTo<'cards'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: 'Hero section with title, subtitle and CTA button';
    displayName: 'Hero Section';
    icon: 'landscape';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsImageCarousel extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_carousels';
  info: {
    description: 'Carousel/slider with images';
    displayName: 'Image Carousel Section';
    icon: 'slideshow';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    autoplayDelay: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<5000>;
    showNavigation: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showPagination: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    slides: Schema.Attribute.Component<'shared.media-item', true> & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsInvestPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_invest_previews';
  info: {
    description: 'Investment preview section with cards for home page';
    displayName: 'Invest Preview Section';
    icon: 'chartBubble';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.feature-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsInvestmentBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_investment_benefits';
  info: {
    description: 'Why invest now section with detailed benefit blocks';
    displayName: 'Investment Benefits Section';
    icon: 'rocket';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'shared.feature-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Schema.Attribute.Enumeration<['vertical', 'horizontal', 'alternating']> &
      Schema.Attribute.DefaultTo<'vertical'>;
  };
}

export interface SectionsInvestmentFormat extends Struct.ComponentSchema {
  collectionName: 'components_sections_investment_formats';
  info: {
    description: 'Investment format and options section';
    displayName: 'Investment Format Section';
    icon: 'layer';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    formats: Schema.Attribute.Component<'shared.card-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsInvestorTypes extends Struct.ComponentSchema {
  collectionName: 'components_sections_investor_types';
  info: {
    description: 'Section showing who can invest';
    displayName: 'Investor Types Section';
    icon: 'user';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    types: Schema.Attribute.Component<'shared.card-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsMarket extends Struct.ComponentSchema {
  collectionName: 'components_sections_markets';
  info: {
    description: 'Applications & Market section with cards, benefits and images';
    displayName: 'Market Section';
    icon: 'chartCircle';
  };
  attributes: {
    avatars: Schema.Attribute.Media<'images', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    benefits: Schema.Attribute.Component<'shared.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    bottomCellLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Other markets'>;
    bottomCellValue: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Hundreds of billions'>;
    leftCardImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    leftCardImageAlt: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Gold market visualization'>;
    leftCardLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Gold market'>;
    leftCardValue: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'$285 Billion'>;
    rightCardDescription: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Profit per device'>;
    rightCardImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    rightCardImageAlt: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Diverse applications visualization'>;
    rightCardSubtitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'/month'>;
    rightCardTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'$1 Million'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsPartnersGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_partners_grids';
  info: {
    description: 'Grid of partner logos with optional links';
    displayName: 'Partners Grid Section';
    icon: 'grid';
  };
  attributes: {
    columns: Schema.Attribute.Enumeration<['3', '4', '5', '6']> & Schema.Attribute.DefaultTo<'4'>;
    partners: Schema.Attribute.Relation<'oneToMany', 'api::partner.partner'>;
    showDescription: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsRichContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_contents';
  info: {
    description: 'Free-form rich text content section';
    displayName: 'Rich Content Section';
    icon: 'feather';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    maxWidth: Schema.Attribute.Enumeration<['narrow', 'medium', 'wide', 'full']> &
      Schema.Attribute.DefaultTo<'medium'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsStats extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats';
  info: {
    description: 'Section displaying statistics and metrics';
    displayName: 'Stats Section';
    icon: 'chartBubble';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    items: Schema.Attribute.Component<'shared.stat-item', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    variant: Schema.Attribute.Enumeration<['default', 'cards', 'inline']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SectionsTariffs extends Struct.ComponentSchema {
  collectionName: 'components_sections_tariffs';
  info: {
    description: 'Investment tariffs and pricing section';
    displayName: 'Tariffs Section';
    icon: 'priceTag';
  };
  attributes: {
    companyValuation: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    earlyInvestment: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    equity: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    growthMinimal: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    pricingText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    scenarioTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    yourWorth: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsTeamCarousel extends Struct.ComponentSchema {
  collectionName: 'components_sections_team_carousels';
  info: {
    description: 'Team members carousel with photos and roles';
    displayName: 'Team Carousel Section';
    icon: 'user';
  };
  attributes: {
    members: Schema.Attribute.Relation<'oneToMany', 'api::team-member.team-member'>;
    nextLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Next'>;
    previousLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Previous'>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsTechnologyPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_technology_previews';
  info: {
    description: 'Technology overview section with carousel cards';
    displayName: 'Technology Preview Section';
    icon: 'cog';
  };
  attributes: {
    altersText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    carouselCards: Schema.Attribute.Relation<
      'oneToMany',
      'api::technology-carousel-card.technology-carousel-card'
    >;
    processText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    synthesisText: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_with_images';
  info: {
    description: 'Section with text content and image side by side';
    displayName: 'Text With Image Section';
    icon: 'layout';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    cta: Schema.Attribute.Component<'shared.button', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    quote: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SectionsWhyTrustUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_trust_us';
  info: {
    description: 'Interactive trust banner with toggle text';
    displayName: 'Why Trust Us Section';
    icon: 'shield';
  };
  attributes: {
    primaryText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryText: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Schema.Attribute.DefaultTo<'REACTOR'>;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: 'A CTA button with text and URL';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_items';
  info: {
    description: 'A card with title and text';
    displayName: 'Card Item';
    icon: 'apps';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    description: 'A feature card with title and description';
    displayName: 'Feature Item';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: 'A link with text and URL';
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_media_items';
  info: {
    description: 'An image or video with caption and alt text';
    displayName: 'Media Item';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    caption: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    media: Schema.Attribute.Media<'images' | 'videos'> & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    description: 'A statistic item with value, label and description';
    displayName: 'Stat Item';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    value: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    description: 'A team member with name, role and photo';
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    memberKey: Schema.Attribute.String;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    photo: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_items';
  info: {
    description: 'A simple text item for lists';
    displayName: 'Text Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface TechnologyCarouselSection extends Struct.ComponentSchema {
  collectionName: 'components_technology_carousel_sections';
  info: {
    description: 'Technology carousel slides';
    displayName: 'Technology Carousel Section';
    icon: 'slideshow';
  };
  attributes: {
    slide1Description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slide1Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slide2Description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slide2Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slide3Description: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    slide3Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface TechnologyControlledRolloutSection extends Struct.ComponentSchema {
  collectionName: 'components_technology_controlled_rollout_sections';
  info: {
    description: 'Technology page controlled rollout section with columns';
    displayName: 'Controlled Rollout Section';
    icon: 'expand';
  };
  attributes: {
    columns: Schema.Attribute.Component<'shared.card-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface TechnologyResonantSection extends Struct.ComponentSchema {
  collectionName: 'components_technology_resonant_sections';
  info: {
    description: 'Technology page resonant mechanism explanation section';
    displayName: 'Resonant Mechanism Section';
    icon: 'cog';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    pills: Schema.Attribute.Component<'shared.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle1: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    subtitle2: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface TechnologyScientificSection extends Struct.ComponentSchema {
  collectionName: 'components_technology_scientific_sections';
  info: {
    description: 'Technology page scientific foundation section with bullets';
    displayName: 'Scientific Foundation Section';
    icon: 'book';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'shared.text-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface TechnologyUniqueFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_technology_unique_features_sections';
  info: {
    description: 'What makes it unique section';
    displayName: 'Technology Unique Features Section';
    icon: 'star';
  };
  attributes: {
    feature1Desc: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    feature1Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    feature2Desc: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    feature2Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    feature3Desc: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    feature3Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    feature4Desc: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    feature4Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.ambition-section': AboutAmbitionSection;
      'about.hero-section': AboutHeroSection;
      'about.join-us-section': AboutJoinUsSection;
      'about.market-waiting-section': AboutMarketWaitingSection;
      'about.profit-section': AboutProfitSection;
      'about.transcor-section': AboutTranscorSection;
      'article.toc-item': ArticleTocItem;
      'contact.form-section': ContactFormSection;
      'contact.hero-section': ContactHeroSection;
      'global.footer': GlobalFooter;
      'global.generation-opportunity': GlobalGenerationOpportunity;
      'global.nav-item': GlobalNavItem;
      'global.navigation': GlobalNavigation;
      'global.social-link': GlobalSocialLink;
      'home.about-section': HomeAboutSection;
      'home.crowdinvesting-section': HomeCrowdinvestingSection;
      'home.hero-section': HomeHeroSection;
      'home.invest-section': HomeInvestSection;
      'home.market-section': HomeMarketSection;
      'home.tariffs-section': HomeTariffsSection;
      'home.team-section': HomeTeamSection;
      'home.technology-section': HomeTechnologySection;
      'home.why-trust-us-section': HomeWhyTrustUsSection;
      'investment.anyone-section': InvestmentAnyoneSection;
      'investment.format-section': InvestmentFormatSection;
      'investment.hero-section': InvestmentHeroSection;
      'investment.profit-section': InvestmentProfitSection;
      'investment.why-invest-section': InvestmentWhyInvestSection;
      'investment.why-trust-us-section': InvestmentWhyTrustUsSection;
      'partners.hero-section': PartnersHeroSection;
      'partners.list-section': PartnersListSection;
      'partners.more-than-company-section': PartnersMoreThanCompanySection;
      'sections.about-preview': SectionsAboutPreview;
      'sections.accordion': SectionsAccordion;
      'sections.contact-info': SectionsContactInfo;
      'sections.crowdinvesting': SectionsCrowdinvesting;
      'sections.cta': SectionsCta;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
      'sections.image-carousel': SectionsImageCarousel;
      'sections.invest-preview': SectionsInvestPreview;
      'sections.investment-benefits': SectionsInvestmentBenefits;
      'sections.investment-format': SectionsInvestmentFormat;
      'sections.investor-types': SectionsInvestorTypes;
      'sections.market': SectionsMarket;
      'sections.partners-grid': SectionsPartnersGrid;
      'sections.rich-content': SectionsRichContent;
      'sections.stats': SectionsStats;
      'sections.tariffs': SectionsTariffs;
      'sections.team-carousel': SectionsTeamCarousel;
      'sections.technology-preview': SectionsTechnologyPreview;
      'sections.text-with-image': SectionsTextWithImage;
      'sections.why-trust-us': SectionsWhyTrustUs;
      'shared.button': SharedButton;
      'shared.card-item': SharedCardItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.link': SharedLink;
      'shared.media-item': SharedMediaItem;
      'shared.seo': SharedSeo;
      'shared.stat-item': SharedStatItem;
      'shared.team-member': SharedTeamMember;
      'shared.text-item': SharedTextItem;
      'technology.carousel-section': TechnologyCarouselSection;
      'technology.controlled-rollout-section': TechnologyControlledRolloutSection;
      'technology.resonant-section': TechnologyResonantSection;
      'technology.scientific-section': TechnologyScientificSection;
      'technology.unique-features-section': TechnologyUniqueFeaturesSection;
    }
  }
}
