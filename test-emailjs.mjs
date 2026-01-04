// Simple test script to verify EmailJS integration
const API_URL = 'https://api.emailjs.com/api/v1.0/email/send';

const data = {
    service_id: 'service_eq87vtd',
    template_id: 'template_x94fhmp',
    user_id: 'mqEdxmDRFVVoxCXrv',
    template_params: {
        firstName: 'Test',
        lastName: 'User',
        email: 'anu.anoop485@gmail.com',
        phone: '555-123-4567',
        company: 'Test Company',
        service: 'Training Programs',
        message: 'This is a test message to verify the EmailJS integration is working correctly.'
    }
};

fetch(API_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => {
        console.log('Status:', response.status);
        return response.text();
    })
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
