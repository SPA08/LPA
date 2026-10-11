export interface ReviewItem {
  id: string;
  author: string;
  avatarInitial: string;
  avatarBg: string;
  rating: number;
  date: string;
  location: string;
  text: string;
  verifiedClient: boolean;
  source: "Google Business Profile" | "Direct Client Feedback";
}

export const reviews: ReviewItem[] = [
  {
    id: "rev-tariq",
    author: "Muhammad Tariq",
    avatarInitial: "M",
    avatarBg: "#9C27B0",
    rating: 5,
    date: "September 2026",
    location: "Model Town, Chichawatni",
    text: "Naeem Siddhu Sahab guided us through purchasing our house in Model Town Chichawatni with full property record checks. Honest communication throughout and completely transparent dealings.",
    verifiedClient: true,
    source: "Google Business Profile"
  },
  {
    id: "rev-sarfraz",
    author: "Sheikh Sarfraz",
    avatarInitial: "S",
    avatarBg: "#00BCD4",
    rating: 5,
    date: "August 2026",
    location: "Chichawatni",
    text: "Clear advice regarding society approval statuses in Chichawatni. Naeem Siddhu helped us avoid unverified schemes and find a genuine family home with clear revenue documents.",
    verifiedClient: true,
    source: "Google Business Profile"
  },
  {
    id: "rev-ali-raza",
    author: "Ali Raza Chaudhry",
    avatarInitial: "A",
    avatarBg: "#FF9800",
    rating: 5,
    date: "July 2026",
    location: "Hayat Abad, Chichawatni",
    text: "Completed a 5 Marla double story house purchase in Hayat Abad Tower Road. Site visit was well organized, seller meeting was direct, and all record checks were handled professionally.",
    verifiedClient: true,
    source: "Google Business Profile"
  },
  {
    id: "rev-aslam",
    author: "Chaudhry Aslam",
    avatarInitial: "C",
    avatarBg: "#4CAF50",
    rating: 5,
    date: "June 2026",
    location: "Housing Scheme, Chichawatni",
    text: "Very reliable property consultant in Chichawatni. Assisted our family with proper PLRA Fard verification before finalizing the agreement. Highly recommended for genuine buyers.",
    verifiedClient: true,
    source: "Google Business Profile"
  },
  {
    id: "rev-bilal",
    author: "Sheikh Bilal",
    avatarInitial: "B",
    avatarBg: "#3F51B5",
    rating: 5,
    date: "May 2026",
    location: "Gulshan-e-Iqbal, Chichawatni",
    text: "Excellent guidance for overseas buyers. My brother in Dubai coordinated through Naeem Siddhu via video call inspections and got full satisfaction on every detail.",
    verifiedClient: true,
    source: "Direct Client Feedback"
  }
];
