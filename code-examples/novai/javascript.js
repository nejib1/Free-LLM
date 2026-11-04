// ===============================================
// NovAI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://aiapi-pro.com
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_NOVAI_KEY',
  baseURL: 'https://aiapi-pro.com/v1'
});

const response = await client.chat.completions.create({
  model: 'glm-4.7-flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);