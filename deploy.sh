#!/bin/bash
# GitHub Pages Deployment Script for LaunchKit AI

set -e

echo "🚀 Deploying LaunchKit AI to GitHub Pages..."

# Navigate to project directory
cd "$(dirname "$0")"

# Build the project
echo "📦 Building production bundle..."
npm run build

# Check if build succeeded
if [ ! -d "out" ]; then
  echo "❌ Build failed - out/ directory not found"
  exit 1
fi

echo "✅ Build complete - out/ directory ready"

# Instructions for manual deployment
echo ""
echo "📋 Manual GitHub Setup Required:"
echo ""
echo "1. Go to: https://github.com/KushBackup/launchkit-ai/settings/pages"
echo "2. Under 'Build and deployment' → Source: select 'GitHub Actions'"
echo "3. The workflow is already committed (.github/workflows/deploy.yml)"
echo ""
echo "4. Push this commit:"
echo "   git push origin main"
echo ""
echo "   (You may need to authenticate with GitHub token)"
echo ""
echo "5. GitHub Pages will be live at:"
echo "   https://kushbackup.github.io/launchkit-ai/"
echo ""
echo "🎯 Or use the GitHub CLI:"
echo "   gh repo view --web"
echo "   Then enable Pages in Settings → Pages → GitHub Actions"
echo ""
echo "📊 Build Stats:"
du -sh out/
echo ""
echo "🔗 Once deployed, your site will be at:"
echo "   https://kushbackup.github.io/launchkit-ai/"
