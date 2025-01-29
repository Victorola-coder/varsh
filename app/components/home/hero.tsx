import React from "react";
import { Button } from "../ui";

export default function Hero() {
  return (
    <div className="bg-[url('/images/hero.png')] bg-no-repeat text-white w-screen h-screen bg-body flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF360080] to-[#252A34B2]"></div>
      <h1 className="font-lato text-[64px] font-bold leading-[76.8px] relative z-10">
        Reach One, Reach All
      </h1>
      <p className="font-medium text-[27px] leading-[33.48px] text-center mt-4 relative z-10">
        Together for a safer, More equal world - Free from sexual abuse
      </p>
      <Button variant="outline" className="relative z-10 w-[222px] mt-6">
        Donate
      </Button>
    </div>
  );
}
