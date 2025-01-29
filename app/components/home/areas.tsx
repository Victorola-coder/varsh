import React from "react";

export default function Areas() {
  return (
    <section className="flex flex-col gap-[20px] mt-[88px] items-center justify-center mx-[53px]">
      <h3 className="text-[42px] leading-[52.08px] font-bold">
        Our Thematic Areas
      </h3>
      <div className="mt-[69px] flex flex-wrap items-center justify-center gap-[18px]">
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
    <div className="bg-[#FAFAFA] w-[393px] py-[47px] rounded-[20px] flex flex-col gap-[23px] items-center justify-center">
      <img src={icon} alt={title} draggable={false} />
      <h4 className="text-[23px] leading-[27.28px] font-bold">{title}</h4>
      <p className="text-[18px] leading-[28px] max-w-[309px] text-center">
        {content}
      </p>
    </div>
  );
};
