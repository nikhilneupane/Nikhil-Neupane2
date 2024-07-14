document.addEventListener("DOMContentLoaded", function() {
 

    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const email = document.querySelector('#email');
            const message = document.querySelector('#message');
            let valid = true;
            
            if (!email.value || !email.value.includes('@')) {
                valid = false;
                alert('Please enter a valid email address.');
            }
            
            if (!message.value) {
                valid = false;
                alert('Please enter your message.');
            }
            
            if (!valid) {
                event.preventDefault();
            } else {
                alert('Form submitted successfully!');
            }
        });
    }
});
