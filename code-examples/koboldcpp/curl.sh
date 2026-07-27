# ===============================================
# KoboldCpp - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://github.com/LostRuins/koboldcpp
# ===============================================

curl http://localhost:5001/api/v1/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Once upon a time in a magical land,",
    "max_length": 200,
    "temperature": 0.7
  }'