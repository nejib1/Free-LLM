// ===============================================
// BazaarLink - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://bazaarlink.ai/free
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_BAZAARLINK_KEY',
  baseURL: 'https://api.bazaarlink.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'qwen/qwen3.7-flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);