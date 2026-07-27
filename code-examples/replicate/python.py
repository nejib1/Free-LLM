# ===============================================
# Replicate - Code Example
# Free LLM API - https://free-llm.com
# Provider URL: https://replicate.com/
# ===============================================
# Replicate uses an async prediction API, not /chat/completions.
# The `replicate` package's .run() call handles the polling for you.

import os
import replicate

os.environ["REPLICATE_API_TOKEN"] = "YOUR_API_TOKEN"

output = replicate.run(
    "meta/meta-llama-3-70b-instruct",
    input={"prompt": "What makes model-hosting marketplaces useful?"},
)

print("".join(output))
