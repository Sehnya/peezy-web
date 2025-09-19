#!/bin/bash

# Peezy Website Deployment Script

echo "🍋 Preparing Peezy website for deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Type check
echo "🔍 Running type check..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ Type check failed. Please fix TypeScript errors before deploying."
    exit 1
fi

# Build the project
echo "🏗️ Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix build errors before deploying."
    exit 1
fi

echo "✅ Build successful! Ready for deployment."
echo ""
echo "🚀 To deploy to Vercel:"
echo "   1. Install Vercel CLI: npm i -g vercel"
echo "   2. Run: vercel"
echo ""
echo "📁 Build output is in the 'dist' directory"