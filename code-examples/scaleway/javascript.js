// ===============================================
// Scaleway Generative APIs - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://console.scaleway.com/generative-api/models
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SCALEWAY_KEY',
  baseURL: 'https://api.scaleway.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'llama-3.1-70b',
  messages: [
    { role: 'user', content: 'What is GDPR compliance?' }
  ]
});

console.log(response.choices[0].message.content);