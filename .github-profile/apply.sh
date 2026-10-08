#!/usr/bin/env bash
# Apply senior-dev GitHub profile polish for AJOUMOU
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
USER="AJOUMOU"

echo "==> Checking auth..."
gh auth status

echo "==> Updating profile metadata..."
gh api user -X PATCH \
  -f name='AJOUMOU' \
  -f bio='Full-Stack Engineer · Next.js · Vue · Flutter · Node · Python · shipping web & mobile products' \
  -f blog='https://github.com/AJOUMOU' \
  -F hireable=true \
  >/dev/null
echo "Profile bio/hireable updated."

echo "==> Creating / updating profile README repo..."
if ! gh repo view "$USER/$USER" >/dev/null 2>&1; then
  gh repo create "$USER/$USER" --public --description "Profile README" --clone=false
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
git clone "https://github.com/$USER/$USER.git" "$TMP/profile" 2>/dev/null \
  || git clone "git@github.com:$USER/$USER.git" "$TMP/profile"
cp "$ROOT/README.md" "$TMP/profile/README.md"
cd "$TMP/profile"
git add README.md
if git diff --cached --quiet; then
  echo "Profile README already up to date."
else
  git -c user.name="AJOUMOU" -c user.email="$(gh api user --jq .email // \"AJOUMOU@users.noreply.github.com\")" \
    commit -m "docs: polish profile README for senior full-stack presentation" || \
  git commit -m "docs: polish profile README for senior full-stack presentation"
  git push -u origin HEAD
fi

echo "==> Updating repo descriptions + topics..."

gh repo edit "$USER/bina-horizon" \
  --description "Bina Horizon Association website — Next.js, React, Tailwind, Framer Motion" \
  --add-topic nextjs --add-topic react --add-topic typescript --add-topic tailwindcss --add-topic framer-motion

gh repo edit "$USER/todolist" \
  --description "Full-stack todolist — Angular frontend + Node.js API" \
  --add-topic angular --add-topic nodejs --add-topic typescript --add-topic fullstack

gh repo edit "$USER/eneomobile" \
  --description "Ionic + Angular + Capacitor mobile client" \
  --add-topic ionic --add-topic angular --add-topic capacitor --add-topic mobile --add-topic typescript

gh repo edit "$USER/eneoweb" \
  --description "Angular web companion app" \
  --add-topic angular --add-topic typescript --add-topic frontend

gh repo edit "$USER/shop" \
  --description "Ionic + Angular commerce mobile app with Firebase" \
  --add-topic ionic --add-topic angular --add-topic firebase --add-topic mobile

gh repo edit "$USER/trackemployeesMaxime" \
  --description "Angular employee tracking interface" \
  --add-topic angular --add-topic typescript --add-topic scss

echo "==> Archiving empty / unfinished repos..."
for r in etontine smartcode votecam; do
  gh repo archive "$USER/$r" --yes 2>/dev/null || echo "Skip archive $r (may already be archived or missing)"
done

echo "==> Pinning featured repos..."
gh api graphql -f query='
mutation {
  updatePinRepositories(
    input: {
      pinnedRepositoryIds: []
    }
  ) { clientMutationId }
}' >/dev/null 2>&1 || true

# Resolve node IDs then pin (bina-horizon, todolist, eneomobile, shop, eneoweb, trackemployeesMaxime)
IDS=$(gh api graphql -f query='
query {
  user(login: "AJOUMOU") {
    bina: repository(name: "bina-horizon") { id }
    todo: repository(name: "todolist") { id }
    eneo: repository(name: "eneomobile") { id }
    shop: repository(name: "shop") { id }
    web: repository(name: "eneoweb") { id }
    track: repository(name: "trackemployeesMaxime") { id }
  }
}' --jq '[.data.user.bina.id, .data.user.todo.id, .data.user.eneo.id, .data.user.shop.id, .data.user.web.id, .data.user.track.id] | map(select(. != null))')

# Build GraphQL mutation with repo IDs
node_ids=$(echo "$IDS" | python3 -c 'import sys,json; ids=json.load(sys.stdin); print(" ".join(f"\\\"{i}\\\"" for i in ids))')
# Prefer gh CLI pin if available
if gh pin --help >/dev/null 2>&1; then
  gh pin "$USER/bina-horizon" "$USER/todolist" "$USER/eneomobile" "$USER/shop" "$USER/eneoweb" "$USER/trackemployeesMaxime" || true
else
  echo "Pin via UI if needed: https://github.com/$USER — pin bina-horizon, todolist, eneomobile, shop, eneoweb, trackemployeesMaxime"
  # GraphQL pin
  IDS_CSV=$(echo "$IDS" | python3 -c 'import sys,json; ids=json.load(sys.stdin); print(",".join(f"\"{i}\"" for i in ids))')
  gh api graphql -f query="
  mutation {
    updatePinRepositories(input: {
      pinnedRepositoryIds: [$IDS_CSV]
    }) { clientMutationId }
  }" || echo "Pin mutation may need manual step on profile."
fi

echo ""
echo "Done. View: https://github.com/$USER"
echo "Also set location + social links in: https://github.com/settings/profile"
