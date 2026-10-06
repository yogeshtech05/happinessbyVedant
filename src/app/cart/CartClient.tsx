"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { PackageVisual } from "@/components/ui/PackageVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Trash2Icon,
  PlusIcon,
  MinusIcon,
  ArrowRightIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { formatPrice } from "@/lib/utils";
import { PROMO_CODES } from "@/lib/constants";

export default function CartClient() {
  const { cart, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setPromoApplied(true);
      setDiscountAmount(PROMO_CODES[code]);
    } else if (code.length > 0) {
      alert("Invalid promo code. Try 'HAPPINESS100' for ₹500 off!");
    }
  };

  const finalTotal = Math.max(0, subtotal - discountAmount);

  return (
    <div className="pt-28 pb-20 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          badge="Your Emotional Surprises"
          title="Surprise Cart"
          subtitle="Review your selected packages, customized presenter notes, and delivery slots."
        />

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-rose-100 max-w-md mx-auto space-y-5 shadow-sm">
            <div className="w-20 h-20 mx-auto rounded-full bg-rose-50 text-rose-500 flex items-center justify-center">
              <HeartIcon size={40} className="animate-pulse" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              Your surprise cart is empty
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              You haven&apos;t added any surprise experiences yet. Start exploring our curated packages for birthdays, anniversaries, and parents!
            </p>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Surprise Packages</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm flex flex-col sm:flex-row gap-6 relative"
                >
                  {/* Visual Graphic Thumbnail */}
                  <div className="w-full sm:w-48 shrink-0">
                    <PackageVisual
                      theme={item.imageTheme}
                      title={item.title}
                      size="sm"
                      imageSrc={item.image}
                    />
                  </div>

                  {/* Content & Options */}
                  <div className="flex-grow space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          href={`/packages/${item.slug}`}
                          className="font-serif text-xl font-bold text-slate-900 hover:text-rose-600 transition-colors"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Base Package: {formatPrice(item.price)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        aria-label={`Remove ${item.title} from cart`}
                      >
                        <Trash2Icon size={18} />
                      </button>
                    </div>

                    {/* Selected Addons */}
                    {item.selectedAddons.length > 0 && (
                      <div className="p-3 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs space-y-1">
                        <span className="font-semibold text-rose-800 block">
                          Included Add-ons:
                        </span>
                        {item.selectedAddons.map((addon) => (
                          <div
                            key={addon.id}
                            className="flex items-center justify-between text-slate-700"
                          >
                            <span>+ {addon.name}</span>
                            <span className="font-bold">
                              {formatPrice(addon.price)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Custom Message & Recipient Info */}
                    {(item.recipientName || item.customMessage || item.deliveryDate) && (
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs space-y-1">
                        {item.recipientName && (
                          <p className="text-slate-800">
                            <span className="font-semibold">Recipient:</span>{" "}
                            {item.recipientName}
                          </p>
                        )}
                        {item.deliveryDate && (
                          <p className="text-slate-800">
                            <span className="font-semibold">Date & Slot:</span>{" "}
                            {item.deliveryDate} ({item.deliveryTimeSlot})
                          </p>
                        )}
                        {item.customMessage && (
                          <p className="text-slate-600 italic">
                            &quot;{item.customMessage}&quot;
                          </p>
                        )}
                      </div>
                    )}

                    {/* Quantity & Item Total */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200/60">
                        <button
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                          className="text-slate-600 hover:text-rose-600"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon size={14} />
                        </button>
                        <span className="font-bold text-xs text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                          className="text-slate-600 hover:text-rose-600"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon size={14} />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block">
                          Total
                        </span>
                        <span className="font-serif text-xl font-bold text-slate-900">
                          {formatPrice(item.totalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Summary & Promo */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-white rounded-3xl p-8 border border-rose-100 shadow-xl space-y-6">
                <h2 className="font-serif text-2xl font-bold text-slate-900 pb-4 border-b border-rose-50">
                  Surprise Order Summary
                </h2>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <label htmlFor="promoCodeInput" className="block text-xs font-semibold text-slate-700">
                    Have a Gift Promo Code? (Try: HAPPINESS100)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="promoCodeInput"
                      type="text"
                      placeholder="e.g. HAPPINESS100"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      className="w-full px-3 py-2 rounded-xl bg-rose-50/40 border border-rose-200 text-base sm:text-xs font-semibold uppercase text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                    <button
                      type="submit"
                      disabled={promoApplied}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 disabled:bg-slate-400 shrink-0"
                    >
                      {promoApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                      <SparklesIcon size={12} />
                      <span>{formatPrice(discountAmount)} Promo Discount Applied!</span>
                    </p>
                  )}
                </form>

                {/* Calculation Breakdown */}
                <div className="space-y-3 pt-2 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span>Packages Subtotal ({totalItems} items)</span>
                    <span className="font-semibold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doorstep Surprise Delivery</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Promo Discount</span>
                      <span className="font-bold">
                        -{formatPrice(discountAmount)}
                      </span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-rose-100 flex justify-between items-baseline text-slate-900">
                    <span className="font-serif text-base font-bold">
                      Grand Total
                    </span>
                    <span className="font-serif text-3xl font-extrabold text-rose-600">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <Link
                  href="/checkout"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm shadow-lg shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRightIcon size={16} />
                </Link>

                <div className="pt-2 text-[11px] text-slate-500 font-medium text-center space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <ShieldCheckIcon size={14} className="text-rose-600" />
                    <span>No advance payment needed during checkout demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
