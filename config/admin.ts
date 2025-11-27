export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  
  // Preview configuration (Strapi 5 built-in)
  preview: {
    enabled: true,
    config: {
      allowedOrigins: [env('CLIENT_URL', 'http://localhost:5173')],
      async handler(uid: string, { documentId, locale, status }) {
        const clientUrl = env('CLIENT_URL', 'http://localhost:5173');
        const previewSecret = env('PREVIEW_SECRET', 'preview-secret-key');
        
        // Map content type UID to frontend URL
        const urlMap: Record<string, string> = {
          'api::home-page.home-page': '/',
          'api::about-page.about-page': '/about-project',
          'api::technology-page.technology-page': '/technology',
          'api::investment-page.investment-page': '/investment',
          'api::partners-page.partners-page': '/partners',
          'api::contact-page.contact-page': '/contact',
          'api::post.post': '/resources',
          'api::global-setting.global-setting': '/',
        };
        
        const basePath = urlMap[uid] || '/';
        const isDraft = status === 'draft';
        
        // Build preview URL with query params
        const params = new URLSearchParams();
        params.set('secret', previewSecret);
        if (locale) params.set('locale', locale);
        if (isDraft) params.set('preview', 'true');
        
        return `${clientUrl}${basePath}?${params.toString()}`;
      },
    },
  },
});
