const express = require('express');
const router = express.Router();
const { handleChat } = require('../controllers/chatController');
const auth = require('../middleware/auth');

// Medical Chatbot
router.post('/medical', auth, async (req, res) => {
  try {
    const response = await handleChat('medical', req.body.messages);
    res.json({
      role: 'assistant',
      content: response
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mental Health Chatbot
router.post('/mental-health', auth, async (req, res) => {
  try {
    const response = await handleChat('mental-health', req.body.messages);
    res.json({
      role: 'assistant',
      content: response
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 