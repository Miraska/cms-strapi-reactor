import type { StrapiApp } from '@strapi/strapi/admin';


export default {
  config: {
    locales: ['en', 'ru', 'vi', 'fr'],
  },
  bootstrap(app: StrapiApp) {
    // You can  add additional bootstrap logic here if needed
    console.log('Strapi admin app bootstrapped', app);
  },
};

