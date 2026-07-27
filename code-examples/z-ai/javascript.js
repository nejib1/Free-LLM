// ===============================================
// Z.AI (GLM) - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://z.ai/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://z.ai/
const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseURL: 'https://api.z.ai/api/paas/v4',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'glm-4.5-flash',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
