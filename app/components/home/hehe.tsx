import Link from "next/link";
import { Button, Image } from "../ui";
import area from "@/public/images/hehe.jpeg";

export default function More() {
  return (
    <div className="flex flex-col lg:flex-row mx-4 md:mx-[50px] mt-[40px] md:mt-[87px] items-center gap-[40px] lg:gap-[100px] lg:justify-between">
      <figure className="w-full lg:w-auto">
        <Image
          src={area}
          alt="children"
          draggable={false}
          className="w-full h-auto"
        />
      </figure>
      <div className="w-full lg:w-[807px] flex flex-col gap-[23px]">
        <h1 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] md:leading-[52.08px] font-bold text-[#1D1D1D] text-center lg:text-left">
          Together for a Safer, More Equal World - Free From Sexual Abuse.
          <p className="h-[3px] w-[40%] bg-[#FF3600] mx-auto lg:mx-0"></p>
        </h1>
        <p className="text-center lg:text-left px-4 lg:px-0">
          For many years, the issue of sexual abuse has lingered in the shadows,
          often silenced by fear, stigma and societal indifference. In response
          to this pressing concern, VARSH Foundation emerged as a beacon of hope
          and change, dedicated to creating a world that is safer, more
          equitable and free from the scourge of sexual abuse.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link href="/about">
            <Button variant="danger" className="w-[180px] md:w-[222px]">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
