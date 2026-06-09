"use client";

import { toast } from "sonner";
import { Input, Button } from "../ui";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../animations";
import type { Newsletter as NewsletterContent } from "@/lib/default-content";
import { newsletterDefault } from "@/lib/default-content";

export default function Newsletter({
  newsletter = newsletterDefault,
}: {
  newsletter?: NewsletterContent;
}) {
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
      id="newsletter"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="mt-[60px] md:mt-[100px] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3600]/10 to-[#FF3600]/5 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#FF3600]/10 z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#FF3600]/5 z-0"></div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div variants={fadeIn} className="text-left">
            <motion.span
              variants={slideIn}
              className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[#FF3600]/10 text-[#FF3600]"
            >
              {newsletter.badge}
            </motion.span>
            <motion.h3
              variants={slideIn}
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] font-bold"
            >
              {newsletter.heading}
            </motion.h3>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-[16px] md:text-[18px] leading-[1.6] text-[#4A4A4A] max-w-md"
            >
              {newsletter.body}
            </motion.p>

            <div className="mt-8 space-y-4">
              {newsletter.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FF3600]/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-[#FF3600]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-[#4A4A4A]">{bullet}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full text-[#FF3600]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h4 className="text-xl font-medium mb-4 text-center">
              Subscribe Today
            </h4>
            <motion.form
              variants={fadeIn}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  required
                  placeholder="yourname@example.com"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="w-full bg-white border !border-[#E5E5E5] !text-black focus:ring-2 focus:ring-[#FF3600]/20 focus:border-[#FF3600] rounded-lg"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="danger"
                  loading={loading}
                  className="w-full py-3 rounded-lg transition-all transform hover:scale-[1.02]"
                >
                  Subscribe Now
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
