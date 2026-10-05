import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SparklesIcon,
  HeartIcon,
  ShieldCheckIcon,
  UserIcon,
  ArrowRightIcon,
  CakeIcon,
} from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `About Us & Our Mission | ${SITE_CONFIG.name}`,
  description:
    "Learn about Gauri's vision of delivering pure human emotion, the significance of trained female surprise presenters, and our 4 core values of doorstep gifting.",
  openGraph: {
    title: `About Us & Our Mission | ${SITE_CONFIG.name}`,
    description:
      "Learn about Gauri's vision of delivering pure human emotion and the value of trained female surprise presenters.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#FFFDF9]">
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12 space-y-20">
        {/* Header Hero */}
        <SectionHeading
          badge="Our Heart & Story"
          title="About Happiness Deliver by Gauri"
          subtitle="&quot;We Don’t Just Deliver Gifts, We Deliver Emotions.&quot;"
        />

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              The Journey of Delivering Pure Human Connection
            </h2>

            <p className="text-slate-700 text-base leading-relaxed">
              Happiness Deliver by Gauri was born out of a simple observation: in today&apos;s fast-paced digital world, sending a gift card or a courier package often lacks soul. When children living away from home want to surprise their aging parents, or when someone wants to declare their love on an anniversary, a generic delivery person handing over a box doesn&apos;t match the magnitude of the emotion.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              Gauri envisioned a premium doorstep experience where every delivery is treated like a theatrical, heartwarming moment. Our team of gracefully trained female surprise presenters arrives with fresh flower box arrangements, customized cakes, soft acoustic background music, and your handwritten scroll message.
            </p>

            <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200/80 font-serif italic text-rose-900 text-base">
              &quot;Our mission is to give people a core memory—a moment where eyes glisten with happy tears and loved ones feel deeply cherished.&quot;
              <span className="block text-xs font-sans font-bold text-rose-700 mt-2 not-italic">
                — Gauri, Founder & Chief Experience Curator
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-rose-900 via-rose-950 to-slate-950 rounded-3xl p-8 text-white shadow-2xl space-y-6 border border-rose-500/30 relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xl shadow-lg">
                <SparklesIcon size={32} />
              </div>

              <h3 className="font-serif text-2xl font-bold">Why Female Presenters?</h3>
              <p className="text-rose-100/90 text-sm leading-relaxed font-sans">
                Doorstep surprises demand extreme safety, warmth, and emotional etiquette. Families, elders, and homemakers feel completely comfortable welcoming our trained female hosts into their homes. Our presenters are articulate, empathetic, and skilled at setting a serene, celebratory atmosphere.
              </p>

              <div className="pt-4 border-t border-rose-800/80 space-y-2 text-xs text-amber-300 font-semibold">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon size={16} />
                  <span>100% Background-Verified Female Hosts</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon size={16} />
                  <span>Trained in Public Speaking & Poem Recitation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-8">
          <SectionHeading
            badge="Our Guiding Values"
            title="The 4 Pillars of Every Surprise"
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <HeartIcon size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                1. Emotional First
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prioritize sentiment over transactional shipping. Every card is handwritten and presented with genuine warmth.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <CakeIcon size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                2. Luxury Quality
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Artisanal fresh-cream cakes, long-stem imported roses, and velvet gift wraps ensure premium aesthetics.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheckIcon size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                3. Precision Timing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Midnight or morning, we arrive right on the dot so your surprise lands at the exact right moment.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <UserIcon size={24} />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900">
                4. Personal Host
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our female presenter coordinates the entire event on-site, managing music, cake cutting, and photography.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-10 text-white text-center space-y-4 shadow-xl">
          <h2 className="font-serif text-3xl font-bold">
            Let Us Craft a Memory For Your Family
          </h2>
          <p className="text-sm text-rose-100 max-w-xl mx-auto">
            Book a surprise experience today and let our host turn your heartfelt feelings into an unforgettable moment.
          </p>
          <div className="pt-2">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-950 text-white text-xs font-bold shadow-lg hover:bg-slate-900 transition-colors"
            >
              <span>Explore Surprise Packages</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
