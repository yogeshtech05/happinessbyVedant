import { Metadata } from "next";
import { Suspense } from "react";
import { PackageCatalog } from "@/components/packages/PackageCatalog";
import { LoadingSkeleton } from "@/components/common/LoadingSkeleton";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `Surprise Packages & Experiences | ${SITE_CONFIG.name}`,
  description:
    "Explore our complete collection of doorstep surprise packages for birthdays, anniversaries, parents, and romantic occasions. Includes trained female presenter, customized cake, and fresh flowers.",
  openGraph: {
    title: `Surprise Packages & Experiences | ${SITE_CONFIG.name}`,
    description:
      "Explore handcrafted doorstep surprise packages for birthdays, anniversaries, parents, and romantic dates.",
    url: `${SITE_CONFIG.url}/packages`,
  },
};

export default function PackagesPage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <PackageCatalog />
    </Suspense>
  );
}
