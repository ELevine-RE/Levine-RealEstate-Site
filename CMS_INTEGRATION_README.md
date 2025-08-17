# Homez Template + Strapi CMS Integration

This guide explains how to connect your Homez Next.js template to Strapi CMS for managing real estate listings.

## Overview

The integration allows you to:
- Manage listings through Strapi admin panel
- Store property data, images, and agent information
- Use the same data structure as your Homez template
- Eventually connect to MLS data feeds

## Prerequisites

- Node.js 18+ installed
- Strapi CMS running on localhost:1337
- Next.js frontend running on localhost:3000

## Setup Instructions

### 1. Start Strapi CMS

```bash
cd cms
npm run develop
```

Strapi will start on http://localhost:1337

### 2. Access Strapi Admin

- Open http://localhost:1337/admin
- Create your first admin account
- Navigate to Content-Type Builder

### 3. Verify Content Types

The following content types should be automatically created:

#### Listing Content Type
- **Basic Fields**: title, price, location, city, bed, bath, sqft
- **Property Details**: forRent, propertyType, yearBuilding, featured
- **Location**: lat, long
- **Media**: images, mainImage
- **Relations**: agent (to Agent content type)
- **Components**: address, amenities

#### Agent Content Type
- **Basic Fields**: name, email, phone, bio, license, experience
- **Media**: photo
- **Components**: socialMedia

### 4. Seed Sample Data

```bash
cd cms
npm install axios
node seed-listings.js
```

This will create:
- 2 sample agents
- 5 sample listings with full data

### 5. Configure Next.js Frontend

Copy the environment file:
```bash
cp env.example .env.local
```

Update `.env.local` with your Strapi URL if different.

### 6. Test the Integration

Start your Next.js app:
```bash
npm run dev
```

Navigate to a listing page (e.g., `/single-v2/1`) to see the data from Strapi.

## Data Structure

### Listing Fields

| Field | Type | Description |
|-------|------|-------------|
| title | string | Property title |
| price | string | Property price |
| location | string | Full address |
| city | string | City name |
| bed | string | Number of bedrooms |
| bath | string | Number of bathrooms |
| sqft | integer | Square footage |
| forRent | boolean | For rent or sale |
| propertyType | enum | Houses, Apartments, Villa, Office, etc. |
| yearBuilding | integer | Year built |
| featured | boolean | Featured property |
| lat/long | decimal | GPS coordinates |
| tags | json | Property tags |
| features | json | Property features |
| status | enum | active, pending, sold, rented, inactive |
| images | media | Multiple property images |
| mainImage | media | Main property image |
| address | component | Structured address data |
| agent | relation | Associated real estate agent |

### Address Component

| Field | Type | Description |
|-------|------|-------------|
| street | string | Street address |
| city | string | City |
| state | string | State/province |
| zipCode | string | ZIP/postal code |
| country | string | Country |
| fullAddress | string | Complete address string |

### Amenities Component

| Field | Type | Description |
|-------|------|-------------|
| name | string | Amenity name |
| description | text | Amenity description |
| icon | string | Icon class/identifier |
| category | enum | Interior, exterior, kitchen, etc. |

## API Usage

### Fetching Listings

```javascript
import strapiAPI from '@/utils/strapi';

// Get all listings
const listings = await strapiAPI.getListings();

// Get featured listings
const featured = await strapiAPI.getFeaturedListings(6);

// Get listing by ID
const listing = await strapiAPI.getListing(1);

// Search listings
const results = await strapiAPI.searchListings('New York');
```

### Fetching Agents

```javascript
// Get all agents
const agents = await strapiAPI.getAgents();

// Get agent by ID
const agent = await strapiAPI.getAgent(1);
```

## Updating Components

### PropertyHeader Component

Update to use Strapi data:

```javascript
import { useEffect, useState } from 'react';
import strapiAPI from '@/utils/strapi';

const PropertyHeader = ({id}) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchListing = async () => {
      const listing = await strapiAPI.getListing(id);
      setData(listing);
    };
    
    if (id) {
      fetchListing();
    }
  }, [id]);

  if (!data) return <div>Loading...</div>;
  
  // Rest of your component code...
};
```

### PropertyGallery Component

Update to use Strapi images:

```javascript
import { useEffect, useState } from 'react';
import strapiAPI from '@/utils/strapi';

const PropertyGallery = ({id}) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchListing = async () => {
      const listing = await strapiAPI.getListing(id, { populate: 'images,mainImage' });
      setData(listing);
    };
    
    if (id) {
      fetchListing();
    }
  }, [id]);

  if (!data) return <div>Loading...</div>;
  
  // Use data.images and data.mainImage from Strapi
  // ...
};
```

## Next Steps

### 1. Test with Sample Data
- Verify all components display correctly
- Check that images load properly
- Ensure responsive design works

### 2. Add Real Images
- Upload property images through Strapi admin
- Test image galleries and lightbox functionality

### 3. MLS Integration
- Research MLS data providers (RETS, RESO, etc.)
- Create data import scripts
- Map MLS fields to Strapi schema

### 4. Production Deployment
- Deploy Strapi to production server
- Update environment variables
- Configure image CDN if needed

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure Strapi CORS settings include your frontend domain
2. **Image Loading**: Check that media URLs are properly formatted
3. **Data Not Loading**: Verify API endpoints and check browser console for errors
4. **Component Errors**: Ensure all required fields are present in Strapi data

### Debug Tips

- Use browser dev tools to inspect API responses
- Check Strapi admin panel for data validation errors
- Verify environment variables are loaded correctly
- Test API endpoints directly in browser or Postman

## Support

For issues or questions:
1. Check Strapi documentation: https://docs.strapi.io/
2. Review Next.js documentation: https://nextjs.org/docs
3. Check browser console for error messages
4. Verify database migrations and content types
