import Link from "next/link";
import { HeartIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <div className="pt-36 pb-20 text-center space-y-6 max-w-md mx-auto px-4 min-h-[70vh] flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-serif text-3xl font-bold border border-rose-200 shadow-sm">
        404
      </div>
      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          The surprise page or experience you are looking for doesn&apos;t exist or has moved.
        </p>
      </div>
      <Link
        href="/packages"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
      >
        <HeartIcon size={16} className="fill-white" />
        <span>Explore Available Surprise Packages</span>
      </Link>
    </div>
  );
}
