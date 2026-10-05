import React from "react";
import Link from "next/link";
import { HeartIcon, ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFDF9] relative">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 rounded-3xl p-10 sm:p-14 text-white shadow-2xl relative overflow-hidden text-center space-y-6 border border-rose-400/40">
          {/* Background SVG circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-rose-100 border border-white/30">
            <HeartIcon size={14} className="fill-white" />
            <span>Doorstep Happiness Delivery</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Make Someone Feel Special?
          </h2>

          <p className="text-base sm:text-lg text-rose-100 max-w-xl mx-auto font-sans leading-relaxed">
            Choose your occasion, customize your gift hamper & presenter note, and leave the magic to Gauri&apos;s trained surprise team!
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/packages"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Explore All Surprise Packages</span>
              <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={SITE_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon size={18} />
              <span>Talk to Gauri on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
