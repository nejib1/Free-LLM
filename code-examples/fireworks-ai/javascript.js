// ===============================================
// Fireworks AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://fireworks.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_FIREWORKS_KEY',
  baseURL: 'https://api.fireworks.ai/inference/v1'
});

const response = await client.chat.completions.create({
  model: 'accounts/fireworks/models/nemotron-lightning-3p5-30b-a3b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);