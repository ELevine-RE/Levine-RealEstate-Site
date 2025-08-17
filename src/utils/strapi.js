// Strapi API utility functions for replacing static data

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

class StrapiAPI {
  constructor() {
    this.baseURL = STRAPI_URL;
  }

  // Helper method to build image URLs
  getImageUrl(image) {
    if (!image) return null;
    if (image.url) {
      return `${this.baseURL}${image.url}`;
    }
    return image;
  }

  // Helper method to format API response
  formatResponse(data) {
    if (Array.isArray(data)) {
      return data.map(item => this.formatResponse(item));
    }
    
    if (data && typeof data === 'object') {
      const formatted = {};
      for (const [key, value] of Object.entries(data)) {
        if (key === 'attributes') {
          Object.assign(formatted, this.formatResponse(value));
        } else if (key === 'id') {
          formatted.id = value;
        } else if (Array.isArray(value)) {
          formatted[key] = this.formatResponse(value);
        } else if (value && typeof value === 'object' && value.data) {
          formatted[key] = this.formatResponse(value.data);
        } else {
          formatted[key] = value;
        }
      }
      return formatted;
    }
    
    return data;
  }

  // Get all listings
  async getListings(params = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      if (params.populate) {
        queryParams.append('populate', params.populate);
      }
      if (params.filters) {
        queryParams.append('filters', JSON.stringify(params.filters));
      }
      if (params.sort) {
        queryParams.append('sort', params.sort);
      }
      if (params.pagination) {
        queryParams.append('pagination', JSON.stringify(params.pagination));
      }

      const response = await fetch(`${this.baseURL}/api/listings?${queryParams}`);
      const data = await response.json();
      
      return {
        data: this.formatResponse(data.data),
        meta: data.meta
      };
    } catch (error) {
      console.error('Error fetching listings:', error);
      throw error;
    }
  }

  // Get a single listing by ID
  async getListing(id, params = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      if (params.populate) {
        queryParams.append('populate', params.populate);
      }

      const response = await fetch(`${this.baseURL}/api/listings/${id}?${queryParams}`);
      const data = await response.json();
      
      return this.formatResponse(data.data);
    } catch (error) {
      console.error(`Error fetching listing ${id}:`, error);
      throw error;
    }
  }

  // Get featured listings
  async getFeaturedListings(limit = 6) {
    return this.getListings({
      filters: { featured: { $eq: true } },
      pagination: { limit },
      populate: '*'
    });
  }

  // Get listings by property type
  async getListingsByType(propertyType, limit = 10) {
    return this.getListings({
      filters: { propertyType: { $eq: propertyType } },
      pagination: { limit },
      populate: '*'
    });
  }

  // Get listings for rent or sale
  async getListingsByRentStatus(forRent, limit = 10) {
    return this.getListings({
      filters: { forRent: { $eq: forRent } },
      pagination: { limit },
      populate: '*'
    });
  }

  // Search listings
  async searchListings(searchTerm, filters = {}) {
    const searchFilters = {
      $or: [
        { title: { $containsi: searchTerm } },
        { location: { $containsi: searchTerm } },
        { city: { $containsi: searchTerm } }
      ],
      ...filters
    };

    return this.getListings({
      filters: searchFilters,
      populate: '*'
    });
  }

  // Get all agents
  async getAgents(params = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      if (params.populate) {
        queryParams.append('populate', params.populate);
      }

      const response = await fetch(`${this.baseURL}/api/agents?${queryParams}`);
      const data = await response.json();
      
      return {
        data: this.formatResponse(data.data),
        meta: data.meta
      };
    } catch (error) {
      console.error('Error fetching agents:', error);
      throw error;
    }
  }

  // Get a single agent by ID
  async getAgent(id, params = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      if (params.populate) {
        queryParams.append('populate', params.populate);
      }

      const response = await fetch(`${this.baseURL}/api/agents/${id}?${queryParams}`);
      const data = await response.json();
      
      return this.formatResponse(data.data);
    } catch (error) {
      console.error(`Error fetching agent ${id}:`, error);
      throw error;
    }
  }
}

// Create and export a singleton instance
const strapiAPI = new StrapiAPI();
export default strapiAPI;
