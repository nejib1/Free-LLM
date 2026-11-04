// ===============================================
// LLMTR - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://llmtr.com/en/terms
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_LLMTR_KEY',
  baseURL: 'https://llmtr.com/v1'
});

const response = await client.chat.completions.create({
  model: 'nvidia/nemotron-3-ultra-550b-a55b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);