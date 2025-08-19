import { builder } from '@builder.io/react';

// Import your custom components
import Hero from './components/Hero';
// import PropertyCard from './components/PropertyCard';
// import Testimonial from './components/Testimonial';
// import ContactForm from './components/ContactForm';
// import PropertyGrid from './components/PropertyGrid';
// import AgentCard from './components/AgentCard';
// import BlogPost from './components/BlogPost';
// import Footer from './components/Footer';
// import Header from './components/Header';

// Register your custom components with Builder.io
// This allows content creators to use your components in the Builder.io editor

// Example Hero component registration:
// builder.registerComponent(Hero, {
//   name: 'Hero Section',
//   inputs: [
//     { name: 'title', type: 'string', defaultValue: 'Welcome to Our Real Estate' },
//     { name: 'subtitle', type: 'string', defaultValue: 'Find your dream home today' },
//     { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//     { name: 'ctaText', type: 'string', defaultValue: 'Get Started' },
//     { name: 'ctaLink', type: 'string', defaultValue: '/properties' },
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/hero.png',
//   defaultStyles: {
//     padding: '20px',
//   },
// });

// Example PropertyCard component registration:
// builder.registerComponent(PropertyCard, {
//   name: 'Property Card',
//   inputs: [
//     { name: 'title', type: 'string', defaultValue: 'Beautiful Home' },
//     { name: 'price', type: 'string', defaultValue: '$500,000' },
//     { name: 'location', type: 'string', defaultValue: '123 Main St, City, State' },
//     { name: 'bedrooms', type: 'number', defaultValue: 3 },
//     { name: 'bathrooms', type: 'number', defaultValue: 2 },
//     { name: 'sqft', type: 'number', defaultValue: 2000 },
//     { name: 'image', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//     { name: 'propertyType', type: 'enum', enum: ['House', 'Condo', 'Townhouse', 'Apartment'] },
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/home.png',
//   defaultStyles: {
//     padding: '15px',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//   },
// });

// Example Testimonial component registration:
// builder.registerComponent(Testimonial, {
//   name: 'Testimonial',
//   inputs: [
//     { name: 'quote', type: 'text', defaultValue: 'Amazing service and beautiful properties!' },
//     { name: 'author', type: 'string', defaultValue: 'John Doe' },
//     { name: 'position', type: 'string', defaultValue: 'Happy Homeowner' },
//     { name: 'avatar', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//     { name: 'rating', type: 'number', defaultValue: 5, min: 1, max: 5 },
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/quote.png',
//   defaultStyles: {
//     padding: '20px',
//     textAlign: 'center',
//   },
// });

// Example ContactForm component registration:
// builder.registerComponent(ContactForm, {
//   name: 'Contact Form',
//   inputs: [
//     { name: 'title', type: 'string', defaultValue: 'Get in Touch' },
//     { name: 'subtitle', type: 'string', defaultValue: 'We\'d love to hear from you' },
//     { name: 'submitText', type: 'string', defaultValue: 'Send Message' },
//     { name: 'successMessage', type: 'string', defaultValue: 'Thank you! We\'ll get back to you soon.' },
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/mail.png',
//   defaultStyles: {
//     padding: '30px',
//     maxWidth: '600px',
//     margin: '0 auto',
//   },
// });

// Example PropertyGrid component registration:
// builder.registerComponent(PropertyGrid, {
//   name: 'Property Grid',
//   inputs: [
//     { name: 'title', type: 'string', defaultValue: 'Featured Properties' },
//     { name: 'subtitle', type: 'string', defaultValue: 'Discover our latest listings' },
//     { name: 'properties', type: 'list', subFields: [
//       { name: 'property', type: 'reference', model: 'property' }
//     ]},
//     { name: 'columns', type: 'enum', enum: [2, 3, 4], defaultValue: 3 },
//     { name: 'showFilters', type: 'boolean', defaultValue: true },
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/grid.png',
//   defaultStyles: {
//     padding: '40px 20px',
//   },
// });

// Example AgentCard component registration:
// builder.registerComponent(AgentCard, {
//   name: 'Agent Card',
//   inputs: [
//     { name: 'name', type: 'string', defaultValue: 'Jane Smith' },
//     { name: 'title', type: 'string', defaultValue: 'Real Estate Agent' },
//     { name: 'bio', type: 'text', defaultValue: 'Experienced agent with 10+ years in the market' },
//     { name: 'photo', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//     { name: 'phone', type: 'string', defaultValue: '+1 (555) 123-4567' },
//     { name: 'email', type: 'string', defaultValue: 'jane@example.com' },
//     { name: 'specialties', type: 'list', subFields: [
//       { name: 'specialty', type: 'string' }
//     ]},
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/user.png',
//   defaultStyles: {
//     padding: '20px',
//     textAlign: 'center',
//     border: '1px solid #e5e7eb',
//     borderRadius: '8px',
//   },
// });

// Example BlogPost component registration:
// builder.registerComponent(BlogPost, {
//   name: 'Blog Post',
//   inputs: [
//     { name: 'title', type: 'string', defaultValue: 'Blog Post Title' },
//     { name: 'excerpt', type: 'text', defaultValue: 'Brief description of the blog post...' },
//     { name: 'content', type: 'richText', defaultValue: 'Full blog post content...' },
//     { name: 'author', type: 'string', defaultValue: 'Author Name' },
//     { name: 'publishDate', type: 'date' },
//     { name: 'featuredImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'] },
//     { name: 'tags', type: 'list', subFields: [
//       { name: 'tag', type: 'string' }
//     ]},
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/article.png',
//   defaultStyles: {
//     padding: '40px 20px',
//     maxWidth: '800px',
//     margin: '0 auto',
//   },
// });

// Example Header component registration:
// builder.registerComponent(Header, {
//   name: 'Header',
//   inputs: [
//     { name: 'logo', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp', 'svg'] },
//     { name: 'navigation', type: 'list', subFields: [
//       { name: 'label', type: 'string' },
//       { name: 'url', type: 'string' }
//     ]},
//     { name: 'ctaText', type: 'string', defaultValue: 'List Your Property' },
//     { name: 'ctaLink', type: 'string', defaultValue: '/list-property' },
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/menu.png',
//   defaultStyles: {
//     padding: '20px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//   },
// });

// Example Footer component registration:
// builder.registerComponent(Footer, {
//   name: 'Footer',
//   inputs: [
//     { name: 'companyName', type: 'string', defaultValue: 'Your Company Name' },
//     { name: 'description', type: 'text', defaultValue: 'Brief company description...' },
//     { name: 'socialLinks', type: 'list', subFields: [
//       { name: 'platform', type: 'string' },
//       { name: 'url', type: 'string' }
//     ]},
//     { name: 'contactInfo', type: 'object', subFields: [
//       { name: 'address', type: 'string' },
//       { name: 'phone', type: 'string' },
//       { name: 'email', type: 'string' }
//     ]},
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/footer.png',
//   defaultStyles: {
//     padding: '40px 20px',
//     backgroundColor: '#1f2937',
//     color: '#ffffff',
//   },
// });

// You can add more component registrations here as you build them

export default builder;
