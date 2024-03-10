export interface User {
  id: number;
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
  categories: Category;
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
  name: string;
  slug: string;
}

export interface UserProduct {
  id: number;
  user_id: number;
  product_id: number;
  is_favorited: boolean;
  products: Product;
}

export interface Job {
  id: number;
  created_at: Date;
  img_url: string;
  title: string;
  salary: number;
  salary_frequency: string;
  type_contract: string;
  is_app_simplified: boolean;
  address_city: string;
  address_postal_code: string;
  name_recruiter: string;
  is_new: boolean;
}
