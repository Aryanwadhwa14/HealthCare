// File Upload Handling
document.getElementById('reportUpload').addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    const uploadArea = document.querySelector('.uploaded-files');
    uploadArea.innerHTML = files.map(file => `
        <div class="file-item">
            📄 ${file.name} (${(file.size/1024).toFixed(1)}KB)
        </div>
    `).join('');
});

// Medication Interaction Check
document.querySelectorAll('.analysis-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Prescription Validation
document.getElementById('prescriptionUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if(file) {
        simulatePrescriptionAnalysis(file);
    }
});

function simulatePrescriptionAnalysis(file) {
    const validationArea = document.querySelector('.validation-details');
    validationArea.innerHTML = `
        <div class="validation-item loading">
            <div class="result-loader"></div>
            Analyzing Prescription...
        </div>
    `;
    
    setTimeout(() => {
        validationArea.innerHTML = `
            <div class="validation-item valid">✅ Valid Signature</div>
            <div class="validation-item warning">⚠️ Dose Adjustment Recommended</div>
            <div class="validation-item valid">✅ No Contraindications Found</div>
        `;
    }, 3000);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add these new interactions
// Animated chart initialization
function initMoodChart() {
    document.querySelectorAll('.bar').forEach((bar, index) => {
        bar.style.animationDelay = `${index * 0.2}s`;
    });
}

// Neuro animation controller
document.querySelectorAll('.neuro-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.animation = 'neuroPulse 1.5s infinite';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.animation = '';
    });
});

// Real-time data simulation
function simulateLiveData() {
    const stressLevels = document.querySelector('.stress');
    let level = 50;
    
    setInterval(() => {
        level = Math.min(100, Math.max(0, level + (Math.random() - 0.5) * 10));
        stressLevels.textContent = `Stress Level: ${Math.round(level)}%`;
    }, 3000);
}

// Add AI Assistant Interaction
const sendBtn = document.querySelector('.send-btn');
const chatInput = document.querySelector('.assistant-chat input');

sendBtn.addEventListener('click', handleChatInput);
chatInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') handleChatInput();
});

function handleChatInput() {
    const message = chatInput.value.trim();
    if(message) {
        addUserMessage(message);
        simulateAIResponse(message);
        chatInput.value = '';
    }
}

function addUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.textContent = text;
    document.querySelector('.assistant-chat').appendChild(messageDiv);
}

function simulateAIResponse(query) {
    const responseDiv = document.createElement('div');
    responseDiv.className = 'chat-message ai';
    responseDiv.textContent = getAIResponse(query);
    document.querySelector('.assistant-chat').appendChild(responseDiv);
}

function getAIResponse(query) {
    // Simulated AI responses
    const responses = {
        'symptoms': 'Based on your symptoms, I recommend...',
        'medication': 'Let me check drug interactions...',
        'report': 'Analyzing your latest test results...'
    };
    return responses[query.toLowerCase()] || "I'll research that and get back to you shortly.";
}

// Animated vital signs
function animateVitalStats() {
    document.querySelectorAll('.stat-graph').forEach(graph => {
        graph.style.animation = 'waveMove 6s linear infinite';
    });
}

// Initialize animations
window.addEventListener('load', () => {
    initMoodChart();
    simulateLiveData();
    animateVitalStats();
});

// Add particle effect on upload
document.querySelector('.upload-area').addEventListener('dragover', (e) => {
    const particles = 10;
    for(let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'upload-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        e.target.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
});

document.querySelectorAll('.diagnostic-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add interaction visualization animation
document.querySelectorAll('.web-node').forEach(node => {
    node.addEventListener('mouseenter', function() {
        const connections = document.createElement('div');
        connections.className = 'web-connection';
        this.appendChild(connections);
    });
    
    node.addEventListener('mouseleave', function() {
        this.querySelectorAll('.web-connection').forEach(conn => conn.remove());
    });
});

// Add dynamic severity coloring
function updateSeverityIndicator(level) {
    const indicator = document.querySelector('.severity-indicator');
    indicator.className = `severity-indicator ${level}`;
    indicator.textContent = level.charAt(0).toUpperCase() + level.slice(1) + ' Risk';
}

// Sample interaction data
const interactions = {
    high: {
        color: '#dc2626',
        background: '#fee2e2',
        border: '#fca5a5'
    },
    moderate: {
        color: '#d97706',
        background: '#fef3c7',
        border: '#fcd34d'
    },
    low: {
        color: '#059669',
        background: '#d1fae5',
        border: '#6ee7b7'
    }
}; 