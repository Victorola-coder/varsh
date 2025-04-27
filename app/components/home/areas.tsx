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
          title="Charity"
          icon="/images/heart.svg"
          content="Compassion drives our charitable initiatives aimed at supporting children and women in undeserved communities and supporting out of school girls with the initiative to bring them back to school. we provide essential services and aids to survivors of SGBV and those in need, contributing to SDG 1: End poverty in all its forms everywhere."
        />
        <Cards
          title="Child Rights and protection"
          icon="/images/connect.svg"
          content="We are committed to fighting child sexual abuse and promoting adequate sex education for adolescents. 
Our mission is to protect children's rights and well-being by advocating for their safety, education, and development, as well as ensuring that they are not abused, exploited, or neglected. Our efforts align with SDG 16.2: End child abuse, exploitation, trafficking, and all forms of violence and torture."
        />
        <Cards
          icon="/images/gender.svg"
          title="Gender Equality and Inclusion"
          content="We are dedicated to promoting gender equality and addressing power imbalances that perpetuate gender based violence and discrimination.   Our programs seek to eliminate gender based violence, prejudice, challenge harmful preconceptions, and create inclusive environments in which all people can thrive.  This pledge is consistent with SDG 5: Achieving gender equality and empowering all women and girls."
        />
        <Cards
          icon="/images/shield.svg"
          title="Peace and Security"
          content="We work to create peaceful, just, and inclusive societies by increasing access to justice and strengthening institutions.  To promote human rights and the rule of law, we engage in legal advocacy, community participation, and policy change. This aligns with SDG 16: Promote peaceful and inclusive societies for sustainable development, offer access to justice for everyone, and build effective, responsible, and inclusive institutions at all levels.
"
        />
      </motion.div>
    </motion.section>
  );
}
