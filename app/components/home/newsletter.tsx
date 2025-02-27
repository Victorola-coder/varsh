"use client";

import { toast } from "sonner";
import { Input, Button } from "../ui";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../animations";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mt-[40px] md:mt-[88px] bg-[#F7F7F7] py-[40px] md:py-[60px] lg:py-[80px] px-4 md:px-8"
    >
      <motion.div
        variants={fadeIn}
        className="max-w-[800px] mx-auto text-center"
      >
        <motion.h3
          variants={slideIn}
          className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] md:leading-[52.08px] font-bold"
        >
          Subscribe to Our Newsletter
        </motion.h3>
        <motion.p
          variants={fadeIn}
          className="mt-4 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-[#4A4A4A]"
        >
          Stay updated with our latest news and announcements
        </motion.p>
        <motion.form
          variants={fadeIn}
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-8"
        >
          <Input
            type="email"
            value={email}
            required
            placeholder="Enter email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="w-full md:w-[300px] bg-white border border-[#E5E5E5] focus:border-[#FF3600]"
          />
          <Button
            type="submit"
            variant="danger"
            loading={loading}
            className="w-full md:w-auto px-8"
          >
            Subscribe
          </Button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}
