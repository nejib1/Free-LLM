// ===============================================
// Bytez - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.bytez.com/model-api/docs/billing
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_BYTEZ_KEY',
  baseURL: 'https://api.bytez.com/models/v2/openai/v1'
});

const response = await client.chat.completions.create({
  model: 'model-name',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);