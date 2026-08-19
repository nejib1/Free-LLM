// ===============================================
// Hetzner Inference API - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://experiments.hetzner.com/inference
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_HETZNER_API_TOKEN',
  baseURL: 'https://inference.hetzner.com/api/v1'
});

const response = await client.chat.completions.create({
  model: 'Qwen/Qwen3.6-35B-A3B-FP8',
  messages: [{ role: 'user', content: 'Hello!' }]
});

console.log(response.choices[0].message.content);