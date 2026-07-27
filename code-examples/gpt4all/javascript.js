// ===============================================
// GPT4All - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://gpt4all.io/
// ===============================================

// GPT4All with server mode enabled
const response = await fetch('http://localhost:4891/v1/chat/completions', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    model: 'local-model',
    messages: [
      { role: 'user', content: 'Summarize this document for me' }
    ]
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);