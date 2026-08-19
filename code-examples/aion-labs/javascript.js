// ===============================================
// Aion Labs - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.aionlabs.ai/pricing/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_AIONLABS_KEY',
  baseURL: 'https://api.aionlabs.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'model-name',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);