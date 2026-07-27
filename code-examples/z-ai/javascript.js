// ===============================================
// Z.AI (GLM) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://z.ai/
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_ZAI_KEY',
  baseURL: 'https://api.z.ai/api/paas/v4'
});

const response = await client.chat.completions.create({
  model: 'glm-4.5-flash',
  messages: [
    { role: 'user', content: 'What makes the GLM Flash tier fast?' }
  ]
});

console.log(response.choices[0].message.content);