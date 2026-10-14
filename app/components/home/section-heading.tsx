"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Shared heading for the landing sections.
 *
 * Each section previously rolled its own: different tags (h2 vs h3), different
 * sizes, and three different underline treatments (a full-width bar, an
 * animated 20%-width bar, and nothing). This gives them one voice.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "flex flex-col items-center text-center" : ""}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
            tone === "light"
              ? "border-white/20 bg-white/10 text-white/90"
              : "border-primary/20 bg-primary/5 text-primary"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease, delay: 0.05 }}
        className={`font-lato text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.15] tracking-[-0.01em] text-balance ${
          tone === "light" ? "text-white" : "text-[#1D1D1D]"
        }`}
      >
        {title}
      </motion.h2>

      <motion.span
        aria-hidden
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease, delay: 0.2 }}
        className={`mt-5 block h-[3px] w-14 rounded-full bg-primary ${
          centered ? "origin-center" : "origin-left"
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          className={`mt-5 max-w-[58ch] text-[16px] md:text-[18px] leading-relaxed text-balance ${
            tone === "light" ? "text-white/70" : "text-[#4A4A4A]"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
