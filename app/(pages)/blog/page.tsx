import React from "react";
import Link from "next/link";

export default function BlogPage() {
  // Sample blog posts for demonstration
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Consent: A Comprehensive Guide",
      excerpt:
        "Consent is a fundamental aspect of healthy relationships. In this article, we explore what consent means, how to recognize it, and why it's important...",
      date: "April 15, 2024",
      author: "Hassanat Adebowale",
      category: "Education",
    },
    {
      id: 2,
      title: "Supporting Survivors: Best Practices",
      excerpt:
        "When someone discloses their experience with sexual abuse, how you respond can make a significant difference. Here are some ways to provide support...",
      date: "March 22, 2024",
      author: "Ferosayemi Faith Ogunbona",
      category: "Support",
    },
    {
      id: 3,
      title: "The Impact of RECH in Nigerian Communities",
      excerpt:
        "Our Reach Every Child project has made significant strides in communities across Nigeria. This article highlights the impact and lessons learned...",
      date: "February 10, 2024",
      author: "Barnabas Benjamin-Iorguma",
      category: "Project Spotlight",
    },
    {
      id: 4,
      title: "Breaking the Silence: Why Reporting Matters",
      excerpt:
        "Many cases of sexual abuse go unreported due to fear, stigma, or lack of information. Here's why reporting is important and how to do it safely...",
      date: "January 28, 2024",
      author: "Aworanti Salvation Grace",
      category: "Advocacy",
    },
    {
      id: 5,
      title: "Teaching Children About Personal Boundaries",
      excerpt:
        "Educating children about personal boundaries is a crucial aspect of abuse prevention. Here are age-appropriate ways to discuss this important topic...",
      date: "December 12, 2023",
      author: "Abioye Ismat",
      category: "Education",
    },
    {
      id: 6,
      title: "Campus Safety: Creating Safer Learning Environments",
      excerpt:
        "Educational institutions should be safe spaces for all students. This article explores strategies for creating and maintaining safer campuses...",
      date: "November 5, 2023",
      author: "Shonibare Temitope Emmanuel",
      category: "Campus Life",
    },
  ];

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

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Latest Articles
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Filter by:</span>
            <select className="border border-gray-300 rounded-md px-3 py-1">
              <option value="all">All Categories</option>
              <option value="education">Education</option>
              <option value="support">Support</option>
              <option value="advocacy">Advocacy</option>
              <option value="project">Project Spotlight</option>
              <option value="campus">Campus Life</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Replace with actual blog post image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Blog Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-[#FF360030] text-[#FF3600] px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    By {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#FF3600] hover:text-[#e13000] font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
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
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3600]"
              required
            />
            <button
              type="submit"
              className="bg-[#FF3600] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e13000] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
