import React from "react";
import Link from "next/link";
import { getFaqs } from "@/lib/content";
import type { FaqItem } from "@/lib/default-content";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers about VARSH Foundation, support for survivors, membership, volunteering, partnerships and donations.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs — VARSH Foundation",
    description: "Answers about VARSH Foundation, support for survivors, membership, volunteering, partnerships and donations.",
    url: "/faqs",
    type: "website",
  },
};

export default async function FaqsPage() {
  const faqs = await getFaqs();

  // Group by category, preserving the order the questions come back in so the
  // admin's ordering drives both the sections and the questions inside them.
  const sections: { category: string; items: FaqItem[] }[] = [];
  for (const faq of faqs) {
    const category = faq.category || "General";
    const section = sections.find((s) => s.category === category);
    if (section) section.items.push(faq);
    else sections.push({ category, items: [faq] });
  }

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
          Find answers to common questions about VARSH Foundation, our work in
          combating sexual and gender-based violence, and how you can support
          our mission.
        </p>
      </section>

      {sections.map((section) => (
        <section key={section.category} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {section.category}
          </h2>

          <div className="space-y-6">
            {section.items.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-base md:text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          If you couldn&apos;t find the answer to your question, please feel
          free to reach out to us directly. We&apos;re committed to transparency
          and are happy to provide any additional information you need about our
          work.
        </p>
        <Link
          href="/contact"
          className="bg-[#FF3600] text-white py-3 px-6 rounded-md hover:bg-[#e13000] transition-colors inline-block"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
