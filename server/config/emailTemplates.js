import Mailgen from 'mailgen';

// Initialize Mailgen with dynamic product details
const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'SolidForm Clinic',
    link: process.env.WEBSITE_URL || 'http://localhost:5500', // Dynamic website URL
  },
});

const generateAppointmentEmail = ({ name, email, phone, date, serviceType }) => {
  const manageAppointmentLink = `${process.env.WEBSITE_URL || 'http://localhost:5500'}/manage-appointment?email=${email}&date=${encodeURIComponent(date)}`;

  return mailGenerator.generate({
    body: {
      name: name || 'Valued Patient', // Fallback name
      intro: `Thank you, ${name || 'Valued Patient'}, for booking an appointment with SolidForm Clinic!`,
      table: {
        data: [
          { item: 'Name', description: name || 'N/A' },
          { item: 'Email', description: email || 'N/A' },
          { item: 'Phone', description: phone || 'N/A' },
          { item: 'Appointment Date', description: date || 'N/A' },
          { item: 'Service Type', description: serviceType || 'N/A' },
        ],
      },
      action: {
        instructions: 'If you need to reschedule or cancel your appointment, please use the link below:',
        button: {
          color: '#22BC66', // Button color
          text: 'Manage Appointment',
          link: manageAppointmentLink,
        },
      },
      outro: 'We look forward to seeing you! If you have any questions, feel free to contact us at support@SolidFormClinic.com.',
    },
  });
};

export default generateAppointmentEmail;
