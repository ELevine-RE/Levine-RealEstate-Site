import Image from "next/image";
import { getSafeImageSrc } from "@/utils/imageUtils";

/**
 * SafeImage component that prevents empty src attributes
 * @param {Object} props - Image props
 * @param {string} props.src - Image source
 * @param {string} props.type - Image type for fallback selection
 * @param {string} props.alt - Alt text
 * @param {...rest} rest - Other Image props
 */
const SafeImage = ({ src, type = 'listing', alt = '', ...rest }) => {
  const safeSrc = getSafeImageSrc(src, type);
  
  return (
    <Image
      src={safeSrc}
      alt={alt || 'Image'}
      {...rest}
    />
  );
};

export default SafeImage;
