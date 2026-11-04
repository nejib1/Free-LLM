// ===============================================
// Pollinations.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://pollinations.ai
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_POLLINATIONS_KEY',
  baseURL: 'https://gen.pollinations.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'openai/gpt-oss-20b',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);