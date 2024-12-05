import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Mailgen from 'mailgen';
import { format } from 'date-fns';
import generateAppointmentEmail from '../config/emailTemplates.js';

dotenv.config();

const router = express.Router();

// Helper function to generate owner email content
const generateOwnerEmail = ({ name, email, phone, date, serviceType }) => {
  const formattedDate = format(new Date(date), 'MMMM do, yyyy, hh:mm a'); // e.g., December 5th, 2024, 10:00 AM

  const mailGenerator = new Mailgen({
    theme: 'salted',
    product: {
      name: 'Your Company Name',
      link: 'https://yourcompanywebsite.com',
      logo: 'https://photos.app.goo.gl/3ur8RdHPPSRjsMMg6',
      copyright: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    },
  });

  return mailGenerator.generate({
    body: {
      name: 'Doctor Ken',
      intro: 'You have received a new appointment!',
      table: {
        data: [
          { 'Client Name': name },
          { 'Client Email': email },
          { 'Client Phone': phone },
          { 'Appointment Date': formattedDate },
          { 'Service Type': serviceType },
        ],
        columns: {
          customWidth: { 0: '30%', 1: '70%' },
          customAlignment: { 0: 'left', 1: 'left' },
        },
      },
      action: {
        instructions: 'Log into the admin dashboard for more details:',
        button: {
          color: '#1a73e8',
          text: 'View Appointment',
          link: 'https://yourcompanywebsite.com/admin/appointments',
        },
      },
      outro: 'Feel free to contact support if you have any questions.',
      signature: 'Best regards,\nYour Company Team',
    },
  });
};

router.post('/submit-appointment', async (req, res) => {
  const { name, email, phone, date, serviceType } = req.body;

  // Validate input
  if (!name || !email || !phone || !date || !serviceType) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false, // Use true for port 465
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Generate email content for client and owner
    const clientEmailBody = generateAppointmentEmail({ name, email, phone, date, serviceType });
    const ownerEmailBody = generateOwnerEmail({ name, email, phone, date, serviceType });

    // Client email options
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      html: clientEmailBody,
    };

    // Owner email options
    const ownerMailOptions = {
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: '🔔 New Appointment Notification',
      html: ownerEmailBody,
    };

    // Send emails to client and owner
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(ownerMailOptions);

    // Success response
    res.status(200).json({
      message: 'Appointment request sent successfully.',
      appointmentDetails: { name, email, phone, date, serviceType },
    });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ message: 'Error sending email.' });
  }
});

export default router;




//depolying to Hosting 

// import express from 'express';
// import nodemailer from 'nodemailer';
// import generateAppointmentEmail from '../config/emailTemplates.js';

// const router = express.Router();

// router.post('/submit-appointment', async (req, res) => {
//   const { name, email, phone, date, serviceType } = req.body;

//   // Email transporter setup
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT || 587,
//     secure: false, // Use true for 465, false for other ports
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const emailBody = generateAppointmentEmail({ name, email, phone, date, serviceType });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Appointment Confirmation',
//     html: emailBody,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Appointment request sent successfully.' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Error sending email.' });
//   }
// });

// export default router;

