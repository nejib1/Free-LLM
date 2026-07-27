// ===============================================
// Friendli AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://friendli.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_FRIENDLI_KEY',
  baseURL: 'https://inference.friendli.ai/v1'
});

const response = await client.chat.completions.create({
  model: 'meta-llama-3.1-70b-instruct',
  messages: [
    { role: 'user', content: 'What makes your inference fast?' }
  ]
});

console.log(response.choices[0].message.content);