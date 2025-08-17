import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professional Real Estate Services
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We provide personalized attention to detail for all your real estate needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Buying</h3>
              <p className="text-gray-600">Find your dream home with expert guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Selling</h3>
              <p className="text-gray-600">Maximize your property's value</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Investing</h3>
              <p className="text-gray-600">Build wealth through real estate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8 bg-gray-50">
        <p className="text-sm text-gray-500 mb-2">
          💡 Builder.io is now available!
        </p>
        <p className="text-sm text-gray-500">
          Go to <a href="https://builder.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Builder.io</a> to create dynamic pages
        </p>
      </div>
    </div>
  )
}
