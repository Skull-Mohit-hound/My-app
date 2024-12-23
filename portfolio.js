// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetElement = document.querySelector(this.getAttribute('href'));
      
      window.scrollTo({
        top: targetElement.offsetTop - 60,  // Offset to avoid header overlap
        behavior: "smooth"
      });
    });
  });
  
  // Form Validation (Optional: To handle basic form input validation)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Here, you can send the form data via AJAX or other methods
    alert("Thank you for your message, " + name + "! I'll get back to you soon.");
  
    // Clear form after submission
    document.getElementById('contact-form').reset();
  });
  
  // Scroll Animations (Parallax Effect Example)
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const homeSection = document.querySelector('#home');
    
    // Apply a simple parallax effect
    homeSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
  });
  