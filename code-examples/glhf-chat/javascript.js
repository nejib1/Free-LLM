// ===============================================
// Glhf.chat - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://glhf.chat/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_GLHF_KEY',
  baseURL: 'https://glhf.chat/api/openai/v1'
});

const response = await client.chat.completions.create({
  model: 'hf:meta-llama/Llama-3.1-70B-Instruct',
  messages: [
    { role: 'user', content: 'Write a haiku about programming' }
  ]
});

console.log(response.choices[0].message.content);