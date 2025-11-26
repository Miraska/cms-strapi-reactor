import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.toc-item': ArticleTocItem;
    }
  }
}
