"use client";

import React from "react";
import Link from "next/link";
import { PackageItem } from "@/types";
import { PackageVisual } from "./PackageVisual";
import { StarIcon, ArrowRightIcon, CheckIcon } from "./Icons";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";

interface PackageCardProps {
  packageItem: PackageItem;
}

export const PackageCard: React.FC<PackageCardProps> = ({ packageItem }) => {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      packageId: packageItem.id,
      slug: packageItem.slug,
      title: packageItem.title,
      price: packageItem.price,
      imageTheme: packageItem.imageTheme,
      visualIcon: packageItem.visualIcon,
      selectedAddons: [],
    });
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-rose-100/80 shadow-md hover:shadow-2xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Visual Graphic Header */}
        <Link href={`/packages/${packageItem.slug}`} className="block relative">
          <PackageVisual
            theme={packageItem.imageTheme}
            title={packageItem.title}
            badge={packageItem.badge}
            size="md"
          />
        </Link>

        {/* Card Content */}
        <div className="p-6">
          {/* Category Tag & Rating */}
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/50">
              {packageItem.occasionLabel}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-semibold text-sm">
              <StarIcon size={16} />
              <span className="text-slate-900">{packageItem.rating}</span>
              <span className="text-slate-400 font-normal text-xs">
                ({packageItem.reviewCount})
              </span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/packages/${packageItem.slug}`} className="block group">
            <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
              {packageItem.title}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
            {packageItem.shortDescription}
          </p>

          {/* Key Inclusions snippet */}
          <div className="mt-4 pt-4 border-t border-rose-50 space-y-2">
            {packageItem.highlights.slice(0, 3).map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-700"
              >
                <span className="mt-0.5 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckIcon size={12} />
                </span>
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with Price & Actions */}
      <div className="p-6 pt-0">
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-500 font-medium block">
              Starting from
            </span>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl font-bold text-slate-900">
                {formatPrice(packageItem.price)}
              </span>
              {packageItem.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formatPrice(packageItem.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickAdd}
              className="px-3.5 py-2.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold text-xs transition-colors border border-rose-200/60"
              title="Quick Add to Cart"
              aria-label={`Add ${packageItem.title} to cart`}
            >
              + Add
            </button>
            <Link
              href={`/packages/${packageItem.slug}`}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-rose-600 text-white font-medium text-xs transition-colors flex items-center gap-1 shadow-sm"
              aria-label={`View details for ${packageItem.title}`}
            >
              <span>Details</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
