// ===============================================
// Cerebrium - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.cerebrium.ai/
// ===============================================

// Call your deployed Cerebrium model
const response = await fetch('https://api.cortex.cerebrium.ai/v4/YOUR_APP/predict', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_CEREBRIUM_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: 'Explain serverless GPU computing'
  })
});

const data = await response.json();
console.log(data.response);