// ===============================================
// Ollama Cloud - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://ollama.com/cloud
// ===============================================

import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: 'YOUR_API_KEY',
    baseURL: 'https://ollama.com/v1'
});

async function main() {
    const response = await client.chat.completions.create({
        model: 'model-name-here',
        messages: [
            { role: 'user', content: 'Hello, how are you?' }
        ]
    });
    
    console.log(response.choices[0].message.content);
}

main();