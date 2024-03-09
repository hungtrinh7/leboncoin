export interface User {
  id: number;
  createdAt: string;
  username: string;
  number_reviews: number;
  rating: number;
}

export interface Product {
  id: number;
  created_at: string;
  url_img: string;
  name: string;
  price: number;
  category_id: number;
  category: Category;
  users: User;
  user_id: number;
  is_deliverable: boolean;
  address_city: string;
  address_postal_code: string;
  address_department: string;
  address_region: string;
  has_price_decreased: boolean;
  is_professional: boolean;
  is_urgent: boolean;
  description: string;
  condition: string;
}

export interface Category {
  id: number;
  createdAt: string;
  name: string;
  slug: string;
}
