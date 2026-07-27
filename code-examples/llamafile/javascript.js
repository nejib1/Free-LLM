// ===============================================
// llamafile - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/Mozilla-Ocho/llamafile
// ===============================================

// Run llamafile first: ./model.llamafile --server
const response = await fetch('http://localhost:8080/v1/chat/completions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'local',
    messages: [
      { role: 'user', content: 'What is llamafile?' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);