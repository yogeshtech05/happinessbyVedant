import React from "react";
import Link from "next/link";
import { OccasionCategory } from "@/types";
import { DynamicIcon, ChevronRightIcon } from "./Icons";

interface OccasionCardProps {
  occasion: OccasionCategory;
}

export const OccasionCard: React.FC<OccasionCardProps> = ({ occasion }) => {
  return (
    <Link
      href={`/packages?category=${occasion.id}`}
      className="group relative bg-white rounded-3xl p-6 border border-rose-100/80 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Gradient Accent */}
      <div
        className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${occasion.gradient} rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500`}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200/60 shadow-xs group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
            <DynamicIcon name={occasion.icon} size={28} />
          </div>
          <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            {occasion.packageCount} Packages
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
          {occasion.name}
        </h3>
        <p className="text-slate-600 text-xs mt-1 leading-relaxed">
          {occasion.tagline}
        </p>
      </div>

      <div className="relative z-10 mt-6 pt-4 border-t border-rose-50 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-rose-600">
        <span>Explore Occasion</span>
        <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
          <ChevronRightIcon size={16} />
        </div>
      </div>
    </Link>
  );
};
