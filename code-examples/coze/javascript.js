// ===============================================
// Coze - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.coze.com/
// ===============================================

const response = await fetch('https://api.coze.com/v3/chat', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_COZE_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    bot_id: 'YOUR_BOT_ID',
    user_id: 'user123',
    stream: false,
    additional_messages: [
      {
        role: 'user',
        content: 'Hello! What can you do?',
        content_type: 'text'
      }
    ]
  })
});

const data = await response.json();
console.log(data);