/**
 * Contact Form Controller
 * Handles contact form submission and validation
 * Includes built-in rate limiting protection
 */

import type { Core } from '@strapi/strapi';

interface ContactFormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  message: string;
}

// Koa context type for Strapi controllers
interface StrapiContext {
  request: {
    body: unknown;
    headers: Record<string, string | string[] | undefined>;
    ip?: string;
  };
  status: number;
  body: unknown;
  set: (key: string, value: string) => void;
  send: (data: unknown) => void;
  badRequest: (message: string, details?: unknown) => void;
  internalServerError: (message: string) => void;
}

// =============================================================================
// RATE LIMITING
// =============================================================================

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory rate limit store
const rateLimitStore = new Map<string, RateLimitEntry>();

// Configuration
const RATE_LIMIT = 5; // Max requests
const RATE_INTERVAL = 60 * 1000; // 1 minute in ms

// Cleanup expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60000);

/**
 * Get client IP from request context
 */
function getClientIp(ctx: StrapiContext): string {
  const forwarded = ctx.request.headers['x-forwarded-for'];
  const realIp = ctx.request.headers['x-real-ip'];
  
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (typeof realIp === 'string') {
    return realIp;
  }
  
  return ctx.request.ip || 'unknown';
}

/**
 * Check and update rate limit for client
 * Returns null if allowed, error object if rate limited
 */
function checkRateLimit(ctx: StrapiContext): { limited: boolean; retryAfter?: number } {
  const clientIp = getClientIp(ctx);
  const key = `contact-form:${clientIp}`;
  const now = Date.now();

  let entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    entry = { count: 0, resetTime: now + RATE_INTERVAL };
  }

  entry.count++;
  rateLimitStore.set(key, entry);

  // Set rate limit headers
  ctx.set('X-RateLimit-Limit', String(RATE_LIMIT));
  ctx.set('X-RateLimit-Remaining', String(Math.max(0, RATE_LIMIT - entry.count)));
  ctx.set('X-RateLimit-Reset', String(Math.ceil(entry.resetTime / 1000)));

  if (entry.count > RATE_LIMIT) {
    return {
      limited: true,
      retryAfter: Math.ceil((entry.resetTime - now) / 1000),
    };
  }

  return { limited: false };
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
   * 
   * Rate limited: 5 requests per minute per IP
   */
  async submit(ctx) {
    try {
      // Check rate limit first
      const rateLimit = checkRateLimit(ctx);
      if (rateLimit.limited) {
        ctx.set('Retry-After', String(rateLimit.retryAfter));
        strapi.log.warn(`Rate limit exceeded for contact form from ${getClientIp(ctx)}`);
        ctx.status = 429;
        ctx.body = {
          error: {
            status: 429,
            name: 'TooManyRequestsError',
            message: 'Too many requests. Please try again later.',
            details: { retryAfter: rateLimit.retryAfter },
          },
        };
        return;
      }

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

