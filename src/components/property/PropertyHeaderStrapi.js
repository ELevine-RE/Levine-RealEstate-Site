'use client';

import React, { useState, useEffect } from 'react';
import { fetchListing } from '../../utils/strapi';

const PropertyHeaderStrapi = ({ id }) => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadListing = async () => {
      try {
        setLoading(true);
        const data = await fetchListing(id);
        if (data) {
          setListing(data);
        } else {
          setError('Listing not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadListing();
    }
  }, [id]);

  if (loading) {
    return <div>Loading listing...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!listing) {
    return <div>No listing data available</div>;
  }

  return (
    <div className="property-header">
      <h1>{listing.title}</h1>
      <div className="property-meta">
        <span className="price">{listing.price}</span>
        <span className="location">{listing.location}</span>
        <span className="property-type">{listing.propertyType}</span>
      </div>
      <div className="property-details">
        <span>{listing.bed} Bed</span>
        <span>{listing.bath} Bath</span>
        <span>{listing.sqft} sqft</span>
        <span>{listing.yearBuilding}</span>
      </div>
    </div>
  );
};

export default PropertyHeaderStrapi;
