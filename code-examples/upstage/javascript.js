// ===============================================
// Upstage - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://console.upstage.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://console.upstage.ai/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.upstage.ai/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'solar-mini',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
