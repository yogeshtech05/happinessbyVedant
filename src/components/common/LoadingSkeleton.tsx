import React from "react";

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-12 space-y-8 animate-pulse">
      <div className="h-10 bg-rose-100/60 rounded-2xl w-1/3 mx-auto" />
      <div className="h-6 bg-rose-50 rounded-xl w-1/2 mx-auto" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-80 bg-white rounded-3xl border border-rose-100 p-6 space-y-4 shadow-xs"
          >
            <div className="h-44 bg-rose-100/40 rounded-2xl" />
            <div className="h-6 bg-slate-200 rounded-lg w-3/4" />
            <div className="h-4 bg-slate-100 rounded-lg w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
