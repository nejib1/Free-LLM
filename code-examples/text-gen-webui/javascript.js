// ===============================================
// Text Gen WebUI - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/oobabooga/text-generation-webui
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://github.com/oobabooga/text-generation-webui
const client = new OpenAI({
  apiKey: 'text-gen-webui',
  baseURL: 'http://127.0.0.1:5000/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'Meta-Llama-3-8B-Instruct',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
