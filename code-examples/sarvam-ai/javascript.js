// ===============================================
// Sarvam AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.sarvam.ai/api-pricing
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SARVAM_AI_KEY',
  baseURL: 'https://api.sarvam.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'sarvam-105b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);