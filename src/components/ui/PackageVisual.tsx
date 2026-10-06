import React from "react";
import Image from "next/image";

interface PackageVisualProps {
  theme?: "pink" | "gold" | "rose" | "plum" | "amber" | "emerald";
  title: string;
  badge?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  imageSrc?: string;
}

export const PackageVisual: React.FC<PackageVisualProps> = ({
  theme = "pink",
  title,
  badge,
  className = "",
  size = "md",
  imageSrc,
}) => {
  const getGradient = () => {
    switch (theme) {
      case "rose":
        return "from-rose-500 via-pink-600 to-rose-900";
      case "gold":
        return "from-amber-600 via-yellow-600 to-amber-900";
      case "plum":
        return "from-rose-950 via-purple-900 to-rose-900";
      case "amber":
        return "from-amber-500 via-orange-600 to-rose-800";
      case "emerald":
        return "from-emerald-700 via-teal-800 to-slate-900";
      case "pink":
      default:
        return "from-rose-400 via-pink-500 to-rose-800";
    }
  };

  const heights = {
    sm: "h-48",
    md: "h-64",
    lg: "h-80 md:h-96",
  };

  if (imageSrc) {
    return (
      <div
        className={`relative w-full ${heights[size]} rounded-2xl overflow-hidden shadow-xl backdrop-blur-md bg-white/40 border border-white/80 group flex items-center justify-center ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-rose-500/5 pointer-events-none z-10" />
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain p-3 group-hover:scale-110 transition-transform duration-500 ease-out z-0"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${heights[size]} rounded-2xl overflow-hidden bg-gradient-to-br ${getGradient()} p-6 flex flex-col justify-between shadow-xl transition-all duration-300 group-hover:scale-[1.02] ${className}`}
    >
      {/* Background Decorative Rings & Glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

      {/* Decorative Ribbon & Sparkle Pattern SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id={`grid-${theme}`}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
          <path
            d="M 40 0 L 0 40 M 0 0 L 40 40"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            strokeDasharray="2 4"
          />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#grid-${theme})`} />
      </svg>

      {/* Top Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md border border-white/30 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
          Happiness Deliver
        </span>

        {badge && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-rose-950 shadow-lg tracking-wide uppercase">
            {badge}
          </span>
        )}
      </div>

      {/* Center Gift Box Luxury Illustration */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
        <div className="relative p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mb-3 group-hover:bg-white/20 transition-all duration-300 transform group-hover:-translate-y-1">
          {/* Custom SVG Emblem */}
          <svg
            width="56"
            height="56"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white drop-shadow-md"
          >
            {/* Ribbon & Box */}
            <rect
              x="12"
              y="26"
              width="40"
              height="30"
              rx="4"
              fill="currentColor"
              fillOpacity="0.2"
              stroke="currentColor"
              strokeWidth="3"
            />
            <rect
              x="8"
              y="18"
              width="48"
              height="10"
              rx="3"
              fill="currentColor"
              fillOpacity="0.4"
              stroke="currentColor"
              strokeWidth="3"
            />
            {/* Vertical Bow */}
            <path
              d="M32 18V56"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="2 2"
            />
            {/* Top Loop Bow */}
            <path
              d="M32 18C28 10 18 10 22 18Z"
              fill="#FBBF24"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M32 18C36 10 46 10 42 18Z"
              fill="#FBBF24"
              stroke="currentColor"
              strokeWidth="2"
            />
            {/* Floating Sparkles */}
            <circle cx="10" cy="12" r="2" fill="#FBBF24" />
            <circle cx="54" cy="14" r="2.5" fill="#FFFFFF" />
            <circle cx="50" cy="50" r="1.5" fill="#FBBF24" />
          </svg>
        </div>
      </div>

      {/* Bottom Title Overlay */}
      <div className="relative z-10 text-white">
        <h3 className="font-serif text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
          {title}
        </h3>
        <p className="text-xs text-rose-100/90 mt-1 font-sans flex items-center gap-1">
          <span>Female Presenter</span> • <span>Custom Cake & Flowers</span>
        </p>
      </div>
    </div>
  );
};
