import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/Icons";

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF9] to-white">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          badge="Real Customer Emotions"
          title="Stories of Happy Tears & Smiles"
          subtitle="Read how Gauri's surprise team helped families and lovers express what words couldn't."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-rose-100 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Rating Stars & Occasion Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} size={18} />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60">
                    {t.occasion}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 font-serif text-base italic leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-6 border-t border-rose-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 text-white font-serif font-bold text-sm flex items-center justify-center shadow-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-sm">
                      {t.name}
                    </h3>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 block">
                    ✓ Verified Surprise
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    {t.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
