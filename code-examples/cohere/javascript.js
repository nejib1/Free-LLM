// ===============================================
// Cohere - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://cohere.com/
// ===============================================

const { CohereClientV2 } = require('cohere-ai');

const cohere = new CohereClientV2({
  token: 'YOUR_COHERE_KEY'
});

const response = await cohere.chat({
  model: '{{model}}',
  messages: [
    { role: 'user', content: 'What is retrieval augmented generation?' }
  ]
});

console.log(response.message.content[0].text);