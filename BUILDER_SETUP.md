# Builder.io + Homez Template Integration

## 🚀 Quick Start

### 1. Get Your Builder.io API Key
1. Go to [Builder.io](https://builder.io)
2. Sign up/Sign in
3. Create a new space
4. Copy your API key from Account Settings

### 2. Set Up Environment Variables
Create a `.env.local` file in your project root:
```bash
NEXT_PUBLIC_BUILDER_API_KEY=your_api_key_here
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 3. Start the Development Server
```bash
npm run dev
```

### 4. Access Builder.io Visual Editor
- **Local Development**: `http://localhost:3000/builder`
- **Builder.io Studio**: Go to your Builder.io dashboard and start editing

## 🎨 What You Can Do

### Visual Page Builder
- Drag and drop components
- Edit content visually
- Preview changes in real-time
- Responsive design tools

### Custom Components Available
- **Property Header** - Title, price, location
- **Property Gallery** - Image carousels
- **Property Details** - Bed, bath, sqft
- **Property Amenities** - Feature lists
- **Property Location** - Maps and addresses
- **Property Agent** - Agent information
- **Similar Properties** - Related listings

### Content Management
- Connect to your Strapi CMS
- Manage property listings
- Update content without code
- SEO optimization tools

## 🔧 Integration Features

### Strapi CMS Connection
- Fetch property data from Strapi
- Update listings via Builder.io
- Real-time content synchronization

### Next.js Integration
- Server-side rendering support
- API routes for dynamic content
- Optimized performance

## 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimization
- Touch-friendly interface

## 🎯 Next Steps

1. **Customize Components** - Modify the visual appearance
2. **Add New Fields** - Extend your property data model
3. **Create Templates** - Build reusable page layouts
4. **Connect Strapi** - Link your CMS data
5. **Deploy** - Publish your visual changes

## 🆘 Need Help?

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Next.js Integration Guide](https://www.builder.io/c/docs/guides/getting-started)
- [Component Library](https://www.builder.io/c/docs/guides/components)

## 🔗 Useful Links

- **Builder.io Dashboard**: https://builder.io
- **Local Development**: http://localhost:3000/builder
- **Strapi CMS**: http://localhost:1337
