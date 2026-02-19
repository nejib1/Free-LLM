// ===============================================
// Mistral (La Plateforme) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://console.mistral.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_MISTRAL_KEY',
  baseURL: 'https://api.mistral.ai/v1'
});

const response = await client.chat.completions.create({
  model: '{{model}}',
  messages: [
    { role: 'user', content: 'Explain the Mixture of Experts architecture' }
  ]
});

console.log(response.choices[0].message.content);