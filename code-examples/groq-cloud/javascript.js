// ===============================================
// Groq - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://console.groq.com/
// ===============================================

const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: "YOUR_API_KEY" });

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "allam-2-7b-instruct",
  });

  console.log(chatCompletion.choices[0].message.content);
}

main();