// ===============================================
// Hyperbolic - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://app.hyperbolic.xyz/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_HYPERBOLIC_KEY',
  baseURL: 'https://api.hyperbolic.xyz/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-ai/DeepSeek-V3',
  messages: [
    { role: 'user', content: 'What is decentralized AI inference?' }
  ]
});

console.log(response.choices[0].message.content);