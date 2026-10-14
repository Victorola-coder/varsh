"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import SectionHeading from "./section-heading";
import type { ThematicAreaItem, ReachStatItem } from "@/lib/default-content";
import { thematicAreasDefault, reachStatsDefault } from "@/lib/default-content";

function Cards({
  title,
  icon,
  content,
}: {
  title: string;
  icon: string;
  content: string;
}) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col items-center gap-4 rounded-[20px] border border-[#E5E5E5] bg-white px-6 py-8 md:px-8 md:py-9 text-center transition-colors duration-300 hover:border-primary/40 hover:shadow-[0_16px_40px_-18px_rgba(255,54,0,0.3)]"
    >
      {/* Tinted plate behind the icon so the four cards read as a set even
          though the icon artwork varies. */}
      <figure className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
        <Image
          src={icon}
          alt=""
          aria-hidden
          width={44}
          height={44}
          className="h-11 w-11 object-contain"
        />
      </figure>
      <h3 className="text-[20px] md:text-[22px] font-bold leading-tight text-[#1D1D1D]">
        {title}
      </h3>
      <p className="text-[16px] md:text-[17px] leading-relaxed text-[#4A4A4A]">
        {content}
      </p>
    </motion.div>
  );
}

function ReachCard({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeIn}
      className="rounded-2xl bg-white px-6 py-8 text-center shadow-[0_2px_16px_-8px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.04]"
    >
      <p className="font-lato text-[38px] md:text-[48px] lg:text-[54px] font-bold leading-none tracking-[-0.02em] text-primary">
        {number}
      </p>
      <h3 className="mt-3 text-[17px] md:text-[18px] font-semibold text-[#252A34]">
        {label}
      </h3>
      <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-[#4A4A4A]">
        {description}
      </p>
    </motion.div>
  );
}

export default function Areas({
  areas = thematicAreasDefault,
  stats = reachStatsDefault,
}: {
  areas?: ThematicAreaItem[];
  stats?: ReachStatItem[];
}) {
  return (
    <>
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-[56px] md:mt-[88px] lg:mt-[112px] mx-4 md:mx-8 lg:mx-[50px]"
      >
        <SectionHeading
          eyebrow="Where we focus"
          title="Our Thematic Areas"
          subtitle="The four pillars our programmes are built around."
        />
        <motion.div
          variants={staggerContainer}
          className="mt-[30px] md:mt-[56px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {areas.map((area, i) => (
            <Cards
              key={i}
              icon={area.icon}
              title={area.title}
              content={area.content}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Our Reach */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative mt-[56px] md:mt-[88px] lg:mt-[112px] overflow-hidden bg-[#F8F9FA] py-[60px] md:py-[100px]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]"
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Our impact"
            title="Our Reach"
            subtitle="What the work has added up to so far."
          />

          <motion.div
            variants={staggerContainer}
            className="mt-[40px] md:mt-[64px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <ReachCard
                key={i}
                number={stat.number}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-[48px] md:mt-[64px] flex flex-col items-center text-center"
          >
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#252A34]">
              Join Our Mission
            </h3>
            {/* One primary action, two quiet ones. These were three competing
                buttons in three different shapes and colours. */}
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/get-involved#become-member"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#e13000] active:scale-[0.98]"
              >
                Become a Member
              </Link>
              <Link
                href="/get-involved#volunteers"
                className="inline-flex items-center justify-center rounded-full border border-[#252A34]/20 px-7 py-3 text-sm font-semibold text-[#252A34] transition-all duration-300 hover:border-[#252A34] hover:bg-[#252A34] hover:text-white active:scale-[0.98]"
              >
                Join as Volunteer
              </Link>
              <Link
                href="/#newsletter"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3 text-sm font-semibold text-[#252A34] underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Subscribe to Newsletter
                <span aria-hidden>&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
