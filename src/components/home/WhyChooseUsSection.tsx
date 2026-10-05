import React from "react";
import { WHY_CHOOSE_US } from "@/data/why-choose-us";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/Icons";

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFDF9]">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          badge="The Gauri Standard"
          title="Why Choose Happiness Deliver"
          subtitle="We take gifting beyond material products by infusing every doorstep delivery with human connection and respect."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-rose-100/80 shadow-xs hover:shadow-xl hover:border-rose-300 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center mb-6 shadow-md shadow-rose-500/20 group-hover:scale-110 transition-transform">
                <DynamicIcon name={item.icon} size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Highlight Card for Female Presenter */}
          <div className="bg-gradient-to-br from-rose-900 to-rose-950 text-white rounded-3xl p-8 border border-rose-500/40 shadow-xl flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-slate-950 mb-4">
                Signature Feature
              </span>
              <h3 className="font-serif text-2xl font-bold mb-3">
                Graceful Female Presenters
              </h3>
              <p className="text-rose-100/90 text-sm leading-relaxed">
                Our female surprise presenters are specially trained in emotional etiquette, spoken clarity, and warm delivery to put families at ease.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-800/60 text-xs text-amber-300 font-semibold">
              ★ Rated #1 for Family & Doorstep Safety
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
