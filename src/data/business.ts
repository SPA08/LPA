export interface BusinessConfig {
  name: string;
  tagline: string;
  advisor: string;
  role: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  email: string;
  website: string;
  address: {
    street: string;
    locality: string;
    city: string;
    postalCode: string;
    province: string;
    country: string;
    full: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleBusinessProfileUrl: string;
  facebookUrl: string;
  primaryServiceArea: string;
  servicedAreas: string[];
}

export const business: BusinessConfig = {
  name: "SIDDHU Property Advisor",
  tagline: "Premier Real Estate Discovery & Local Property Intelligence",
  advisor: "Naeem Siddhu",
  role: "Real Estate Consultant & Property Advisor",
  phone: "+92 306 3996764",
  phoneFormatted: "0306 3996764",
  whatsappUrl: "https://wa.me/923063996764",
  email: "info@siddhupropertyadvisor.com",
  website: "https://siddhupropertyadvisor.com",
  address: {
    street: "Street 08, Tower Road Side",
    locality: "Hayat Abad",
    city: "Chichawatni",
    postalCode: "57200",
    province: "Punjab",
    country: "Pakistan",
    full: "Street 08, Tower Road Side, Hayat Abad, Chichawatni 57200, Punjab, Pakistan"
  },
  coordinates: {
    lat: 30.5285,
    lng: 72.6840
  },
  googleBusinessProfileUrl: "https://share.google/5G7IngokIthbGIoyP",
  facebookUrl: "https://www.facebook.com/share/19Z3Dr6N2e/?mibextid=wwXIfr",
  primaryServiceArea: "Chichawatni",
  servicedAreas: [
    "Chichawatni",
    "Sahiwal",
    "Kamalia",
    "Kassowal",
    "Harappa",
    "Mian Channu",
    "Burewala"
  ]
};
