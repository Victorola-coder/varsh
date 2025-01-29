import clsx from "clsx";
import { Button } from "../ui";
import Link from "next/link";
import { ArrowRightIcon } from "../svgs";

export default function Initiatives() {
  return (
    <section className="mt-[100px] mx-[50px]">
      <h2 className="text-[#000000] text-[40px] leading-[48px] font-semibold font-lato text-center">
        Featured Initiatives
      </h2>
      <div className="flex flex-row justify-center gap-[17px] mt-[64px]">
        <Card
          icon={"/images/init-3.png"}
          path={"reach"}
          title={"Reach Every Child"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque "
          }
        />
        <Card
          icon={"/images/init-2.png"}
          path={"girls-talk"}
          title={"Girl’s Talk"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque "
          }
        />
        <Card
          icon={"/images/ini-1.png"}
          path={"reach"}
          title={"Walk against Rape"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque "
          }
        />
      </div>
    </section>
  );
}

const Card = ({
  icon = "/images/ini-1.png",
  path,
  title,
  content,
}: {
  icon: string;
  path: string;
  title: string;
  content: string;
}) => {
  return (
    <div
      className="w-[393px] px-[33px] relative pb-[30px] pt-[111px] rounded-[20px] text-[#FFFFFF] flex flex-col  justify-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${icon})` }}
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#00000080] via-[#00000080] to-[#3B3B3B80]"></div>
      <h4 className="text-[25px] leading-[31px] font-bold relative z-10">
        {title}
      </h4>
      <p className="text-[18px] mt-[10px] max-w-[465px] leading-[28px] text-start relative z-10">
        {content}
      </p>

      <Link href={path}>
        <p className="justify-self-end text-[18px] leading-[28px] font-bold flex flex-row items-center relative z-10">
          learn more
          <span>
            <ArrowRightIcon className="ml-2" />
          </span>
        </p>
      </Link>
    </div>
  );
};
