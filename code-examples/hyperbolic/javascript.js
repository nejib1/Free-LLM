// ===============================================
// Hyperbolic - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://app.hyperbolic.xyz/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_HYPERBOLIC_KEY',
  baseURL: 'https://api.hyperbolic.ai/inference/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-v4-flash-0731',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);