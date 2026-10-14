"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Hero as HeroContent } from "@/lib/default-content";
import { heroDefault } from "@/lib/default-content";

const rise = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ hero = heroDefault }: { hero?: HeroContent }) {
  return (
    <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background photo. Rendered through next/image so the large source is
          served resized and in a modern format instead of as a raw CSS url(). */}
      <Image
        src={hero.image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered scrim: a dark vertical base for text contrast, a warm brand
          glow from the top, and a vignette to pull focus to the centre. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/55 to-dark/90"
      />
      <div
        aria-hidden
        className="absolute -top-1/4 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/30 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(20,21,23,0.75)_100%)]"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 py-20 flex flex-col items-center text-center text-white">
        {hero.eyebrow && (
          <motion.span
            variants={rise}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {hero.eyebrow}
          </motion.span>
        )}

        <motion.h1
          variants={rise}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="font-lato text-[34px] sm:text-[44px] md:text-[58px] lg:text-[76px] font-bold leading-[1.08] tracking-[-0.02em] max-w-[18ch] text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
        >
          {hero.heading}
        </motion.h1>

        {/* Short brand rule, replacing the old full-width underline bar. */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-6 block h-[3px] w-16 origin-center rounded-full bg-primary"
        />

        <motion.p
          variants={rise}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-6 text-[15px] sm:text-[17px] md:text-[20px] leading-relaxed text-white/80 max-w-[54ch] text-balance"
        >
          {hero.subheading}
        </motion.p>

        <motion.div
          variants={rise}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease, delay: 0.32 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href={hero.ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#e13000] active:scale-[0.98]"
          >
            {hero.ctaLabel}
          </Link>

          {hero.ctaLabel2 && hero.ctaHref2 && (
            <Link
              href={hero.ctaHref2}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-[0.98]"
            >
              {hero.ctaLabel2}
              <span aria-hidden>&rarr;</span>
            </Link>
          )}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-white/70"
          />
        </span>
      </motion.div>
    </section>
  );
}
