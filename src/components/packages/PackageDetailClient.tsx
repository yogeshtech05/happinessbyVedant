"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PackageVisual } from "@/components/ui/PackageVisual";
import { useCart } from "@/hooks/use-cart";
import { PackageItem, SelectedAddon } from "@/types";
import {
  StarIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  HeartIcon,
  ArrowRightIcon,
  UserIcon,
  PlusIcon,
  MinusIcon,
} from "@/components/ui/Icons";
import { formatPrice } from "@/lib/utils";

interface PackageDetailClientProps {
  pkg: PackageItem;
}

export const PackageDetailClient: React.FC<PackageDetailClientProps> = ({
  pkg,
}) => {
  const router = useRouter();
  const { addToCart } = useCart();

  const [selectedAddons, setSelectedAddons] = useState<SelectedAddon[]>([]);
  const [recipientName, setRecipientName] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState(
    "Evening Slot (5:00 PM - 8:00 PM)"
  );
  const [quantity, setQuantity] = useState(1);

  // Toggle addon
  const handleToggleAddon = (addon: { id: string; name: string; price: number }) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      } else {
        return [...prev, { id: addon.id, name: addon.name, price: addon.price }];
      }
    });
  };

  const addonsTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0);
  const unitPrice = pkg.price + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = (proceedToCart = false) => {
    addToCart({
      packageId: pkg.id,
      slug: pkg.slug,
      title: pkg.title,
      price: pkg.price,
      imageTheme: pkg.imageTheme,
      visualIcon: pkg.visualIcon,
      image: pkg.image,
      selectedAddons,
      recipientName,
      customMessage,
      deliveryDate,
      deliveryTimeSlot,
      quantity,
    });
    if (proceedToCart) {
      router.push("/cart");
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#FFFDF9]">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-rose-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/packages" className="hover:text-rose-600">
            Packages
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-[200px]">{pkg.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Visual & Detail Specs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Visual Header */}
            <PackageVisual
              theme={pkg.imageTheme}
              title={pkg.title}
              badge={pkg.badge}
              size="lg"
              imageSrc={pkg.image}
            />

            {/* Inclusions Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-5 sm:space-y-6">
              <div className="border-b border-rose-50 pb-3 sm:pb-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  What&apos;s Included in this Experience
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Every item is prepared with extreme care and delivered by our trained female presenter.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {pkg.inclusions.map((inclusion, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-rose-50/40 border border-rose-100/60 flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-800"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 text-xs mt-0.5 shadow-xs">
                      ✓
                    </div>
                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Experience Add-ons */}
            {pkg.addons && pkg.addons.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                    Enhance Your Surprise (Optional Add-ons)
                  </h2>
                  <span className="text-xs text-rose-600 font-semibold shrink-0">
                    Select to Add
                  </span>
                </div>

                <div className="space-y-3">
                  {pkg.addons.map((addon) => {
                    const isSelected = selectedAddons.some(
                      (a) => a.id === addon.id
                    );
                    return (
                      <div
                        key={addon.id}
                        onClick={() => handleToggleAddon(addon)}
                        className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 sm:gap-4 ${
                          isSelected
                            ? "bg-rose-50/80 border-rose-400 shadow-xs"
                            : "bg-white border-slate-200 hover:border-rose-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 shrink-0 ${
                              isSelected
                                ? "bg-rose-600 border-rose-600 text-white"
                                : "border-slate-300 bg-white"
                            }`}
                          >
                            {isSelected && <CheckIcon size={14} />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                              {addon.name}
                            </h3>
                            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                              {addon.description}
                            </p>
                          </div>
                        </div>
                        <span className="font-serif font-bold text-xs sm:text-sm text-slate-900 shrink-0">
                          +{formatPrice(addon.price)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Booking & Customization Card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-xl space-y-5 sm:space-y-6">
              {/* Header Title & Price */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60">
                    {pkg.occasionLabel}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <StarIcon size={14} />
                    <span>{pkg.rating}</span>
                    <span className="text-slate-400 font-normal">
                      ({pkg.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {pkg.title}
                </h1>
                <p className="text-xs text-slate-600 mt-1 italic font-serif">
                  &quot;{pkg.tagline}&quot;
                </p>

                <div className="mt-4 pt-4 border-t border-rose-50 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Package Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {formatPrice(totalPrice)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-xs sm:text-sm text-slate-400 line-through">
                          {formatPrice((pkg.originalPrice + addonsTotal) * quantity)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 font-medium flex items-center gap-1 bg-slate-100 px-2.5 sm:px-3 py-1.5 rounded-full">
                    <ClockIcon size={14} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
              </div>

              {/* Booking Customization Form */}
              <div className="space-y-4 pt-2 border-t border-rose-50">
                <h3 className="font-serif text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <UserIcon size={16} className="text-rose-600" />
                  <span>Customize Your Surprise Details</span>
                </h3>

                {/* Recipient Name */}
                <div>
                  <label htmlFor="recipientName" className="block text-xs font-semibold text-slate-700 mb-1">
                    Recipient Name
                  </label>
                  <input
                    id="recipientName"
                    type="text"
                    placeholder="e.g. Mom & Dad / Rahul / Priya"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                  />
                </div>

                {/* Custom Message for Presenter to read */}
                <div>
                  <label htmlFor="customMessage" className="block text-xs font-semibold text-slate-700 mb-1">
                    Emotional Message for Host to Read Aloud
                  </label>
                  <textarea
                    id="customMessage"
                    rows={3}
                    placeholder="Write a message or scroll note you want our presenter to read aloud..."
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                  />
                </div>

                {/* Delivery Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="deliveryDate" className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      id="deliveryDate"
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full px-3 py-3 sm:py-2 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryTimeSlot" className="block text-xs font-semibold text-slate-700 mb-1">
                      Time Slot
                    </label>
                    <select
                      id="deliveryTimeSlot"
                      value={deliveryTimeSlot}
                      onChange={(e) => setDeliveryTimeSlot(e.target.value)}
                      className="w-full px-3 py-3 sm:py-2 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    >
                      <option value="Morning Slot (9:00 AM - 12:00 PM)">
                        Morning (9 AM - 12 PM)
                      </option>
                      <option value="Afternoon Slot (1:00 PM - 4:00 PM)">
                        Afternoon (1 PM - 4 PM)
                      </option>
                      <option value="Evening Slot (5:00 PM - 8:00 PM)">
                        Evening (5 PM - 8 PM)
                      </option>
                      <option value="Midnight Surprise Slot (11:55 PM - 12:15 AM)">
                        Midnight 12:00 AM Slot
                      </option>
                    </select>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-slate-700">
                    Surprise Experiences Quantity
                  </span>
                  <div className="flex items-center gap-3 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200/60">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-slate-600 hover:text-rose-600 min-h-[36px] min-w-[36px] flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <MinusIcon size={14} />
                    </button>
                    <span className="font-bold text-xs text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-slate-600 hover:text-rose-600 min-h-[36px] min-w-[36px] flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      <PlusIcon size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => handleAddToCart(false)}
                  className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm shadow-lg shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <HeartIcon size={18} className="fill-white" />
                  <span>Add to Surprise Cart</span>
                </button>
                <button
                  onClick={() => handleAddToCart(true)}
                  className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <span>Book & Proceed to Checkout</span>
                  <ArrowRightIcon size={14} />
                </button>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-rose-50 space-y-2 text-[11px] text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon size={16} className="text-rose-600 shrink-0" />
                  <span>Verified Female Presenter on every delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon size={16} className="text-rose-600 shrink-0" />
                  <span>100% On-time doorstep arrival guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
