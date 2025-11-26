/**
 * Contact Form Routes
 * Custom routes for contact form submission
 */

export default {
  routes: [
    {
      method: 'POST',
      path: '/contact-form/submit',
      handler: 'contact-form.submit',
      config: {
        auth: false, // Allow public access
        policies: [],
        middlewares: [],
      },
    },
  ],
};

