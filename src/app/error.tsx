"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error captured in App Error Boundary:", error);
  }, [error]);

  return (
    <div className="pt-36 pb-20 text-center space-y-6 max-w-md mx-auto px-4">
      <div className="w-16 h-16 mx-auto rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-2xl">
        !
      </div>
      <h1 className="font-serif text-3xl font-bold text-slate-900">
        Something Went Wrong
      </h1>
      <p className="text-slate-600 text-sm leading-relaxed">
        We encountered an unexpected issue while loading this page. Please try again or return to the homepage.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full bg-rose-600 text-white font-bold text-xs shadow-md hover:bg-rose-700 transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs shadow-md hover:bg-slate-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
