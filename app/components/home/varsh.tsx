import React from "react";
import { Image } from "../ui";
import { CheckIcon } from "../svgs";
import child from "@/public/images/child.svg";

export default function Varsh() {
  return (
    <section className="flex row mx-[53px] mt-[100px]">
      <div className="flex flex-col gap-5">
        <h2 className="text-[#1D1D1D] text-[40px] leading-[52px] font-semibold">
          VARSH FOUNDATION<p className="h-[3px] w-[20%] bg-[#FF3600]"></p>
        </h2>
        <p className="font-normal text-[20px] leading-[40px] max-w-[807px]">
          VARSH Foundation was founded in 2019 by a group of passionate and
          determined individuals led by Salvation Grace, who recognised the
          urgent need to address and combat sexual abuse and gender-based
          violence in our society. The name VARSH, albeit an acronym for Voices
          Against Rape and Sexual Harassment, is a Sanskrit word meaning "rain."
          This signifies a refreshing and cleansing force, much like the
          transformative impact the foundation aspires to have on society.
        </p>
        <div>
          <h4 className="font-normal text-[20px] leading-[40px] max-w-[807px]">
            Over the years, VARSH Foundation has made significant strides in its
            fight against sexual abuse:
          </h4>
          <div className="flex flex-col gap-5 max-w-[734px]">
            <Strides
              content={
                <>
                  <span className="text-[#FF3600]">Education:</span> We have
                  reached thousands of individuals through awareness programs
                  and training sessions.
                </>
              }
            />
            <Strides
              content={
                <>
                  <span className="text-[#FF3600]">Counselling: </span>
                  Our support has helped survivors regain confidence and rebuild
                  their lives.
                </>
              }
            />
            <Strides
              content={
                <>
                  <span className="text-[#FF3600]">Policy Impact:</span> We have
                  contributed to the development of policies that protect the
                  rights of survivors and address sexual abuse.
                </>
              }
            />
          </div>
        </div>
      </div>
      <figure>
        <Image src={child} alt="children" draggable={false} />
      </figure>
    </section>
  );
}

function Strides({ content }: { content: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-row items-start gap-5">
        <CheckIcon />
        <p className="font-medium text-[20px] leading-[31px] text-[#4A4A4A]">
          {content}
        </p>
      </div>
    </>
  );
}
