const { Builder } = require('@builder.io/sdk')

// Builder.io configuration
module.exports = {
  // Your Builder.io API key (get this from builder.io)
  apiKey: process.env.BUILDER_API_KEY || 'YOUR_BUILDER_API_KEY',
  
  // Custom components to register
  customComponents: [
    'PropertyHeader',
    'PropertyGallery', 
    'PropertyDetails',
    'PropertyAmenities',
    'PropertyLocation',
    'PropertyAgent',
    'PropertySimilar'
  ],
  
  // Content model definitions
  models: {
    property: {
      name: 'Property',
      fields: {
        title: { type: 'string', required: true },
        slug: { type: 'string', required: true },
        price: { type: 'string', required: true },
        bed: { type: 'string', required: true },
        bath: { type: 'string', required: true },
        sqft: { type: 'string' },
        description: { type: 'text' },
        images: { type: 'list', subFields: [{ name: 'url', type: 'file' }] },
        amenities: { type: 'list', subFields: [{ name: 'name', type: 'string' }] },
        location: { type: 'string' },
        agent: { type: 'reference', model: 'agent' }
      }
    },
    agent: {
      name: 'Agent',
      fields: {
        name: { type: 'string', required: true },
        email: { type: 'string' },
        phone: { type: 'string' },
        image: { type: 'file' },
        bio: { type: 'text' }
      }
    }
  }
}
