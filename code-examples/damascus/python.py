# ===============================================
# Damascus - Setup Helper (Python)
# Free LLM API - https://free-llm.com
# Project URL: https://github.com/NomaDamas/damascus
# -------------------------------------------------
# Usage:
#   python python.py                 # write damascus.toml using GROQ_API_KEY
#   python python.py openrouter      # ... using OPENROUTER_API_KEY
#   python python.py google          # ... using GEMINI_API_KEY
#
# It writes a ready-to-run damascus.toml wired to the free provider you pick.
# ===============================================

import os
import sys

FREE_PROVIDERS = {
    "groq": {
        "name": "Groq",
        "base_url": "https://api.groq.com/openai/v1",
        "env": "GROQ_API_KEY",
        "key_page": "console.groq.com/keys",
        "note": "14,400 req/day, no credit card",
        "model": "qwen/qwen3.6-27b",
    },
    "openrouter": {
        "name": "OpenRouter",
        "base_url": "https://openrouter.ai/api/v1",
        "env": "OPENROUTER_API_KEY",
        "key_page": "openrouter.ai/keys",
        "note": "50 req/day free tier",
        "model": "deepseek/deepseek-v4-flash:free",
    },
    "google": {
        "name": "Google AI Studio",
        "base_url": "https://generativelanguage.googleapis.com/v1beta/openai",
        "env": "GEMINI_API_KEY",
        "key_page": "aistudio.google.com/apikey",
        "note": "Gemini Flash free tier",
        "model": "gemini-2.0-flash",
    },
    "mistral": {
        "name": "Mistral",
        "base_url": "https://api.mistral.ai/v1",
        "env": "MISTRAL_API_KEY",
        "key_page": "console.mistral.ai/api-keys",
        "note": "phone verification, 1 req/s",
        "model": "mistral-small-latest",
    },
    "nvidia": {
        "name": "NVIDIA NIM",
        "base_url": "https://integrate.api.nvidia.com/v1",
        "env": "NVIDIA_API_KEY",
        "key_page": "build.nvidia.com/settings/api-keys",
        "note": "40 RPM, phone verification",
        "model": "deepseek-ai/deepseek-r1",
    },
    "cerebras": {
        "name": "Cerebras",
        "base_url": "https://api.cerebras.ai/v1",
        "env": "CEREBRAS_API_KEY",
        "key_page": "cloud.cerebras.ai",
        "note": "$5 one-time credit",
        "model": "llama-3.3-70b",
    },
}

TEMPLATE = """# damascus.toml - generated for Free-LLM provider: {name}
# Full Free-LLM directory: https://free-llm.com

[providers.{slug}]
base_url = "{base_url}"
api_key_env = "{env}"          # {note} - get at {key_page}

[providers.local]
base_url = "http://localhost:11434/v1"  # Ollama / llama.cpp / vLLM (no key)

[models]
planner  = "{slug}/{model}"
drafter  = "{slug}/{model}"
judge    = "{slug}/{model}"
repairer = "{slug}/{model}"

[scaling]
candidates = 8
repair_rounds = 2
max_recursion = 2
max_steps = 40
temperature = 0.3
temperature_step = 0.2
explore_temperature = 0.9
concurrency = 8

[verify]
build = "cargo build"
test  = "cargo test"
lint  = "cargo clippy -- -D warnings"
timeout_secs = 600
"""


def main():
    choice = sys.argv[1] if len(sys.argv) > 1 else "groq"
    if choice not in FREE_PROVIDERS:
        sys.exit(f"Unknown provider '{choice}'. Pick one of: {', '.join(FREE_PROVIDERS)}")

    p = FREE_PROVIDERS[choice]
    if not os.environ.get(p["env"]):
        print(f"[warn] {p['env']} not set - export it first. Get a free key at {p['key_page']}")

    output = TEMPLATE.format(
        name=p["name"], slug=choice,
        base_url=p["base_url"], env=p["env"], key_page=p["key_page"],
        note=p["note"], model=p["model"],
    )
    with open("damascus.toml", "w", encoding="utf-8") as f:
        f.write(output)
    print(f"[ok] wrote damascus.toml using {choice} ({p['note']}) on model '{p['model']}'")
    print("Next: export your key, then run:  damascus doctor --probe  &&  damascus run \"<task>\"")


if __name__ == "__main__":
    main()