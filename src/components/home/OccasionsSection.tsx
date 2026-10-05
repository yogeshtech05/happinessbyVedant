import React from "react";
import { OCCASIONS } from "@/data/occasions";
import { OccasionCard } from "@/components/ui/OccasionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const OccasionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF9] via-rose-50/30 to-[#FFFDF9]">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          badge="Occasions We Celebrate"
          title="Crafted for Every Heartfelt Moment"
          subtitle="Whether it's honoring your parents or surprising your soulmate at midnight, choose the perfect occasion."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {OCCASIONS.map((occasion) => (
            <OccasionCard key={occasion.id} occasion={occasion} />
          ))}
        </div>
      </div>
    </section>
  );
};
