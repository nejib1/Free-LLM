// ===============================================
// Inference.net - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://inference.net/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_INFERENCE_NET_KEY',
  baseURL: 'https://api.inference.net/v1'
});

const response = await client.chat.completions.create({
  model: 'deepseek-ai/DeepSeek-R1',
  messages: [
    { role: 'user', content: 'What is decentralized AI inference?' }
  ]
});

console.log(response.choices[0].message.content);