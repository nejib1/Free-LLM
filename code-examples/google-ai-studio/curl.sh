# ===============================================
# Google AI Studio - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://aistudio.google.com/
# ===============================================

curl "https://generativelanguage.googleapis.com/v1beta/models/{{model}}:generateContent?key=YOUR_API_KEY" \
-H "Content-Type: application/json" \
-d '{
  "contents": [{
    "parts": [{"text": "Explain how AI works"}]
  }]
}'