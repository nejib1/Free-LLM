// ===============================================
// NVIDIA NIM - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://build.nvidia.com/explore/discover
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_NVIDIA_KEY',
  baseURL: 'https://integrate.api.nvidia.com/v1'
});

const response = await client.chat.completions.create({
  model: 'meta/llama-3.1-70b-instruct',
  messages: [
    { role: 'user', content: 'What is NVIDIA NIM?' }
  ]
});

console.log(response.choices[0].message.content);