import React from "react";
import { Button } from "../ui";

export default function Hero() {
  return (
    <div className="bg-[url('/images/hero.png')] bg-no-repeat text-white w-screen h-screen bg-body flex flex-col items-center justify-center relative bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF360080] to-[#252A34B2]"></div>
      <h1 className="font-lato text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.2] md:leading-[76.8px] relative z-10 text-center px-4">
        Reach One, Reach All
      </h1>
      <p className="font-medium text-[18px] md:text-[22px] lg:text-[27px] leading-[1.3] md:leading-[33.48px] text-center mt-4 relative z-10 px-4 max-w-[90%] md:max-w-none">
        Together for a safer, More equal world - Free from sexual abuse
      </p>
      <Button
        variant="outline"
        className="relative z-10 w-[180px] md:w-[222px] mt-6"
      >
        Donate
      </Button>
    </div>
  );
}
