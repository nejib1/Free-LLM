// ===============================================
// SenseNova (SenseTime) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.sensenova.cn/token-plan
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SENSENOVA_KEY',
  baseURL: 'https://token.sensenova.cn/v1'
});

const response = await client.chat.completions.create({
  model: 'sensenova-6.8-flash-lite',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);