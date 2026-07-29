// Initialize Lucide Icons
lucide.createIcons();

// Sticky Navbar Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations (fade-up, fade-left, etc.)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once animated
            observer.unobserve(entry.target);
            
            // If it's a stats container, trigger counter animation
            if (entry.target.classList.contains('hero-content')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-left').forEach(el => {
    observer.observe(el);
});

// Counter Animation for Stats
let countersAnimated = false;

function animateCounters() {
    if (countersAnimated) return;
    
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
    
    countersAnimated = true;
}

// Ensure elements in view on load get the visible class immediately
window.addEventListener('load', () => {
    // Manually trigger elements already in viewport on load if observer is too slow
    setTimeout(() => {
        document.querySelectorAll('.fade-up, .fade-left').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
                if (el.classList.contains('hero-content')) animateCounters();
            }
        });
    }, 100);
});

// Contact Form Simulation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        
        // Simulate sending state
        btn.innerText = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            document.getElementById('form-success').classList.remove('hidden');
            // Reset form
            contactForm.reset();
            // Reset button
            btn.innerText = originalText;
            btn.disabled = false;
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('form-success').classList.add('hidden');
            }, 5000);
        }, 1500);
    });
}
