# Field Mapping: Frontend ↔ CMS ↔ MLS

## 🏠 **Listing Content Type Field Mapping**

### **Core Property Fields**
| Frontend Field | CMS Field | MLS Field | Description |
|----------------|-----------|-----------|-------------|
| `data.title` | `title` | `listing_title` | Property title/name |
| `data.price` | `price` | `list_price` | Property price |
| `data.location` | `location` | `address_full` | Full address |
| `data.city` | `city` | `city` | City name |
| `data.bed` | `bed` | `bedrooms_total` | Number of bedrooms |
| `data.bath` | `bath` | `bathrooms_total` | Number of bathrooms |
| `data.sqft` | `sqft` | `living_area` | Square footage |
| `data.forRent` | `forRent` | `lease_type` | For rent vs for sale |
| `data.propertyType` | `propertyType` | `property_type` | House, Condo, etc. |
| `data.yearBuilding` | `yearBuilding` | `year_built` | Year built |
| `data.featured` | `featured` | `featured` | Featured listing flag |

### **Location & Mapping**
| Frontend Field | CMS Field | MLS Field | Description |
|----------------|-----------|-----------|-------------|
| `data.lat` | `lat` | `latitude` | Latitude coordinate |
| `data.long` | `long` | `longitude` | Longitude coordinate |

### **Content & Media**
| Frontend Field | CMS Field | MLS Field | Description |
|----------------|-----------|-----------|-------------|
| `data.image` | `image` | `photos` | Main property image |
| `data.tags` | `tags` | `tags` | Property tags |
| `data.features` | `features` | `amenities` | Property features |

### **Additional Fields**
| Frontend Field | CMS Field | MLS Field | Description |
|----------------|-----------|-----------|-------------|
| `data.mls_id` | `mls_id` | `mls_number` | MLS listing ID |
| `data.status` | `status` | `status` | Listing status |
| `data.garage` | `garage` | `garage_spaces` | Garage spaces |
| `data.garage_size` | `garage_size` | `garage_size` | Garage size |

## 🔗 **Data Flow**

### **Current Flow (Static)**
```
URL: /single-v6/1
↓
Component: PropertyHeader({ id: 1 })
↓
Data Source: listings.filter(elm => elm.id == 1)[0]
↓
Render: data.title, data.price, data.location, etc.
```

### **Target Flow (Strapi + MLS)**
```
URL: /single-v6/1
↓
Component: PropertyHeader({ id: 1 })
↓
API Call: GET /api/listings/1
↓
Strapi: Query database for listing ID 1
↓
MLS Data: Populated via API integration
↓
Render: Same field names, dynamic data
```

## ✅ **Verification Steps**

1. **Create test listings in Strapi** with matching field names
2. **Update components** to fetch from Strapi API instead of static file
3. **Test URLs**: `/single-v6/1`, `/single-v6/2`, `/single-v6/3` should show different data
4. **Verify field mapping** - all frontend fields render correctly
5. **Connect MLS API** - populate Strapi fields with real data

## 🎯 **Key Benefits**

- **Zero field mismatches** - frontend always gets expected data
- **Seamless MLS integration** - data flows through exact field names
- **Easy debugging** - clear mapping of what goes where
- **Scalable** - add new fields by extending the mapping
