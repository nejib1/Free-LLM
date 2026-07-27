// ===============================================
// LM Studio - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://lmstudio.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://lmstudio.ai/
const client = new OpenAI({
  apiKey: 'lm-studio',
  baseURL: 'http://localhost:1234/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'llama-3.2-3b-instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
