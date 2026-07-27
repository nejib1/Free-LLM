// ===============================================
// Scaleway - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://console.scaleway.com/generative-api/models
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://console.scaleway.com/generative-api/models
const client = new OpenAI({
  apiKey: '$SCW_SECRET_KEY',
  baseURL: 'https://api.scaleway.ai/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'llama-3.3-70b-instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
