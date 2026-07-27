// ===============================================
// Fireworks AI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://fireworks.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://fireworks.ai/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.fireworks.ai/inference/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'accounts/fireworks/models/llama-v3p1-8b-instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
