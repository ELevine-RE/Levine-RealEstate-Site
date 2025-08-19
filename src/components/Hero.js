import React from 'react';
import { builder } from '@builder.io/react';

const Hero = ({ title, subtitle, backgroundImage, ctaText, ctaLink }) => {
  return (
    <section 
      className="hero-section"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay for better text readability */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
      
      {/* Content */}
      <div 
        className="hero-content text-center text-white relative z-10"
        style={{
          maxWidth: '800px',
          padding: '0 20px',
        }}
      >
        <h1 
          className="hero-title text-5xl md:text-6xl font-bold mb-6"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          {title || 'Find Your Dream Home'}
        </h1>
        
        <p 
          className="hero-subtitle text-xl md:text-2xl mb-8 opacity-90"
          style={{
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
          }}
        >
          {subtitle || 'Discover beautiful properties in the most desirable locations'}
        </p>
        
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="hero-cta inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

// Register the component with Builder.io
builder.registerComponent(Hero, {
  name: 'Hero Section',
  inputs: [
    { 
      name: 'title', 
      type: 'string', 
      defaultValue: 'Find Your Dream Home',
      required: true,
    },
    { 
      name: 'subtitle', 
      type: 'string', 
      defaultValue: 'Discover beautiful properties in the most desirable locations',
    },
    { 
      name: 'backgroundImage', 
      type: 'file', 
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
      helperText: 'Upload a background image (optional)',
    },
    { 
      name: 'ctaText', 
      type: 'string', 
      defaultValue: 'Get Started',
      helperText: 'Call-to-action button text',
    },
    { 
      name: 'ctaLink', 
      type: 'string', 
      defaultValue: '/properties',
      helperText: 'Call-to-action button link',
    },
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/hero.png',
  defaultStyles: {
    padding: '0',
    margin: '0',
  },
  category: 'Hero',
  description: 'A hero section with title, subtitle, and call-to-action button',
});

export default Hero;
