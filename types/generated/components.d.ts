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
    description: 'Contact form and information section with benefits';
    displayName: 'Contact Info Section';
    icon: 'envelop';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.text-item', true> &
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
      }> &
      Schema.Attribute.DefaultTo<'Company'>;
    emailLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Email'>;
    firstNameLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'First name'>;
    formTitle: Schema.Attribute.String &
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
      }> &
      Schema.Attribute.DefaultTo<'Last name'>;
    messageLabel: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Schema.Attribute.DefaultTo<'Message'>;
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
    avatars: Schema.Attribute.Component<'shared.avatar-item', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    backgrounds: Schema.Attribute.Component<'shared.background-images', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    cardImages: Schema.Attribute.Component<'shared.card-images', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
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
    icons: Schema.Attribute.Component<'shared.icons-group', false> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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

export interface SectionsInvestPreview extends Struct.ComponentSchema {
  collectionName: 'components_sections_invest_previews';
  info: {
    description: 'Investment preview section with cards for home page';
    displayName: 'Invest Preview Section';
    icon: 'chartBubble';
  };
  attributes: {
    image1: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    image2: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
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

export interface SectionsWhyTrustUsInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_trust_us_infos';
  info: {
    description: 'Content section for Why Trust Us switcher (both primary and secondary pages)';
    displayName: 'Why Trust Us Info';
    icon: 'shield';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.trust-card', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    primaryTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    secondaryTiles: Schema.Attribute.Component<'shared.trust-tile', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    secondaryTitle: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    showCards: Schema.Attribute.Boolean &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }> &
      Schema.Attribute.DefaultTo<true>;
    tiles: Schema.Attribute.Component<'shared.trust-tile', true> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface SharedAvatarItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_avatar_items';
  info: {
    description: 'Avatar with name for crowdinvesting section';
    displayName: 'Avatar Item';
    icon: 'user';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface SharedBackgroundImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_background_images';
  info: {
    description: 'Background and overlay images';
    displayName: 'Background Images';
    icon: 'landscape';
  };
  attributes: {
    tradeUpImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
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

export interface SharedCardImages extends Struct.ComponentSchema {
  collectionName: 'components_shared_card_images';
  info: {
    description: 'Images for card backgrounds and masks';
    displayName: 'Card Images';
    icon: 'picture';
  };
  attributes: {
    cardImage: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    maskImage1: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    maskImage2: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
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
    description: 'A feature card with title, description and optional icon';
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
    icon: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
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

export interface SharedIconsGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_icons_groups';
  info: {
    description: 'Group of icons for crowdinvesting section';
    displayName: 'Icons Group';
    icon: 'apps';
  };
  attributes: {
    iconBuild: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    iconCentral: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    iconFile: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    iconGear: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    iconGuard: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
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

export interface SharedTrustCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_trust_cards';
  info: {
    description: 'Card with icon and text for Why Trust Us Info';
    displayName: 'Trust Card';
    icon: 'check';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface SharedTrustTile extends Struct.ComponentSchema {
  collectionName: 'components_shared_trust_tiles';
  info: {
    description: 'Image tile for Why Trust Us Info gallery';
    displayName: 'Trust Tile';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    size: Schema.Attribute.Enumeration<['large', 'small']> & Schema.Attribute.DefaultTo<'small'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.ambition-section': AboutAmbitionSection;
      'about.join-us-section': AboutJoinUsSection;
      'about.profit-section': AboutProfitSection;
      'article.toc-item': ArticleTocItem;
      'global.footer': GlobalFooter;
      'global.generation-opportunity': GlobalGenerationOpportunity;
      'global.nav-item': GlobalNavItem;
      'global.navigation': GlobalNavigation;
      'global.social-link': GlobalSocialLink;
      'partners.more-than-company-section': PartnersMoreThanCompanySection;
      'sections.about-preview': SectionsAboutPreview;
      'sections.accordion': SectionsAccordion;
      'sections.contact-info': SectionsContactInfo;
      'sections.crowdinvesting': SectionsCrowdinvesting;
      'sections.cta': SectionsCta;
      'sections.features': SectionsFeatures;
      'sections.hero': SectionsHero;
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
      'sections.why-trust-us-info': SectionsWhyTrustUsInfo;
      'shared.avatar-item': SharedAvatarItem;
      'shared.background-images': SharedBackgroundImages;
      'shared.button': SharedButton;
      'shared.card-images': SharedCardImages;
      'shared.card-item': SharedCardItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.icons-group': SharedIconsGroup;
      'shared.media-item': SharedMediaItem;
      'shared.seo': SharedSeo;
      'shared.stat-item': SharedStatItem;
      'shared.text-item': SharedTextItem;
      'shared.trust-card': SharedTrustCard;
      'shared.trust-tile': SharedTrustTile;
      'technology.controlled-rollout-section': TechnologyControlledRolloutSection;
      'technology.resonant-section': TechnologyResonantSection;
      'technology.scientific-section': TechnologyScientificSection;
    }
  }
}
