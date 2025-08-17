/**
 * Safe image source utility to prevent empty src attributes
 * @param {string} src - The image source
 * @param {string} fallback - Fallback image if src is empty/undefined
 * @returns {string} - Safe image source
 */
export const safeImageSrc = (src, fallback = '/images/listings/list-1.jpg') => {
  if (!src || src === '' || src === null || src === undefined) {
    console.warn(`Image src is empty/undefined, using fallback: ${fallback}`);
    return fallback;
  }
  return src;
};

/**
 * Default fallback images for different contexts
 */
export const defaultImages = {
  listing: '/images/listings/list-1.jpg',
  agent: '/images/listings/agent-1.png',
  property: '/images/listings/list-1.jpg',
  icon: '/images/icon/property-buy.svg',
  blog: '/images/blog/blog-1.jpg',
  avatar: '/images/listings/agent-1.png'
};

/**
 * Get a safe image source with context-specific fallback
 * @param {string} src - The image source
 * @param {string} type - The image type context (listing, agent, etc.)
 * @returns {string} - Safe image source
 */
export const getSafeImageSrc = (src, type = 'listing') => {
  return safeImageSrc(src, defaultImages[type] || defaultImages.listing);
};
