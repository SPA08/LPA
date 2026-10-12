export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: "Buying Guide" | "Selling Guide" | "Property Records" | "Local Areas" | "Market Updates";
  date: string;
  author: string;
  excerpt: string;
  thumbnail: string;
  readTime: string;
}

export const blogPosts: BlogPostItem[] = [
  {
    id: "5-marla-house-construction-cost-pakistan-2026",
    slug: "5-marla-house-construction-cost-pakistan-2026",
    title: "5 Marla House Construction Cost in Pakistan (2026 Complete Material & Labor Breakdown)",
    category: "Buying Guide",
    date: "2026-09-19",
    author: "Naeem Siddhu",
    excerpt: "Comprehensive 2026 breakdown of gray structure and finishing costs for a standard A-Grade 5 Marla double-story home in Chichawatni.",
    thumbnail: "/assets/images/house-5marla-brandnew.jpg",
    readTime: "6 min read"
  },
  {
    id: "5-marla-vs-8-marla-investment-comparison",
    slug: "5-marla-vs-8-marla-investment-comparison",
    title: "5 Marla vs 8 Marla House: Which Property Size is Right for Your Family in Chichawatni?",
    category: "Buying Guide",
    date: "2026-09-19",
    author: "Naeem Siddhu",
    excerpt: "Detailed comparison between 5 Marla and 8 Marla residential houses covering budget, resale liquidity, covered area, and family requirements.",
    thumbnail: "/assets/images/house-contemporary.jpg",
    readTime: "5 min read"
  },
  {
    id: "8-marla-house-construction-cost-layout-guide",
    slug: "8-marla-house-construction-cost-layout-guide",
    title: "8 Marla House Construction Cost & Ideal Layout Guide in Punjab",
    category: "Buying Guide",
    date: "2026-09-19",
    author: "Naeem Siddhu",
    excerpt: "Detailed material cost breakdown and floor plan considerations for building an 8 Marla house in Punjab residential colonies.",
    thumbnail: "/assets/images/house-10marla-corner.jpg",
    readTime: "6 min read"
  },
  {
    id: "plra-fard-registry-transfer-steps-chichawatni",
    slug: "plra-fard-registry-transfer-steps-chichawatni",
    title: "Step-by-Step PLRA Fard & Registry Process in Tehsil Chichawatni",
    category: "Property Records",
    date: "2026-09-19",
    author: "Naeem Siddhu",
    excerpt: "How to safely obtain computerized Fard Malkiat, verify Arazi Record Center entries, and complete the Sub-Registrar transfer protocol.",
    thumbnail: "/assets/images/house-signature.jpg",
    readTime: "5 min read"
  },
  {
    id: "top-tips-selling-house-fast-chichawatni",
    slug: "top-tips-selling-house-fast-chichawatni",
    title: "Top Practical Tips for Selling Your House Fast in Chichawatni (2026)",
    category: "Selling Guide",
    date: "2026-09-19",
    author: "Naeem Siddhu",
    excerpt: "Essential steps for home sellers in Chichawatni: pricing realism, document readiness, live photography, and honest representation.",
    thumbnail: "/assets/images/user_upload_buy.jpg",
    readTime: "4 min read"
  },
  {
    id: "buying-guide-chichawatni",
    slug: "buying-guide-chichawatni",
    title: "A Complete Guide to Buying Property in Chichawatni",
    category: "Buying Guide",
    date: "2026-09-18",
    author: "Naeem Siddhu",
    excerpt: "The 5 essential due-diligence checkpoints every property buyer in Chichawatni must follow before paying token money.",
    thumbnail: "/assets/images/house-10marla-corner.jpg",
    readTime: "5 min read"
  },
  {
    id: "old-house-civil-lines-chichawatni",
    slug: "old-house-civil-lines-chichawatni",
    title: "Solid 5 Marla Old House for Sale in Civil Lines, Chichawatni",
    category: "Local Areas",
    date: "2026-09-19",
    author: "Rana Waqas",
    excerpt: "A classic, solid construction old house located in the heart of Civil Lines. Best in Chichawatni for families looking for a prime neighborhood.",
    thumbnail: "/assets/images/user_upload_3.jpg",
    readTime: "3 min read"
  },
  {
    id: "8-marla-classic-housing-scheme",
    slug: "8-marla-classic-housing-scheme",
    title: "Best Investment: 8 Marla Classic Home in Housing Scheme",
    category: "Local Areas",
    date: "2026-09-18",
    author: "Chaudhry Aslam",
    excerpt: "This 8 Marla old construction home in Housing Scheme offers spacious rooms and a solid foundation. Top condition and ready for immediate possession.",
    thumbnail: "/assets/images/user_upload_4.jpg",
    readTime: "3 min read"
  },
  {
    id: "family-friendly-old-house-block-4",
    slug: "family-friendly-old-house-block-4",
    title: "Family-Friendly 7 Marla Old House in Block 4",
    category: "Local Areas",
    date: "2026-09-14",
    author: "Malik Kamran",
    excerpt: "Situated in Block 4, this 7 Marla house offers older, highly durable construction with thick walls. One of the top family locations in the city.",
    thumbnail: "/assets/images/user_upload_5.jpg",
    readTime: "3 min read"
  },
  {
    id: "solid-brick-house-gulshan-e-iqbal",
    slug: "solid-brick-house-gulshan-e-iqbal",
    title: "Solid Brick 5 Marla House in Gulshan-e-Iqbal",
    category: "Local Areas",
    date: "2026-09-13",
    author: "Sheikh Bilal",
    excerpt: "A robust, older brick home in Gulshan-e-Iqbal. Ideal for those who value traditional construction strength over new, lightweight builds.",
    thumbnail: "/assets/images/user_upload_buy.jpg",
    readTime: "3 min read"
  },
  {
    id: "classic-design-house-tariq-bin-ziyad",
    slug: "classic-design-house-tariq-bin-ziyad",
    title: "Classic Design 6 Marla Home in Tariq Bin Ziyad Colony",
    category: "Local Areas",
    date: "2026-09-12",
    author: "Sardar Hamza",
    excerpt: "Experience classic Chichawatni living with this 6 Marla old house in Tariq Bin Ziyad Colony. Features a large courtyard and excellent ventilation.",
    thumbnail: "/assets/images/user_upload_2.jpg",
    readTime: "3 min read"
  },
  {
    id: "corner-old-house-quaid-e-azam-town",
    slug: "corner-old-house-quaid-e-azam-town",
    title: "Spacious Corner Old House in Quaid-e-Azam Town",
    category: "Local Areas",
    date: "2026-09-11",
    author: "Farooq Ahmed",
    excerpt: "This 8 Marla corner house in Quaid-e-Azam town boasts old-school charm and extra lawn space. Highly durable and well-priced for the local market.",
    thumbnail: "/assets/images/user_upload_1.jpg",
    readTime: "3 min read"
  },
  {
    id: "affordable-3-marla-block-12",
    slug: "affordable-3-marla-block-12",
    title: "Affordable 3 Marla Old House in Block 12, Chichawatni",
    category: "Local Areas",
    date: "2026-09-10",
    author: "Naeem Siddhu",
    excerpt: "Compact, budget-friendly 3 Marla residence in central Block 12. Ideal for small families seeking affordable urban convenience.",
    thumbnail: "/assets/images/house-5marla-brandnew.jpg",
    readTime: "3 min read"
  },
  {
    id: "prime-location-10-marla-model-town",
    slug: "prime-location-10-marla-model-town",
    title: "Prime Location 10 Marla Old House in Model Town",
    category: "Local Areas",
    date: "2026-09-09",
    author: "Naeem Siddhu",
    excerpt: "Substantial 10 Marla property in prestigious Model Town Chichawatni offering expansive lawn, wide street frontage, and strong foundation.",
    thumbnail: "/assets/images/house-10marla-modern.jpg",
    readTime: "3 min read"
  },
  {
    id: "top-condition-old-house-main-bazaar",
    slug: "top-condition-old-house-main-bazaar",
    title: "Top Condition Old Construction House Near Main Bazaar",
    category: "Local Areas",
    date: "2026-09-08",
    author: "Naeem Siddhu",
    excerpt: "Extremely convenient residential location minutes from Main Bazaar and commercial shops, offering solid construction and high accessibility.",
    thumbnail: "/assets/images/house-contemporary.jpg",
    readTime: "3 min read"
  },
  {
    id: "vintage-4-marla-house-near-railway",
    slug: "vintage-4-marla-house-near-railway",
    title: "Vintage 4 Marla Solid House Near Railway Station",
    category: "Local Areas",
    date: "2026-09-07",
    author: "Naeem Siddhu",
    excerpt: "Solid 4 Marla family house near the historic Railway Station area. Peaceful dead-end lane with immediate possession.",
    thumbnail: "/assets/images/house-7marla-arched.jpg",
    readTime: "3 min read"
  }
];
