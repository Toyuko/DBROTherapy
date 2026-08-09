#!/usr/bin/env bash
cd "$(dirname "$0")"
PORT="${1:-8765}"
echo "BIOTECH THOMAS prototype → http://127.0.0.1:${PORT}/index.html"
exec python3 -m http.server "$PORT"
