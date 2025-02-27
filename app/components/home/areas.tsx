import React from "react";

export default function Areas() {
  return (
    <section className="flex flex-col gap-[20px] mt-[40px] md:mt-[88px] items-center justify-center mx-4 md:mx-[53px]">
      <h3 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] md:leading-[52.08px] font-bold text-center px-4">
        Our Thematic Areas
      </h3>
      <div className="mt-[30px] md:mt-[69px] flex flex-wrap items-center justify-center gap-[18px] px-4">
        <Cards
          title={"Heart"}
          icon={"/images/heart.svg"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
          }
        />
        <Cards
          title={"Right"}
          icon={"/images/connect.svg"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
          }
        />
        <Cards
          icon={"/images/gender.svg"}
          title={"Gender Equality and Inclusion"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
          }
        />
        <Cards
          icon={"/images/shield.svg"}
          title={"Peace and Security"}
          content={
            "Lorem ipsum dolor sit amet consectetur. Lorem donec sit pellentesque ultricies eget. ultricies eget"
          }
        />
      </div>
    </section>
  );
}

const Cards = ({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: string;
}) => {
  return (
    <div className="bg-[#FAFAFA] w-full md:w-[340px] lg:w-[393px] py-[30px] md:py-[47px] rounded-[20px] flex flex-col gap-[23px] items-center justify-center px-4">
      <img src={icon} alt={title} draggable={false} className="w-[60px] md:w-auto" />
      <h4 className="text-[20px] md:text-[23px] leading-[1.2] md:leading-[27.28px] font-bold text-center">
        {title}
      </h4>
      <p className="text-[16px] md:text-[18px] leading-[1.5] md:leading-[28px] max-w-[309px] text-center">
        {content}
      </p>
    </div>
  );
};
