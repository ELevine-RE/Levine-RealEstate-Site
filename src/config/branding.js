/**
 * ELR Brand Configuration
 * Centralized branding assets and messaging
 */

export const ELR_BRANDING = {
  // Logo Assets
  logos: {
    main: "/images/header-logo-elr.svg",        // Primary logo for light backgrounds
    dark: "/images/header-logo-elr.svg",        // Logo for dark backgrounds  
    footer: "/images/header-logo-elr.svg",      // Footer logo
    favicon: "/images/favicon-elr.svg"          // Favicon
  },
  
  // Brand Colors (matching brand kit)
  colors: {
    primary: "#63765B",        // Olive Stone
    secondary: "#223233",      // Forest Ink
    accent: "#99A78F",         // Sage Veil
    amber: "#E4C07F",          // Amber
    linen: "#F2F1EE",          // Linen
    
    // Gradients
    gradientPrimary: "linear-gradient(135deg, #63765B 0%, #99A78F 100%)",
    gradientDark: "linear-gradient(135deg, #223233 0%, #63765B 100%)"
  },
  
  // Typography
  fonts: {
    primary: "Poppins",        // Headings, brand elements
    secondary: "Inter"         // Body text
  },
  
  // Brand Messaging
  brand: {
    name: "ELR",
    fullName: "Evan Levine Real Estate", 
    tagline: "Designing the Essence of Prestige",
    description: "Premium real estate services with sophisticated design and unparalleled expertise"
  },
  
  // Contact Information
  contact: {
    phone: "+1 (555) 123-4567",
    email: "evan@elr.com",
    address: "123 Prestige Avenue, Luxury District"
  }
};

export default ELR_BRANDING;
