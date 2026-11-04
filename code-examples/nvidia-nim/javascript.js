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
  model: 'z-ai/glm-5.3-flash',
  messages: [
    { role: 'user', content: 'Give me three tips for writing clean code.' }
  ]
});

console.log(response.choices[0].message.content);