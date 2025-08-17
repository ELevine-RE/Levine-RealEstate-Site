import { Builder } from '@builder.io/react'

// Import all Home V1 components
import Header from './components/home/home-v1/Header'
import Hero from './components/home/home-v1/hero'
import About from './components/home/home-v1/About'
import ApartmentType from './components/home/home-v1/ApartmentType'
import FeaturedListings from './components/home/home-v1/FeatuerdListings'
import PopularListings from './components/home/home-v1/PopularListings'
import PropertiesByCities from './components/home/home-v1/PropertiesByCities'
import Testimonial from './components/home/home-v1/Testimonial'
import PopulerProperty from './components/home/home-v1/PopulerProperty'

// Import common components
import Explore from './components/common/Explore'
import CallToActions from './components/common/CallToActions'
import Partner from './components/common/Partner'
import Blog from './components/common/Blog'
import Footer from './components/common/default-footer'

// Register Header Component
Builder.registerComponent(Header, {
  name: 'Homez Header',
  inputs: [
    {
      name: 'logoSrc',
      type: 'file',
      defaultValue: '/images/header-logo.svg',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp']
    },
    {
      name: 'logoAlt',
      type: 'string',
      defaultValue: 'Header Logo'
    }
  ]
})

// Register Hero Component
Builder.registerComponent(Hero, {
  name: 'Homez Hero Section',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Find Your Dream Home'
    },
    {
      name: 'subtitle',
      type: 'string', 
      defaultValue: 'We have over a million properties for you'
    },
    {
      name: 'backgroundImage',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp']
    }
  ]
})

// Register About Component
Builder.registerComponent(About, {
  name: 'About Section',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'We\'re on a Mission to Change View of Real Estate Field.'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      name: 'features',
      type: 'list',
      subFields: [
        {
          name: 'title',
          type: 'string'
        },
        {
          name: 'description', 
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

// Register Apartment Types Component
Builder.registerComponent(ApartmentType, {
  name: 'Apartment Types',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'Explore Apartment Types'
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      defaultValue: 'Get some Inspirations from 1800+ skills'
    }
  ]
})

// Register Featured Listings Component
Builder.registerComponent(FeaturedListings, {
  name: 'Featured Listings',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'Discover Our Featured Listings'
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      defaultValue: 'Aliquam lacinia diam quis lacus euismod'
    },
    {
      name: 'maxListings',
      type: 'number',
      defaultValue: 6
    }
  ]
})

// Register Popular Listings Component
Builder.registerComponent(PopularListings, {
  name: 'Popular Listings',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'Popular Properties'
    },
    {
      name: 'maxListings',
      type: 'number',
      defaultValue: 8
    }
  ]
})

// Register Properties by Cities Component
Builder.registerComponent(PropertiesByCities, {
  name: 'Properties by Cities',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'Properties by Cities'
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      defaultValue: 'Aliquam lacinia diam quis lacus euismod'
    }
  ]
})

// Register Testimonial Component
Builder.registerComponent(Testimonial, {
  name: 'Testimonials',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'People Love Living with Realton'
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      defaultValue: 'Aliquam lacinia diam quis lacus euismod'
    }
  ]
})

// Register Popular Property Component
Builder.registerComponent(PopulerProperty, {
  name: 'Popular Property Section',
  inputs: [
    {
      name: 'backgroundType',
      type: 'string',
      enum: ['light', 'dark', 'image'],
      defaultValue: 'light'
    }
  ]
})

// Register Explore Component
Builder.registerComponent(Explore, {
  name: 'Explore Features',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'See How Realton Can Help'
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      defaultValue: 'Aliquam lacinia diam quis lacus euismod'
    }
  ]
})

// Register Call to Actions Component
Builder.registerComponent(CallToActions, {
  name: 'Call to Action',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Need help? Talk to our expert.'
    },
    {
      name: 'subtitle',
      type: 'string',
      defaultValue: 'Talk to our experts or Browse through more properties.'
    },
    {
      name: 'primaryButtonText',
      type: 'string',
      defaultValue: 'Contact Us'
    },
    {
      name: 'secondaryButtonText',
      type: 'string',
      defaultValue: 'Browse Properties'
    }
  ]
})

// Register Partner Component
Builder.registerComponent(Partner, {
  name: 'Partners Section',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'Trusted by the world\'s best'
    }
  ]
})

// Register Blog Component
Builder.registerComponent(Blog, {
  name: 'Blog Section',
  inputs: [
    {
      name: 'sectionTitle',
      type: 'string',
      defaultValue: 'From Our Blog'
    },
    {
      name: 'sectionSubtitle',
      type: 'string',
      defaultValue: 'Aliquam lacinia diam quis lacus euismod'
    },
    {
      name: 'maxPosts',
      type: 'number',
      defaultValue: 3
    }
  ]
})

// Register Footer Component
Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [
    {
      name: 'companyName',
      type: 'string',
      defaultValue: 'Homez'
    },
    {
      name: 'companyDescription',
      type: 'text',
      defaultValue: 'We\'re reimagining how you buy, sell and rent. It\'s now easier to get into a place you love.'
    },
    {
      name: 'socialLinks',
      type: 'list',
      subFields: [
        {
          name: 'platform',
          type: 'string'
        },
        {
          name: 'url',
          type: 'url'
        },
        {
          name: 'icon',
          type: 'string'
        }
      ]
    }
  ]
})

console.log('Homez components registered with Builder.io')
