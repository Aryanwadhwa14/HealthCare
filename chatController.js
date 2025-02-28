const axios = require('axios');

const handleChat = async (type, messages) => {
  try {
    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      {
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: type === 'medical' 
              ? 'You are a professional medical assistant. Provide accurate, evidence-based health information. Always recommend consulting a real doctor for serious concerns.'
              : 'You are a compassionate mental health counselor. Provide supportive, empathetic responses while encouraging professional help when needed.'
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 500
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('DeepSeek API Error:', error.response?.data || error.message);
    throw new Error('Failed to get AI response');
  }
};

module.exports = { handleChat }; 