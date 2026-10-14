"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Route-level error boundary. Without this, an unhandled render error shows
 * Next's default error screen with no way back into the site.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-dark px-4 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div className="relative z-10 flex w-full max-w-[560px] flex-col items-center text-center text-white">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Something went wrong
        </span>
        <h1 className="text-3xl font-bold sm:text-4xl">
          This page didn&apos;t load
        </h1>
        <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/70">
          Sorry — something broke on our end. Trying again often fixes it.
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-white/40">Reference: {error.digest}</p>
        )}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#e13000] active:scale-[0.98]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Back to home
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
