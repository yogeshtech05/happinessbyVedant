import React from "react";
import Link from "next/link";
import Image from "next/image";
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

          {/* Right Column: Glassmorphic Full-View Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft Ambient Glow behind Glass */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400/30 via-pink-400/25 to-amber-300/30 rounded-[2.5rem] blur-2xl opacity-75 pointer-events-none" />

              {/* Frosted Glassmorphism Container */}
              <div className="w-full h-[380px] sm:h-[460px] lg:h-[520px] relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/40 border border-white/80 group flex items-center justify-center">
                {/* Subtle Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-rose-500/5 pointer-events-none z-10" />

                <Image
                  src="/happiness.png"
                  alt="Happiness Deliver Experience"
                  fill
                  className="object-contain p-3 sm:p-5 group-hover:scale-110 transition-transform duration-700 ease-out z-0"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
