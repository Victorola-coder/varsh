"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const SUGGESTIONS: { href: string; label: string }[] = [
  { href: "/projects", label: "Our Projects" },
  { href: "/clubs", label: "Campus Clubs" },
  { href: "/about", label: "About Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-dark px-4 py-24">
      {/* Brand glow, matching the hero and admin login treatment. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />

      <div className="relative z-10 flex w-full max-w-[640px] flex-col items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-lato bg-gradient-to-b from-white to-white/25 bg-clip-text text-[112px] font-bold leading-none tracking-[-0.04em] text-transparent sm:text-[160px] md:text-[200px]"
        >
          404
        </motion.h1>

        <motion.span
          aria-hidden
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          className="mt-2 block h-[3px] w-16 origin-center rounded-full bg-primary"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mt-8 text-2xl font-bold sm:text-3xl"
        >
          This page doesn&apos;t exist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-white/70 sm:text-base"
        >
          The link may be broken or the page may have moved. Let&apos;s get you
          back to the work that matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#e13000] active:scale-[0.98]"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-[0.98]"
          >
            Report a problem
            <span aria-hidden>&rarr;</span>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          aria-label="Popular pages"
          className="mt-12 w-full border-t border-white/10 pt-8"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
            Or try one of these
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {SUGGESTIONS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition-colors hover:border-primary hover:bg-primary/10 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </section>
  );
}
