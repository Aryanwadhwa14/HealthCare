// Scroll Animation Trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.roadmap-item').forEach((item) => {
    observer.observe(item);
});

// Hover Effect Enhancement
document.querySelectorAll('.card').forEach(card => {
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        
        // Add subtle tilt effect
        const tiltX = (rect.width/2 - x) / 20;
        const tiltY = (rect.height/2 - y) / 20;
        card.style.transform = `
            scale(1) 
            rotateX(${tiltY}deg) 
            rotateY(${tiltX}deg)
            translateZ(20px)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `
            scale(0.95) 
            rotateX(5deg) 
            rotateY(5deg)
            translateZ(0)
        `;
    });
});

// Chart Initialization
const activityChart = new Chart(document.getElementById('activityChart'), {
    type: 'line',
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Diagnostic Requests',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#3B82F6',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(59,130,246,0.1)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Add more chart initializations 

// Auth Modal Toggle
const authModal = document.querySelector('.auth-modal');
const authTriggers = document.querySelectorAll('.auth-trigger');
const authClose = document.querySelector('.auth-close');

authTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        authModal.style.display = 'flex';
        setTimeout(() => authModal.style.opacity = 1, 10);
    });
});

authClose.addEventListener('click', () => {
    authModal.style.opacity = 0;
    setTimeout(() => authModal.style.display = 'none', 300);
});

// Password Toggle
document.querySelectorAll('.pw-toggle').forEach(button => {
    button.addEventListener('click', (e) => {
        const input = e.target.closest('.input-group').querySelector('input');
        input.type = input.type === 'password' ? 'text' : 'password';
    });
});

// Simulate real-time updates
function updateMetrics() {
    document.querySelectorAll('.progress').forEach(ring => {
        const randomVariation = Math.random() * 2 - 1;
        const currentProgress = parseFloat(ring.style.getPropertyValue('--progress'));
        const newProgress = Math.min(100, Math.max(0, currentProgress + randomVariation));
        
        ring.style.setProperty('--progress', newProgress);
        ring.parentElement.querySelector('span').textContent = 
            ring.classList.contains('speed') ? 
            `${(0.24 + randomVariation/10).toFixed(2)}s` : 
            `${newProgress.toFixed(1)}%`;
        
        // Restart animation
        ring.style.animation = 'none';
        void ring.offsetWidth; // Trigger reflow
        ring.style.animation = 'progress 1s ease-out forwards';
    });
}

// Update every 5 seconds
setInterval(updateMetrics, 5000);

// Initialize new charts
const trainingChart = new Chart(document.getElementById('trainingChart'), {
    type: 'line',
    data: {
        labels: ['Epoch 1', 'Epoch 5', 'Epoch 10', 'Epoch 15', 'Epoch 20'],
        datasets: [{
            label: 'Accuracy',
            data: [75, 88, 92, 95, 98],
            borderColor: '#3B82F6',
            tension: 0.4
        }, {
            label: 'Loss',
            data: [1.2, 0.6, 0.4, 0.3, 0.2],
            borderColor: '#ef4444',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const errorChart = new Chart(document.getElementById('errorChart'), {
    type: 'bar',
    data: {
        labels: ['False Positives', 'False Negatives', 'Data Errors', 'Timeout'],
        datasets: [{
            data: [12, 8, 15, 5],
            backgroundColor: ['#3B82F6', '#ef4444', '#8b5cf6', '#10b981']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

const responseChart = new Chart(document.getElementById('responseChart'), {
    type: 'radar',
    data: {
        labels: ['Diagnosis', 'Analysis', 'Prediction', 'Reporting', 'API'],
        datasets: [{
            label: 'Response Times (ms)',
            data: [240, 180, 220, 200, 150],
            backgroundColor: 'rgba(59,130,246,0.1)',
            borderColor: '#3B82F6'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

// Add 3D mouse interaction
const visualization = document.querySelector('.ai-visualization');
visualization.addEventListener('mousemove', (e) => {
    const rect = visualization.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    visualization.style.transform = `
        perspective(1000px)
        rotateX(${y * 20}deg)
        rotateY(${x * 20}deg)
    `;
});

visualization.addEventListener('mouseleave', () => {
    visualization.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});

// Animate network layers
document.querySelectorAll('.layer').forEach((layer, index) => {
    anime({
        targets: layer,
        translateY: ['20px', '0px'],
        opacity: [0, 1],
        delay: index * 200,
        easing: 'easeOutExpo'
    });
});

// Simulate real-time updates
setInterval(() => {
    document.querySelectorAll('.metric-value').forEach(metric => {
        const newValue = Math.min(100, Math.max(0, 
            parseFloat(metric.textContent) + (Math.random() - 0.5)
        )).toFixed(1) + '%';
        metric.textContent = newValue;
    });
}, 3000);

// Initialize live activity graph
const activityGraph = document.querySelector('.activity-graph');
anime({
    targets: activityGraph,
    backgroundPosition: ['0% 0%', '100% 100%'],
    duration: 20000,
    loop: true,
    easing: 'linear'
});

// Initialize Charts
const caseTrendChart = new Chart(document.getElementById('caseTrendChart'), {
    type: 'line',
    data: {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [{
            label: 'Cases',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#3B82F6',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(59,130,246,0.1)'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});

const ageChart = new Chart(document.getElementById('ageDistributionChart'), {
    type: 'doughnut',
    data: {
        labels: ['0-18', '19-35', '36-50', '51+'],
        datasets: [{
            data: [15, 35, 30, 20],
            backgroundColor: ['#3B82F6', '#60a5fa', '#93c5fd', '#bfdbfe']
        }]
    }
});

// Simulate real-time updates
setInterval(() => {
    // Update case trend data
    const newData = caseTrendChart.data.datasets[0].data.map(() => 
        Math.floor(Math.random() * 20)
    );
    caseTrendChart.data.datasets[0].data = newData;
    caseTrendChart.update();
}, 5000);

// Anomaly alert animation
anime({
    targets: '.severity-indicator',
    scale: [0.8, 1.2],
    duration: 1200,
    loop: true,
    easing: 'easeInOutQuad',
    direction: 'alternate'
});

// Enhanced Scan Interaction
const scanButton = document.querySelector('.analysis-button');
scanButton.addEventListener('click', function() {
    this.classList.add('scanning');
    
    // Simulate scan completion
    setTimeout(() => {
        this.classList.remove('scanning');
        showScanResult({
            anomalies: 2,
            confidence: 94.7,
            findings: ['Tumor detected (3.2mm)', 'Bone density anomaly']
        });
    }, 3000);
});

function showScanResult(data) {
    const result = document.createElement('div');
    result.className = 'scan-result';
    result.innerHTML = `
        <div class="result-card">
            <h5>Scan Complete</h5>
            <div class="result-details">
                ${data.findings.map(f => `<div class="finding">${f}</div>`).join('')}
            </div>
            <div class="confidence">Confidence: ${data.confidence}%</div>
        </div>
    `;
    
    anime({
        targets: result,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuad'
    });
    
    document.querySelector('.image-analysis').appendChild(result);
}

// Add interactive animations
document.querySelectorAll('.analytics-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
    });
});

// Corrected Chart Implementation
const demographicsCtx = document.getElementById('demographicsChart').getContext('2d');

const chartData = {
    labels: ['0-18', '19-35', '36-50', '51+'],
    datasets: [{
        label: 'Patients by Age',
        data: [15, 35, 30, 20],
        backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(245, 158, 11, 0.8)',
            'rgba(139, 92, 246, 0.8)'
        ],
        borderColor: [
            'rgba(59, 130, 246, 1)',
            'rgba(16, 185, 129, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(139, 92, 246, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8
    }]
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 2000,
        onComplete: () => {
            document.querySelector('.demographics-chart').classList.add('chart-loaded');
            animateLegendItems();
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: { color: 'rgba(255,255,255,0.1)' },
            ticks: { color: 'white' }
        },
        x: {
            grid: { display: false },
            ticks: { color: 'white' }
        }
    },
    plugins: {
        legend: { display: false },
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.9)',
            bodyColor: 'white',
            padding: 12
        }
    }
};

const demographicsChart = new Chart(demographicsCtx, {
    type: 'bar',
    data: chartData,
    options: chartOptions
});

function animateLegendItems() {
    anime({
        targets: '.legend-item',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
    });
}

// Trigger animations after load
setTimeout(() => {
    document.querySelector('.demographics-chart').classList.add('chart-loaded');
    
    // Animate each bar individually
    anime({
        targets: '#demographicsChart',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 1000,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '.legend-item',
        delay: anime.stagger(100),
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 800,
        easing: 'easeOutExpo'
    });
}, 500);

// Simple Animation Trigger
function animateBars() {
    const bars = document.querySelectorAll('.chart-bar');
    bars.forEach(bar => {
        const percent = parseFloat(bar.getAttribute('data-percent'));
        bar.style.height = `${percent}%`;
    });
}

// Auth Form Interactions
const toggleOptions = document.querySelectorAll('.toggle-option');
const formsWrapper = document.querySelector('.forms-wrapper');
const toggleSlider = document.querySelector('.toggle-slider');
const authCard = document.querySelector('.auth-card');

toggleOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const view = e.target.dataset.view;
        
        // Toggle active classes
        toggleOptions.forEach(opt => opt.classList.remove('active'));
        e.target.classList.add('active');
        
        // Animate slider
        const sliderPosition = view === 'login' ? 0 : '50%';
        toggleSlider.style.left = `calc(${sliderPosition} + 0.5rem)`;
        
        // Animate forms
        formsWrapper.querySelectorAll('.auth-form').forEach(form => {
            form.classList.remove('active');
        });
        document.querySelector(`.${view}-form`).classList.add('active');
        
        // Card flip animation
        if(view === 'register') {
            authCard.classList.add('register-active');
            setTimeout(() => authCard.classList.remove('register-active'), 1000);
        }
    });
});

document.querySelectorAll('.input-field input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('active');
        this.parentNode.querySelector('.input-icon').style.transform = 'translateY(-50%) scale(1.1)';
    });
    
    input.addEventListener('blur', function() {
        if(!this.value) {
            this.parentNode.classList.remove('active');
            this.parentNode.querySelector('.input-icon').style.transform = 'translateY(-50%)';
        }
    });
});

// Form switch animation
document.querySelectorAll('.toggle-option').forEach(option => {
    option.addEventListener('click', function() {
        const view = this.dataset.view;
        const authCard = document.querySelector('.auth-card');
        
        // Animate card flip
        authCard.style.transform = `rotateY(${view === 'login' ? 0 : 180}deg)`;
        
        setTimeout(() => {
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.toggle('active', form.classList.contains(`${view}-form`));
            });
            
            // Reset card rotation after animation
            setTimeout(() => {
                authCard.style.transform = 'rotateY(0deg)';
            }, 600);
        }, 300);
    });
});

// Submit button animation
document.querySelector('.auth-btn').addEventListener('click', async function(e) {
    e.preventDefault();
    const btn = this;
    
    // Show loading state
    btn.innerHTML = `<div class="loading-spinner"></div>`;
    btn.style.pointerEvents = 'none';
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Show success state
    btn.innerHTML = `
        <svg class="success-check" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" stroke="white" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
    `;
    
    setTimeout(() => {
        btn.innerHTML = 'Sign In';
        btn.style.pointerEvents = 'all';
    }, 1500);
});

// Header Scroll Animation
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.main-header');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    lastScroll = currentScroll;
});

// Reduced Motion Support
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}


