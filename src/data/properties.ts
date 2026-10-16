export interface PropertyItem {
  id: string;
  title: string;
  slug: string;
  area: string;
  locationLabel: string;
  maskedAddress: string;
  cityHub: "Chichawatni" | "Sahiwal";
  type: "residential" | "commercial" | "plot" | "agricultural";
  listingType: "sale" | "rent";
  sizeMarla: number;
  sizeLabel: string;
  price: string;
  pricePkr: string;
  priceBreakdown: string;
  perMarlaRate: string;
  statusTag: "#1 Best Buy" | "Top Sale Deal" | "PLRA Verified";
  bedrooms: number | null;
  bathrooms: number | null;
  garage: string | null;
  description: string;
  image: string;
  badge: string;
  verified: boolean;
  featured: boolean;
  status: "Available" | "Under Review" | "Sold";
  facilities: string[];
}

export const properties: PropertyItem[] = [
  {
    id: "prop-10m-corner-model-town",
    title: "10 Marla Brand New Corner House",
    slug: "10-marla-brand-new-corner-house-model-town",
    area: "Model Town",
    locationLabel: "Model Town, Chichawatni",
    maskedAddress: "Street ••, Corner Sector, Model Town, Chichawatni",
    cityHub: "Chichawatni",
    type: "residential",
    listingType: "sale",
    sizeMarla: 10,
    sizeLabel: "10 Marla",
    price: "PKR 1.60 Crore",
    pricePkr: "PKR 1.60 Crore",
    priceBreakdown: "1 Crore 60 Lakh • Negotiable",
    perMarlaRate: "~16 Lakh / Marla",
    statusTag: "#1 Best Buy",
    bedrooms: 5,
    bathrooms: 5,
    garage: "Wide SUV Garage",
    description: "Double story luxury corner residence with wide SUV garage, private lawn space, 5 bedrooms with attached washrooms, double TV lounge, and Spanish tile flooring. 100% PLRA verified ownership.",
    image: "/assets/images/house-10marla-corner.jpg",
    badge: "10 Marla • Corner Plot",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["WAPDA Electricity", "Sui Gas Available", "Corner Plot", "SUV Garage", "Spanish Tiles", "Wide Road Frontage"]
  },
  {
    id: "prop-12m-signature-housing-colony",
    title: "12 Marla Signature Family Residence",
    slug: "12-marla-signature-family-residence-housing-colony",
    area: "Housing Colony",
    locationLabel: "Housing Colony, Chichawatni",
    maskedAddress: "Main Boulevard Link, Block ••, Housing Colony, Chichawatni",
    cityHub: "Chichawatni",
    type: "residential",
    listingType: "sale",
    sizeMarla: 12,
    sizeLabel: "12 Marla",
    price: "PKR 1.55 Crore",
    pricePkr: "PKR 1.55 Crore",
    priceBreakdown: "1 Crore 55 Lakh • Direct Owner Deal",
    perMarlaRate: "~12.9 Lakh / Marla",
    statusTag: "Top Sale Deal",
    bedrooms: 4,
    bathrooms: 4,
    garage: "Double Car Porch",
    description: "Brand new residence featuring contemporary wood-accent exterior elevation, open roof terrace, 4 master bedrooms with built-in wardrobes, and secure neighborhood location in Housing Colony.",
    image: "/assets/images/house-signature.jpg",
    badge: "12 Marla • Double Story",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["WAPDA Electricity", "Sui Gas", "Double Car Porch", "Master Wardrobes", "Open Roof Terrace", "Gated Street"]
  },
  {
    id: "prop-7m-contemporary-green-town",
    title: "7 Marla Contemporary Family Home",
    slug: "7-marla-contemporary-family-home-green-town",
    area: "Green Town",
    locationLabel: "Green Town, Sahiwal / Chichawatni Corridor",
    maskedAddress: "Street ••, Block B, Green Town, Sahiwal",
    cityHub: "Sahiwal",
    type: "residential",
    listingType: "sale",
    sizeMarla: 7,
    sizeLabel: "7 Marla",
    price: "PKR 1.20 Crore",
    pricePkr: "PKR 1.20 Crore",
    priceBreakdown: "1 Crore 20 Lakh • Gas & Meters Installed",
    perMarlaRate: "~17.1 Lakh / Marla",
    statusTag: "PLRA Verified",
    bedrooms: 3,
    bathrooms: 3,
    garage: "Car Porch",
    description: "Contemporary family home with stainless steel and glass railing accents, elegant imported tile finish, and separate gas & electricity utility meters installed. Clear mutation and title.",
    image: "/assets/images/house-contemporary.jpg",
    badge: "7 Marla • Contemporary",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["Electricity Meter", "Sui Gas Meter", "Car Porch", "Glass Railings", "Tile Flooring", "Paved Street"]
  },
  {
    id: "prop-5m-modern-hayat-abad",
    title: "5 Marla Modern Double Story House",
    slug: "5-marla-modern-double-story-house-gulshan-e-hurmat-town",
    area: "Gulshan-e-Hurmat Town",
    locationLabel: "Gulshan-e-Hurmat Town, Chichawatni",
    maskedAddress: "Street ••, Sector A, Gulshan-e-Hurmat Town, Chichawatni",
    cityHub: "Chichawatni",
    type: "residential",
    listingType: "sale",
    sizeMarla: 5,
    sizeLabel: "5 Marla",
    price: "PKR 2.30 Crore",
    pricePkr: "PKR 2.30 Crore",
    priceBreakdown: "2 Crore 30 Lakh • Ready for Possession",
    perMarlaRate: "~46 Lakh / Marla",
    statusTag: "#1 Best Buy",
    bedrooms: 3,
    bathrooms: 3,
    garage: "Compact Car Porch",
    description: "Brand new 5 Marla double-story luxury house situated in prime Gulshan-e-Hurmat Town, Chichawatni. Complete imported tile flooring, solid woodwork, wide street front, and ready for immediate possession.",
    image: "/assets/images/house-5marla-brandnew.jpg",
    badge: "5 Marla • Double Story",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["Gulshan-e-Hurmat Prime Access", "Complete Tile Flooring", "WAPDA & Gas Ready", "Balcony Terrace", "Compact Porch"]
  },
  {
    id: "prop-10m-villa-farid-town",
    title: "10 Marla Designer Luxury Villa",
    slug: "10-marla-designer-luxury-villa-farid-town-sahiwal",
    area: "Farid Town",
    locationLabel: "Farid Town, Sahiwal",
    maskedAddress: "Sector ••, Near Central Park, Farid Town, Sahiwal",
    cityHub: "Sahiwal",
    type: "residential",
    listingType: "sale",
    sizeMarla: 10,
    sizeLabel: "10 Marla",
    price: "PKR 1.60 Crore",
    pricePkr: "PKR 1.60 Crore",
    priceBreakdown: "1 Crore 60 Lakh • CDA/TMA Standard Luxury",
    perMarlaRate: "~16 Lakh / Marla",
    statusTag: "Top Sale Deal",
    bedrooms: 5,
    bathrooms: 6,
    garage: "Double SUV Parking",
    description: "Prestigious 10 Marla designer villa in Farid Town Sahiwal. Features imported Grohe sanitary fittings, double height living lobby, separate servant quarter, and park facing location.",
    image: "/assets/images/house-10marla-corner.jpg",
    badge: "10 Marla • Luxury Villa",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["Park Facing", "Imported Sanitary", "Double SUV Parking", "Underground Electrification", "Sui Gas Active", "Gated Security"]
  },
  {
    id: "prop-1k-commercial-plot-gt-road",
    title: "10 Marla Prime Commercial / Residential Plot",
    slug: "10-marla-prime-commercial-residential-plot-gt-road-bypass",
    area: "GT Road",
    locationLabel: "Main GT Road / Bypass Corridor, Chichawatni",
    maskedAddress: "Frontage Plot #•••, GT Road Bypass Junction, Chichawatni",
    cityHub: "Chichawatni",
    type: "commercial",
    listingType: "sale",
    sizeMarla: 10,
    sizeLabel: "10 Marla Plot",
    price: "PKR 1.45 Crore",
    pricePkr: "PKR 1.45 Crore",
    priceBreakdown: "1 Crore 45 Lakh • Direct Road Frontage",
    perMarlaRate: "~14.5 Lakh / Marla",
    statusTag: "PLRA Verified",
    bedrooms: null,
    bathrooms: null,
    garage: "Heavy Vehicle Access",
    description: "High-value 10 Marla corner commercial plot located directly on the Main GT Road N-5 / Western Bypass corridor. Ideal for commercial plaza, diagnostic clinic, automobile showroom, or corporate warehouse.",
    image: "/assets/images/house-signature.jpg",
    badge: "10 Marla • Commercial Front",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["N-5 Direct Frontage", "Corner Plot 60ft Front", "High Commercial Footfall", "Arazi Record Verified", "Heavy Vehicle Access"]
  },
  {
    id: "prop-7m-arched-block-4",
    title: "7 Marla Family Residence in Block 4",
    slug: "7-marla-family-residence-block-4",
    area: "City Blocks",
    locationLabel: "Block 4, Chichawatni",
    maskedAddress: "Street ••, Block 4, Chichawatni",
    cityHub: "Chichawatni",
    type: "residential",
    listingType: "sale",
    sizeMarla: 7,
    sizeLabel: "7 Marla",
    price: "PKR 1.25 Crore",
    pricePkr: "PKR 1.25 Crore",
    priceBreakdown: "1 Crore 25 Lakh • Direct Seller Deal",
    perMarlaRate: "~17.8 Lakh / Marla",
    statusTag: "PLRA Verified",
    bedrooms: 4,
    bathrooms: 3,
    garage: "Car Porch",
    description: "Classic design family residence featuring arched elevation, high ventilation windows, sturdy red brick construction, and wide community road access in central Block 4.",
    image: "/assets/images/house-7marla-arched.jpg",
    badge: "7 Marla • Classic Elevation",
    verified: true,
    featured: false,
    status: "Available",
    facilities: ["Wide Street Access", "Arched Elevation", "WAPDA Meter", "Sui Gas Connection", "Safe Family Area"]
  }
];
