export interface CityPlaceItem {
  id: string;
  name: string;
  category: "Education" | "Health" | "Government" | "Banking" | "Safety" | "Real Estate" | "Services";
  subCategory: string;
  locality: string;
  roadAddress: string;
  lat: number;
  lng: number;
  distanceFromCenter?: string;
  usefulness: string;
  highlights: string[];
  contactOrTiming?: string;
}

export const cityPlaces: CityPlaceItem[] = [
  // ===================== EDUCATION =====================
  {
    id: "govt-degree-college-boys",
    name: "Govt. Graduate College for Boys",
    category: "Education",
    subCategory: "College & University Degree Programs",
    locality: "Civil Quarter / College Area",
    roadAddress: "College Road, Chichawatni",
    lat: 30.5375,
    lng: 72.6860,
    distanceFromCenter: "1.2 km from City Center",
    usefulness: "Primary higher education institution offering intermediate (FA/FSc) and bachelor degree programs with sprawling grounds and sports facilities.",
    highlights: ["Established 1960s", "Large Campus & Grounds", "BS 4-Year Degree Programs", "Near Civil Lines Residences"],
    contactOrTiming: "Morning Shift (8:00 AM – 2:00 PM)"
  },
  {
    id: "govt-associate-college-women",
    name: "Govt. Associate College for Women",
    category: "Education",
    subCategory: "Women Higher Education",
    locality: "Model Town Link",
    roadAddress: "Near Model Town & Civil Lines Road, Chichawatni",
    lat: 30.5395,
    lng: 72.6930,
    distanceFromCenter: "1.5 km from City Center",
    usefulness: "Top government female education college in Tehsil Chichawatni, serving thousands of female students with secure campus transport.",
    highlights: ["Secure Walled Campus", "Science & Arts Laboratories", "Dedicated College Buses", "Walking Distance from Model Town"],
    contactOrTiming: "Morning Shift (8:00 AM – 1:30 PM)"
  },
  {
    id: "divisional-public-school",
    name: "Divisional Public School & College (DPS)",
    category: "Education",
    subCategory: "Premier School & College",
    locality: "Bypass Corridor / Housing Colony",
    roadAddress: "Bypass Road, Chichawatni",
    lat: 30.5435,
    lng: 72.6895,
    distanceFromCenter: "2.0 km from City Center",
    usefulness: "Premier semi-government English medium school and college following Cambridge and FBISE/BISE curriculum, highly preferred by local elite families.",
    highlights: ["Aga Khan / BISE Affiliated", "Modern Science Labs", "High Academic Standard", "Near Planned Colonies"],
    contactOrTiming: "7:45 AM – 1:45 PM"
  },
  {
    id: "punjab-group-colleges",
    name: "Punjab Group of Colleges (PGC)",
    category: "Education",
    subCategory: "Private College Campus",
    locality: "GT Road Junction",
    roadAddress: "Main GT Road N-5, Chichawatni",
    lat: 30.5350,
    lng: 72.6970,
    distanceFromCenter: "1.8 km from City Center",
    usefulness: "Leading private college campus known for pre-medical, pre-engineering, and computer sciences preparation with dedicated student transport.",
    highlights: ["Separate Boys & Girls Campuses", "Top BISE Board Positions", "Transport Coverage Across Tehsil", "Air Conditioned Classrooms"],
    contactOrTiming: "8:00 AM – 2:00 PM"
  },
  {
    id: "govt-high-school-1",
    name: "Govt. High School No. 1",
    category: "Education",
    subCategory: "Historical Boys School",
    locality: "Block 4 / Railway Area",
    roadAddress: "Near Railway Station, Old Chichawatni",
    lat: 30.5325,
    lng: 72.6990,
    distanceFromCenter: "0.8 km from City Center",
    usefulness: "Historic central high school established during the colonial township era, educating generations of Chichawatni residents.",
    highlights: ["Centennial Heritage Campus", "Large Athletic Playground", "Accessible from All 16 Blocks", "Standard Matriculation Center"],
    contactOrTiming: "Morning (8:00 AM – 1:30 PM)"
  },

  // ===================== HEALTH =====================
  {
    id: "thq-hospital",
    name: "Tehsil Headquarter (THQ) Hospital",
    category: "Health",
    subCategory: "Public General Hospital",
    locality: "Central Civic Zone",
    roadAddress: "Main GT Road (N-5), Chichawatni",
    lat: 30.5365,
    lng: 72.6920,
    distanceFromCenter: "0.6 km from City Center",
    usefulness: "Major 100+ bed state-run hospital providing 24/7 trauma emergency, orthopedic surgery, dialysis center, maternity ward, and free pharmaceuticals.",
    highlights: ["24/7 Emergency & Trauma Care", "Modern Dialysis Unit", "Surgical Theaters & ICU", "Rescue 1122 Rapid Access"],
    contactOrTiming: "24/7 Emergency Services Available"
  },
  {
    id: "fatima-memorial-hospital",
    name: "Fatima Memorial Hospital",
    category: "Health",
    subCategory: "Specialized Maternity & Pediatric Care",
    locality: "Tower Road / Hayat Abad Link",
    roadAddress: "Burewala Road Link, Chichawatni",
    lat: 30.5295,
    lng: 72.6850,
    distanceFromCenter: "1.4 km from City Center",
    usefulness: "Leading private healthcare facility specializing in gynecology, obstetrics, neonatal intensive care, and ultrasound diagnostics.",
    highlights: ["Modern Neonatal Nursery", "Experienced Consultant Gynecologists", "In-house 24/7 Pharmacy", "Adjacent to Hayat Abad"],
    contactOrTiming: "9:00 AM – 9:00 PM (Emergency 24/7)"
  },
  {
    id: "dr-nazir-eye-hospital",
    name: "Dr. Nazir Eye Hospital & Laser Center",
    category: "Health",
    subCategory: "Specialized Eye Hospital",
    locality: "College Road / Block 5",
    roadAddress: "College Road, Chichawatni",
    lat: 30.5360,
    lng: 72.6885,
    distanceFromCenter: "0.9 km from City Center",
    usefulness: "Renowned regional ophthalmological specialty center offering phaco cataract surgery, laser vision procedures, and glaucoma treatments.",
    highlights: ["State-of-the-Art Phacoemulsification", "Diagnostic Retinal Scans", "Regional Patient Footfall", "Central Urban Location"],
    contactOrTiming: "Mon – Sat: 9:00 AM – 5:00 PM"
  },
  {
    id: "al-shifa-diagnostic-clinic",
    name: "Al-Shifa Clinic & Diagnostic Laboratory",
    category: "Health",
    subCategory: "Diagnostic Labs & Consultant Clinics",
    locality: "Tower Road Corridor",
    roadAddress: "Tower Road, Hayat Abad Side, Chichawatni",
    lat: 30.5305,
    lng: 72.6870,
    distanceFromCenter: "1.1 km from City Center",
    usefulness: "High-accuracy diagnostic center providing digital X-rays, computerized pathology tests, ultrasound, and visiting medical specialist consultants.",
    highlights: ["Computerized Blood Pathology", "Visiting Cardiologists & Physicians", "Rapid Report Turnaround", "Servicing Hayat Abad Residents"],
    contactOrTiming: "8:00 AM – 10:00 PM"
  },

  // ===================== GOVERNMENT =====================
  {
    id: "plra-arazi-center",
    name: "Arazi Record Center (PLRA) Chichawatni",
    category: "Government",
    subCategory: "Land Records & Title Deeds",
    locality: "Bypass / Civil Lines Extension",
    roadAddress: "Near Bypass Road & Civil Quarter, Chichawatni",
    lat: 30.5348,
    lng: 72.6865,
    distanceFromCenter: "1.3 km from City Center",
    usefulness: "The vital Punjab Land Records Authority office where property buyers obtain computerized Fard Malkiat, verify ownership khewat records, and complete biometric mutations (Inteqal).",
    highlights: ["Official Computerized Fard", "Biometric Property Mutation", "Khasra Land Record Verification", "Essential Step in Property Purchases"],
    contactOrTiming: "Mon – Sat: 8:00 AM – 4:00 PM"
  },
  {
    id: "assistant-commissioner-office",
    name: "Assistant Commissioner (AC) Office & Courts",
    category: "Government",
    subCategory: "Tehsil Administrative Headquarters",
    locality: "Civil Lines",
    roadAddress: "Civil Lines Complex, Chichawatni",
    lat: 30.5372,
    lng: 72.6825,
    distanceFromCenter: "1.4 km from City Center",
    usefulness: "Executive administrative headquarters of Tehsil Chichawatni housing the Sub-Divisional Magistrate, revenue courts, and price magistrate offices.",
    highlights: ["Tehsil Administrative Center", "Revenue Appeals & Records", "DDC Development Supervision", "Serene Civil Lines Zone"],
    contactOrTiming: "Mon – Fri: 9:00 AM – 5:00 PM"
  },
  {
    id: "sub-registrar-office",
    name: "Sub-Registrar Office Chichawatni",
    category: "Government",
    subCategory: "Deed Registry & Stamp Office",
    locality: "Tehsil Judicial Complex",
    roadAddress: "Kachehri Road, Civil Lines, Chichawatni",
    lat: 30.5368,
    lng: 72.6835,
    distanceFromCenter: "1.2 km from City Center",
    usefulness: "Statutory government office for official registration of property sale deeds (Bayaan / Registry), assessment of Stamp Duty, and TMA transfer taxes.",
    highlights: ["Sale Deed Registration", "E-Stamp Stamp Duty Verification", "Sub-Registrar Attestation", "Final Legal Ownership Step"],
    contactOrTiming: "Mon – Thu: 9:00 AM – 3:00 PM"
  },
  {
    id: "municipal-committee-office",
    name: "Tehsil Municipal Committee (TMA) Office",
    category: "Government",
    subCategory: "Civic Services & Building Control",
    locality: "Main City Center",
    roadAddress: "Committee Road, Chichawatni",
    lat: 30.5338,
    lng: 72.6935,
    distanceFromCenter: "0.5 km from City Center",
    usefulness: "Municipal authority responsible for building plan approvals (Naksha), commercial NOCs, street lighting, sanitation, and municipal tax collections.",
    highlights: ["Building Plan (Naksha) Sanction", "TMA NOC for Commercial Plazas", "Sanitation & Water Infrastructure", "Colony Approval Verification"],
    contactOrTiming: "Mon – Fri: 9:00 AM – 4:00 PM"
  },
  {
    id: "nadra-mega-center",
    name: "NADRA Registration Center",
    category: "Government",
    subCategory: "National Identity & Family Records",
    locality: "Railway Road / Civil Quarter",
    roadAddress: "Railway Road, Chichawatni",
    lat: 30.5330,
    lng: 72.6880,
    distanceFromCenter: "0.8 km from City Center",
    usefulness: "National identity office providing Smart CNIC issuance, Family Registration Certificates (FRC for overseas properties), and bio-metric verification.",
    highlights: ["Smart National Identity Cards", "FRC for Overseas Pakistani Buyers", "Biometric Verification Counter", "Central Accessible Location"],
    contactOrTiming: "Mon – Fri: 8:30 AM – 4:30 PM"
  },

  // ===================== BANKING =====================
  {
    id: "hbl-main-branch",
    name: "Habib Bank Limited (HBL) Main Branch & ATM",
    category: "Banking",
    subCategory: "Commercial Banking & Cash Hub",
    locality: "Galla Mandi / Commercial Hub",
    roadAddress: "Railway Road, Galla Mandi, Chichawatni",
    lat: 30.5332,
    lng: 72.6955,
    distanceFromCenter: "0.4 km from City Center",
    usefulness: "Principal commercial banking branch in Chichawatni handling high-value agricultural, commercial, and property bank pay orders and transfers.",
    highlights: ["Pay Orders & Demand Drafts", "High-Volume Cash Handling", "24/7 Multi-ATM Booth", "Main Trade Center Base"],
    contactOrTiming: "Mon – Fri: 9:00 AM – 5:00 PM"
  },
  {
    id: "nbp-civil-lines",
    name: "National Bank of Pakistan (NBP) Civil Lines",
    category: "Banking",
    subCategory: "Government Treasury & Banking",
    locality: "Civil Lines",
    roadAddress: "Near Kachehri, Civil Lines, Chichawatni",
    lat: 30.5365,
    lng: 72.6845,
    distanceFromCenter: "1.1 km from City Center",
    usefulness: "Official government treasury bank where property buyers deposit E-Stamp duty, PLRA mutation fees, and judicial court charges.",
    highlights: ["E-Stamp Paper Challan Payment", "Government Revenue Deposits", "Pension & Treasury Services", "Adjacent to Kachehri"],
    contactOrTiming: "Mon – Fri: 9:00 AM – 5:00 PM"
  },
  {
    id: "meezan-bank-islamic",
    name: "Meezan Bank Islamic Banking",
    category: "Banking",
    subCategory: "Islamic Housing & Consumer Finance",
    locality: "Tower Road Corridor",
    roadAddress: "Near Tower Road Chowk, Chichawatni",
    lat: 30.5310,
    lng: 72.6890,
    distanceFromCenter: "0.9 km from City Center",
    usefulness: "Premier full-fledged Islamic banking branch offering Shariah-compliant Easy Home housing finance, business financing, and clean digital banking.",
    highlights: ["Shariah-Compliant House Financing", "24/7 Biometric ATM", "Fast Digital Remittances", "Convenient for Hayat Abad Residents"],
    contactOrTiming: "Mon – Fri: 9:00 AM – 5:00 PM"
  },
  {
    id: "mcb-bank-gt-road",
    name: "MCB Bank Limited",
    category: "Banking",
    subCategory: "Commercial Banking & Forex",
    locality: "GT Road Commercial Strip",
    roadAddress: "Main GT Road N-5, Chichawatni",
    lat: 30.5355,
    lng: 72.6940,
    distanceFromCenter: "0.7 km from City Center",
    usefulness: "Full-service commercial bank branch on the GT Road corridor offering home remittances, merchant accounts, and auto loan services.",
    highlights: ["Foreign Remittance Service", "Drive-through ATM Access", "Commercial Merchant Solutions", "Highway Frontage"],
    contactOrTiming: "Mon – Fri: 9:00 AM – 5:00 PM"
  },

  // ===================== SAFETY =====================
  {
    id: "thana-city-police",
    name: "City Police Station (Thana City)",
    category: "Safety",
    subCategory: "Urban Law Enforcement & Verification",
    locality: "City Quarter / Block 3",
    roadAddress: "Police Station Road, Chichawatni",
    lat: 30.5340,
    lng: 72.6975,
    distanceFromCenter: "0.5 km from City Center",
    usefulness: "Primary urban police station having jurisdiction over residential blocks 1–16, commercial markets, and tenant verification systems.",
    highlights: ["24/7 Police Helpdesk", "Tenant Registration & Verification", "Safe Urban Beat Patrols", "Khidmat Markaz Counter"],
    contactOrTiming: "Emergency: 15 / Office: 24/7"
  },
  {
    id: "rescue-1122-station",
    name: "Punjab Emergency Service (Rescue 1122)",
    category: "Safety",
    subCategory: "Ambulance & Fire Emergency",
    locality: "GT Road / Bypass Junction",
    roadAddress: "GT Road Bypass, Chichawatni",
    lat: 30.5385,
    lng: 72.6875,
    distanceFromCenter: "1.5 km from City Center",
    usefulness: "State-of-the-art emergency service providing 24/7 swift medical ambulance, road rescue, and modern fire brigade services across the entire tehsil.",
    highlights: ["7-Minute Average Urban Response Time", "Trained Paramedic Ambulances", "Modern Firefighting Vehicles", "Serving All Residential Areas"],
    contactOrTiming: "Helpline: 1122 (Toll Free, 24/7)"
  },
  {
    id: "thana-saddar-police",
    name: "Saddar Police Station (Thana Saddar)",
    category: "Safety",
    subCategory: "Tehsil Peri-Urban & Agricultural Safety",
    locality: "Highway Access",
    roadAddress: "Near GT Road Bypass, Chichawatni",
    lat: 30.5400,
    lng: 72.6840,
    distanceFromCenter: "1.8 km from City Center",
    usefulness: "Law enforcement jurisdiction covering surrounding agricultural chaks, rural land holdings, and highway commercial areas.",
    highlights: ["Rural Land Security", "Patrolling on Transport Corridors", "Farmer Community Interface", "Coordination with City Thana"],
    contactOrTiming: "Emergency: 15 (24/7)"
  },

  // ===================== REAL ESTATE & HERITAGE =====================
  {
    id: "siddhu-property-hq",
    name: "SIDDHU Property Advisor Head Office",
    category: "Real Estate",
    subCategory: "Trusted Real Estate Advisory",
    locality: "Hayat Abad",
    roadAddress: "Street 08, Tower Road Side, Hayat Abad, Chichawatni",
    lat: 30.5285,
    lng: 72.6840,
    distanceFromCenter: "1.6 km from City Center",
    usefulness: "Consultation office of Naeem Siddhu. The trusted hub for on-ground site inspections, private family home discovery, ownership fard checks, and direct deal execution.",
    highlights: ["Naeem Siddhu Personal Consultation", "Genuine Residential Inventory", "PLRA Guidance Support", "Tea & In-Person Client Hospitality"],
    contactOrTiming: "Mon – Sat: 9:00 AM – 8:00 PM (Appointments Preferred)"
  },
  {
    id: "chichawatni-galla-mandi",
    name: "Galla Mandi (Grain & Agro Trade Center)",
    category: "Services",
    subCategory: "Agricultural Commercial Trading Center",
    locality: "Galla Mandi Quarter",
    roadAddress: "Railway Road, Chichawatni",
    lat: 30.5335,
    lng: 72.6960,
    distanceFromCenter: "0.3 km from City Center",
    usefulness: "One of the most famous agricultural trading markets in Punjab, driving commercial prosperity and high rental yields for commercial property investors.",
    highlights: ["Asia's Famous Agro Trading Hub", "Wheat, Cotton & Corn Markets", "High Commercial Shop Yields", "Economic Heart of Chichawatni"],
    contactOrTiming: "Early Morning (6:00 AM – 4:00 PM)"
  },
  {
    id: "chichawatni-railway-station",
    name: "Chichawatni Railway Station (Est. 1865)",
    category: "Services",
    subCategory: "Historic Transit Terminal",
    locality: "Station Bazaar",
    roadAddress: "Station Road, Chichawatni",
    lat: 30.5310,
    lng: 72.7015,
    distanceFromCenter: "0.9 km from City Center",
    usefulness: "Historic British-era railway station along the Karachi–Peshawar Main Line (ML-1), facilitating intercity passenger rail connectivity.",
    highlights: ["Built in 1865", "Direct Express Train Stops", "Historic Brick Architecture", "Anchor of Old Chichawatni Commerce"],
    contactOrTiming: "24/7 Rail Transit Services"
  },
  {
    id: "chichawatni-national-forest",
    name: "Chichawatni Irrigated Forest Reserve (1913)",
    category: "Services",
    subCategory: "Historic National Forest",
    locality: "Forest Estate",
    roadAddress: "Forest Link Road, Chichawatni",
    lat: 30.5410,
    lng: 72.6780,
    distanceFromCenter: "2.4 km from City Center",
    usefulness: "An 11,530-acre historic irrigated man-made forest planted in 1913. Known for eucalyptus and shisham groves, birdlife, and environmental cooling.",
    highlights: ["Established in 1913", "11,530 Acres Plantation", "Natural Green Buffer Zone", "Historical Landmark of Tehsil"],
    contactOrTiming: "Open Daily (Sunrise – Sunset)"
  }
];
