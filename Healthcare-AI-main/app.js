// Use performance-optimized code
document.addEventListener('DOMContentLoaded', function() {
    const mainContainer = document.createElement('div');
    mainContainer.className = 'monitoring-container';
    
   
    document.body.appendChild(mainContainer);
});

// Add real-time data simulation
function simulateLiveData() {
    const heartRateElement = document.querySelector('.heart-rate .value');
    const bloodPressureElement = document.querySelector('.blood-pressure .value');
    
    setInterval(() => {
        const heartRate = Math.floor(Math.random() * (100 - 60) + 60);
        const systolic = Math.floor(Math.random() * (130 - 110) + 110);
        const diastolic = Math.floor(Math.random() * (85 - 70) + 70);
        
        if(heartRateElement) {
            heartRateElement.innerHTML = `${heartRate} <sub>bpm</sub>`;
        }
        
        if(bloodPressureElement) {
            bloodPressureElement.innerHTML = `${systolic}/${diastolic} <sub>mmHg</sub>`;
        }
    }, 2000);
}

// Add real-time alert simulation
function simulateAlerts() {
    const alerts = document.querySelectorAll('.alert-item');
    setInterval(() => {
        alerts.forEach(alert => {
            alert.style.opacity = Math.random() > 0.5 ? 1 : 0.8;
        });
    }, 2000);
}

// Simplified Data Simulation
function updateVitals() {
    document.querySelectorAll('.vital-metric').forEach((metric, index) => {
        const current = parseInt(metric.textContent);
        const newValue = index === 0 
            ? Math.max(60, Math.min(120, current + Math.floor(Math.random() * 3 - 1)))
            : `${Math.floor(110 + Math.random() * 10)}/${Math.floor(70 + Math.random() * 10)}`;
        metric.textContent = newValue;
    });
}
setInterval(updateVitals, 3000);

// Original ECG Animation
const ecgPath = document.querySelector('.ecg-wave path');
if(ecgPath) {
    ecgPath.style.strokeDasharray = '1000';
    ecgPath.style.strokeDashoffset = '1000';
    ecgPath.style.animation = 'draw 5s linear infinite';
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    // Real-time Data Simulation
    function simulateData() {
        document.querySelectorAll('.vital-value').forEach(item => {
            const current = parseInt(item.textContent);
            item.textContent = Math.max(60, Math.min(120, 
                current + Math.floor(Math.random() * 4 - 2)));
        });
    }
    setInterval(simulateData, 3000);

    // Predictive Analytics
    function updatePredictions() {
        const riskScore = document.querySelector('.risk-score .score');
        riskScore.textContent = (Math.random() * 10).toFixed(1);
    }
    setInterval(updatePredictions, 5000);

    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.monitoring-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
    
    // Add hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Update time display
    function updateTime() {
        const now = new Date();
        document.querySelector('.time').textContent = `🕒 ${now.toLocaleTimeString()}`;
        document.querySelector('.date').textContent = `📅 ${now.toLocaleDateString()}`;
    }
    setInterval(updateTime, 1000);

    // Add hero animations
    setTimeout(() => {
        document.querySelector('.hero-scroll-indicator').style.opacity = '1';
    }, 2000);
    
    // Add scroll to content
    document.querySelector('.hero-scroll-indicator').addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.monitoring-dashboard').offsetTop,
            behavior: 'smooth'
        });
    });

    // Enhanced Hero Interactions
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        
        heroTitle.style.transform = `
            perspective(1000px)
            rotateX(${y * 5}deg)
            rotateY(${x * 5}deg)
        `;
    });

    heroTitle.addEventListener('mouseleave', () => {
        heroTitle.style.transform = 'none';
    });

    // Remove scroll indicator related code and add smooth hover
    const hero = document.querySelector('.hero');
    const brief = document.querySelector('.hero-brief');
    
    hero.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        hero.style.transform = `
            perspective(1000px)
            rotateX(${y * 5}deg)
            rotateY(${x * 5}deg)
        `;
    });

    hero.addEventListener('mouseleave', () => {
        hero.style.transform = 'none';
    });

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Add back interactive animations
    document.addEventListener('DOMContentLoaded', () => {
        // 3D hover effect for hero section
        const hero = document.querySelector('.hero');
        hero.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            hero.style.transform = `
                perspective(1000px)
                rotateX(${y * 5}deg)
                rotateY(${x * 5}deg)
            `;
        });

        hero.addEventListener('mouseleave', () => {
            hero.style.transform = 'none';
        });

        // Heart animation
        const heart = document.createElement('div');
        heart.className = 'heart-animation';
        document.querySelector('.vitals-card').appendChild(heart);
        
        // Real-time alert simulation
        setInterval(() => {
            document.querySelectorAll('.alert-item').forEach(alert => {
                alert.style.opacity = Math.random() > 0.5 ? 1 : 0.8;
            });
        }, 2000);
    });

    // Auth State Management
    const authButton = document.getElementById('authButton');
    const updateAuthState = () => {
        if(localStorage.getItem('medAuth')) {
            authButton.textContent = 'Sign Out';
        } else {
            authButton.textContent = 'Sign In';
        }
    };
    
    authButton.addEventListener('click', () => {
        if(localStorage.getItem('medAuth')) {
            localStorage.removeItem('medAuth');
            window.location.href = 'index.html';
        } else {
            window.location.href = 'dashboard.html';
        }
    });
    
    updateAuthState();
});