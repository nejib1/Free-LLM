// ===============================================
// GonkaRouter - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://gonkarouter.io
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_GONKAROUTER_KEY',
  baseURL: 'https://api.gonkarouter.io/v1'
});

const response = await client.chat.completions.create({
  model: 'zai-org/GLM-5.3-Flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);