// ===============================================
// Kilo AI Gateway - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://kilo.ai/gateway
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_KILO_KEY',
  baseURL: 'https://ai-gateway.kilo.ai/api/v1'
});

const response = await client.chat.completions.create({
  model: 'nvidia/nemotron-3.5-lightning:free',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);