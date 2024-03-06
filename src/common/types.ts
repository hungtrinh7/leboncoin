export interface User {
  id: number;
  createdAt: string;
  username: string;
  numberReviews: number;
  rating: number;
}

export interface Product {
  id: number;
  createdAt: string;
  urlImg: string;
  name: string;
  price: number;
  category: Category;
  user: User;
  isDeliverable: boolean;
  addressCity: string;
  addressPostalCode: string;
  addressDepartment: string;
  addressRegion: string;
  hasPriceDecreased: boolean;
  isProfessional: boolean;
  isUrgent: boolean;
  description: string;
  condition: string;
}

export interface Category {
  id: number;
  createdAt: string;
  name: string;
  slug: string;
}
