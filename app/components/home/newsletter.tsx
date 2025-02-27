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
    <section className="mt-[64px] bg-[#FAFAFA] mx-[50px] px-[70px] py-[57px] flex flex-row items-center justify-between">
      <div>
        <h3 className="text-[#1D1D1D] font-bold text-[40px] leading-[48px] tracking-[-1px]">
          Newsletter
        </h3>
        <p className="text-[#40404080] font-normal text-[20px] leading-[32px]">
          Bring together people who care about a cause
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <Input
          type="email"
          value={email}
          required
          placeholder="Enter email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="w-[300px] bg-white border border-[#E5E5E5] focus:border-[#FF3600]"
        />
        <Button
          type="submit"
          variant="danger"
          loading={loading}
          className="px-8"
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
}
