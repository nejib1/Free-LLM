// ===============================================
// Ollama - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://ollama.com/
// ===============================================

// Ollama provides OpenAI-compatible API locally
const response = await fetch('http://localhost:11434/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'llama3.2:3b',
    messages: [
      { role: 'user', content: 'Hello, how are you?' }
    ],
    stream: false
  })
});

const data = await response.json();
console.log(data.message.content);