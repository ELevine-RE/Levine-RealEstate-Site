/**
 * Image safety utilities for Homez template
 * Provides fallbacks and safe image loading
 */

export const getSafeImageSrc = (imagePath, fallbackPath = '/images/placeholder.jpg') => {
  if (!imagePath) return fallbackPath;
  
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If it's a relative path, ensure it starts with /
  if (!imagePath.startsWith('/')) {
    imagePath = '/' + imagePath;
  }
  
  return imagePath;
};

export const getSafeImageAlt = (altText, fallbackText = 'Property Image') => {
  return altText || fallbackText;
};

export const getImageWithFallback = (imagePath, fallbackPath = '/images/placeholder.jpg') => {
  return {
    src: getSafeImageSrc(imagePath, fallbackPath),
    alt: getSafeImageAlt(imagePath, fallbackPath)
  };
};

export const validateImagePath = (imagePath) => {
  if (!imagePath) return false;
  
  // Basic validation - check if path looks reasonable
  const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
  const hasValidExtension = validExtensions.some(ext => 
    imagePath.toLowerCase().includes(ext)
  );
  
  return hasValidExtension;
};
