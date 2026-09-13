export type ListingType = 'sale' | 'rent';

export type PropertyType = 'דירה' | 'דירת גג' | 'בית פרטי' | 'דופלקס' | 'פנטהאוז' | 'דירת גן';

export type PropertyStatus = 'חדש בשוק' | 'למכירה' | 'בהשכרה' | 'בתהליך מכירה' | 'עסקה נחתמה';

export interface Agent {
  id: string;
  name: string;
  role: string;
  quote: string;
  bio: string;
  experienceYears: number;
  specialty: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  photo: string;
}

export interface NearbyPlace {
  label: string;
  distance: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  city: string;
  neighborhood: string;
  listingType: ListingType;
  price: number;
  type: PropertyType;
  rooms: number;
  area: number;
  floor: number;
  totalFloors: number;
  parking: number;
  balcony: number | null;
  safeRoom: boolean;
  elevator: boolean;
  storage: boolean;
  airConditioning: boolean;
  upgradedKitchen: boolean;
  openView: boolean;
  status: PropertyStatus;
  featured: boolean;
  yearBuilt: number;
  description: string[];
  images: string[];
  nearby: NearbyPlace[];
  agentId: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  city: string;
}

export interface City {
  id: string;
  name: string;
  description: string;
  propertyCount: number;
  image: string;
}
