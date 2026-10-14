import React from "react";
import { getContact } from "@/lib/content";
import SocialLinks from "@/app/components/social-links";
import FeedbackForm from "@/app/components/forms/feedback-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
  description: "Share your feedback and suggestions with VARSH Foundation.",
  alternates: { canonical: "/feedback" },
  openGraph: {
    title: "Feedback — VARSH Foundation",
    description: "Share your feedback and suggestions with VARSH Foundation.",
    url: "/feedback",
    type: "website",
  },
};

export default async function FeedbackPage() {
  const contact = await getContact();

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Feedback
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
          We value your feedback and suggestions. Please use the form below to
          share your thoughts with us.
        </p>
      </section>

      <section className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-16">
        <FeedbackForm />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#FF360010] p-6 rounded-lg text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-[#FF3600]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="mb-4">Send us an email directly at:</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-[#FF3600] hover:underline"
          >{contact.email}</a>
        </div>

        <div className="bg-[#252A3410] p-6 rounded-lg text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-[#252A34]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Social Media</h3>
          <p className="mb-4">Reach out to us on our social platforms:</p>
          <SocialLinks contact={contact} className="flex justify-center space-x-4" />
        </div>

        {contact.phone ? (
        <div className="bg-[#FF360010] p-6 rounded-lg text-center">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-[#FF3600]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="mb-4">Call us directly at:</p>
          <a
            href={`tel:${contact.phone}`}
            className="text-[#FF3600] hover:underline"
          >
            {contact.phone}
          </a>
        </div>
        ) : null}
      </section>
    </main>
  );
}
