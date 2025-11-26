import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Set up public permissions for Post API on first run
    await setupPublicPermissions(strapi);
  },
};

/**
 * Configure public permissions for the Post content type
 * This allows unauthenticated users to read posts
 */
async function setupPublicPermissions(strapi: Core.Strapi) {
  try {
    // Find the public role
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' },
    });

    if (!publicRole) {
      strapi.log.warn('Public role not found, skipping permission setup');
      return;
    }

    // Define the permissions we want to grant
    const permissions = [{ action: 'api::post.post.find' }, { action: 'api::post.post.findOne' }];

    for (const perm of permissions) {
      // Check if permission already exists
      const existingPermission = await strapi.db
        .query('plugin::users-permissions.permission')
        .findOne({
          where: {
            action: perm.action,
            role: publicRole.id,
          },
        });

      if (!existingPermission) {
        // Create the permission
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: {
            action: perm.action,
            role: publicRole.id,
          },
        });
        strapi.log.info(`Created public permission: ${perm.action}`);
      }
    }

    strapi.log.info('Public permissions for Post API configured successfully');
  } catch (error) {
    strapi.log.error('Failed to set up public permissions:', error);
  }
}
