import Mailgen from 'mailgen';

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'SolidForm Clinic',
    link: 'https://boneclinic.com',
    
  },
});

const generateAppointmentEmail = ({ name, email, phone, date, serviceType }) => {
  const manageAppointmentLink = `https://boneclinic.com/manage-appointment?email=${email}&date=${encodeURIComponent(date)}`;

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
          color: '#22BC66', // optional, default is blue
          text: 'Manage Appointment',
          link: manageAppointmentLink,
        },
      },
      outro: 'We look forward to seeing you! If you have any questions, feel free to contact us at support@SolidForm Clinic.com.',
    },
  });
};

export default generateAppointmentEmail;


//depolying to Hosting 

// import Mailgen from 'mailgen';

// const mailGenerator = new Mailgen({
//   theme: 'default',
//   product: {
//     name: 'Bone Clinic',
//     link: process.env.WEBSITE_URL || 'http://localhost:5500', // Replace with deployed URL
//   },
// });

// const generateAppointmentEmail = ({ name, email, phone, date, serviceType }) => {
//   return mailGenerator.generate({
//     body: {
//       name: name,
//       intro: `Thank you, ${name}, for booking an appointment with Bone Clinic!`,
//       table: {
//         data: [
//           { item: 'Name', description: name },
//           { item: 'Email', description: email },
//           { item: 'Phone', description: phone },
//           { item: 'Appointment Date', description: date },
//           { item: 'Service Type', description: serviceType },
//         ],
//       },
//       action: {
//         instructions: 'To reschedule or cancel your appointment, click below:',
//         button: {
//           color: '#22BC66', // optional, default is blue
//           text: 'Manage Appointment',
//           link: `${process.env.WEBSITE_URL || 'http://localhost:5500'}/manage-appointment`,
//         },
//       },
//       outro: 'Looking forward to seeing you!',
//     },
//   });
// };

// export default generateAppointmentEmail;
