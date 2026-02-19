// ===============================================
// OpenRouter - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://openrouter.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_OPENROUTER_KEY',
  baseURL: 'https://openrouter.ai/api/v1'
});

const response = await client.chat.completions.create({
  model: '{{model}}',
  messages: [
    { role: 'user', content: 'What is OpenRouter?' }
  ]
});

console.log(response.choices[0].message.content);