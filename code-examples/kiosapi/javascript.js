// ===============================================
// Kiosapi.id - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://kiosapi.id/pricing
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_KIOSAPI_KEY',
  baseURL: 'https://api.kiosapi.id/v1'
});

const response = await client.chat.completions.create({
  model: 'zai/glm-4.7-flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);