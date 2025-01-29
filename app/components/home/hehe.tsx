import Link from "next/link";
import { Button, Image } from "../ui";
import area from "@/public/images/area.svg";

export default function More() {
  return (
    <div className="flex mx-[50px] mt-[87px] items-center gap-[100px] justify-between">
      <figure>
        <Image src={area} alt="children" draggable={false} />
      </figure>
      <div className="w-[807px] flex flex-col gap-[23px]">
        <h1 className="text-[42px] leading-[52.08px] font-bold text-[#1D1D1D]">
          Together for a Safer, More Equal World - Free From Sexual Abuse.
          <p className="h-[3px] w-[40%] bg-[#FF3600]"></p>
        </h1>
        <p>
          For many years, the issue of sexual abuse has lingered in the shadows,
          often silenced by fear, stigma and societal indifference. In response
          to this pressing concern, VARSH Foundation emerged as a beacon of hope
          and change, dedicated to creating a world that is safer, more
          equitable and free from the scourge of sexual abuse.
        </p>
        <Link href="/learn-more">
          <Button variant="danger" className="md:w-[222px]">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}
