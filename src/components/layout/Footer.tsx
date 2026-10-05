import React from "react";
import Link from "next/link";
import {
  SparklesIcon,
  HeartIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-rose-950/40 relative overflow-hidden">
      {/* Decorative background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white flex items-center justify-center shadow-md">
                <SparklesIcon size={20} />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  {SITE_CONFIG.shortName}
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-rose-400 block">
                  by Gauri
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed italic font-serif">
              &quot;{SITE_CONFIG.tagline}&quot;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              India’s premier luxury surprise delivery service. Creating tearful
              smiles and lifelong memories for birthdays, anniversaries, and family
              moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-rose-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cart" className="hover:text-rose-400 transition-colors">
                  Your Surprise Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Occasion Categories */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Surprise Occasions
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/packages?category=birthday"
                  className="hover:text-rose-400 transition-colors"
                >
                  Birthday Surprises
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=anniversary"
                  className="hover:text-rose-400 transition-colors"
                >
                  Anniversary Celebrations
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=parents"
                  className="hover:text-rose-400 transition-colors"
                >
                  Parents Special Homage
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=romantic"
                  className="hover:text-rose-400 transition-colors"
                >
                  Romantic Proposals
                </Link>
              </li>
              <li>
                <Link
                  href="/packages?category=festivals"
                  className="hover:text-rose-400 transition-colors"
                >
                  Festive Hampers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Coverage */}
          <div>
            <h3 className="font-serif text-base font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPinIcon size={18} className="text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Delivering happiness across {SITE_CONFIG.cities.join(", ")}.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={18} className="text-rose-400 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                  className="hover:text-rose-400 transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon size={18} className="text-rose-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-rose-400 transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-md transition-colors"
                >
                  <WhatsAppIcon size={16} />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <HeartIcon size={14} className="text-rose-500 fill-rose-500 inline" />
            <span>for pure human emotions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
