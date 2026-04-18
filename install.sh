#!/bin/bash
# =====================================================
# OBSIDIAN Neural Presentation — Install dependencies
# Run this once to have everything offline
# =====================================================

echo "📦 Installing presentation dependencies..."

cd "$(dirname "$0")"

# Node (npm) required
if ! command -v npm &> /dev/null; then
  echo "❌ npm not found. Install Node.js first: https://nodejs.org"
  exit 1
fi

# Install npm packages
npm install reveal.js gsap

# Copy vendor files
echo "📂 Copying vendor files..."

mkdir -p vendor/reveal/dist vendor/reveal/plugin
mkdir -p vendor/gsap

cp node_modules/reveal.js/dist/reveal.js vendor/reveal/dist/
cp node_modules/reveal.js/dist/reveal.css vendor/reveal/dist/
cp node_modules/reveal.js/dist/reset.css vendor/reveal/dist/

cp node_modules/gsap/dist/gsap.min.js vendor/gsap/

# Font Awesome
echo "🔤 Downloading Font Awesome..."
mkdir -p vendor/fontawesome/css vendor/fontawesome/webfonts

FA_VERSION="6.5.0"
FA_BASE="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${FA_VERSION}"

curl -s "${FA_BASE}/css/all.min.css" -o vendor/fontawesome/css/all.min.css

# Fix paths in CSS (cdnjs uses relative paths)
sed -i 's|../webfonts/|../webfonts/|g' vendor/fontawesome/css/all.min.css

# Download webfonts
for font in fa-brands-400 fa-regular-400 fa-solid-900 fa-v4compatibility; do
  curl -s "${FA_BASE}/webfonts/${font}.woff2" -o "vendor/fontawesome/webfonts/${font}.woff2"
  curl -s "${FA_BASE}/webfonts/${font}.ttf" -o "vendor/fontawesome/webfonts/${font}.ttf"
done

# Google Fonts offline (manual fallback)
echo ""
echo "⚠️  Google Fonts (Syne + Space Mono) need manual download for full offline:"
echo "   → https://gwfh.mranftl.com/fonts/syne?subsets=latin"
echo "   → https://gwfh.mranftl.com/fonts/space-mono?subsets=latin"
echo "   Download .woff2 files → place in ./fonts/"
echo "   Then uncomment @font-face in css/theme.css"
echo ""
echo "   Without this, the presentation falls back to system fonts — still works fine."
echo ""

echo "✅ Done! To run locally:"
echo "   python3 -m http.server 8000"
echo "   → open http://localhost:8000"
