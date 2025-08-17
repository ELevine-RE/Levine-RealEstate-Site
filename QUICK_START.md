# 🚀 Quick Start Guide - ELR Development Environment

## Current Working Setup ✅

Your development environment is now perfectly configured and saved to GitHub! Here's how to get back to this working state quickly.

## 🚀 Quick Boot Commands

### Option 1: Use the wrapper scripts (Recommended)
```bash
# Start both Next.js and Strapi servers
./scripts/dev:all

# Or start them individually:
./scripts/dev:next      # Next.js frontend
./scripts/dev:strapi    # Strapi CMS backend
```

### Option 2: Manual start
```bash
# Terminal 1: Start Next.js frontend
cd frontend && npm run dev

# Terminal 2: Start Strapi CMS
cd cms && npm run develop
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000
- **Strapi CMS**: http://localhost:1337
- **Admin Panel**: http://localhost:1337/admin

## 📁 Key Files & Configurations

### Brand Integration
- `public/scss/_elr-custom.scss` - ELR brand colors and variables
- `src/config/branding.js` - Brand configuration
- `public/scss/_style.scss` - Main styles with ELR integration

### Development Setup
- `scripts/` - Wrapper scripts for easy server management
- `DEVELOPMENT.md` - Detailed development documentation
- `package.json` files in both `frontend/` and `cms/` directories

## 🔧 What's Working

✅ **ELR Brand Colors**: Dark green (#223233), light green accents  
✅ **Custom SCSS Variables**: Brand colors, typography, spacing  
✅ **Header/Footer**: Branded with ELR styling  
✅ **Development Servers**: Both Next.js and Strapi running smoothly  
✅ **GitHub Sync**: All changes committed and pushed  

## 🚨 Troubleshooting

If something breaks:

1. **Check server status**: `./scripts/status`
2. **Kill all servers**: `./scripts/kill:servers`
3. **Restart**: `./scripts/dev:all`
4. **Check logs**: Look for error messages in terminal output

## 📝 Recent Changes

- Complete ELR brand integration
- Custom SCSS variable system
- Working development environment
- Branded header and footer components
- Functional Next.js + Strapi setup

---

**Last Updated**: $(date)  
**Status**: ✅ Working perfectly at http://localhost:48752/
