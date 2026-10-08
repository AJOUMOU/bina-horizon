#!/usr/bin/env bash
# Sync CV → GitHub profile + project case-study repos
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
USER="AJOUMOU"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "==> Auth"
gh auth status

echo "==> Profile metadata (from CV)"
gh api user -X PATCH \
  -f name='Ajoumou Brandon' \
  -f bio='Senior Fullstack Developer · Angular · Java · Ionic · Node.js · 5+ years · Project Lead' \
  -f blog='https://linkedin.com/in/ajoumou-brandon8a1537217' \
  -f location='Cameroon' \
  -f company='Keleya' \
  -F hireable=true \
  >/dev/null
echo "Profile updated."

push_readme_repo() {
  local name="$1"
  local desc="$2"
  local readme_src="$3"
  shift 3
  local topics=("$@")

  echo "---- $name ----"
  if ! gh repo view "$USER/$name" >/dev/null 2>&1; then
    gh repo create "$USER/$name" --public --description "$desc" --clone=false
  else
    gh repo edit "$USER/$name" --description "$desc" || true
  fi

  for t in "${topics[@]}"; do
    gh repo edit "$USER/$name" --add-topic "$t" 2>/dev/null || true
  done

  local dest="$TMP/$name"
  rm -rf "$dest"
  git clone "https://github.com/$USER/$name.git" "$dest"
  cp "$readme_src" "$dest/README.md"
  # optional stack topic file
  if [[ -f "$ROOT/projects/$name/STACK.md" ]]; then
    cp "$ROOT/projects/$name/STACK.md" "$dest/STACK.md"
  fi
  cd "$dest"
  git config user.name "Ajoumou Brandon"
  git config user.email "juniorajoumou@gmail.com"
  git add -A
  if git diff --cached --quiet; then
    echo "unchanged"
  else
    git commit -m "docs: add CV case study for $name"
    # ensure main
    git branch -M main
    git push -u origin main
  fi
}

echo "==> Portfolio index"
push_readme_repo portfolio \
  "Portfolio index — CV projects, stacks & case studies (Ajoumou Brandon)" \
  "$ROOT/portfolio/README.md" \
  portfolio fullstack angular java nodejs spring-boot ionic

echo "==> Project case studies"
push_readme_repo fodecc \
  "FODECC — Backend Node.js / Express API & project lead (Keleya) · MongoDB · MySQL · JWT · Docker" \
  "$ROOT/projects/fodecc/README.md" \
  nodejs express mongodb mysql jwt docker backend

push_readme_repo magani \
  "Magani — Pharmacy OS · Node.js / Express · JWT · Docker · project lead (Keleya)" \
  "$ROOT/projects/magani/README.md" \
  nodejs express pharmacy jwt docker fullstack

push_readme_repo bankrelation \
  "BankRelation — Multi-bank transfers · Angular + Java Spring Boot · MySQL · PostgreSQL (Ecomix)" \
  "$ROOT/projects/bankrelation/README.md" \
  angular java spring-boot mysql postgresql fullstack

push_readme_repo smartwork \
  "SmartWork — Job portal · Angular + Java Spring Boot (Thekafe)" \
  "$ROOT/projects/smartwork/README.md" \
  angular java spring-boot job-portal fullstack

push_readme_repo bollore-sales-stock \
  "Bolloré mission — Sales & stock management · Angular + Spring Boot" \
  "$ROOT/projects/bollore-sales-stock/README.md" \
  angular java spring-boot fullstack

push_readme_repo renaprov-hr \
  "Renaprov — Employee & attendance · Angular 12+ · Spring Boot · Spring JPA" \
  "$ROOT/projects/renaprov-hr/README.md" \
  angular spring-boot spring-jpa hr frontend

push_readme_repo shopmaster \
  "ShopMaster — E-commerce · Angular 12+ · solo freelance (Madia SARL)" \
  "$ROOT/projects/shopmaster/README.md" \
  angular ecommerce typescript frontend

push_readme_repo leadership-program \
  "PL Leadership Program — Training & diagnostics platform · Angular 12+" \
  "$ROOT/projects/leadership-program/README.md" \
  angular typescript frontend training

push_readme_repo sdeposite \
  "S'Deposite — Bank to mobile-money transfers · Angular 7 (Skydev)" \
  "$ROOT/projects/sdeposite/README.md" \
  angular fintech frontend typescript

push_readme_repo emeref \
  "EMEREF — Easy Medical Resource Finder · Angular 6 (Skydev)" \
  "$ROOT/projects/emeref/README.md" \
  angular healthcare frontend typescript

echo "==> Profile README"
push_readme_repo AJOUMOU \
  "Profile README — Ajoumou Brandon, Senior Fullstack Developer" \
  "$ROOT/README.md" \
  profile readme fullstack

echo "==> Align existing repos with CV"
gh repo edit "$USER/shop" \
  --description "Early Ionic/Angular commerce app (related to ShopMaster) · Firebase" \
  --add-topic ionic --add-topic angular --add-topic firebase --add-topic ecommerce 2>/dev/null || true

gh repo edit "$USER/todolist" \
  --description "Full-stack todolist — Angular + Node.js (matches Angular/Node stack)" \
  --add-topic angular --add-topic nodejs --add-topic typescript 2>/dev/null || true

gh repo edit "$USER/bina-horizon" \
  --description "Bina Horizon Association — Next.js · React · Tailwind · Framer Motion" 2>/dev/null || true

gh repo edit "$USER/trackemployeesMaxime" \
  --description "Employee tracking UI — Angular (aligns with Renaprov HR experience)" \
  --add-topic angular --add-topic hr 2>/dev/null || true

echo "==> Done"
echo "Profile: https://github.com/$USER"
echo "Pin manually if needed: portfolio, fodecc, magani, bankrelation, smartwork, bina-horizon"
