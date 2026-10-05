import React from "react";
import Link from "next/link";
import { PACKAGES } from "@/data/packages";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/Icons";

export const FeaturedPackagesSection: React.FC = () => {
  const featuredPackages = PACKAGES.filter((p) => p.featured);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          badge="Featured Surprise Packages"
          title="Most Loved Doorstep Experiences"
          subtitle="Hand-curated surprise arrangements loved by hundreds of happy families and couples across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.id} packageItem={pkg} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-rose-600 text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300"
          >
            <span>View All Surprise Packages</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
