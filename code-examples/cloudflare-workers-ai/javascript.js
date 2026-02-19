// ===============================================
// Cloudflare Workers AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://dash.cloudflare.com/
// ===============================================

const response = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
  {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages: [{ role: 'user', content: 'What is Workers AI?' }]
    })
  }
);

const data = await response.json();
console.log(data.result.response);