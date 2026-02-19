// ===============================================
// GitHub Models - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/marketplace/models
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_GITHUB_TOKEN',
  baseURL: 'https://models.inference.ai.azure.com'
});

const response = await client.chat.completions.create({
  model: '{{model}}',
  messages: [
    { role: 'user', content: 'Explain how GitHub Models works' }
  ]
});

console.log(response.choices[0].message.content);