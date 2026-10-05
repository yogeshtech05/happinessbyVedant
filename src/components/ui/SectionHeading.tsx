import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div
      className={`space-y-3 mb-12 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-xl"
      } ${className}`}
    >
      {badge && (
        <div className={centered ? "flex justify-center" : ""}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-rose-100/80 text-rose-800 border border-rose-200/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
            {badge}
          </span>
        </div>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 font-sans font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`flex items-center gap-2 pt-1 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-0.5 w-8 bg-rose-300 rounded-full" />
        <span className="h-1.5 w-1.5 bg-amber-500 rounded-full" />
        <span className="h-0.5 w-8 bg-rose-300 rounded-full" />
      </div>
    </div>
  );
};
