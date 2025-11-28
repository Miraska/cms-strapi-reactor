/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';
import { populateDynamicZoneSections } from '../../../helpers/populate-dynamic-zone';

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    
    if (!data?.sections) {
      return { data, meta };
    }

    // Populate relations in Dynamic Zone sections
    const populatedSections = await populateDynamicZoneSections(strapi, data.sections);

    return {
      data: {
        ...data,
        sections: populatedSections,
      },
      meta,
    };
  },
}));
