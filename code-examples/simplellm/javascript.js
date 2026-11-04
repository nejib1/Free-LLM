// ===============================================
// SimpleLLM - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://simplellm.eu/docs/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_SIMPLELLM_KEY',
  baseURL: 'https://api.simplellm.eu/v1'
});

const response = await client.chat.completions.create({
  model: 'free-Llama-3.1-8B-Instruct',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);