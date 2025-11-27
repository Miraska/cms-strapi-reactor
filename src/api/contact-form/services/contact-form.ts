/**
 * Contact Form Service
 * Handles email sending for contact form submissions
 * 
 * SMTP settings are loaded from environment variables for security:
 * - SMTP_HOST: SMTP server host (e.g., smtp.gmail.com)
 * - SMTP_PORT: SMTP server port (587 for TLS, 465 for SSL)
 * - SMTP_USER: SMTP authentication username
 * - SMTP_PASSWORD: SMTP authentication password (use App Password for Gmail)
 * - SMTP_FROM_EMAIL: Sender email address
 * - SMTP_FROM_NAME: Sender display name
 */

import type { Core } from '@strapi/strapi';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  message: string;
}

interface SmtpConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  fromEmail: string;
  fromName: string;
}

/**
 * Get SMTP configuration from environment variables
 */
function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.SMTP_FROM_EMAIL || user;
  const fromName = process.env.SMTP_FROM_NAME || 'REACTOR Website';

  if (!host || !user || !password) {
    return null;
  }

  return { host, port, user, password, fromEmail: fromEmail || '', fromName };
}

/**
 * Get Contact Form recipients and subject from environment variables
 * - CONTACT_FORM_RECIPIENTS: comma-separated list of emails
 * - CONTACT_FORM_SUBJECT: optional custom subject
 */
async function getContactConfig(strapi: Core.Strapi): Promise<{ recipients: string[]; subject: string } | null> {
  // 1) Try to read from environment variables
  const recipientsEnv = process.env.CONTACT_FORM_RECIPIENTS || '';
  let recipients = recipientsEnv
    .split(',')
    .map((e) => e.trim())
    .filter((e) => e.length > 0);

  let subject = process.env.CONTACT_FORM_SUBJECT || 'Новая заявка с сайта REACTOR';

  // 2) Fallback to Global Settings in admin if env not provided
  if (recipients.length === 0) {
    try {
      const settings = await strapi.documents('api::global-setting.global-setting').findFirst();
      const settingsRecipients: string[] | undefined = (settings as any)?.contactFormEmails;
      const settingsSubject: string | undefined = (settings as any)?.contactFormSubject;

      if (Array.isArray(settingsRecipients)) {
        recipients = settingsRecipients.filter((e) => typeof e === 'string' && e.trim().length > 0);
      }

      if (settingsSubject && settingsSubject.trim().length > 0) {
        subject = settingsSubject;
      }
    } catch (error) {
      strapi.log.error('Failed to read Global Settings for contact config:', error);
    }
  }

  if (recipients.length === 0) {
    return null;
  }

  return { recipients, subject };
}

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  /**
   * Create nodemailer transporter from SMTP config
   */
  createTransporter(smtp: SmtpConfig) {
    return nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.port === 465,
      auth: {
        user: smtp.user,
        pass: smtp.password,
      },
    });
  },

  /**
   * Format contact form data into HTML email
   */
  formatEmailHtml(data: ContactFormData): string {
    const timestamp = new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #ebbe00; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background:rgb(235, 235, 235); padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #555; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #eee; }
    .message { white-space: pre-wrap; }
    .footer { margin-top: 20px; font-size: 12px; color: #888; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">Новая заявка с сайта REACTOR</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Имя</div>
        <div class="value">${data.firstName}</div>
      </div>
      <div class="field">
        <div class="label">Фамилия</div>
        <div class="value">${data.lastName}</div>
      </div>
      <div class="field">
        <div class="label">Компания</div>
        <div class="value">${data.company || 'Не указана'}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      <div class="field">
        <div class="label">Сообщение</div>
        <div class="value message">${data.message}</div>
      </div>
      <div class="footer">
        🕐 Отправлено: ${timestamp}
      </div>
    </div>
  </div>
</body>
</html>`;
  },

  /**
   * Format contact form data into plain text email
   */
  formatEmailText(data: ContactFormData): string {
    const timestamp = new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return `
📩 Новая заявка с сайта REACTOR

👤 Имя: ${data.firstName} ${data.lastName}
🏢 Компания: ${data.company || 'Не указана'}
📧 Email: ${data.email}

💬 Сообщение:
${data.message}

🕐 Отправлено: ${timestamp}
    `.trim();
  },

  /**
   * Send contact form email
   */
  async sendEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    // Get SMTP config from environment
    const smtp = getSmtpConfig();
    if (!smtp) {
      strapi.log.error('SMTP settings are incomplete. Check SMTP_HOST, SMTP_USER, SMTP_PASSWORD env variables.');
      return { success: false, message: 'Email settings not configured' };
    }

    // Get recipients and subject from environment
    const contactConfig = await getContactConfig(strapi);
    if (!contactConfig) {
      strapi.log.error('No recipient emails configured. Set CONTACT_FORM_RECIPIENTS env variable.');
      return { success: false, message: 'No recipient emails configured' };
    }

    const { recipients, subject } = contactConfig;

    try {
      const transporter = this.createTransporter(smtp);

      const mailOptions = {
        from: `"${smtp.fromName}" <${smtp.fromEmail}>`,
        to: recipients.join(', '),
        replyTo: data.email,
        subject,
        text: this.formatEmailText(data),
        html: this.formatEmailHtml(data),
      };

      await transporter.sendMail(mailOptions);
      strapi.log.info(`Contact form email sent successfully to: ${recipients.join(', ')}`);
      
      return { success: true, message: 'Email sent successfully' };
    } catch (error) {
      strapi.log.error('Failed to send email:', error);
      return { success: false, message: 'Failed to send email' };
    }
  },
});

