#!/bin/bash

# 🚀 Quick Boot Script for ELR Development Environment
# This script starts both Next.js and Strapi servers in the background

echo "🚀 Starting ELR Development Environment..."

# Start Next.js frontend
echo "📱 Starting Next.js frontend..."
cd frontend && npm run dev > ../logs/nextjs.log 2>&1 &
NEXT_PID=$!

# Start Strapi CMS
echo "🗄️  Starting Strapi CMS..."
cd ../cms && npm run develop > ../logs/strapi.log 2>&1 &
STRAPI_PID=$!

# Save PIDs for easy management
echo $NEXT_PID > ../logs/nextjs.pid
echo $STRAPI_PID > ../logs/strapi.pid

echo "✅ Development environment starting..."
echo "📱 Next.js: http://localhost:3000"
echo "🗄️  Strapi: http://localhost:1337"
echo "🔧 Admin: http://localhost:1337/admin"
echo ""
echo "📊 Check status: ./scripts/status"
echo "🛑 Stop servers: ./scripts/kill:servers"
echo ""
echo "⏳ Waiting for servers to be ready..."

# Wait a moment for servers to start
sleep 5

# Check if servers are responding
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Next.js is ready at http://localhost:3000"
else
    echo "⏳ Next.js still starting..."
fi

if curl -s http://localhost:1337 > /dev/null; then
    echo "✅ Strapi is ready at http://localhost:1337"
else
    echo "⏳ Strapi still starting..."
fi

echo ""
echo "🎉 ELR Development Environment is starting up!"
echo "💡 Use './scripts/status' to check server status"
