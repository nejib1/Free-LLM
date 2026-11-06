// ===============================================
// Vercel AI Gateway - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://vercel.com/ai-gateway
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_AI_GATEWAY_KEY',
  baseURL: 'https://ai-gateway.vercel.sh/v1'
});

const response = await client.chat.completions.create({
  model: 'nvidia/nemotron-3.5-lightning-free',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);