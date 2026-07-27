// ===============================================
// DeepInfra - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://deepinfra.com/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://deepinfra.com/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.deepinfra.com/v1/openai',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'meta-llama/Meta-Llama-3.1-8B-Instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
