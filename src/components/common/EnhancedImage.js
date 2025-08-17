"use client";
import Image from "next/image";
import { getSafeImageSrc } from "@/utils/imageUtils";
import { useState } from "react";

/**
 * Enhanced Image component with automatic fallback handling
 * @param {Object} props - Image props
 * @param {string} props.src - Image source
 * @param {string} props.type - Image type for fallback selection
 * @param {string} props.alt - Alt text
 * @param {function} props.onError - Custom error handler
 * @param {...rest} rest - Other Image props
 */
const EnhancedImage = ({ 
  src, 
  type = 'listing', 
  alt = '', 
  onError,
  ...rest 
}) => {
  const [imgSrc, setImgSrc] = useState(getSafeImageSrc(src, type));
  const [hasError, setHasError] = useState(false);

  const handleError = (error) => {
    if (!hasError) {
      setHasError(true);
      const fallbackSrc = getSafeImageSrc('', type); // Get default fallback
      setImgSrc(fallbackSrc);
      
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <Image
      src={imgSrc}
      alt={alt || 'Image'}
      onError={handleError}
      {...rest}
    />
  );
};

export default EnhancedImage;
