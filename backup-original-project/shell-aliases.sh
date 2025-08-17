# Levine Real Estate - Shell Aliases
# Add these to your ~/.zshrc or ~/.bashrc file

# Navigate to Levine Real Estate project
alias levine='cd "Levine.RealEstate Site"'

# Start all services
alias levine-dev='cd "Levine.RealEstate Site" && npm run dev'

# Start individual services
alias levine-frontend='cd "Levine.RealEstate Site" && npm run dev:frontend'
alias levine-cms='cd "Levine.RealEstate Site" && npm run dev:cms'
alias levine-builder='cd "Levine.RealEstate Site" && npm run dev:builder'

# Quick access to URLs
alias levine-web='open http://localhost:3000'
alias levine-admin='open http://localhost:1337/admin'

# Help and reminders
alias levine-help='cd "Levine.RealEstate Site" && ./demo.sh'
alias levine-remind='cd "Levine.RealEstate Site" && ./reminder.sh'

# Install and clean
alias levine-install='cd "Levine.RealEstate Site" && npm run install:all'
alias levine-clean='cd "Levine.RealEstate Site" && npm run clean'

echo "Levine Real Estate aliases loaded!"
echo "Use 'levine-dev' to start all services"
echo "Use 'levine-help' to see all options"
