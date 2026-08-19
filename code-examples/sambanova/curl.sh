# ===============================================
# SambaNova Cloud - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://cloud.sambanova.ai/
# ===============================================

curl https://api.sambanova.ai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_SAMBANOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "Meta-Llama-3.3-70B-Instruct",
    "messages": [
      {"role": "user", "content": "Explain quantum computing in one sentence."}
    ],
    "temperature": 0.1,
    "top_p": 0.1
  }'