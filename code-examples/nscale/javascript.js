// ===============================================
// Nscale - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.nscale.com/product/inference
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_NSCALE_KEY',
  baseURL: 'https://inference.api.nscale.com/v1'
});

const response = await client.chat.completions.create({
  model: 'model-name',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);