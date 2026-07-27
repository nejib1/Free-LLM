// ===============================================
// llama.cpp - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/ggml-org/llama.cpp
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://github.com/ggml-org/llama.cpp
const client = new OpenAI({
  apiKey: 'no-key',
  baseURL: 'http://localhost:8080/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'Meta-Llama-3-8B-Instruct.Q4_K_M.gguf',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
