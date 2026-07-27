// ===============================================
// KoboldCpp - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/LostRuins/koboldcpp
// ===============================================

const response = await fetch('http://localhost:5001/api/v1/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'Once upon a time in a magical land,',
    max_length: 200,
    temperature: 0.7
  })
});

const data = await response.json();
console.log(data.results[0].text);