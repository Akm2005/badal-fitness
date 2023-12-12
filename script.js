document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
  
      const formData = {
        name: document.querySelector('input[name="name"]').value,
        age: document.querySelector('input[name="age"]').value,
        gender: document.querySelector('input[name="gender"]').value,
        locality: document.querySelector('input[name="locality"]').value,
        email: document.querySelector('input[name="email"]').value,
        phoneNumber: document.querySelector('input[name="phoneNumber"]').value,
      };
  
      try {
        const response = await fetch('https://655500aa63cafc694fe75243.mockapi.io/crud-youtube', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Data successfully saved!');
          alert('your requast submitted successfully!');
          // Add any additional logic or UI updates here
        } else {
          console.error('Failed to save data:', response.statusText);
          // Handle the error and update the UI accordingly
        }
      } catch (error) {
        console.error('Error saving data:', error);
        // Handle the error and update the UI accordingly
      }
    });
  });
  