// ===============================================
// Chutes.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://chutes.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_CHUTES_KEY',
  baseURL: 'https://api.chutes.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-ai/DeepSeek-R1',
  messages: [
    { role: 'user', content: 'Solve: what is 15! / 13!?' }
  ]
});

console.log(response.choices[0].message.content);