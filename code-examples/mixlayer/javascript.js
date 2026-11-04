// ===============================================
// Mixlayer - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.mixlayer.com/credits-and-limits
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_MIXLAYER_KEY',
  baseURL: 'https://models.mixlayer.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'qwen/qwen3.5-4b-free',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);