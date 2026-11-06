// ===============================================
// AnyAPI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://anyapi.ai
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_ANYAPI_KEY',
  baseURL: 'https://api.anyapi.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'model-name',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);