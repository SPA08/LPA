export interface LocalityItem {
  id: string;
  name: string;
  slug: string;
  category: "Residential Locality" | "Road & Highway" | "Government & Revenue Office" | "Emergency & Healthcare" | "Education & Landmark" | "Commercial & Bazaar";
  parentChak?: string;
  lat: number;
  lng: number;
  legalStatus: string;
  statusBadge: "Verified" | "Government Record" | "Map Confirmed" | "Local Knowledge";
  description: string;
  highlights: string[];
}

export const localities: LocalityItem[] = [
  {
    id: "hayat-abad",
    name: "Hayat Abad",
    slug: "hayat-abad-chichawatni",
    category: "Residential Locality",
    parentChak: "Chak 40/12-L",
    lat: 30.5285,
    lng: 72.6840,
    legalStatus: "Locality confirmed on map; primary base of SIDDHU Property Advisor on Tower Road.",
    statusBadge: "Map Confirmed",
    description: "Prominent residential area extending along Tower Road. Characterized by 5 Marla, 7 Marla, and 10 Marla family residences, convenient street access, and vibrant community living.",
    highlights: ["Siddhu Property Advisor HQ (Street 08)", "Near Tower Road & Burewala link", "Electricity & Gas utilities active", "Popular family residence hub"]
  },
  {
    id: "housing-colony",
    name: "Housing Colony",
    slug: "housing-scheme-chichawatni",
    category: "Residential Locality",
    parentChak: "Tehsil Chichawatni",
    lat: 30.5420,
    lng: 72.6880,
    legalStatus: "Government planned residential scheme with planned road grid and civic infrastructure.",
    statusBadge: "Verified",
    description: "One of the most established planned residential colonies in Chichawatni. Features wide streets, civic parks, 5, 8, 10, and 12 Marla plots, and solid double-story homes.",
    highlights: ["Planned wide road network", "Dedicated park & commercial spaces", "High liquidity for residential plots", "Immediate possession homes available"]
  },
  {
    id: "model-town",
    name: "Model Town",
    slug: "model-town-chichawatni",
    category: "Residential Locality",
    parentChak: "Chak 38/12-L",
    lat: 30.5390,
    lng: 72.6950,
    legalStatus: "DPDC approved residential development phase with verified revenue records.",
    statusBadge: "Verified",
    description: "Premier modern residential enclave with upscale 10 Marla and 1 Kanal homes, modern architectural elevations, landscaped surroundings, and peaceful atmosphere.",
    highlights: ["DPDC approved sector", "Premium 10 Marla corner houses", "Secure family-friendly living", "Modern infrastructure & clean roads"]
  },
  {
    id: "civil-lines",
    name: "Civil Lines",
    slug: "civil-lines-chichawatni",
    category: "Residential Locality",
    parentChak: "Old Cantonment / Civil Quarter",
    lat: 30.5370,
    lng: 72.6820,
    legalStatus: "Historic administrative and residential quarter with verified registry records.",
    statusBadge: "Verified",
    description: "Classic high-status residential area neighboring administrative offices and judicial complex. Known for spacious vintage homes, solid brick construction, and mature tree-lined lanes.",
    highlights: ["Walking distance to Tehsil courts & offices", "Solid vintage red brick architecture", "Low turnover / high prestige", "Peaceful green surroundings"]
  },
  {
    id: "green-town",
    name: "Green Town",
    slug: "green-town-chichawatni",
    category: "Residential Locality",
    parentChak: "Chak 39/12-L",
    lat: 30.5460,
    lng: 72.7010,
    legalStatus: "Locality confirmed on map with active residential expansions.",
    statusBadge: "Map Confirmed",
    description: "Rapidly growing family residential community connecting toward Sahiwal Road. Features contemporary 5 Marla and 7 Marla houses with newly installed meters.",
    highlights: ["Modern contemporary construction", "Active builder developments", "Growing market demand", "Paved community streets"]
  },
  {
    id: "old-chichawatni",
    name: "Old Chichawatni",
    slug: "old-chichawatni",
    category: "Residential Locality",
    parentChak: "Historic Town Center",
    lat: 30.5315,
    lng: 72.7010,
    legalStatus: "Historic urban center of Chichawatni dating back to pre-1913 settlements.",
    statusBadge: "Verified",
    description: "The historical heart of Chichawatni near Railway Station and traditional commercial bazaars. Highly accessible, dense community living, and affordable homes.",
    highlights: ["Near Railway Station & Main Bazaar", "Commercial convenience", "Affordable 3 and 4 Marla homes", "Established social fabric"]
  },
  {
    id: "city-blocks",
    name: "City Blocks (Blocks 1–16)",
    slug: "city-blocks-chichawatni",
    category: "Residential Locality",
    parentChak: "Municipal Committee Area",
    lat: 30.5345,
    lng: 72.6905,
    legalStatus: "Municipal Committee planned numbered blocks (Blocks 1 to 16).",
    statusBadge: "Verified",
    description: "The core urban grid of Chichawatni divided into 16 planned residential and commercial blocks with direct access to schools, markets, and municipal services.",
    highlights: ["Planned numbered block system", "Block 4, 8, 12 residential hubs", "Direct access to shops & clinics", "Traditional solid masonry"]
  },
  {
    id: "gt-road",
    name: "GT Road (N-5 National Highway)",
    slug: "gt-road-chichawatni",
    category: "Road & Highway",
    lat: 30.5360,
    lng: 72.6900,
    legalStatus: "Federal National Highway (N-5) connecting Lahore, Sahiwal, and Multan.",
    statusBadge: "Verified",
    description: "The primary commercial and transit spine of Tehsil Chichawatni. Home to commercial plazas, vehicle showrooms, restaurants, and intercity bus terminals.",
    highlights: ["Primary transit artery of Pakistan", "High commercial property values", "Major entry point into Chichawatni", "Continuous business activity"]
  },
  {
    id: "plra-arazi-center",
    name: "Arazi Record Center (PLRA) Chichawatni",
    slug: "arazi-record-center-chichawatni",
    category: "Government & Revenue Office",
    lat: 30.5348,
    lng: 72.6865,
    legalStatus: "Official Punjab Land Records Authority (PLRA) computerised revenue center.",
    statusBadge: "Verified",
    description: "The central government office for obtaining computerized Fard Malkiat, checking khewat/khasra land registers, and registering bio-metric property mutations (Inteqal).",
    highlights: ["Computerized Fard issuance", "Biometric mutation / Inteqal", "Direct official land title verification", "Critical stop before buying property"]
  },
  {
    id: "thq-hospital",
    name: "THQ Hospital Chichawatni",
    slug: "thq-hospital-chichawatni",
    category: "Emergency & Healthcare",
    lat: 30.5365,
    lng: 72.6920,
    legalStatus: "Government Tehsil Headquarter Hospital.",
    statusBadge: "Verified",
    description: "Major government hospital in Tehsil Chichawatni providing 24/7 emergency medical care, specialized outpatient clinics, and inpatient healthcare facilities.",
    highlights: ["24/7 emergency service", "Trauma & surgical care", "Central city location", "Serving entire tehsil population"]
  },
  {
    id: "chichawatni-forest",
    name: "Chichawatni Irrigated Forest (1913)",
    slug: "chichawatni-forest-heritage",
    category: "Education & Landmark",
    lat: 30.5410,
    lng: 72.6780,
    legalStatus: "Historic National Forest Reserve established in 1913.",
    statusBadge: "Verified",
    description: "The historic 1913 irrigated plantation spanning over 11,000 acres that catalyzed the foundation and climatic comfort of modern Chichawatni.",
    highlights: ["Established in 1913", "Historic national green belt", "Environmental lung of the region", "Defining heritage of Chichawatni"]
  }
];
