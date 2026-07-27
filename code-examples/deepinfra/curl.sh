# ===============================================
# DeepInfra - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://deepinfra.com/
# ===============================================

curl https://api.deepinfra.com/v1/openai/chat/completions \
  -H "Authorization: Bearer YOUR_DEEPINFRA_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-ai/DeepSeek-V3",
    "messages": [
      {
        "role": "user",
        "content": "Explain the MoE architecture"
      }
    ]
  }'