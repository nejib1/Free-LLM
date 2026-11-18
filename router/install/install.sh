#!/bin/sh
# Free-LLM Router installer — https://free-llm.com/router
#   curl -fsSL https://free-llm.com/install.sh | sh
# Installs into ~/.free-llm/app and adds a `free-llm` command to ~/.local/bin.
# No sudo, no npm, no global changes. Uninstall: rm -rf ~/.free-llm ~/.local/bin/free-llm
set -e

URL="${FREE_LLM_TARBALL:-https://github.com/nejib1/Free-LLM/releases/latest/download/free-llm.tgz}"
APP="${FREE_LLM_HOME:-$HOME/.free-llm}/app"
BIN="$HOME/.local/bin"

say() { printf '%s\n' "$*"; }

if ! command -v node >/dev/null 2>&1; then
  say "Free-LLM Router needs Node.js 18 or newer, and it is not installed."
  say "  macOS:   brew install node        (or https://nodejs.org)"
  say "  Ubuntu:  sudo apt install nodejs   (check: node -v ≥ 18)"
  say "  Other:   https://nodejs.org/en/download"
  say "Then run this installer again."
  exit 1
fi
MAJOR=$(node -p 'process.versions.node.split(".")[0]')
if [ "$MAJOR" -lt 18 ]; then
  say "Your Node.js is $(node -v); Free-LLM Router needs 18 or newer: https://nodejs.org"
  exit 1
fi

say "⚡ Installing Free-LLM Router…"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
if command -v curl >/dev/null 2>&1; then curl -fsSL "$URL" -o "$TMP/r.tgz"; else wget -qO "$TMP/r.tgz" "$URL"; fi
tar -xzf "$TMP/r.tgz" -C "$TMP"
rm -rf "$APP"
mkdir -p "$(dirname "$APP")" "$BIN"
mv "$TMP/package" "$APP"

cat > "$BIN/free-llm" <<WRAP
#!/bin/sh
exec node "$APP/router/bin/free-llm.js" "\$@"
WRAP
chmod +x "$BIN/free-llm"

say "✓ Installed: $BIN/free-llm"
case ":$PATH:" in
  *":$BIN:"*) ;;
  *)
    for rc in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile"; do
      [ -f "$rc" ] && ! grep -q '.local/bin' "$rc" && printf '\nexport PATH="$HOME/.local/bin:$PATH"\n' >> "$rc"
    done
    say "  (added ~/.local/bin to your PATH — open a new terminal, or run: export PATH=\"\$HOME/.local/bin:\$PATH\")"
    ;;
esac
say ""
if [ -t 1 ] && [ -r /dev/tty ]; then
  say "Starting the guided setup…"
  exec "$BIN/free-llm" </dev/tty
else
  say "Run it with:  free-llm"
fi
