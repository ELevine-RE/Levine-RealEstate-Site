# RESO 2.0 Field Mapping: Frontend ↔ CMS ↔ MLS

## 🏠 **RESO 2.0 Compliant Field Mapping**

### **Core Property Fields (RESO Standard)**
| Frontend Field | CMS Field | RESO 2.0 Field | Description |
|----------------|-----------|-----------------|-------------|
| `data.title` | `title` | `PublicRemarks` | Property description/title |
| `data.price` | `price` | `ListPrice` | Current listing price |
| `data.location` | `location` | `UnparsedAddress` | Full address string |
| `data.city` | `city` | `City` | City name |
| `data.bed` | `bed` | `BedroomsTotal` | Total number of bedrooms |
| `data.bath` | `bath` | `BathroomsTotalInteger` | Total number of bathrooms |
| `data.sqft` | `sqft` | `LivingArea` | Total livable area |
| `data.forRent` | `forRent` | `PropertySubType` | For rent vs for sale |
| `data.propertyType` | `propertyType` | `PropertyType` | RESO property type |
| `data.yearBuilding` | `yearBuilding` | `YearBuilt` | Year property was built |
| `data.featured` | `featured` | `ListingKey` | Featured listing flag |

### **Location & Mapping (RESO Standard)**
| Frontend Field | CMS Field | RESO 2.0 Field | Description |
|----------------|-----------|-----------------|-------------|
| `data.lat` | `lat` | `Latitude` | Latitude coordinate |
| `data.long` | `long` | `Longitude` | Longitude coordinate |

### **Content & Media (RESO Standard)**
| Frontend Field | CMS Field | RESO 2.0 Field | Description |
|----------------|-----------|-----------------|-------------|
| `data.image` | `image` | `Media` | Property photos |
| `data.tags` | `tags` | `PropertySubType` | Property tags |
| `data.features` | `features` | `Features` | Property features |

### **Additional Fields (RESO Standard)**
| Frontend Field | CMS Field | RESO 2.0 Field | Description |
|----------------|-----------|-----------------|-------------|
| `data.mls_id` | `mls_id` | `ListingKey` | MLS listing ID |
| `data.status` | `status` | `StandardStatus` | Listing status |
| `data.garage` | `garage` | `GarageSpaces` | Garage spaces |
| `data.garage_size` | `garage_size` | `GarageArea` | Garage area |

## 🔗 **RESO 2.0 Property Types**

### **Standard RESO Property Types:**
- **RESI** - Residential
- **RLSE** - Residential Lease  
- **RINC** - Residential Income
- **LAND** - Land
- **MOBI** - Mobile/Manufactured
- **FARM** - Farm
- **COMS** - Commercial Sale
- **COML** - Commercial Lease
- **BUSO** - Business Opportunity

### **Standard RESO Status Values:**
- **Active** - For Sale/For Rent
- **Active Under Contract** - Under Contract
- **Closed** - Sold/Rented
- **Expired** - Expired
- **Withdrawn** - Withdrawn
- **Pending** - Pending

## 📊 **RESO 2.0 Data Types**

### **Number Fields:**
- `ListPrice` - Decimal (14,2)
- `BedroomsTotal` - Integer
- `BathroomsTotalInteger` - Integer  
- `LivingArea` - Number
- `YearBuilt` - Integer
- `GarageSpaces` - Integer

### **String Fields:**
- `PublicRemarks` - Text
- `UnparsedAddress` - Text
- `City` - Text
- `ListingKey` - Text

### **Enumeration Fields:**
- `PropertyType` - RESO lookup values
- `StandardStatus` - RESO status values
- `PropertySubType` - RESO subtype values

## ✅ **Benefits of RESO 2.0 Compliance**

1. **Industry Standard** - Compatible with all MLS systems
2. **Data Consistency** - Standardized field names and values
3. **Easy Integration** - Most MLS providers use RESO standards
4. **Future Proof** - RESO is the industry standard
5. **Certification Ready** - Can achieve RESO certification

## 🎯 **Implementation Notes**

### **Field Transformations:**
- **RESO → CMS**: Map RESO field names to your CMS field names
- **CMS → Frontend**: Your existing field mapping remains unchanged
- **MLS → RESO**: Most MLS systems already output RESO-compliant data

### **Data Flow:**
```
MLS System → RESO 2.0 Fields → Strapi CMS → Frontend Components
     ↓              ↓              ↓              ↓
  Raw Data    Standard Names   Your Fields   Your Templates
```

### **Example RESO Response:**
```json
{
  "ListPrice": 450000,
  "BedroomsTotal": 3,
  "BathroomsTotalInteger": 2,
  "LivingArea": 1800,
  "PropertyType": "RESI",
  "StandardStatus": "Active",
  "UnparsedAddress": "123 Main St, City, State 12345"
}
```

## 🚀 **Next Steps for RESO Compliance**

1. **Update Strapi Schema** - Ensure field types match RESO standards
2. **Create Field Mapping** - Map RESO fields to your CMS fields
3. **Test MLS Integration** - Verify data flows through RESO standards
4. **Validate Compliance** - Ensure all required RESO fields are present

This mapping ensures your system is fully RESO 2.0 compliant while maintaining your existing frontend structure!
