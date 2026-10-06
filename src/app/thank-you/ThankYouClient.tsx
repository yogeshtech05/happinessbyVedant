"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "@/types";
import {
  CheckIcon,
  SparklesIcon,
  WhatsAppIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  UserIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@/components/ui/Icons";
import { formatPrice } from "@/lib/utils";
import { SITE_CONFIG } from "@/config/site";

export default function ThankYouClient() {
  const { lastOrder } = useCart();

  const demoOrder = lastOrder || {
    orderId: "HDG-892415",
    customerName: "Rahul Sharma",
    customerPhone: "+91 98765 43210",
    recipientName: "Priya Sharma",
    deliveryAddress: "Flat 402, Sunshine Heights, Bandra West",
    city: "Mumbai",
    pincode: "400050",
    deliveryDate: "Tomorrow",
    deliveryTimeSlot: "Evening Slot (5:00 PM - 8:00 PM)",
    presenterNote: "Please ring door bell twice and start background song.",
    items: [
      {
        packageId: "pkg-anniversary-surprise",
        slug: "anniversary-surprise",
        title: "Anniversary Surprise",
        price: 2499,
        quantity: 1,
        totalPrice: 2499,
        imageTheme: "rose" as const,
        visualIcon: "Heart",
        selectedAddons: [
          { id: "addon-photo", name: "HD Photography & Video Highlights", price: 999 },
        ],
      },
    ],
    subtotal: 2499,
    addonsTotal: 999,
    totalAmount: 3498,
    createdAt: new Date().toLocaleString("en-IN"),
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I just placed a surprise order on your website. Order ID: ${demoOrder.orderId} for ${demoOrder.recipientName}. Can you confirm my delivery slot?`
  );

  return (
    <div className="pt-28 pb-20 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Success Header Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-xl text-center space-y-6 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl pointer-events-none -mt-20" />

          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center font-bold shadow-xl shadow-rose-500/25 animate-scale-in">
            <CheckIcon size={40} />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-rose-50 text-rose-700 border border-rose-200">
              <SparklesIcon size={14} className="text-amber-500" />
              Surprise Booking Confirmed
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Thank You, {demoOrder.customerName}!
            </h1>
            <p className="text-base text-slate-600 max-w-lg mx-auto font-sans">
              Your surprise booking has been assigned to our senior presenter team. We are excited to deliver pure joy!
            </p>
          </div>

          <div className="inline-block px-6 py-2.5 rounded-2xl bg-slate-900 text-white font-mono text-sm font-bold shadow-md">
            Order ID: <span className="text-amber-300">{demoOrder.orderId}</span>
          </div>
        </div>

        {/* Delivery Details Card */}
        <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm space-y-6">
          <h2 className="font-serif text-xl font-bold text-slate-900 border-b border-rose-50 pb-3 flex items-center gap-2">
            <HeartIcon size={20} className="text-rose-600 fill-rose-600" />
            <span>Surprise Delivery Schedule & Location</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <UserIcon size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    Recipient
                  </span>
                  <span className="font-semibold text-slate-900">
                    {demoOrder.recipientName}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CalendarIcon size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    Scheduled Date
                  </span>
                  <span className="font-semibold text-slate-900">
                    {demoOrder.deliveryDate}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    Time Slot
                  </span>
                  <span className="font-semibold text-slate-900">
                    {demoOrder.deliveryTimeSlot}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon size={18} className="text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    Doorstep Address
                  </span>
                  <span className="font-medium text-slate-800 leading-relaxed block">
                    {demoOrder.deliveryAddress}, {demoOrder.city} - {demoOrder.pincode}
                  </span>
                </div>
              </div>

              {demoOrder.presenterNote && (
                <div className="p-3 rounded-2xl bg-rose-50/60 border border-rose-100 text-xs">
                  <span className="font-bold text-rose-800 block">
                    Presenter Instructions:
                  </span>
                  <p className="text-slate-700 italic mt-0.5">
                    &quot;{demoOrder.presenterNote}&quot;
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Items Summary Table */}
          <div className="pt-4 border-t border-rose-50 space-y-3">
            <h3 className="font-serif font-bold text-slate-900 text-sm">
              Surprise Experience Summary
            </h3>

            {demoOrder.items.map((item: CartItem, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-slate-900 text-sm block">
                    {item.title} (x{item.quantity})
                  </span>
                  {item.selectedAddons && item.selectedAddons.length > 0 && (
                    <p className="text-slate-500 mt-0.5">
                      Add-ons: {item.selectedAddons.map((a) => a.name).join(", ")}
                    </p>
                  )}
                </div>
                <span className="font-serif font-bold text-slate-900 text-base">
                  {formatPrice(item.totalPrice)}
                </span>
              </div>
            ))}

            <div className="pt-2 flex justify-between items-baseline text-slate-900">
              <span className="font-serif text-base font-bold">Total Paid</span>
              <span className="font-serif text-2xl font-extrabold text-rose-600">
                {formatPrice(demoOrder.totalAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Progress Timeline */}
        <div className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm space-y-6">
          <h2 className="font-serif text-xl font-bold text-slate-900 text-center">
            Surprise Fulfillment Steps
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
              <span className="w-6 h-6 mx-auto rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                ✓
              </span>
              <h3 className="font-bold text-slate-900 text-xs">1. Confirmed</h3>
              <p className="text-[10px] text-slate-500">Order logged</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center space-y-1">
              <span className="w-6 h-6 mx-auto rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-slate-900 text-xs">2. Host Assigned</h3>
              <p className="text-[10px] text-slate-500">Cake baking & florals</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 opacity-70">
              <span className="w-6 h-6 mx-auto rounded-full bg-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-slate-900 text-xs">3. Host En-Route</h3>
              <p className="text-[10px] text-slate-500">Doorstep setup</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1 opacity-70">
              <span className="w-6 h-6 mx-auto rounded-full bg-slate-300 text-slate-700 text-xs font-bold flex items-center justify-center">
                4
              </span>
              <h3 className="font-bold text-slate-900 text-xs">4. Memory Made</h3>
              <p className="text-[10px] text-slate-500">Happy tears!</p>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.phoneClean}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <WhatsAppIcon size={18} />
            <span>Track Order & Chat on WhatsApp</span>
          </a>

          <Link
            href="/packages"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs shadow-md transition-all text-center flex items-center justify-center gap-2"
          >
            <span>Book Another Surprise</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
