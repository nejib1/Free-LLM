// ===============================================
// Sail Research - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.sailresearch.com/pricing
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SAIL_RESEARCH_KEY',
  baseURL: 'https://api.sailresearch.com/v1'
});

const response = await client.chat.completions.create({
  model: 'moonshotai/Kimi-K3',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);