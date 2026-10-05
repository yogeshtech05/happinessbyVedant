"use client";

import React from "react";
import Link from "next/link";
import { PhoneIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  currentPath,
}) => {
  if (!isOpen) return null;

  return (
    <nav
      className="md:hidden bg-white/98 backdrop-blur-xl border-b border-rose-100 px-6 py-6 space-y-4 shadow-2xl animate-fade-in-down"
      aria-label="Mobile Navigation"
    >
      <div className="flex flex-col space-y-3">
        {SITE_CONFIG.navLinks.map((link) => {
          const isActive = currentPath === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`text-base font-medium px-4 py-2.5 rounded-2xl transition-colors ${
                isActive
                  ? "bg-rose-50 text-rose-700 font-semibold"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="pt-4 border-t border-rose-100 flex flex-col gap-3">
        <Link
          href="/packages"
          onClick={onClose}
          className="w-full text-center py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold text-sm shadow-md"
        >
          Plan a Surprise Now
        </Link>
        <a
          href={`tel:${SITE_CONFIG.contact.phoneClean}`}
          className="w-full text-center py-2.5 rounded-2xl bg-slate-100 text-slate-800 font-medium text-xs flex items-center justify-center gap-2"
        >
          <PhoneIcon size={14} />
          <span>Call Host: {SITE_CONFIG.contact.phone}</span>
        </a>
      </div>
    </nav>
  );
};
