// ===============================================
// BentoML - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.bentoml.com/
// ===============================================

// Call your deployed BentoML service
const response = await fetch('http://localhost:3000/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Explain BentoML serving'
  })
});

const data = await response.json();
console.log(data);