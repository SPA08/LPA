export interface PropertyItem {
  id: string;
  title: string;
  slug: string;
  area: string;
  locationLabel: string;
  type: "residential" | "commercial" | "plot" | "agricultural";
  listingType: "sale" | "rent";
  sizeMarla: number;
  sizeLabel: string;
  price: string;
  priceNumeric?: number;
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
    type: "residential",
    listingType: "sale",
    sizeMarla: 10,
    sizeLabel: "10 Marla",
    price: "Call for Price",
    bedrooms: 5,
    bathrooms: 5,
    garage: "Wide SUV Garage",
    description: "Double story luxury corner residence with wide SUV garage, private lawn space, 5 bedrooms with attached washrooms, double TV lounge, and Spanish tile flooring.",
    image: "/assets/images/house-10marla-corner.jpg",
    badge: "10 Marla • Corner Plot",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["WAPDA Electricity", "Sui Gas Available", "Corner Plot", "SUV Garage", "Spanish Tiles", "Wide Road Frontage"]
  },
  {
    id: "prop-12m-signature-housing-colony",
    title: "Signature Family Residence",
    slug: "signature-family-residence-housing-colony",
    area: "Housing Colony",
    locationLabel: "Housing Colony, Chichawatni",
    type: "residential",
    listingType: "sale",
    sizeMarla: 12,
    sizeLabel: "12 Marla",
    price: "Call for Price",
    bedrooms: 4,
    bathrooms: 4,
    garage: "Double Car Porch",
    description: "Brand new residence featuring contemporary wood-accent exterior elevation, open terrace, 3 master bedrooms with built-in wardrobes, and secure neighborhood location.",
    image: "/assets/images/house-signature.jpg",
    badge: "12 Marla • Double Story",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["WAPDA Electricity", "Sui Gas", "Double Car Porch", "Master Wardrobes", "Open Roof Terrace", "Gated Street"]
  },
  {
    id: "prop-7m-contemporary-green-town",
    title: "Contemporary Family Home",
    slug: "contemporary-family-home-green-town",
    area: "Green Town",
    locationLabel: "Green Town / Sahiwal Road",
    type: "residential",
    listingType: "sale",
    sizeMarla: 7,
    sizeLabel: "7 Marla",
    price: "Call for Price",
    bedrooms: 3,
    bathrooms: 3,
    garage: "Car Porch",
    description: "Contemporary family home with stainless steel and glass railing accents, elegant tile finish, and separate gas & electricity utility meters installed.",
    image: "/assets/images/house-contemporary.jpg",
    badge: "7 Marla • Contemporary",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["Electricity Meter", "Sui Gas Meter", "Car Porch", "Glass Railings", "Tile Flooring", "Paved Street"]
  },
  {
    id: "prop-5m-brandnew-hayat-abad",
    title: "5 Marla Double Story House",
    slug: "5-marla-double-story-house-hayat-abad",
    area: "Hayat Abad",
    locationLabel: "Tower Road, Hayat Abad, Chichawatni",
    type: "residential",
    listingType: "sale",
    sizeMarla: 5,
    sizeLabel: "5 Marla",
    price: "Call for Price",
    bedrooms: 3,
    bathrooms: 3,
    garage: "Compact Car Porch",
    description: "Well-built 5 Marla double-story home situated close to Tower Road, Hayat Abad. Complete tile flooring, wood paneling, and ready to move in for modern family living.",
    image: "/assets/images/house-5marla-brandnew.jpg",
    badge: "5 Marla • Double Story",
    verified: true,
    featured: true,
    status: "Available",
    facilities: ["Near Tower Road", "Complete Tile Flooring", "WAPDA & Gas Ready", "Balcony Terrace"]
  },
  {
    id: "prop-7m-arched-block-4",
    title: "7 Marla Family Residence in Block 4",
    slug: "7-marla-family-residence-block-4",
    area: "City Blocks",
    locationLabel: "Block 4, Chichawatni",
    type: "residential",
    listingType: "sale",
    sizeMarla: 7,
    sizeLabel: "7 Marla",
    price: "Call for Price",
    bedrooms: 4,
    bathrooms: 3,
    garage: "Car Porch",
    description: "Classic design family residence featuring arched elevation, high ventilation windows, sturdy red brick construction, and wide community road access in Block 4.",
    image: "/assets/images/house-7marla-arched.jpg",
    badge: "7 Marla • Classic Elevation",
    verified: true,
    featured: false,
    status: "Available",
    facilities: ["Wide Street Access", "Arched Elevation", "WAPDA Meter", "Sui Gas Connection", "Safe Family Area"]
  }
];
