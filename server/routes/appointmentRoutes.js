import express from 'express';
import nodemailer from 'nodemailer';
import generateAppointmentEmail from '../config/emailTemplates.js';
import dotenv from 'dotenv';
import Mailgen from 'mailgen';

dotenv.config();

const router = express.Router();

router.post('/submit-appointment', async (req, res) => {
  const { name, email, phone, date, serviceType } = req.body;

  // Validate input
  if (!name || !email || !phone || !date || !serviceType) {
    return res.status(400).json({ message: 'All fields are required.' }); 
  }

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Configure Mailgen for styling
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Clinic Website',
      link: 'https://clinic-website.com', // Replace with your actual link
      logo: 'https://clinic-website.com/logo.png',
      copyright: '© 2024 Clinic Website',
    },
  });

  try {
    // Generate email content for the client
    const clientEmailBody = generateAppointmentEmail({
      name,
      email,
      phone,
      date,
      serviceType,
    });

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Client's email
      subject: 'Appointment Confirmation',
      html: clientEmailBody,
    };

    // Generate styled email for the owner
    const ownerEmailContent = {
      body: {
        name: ' Doctor Ken',
        intro: 'You have received a new appointment!',
        table: {
          data: [
            { 'Client Details': name },
            { 'Client Email': email },
            { 'Client Phone': phone },
            { 'Appointment Date': date },
            { 'Service Type': serviceType },
          ],
        },
        outro: 'Log into the admin dashboard for more details.',
      },
    };

    const ownerEmailBody = mailGenerator.generate(ownerEmailContent);

    const ownerMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL, // Owner's email from environment variable
      subject: 'New Appointment Notification',
      html: ownerEmailBody,
    };

    // Send emails to both the client and the owner
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(ownerMailOptions);

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

