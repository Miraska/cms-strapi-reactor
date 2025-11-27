export default {
  config: {
    // Locales for admin panel
    locales: ['en', 'ru'],

    // Customize the admin panel theme
    theme: {
      light: {
        colors: {
          primary100: '#ffecd9',
          primary200: '#ffd9b3',
          primary500: '#f59e0b',
          primary600: '#d97706',
          primary700: '#b45309',
          buttonPrimary500: '#f59e0b',
          buttonPrimary600: '#d97706',
        },
      },
      dark: {
        colors: {
          primary100: '#1a1a2e',
          primary200: '#16213e',
          primary500: '#f59e0b',
          primary600: '#d97706',
          primary700: '#b45309',
          buttonPrimary500: '#f59e0b',
          buttonPrimary600: '#d97706',
        },
      },
    },

    // Tutorials and notifications
    tutorials: false,
    notifications: {
      releases: false,
    },

    // Customize translations
    translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'REACTOR CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Content Management',
        'Auth.form.welcome.title': 'Welcome to REACTOR CMS',
        'Auth.form.welcome.subtitle': 'Manage your website content',
      },
      ru: {
        'app.components.LeftMenu.navbrand.title': 'REACTOR CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Управление контентом',
        'Auth.form.welcome.title': 'Добро пожаловать в REACTOR CMS',
        'Auth.form.welcome.subtitle': 'Управляйте контентом вашего сайта',
      },
    },
  },

  bootstrap() {
    // Customize admin behaviors here
  },
};
