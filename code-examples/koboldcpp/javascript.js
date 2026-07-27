// ===============================================
// KoboldCpp - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://github.com/LostRuins/koboldcpp
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://github.com/LostRuins/koboldcpp
const client = new OpenAI({
  apiKey: 'koboldcpp',
  baseURL: 'http://localhost:5001/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'Llama-3-8B-Instruct.Q4_K_M.gguf',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
