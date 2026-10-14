import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/content";

/**
 * Article detail page. The blog index previously linked to /blog/<id>, which
 * had no route at all — every "Read More" was a 404.
 */
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getBlogPosts()).find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: `${post.title} — VARSH Foundation`, description: post.excerpt };
}

const formatDate = (d: string | null) =>
  d
    ? new Date(d).toLocaleDateString("en-NG", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = (await getBlogPosts()).find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[800px] mx-auto">
      <Link
        href="/blog"
        className="text-[#FF3600] hover:text-[#e13000] font-medium"
      >
        &larr; Back to blog
      </Link>

      <header className="mt-6 mb-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
          {post.category && (
            <span className="bg-[#FF360030] text-[#FF3600] px-2 py-1 rounded-full">
              {post.category}
            </span>
          )}
          {post.date && <span>{formatDate(post.date)}</span>}
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {post.title}
        </h1>
        {post.author && (
          <p className="mt-4 text-gray-600">By {post.author}</p>
        )}
      </header>

      {post.image && (
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover"
          />
        </div>
      )}

      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        {post.excerpt}
      </p>

      {post.content ? (
        <div
          className="project-body text-base md:text-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      ) : (
        <p className="text-gray-500">
          The full article hasn&apos;t been published here yet.{" "}
          <Link href="/contact" className="text-[#FF3600] hover:underline">
            Get in touch
          </Link>{" "}
          if you&apos;d like to know more.
        </p>
      )}
    </main>
  );
}
