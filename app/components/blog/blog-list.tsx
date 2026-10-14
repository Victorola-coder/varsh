"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPostItem } from "@/lib/default-content";

const formatDate = (d: string | null) =>
  d
    ? new Date(d).toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

/**
 * Article grid with a working category filter. The old page had a <select>
 * with hardcoded options and no handler, so it did nothing — options are now
 * derived from the posts themselves.
 */
export default function BlogList({ posts }: { posts: BlogPostItem[] }) {
  const [category, setCategory] = useState("all");

  const categories = useMemo(
    () => [...new Set(posts.map((p) => p.category).filter(Boolean))] as string[],
    [posts]
  );

  const visible =
    category === "all" ? posts : posts.filter((p) => p.category === category);

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Latest Articles</h2>
        {categories.length > 0 && (
          <div className="flex items-center gap-2">
            <label htmlFor="category" className="text-gray-600">
              Filter by:
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#FF3600]"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="text-gray-500">No articles in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((post) => {
            const external = Boolean(post.url);
            const href = post.url ?? `/blog/${post.slug}`;
            return (
              <article
                key={post.slug}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <div className="h-48 bg-gray-200 relative">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      {post.category ?? "Article"}
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2 gap-x-2">
                    {post.category && (
                      <span className="bg-[#FF360030] text-[#FF3600] px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    )}
                    {post.date && <span>{formatDate(post.date)}</span>}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {post.author ? `By ${post.author}` : ""}
                    </span>
                    <Link
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[#FF3600] hover:text-[#e13000] font-medium"
                    >
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}
