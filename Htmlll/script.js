// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission (add your backend functionality if needed)
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Message sent! Thank you for your love 💖");
  // You can later add backend functionality here to process the form data.
});
