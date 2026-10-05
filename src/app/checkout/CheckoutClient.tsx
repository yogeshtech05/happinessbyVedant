"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OrderDetails } from "@/types";
import {
  HeartIcon,
  SparklesIcon,
  CheckIcon,
} from "@/components/ui/Icons";
import { formatPrice } from "@/lib/utils";

export default function CheckoutClient() {
  const router = useRouter();
  const { cart, subtotal, clearCart, setLastOrder } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [pincode, setPincode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTimeSlot, setDeliveryTimeSlot] = useState(
    "Evening Slot (5:00 PM - 8:00 PM)"
  );
  const [presenterNote, setPresenterNote] = useState("");
  const [includePhotography, setIncludePhotography] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="pt-36 pb-20 text-center space-y-4 max-w-md mx-auto px-4">
        <h1 className="font-serif text-3xl font-bold text-slate-900">
          Your Cart is Empty
        </h1>
        <p className="text-slate-600 text-sm">
          Please add a surprise package before proceeding to checkout.
        </p>
        <Link
          href="/packages"
          className="inline-block px-6 py-3 rounded-full bg-rose-600 text-white font-semibold text-xs shadow-md"
        >
          Browse Packages
        </Link>
      </div>
    );
  }

  const photographyFee = includePhotography ? 999 : 0;
  const grandTotal = subtotal + photographyFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const orderId = `HDG-${Math.floor(100000 + Math.random() * 900000)}`;

    const newOrder: OrderDetails = {
      orderId,
      customerName: customerName || "Valued Customer",
      customerEmail: customerEmail || "customer@example.com",
      customerPhone: customerPhone || "+91 98765 43210",
      recipientName: recipientName || "Surprise Recipient",
      recipientPhone: recipientPhone || customerPhone,
      deliveryAddress: deliveryAddress || "Recipient Doorstep Address",
      city,
      pincode: pincode || "400001",
      deliveryDate: deliveryDate || new Date().toISOString().split("T")[0],
      deliveryTimeSlot,
      presenterNote,
      items: cart,
      subtotal,
      addonsTotal: photographyFee,
      deliveryFee: 0,
      totalAmount: grandTotal,
      createdAt: new Date().toLocaleString("en-IN"),
    };

    setLastOrder(newOrder);
    clearCart();
    router.push("/thank-you");
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          badge="Final Booking Step"
          title="Checkout & Doorstep Booking"
          subtitle="Provide recipient address and presenter instructions to complete your surprise experience."
        />

        <form onSubmit={handlePlaceOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Left Column: Booking Form */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* Step 1: Your Details */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center font-sans font-bold">
                    1
                  </span>
                  <span>Your Contact Details (Booker)</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="customerName" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="customerPhone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Phone Number *
                    </label>
                    <input
                      id="customerPhone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="customerEmail" className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email Address
                    </label>
                    <input
                      id="customerEmail"
                      type="email"
                      placeholder="rahul@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Recipient & Delivery Address */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center font-sans font-bold">
                    2
                  </span>
                  <span>Recipient Doorstep Delivery Address</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="recipientNameCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                      Recipient Full Name *
                    </label>
                    <input
                      id="recipientNameCheckout"
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma / Mom & Dad"
                      value={recipientName}
                      onChange={(e) => setRecipientName(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="recipientPhoneCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                      Recipient Phone Number (For Host Coordination)
                    </label>
                    <input
                      id="recipientPhoneCheckout"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={recipientPhone}
                      onChange={(e) => setRecipientPhone(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="deliveryAddressCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                    Doorstep Delivery Address *
                  </label>
                  <textarea
                    id="deliveryAddressCheckout"
                    rows={2}
                    required
                    placeholder="Flat/House No., Building Name, Street, Landmark..."
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cityCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                      City *
                    </label>
                    <select
                      id="cityCheckout"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    >
                      <option value="Mumbai">Mumbai</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Pune">Pune</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pincodeCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      id="pincodeCheckout"
                      type="text"
                      required
                      placeholder="e.g. 400001"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Date, Time Slot & Presenter Notes */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center font-sans font-bold">
                    3
                  </span>
                  <span>Surprise Date, Time Slot & Presenter Instructions</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="deliveryDateCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                      Surprise Date *
                    </label>
                    <input
                      id="deliveryDateCheckout"
                      type="date"
                      required
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="deliveryTimeSlotCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                      Time Slot Guarantee *
                    </label>
                    <select
                      id="deliveryTimeSlotCheckout"
                      value={deliveryTimeSlot}
                      onChange={(e) => setDeliveryTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
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
                      <option value="Midnight Special Slot (11:55 PM - 12:15 AM)">
                        Midnight 12:00 AM Slot
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="presenterNoteCheckout" className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Presenter Instructions (Optional)
                  </label>
                  <textarea
                    id="presenterNoteCheckout"
                    rows={3}
                    placeholder="e.g. Ring door bell twice, start background song before door opens, keep camera hidden initially..."
                    value={presenterNote}
                    onChange={(e) => setPresenterNote(e.target.value)}
                    className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/30 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                  />
                </div>

                {/* Photographer Toggle */}
                <div
                  onClick={() => setIncludePhotography(!includePhotography)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    includePhotography
                      ? "bg-rose-50 border-rose-400"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                        includePhotography
                          ? "bg-rose-600 border-rose-600 text-white"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {includePhotography && <CheckIcon size={14} />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">
                        Add HD Photography & Video Keepsake
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-500">
                        Professional host camera capture & edited 60s Instagram Reel (+₹999)
                      </p>
                    </div>
                  </div>
                  <span className="font-serif font-bold text-xs sm:text-sm text-slate-900 shrink-0">
                    +₹999
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary & Place Order */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-xl space-y-6">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 pb-4 border-b border-rose-50">
                  Surprise Order Items
                </h2>

                {/* Items Summary */}
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {cart.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-2xl bg-rose-50/40 border border-rose-100 text-xs flex justify-between items-start"
                    >
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title} (x{item.quantity})
                        </h3>
                        {item.selectedAddons.length > 0 && (
                          <p className="text-[10px] text-rose-600">
                            + {item.selectedAddons.length} Add-on(s)
                          </p>
                        )}
                      </div>
                      <span className="font-bold text-slate-900 shrink-0">
                        {formatPrice(item.totalPrice)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-rose-100 space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span>Packages Subtotal</span>
                    <span className="font-semibold">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  {includePhotography && (
                    <div className="flex justify-between text-rose-600">
                      <span>HD Photo/Video Reel</span>
                      <span className="font-semibold">+₹999</span>
                    </div>
                  )}
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Doorstep Presenter Delivery</span>
                    <span>FREE</span>
                  </div>

                  <div className="pt-3 border-t border-rose-100 flex justify-between items-baseline text-slate-900">
                    <span className="font-serif text-base font-bold">
                      Total Payable
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-extrabold text-rose-600">
                      {formatPrice(grandTotal)}
                    </span>
                  </div>
                </div>

                {/* Demo Notice Banner */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
                  <span className="font-bold flex items-center gap-1 text-amber-800">
                    <SparklesIcon size={14} />
                    <span>Frontend Demo Booking</span>
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    This is a prototype demonstration. Clicking below will instantly record your surprise booking without requiring credit card or payment gateway integration.
                  </p>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-sm shadow-xl shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <HeartIcon size={18} className="fill-white" />
                  <span>Place Surprise Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
