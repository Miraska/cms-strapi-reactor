import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await setupPublicPermissions(strapi);
  },
};

/**
 * Configure public permissions for content types
 * This allows unauthenticated users to read published content
 */
async function setupPublicPermissions(strapi: Core.Strapi) {
  try {
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });

    if (!publicRole) {
      strapi.log.warn('Public role not found, skipping permission setup');
      return;
    }

    // Define all public permissions for page APIs
    const permissions = [
      // Posts
      { action: 'api::post.post.find' },
      { action: 'api::post.post.findOne' },
      // Page Content - Individual Pages
      { action: 'api::home-page.home-page.find' },
      { action: 'api::about-page.about-page.find' },
      { action: 'api::technology-page.technology-page.find' },
      { action: 'api::investment-page.investment-page.find' },
      { action: 'api::partners-page.partners-page.find' },
      { action: 'api::contact-page.contact-page.find' },
      // Global Settings
      { action: 'api::global-setting.global-setting.find' },
    ];

    for (const perm of permissions) {
      const existingPermission = await strapi.db
        .query('plugin::users-permissions.permission')
        .findOne({
          where: {
            action: perm.action,
            role: publicRole.id,
          },
        });

      if (!existingPermission) {
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: {
            action: perm.action,
            role: publicRole.id,
          },
        });
        strapi.log.info(`Created public permission: ${perm.action}`);
      }
    }

    strapi.log.info('Public permissions configured successfully');
  } catch (error) {
    strapi.log.error('Failed to set up public permissions:', error);
  }
}
