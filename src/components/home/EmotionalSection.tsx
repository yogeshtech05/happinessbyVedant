import React from "react";
import Link from "next/link";
import { SparklesIcon, HeartIcon } from "@/components/ui/Icons";

export const EmotionalSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-rose-900 via-rose-950 to-slate-950 text-white relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-rose-200">
          <SparklesIcon size={16} className="text-amber-300" />
          <span>The Philosophy Behind Happiness Deliver</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white">
          &quot;Some moments deserve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-pink-300">
            more than a gift.&quot;
          </span>
        </h2>

        <p className="text-base sm:text-lg text-rose-100/90 max-w-3xl mx-auto font-sans leading-relaxed">
          A boxed product bought online will sit on a shelf. But the feeling of a warm female presenter standing at your parents&apos; doorstep at sunset, reading your handwritten message aloud as acoustic guitar melodies float through the air... that tearful smile stays in your heart forever.
        </p>

        {/* Impact Numbers */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-rose-800/60">
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-300">
              1,200+
            </p>
            <p className="text-xs text-rose-200 mt-1 font-medium">
              Tears of Joy Delivered
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-300">
              99.8%
            </p>
            <p className="text-xs text-rose-200 mt-1 font-medium">
              On-Time Doorstep Rating
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-300">
              100%
            </p>
            <p className="text-xs text-rose-200 mt-1 font-medium">
              Female Host Trained
            </p>
          </div>
          <div>
            <p className="font-serif text-3xl sm:text-4xl font-extrabold text-amber-300">
              4.9/5
            </p>
            <p className="text-xs text-rose-200 mt-1 font-medium">
              Customer Love Score
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-xl shadow-amber-400/20 transition-all duration-300 transform hover:scale-105"
          >
            <HeartIcon size={18} className="fill-slate-950" />
            <span>Create a Magical Surprise Today</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
