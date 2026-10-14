"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";

const field =
  "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3600]";

/** Contact form on /contact. Posts to the Contact table via /api/contact. */
export default function ContactForm() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim(),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to send message");
      }
      toast.success("Thanks — your message has been sent.");
      form.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
            First Name*
          </label>
          <input type="text" id="firstName" name="firstName" className={field} required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
            Last Name*
          </label>
          <input type="text" id="lastName" name="lastName" className={field} required />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email Address*
        </label>
        <input type="email" id="email" name="email" className={field} required />
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
          Subject*
        </label>
        <input type="text" id="subject" name="subject" className={field} required />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message*
        </label>
        <textarea id="message" name="message" rows={5} className={field} required />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="bg-[#FF3600] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e13000] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
