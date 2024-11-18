// Select the form element
const appointmentForm = document.querySelector('.appointment-two__form');

appointmentForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the form from reloading the page on submit

  // Gather form data
  const formData = {
    name: document.querySelector('input[name="name"]').value.trim(),
    email: document.querySelector('input[name="email"]').value.trim(),
    phone: document.querySelector('input[name="Phone"]').value.trim(),
    date: document.querySelector('input[name="date"]').value.trim(),
    serviceType: document.querySelector('select.selectmenu').value.trim()
  };

  // Validate form data
  if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.serviceType) {
    alert('Please fill in all fields.');
    return;
  }

  // Add a loading state
  const submitButton = appointmentForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  // Send the data to the Node.js backend
  try {
    const response = await fetch('http://localhost:5500/api/appointment/submit-appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Appointment request sent successfully!');
      appointmentForm.reset();
    } else {
      const errorData = await response.json();
      console.error('Error:', errorData);
      alert(errorData.message || 'Failed to send appointment request. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  } finally {
    submitButton.disabled = false; // Re-enable the button
  }
});
