"use client";

import { toast } from "sonner";
import { Input, Button } from "../ui";
import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setEmail("");
      toast.success("Newsletter subscribed successfully");
    } catch (error) {
      toast.error("Newsletter subscription failed");
      console.error("Newsletter subscription failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mt-[40px] md:mt-[64px] bg-[#FAFAFA] mx-4 md:mx-[50px] px-4 md:px-[70px] py-[30px] md:py-[57px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      <div className="text-center md:text-left">
        <h3 className="text-[28px] md:text-[32px] lg:text-[40px] leading-[1.2] font-bold tracking-[-1px] text-[#1D1D1D]">
          Newsletter
        </h3>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] md:leading-[32px] text-[#40404080] font-normal mt-2">
          Bring together people who care about a cause
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"
      >
        <Input
          type="email"
          value={email}
          required
          placeholder="Enter email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="w-full md:w-[300px] bg-white border border-[#E5E5E5] focus:border-[#FF3600]"
        />
        <Button
          type="submit"
          variant="danger"
          loading={loading}
          className="w-full md:w-auto px-8"
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
}
