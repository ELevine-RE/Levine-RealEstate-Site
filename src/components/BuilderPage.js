'use client';

import React, { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import { getBuilderPage } from '../../lib/builder';

// Import your custom components that Builder.io can use
// You'll need to register these with Builder.io
import { 
  // Add your custom components here
  // Example: Hero, PropertyCard, Testimonial, etc.
} from './';

// Register your custom components with Builder.io
// builder.registerComponent(YourComponent, {
//   name: 'Your Component Name',
//   inputs: [
//     { name: 'title', type: 'string' },
//     { name: 'description', type: 'text' },
//   ],
// });

const BuilderPage = ({ urlPath = '/' }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const pageContent = await getBuilderPage(urlPath);
        setContent(pageContent);
      } catch (err) {
        console.error('Error fetching Builder content:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [urlPath]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Page</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">Page Not Found</h2>
          <p className="text-gray-500">No Builder.io content found for this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="builder-page">
      <BuilderComponent
        name="page"
        content={content}
        // You can pass additional props here
        // customComponents={yourCustomComponents}
      />
    </div>
  );
};

export default BuilderPage;
