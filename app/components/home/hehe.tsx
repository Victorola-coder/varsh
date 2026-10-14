import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./section-heading";
import type { MoreBand } from "@/lib/default-content";
import { moreDefault } from "@/lib/default-content";

export default function More({ more = moreDefault }: { more?: MoreBand }) {
  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-8 lg:mx-[50px] mt-[56px] md:mt-[88px] lg:mt-[112px] items-center gap-[40px] lg:gap-[100px] lg:justify-between">
      <figure className="w-full lg:w-auto overflow-hidden rounded-[20px]">
        <Image
          src={more.image}
          alt="children"
          width={800}
          height={600}
          draggable={false}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-auto"
        />
      </figure>

      <div className="w-full lg:w-[807px] flex flex-col gap-6">
        {/* This was a second <h1> on the page (the hero already has one), with
            a <p> nested inside it — invalid, and bad for SEO. */}
        <SectionHeading title={more.heading} align="left" />

        <p className="text-[16px] md:text-[18px] leading-relaxed text-[#4A4A4A] max-w-[70ch]">
          {more.body}
        </p>

        <div>
          <Link
            href={more.ctaHref}
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-[#e13000] active:scale-[0.98]"
          >
            {more.ctaLabel}
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
