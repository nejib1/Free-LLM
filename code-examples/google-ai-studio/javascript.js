// ===============================================
// Google AI Studio - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://aistudio.google.com/
// ===============================================

// Get your API key from https://aistudio.google.com/
const apiKey = 'YOUR_API_KEY';
const url = `https://generativelanguage.googleapis.com/v1beta/models/{{model}}:generateContent?key=${apiKey}`;

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contents: [{
      parts: [{ text: 'Explain how AI works' }]
    }]
  })
});

const data = await response.json();
console.log(data);