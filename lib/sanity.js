import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to `true` for production
  token: process.env.SANITY_API_TOKEN, // Only if you need to write to the dataset
})

// Helper function to get listing by MLS number
export async function getListingByMls(mlsNumber) {
  const query = `*[_type == "listing" && mlsData.basicInfo.listingId == $mlsNumber][0]{
    _id,
    mlsData {
      basicInfo {
        listingId,
        status,
        propertyType,
        propertySubType,
        yearBuilt,
        constructionNew
      },
      location {
        address,
        city,
        state,
        zipCode,
        county,
        geographicArea,
        majorArea,
        area,
        subdivision,
        schoolDistrict,
        latitude,
        longitude
      },
      propertyDetails {
        bedrooms,
        bathrooms,
        squareFeet,
        squareFeetFinished,
        lotSize,
        fireplaces,
        garageSpaces,
        parkingSpaces,
        style,
        construction,
        foundation,
        basement,
        roof,
        levels
      },
      financial {
        listPrice,
        pricePerSqFt,
        annualTaxes,
        taxYear,
        hoaDues,
        hoaFrequency
      },
      features {
        heating,
        cooling,
        appliances,
        exteriorFeatures,
        interiorFeatures,
        lotFeatures,
        utilities,
        water,
        sewage,
        view,
        poolFeatures
      },
      agentOffice {
        listAgentFirstName,
        listAgentLastName,
        listAgentPreferredPhone,
        listAgentEmail,
        listOfficeName,
        listOfficePhone
      },
      remarksMedia {
        publicRemarks,
        showingInstructions,
        photosCount
      }
    },
    displayFields,
    userContent {
      seo {
        title,
        description,
        slug
      }
    },
    metadata {
      dataSource,
      vowCompliance,
      lastUpdated
    }
  }`

  return client.fetch(query, { mlsNumber })
}

// Helper function to get listings by neighborhood
export async function getListingsByNeighborhood(neighborhood) {
  const query = `*[_type == "listing" && mlsData.location.mlsAreaMajor == $neighborhood]{
    _id,
    mlsData {
      basicInfo {
        listingId,
        status,
        propertyType,
        yearBuilt
      },
      location {
        address,
        city,
        state,
        zipCode,
        geographicArea
      },
      propertyDetails {
        bedrooms,
        bathrooms,
        squareFeet
      },
      financial {
        listPrice
      }
    },
    userContent {
      seo {
        slug
      }
    }
  }[0...20]`

  return client.fetch(query, { neighborhood })
}

// Helper function to get all neighborhoods
export async function getNeighborhoods() {
  const query = `*[_type == "listing"]{
    mlsData {
      location {
        mlsAreaMajor,
        mlsAreaMinor
      }
    }
  } | group by mlsData.location.mlsAreaMajor {
    name: mlsData.location.mlsAreaMajor,
    subAreas: mlsData.location.mlsAreaMinor
  }`

  return client.fetch(query)
}
