import clsx from "clsx";
import { Button } from "../ui";
import Link from "next/link";
import { ArrowRightIcon } from "../svgs";

export default function Initiatives() {
  return (
    <section className="mt-[50px] md:mt-[80px] lg:mt-[100px] mx-4 md:mx-[30px] lg:mx-[50px]">
      <h2 className="text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] font-semibold font-lato text-center text-[#000000]">
        Featured Initiatives
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-[20px] md:gap-[17px] mt-[30px] md:mt-[45px] lg:mt-[64px]">
        <Card
          icon={"/images/init-3.png"}
          path={"reach"}
          title={"Reach Every Child"}
          content={
            "Empowering children with knowledge, confidence, and the tools to stand against sexual violence."
          }
        />
        <Card
          icon={"/images/init-4.jpg"}
          path={"girls-talk"}
          title={"Girl's Talk"}
          content={
            "Creating safe spaces where girls can share, learn, and lead conversations on empowerment and rights."
          }
        />
        <Card
          icon={"/images/init-5.jpg"}
          path={"top-girls"}
          title={"The Top Girls Mentorship Initiative"}
          content={
            "Empowering young girls to become confident, capable leaders, and guiding them to pursue their dreams and create meaningful change."
          }
        />
        <Card
          icon={"/images/init-2.jpg"}
          path={"safe-communities"}
          title={"Project Safe Communities"}
          content={
            "Building safer campuses and communities through advocacy, education, and grassroots action."
          }
        />
        <Card
          icon={"/images/init-1.jpg"}
          path={"walk-against-rape"}
          title={"Walk against Rape"}
          content={
            "We create awareness on sexual and gender-based violence through advocacy walks aimed at sensitizing people on SGBV and its effects in society."
          }
        />
        <Card
          icon={"/images/init-6.jpg"}
          path={"love-on-the-street"}
          title={"Love on the Street( LOTS)"}
          content={
            "Love on the Street is one of our charity initiatives aimed at spreading love and reaching out to children in underserved communities."
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
      className="w-full md:w-[340px] lg:w-[393px] px-4 md:px-[33px] relative pb-[30px] pt-[80px] md:pt-[111px] rounded-[20px] text-[#FFFFFF] flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${icon})` }}
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[#00000080] via-[#00000080] to-[#3B3B3B80]"></div>
      <h4 className="text-[20px] md:text-[22px] lg:text-[25px] leading-[1.2] md:leading-[31px] font-bold relative z-10">
        {title}
      </h4>
      <p className="text-[16px] md:text-[17px] lg:text-[18px] mt-[10px] max-w-[465px] leading-[1.5] md:leading-[28px] text-start relative z-10">
        {content}
      </p>

      <Link href={path}>
        <p className="mt-4 md:mt-6 justify-self-end text-[16px] md:text-[18px] leading-[28px] font-bold flex flex-row items-center relative z-10">
          learn more
          <span>
            <ArrowRightIcon className="ml-2" />
          </span>
        </p>
      </Link>
    </div>
  );
};
