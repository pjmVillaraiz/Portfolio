// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        html.removeAttribute('data-theme');
        themeIcon.textContent = '☾';
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeIcon').textContent = '☀';
    }
});

// Animated counter
function animateCounter(id, target) {
    let current = 0;
    const element = document.getElementById(id);
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .achievement-card, .skill-tag').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = '★';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.fontSize = Math.random() * 20 + 10 + 'px';
    particle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 3000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// Profile image click effect
document.getElementById('profileImg').addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'float 3s ease-in-out infinite';
    }, 10);
    
    for(let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 100);
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
