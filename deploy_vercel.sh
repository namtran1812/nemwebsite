#!/usr/bin/env bash
set -euo pipefail

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI not found. Install with: npm i -g vercel"
  exit 1
fi

echo "Logging into Vercel (browser will open if needed)..."
vercel login

echo "Deploying project to production..."
vercel --prod

echo "If you haven't added your domain yet, run: vercel domains add www.nemtranhoang.com"
echo "Follow Vercel's instructions to add the DNS records at your registrar."
