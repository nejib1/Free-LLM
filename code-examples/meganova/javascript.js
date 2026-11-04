// ===============================================
// MegaNova AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.meganova.ai/tiers
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_MEGANOVA_KEY',
  baseURL: 'https://api.meganova.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'meganova-ai/manta-pro-1.0',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);