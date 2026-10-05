"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/hooks/use-cart";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import {
  ShoppingBagIcon,
  MenuIcon,
  XIcon,
  SparklesIcon,
  HeartIcon,
} from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/config/site";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-rose-100"
          : "bg-white/80 backdrop-blur-sm py-3 sm:py-4 border-b border-rose-100/50"
      }`}
    >
      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label="Happiness Deliver by Gauri Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-rose-500 to-rose-700 text-white flex items-center justify-center shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform shrink-0">
              <SparklesIcon size={18} className="animate-pulse sm:w-5 sm:h-5" />
            </div>
            <div className="leading-tight">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-slate-900 block">
                {SITE_CONFIG.shortName}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-rose-600 block">
                by Gauri
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {SITE_CONFIG.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-md ${
                    isActive
                      ? "text-rose-600 font-semibold"
                      : "text-slate-700 hover:text-rose-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Cart Icon Link */}
            <Link
              href="/cart"
              className="relative p-2 sm:p-2.5 rounded-full text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <ShoppingBagIcon size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-600 text-white text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-sm animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* CTA Button */}
            <Link
              href="/packages"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white text-xs font-semibold shadow-md shadow-rose-500/20 hover:shadow-lg transition-all duration-300"
            >
              <HeartIcon size={14} className="fill-white" />
              <span>Plan a Surprise</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-rose-50 md:hidden transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Component */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </header>
  );
};
