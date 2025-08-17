import React from 'react'

interface HeaderProps {
  title?: string
  subtitle?: string
}

export default function Header({ title = 'Levine Real Estate', subtitle }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-gray-600 mt-1">{subtitle}</p>
            )}
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/listings" className="text-gray-700 hover:text-gray-900">Listings</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
