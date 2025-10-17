// Smooth scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                title: document.getElementById('title').value,
                revenue: document.getElementById('revenue').value,
                industry: document.getElementById('industry').value,
                business: document.getElementById('business').value,
                agents: document.getElementById('agents').value,
                ai: document.getElementById('ai').value,
                timeline: document.getElementById('timeline').value,
                timestamp: new Date().toISOString()
            };

            // Log to console (in production, this would send to your backend/CRM)
            console.log('Form Submission:', formData);

            // Here you would normally send the data to your backend
            // Example:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // }).then(response => response.json())
            //   .then(data => {
            //       // Handle success
            //   });

            // For demonstration, we'll show the success message
            contactForm.classList.add('hidden');
            formSuccess.classList.add('active');

            // Optional: Track conversion with analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'form_submission', {
                    'event_category': 'Contact',
                    'event_label': 'Enterprise Qualification Form'
                });
            }

            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-bg');
        
        if (heroBackground && scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    const cards = document.querySelectorAll('.approach-card, .service-card, .proof-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add nav background on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            nav.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });

    // Email validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value;
            const freeEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
            const domain = email.split('@')[1];
            
            if (domain && freeEmailDomains.includes(domain.toLowerCase())) {
                // Show warning for non-business emails
                if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('email-warning')) {
                    const warning = document.createElement('div');
                    warning.className = 'email-warning';
                    warning.style.cssText = 'font-size: 12px; color: #ff9800; margin-top: 4px;';
                    warning.textContent = 'Please use your business email address.';
                    this.parentNode.insertBefore(warning, this.nextSibling);
                }
            } else {
                // Remove warning if it exists
                const warning = this.parentNode.querySelector('.email-warning');
                if (warning) {
                    warning.remove();
                }
            }
        });
    }

    // Add form field character counters for textareas
    const textareas = document.querySelectorAll('.form-textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            const minLength = 50;
            const currentLength = this.value.length;
            
            if (currentLength < minLength) {
                this.style.borderColor = 'var(--text-muted)';
            } else {
                this.style.borderColor = 'var(--primary)';
            }
        });
    });
});

// Add dynamic year to copyright
window.addEventListener('load', function() {
    const footerLegal = document.querySelector('.footer-legal');
    if (footerLegal && footerLegal.textContent.includes('2025')) {
        const currentYear = new Date().getFullYear();
        if (currentYear > 2025) {
            footerLegal.textContent = `© 2025-${currentYear} Strapped AI LLC. All rights reserved.`;
        }
    }
});
