import React from 'react'

interface HeroProps {
  title?: string
  subtitle?: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
}

export default function Hero({ 
  title = 'Find Your Dream Home',
  subtitle = 'Professional real estate services with personalized attention to detail',
  backgroundImage,
  ctaText = 'View Listings',
  ctaLink = '/listings'
}: HeroProps) {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      )}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <a
          href={ctaLink}
          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </a>
      </div>
    </section>
  )
}
