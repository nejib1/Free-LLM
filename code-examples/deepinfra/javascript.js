// ===============================================
// DeepInfra - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://deepinfra.com/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_DEEPINFRA_KEY',
  baseURL: 'https://api.deepinfra.com/v1/openai'
});

const response = await client.chat.completions.create({
  model: 'deepseek-ai/DeepSeek-V3',
  messages: [
    { role: 'user', content: 'Explain the MoE architecture' }
  ]
});

console.log(response.choices[0].message.content);