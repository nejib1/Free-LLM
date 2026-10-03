# ===============================================
# Damascus - Install via curl
# Free LLM API - https://free-llm.com
# Project URL: https://github.com/NomaDamas/damascus
# ===============================================

set -e

# Requires Rust 1.80+
if ! command -v cargo >/dev/null 2>&1; then
  echo "Rust not found. Install it first: curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
  exit 1
fi

git clone https://github.com/NomaDamas/damascus
cd damascus
cargo install --path .

# 1. Write a starter config
damascus init

# 2. Point it at a free Free-LLM provider (Groq default — no credit card):
export GROQ_API_KEY="gsk_your_groq_key_here"   # console.groq.com/keys

# 3. Verify the wiring with one tiny live call per role
damascus doctor --probe

# 4. Run a task — only changes that pass build + tests are kept
damascus run "implement the is_prime function in src/lib.rs so the tests pass"