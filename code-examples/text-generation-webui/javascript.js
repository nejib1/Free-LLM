// ===============================================
// Text Generation WebUI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/oobabooga/text-generation-webui
// ===============================================

// Enable OpenAI extension first
const response = await fetch('http://localhost:5000/v1/chat/completions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'local-model',
    messages: [
      { role: 'user', content: 'Tell me about text generation' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);