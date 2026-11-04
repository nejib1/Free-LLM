// ===============================================
// VLM Run Gateway - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.vlm.run/gateway/rate-limits
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_VLM_RUN_KEY',
  baseURL: 'https://gateway.vlm.run/v1/openai'
});

const response = await client.chat.completions.create({
  model: 'qwen/qwen3.8-27b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);