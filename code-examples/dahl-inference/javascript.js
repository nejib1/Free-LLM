// ===============================================
// Dahl Inference - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://inference.dahl.global/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_DAHL_KEY',
  baseURL: 'https://inference.dahl.global/v1'
});

const response = await client.chat.completions.create({
  model: 'zai-org/GLM-5.3-Flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);