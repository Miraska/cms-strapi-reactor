/**
 * Contact Form Service
 * Handles email sending for contact form submissions
 * 
 * SMTP settings priority:
 * 1. Global Settings in Strapi (if all required fields are filled)
 * 2. Environment variables (SMTP_HOST, SMTP_USER, SMTP_PASSWORD, etc.)
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

interface GlobalSettingsSmtp {
  smtpHost?: string;
  smtpPort?: number;
  smtpUser?: string;
  smtpPassword?: string;
  smtpFromEmail?: string;
  smtpFromName?: string;
  contactFormEmails?: string[];
  contactFormSubject?: string;
}

/**
 * Get SMTP configuration from Global Settings or environment variables
 */
async function getSmtpConfig(strapi: Core.Strapi): Promise<SmtpConfig | null> {
  // First, try to get SMTP settings from Global Settings
  try {
    const settings = await strapi.documents('api::global-setting.global-setting').findFirst() as GlobalSettingsSmtp | null;
    
    if (settings?.smtpHost && settings?.smtpUser && settings?.smtpPassword) {
      return {
        host: settings.smtpHost,
        port: settings.smtpPort || 587,
        user: settings.smtpUser,
        password: settings.smtpPassword,
        fromEmail: settings.smtpFromEmail || settings.smtpUser,
        fromName: settings.smtpFromName || 'REACTOR Website',
      };
    }
  } catch (error) {
    strapi.log.warn('Failed to read SMTP settings from Global Settings, falling back to env:', error);
  }

  // Fallback to environment variables
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
 * Get Contact Form recipients and subject
 * Priority: Global Settings -> Environment Variables
 */
async function getContactConfig(strapi: Core.Strapi): Promise<{ recipients: string[]; subject: string } | null> {
  let recipients: string[] = [];
  let subject = 'Новая заявка с сайта REACTOR';

  // 1) Try to read from Global Settings first
  try {
    const settings = await strapi.documents('api::global-setting.global-setting').findFirst() as GlobalSettingsSmtp | null;

    if (settings?.contactFormEmails && Array.isArray(settings.contactFormEmails)) {
      recipients = settings.contactFormEmails.filter((e) => typeof e === 'string' && e.trim().length > 0);
    }

    if (settings?.contactFormSubject && settings.contactFormSubject.trim().length > 0) {
      subject = settings.contactFormSubject;
    }
  } catch (error) {
    strapi.log.warn('Failed to read contact config from Global Settings:', error);
  }

  // 2) Fallback to environment variables if no recipients from Global Settings
  if (recipients.length === 0) {
    const recipientsEnv = process.env.CONTACT_FORM_RECIPIENTS || '';
    recipients = recipientsEnv
      .split(',')
      .map((e) => e.trim())
      .filter((e) => e.length > 0);

    const subjectEnv = process.env.CONTACT_FORM_SUBJECT;
    if (subjectEnv && subjectEnv.trim().length > 0) {
      subject = subjectEnv;
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
    // Get SMTP config (from Global Settings or env)
    const smtp = await getSmtpConfig(strapi);
    if (!smtp) {
      strapi.log.error('SMTP settings are incomplete. Configure in Global Settings or set SMTP_HOST, SMTP_USER, SMTP_PASSWORD env variables.');
      return { success: false, message: 'Email settings not configured' };
    }

    // Get recipients and subject
    const contactConfig = await getContactConfig(strapi);
    if (!contactConfig) {
      strapi.log.error('No recipient emails configured. Set in Global Settings or CONTACT_FORM_RECIPIENTS env variable.');
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
