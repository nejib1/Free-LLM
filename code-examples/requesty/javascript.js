// ===============================================
// Requesty - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://requesty.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_REQUESTY_KEY',
  baseURL: 'https://router.requesty.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'google/gemma-4-31b-it',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);