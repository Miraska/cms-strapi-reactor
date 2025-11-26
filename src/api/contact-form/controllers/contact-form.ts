/**
 * Contact Form Controller
 * Handles contact form submission and validation
 */

import type { Core } from '@strapi/strapi';

interface ContactFormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  message: string;
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate contact form data
 */
function validateFormData(data: unknown): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const formData = data as Partial<ContactFormData>;

  if (!formData.firstName?.trim()) {
    errors.push('First name is required');
  }
  if (!formData.lastName?.trim()) {
    errors.push('Last name is required');
  }
  if (!formData.email?.trim()) {
    errors.push('Email is required');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Invalid email format');
  }
  if (!formData.message?.trim()) {
    errors.push('Message is required');
  }

  return { valid: errors.length === 0, errors };
}

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  /**
   * Handle contact form submission
   * POST /api/contact-form/submit
   */
  async submit(ctx) {
    try {
      const data = ctx.request.body as unknown;

      // Handle both direct body and wrapped data
      const formData = (typeof data === 'object' && data !== null && 'data' in data)
        ? (data as { data: ContactFormData }).data
        : data as ContactFormData;

      // Validate input
      const validation = validateFormData(formData);
      if (!validation.valid) {
        return ctx.badRequest('Validation failed', { errors: validation.errors });
      }

      // Sanitize data
      const sanitizedData: ContactFormData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        company: formData.company?.trim() || '',
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
      };

      // Send email using the contact-form service
      const result = await strapi.service('api::contact-form.contact-form').sendEmail(sanitizedData);

      if (result.success) {
        return ctx.send({
          success: true,
          message: 'Form submitted successfully',
        });
      } else {
        // Return 400 with detailed message from service for easier debugging
        return ctx.badRequest(result.message || 'Failed to process form submission');
      }
    } catch (error) {
      strapi.log.error('Contact form controller error:', error);
      return ctx.internalServerError('An unexpected error occurred');
    }
  },
});

