// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // Create a simple alert or you can integrate with a backend
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            this.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Scroll Animation for Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, portfolio items, etc.
document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .pricing-card').forEach(card => {
    observer.observe(card);
});

// Add active state to navigation links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fade in elements on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Button Click Handlers
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.textContent.includes('Order') || this.textContent.includes('Join')) {
            // Add WhatsApp integration if needed
            console.log('Button clicked:', this.textContent);
        }
    });
});

// Counter Animation for Stats
function animateCounters() {
    const statCards = document.querySelectorAll('.stat-card h4');
    let hasAnimated = false;
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statCards.forEach(card => {
                    const finalValue = card.textContent;
                    card.style.transition = 'all 1s ease-out';
                });
            }
        });
    });
    
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) observer.observe(statsSection);
}

animateCounters();

// Responsive Navigation Menu Style
if (window.innerWidth <= 768) {
    navMenu.style.display = 'none';
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.style.display = 'flex';
        if (hamburger) hamburger.classList.remove('active');
    }
});