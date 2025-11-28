/**
 * technology-carousel-card router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::technology-carousel-card.technology-carousel-card', {
  config: {
    find: {
      auth: false, // Allow public access to find (list all)
    },
    findOne: {
      auth: false, // Allow public access to findOne
    },
  },
});

