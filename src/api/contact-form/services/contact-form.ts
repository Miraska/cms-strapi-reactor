/**
 * Contact Form Service
 * Handles email sending for contact form submissions
 * 
 * Configuration sources:
 * - SMTP technical settings (host, port, user, password): ENV ONLY
 * - Business settings (recipients, fromEmail, fromName, subject): CMS first, then ENV fallback
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
}

interface EmailConfig {
  fromEmail: string;
  fromName: string;
  recipients: string[];
  subject: string;
}

interface GlobalSettingsContact {
  contactFormEmails?: string[];
  contactFormSubject?: string;
  contactFromEmail?: string;
  contactFromName?: string;
}

/**
 * Get SMTP technical config from environment variables ONLY
 */
function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !user || !password) {
    return null;
  }

  return { host, port, user, password };
}

/**
 * Get email config (recipients, from, subject)
 * Priority: CMS Global Settings -> Environment Variables
 */
async function getEmailConfig(strapi: Core.Strapi): Promise<EmailConfig | null> {
  let recipients: string[] = [];
  let subject = 'Новая заявка с сайта REACTOR';
  let fromEmail = process.env.SMTP_USER || '';
  let fromName = 'REACTOR Website';

  // 1) Try to read from Global Settings first
  try {
    const settings = await strapi.documents('api::global-setting.global-setting').findFirst() as GlobalSettingsContact | null;

    // Recipients from CMS
    if (settings?.contactFormEmails && Array.isArray(settings.contactFormEmails)) {
      recipients = settings.contactFormEmails.filter((e) => typeof e === 'string' && e.trim().length > 0);
    }

    // Subject from CMS
    if (settings?.contactFormSubject && settings.contactFormSubject.trim().length > 0) {
      subject = settings.contactFormSubject;
    }

    // From Email from CMS
    if (settings?.contactFromEmail && settings.contactFromEmail.trim().length > 0) {
      fromEmail = settings.contactFromEmail;
    }

    // From Name from CMS
    if (settings?.contactFromName && settings.contactFromName.trim().length > 0) {
      fromName = settings.contactFromName;
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
  }

  // Fallback subject from ENV
  if (subject === 'Новая заявка с сайта REACTOR') {
    const subjectEnv = process.env.CONTACT_FORM_SUBJECT;
    if (subjectEnv && subjectEnv.trim().length > 0) {
      subject = subjectEnv;
    }
  }

  // Fallback fromEmail from ENV
  if (!fromEmail) {
    fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || '';
  }

  // Fallback fromName from ENV
  const fromNameEnv = process.env.SMTP_FROM_NAME;
  if (fromNameEnv && fromName === 'REACTOR Website') {
    fromName = fromNameEnv;
  }

  if (recipients.length === 0) {
    return null;
  }

  return { recipients, subject, fromEmail, fromName };
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
      // Add timeout settings
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 15000,
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
    // Get SMTP config from ENV ONLY
    const smtp = getSmtpConfig();
    if (!smtp) {
      strapi.log.error('SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASSWORD in environment variables.');
      return { success: false, message: 'SMTP not configured' };
    }

    // Get email config (recipients, from, subject) - CMS first, then ENV
    const emailConfig = await getEmailConfig(strapi);
    if (!emailConfig) {
      strapi.log.error('No recipient emails configured. Set in CMS Global Settings or CONTACT_FORM_RECIPIENTS env variable.');
      return { success: false, message: 'No recipient emails configured' };
    }

    const { recipients, subject, fromEmail, fromName } = emailConfig;

    // Log configuration (without sensitive data)
    strapi.log.info(`Sending email via ${smtp.host}:${smtp.port} from "${fromName}" <${fromEmail}> to ${recipients.join(', ')}`);

    try {
      const transporter = this.createTransporter(smtp);

      // Verify connection first
      await transporter.verify();
      strapi.log.info('SMTP connection verified successfully');

      const mailOptions = {
        from: `"${fromName}" <${fromEmail}>`,
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
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      strapi.log.error('Failed to send email:', errorMessage);
      return { success: false, message: `Failed to send email: ${errorMessage}` };
    }
  },
});
