#!/bin/bash
# Royal Sweeps Casino Development Restart Script

echo "🏰 Restarting Royal Sweeps Casino Development Server..."

# Clear npm cache
echo "📦 Clearing npm cache..."
npm cache clean --force

# Remove node_modules and package-lock.json to force fresh install
echo "🧹 Cleaning up dependencies..."
rm -rf node_modules
rm -f package-lock.json

# Reinstall dependencies
echo "📥 Reinstalling dependencies..."
npm install

# Clear Vite cache
echo "⚡ Clearing Vite cache..."
rm -rf node_modules/.vite

# Start development server
echo "🚀 Starting development server..."
npm run dev