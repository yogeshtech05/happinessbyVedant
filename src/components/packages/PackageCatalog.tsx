"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PACKAGES } from "@/data/packages";
import { OCCASIONS } from "@/data/occasions";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SearchIcon, SlidersHorizontalIcon, SparklesIcon } from "@/components/ui/Icons";
import { OccasionType, SortOption } from "@/types";

export function PackageCatalog() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as OccasionType) || "all";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(5000);
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((pkg) => {
      // Category filter
      if (selectedCategory !== "all" && pkg.occasion !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesTitle = pkg.title.toLowerCase().includes(q);
        const matchesDesc = pkg.shortDescription.toLowerCase().includes(q);
        const matchesTagline = pkg.tagline.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesTagline) return false;
      }
      // Price filter
      if (pkg.price > maxPrice) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      // Default: popular / featured first
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, maxPrice, sortBy]);

  return (
    <div className="pt-28 pb-20 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Page Header */}
        <SectionHeading
          badge="Complete Collection"
          title="All Surprise Packages"
          subtitle="Explore our handcrafted surprise experiences. Every package includes a trained female presenter, customized cake, fresh flowers, and emotional card."
        />

        {/* Filters & Search Control Bar */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-md mb-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <SearchIcon
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search by package name, cake, flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-rose-50/50 border border-rose-200/60 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
              />
            </div>

            {/* Price Filter Slider */}
            <div className="md:col-span-3 space-y-1">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Max Budget:</span>
                <span className="text-rose-600 font-bold">
                  ₹{maxPrice.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="5000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 flex items-center gap-2">
              <SlidersHorizontalIcon size={18} className="text-slate-500 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full py-3 px-3 rounded-2xl bg-rose-50/50 border border-rose-200/60 text-base sm:text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500/40 cursor-pointer"
              >
                <option value="popular">Sort by: Featured & Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Occasion Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-rose-50">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-950 text-white shadow-md"
                  : "bg-rose-50 text-slate-700 hover:bg-rose-100"
              }`}
            >
              All Occasions ({PACKAGES.length})
            </button>
            {OCCASIONS.map((occ) => (
              <button
                key={occ.id}
                onClick={() => setSelectedCategory(occ.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === occ.id
                    ? "bg-rose-600 text-white shadow-md"
                    : "bg-rose-50 text-slate-700 hover:bg-rose-100"
                }`}
              >
                {occ.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} packageItem={pkg} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-rose-100 space-y-4 max-w-md mx-auto my-12">
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
              <SparklesIcon size={32} />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              No packages match your filters
            </h3>
            <p className="text-xs text-slate-500">
              Try adjusting your max budget or clear the search query to explore all available surprise experiences.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setMaxPrice(5000);
              }}
              className="px-6 py-2.5 rounded-full bg-rose-600 text-white text-xs font-semibold shadow-md hover:bg-rose-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
