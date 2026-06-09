"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import type { Hero as HeroContent } from "@/lib/default-content";
import { heroDefault } from "@/lib/default-content";

export default function Hero({ hero = heroDefault }: { hero?: HeroContent }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ backgroundImage: `url(${hero.image})` }}
      className="bg-no-repeat text-white w-screen min-h-screen bg-body flex flex-col items-center justify-center relative bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF360080] to-[#252A34B2]"></div>
      <div className="px-4 md:px-8 lg:px-12 max-w-[1200px] mx-auto w-full flex flex-col items-center">
        <motion.h1
          variants={fadeIn}
          className="font-lato text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.2] md:leading-[1.3] lg:leading-[76.8px] relative z-10 text-center max-w-[90%] md:max-w-[80%] lg:max-w-none"
        >
          {hero.heading}
        </motion.h1>
        <motion.p
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="font-medium text-[16px] md:text-[22px] lg:text-[27px] leading-[1.4] md:leading-[1.5] lg:leading-[33.48px] text-center mt-4 md:mt-6 relative z-10 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]"
        >
          {hero.subheading}
        </motion.p>
        <motion.div variants={fadeIn} transition={{ delay: 0.4 }}>
          <Link href={hero.ctaHref}>
            <Button
              variant="outline"
              className="relative z-10 w-[160px] md:w-[200px] lg:w-[222px] mt-6 md:mt-8 lg:mt-10"
            >
              {hero.ctaLabel}
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
