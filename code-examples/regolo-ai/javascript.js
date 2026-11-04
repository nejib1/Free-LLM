// ===============================================
// Regolo.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://regolo.ai
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_REGOLO_KEY',
  baseURL: 'https://api.regolo.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'gpt-oss-120b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);