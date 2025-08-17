import type { Schema, Struct } from '@strapi/strapi';

export interface AgentSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_agent_social_medias';
  info: {
    description: 'Agent social media links';
    displayName: 'Social Media';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    website: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

export interface ListingAddress extends Struct.ComponentSchema {
  collectionName: 'components_listing_addresses';
  info: {
    description: 'Property address information';
    displayName: 'Address';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'USA'>;
    fullAddress: Schema.Attribute.String;
    state: Schema.Attribute.String & Schema.Attribute.Required;
    street: Schema.Attribute.String & Schema.Attribute.Required;
    zipCode: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListingAmenities extends Struct.ComponentSchema {
  collectionName: 'components_listing_amenities';
  info: {
    description: 'Property amenities and features';
    displayName: 'Amenities';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        'interior',
        'exterior',
        'kitchen',
        'bathroom',
        'outdoor',
        'security',
        'entertainment',
        'other',
      ]
    >;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'agent.social-media': AgentSocialMedia;
      'listing.address': ListingAddress;
      'listing.amenities': ListingAmenities;
    }
  }
}
