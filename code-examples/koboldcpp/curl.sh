# ===============================================
# KoboldCpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/LostRuins/koboldcpp
# ===============================================

curl http://localhost:5001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer koboldcpp" \
  -d '{
    "model": "Llama-3-8B-Instruct.Q4_K_M.gguf",
    "messages": [
      {"role": "user", "content": "What makes your inference platform unique?"}
    ]
  }'
