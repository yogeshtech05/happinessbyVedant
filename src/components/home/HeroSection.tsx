import React from "react";
import Link from "next/link";
import { SparklesIcon, HeartIcon, ArrowRightIcon, ShieldCheckIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-28 overflow-hidden bg-[#FFFDF9]">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-rose-200/40 rounded-full blur-3xl -z-10 -mr-20 sm:-mr-40 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] lg:w-[500px] h-[250px] sm:h-[400px] lg:h-[500px] bg-amber-100/50 rounded-full blur-3xl -z-10 -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Top Luxury Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-rose-100/80 text-rose-800 text-[11px] sm:text-xs font-semibold tracking-wide border border-rose-200 shadow-xs max-w-full">
              <SparklesIcon size={14} className="text-amber-500 fill-amber-500 shrink-0" />
              <span className="truncate">{SITE_CONFIG.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
              <span className="hidden sm:inline shrink-0">Premium Gifting</span>
            </div>

            {/* Emotional Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.18] sm:leading-[1.15] tracking-tight">
              &quot;We Don’t Just Deliver Gifts,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 inline-block">
                We Deliver Emotions.&quot;
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Transform birthdays, anniversaries, and family milestones into magical,
              tearful memories. Featuring trained female surprise presenters, artisanal
              cakes, flower arrangements, and optional HD video keepsakes.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/packages"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold text-sm shadow-xl shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <HeartIcon size={18} className="fill-white group-hover:scale-110 transition-transform" />
                <span>Plan a Surprise</span>
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/packages"
                className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-rose-50 text-slate-800 hover:text-rose-700 font-semibold text-sm border border-rose-200 shadow-sm transition-all duration-300 text-center min-h-[48px] flex items-center justify-center"
              >
                Explore Packages
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-5 sm:pt-6 border-t border-rose-100 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon size={16} className="text-rose-600 shrink-0" />
                <span>100% On-Time Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon size={16} className="text-rose-600 shrink-0" />
                <span>Female Presenters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheckIcon size={16} className="text-rose-600 shrink-0" />
                <span>Personalized Memory Hampers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Gifting Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-rose-900 via-rose-950 to-slate-950 p-6 sm:p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden border border-rose-500/30">
                {/* Background SVG decorative swirl */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Emblem */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-200">
                    VIP Surprise Experience
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-amber-400 text-rose-950 font-bold flex items-center justify-center text-xs shadow-lg">
                    4.9★
                  </div>
                </div>

                {/* SVG Visual Illustration of Surprise Moment */}
                <div className="my-4 sm:my-6 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center space-y-3 sm:space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 p-0.5 shadow-xl flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-rose-950 flex items-center justify-center text-white">
                      <SparklesIcon size={30} className="text-amber-300 sm:w-9 sm:h-9" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                      Doorstep Emotional Host
                    </h3>
                    <p className="text-[11px] sm:text-xs text-rose-200/80 mt-1">
                      Custom Cake • Rose Bouquet • Live Song • Memory Scroll
                    </p>
                  </div>
                </div>

                {/* Floating Micro Testimonial Card */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-rose-400 text-slate-900 font-bold flex items-center justify-center shrink-0 text-sm">
                    G
                  </div>
                  <div>
                    <p className="text-xs italic text-rose-100 font-serif">
                      &quot;My mom had teary eyes when the presenter read my letter!&quot;
                    </p>
                    <p className="text-[10px] text-amber-300 mt-0.5 font-semibold">
                      — Verified Booking in Mumbai
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Accent Pill */}
              <div className="relative sm:absolute sm:-bottom-6 sm:-left-6 mt-4 sm:mt-0 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3 animate-bounce-short">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">1,250+ Surprises</p>
                  <p className="text-[10px] text-slate-500">Delivered with Pure Emotion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
