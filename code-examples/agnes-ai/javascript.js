// ===============================================
// Agnes AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://agnes-ai.com
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_AGNES_AI_KEY',
  baseURL: 'https://apihub.agnes-ai.com/v1'
});

const response = await client.chat.completions.create({
  model: 'agnes-3.0-flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);