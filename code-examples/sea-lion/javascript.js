// ===============================================
// SEA-LION API - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.sea-lion.ai/guides/inferencing/api
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SEA_LION_KEY',
  baseURL: 'https://api.sea-lion.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'aisingapore/Qwen-SEA-LION-v4.5-27B-IT',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);