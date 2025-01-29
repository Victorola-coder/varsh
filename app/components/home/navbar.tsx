"use client";

import Link from "next/link";
import { Button } from "../ui";
import Image from "next/image";
// import { Logo } from "../svgs";
import logo from "@/public/images/logo.svg";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const navRef = useRef<any>(null);

  const handleClick = useCallback(
    function (e: Event) {
      if (isOpened && !navRef.current.contains(e.target)) {
        setIsOpened(false);
      }
    },
    [isOpened]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isOpened) {
      setTimeout(() => {
        window.addEventListener("mousedown", handleClick);
      });
    } else {
      window.removeEventListener("mousedown", handleClick);
    }
  }, [isOpened, handleClick]);

  return (
    <header
      id="navbar"
      className="lg:mx-[55px] pt-5 mx-[30px] lg:py-[48px]  md:mx-[20px] md:py-[18px]"
    >
      <nav className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-[12.12px] md:items-center md:mx-auto">
          <figure>
            <Image src={logo} draggable={false} alt="Logo" />
          </figure>
        </div>
        <div className="hidden md:flex items-center gap-[12.12px]">
          <ul className="flex flex-row gap-4 md:text-[16px] md:leading-[24px] md:tracking-[0.5px] font-medium font-sailmed text-dark">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* AUTH LINKS - HIDDEN ON MOBILE */}
        <div className="hidden md:flex items-center gap-[22px]">
          <Link
            href="/login"
            className="font-sailmed text-black md:text-[16px] md:leading-[24px] md:tracking-[0.5px] font-medium"
            replace
          >
            Log In
          </Link>
          <Link href="/signup">
            <Button className="font-sail font-medium text-white tracking-[-0.5px] md:leading-[24px] md:text-[16px] bg-primary rounded-[31px] px-[22px] py-[12px]">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="md:hidden" ref={navRef}>
          <div className="">
            <button
              className="space-y-1.5 focus:outline-none active:ring active:ring-dark p-1 pb-1.5 rounded-full"
              onClick={() => setIsOpened(!isOpened)}
            >
              <div
                className={`rounded-full h-0.5 bg-dark transition-all duration-300 ${
                  isOpened
                    ? "w-7 rotate-45 translate-y-2.5"
                    : "w-7 rotate-0 translate-x-5_"
                }`}
              />
              <div
                className={`rounded-full h-0.5 bg-primary w-7 translate-x-[px] transition-all duration-300  ${
                  isOpened ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`rounded-full h-0.5 bg-dark self-end transition-all duration-300 ${
                  isOpened
                    ? "w-7 -rotate-45 -translate-y-1.5"
                    : "w-7 translate-x-[x] rotate-0"
                }`}
              />
            </button>
            <div>
              <div
                className={`grad z-[100] absolute bg-white px-[26px] py-[28px] border-[1.5px] shadow-lg block mt-[60px] md:hidden transition-all duration-300 ${
                  isOpened ? "-translate-y-[50px]" : "-translate-y-[200%]"
                } pt-4 left-0 right-0`}
              >
                <ul className="flex flex-col gap-[22px] items-center justify-center  mx-auto font-medium text-base tracking-tight text-center leading-[24px] font-sailmed text-dark">
                  <li>
                    <Link href="#features">Features</Link>
                  </li>
                  <li>
                    <Link href="#faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link href="/login" replace>
                      Log In
                    </Link>
                  </li>
                </ul>
                <Link href="/sign-up">
                  <Button className="mt-5 bg-primary whitespace-nowrap w-[330px] text-[16px] py-[12px] md:py-[18px] leading-[33px] rounded-[12px] md:absolute md:top-2 md:bottom-2 md:right-[7.8px] text-center outline-none md:px-[37.74px] font-sailmed text-[#ffffff] md:text-[20px] md:w-[218px] font-medium md:leading-[25.65px] md:rounded-[35.942px]">
                    Create my page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
