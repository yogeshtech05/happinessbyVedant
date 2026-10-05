import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PACKAGES } from "@/data/packages";
import { PackageDetailClient } from "@/components/packages/PackageDetailClient";
import { JsonLd } from "@/components/common/JsonLd";
import { SITE_CONFIG } from "@/config/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    return {
      title: `Package Not Found | ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${pkg.title} | ${SITE_CONFIG.name}`,
    description: pkg.shortDescription,
    openGraph: {
      title: `${pkg.title} - ${SITE_CONFIG.name}`,
      description: pkg.shortDescription,
      url: `${SITE_CONFIG.url}/packages/${pkg.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} | ${SITE_CONFIG.name}`,
      description: pkg.shortDescription,
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = PACKAGES.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: pkg.title,
    description: pkg.description,
    brand: {
      "@type": "Brand",
      name: SITE_CONFIG.name,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: pkg.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SITE_CONFIG.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: pkg.rating.toString(),
      reviewCount: pkg.reviewCount.toString(),
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <PackageDetailClient pkg={pkg} />
    </>
  );
}
