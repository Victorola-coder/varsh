"use client";

import Image from "next/image";

import React from "react";
import { CheckIcon } from "../svgs";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { fadeIn, slideIn, staggerContainer } from "../animations";
import type { About, StrideItem } from "@/lib/default-content";
import { aboutDefault, stridesDefault } from "@/lib/default-content";

function Strides({ content }: { content: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeIn}
      className="flex flex-row items-start gap-3 md:gap-5"
    >
      <CheckIcon className="flex-shrink-0 mt-1.5" />
      <p className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] md:leading-[31px] text-[#4A4A4A]">
        {content}
      </p>
    </motion.div>
  );
}

export default function Varsh({
  about = aboutDefault,
  strides = stridesDefault,
}: {
  about?: About;
  strides?: StrideItem[];
}) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row mx-4 md:mx-8 lg:mx-[50px] mt-[56px] md:mt-[88px] lg:mt-[112px] gap-8 lg:gap-[50px]"
    >
      <motion.div variants={slideIn} className="flex flex-col gap-4 md:gap-5">
        <SectionHeading title={about.title} align="left" />
        <motion.p
          variants={fadeIn}
          className="font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.7] max-w-[807px]"
        >
          {about.story}
        </motion.p>
        <motion.div variants={staggerContainer} className="mt-2 md:mt-4">
          <h4 className="font-semibold text-[17px] md:text-[19px] leading-[1.6] max-w-[807px] mb-4 md:mb-6 text-[#1D1D1D]">
            {about.stridesHeading}
          </h4>
          <div className="flex flex-col gap-4 md:gap-5 max-w-[734px]">
            {strides.map((stride, i) => (
              <Strides
                key={i}
                content={
                  <>
                    <span className="text-[#FF3600]">{stride.label}:</span>{" "}
                    {stride.text}
                  </>
                }
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.figure
        variants={fadeIn}
        whileHover={{ scale: 1.02 }}
        className="w-full lg:w-auto flex justify-center lg:justify-start"
      >
        <Image
          src={about.image}
          alt="children"
          width={500}
          height={500}
          draggable={false}
          sizes="(max-width: 1024px) 100vw, 500px"
          className="w-full max-w-[500px] lg:w-auto h-auto"
        />
      </motion.figure>
    </motion.section>
  );
}
