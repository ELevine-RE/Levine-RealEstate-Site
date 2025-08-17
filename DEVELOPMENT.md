# Development Setup Guide

This document provides instructions for setting up and running the development environment for the Evan Levine Real Estate website project.

## Project Structure

The project consists of two main parts:
- **Frontend**: Next.js application (in root directory)
- **CMS**: Strapi backend (in `/cms` directory)

## Development Server Scripts

To solve terminal integration issues with Cursor, we've created special wrapper scripts that help manage the development servers.

### Available Commands

Run these from the project root:

```bash
# Check server status
npm run status

# Start Next.js frontend only
npm run dev:next

# Start Strapi CMS only
npm run dev:strapi

# Start both servers (Strapi in background, Next.js in foreground)
npm run dev:all

# Kill all running development servers
npm run kill:servers
```

### Original Commands

The original commands are still available:
- `npm run dev` - Runs Next.js development server
- `cd cms && npm run dev` - Runs Strapi development server

## Why These Scripts?

These wrapper scripts solve an issue where Cursor's terminal doesn't recognize when a server is ready. The scripts:

1. Provide explicit "SERVER STARTED" messages
2. Run servers in background when appropriate
3. Show clear process IDs for better management
4. Ensure clean process termination

## Port Configuration

- Next.js: http://localhost:3000
- Strapi: http://localhost:1337
- Strapi Admin: http://localhost:1337/admin

## Troubleshooting

If you encounter issues:

1. Check running servers: `npm run status`
2. Kill any running servers: `npm run kill:servers` 
3. Restart with the appropriate command
