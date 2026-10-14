import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { ArrowRightIcon } from "../svgs";
import type { InitiativeItem } from "@/lib/default-content";
import { initiativesDefault } from "@/lib/default-content";

export default function Initiatives({
  initiatives = initiativesDefault,
}: {
  initiatives?: InitiativeItem[];
}) {
  return (
    <section className="mt-[56px] md:mt-[88px] lg:mt-[112px] mx-4 md:mx-8 lg:mx-[50px]">
      <SectionHeading
        eyebrow="What we do"
        title="Featured Initiatives"
        subtitle="Programmes running across Nigerian communities and campuses."
      />

      <div className="mt-[30px] md:mt-[45px] lg:mt-[64px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {initiatives.map((initiative) => (
          <Card
            key={initiative.slug}
            image={initiative.image}
            path={initiative.slug}
            title={initiative.title}
            content={initiative.description}
          />
        ))}
      </div>
    </section>
  );
}

const Card = ({
  image = "/images/ini-1.png",
  path,
  title,
  content,
}: {
  image: string;
  path: string;
  title: string;
  content: string;
}) => {
  return (
    <Link
      href={path}
      // `group` drives the image zoom and arrow nudge below.
      className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-[20px] p-6 text-white transition-shadow duration-300 hover:shadow-[0_20px_48px_-20px_rgba(0,0,0,0.5)]"
    >
      {/* The card art used to be a CSS url(), which skips next/image entirely
          and shipped the full-size source on every visit. */}
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
      />

      {/* Readability scrim, weighted to the bottom where the text sits. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10 transition-opacity duration-300 group-hover:from-black/90"
      />

      <div className="relative z-10">
        <h3 className="text-[20px] md:text-[22px] font-bold leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
          {title}
        </h3>
        <p className="mt-2 text-[15px] md:text-[16px] leading-relaxed text-white/85 line-clamp-4">
          {content}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold">
          Learn more
          <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};
