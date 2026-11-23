import { OCCASIONS as FALLBACK_OCCASIONS } from "@/data/occasions";
import { TESTIMONIALS as FALLBACK_TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import type { OccasionCategory, PackageItem } from "@/types";

const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000").replace(/\/$/, "");

type StorefrontSummaryResponse = {
  success: boolean;
  data?: {
    packages?: PackageItem[];
    categories?: Array<{
      id: string;
      name: string;
      slug: string;
      tagline?: string | null;
      icon?: string | null;
      packageCount?: number;
      gradient?: string | null;
      accentColor?: string | null;
    }>;
    reviews?: Array<{
      id: string;
      customerName: string;
      rating: number;
      reviewText: string;
      title?: string | null;
      packageName?: string | null;
    }>;
  };
};

export async function getStorefrontSummary(): Promise<{
  categories: OccasionCategory[];
  testimonials: Testimonial[];
}> {
  try {
    const response = await fetch(`${API_URL}/api/storefront/summary`, {
      next: { revalidate: 60, tags: ["storefront"] },
    });
    const payload = (await response.json()) as StorefrontSummaryResponse;
    if (!response.ok || !payload.success || !payload.data) throw new Error("Invalid storefront summary");

    return {
      categories: FALLBACK_OCCASIONS.map((occasion) => ({
        ...occasion,
        packageCount: (payload.data?.packages ?? []).filter(
          (pkg) => pkg.occasion === occasion.id,
        ).length,
      })),
      testimonials: (payload.data.reviews ?? []).map((review) => ({
        id: review.id,
        name: review.customerName,
        role: review.packageName ?? "Verified Happiness Deliver customer",
        quote: review.reviewText,
        rating: Number(review.rating),
        location: "India",
        occasion: review.title ?? "Customer Story",
        date: "Verified review",
      })),
    };
  } catch {
    return { categories: FALLBACK_OCCASIONS, testimonials: FALLBACK_TESTIMONIALS };
  }
}
