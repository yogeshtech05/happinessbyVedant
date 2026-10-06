"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Mumbai",
    occasion: "Birthday",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How early should I book a surprise package?",
      a: "We recommend booking at least 24 to 48 hours in advance so our presenter can curate fresh artisanal cakes, floral arrangements, and custom scrolls. For urgent same-day bookings, please contact us directly on WhatsApp.",
    },
    {
      q: "Is a female surprise presenter guaranteed?",
      a: "Yes! All our doorstep surprise packages feature a trained, background-verified female presenter who manages music, cake cutting, scroll narration, and photo/video.",
    },
    {
      q: "How does the 12:00 AM Midnight Surprise slot work?",
      a: "Our team arrives outside the destination address at 11:55 PM. At exactly 12:00 AM, the host rings the bell with ambient music playing, candle path prepared, and fresh midnight velvet cake ready!",
    },
    {
      q: "Can I customize the cake flavor and gift items?",
      a: "Absolutely. During checkout or WhatsApp consultation, you can select eggless, sugar-free, Belgian chocolate, red velvet, or custom fruit cakes as well as specific flower colors.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#FFFDF9]">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
        <SectionHeading
          badge="We Are Here For You"
          title="Contact & Surprise Consultations"
          subtitle="Have questions or want a bespoke surprise setup? Speak with our experience team today."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-rose-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-rose-500/30 space-y-5 sm:space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-rose-950">
                Fastest Response
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">
                Direct WhatsApp Consultation
              </h2>
              <p className="text-xs text-rose-100/90 leading-relaxed font-sans">
                Want quick recommendations or urgent booking confirmation? Chat with us directly on WhatsApp for instant assistance.
              </p>
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors min-h-[44px]"
              >
                <WhatsAppIcon size={18} />
                <span>Chat on WhatsApp ({SITE_CONFIG.contact.phone})</span>
              </a>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-rose-100 flex items-center gap-4 shadow-xs">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <PhoneIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    Phone Helpline
                  </h3>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                    className="text-xs text-rose-600 font-bold hover:underline"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <p className="text-[10px] text-slate-400">
                    Available 9:00 AM - 10:00 PM IST
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-rose-100 flex items-center gap-4 shadow-xs">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MailIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    Email Inquiries
                  </h3>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-xs text-rose-600 font-bold hover:underline"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                  <p className="text-[10px] text-slate-400">
                    We reply within 2 business hours
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-rose-100 flex items-center gap-4 shadow-xs">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPinIcon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    Operating Coverage Cities
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {SITE_CONFIG.cities.join(", ")}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-xl space-y-5 sm:space-y-6">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out the details below and our surprise coordinator will reach out to plan your custom experience.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                    ✓
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, {formData.name}! Our surprise team will call you shortly at {formData.phone} to discuss your {formData.occasion} surprise.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactName" className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        required
                        placeholder="e.g. Anjali Sharma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/40 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPhone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contactPhone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/40 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contactEmail" className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        placeholder="anjali@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/40 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactCity" className="block text-xs font-semibold text-slate-700 mb-1">
                        Delivery City *
                      </label>
                      <select
                        id="contactCity"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/40 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                      >
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Pune">Pune</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Other">Other Metro City</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactOccasion" className="block text-xs font-semibold text-slate-700 mb-1">
                      Surprise Occasion *
                    </label>
                    <select
                      id="contactOccasion"
                      value={formData.occasion}
                      onChange={(e) =>
                        setFormData({ ...formData, occasion: e.target.value })
                      }
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/40 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    >
                      <option value="Birthday">Birthday Surprise</option>
                      <option value="Anniversary">Anniversary Celebration</option>
                      <option value="Parents">For Parents Special</option>
                      <option value="Romantic">Romantic Proposal / Date</option>
                      <option value="Congratulations">Congratulations Milestone</option>
                      <option value="Festivals">Festive Hamper</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contactVision" className="block text-xs font-semibold text-slate-700 mb-1">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      id="contactVision"
                      rows={4}
                      placeholder="Share recipient preferences, preferred cake flavor, dates, or special requests..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 sm:py-2.5 rounded-xl bg-rose-50/40 border border-rose-200/80 text-base sm:text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-xs shadow-lg shadow-rose-500/25 transition-all duration-300 min-h-[48px]"
                  >
                    Submit Surprise Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="space-y-6 sm:space-y-8 pt-4 sm:pt-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-rose-100 shadow-sm space-y-2"
              >
                <h3 className="font-serif font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-rose-600 font-sans font-bold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed pl-5 font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
