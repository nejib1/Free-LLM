// ===============================================
// AI21 Labs - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://docs.ai21.com/
// ===============================================

import { AI21Client } from "@ai21/ai21-js-sdk";

const client = new AI21Client({ apiKey: "YOUR_API_KEY" });

const response = await client.chat.completions.create({
  model: "jamba-1.5-large",
  messages: [{ role: "user", content: "Explain the Mamba architecture" }],
});

console.log(response.choices[0].message.content);