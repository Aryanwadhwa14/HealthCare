require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Add at the very top
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get('/', (req, res) => {
  res.send('HealthAI Backend Running');
});

// Registration
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Create user
    const user = new User({
      email,
      password: hashedPassword
    });

    await user.save();
    
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, subscription: user.subscription });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} already in use`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

// server.js another code 

const chatRoutes = require('./routes/chatRoutes');

app.use('/api/chat', chatRoutes); 

async function sendChatMessage(type, messages) {
  const response = await fetch(`/api/chat/${type}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ messages })
  });
  
  return await response.json();
}

// Usage in medical chatbot:
const medicalResponse = await sendChatMessage('medical', [
  { role: 'user', content: 'What are the symptoms of diabetes?' }
]);

// Usage in mental health chatbot:
const mentalHealthResponse = await sendChatMessage('mental-health', [
  { role: 'user', content: 'I\'m feeling anxious about my job' }
]); 

// Test route
app.get('/test', (req, res) => {
  res.json({ status: 'OK', message: 'Server is working' });
}); 