import Link from "next/link";

export default function PackageNotFound() {
  return (
    <div className="pt-36 pb-20 text-center space-y-4 max-w-md mx-auto px-4 min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="font-serif text-3xl font-bold text-slate-900">
        Surprise Package Not Found
      </h1>
      <p className="text-slate-600 text-sm">
        We couldn&apos;t find the surprise package experience you were looking for. It may have been renamed or moved.
      </p>
      <Link
        href="/packages"
        className="inline-block px-6 py-3 rounded-full bg-rose-600 text-white font-semibold text-xs shadow-md"
      >
        Browse All Available Packages
      </Link>
    </div>
  );
}
