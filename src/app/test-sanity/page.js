'use client'

import { useEffect, useState } from 'react'
import { getListingByMls } from '../../../lib/sanity'

export default function TestSanityPage() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function testConnection() {
      try {
        // Test with one of your sample MLS numbers
        const result = await getListingByMls('12503635')
        console.log('Sanity result:', result)
        setListing(result)
        setLoading(false)
      } catch (err) {
        console.error('Sanity error:', err)
        setError(err.message)
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  if (loading) return <div className="p-8">Testing Sanity connection...</div>
  if (error) return <div className="p-8 text-red-600">Error: {error}</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>
      
      {listing ? (
        <div className="bg-green-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-green-800">✅ Connection Successful!</h2>
          <p className="text-green-700">Found listing: {listing.mlsData?.basicInfo?.listingId}</p>
          <p className="text-green-700">Address: {listing.mlsData?.location?.address}</p>
          <p className="text-green-700">Price: ${listing.mlsData?.financial?.listPrice?.toLocaleString()}</p>
        </div>
      ) : (
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-yellow-800">⚠️ No Listing Found</h2>
          <p className="text-yellow-700">Connection works, but no listing with MLS #12503635 found</p>
        </div>
      )}

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Next Steps:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>✅ Sanity connection established</li>
          <li>🔗 Next: Wire up property pages to use this data</li>
          <li>🎨 Next: Style the listing pages with Homez components</li>
          <li>📱 Next: Add lead forms and VOW gating</li>
        </ul>
      </div>
    </div>
  )
}