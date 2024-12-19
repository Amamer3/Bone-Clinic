import Mailgen from 'mailgen';

export function prepareDynamicData({ name, email, phone, formattedDate, serviceType }) {
  return [
    { 'Client Name': name || 'N/A' },
    { 'Client Email': email || 'N/A' },
    { 'Client Phone': phone || 'N/A' },
    { 'Appointment Date': formattedDate || 'N/A' },
    { 'Service Type': serviceType || 'N/A' },
  ];
}

export function prepareDynamicAction({ instructions, buttonColor, buttonText, link }) {
  return {
    instructions: instructions || 'Click the button below for more details:',
    button: {
      color: buttonColor || '#1ae869',
      text: buttonText || 'View Details',
      link: link || '#',
    },
  };
}

export function generateDynamicEmail({ recipientName, introMessage, appointmentDetails, actionDetails, outroMessage, signature }) {
  const mailGenerator = new Mailgen({
    theme: 'salted',
    product: {
      name: 'SolidForm Clinic',
      link: 'https://yourcompanywebsite.com',
      logo: 'https://yourlogo.url/logo.png',
      copyright: `© ${new Date().getFullYear()} SolidForm Clinic. All rights reserved.`,
    },
  });

  const dynamicData = prepareDynamicData(appointmentDetails);
  const dynamicAction = actionDetails ? prepareDynamicAction(actionDetails) : undefined;

  return mailGenerator.generate({
    body: {
      name: recipientName,
      intro: introMessage,
      table: { data: dynamicData },
      action: dynamicAction,
      outro: outroMessage,
      signature: signature,
    },
  });
}
