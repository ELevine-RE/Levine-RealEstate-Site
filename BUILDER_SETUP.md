# Builder.io Integration Setup Guide

This guide will help you set up Builder.io with your Next.js real estate website.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install @builder.io/react @builder.io/sdk
```

### 2. Configuration Files Created
- `lib/builder.js` - Builder.io SDK configuration and helper functions
- `src/components/BuilderPage.js` - Main Builder.io page component
- `src/app/[...slug]/page.js` - Dynamic route for Builder.io pages
- `src/builder-registry.js` - Component registry for Builder.io
- `src/components/Hero.js` - Example custom component

### 3. Builder.io Space Setup

1. Go to [Builder.io](https://builder.io) and create an account
2. Create a new space for your real estate website
3. Get your API key from Account Settings → API Keys
4. Update the API key in `lib/builder.js`:
   ```javascript
   builder.init('YOUR_API_KEY_HERE');
   ```

### 4. Create Your First Page

1. In Builder.io, create a new "Page" model
2. Set the URL path (e.g., `/about`, `/contact`)
3. Use the Hero component and other components to build your page
4. Publish the page

### 5. Test Your Integration

1. Start your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to the URL path you created in Builder.io
3. You should see your Builder.io content rendered

## 🧩 Available Components

### Hero Section
- **Name**: Hero Section
- **Inputs**: title, subtitle, backgroundImage, ctaText, ctaLink
- **Usage**: Perfect for landing pages and key sections

### Coming Soon Components
- Property Card
- Testimonial
- Contact Form
- Property Grid
- Agent Card
- Blog Post
- Header
- Footer

## 🔧 Customization

### Adding New Components

1. Create your component in `src/components/`
2. Register it with Builder.io using `builder.registerComponent()`
3. Import it in `src/builder-registry.js`
4. Use it in your Builder.io pages

### Example Component Registration:
```javascript
builder.registerComponent(YourComponent, {
  name: 'Your Component Name',
  inputs: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
  ],
  image: 'https://example.com/icon.png',
  category: 'Custom',
});
```

## 🌐 Dynamic Preview URLs

The Builder.io integration includes dynamic preview URLs that automatically generate the correct preview URL based on your content type and targeting settings.

### Preview URL Features:
- Automatically detects development vs production environments
- Supports multiple content types (pages, properties, blog posts, agents)
- Uses Builder.io targeting system for URL paths
- Provides safe fallbacks for error handling

## 📱 Responsive Design

All components are built with responsive design in mind:
- Mobile-first approach
- Tailwind CSS classes for consistent styling
- Flexible layouts that work on all screen sizes

## 🚨 Troubleshooting

### Common Issues:

1. **Component Not Loading**
   - Check that the component is imported in `builder-registry.js`
   - Verify the component is registered with Builder.io
   - Check browser console for errors

2. **Content Not Displaying**
   - Verify your API key is correct
   - Check that the page is published in Builder.io
   - Ensure the URL path matches between Builder.io and your route

3. **Styling Issues**
   - Check that Tailwind CSS is properly loaded
   - Verify component styles are not being overridden
   - Use browser dev tools to inspect element styles

### Debug Mode:
Enable debug mode in Builder.io to see detailed information about content loading and component rendering.

## 📚 Additional Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Builder.io and Next.js documentation
3. Check browser console for error messages
4. Verify all configuration files are properly set up

## 🎯 Next Steps

1. **Create More Components**: Build additional components for your real estate website
2. **Set Up Content Models**: Create models for properties, agents, and blog posts
3. **Implement Search**: Add search functionality to your Builder.io pages
4. **Add Analytics**: Integrate analytics to track page performance
5. **Optimize Performance**: Implement lazy loading and other performance optimizations

---

Happy building! 🏠✨
