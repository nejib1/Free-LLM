# ===============================================
# Glhf.chat - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://glhf.chat/
# ===============================================

curl https://glhf.chat/api/openai/v1/chat/completions \
  -H "Authorization: Bearer YOUR_GLHF_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "hf:meta-llama/Llama-3.1-70B-Instruct",
    "messages": [
      {
        "role": "user",
        "content": "Write a haiku about programming"
      }
    ]
  }'