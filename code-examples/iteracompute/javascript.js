// ===============================================
// IteraCompute - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://iteracompute.com/free/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_ITERACOMPUTE_KEY',
  baseURL: 'https://api.iteracompute.com/v1'
});

const response = await client.chat.completions.create({
  model: 'qwen/qwen3.8-27b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);