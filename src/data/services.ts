export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  icon: string;
  summary: string;
  description: string;
  badge: string;
  deliverables: string[];
}

export const services: ServiceItem[] = [
  {
    id: "buy-home",
    title: "Buy a Home in Chichawatni",
    slug: "genuine-residential-listings",
    icon: "fa-solid fa-house-chimney",
    badge: "Buyer Advisory",
    summary: "Residential options + verified shortlist + organized physical site visits.",
    description: "Finding the right house requires evaluating location access, neighborhood security, construction durability, and fair market valuation. Naeem Siddhu personally shortlists genuine homes and conducts on-site walk-throughs with you.",
    deliverables: [
      "Custom requirements matching (5, 7, 10, 12 Marla & 1 Kanal)",
      "Neighborhood infrastructure & utility verification",
      "Direct seller meetings with zero phantom markups",
      "Comprehensive structural & physical inspection"
    ]
  },
  {
    id: "sell-property",
    title: "Sell Your House or Plot",
    slug: "chichawatni-local-specialist",
    icon: "fa-solid fa-tag",
    badge: "Seller Portal",
    summary: "Verified listing submission + authentic photographs + GPS + human review.",
    description: "Sell your residential house, commercial plot, or agricultural land with maximum buyer trust. Our portal captures real on-site photos, records precise coordinates, and presents your property directly to pre-qualified buyers.",
    deliverables: [
      "Accurate current market valuation estimate",
      "On-site photo documentation & street capture",
      "Private seller detail protection & no unauthorized public visits",
      "Negotiation support & smooth transaction closure"
    ]
  },
  {
    id: "plra-fard",
    title: "Property Record & Fard Guidance",
    slug: "plra-ownership-verification",
    icon: "fa-solid fa-file-shield",
    badge: "Revenue Verification",
    summary: "Fard / Registry / Inteqal / Arazi Record Center guidance.",
    description: "Never risk your hard-earned capital on unverified titles. We guide you through the Arazi Record Center (ARC) verification process, cross-referencing Khewat, Khatoni, and Khasra numbers before token money changes hands.",
    deliverables: [
      "PLRA computerized Fard Malkiat verification guidance",
      "Khasra & Aks-Shajra map boundary cross-referencing",
      "Mutation (Inteqal) status confirmation",
      "Clear explanation of seller title history"
    ]
  },
  {
    id: "overseas-support",
    title: "Overseas Pakistani Advisory",
    slug: "chichawatni-overseas-investor-guide",
    icon: "fa-solid fa-plane-departure",
    badge: "Global Remote",
    summary: "Remote video viewing + document checklist + Power of Attorney guidance.",
    description: "Overseas Pakistanis investing in Chichawatni receive transparent remote oversight. We provide live WhatsApp video inspections, boundary confirmations, and legal Power of Attorney (POA) procedural guidance.",
    deliverables: [
      "High-definition video tours of the house & surroundings",
      "Embassy-attested Power of Attorney guidance",
      "Independent verification of local market rates",
      "Trusted family representative coordination"
    ]
  },
  {
    id: "area-guidance",
    title: "Local Area & Colony Guidance",
    slug: "chichawatni-city-guide",
    icon: "fa-solid fa-map-location-dot",
    badge: "Market Intelligence",
    summary: "Roads, schools, hospitals, markets, public offices, locality knowledge.",
    description: "Detailed street-level intelligence on every neighborhood in Chichawatni—from Hayat Abad and Model Town to Housing Colony and Civil Lines. Understand school proximity, water quality, and sewerage before deciding.",
    deliverables: [
      "Comparative livability evaluation across colonies",
      "Proximity assessment to THQ Hospital & leading colleges",
      "Traffic & road access analysis (N-5, Burewala Rd, Toba Rd)",
      "Unbiased facts on water table & civic amenities"
    ]
  },
  {
    id: "transfer-guidance",
    title: "Property Transfer & Registry Process",
    slug: "fbr-area-record-guidance",
    icon: "fa-solid fa-handshake",
    badge: "Procedural Steps",
    summary: "Complete transfer roadmap — stamp duties, taxes, and registry execution.",
    description: "Clear, step-by-step roadmap of the legal transfer procedure in Tehsil Chichawatni. We explain the difference between PLRA computerized transfer and Sub-Registrar registry deed execution.",
    deliverables: [
      "FBR valuation table calculations & DC rates review",
      "Stamp duty, TMA transfer fee, and withholding tax breakdown",
      "Filer vs. Non-Filer tax rate clarity",
      "Sub-Registrar office attendance protocol"
    ]
  },
  {
    id: "site-visits",
    title: "Personalized Site Visit Assistance",
    slug: "property-buying-guide",
    icon: "fa-solid fa-car",
    badge: "On-Ground",
    summary: "Organized physical viewings with Naeem Siddhu.",
    description: "Accompanied site visits with Naeem Siddhu to inspect genuine properties at your convenience. We inspect room layouts, sun direction, corner benefits, and street drainage together.",
    deliverables: [
      "Flexible scheduling for weekend and evening visits",
      "Physical boundary tape measurement checks",
      "Neighborhood inquiry regarding utility supply consistency",
      "Objective assessment of construction finishing quality"
    ]
  },
  {
    id: "ongoing-support",
    title: "Post-Purchase & Possession Support",
    slug: "chichawatni-city-facts",
    icon: "fa-solid fa-shield-heart",
    badge: "End-to-End",
    summary: "Physical key handover, meter transfers & contractor referrals.",
    description: "Our advisory doesn't end when the sale contract is signed. We support you through final key handover, WAPDA electricity meter transfer, Sui Gas connection assistance, and verified builder contacts.",
    deliverables: [
      "Physical vacant possession handover supervision",
      "Utility meter title transfer procedure guidance",
      "Local architect, contractor & artisan recommendations",
      "Long-term local property advisory relationship"
    ]
  }
];
