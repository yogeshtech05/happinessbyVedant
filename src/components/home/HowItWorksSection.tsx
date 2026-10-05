import React from "react";
import { HOW_IT_WORKS_STEPS } from "@/data/how-it-works";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon } from "@/components/ui/Icons";

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-950 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="Simple & Seamless"
          title="How It Works"
          subtitle="4 effortless steps to transform an ordinary day into an emotional memory that lasts forever."
          className="[&_h2]:text-white [&_p]:text-rose-100/80 [&_span]:bg-rose-900/80 [&_span]:text-rose-200 [&_span]:border-rose-700"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Step Number Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400">
                  {stepItem.step}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300">
                  <DynamicIcon name={stepItem.icon} size={24} />
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {stepItem.title}
              </h3>
              <p className="text-xs text-rose-100/80 leading-relaxed font-sans">
                {stepItem.description}
              </p>

              {/* Connecting line indicator for desktop */}
              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-400/50 to-transparent pointer-events-none z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
