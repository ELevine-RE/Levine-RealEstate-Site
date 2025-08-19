import { builder } from '@builder.io/react';

// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init('88e2d61baf794bdda9e1c1aa9011da9c');

// Set the user attributes for targeting
export const getUserAttributes = () => {
  if (typeof window !== 'undefined') {
    return {
      urlPath: window.location.pathname,
      userAgent: navigator.userAgent,
      // Add any other user attributes you want to target
    };
  }
  return {};
};

// Helper function to get Builder content
export const getBuilderContent = async (model, options = {}) => {
  try {
    const content = await builder
      .get(model, {
        userAttributes: getUserAttributes(),
        ...options,
      })
      .toPromise();
    
    return content;
  } catch (error) {
    console.error('Error fetching Builder content:', error);
    return null;
  }
};

// Helper function to get Builder page content by URL path
export const getBuilderPage = async (urlPath) => {
  try {
    const page = await builder
      .get('page', {
        userAttributes: {
          urlPath: urlPath,
        },
      })
      .toPromise();
    
    return page;
  } catch (error) {
    console.error('Error fetching Builder page:', error);
    return null;
  }
};

// Helper function to get multiple Builder entries
export const getBuilderEntries = async (model, options = {}) => {
  try {
    const entries = await builder
      .getAll(model, {
        userAttributes: getUserAttributes(),
        ...options,
        limit: 50,
      })
      .toPromise();
    
    return entries;
  } catch (error) {
    console.error('Error fetching Builder entries:', error);
    return [];
  }
};

export default builder;
