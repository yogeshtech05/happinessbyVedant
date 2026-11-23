import { PACKAGES as FALLBACK_PACKAGES } from "@/data/packages";
import type { PackageItem } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";
const REVALIDATE_SECONDS = 60;

/**
 * Loads active packages from the backend (`GET /api/storefront/summary`).
 * Falls back to the bundled static catalogue if the API is unreachable so the
 * storefront never renders empty.
 */
export async function getPackages(): Promise<PackageItem[]> {
  try {
    const res = await fetch(`${API_URL}/api/storefront/summary`, {
      next: { revalidate: REVALIDATE_SECONDS, tags: ["packages"] },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as {
      success: boolean;
      data?: { packages?: PackageItem[] };
    };
    const packages = json.data?.packages;
    if (!json.success || !Array.isArray(packages)) {
      throw new Error("Malformed storefront summary");
    }
    return packages.map(normalizePackage);
  } catch (err) {
    console.warn("[storefront] Using fallback packages:", (err as Error).message);
    return FALLBACK_PACKAGES;
  }
}

export async function getPackageBySlug(slug: string): Promise<PackageItem | undefined> {
  const packages = await getPackages();
  return packages.find((p) => p.slug === slug);
}

function normalizePackage(p: PackageItem): PackageItem {
  return {
    ...p,
    price: Number(p.price),
    originalPrice: p.originalPrice != null ? Number(p.originalPrice) : undefined,
    compareAtPrice: p.compareAtPrice != null ? Number(p.compareAtPrice) : undefined,
    rating: Number(p.rating ?? 0),
    reviewCount: Number(p.reviewCount ?? 0),
    highlights: p.highlights ?? [],
    inclusions: p.inclusions ?? [],
    addons: p.addons ?? [],
    badge: p.badge ?? undefined,
    image: p.image ?? undefined,
  };
}
