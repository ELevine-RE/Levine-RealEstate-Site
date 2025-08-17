#!/bin/bash

echo "🏠 Levine Real Estate - Development Environment Demo"
echo "=================================================="
echo ""

echo "📁 Current Structure:"
echo "   • Root: $(pwd)"
echo "   • Frontend: ./frontend (Next.js + Builder.io)"
echo "   • CMS: ./cms (Strapi)"
echo ""

echo "🚀 Available Commands:"
echo "   • npm run dev          - Start ALL services"
echo "   • npm run dev:frontend - Start only frontend"
echo "   • npm run dev:cms      - Start only CMS"
echo "   • npm run dev:builder  - Start only Builder.io"
echo ""

echo "🌐 Service URLs:"
echo "   • Frontend: http://localhost:3000"
echo "   • CMS Admin: http://localhost:1337/admin"
echo "   • CMS API: http://localhost:1337/api"
echo ""

echo "💡 Quick Start:"
echo "   1. npm run dev          (starts everything)"
echo "   2. Open http://localhost:3000 in browser"
echo "   3. Use Builder.io dev tools for visual editing"
echo ""

echo "🔧 Individual Services:"
echo "   • Frontend only: npm run dev:frontend"
echo "   • CMS only: npm run dev:cms"
echo "   • Builder.io only: npm run dev:builder"
echo ""

echo "📦 Dependencies:"
echo "   • Install all: npm run install:all"
echo "   • Clean all: npm run clean"
echo ""

echo "✅ Your frontend is currently running at http://localhost:3000"
echo "   Open it in your browser to see your real estate website!"
