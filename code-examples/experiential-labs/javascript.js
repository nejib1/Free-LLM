// ===============================================
// Experiential Labs - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://www.experientiallabs.ai/pricing
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_EXPERIENTIAL_LABS_KEY',
  baseURL: 'https://api.experientiallabs.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'gpt-6-luna',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);