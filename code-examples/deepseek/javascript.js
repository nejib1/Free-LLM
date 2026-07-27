// ===============================================
// DeepSeek - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://platform.deepseek.com/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_DEEPSEEK_KEY',
  baseURL: 'https://api.deepseek.com/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-chat',
  messages: [
    { role: 'user', content: 'Write a Python function to detect palindromes' }
  ]
});

console.log(response.choices[0].message.content);