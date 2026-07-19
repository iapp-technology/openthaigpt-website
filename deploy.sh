#!/usr/bin/env bash
# Manual deploy: build locally as a sanity gate, rsync the source to the
# server, rebuild the Docker image there, and restart the container.
# Requires: ssh alias "web" (see ~/.ssh/config), docker group on the server.
set -euo pipefail

SERVER=web
REMOTE_DIR=/home/iapp/openthaigpt-website

echo "==> Local build (sanity gate: fails on broken links)"
npm run build

echo "==> Sync source to $SERVER:$REMOTE_DIR"
ssh "$SERVER" "mkdir -p $REMOTE_DIR"
rsync -az --delete \
  --exclude node_modules \
  --exclude build \
  --exclude .git \
  --exclude .docusaurus \
  --exclude .cache-loader \
  ./ "$SERVER:$REMOTE_DIR/"

echo "==> Build image and restart container on server"
ssh "$SERVER" "cd $REMOTE_DIR && docker compose build && docker compose up -d"

echo "==> Health check"
sleep 3
ssh "$SERVER" "curl -fsS -o /dev/null -w 'container answers on 127.0.0.1:3004 -> HTTP %{http_code}\n' http://127.0.0.1:3004/"

echo "==> Deploy complete"
