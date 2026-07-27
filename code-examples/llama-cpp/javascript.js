// ===============================================
// llama.cpp - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/ggml-org/llama.cpp
// ===============================================

// llama.cpp server provides OpenAI-compatible API
const response = await fetch('http://localhost:8080/v1/chat/completions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'local',
    messages: [
      { role: 'user', content: 'Explain quantum computing' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);