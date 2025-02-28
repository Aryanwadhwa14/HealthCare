// Interactive Tier Selection
document.querySelectorAll('.tier-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.tier-card').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced Hover Effects
document.querySelectorAll('.price-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Dynamic Gradient Effect
document.querySelectorAll('.tier-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `
            radial-gradient(circle at ${x}px ${y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(255, 255, 255, 1) 80%)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'white';
    });
});

// Add particle effect to premium card
const premiumCard = document.querySelector('.tier-card.premium');
premiumCard.addEventListener('mouseenter', () => {
    const particles = 15;
    for(let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'premium-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        premiumCard.appendChild(particle);
    }
});

premiumCard.addEventListener('mouseleave', () => {
    document.querySelectorAll('.premium-particle').forEach(particle => {
        particle.remove();
    });
});

// Enhanced 3D rotation
document.querySelectorAll('.tier-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        card.style.transform = `
            translateY(-10px)
            rotateX(${y * 8}deg)
            rotateY(${x * 8}deg)
            perspective(1000px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Add 3D tilt to insurance cards
document.querySelectorAll('.insurance-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        card.style.transform = `
            translateY(-5px)
            rotateX(${y * 4}deg)
            rotateY(${x * 4}deg)
            perspective(1000px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.auth-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        let ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        ripple.style.left = e.offsetX + 'px';
        ripple.style.top = e.offsetY + 'px';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}); 