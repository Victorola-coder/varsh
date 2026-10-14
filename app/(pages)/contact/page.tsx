import React from "react";
import Link from "next/link";
import { getContact } from "@/lib/content";
import SocialLinks from "@/app/components/social-links";
import ContactForm from "@/app/components/forms/contact-form";
import NewsletterForm from "@/app/components/forms/newsletter-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with VARSH Foundation — send a message, find our email and address, or follow us on social media.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — VARSH Foundation",
    description: "Get in touch with VARSH Foundation — send a message, find our email and address, or follow us on social media.",
    url: "/contact",
    type: "website",
  },
};

export default async function ContactPage() {
  const contact = await getContact();

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
          Have questions or need assistance? We&apos;re here to help. Feel free to
          reach out to us through any of the methods below.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#FF3600] mt-1 mr-3"
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
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-[#FF3600] hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
              {contact.phone ? (
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#FF3600] mt-1 mr-3"
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
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <a href={`tel:${contact.phone}`} className="text-gray-600">
                    {contact.phone}
                  </a>
                </div>
              </div>
              ) : null}
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#FF3600] mt-1 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">{contact.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <p className="mb-4">
              Stay connected with us on social media for updates, news, and
              events.
            </p>
            <SocialLinks contact={contact} />
          </div>

          <div className="bg-[#252A34] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
              Volunteer or Partner
            </h2>
            <p className="mb-4">
              Interested in volunteering with us or forming a partnership? Visit
              our Get Involved page to learn more about how you can contribute
              to our mission.
            </p>
            <Link
              href="/get-involved"
              className="bg-white text-[#252A34] py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center mb-8">
          Find answers to common questions about VARSH Foundation and our work.
          If you don&apos;t find what you&apos;re looking for, please contact us directly.
        </p>
        <div className="text-center">
          <Link
            href="/faqs"
            className="bg-[#FF3600] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e13000] transition-colors inline-block"
          >
            View FAQs
          </Link>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-center mb-6">
            Stay updated with our latest news, events, and initiatives by
            subscribing to our newsletter.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </main>
  );
}
