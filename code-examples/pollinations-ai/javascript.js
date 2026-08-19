// ===============================================
// Pollinations.ai - Code Example
// Free LLM API - https://free-llm.com
// Provider URL: https://pollinations.ai
// ===============================================

// No API key needed for basic use
const response = await fetch('https://text.pollinations.ai/Hello!');
const text = await response.text();
console.log(text);