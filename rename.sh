#!/usr/bin/env bash
set -euo pipefail

FILES=$(find packages/*/src -name '*.mjs')

for f in $FILES
do
  mv -- "$f" "${f%.mjs}.js"
done
