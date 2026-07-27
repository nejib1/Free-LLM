// ===============================================
// Hyperbolic - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://app.hyperbolic.xyz/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://app.hyperbolic.xyz/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.hyperbolic.xyz/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
