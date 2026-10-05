export type OccasionType =
  | "birthday"
  | "anniversary"
  | "parents"
  | "romantic"
  | "congratulations"
  | "festivals";

export type SortOption = "popular" | "price-asc" | "price-desc" | "rating";

export interface PackageAddon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface PackageFeature {
  title: string;
  included: boolean;
}

export interface PackageItem {
  id: string;
  slug: string;
  title: string;
  name?: string; // Backwards compatible / future API field
  occasion: OccasionType;
  occasionLabel: string;
  category?: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  compareAtPrice?: number; // E-commerce standard field
  rating: number;
  reviewCount: number;
  popular?: boolean;
  featured?: boolean;
  isFeatured?: boolean;
  isActive?: boolean;
  badge?: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  features?: PackageFeature[];
  addons: PackageAddon[];
  duration: string;
  imageTheme: "pink" | "gold" | "rose" | "plum" | "amber" | "emerald";
  visualIcon: string;
  image?: string; // Future Cloudinary/S3 image URL placeholder
}

export interface OccasionCategory {
  id: OccasionType;
  name: string;
  tagline: string;
  icon: string;
  packageCount: number;
  gradient: string;
  accentColor: string;
}
