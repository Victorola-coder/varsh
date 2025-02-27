"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";

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
      whileHover={{ scale: 1.02 }}
      className="w-full md:w-[340px] lg:w-[393px] px-4 md:px-[33px] py-[30px] rounded-[20px] bg-[#FFFFFF] flex flex-col items-center gap-4"
    >
      <figure className="w-[64px] h-[64px]">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </figure>
      <h4 className="text-[20px] md:text-[22px] lg:text-[25px] leading-[1.2] font-bold text-center">
        {title}
      </h4>
      <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] text-center text-[#4A4A4A]">
        {content}
      </p>
    </motion.div>
  );
}

export default function Areas() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col gap-[20px] mt-[40px] md:mt-[88px] items-center justify-center mx-4 md:mx-[53px]"
    >
      <motion.h3
        variants={fadeIn}
        className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] md:leading-[52.08px] font-bold text-center px-4"
      >
        Our Thematic Areas
      </motion.h3>
      <motion.div
        variants={staggerContainer}
        className="mt-[30px] md:mt-[69px] flex flex-wrap items-center justify-center gap-[18px] px-4"
      >
        <Cards
          title="Heart"
          icon="/images/heart.svg"
          content="Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
        />
        <Cards
          title="Right"
          icon="/images/connect.svg"
          content="Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
        />
        <Cards
          icon="/images/gender.svg"
          title="Gender Equality and Inclusion"
          content="Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
        />
        <Cards
          icon="/images/shield.svg"
          title="Peace and Security"
          content="Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
        />
      </motion.div>
    </motion.section>
  );
}
