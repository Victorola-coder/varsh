import Link from "next/link";
import { Button } from "../ui";
import type { MoreBand } from "@/lib/default-content";
import { moreDefault } from "@/lib/default-content";

export default function More({ more = moreDefault }: { more?: MoreBand }) {
  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-[50px] mt-[40px] md:mt-[87px] items-center gap-[40px] lg:gap-[100px] lg:justify-between">
      <figure className="w-full lg:w-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={more.image}
          alt="children"
          draggable={false}
          className="w-full h-auto"
        />
      </figure>
      <div className="w-full lg:w-[807px] flex flex-col gap-[23px]">
        <h1 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] md:leading-[52.08px] font-bold text-[#1D1D1D] text-center lg:text-left">
          {more.heading}
          <p className="h-[3px] w-[40%] bg-[#FF3600] mx-auto lg:mx-0"></p>
        </h1>
        <p className="text-center lg:text-left px-4 lg:px-0">{more.body}</p>
        <div className="flex justify-center lg:justify-start">
          <Link href={more.ctaHref}>
            <Button variant="danger" className="w-[180px] md:w-[222px]">
              {more.ctaLabel}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
