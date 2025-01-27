

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
})
const hiddenElements = document.querySelectorAll(".hidden");
console.log(hiddenElements.length)
hiddenElements.forEach((el) => observer.observe(el));



emailjs.init('n-9rzJ1kCzdbVInZK');

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(document.getElementById('name').value)
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs.send('service_o8yjvzk', 'template_u9kvyna', formData)
        .then(() => {
            alert('Message sent successfully!');
            form.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('Oops! Something went wrong. Please try again.');
        });
});
