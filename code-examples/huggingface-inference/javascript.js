// ===============================================
// Hugging Face Inference - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://huggingface.co/inference-api/serverless
// ===============================================

import OpenAI from '"'"'openai'"'"';

const client = new OpenAI({
  apiKey: '"'"'YOUR_HF_TOKEN'"'"',
  baseURL: '"'"'https://router.huggingface.co/v1'"'"'
});

const response = await client.chat.completions.create({
  model: '"'"'black-forest-labs/FLUX.1-dev'"'"',
  messages: [
    { role: '"'"'user'"'"', content: '"'"'Explain the benefits of open inference routing'"'"' }
  ]
});

console.log(response.choices[0].message.content);