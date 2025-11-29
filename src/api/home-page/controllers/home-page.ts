/**
 * home-page controller
 */

import { factories } from '@strapi/strapi';
import { populateDynamicZoneSections } from '../../../helpers/populate-dynamic-zone';

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async find(ctx) {
    const result = await super.find(ctx);
    
    // Handle case when no data exists in database
    if (!result || !result.data) {
      return { data: null, meta: {} };
    }

    const { data, meta } = result;
    
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
