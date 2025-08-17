import React, { useState } from 'react';
import { getSafeImageSrc, getSafeImageAlt } from '../../utils/imageUtils';

const SafeImage = ({ 
  src, 
  alt, 
  fallbackSrc = '/images/placeholder.jpg',
  className = '',
  style = {},
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(getSafeImageSrc(src, fallbackSrc));
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setHasError(false);
  };

  return (
    <img
      src={imageSrc}
      alt={getSafeImageAlt(alt)}
      className={className}
      style={style}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  );
};

export default SafeImage;
