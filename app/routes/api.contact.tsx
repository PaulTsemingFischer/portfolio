// app/routes/api.contact.tsx
import { ActionFunctionArgs, json } from "@remix-run/node";
import nodemailer from 'nodemailer';

// Interface for form data
interface ContactFormData {
  name: string;
  email: string;
  message?: string;
  subject?: string;
}

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: 'mail.proton.me',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASSWORD, 
    },
  });
};

// Function to send confirmation email to user
const sendConfirmationEmail = async (formData: ContactFormData): Promise<void> => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: 'Thank you for contacting me!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Thank you for your message!</h2>
        <p>Hi ${formData.name},</p>
        <p>I've received your message and will get back to you soon.</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Your message:</h3>
          <p><strong>Subject:</strong> ${formData.subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message || 'No message provided'}</p>
        </div>
        <p>Best regards,<br>Paul Fischer</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// Function to send notification email to admin
const sendNotificationEmail = async (formData: ContactFormData): Promise<void> => {
  const transporter = createTransporter();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL, // Your admin email
    subject: `New contact email from ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Email</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject || 'No subject'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${formData.message || 'No message provided'}</p>
        </div>
        <p><em>Sent at: ${new Date().toLocaleString()}</em></p>
      </div>
    `,
    replyTo: formData.email, // Allow direct reply to the user
  };

  await transporter.sendMail(mailOptions);
};

// Remix action function
export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ success: false, message: "Method not allowed" }, { status: 405 });
  }

  try {
    const formData = await request.json() as ContactFormData;

    // Validate required fields
    if (!formData.name || !formData.email) {
      return json({ 
        success: false, 
        message: 'Name and email are required' 
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return json({ 
        success: false, 
        message: 'Invalid email format' 
      }, { status: 400 });
    }

    // Send emails
    await Promise.all([
      sendConfirmationEmail(formData),
      sendNotificationEmail(formData)
    ]);

    return json({ 
      success: true, 
      message: 'Form submitted successfully! Check your email for confirmation.' 
    });

  } catch (error) {
    console.error('Error sending emails:', error);
    return json({ 
      success: false, 
      message: 'Failed to send emails. Please try again.' 
    }, { status: 500 });
  }
}

// Alternative configurations for different email providers
const createCustomTransporter = (provider: 'gmail' | 'outlook' | 'smtp') => {
  const configs = {
    gmail: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
    outlook: {
      service: 'hotmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    },
  };

  return nodemailer.createTransport(configs[provider]);
};

export { 
  createCustomTransporter 
};