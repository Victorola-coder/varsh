"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";

/** Inline email-only subscribe form. Posts to /api/newsletter. */
export default function NewsletterForm({
  className = "max-w-md mx-auto flex flex-col sm:flex-row gap-4",
}: {
  className?: string;
}) {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") ?? "");

    setSending(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to subscribe");
      }
      toast.success("You're subscribed. Thank you!");
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        required
        placeholder="Your email address"
        className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3600]"
      />
      <button
        type="submit"
        disabled={sending}
        className="bg-[#FF3600] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e13000] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}
