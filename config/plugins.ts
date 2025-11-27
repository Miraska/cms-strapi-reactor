export default ({ env: _env }) => ({
  // Enable i18n plugin with supported locales
  i18n: {
    enabled: true,
    config: {
      defaultLocale: 'en',
      locales: ['en', 'ru', 'vi', 'fr'],
    },
  },
  
  // Upload plugin configuration
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
      sizeLimit: 10 * 1024 * 1024, // 10MB
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64,
      },
    },
  },

  // CKEditor for advanced rich text editing
  ckeditor5: {
    enabled: true,
  },
});
