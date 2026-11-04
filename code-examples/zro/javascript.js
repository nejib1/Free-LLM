// ===============================================
// Zro (MoonMath) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://zro.moonmath.ai
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_ZRO_KEY',
  baseURL: 'https://zro.moonmath.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'glm-5.3-flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);