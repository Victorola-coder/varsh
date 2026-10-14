import React from "react";
import { getBlogPosts } from "@/lib/content";
import BlogList from "@/app/components/blog/blog-list";
import NewsletterForm from "@/app/components/forms/newsletter-form";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and resources from VARSH Foundation on consent, supporting survivors, advocacy and campus safety.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — VARSH Foundation",
    description: "Articles and resources from VARSH Foundation on consent, supporting survivors, advocacy and campus safety.",
    url: "/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();



  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          VARSH Blog
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
          Stay informed with the latest articles, resources, and stories from
          VARSH Foundation. Our blog features insights on sexual abuse
          prevention, survivor support, and community engagement.
        </p>
      </section>

      <section className="mb-16">
        <BlogList posts={posts} />
      </section>

      <section className="mb-12">
        <div className="bg-[#252A34] text-white p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">VARSH Archives</h2>
          <p className="mb-6">
            Explore our blog archives for more articles and resources on our
            work and mission.
          </p>
          <a
            href="https://varshorg.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#252A34] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            Visit Our Archive
          </a>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-[#FF360010] p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">
            Read Our Medium Articles
          </h2>
          <p className="mb-6">
            Check out our Medium publication for more in-depth articles and
            thought pieces from our team.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@varshfoundationng"
            className="bg-[#FF3600] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e13000] transition-colors inline-block"
          >
            Visit Our Medium Page
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Subscribe to Our Newsletter
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Stay updated with our latest articles, resources, and events by
            subscribing to our newsletter.
          </p>
          <NewsletterForm className="flex flex-col md:flex-row gap-4" />
        </div>
      </section>
    </main>
  );
}
