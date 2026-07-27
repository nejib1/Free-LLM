// ===============================================
// Qwen / Alibaba - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://bailian.console.alibabacloud.com/
// ===============================================

import OpenAI from 'openai';

// Get your API key from https://bailian.console.alibabacloud.com/
const client = new OpenAI({
  apiKey: 'YOUR_DASHSCOPE_API_KEY',
  baseURL: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
});

async function main() {
  const completion = await client.chat.completions.create({
    model: 'qwen-plus',
    messages: [{ role: 'user', content: 'What makes your inference platform unique?' }],
  });

  console.log(completion.choices[0].message.content);
}

main();
