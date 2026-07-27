// ===============================================
// NVIDIA NIM - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://build.nvidia.com/explore/discover
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://build.nvidia.com/explore/discover
const client = new OpenAI({
  apiKey: 'nvapi-YOUR_API_KEY',
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'meta/llama-3.1-70b-instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
