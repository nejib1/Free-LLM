// ===============================================
// Cerebras - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://cerebras.ai/inference
// ===============================================

import Cerebras from '@cerebras/cerebras_cloud_sdk';

const client = new Cerebras({
  apiKey: 'YOUR_CEREBRAS_API_KEY',
});

async function main() {
  const completion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Why is fast inference important?' }],
    model: '{{model}}',
  });

  console.log(completion.choices[0].message.content);
}

main();