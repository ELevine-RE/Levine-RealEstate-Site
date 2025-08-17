import { Builder } from '@builder.io/react'
import PropertyHeader from './src/components/property/property-single-style/single-v2/PropertyHeader'
import PropertyGallery from './src/components/property/property-single-style/single-v2/PropertyGallery'
import PropertyDetails from './src/components/property/property-single-style/single-v2/PropertyDetails'
import PropertyAmenities from './src/components/property/property-single-style/single-v2/PropertyAmenities'
import PropertyLocation from './src/components/property/property-single-style/single-v2/PropertyLocation'
import PropertyAgent from './src/components/property/property-single-style/single-v2/PropertyAgent'
import PropertySimilar from './src/components/property/property-single-style/single-v2/PropertySimilar'

// Register your components with Builder.io
Builder.registerComponent(PropertyHeader, {
  name: 'Property Header',
  inputs: [
    {
      name: 'id',
      type: 'number',
      defaultValue: 1
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Property Title'
    },
    {
      name: 'price',
      type: 'string',
      defaultValue: '$500,000'
    },
    {
      name: 'location',
      type: 'string',
      defaultValue: 'Property Location'
    }
  ]
})

Builder.registerComponent(PropertyGallery, {
  name: 'Property Gallery',
  inputs: [
    {
      name: 'id',
      type: 'number',
      defaultValue: 1
    },
    {
      name: 'images',
      type: 'list',
      subFields: [
        {
          name: 'url',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp']
        }
      ]
    }
  ]
})

Builder.registerComponent(PropertyDetails, {
  name: 'Property Details',
  inputs: [
    {
      name: 'id',
      type: 'number',
      defaultValue: 1
    },
    {
      name: 'bed',
      type: 'string',
      defaultValue: '3'
    },
    {
      name: 'bath',
      type: 'string',
      defaultValue: '2'
    },
    {
      name: 'sqft',
      type: 'string',
      defaultValue: '1,500'
    }
  ]
})

Builder.registerComponent(PropertyAmenities, {
  name: 'Property Amenities',
  inputs: [
    {
      name: 'amenities',
      type: 'list',
      subFields: [
        {
          name: 'name',
          type: 'string'
        },
        {
          name: 'icon',
          type: 'string'
        }
      ]
    }
  ]
})

Builder.registerComponent(PropertyLocation, {
  name: 'Property Location',
  inputs: [
    {
      name: 'address',
      type: 'string',
      defaultValue: '123 Main Street, City, State 12345'
    },
    {
      name: 'latitude',
      type: 'number'
    },
    {
      name: 'longitude',
      type: 'number'
    }
  ]
})

Builder.registerComponent(PropertyAgent, {
  name: 'Property Agent',
  inputs: [
    {
      name: 'agentName',
      type: 'string',
      defaultValue: 'John Doe'
    },
    {
      name: 'agentEmail',
      type: 'string',
      defaultValue: 'john@example.com'
    },
    {
      name: 'agentPhone',
      type: 'string',
      defaultValue: '+1 (555) 123-4567'
    },
    {
      name: 'agentImage',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp']
    }
  ]
})

Builder.registerComponent(PropertySimilar, {
  name: 'Similar Properties',
  inputs: [
    {
      name: 'maxProperties',
      type: 'number',
      defaultValue: 3
    }
  ]
})
