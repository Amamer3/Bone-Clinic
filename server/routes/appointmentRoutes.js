import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Mailgen from 'mailgen';
import { format } from 'date-fns';
import { generateDynamicEmail } from '../utils/emailHelpers.js';
import validator from 'validator';

dotenv.config();

const router = express.Router();

router.post('/submit-appointment', async (req, res) => {
  const { name, email, phone, date, serviceType } = req.body;

  // Validate input
  if (!name || !email || !phone || !date || !serviceType) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  if (!validator.isMobilePhone(phone, 'any')) {
    return res.status(400).json({ message: 'Invalid phone number.' });
  }

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Generate email content
    const formattedDate = format(new Date(date), 'MMMM do, yyyy, hh:mm a');
    const clientEmailBody = generateDynamicEmail({
      recipientName: name,
      introMessage: 'Your appointment is confirmed!',
      appointmentDetails: { name, email, phone, formattedDate, serviceType },
      outroMessage: 'Looking forward to seeing you!',
      signature: 'Best regards,\nSolidForm Clinic',
    });

    const ownerEmailBody = generateDynamicEmail({
      recipientName: 'Team',
      introMessage: 'A new appointment has been scheduled!',
      appointmentDetails: { name, email, phone, formattedDate, serviceType },
      actionDetails: {
        instructions: 'View appointment details below:',
        buttonText: 'View Appointment',
        buttonColor: '#1a73e8',
        link: 'https://yourcompanywebsite.com/admin/appointments',
      },
    });

    // Email options
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Appointment Confirmation',
      html: clientEmailBody,
    };

    const ownerMailOptions = {
      from: `"SolidForm Clinic" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: '🔔 New Appointment Notification',
      html: ownerEmailBody,
    };

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(ownerMailOptions),
    ]);

    res.status(200).json({
      message: 'Appointment request sent successfully.',
      appointmentDetails: { name, email, phone, date, serviceType },
    });
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).json({ message: 'Failed to process your request.', error: error.message });
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

