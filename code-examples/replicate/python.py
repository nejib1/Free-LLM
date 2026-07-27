# ===============================================
# Replicate - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://replicate.com/
# ===============================================

import replicate

# pip install replicate
# export REPLICATE_API_TOKEN=YOUR_TOKEN

output = replicate.run(
    "meta/llama-3-70b-instruct",
    input={
        "prompt": "Write a short poem about AI",
        "max_tokens": 512
    }
)

print("".join(output))