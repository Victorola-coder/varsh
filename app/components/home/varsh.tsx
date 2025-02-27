"use client";

import React from "react";
import { Image } from "../ui";
import { CheckIcon } from "../svgs";
import child from "@/public/images/child.svg";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../animations";

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

export default function Varsh() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row mx-4 md:mx-[30px] lg:mx-[53px] mt-[40px] md:mt-[70px] lg:mt-[100px] gap-8 lg:gap-[50px]"
    >
      <motion.div variants={slideIn} className="flex flex-col gap-4 md:gap-5">
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] md:leading-[52px] font-semibold text-[#1D1D1D] text-center lg:text-left">
          VARSH FOUNDATION
          <motion.p
            initial={{ width: 0 }}
            whileInView={{ width: "20%" }}
            transition={{ duration: 0.5 }}
            className="h-[3px] bg-[#FF3600] mx-auto lg:mx-0 mt-2"
          />
        </h2>
        <motion.p
          variants={fadeIn}
          className="font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] md:leading-[40px] max-w-[807px] text-center lg:text-left"
        >
          VARSH Foundation was founded in 2019 by a group of passionate and
          determined individuals led by Salvation Grace, who recognised the
          urgent need to address and combat sexual abuse and gender-based
          violence in our society. The name VARSH, albeit an acronym for Voices
          Against Rape and Sexual Harassment, is a Sanskrit word meaning "rain."
          This signifies a refreshing and cleansing force, much like the
          transformative impact the foundation aspires to have on society.
        </motion.p>
        <motion.div variants={staggerContainer} className="mt-2 md:mt-4">
          <h4 className="font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] md:leading-[40px] max-w-[807px] text-center lg:text-left mb-4 md:mb-6">
            Over the years, VARSH Foundation has made significant strides in its
            fight against sexual abuse:
          </h4>
          <div className="flex flex-col gap-4 md:gap-5 max-w-[734px]">
            <Strides
              content={
                <>
                  <span className="text-[#FF3600]">Education:</span> We have
                  reached thousands of individuals through awareness programs
                  and training sessions.
                </>
              }
            />
            <Strides
              content={
                <>
                  <span className="text-[#FF3600]">Counselling: </span>
                  Our support has helped survivors regain confidence and rebuild
                  their lives.
                </>
              }
            />
            <Strides
              content={
                <>
                  <span className="text-[#FF3600]">Policy Impact:</span> We have
                  contributed to the development of policies that protect the
                  rights of survivors and address sexual abuse.
                </>
              }
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.figure
        variants={fadeIn}
        whileHover={{ scale: 1.02 }}
        className="w-full lg:w-auto flex justify-center lg:justify-start"
      >
        <Image
          src={child}
          alt="children"
          draggable={false}
          className="w-full max-w-[500px] lg:w-auto h-auto"
        />
      </motion.figure>
    </motion.section>
  );
}
