"use client";

import React from "react";
import Link from "next/link";
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
      className="w-full md:w-[340px] lg:w-[493px] px-4 md:px-[33px] py-[30px] rounded-[20px] border border-[#E5E5E5] bg-[#FFFFFF] flex flex-col items-center gap-4"
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
    <motion.div variants={fadeIn} className="text-center">
      <h4 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#FF3600] mb-2">
        {number}
      </h4>
      <h5 className="text-[18px] md:text-[20px] font-semibold text-[#252A34] mb-2">
        {label}
      </h5>
      <p className="text-[14px] md:text-[16px] text-[#4A4A4A]">{description}</p>
    </motion.div>
  );
}

export default function Areas() {
  return (
    <>
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
          className="mt-[30px] md:mt-[69px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center gap-[18px] px-4"
        >
          <Cards
            icon="/images/gender.svg"
            title="Gender Equality and Inclusion"
            content="We are dedicated to promoting gender equality and addressing power imbalances that perpetuate gender based violence and discrimination.   Our programs seek to eliminate gender based violence, prejudice, challenge harmful preconceptions, and create inclusive environments in which all people can thrive.  This pledge is consistent with SDG 5: Achieving gender equality and empowering all women and girls."
          />
          <Cards
            title="Child Rights and protection"
            icon="/images/connect.svg"
            content="We are committed to fighting child sexual abuse and promoting adequate sex education for adolescents. 
Our mission is to protect children's rights and well-being by advocating for their safety, education, and development, as well as ensuring that they are not abused, exploited, or neglected. Our efforts align with SDG 16.2: End child abuse, exploitation, trafficking, and all forms of violence and torture."
          />
          <Cards
            icon="/images/shield.svg"
            title="Peace and Justice"
            content="We work to create peaceful, just, and inclusive societies by increasing access to justice and strengthening institutions.  To promote human rights and the rule of law, we engage in legal advocacy, community participation, and policy change. This aligns with SDG 16: Promote peaceful and inclusive societies for sustainable development, offer access to justice for everyone, and build effective, responsible, and inclusive institutions at all levels.
"
          />
          <Cards
            title="Charity"
            icon="/images/heart.svg"
            content="Compassion drives our charitable initiatives aimed at supporting children and women in undeserved communities and supporting out of school girls with the initiative to bring them back to school. we provide essential services and aids to survivors of SGBV and those in need, contributing to SDG 1: End poverty in all its forms everywhere."
          />
        </motion.div>
      </motion.section>

      {/* Our Reach Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-[#F8F9FA] py-[60px] md:py-[100px] mt-[60px] md:mt-[100px]"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <motion.h3
            variants={fadeIn}
            className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] font-bold text-center mb-[50px] md:mb-[80px]"
          >
            Our Reach
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[60px]"
          >
            <ReachCard
              number="5,000+"
              label="Lives Impacted"
              description="Individuals reached through our programs and initiatives"
            />
            <ReachCard
              number="15+"
              label="Communities"
              description="Local communities where we have active programs"
            />
            <ReachCard
              number="6"
              label="University Clubs"
              description="Campus clubs spreading awareness in universities"
            />
            <ReachCard
              number="50+"
              label="Volunteers"
              description="Dedicated volunteers working with us across Nigeria"
            />
          </motion.div>

          <motion.div variants={fadeIn} className="text-center">
            <h4 className="text-[20px] md:text-[24px] font-semibold text-[#252A34] mb-6">
              Join Our Mission
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="/get-involved#become-member">
                <button className="bg-[#FF3600] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#e13000] transition-colors">
                  Become a Member
                </button>
              </Link>
              <Link href="/get-involved#volunteers">
                <button className="bg-transparent border-2 border-[#FF3600] text-[#FF3600] px-6 py-3 rounded-lg font-medium hover:bg-[#FF3600] hover:text-white transition-colors">
                  Join as Volunteer
                </button>
              </Link>
              <Link href="/#newsletter">
                <button className="bg-[#252A34] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a1e26] transition-colors">
                  Subscribe to Newsletter
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
