"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";

const field =
  "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3600]";

const FEEDBACK_TYPES: { value: string; label: string }[] = [
  { value: "generalFeedback", label: "General Feedback" },
  { value: "websiteFeedback", label: "Website Feedback" },
  { value: "eventFeedback", label: "Event Feedback" },
  { value: "projectFeedback", label: "Project Feedback" },
  { value: "suggestion", label: "Suggestion" },
  { value: "other", label: "Other" },
];

/**
 * Feedback form on /feedback. There is no separate Feedback table, so entries
 * land in Contact with the feedback type as the subject — which is what the
 * admin's Contact Messages page reads.
 */
export default function FeedbackForm() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const type = String(data.get("feedbackType") ?? "");
    const label = FEEDBACK_TYPES.find((t) => t.value === type)?.label ?? "Feedback";

    const payload = {
      name: `${data.get("firstName") ?? ""} ${data.get("lastName") ?? ""}`.trim(),
      email: String(data.get("email") ?? ""),
      subject: `Feedback — ${label}`,
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
        throw new Error(body.error || "Failed to send feedback");
      }

      // Opt-in newsletter subscribe is a bonus; never fail the whole submit on it.
      if (data.get("subscribe")) {
        await fetch("/api/newsletter", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: payload.email }),
        }).catch(() => undefined);
      }

      toast.success("Thanks for your feedback!");
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
        <label htmlFor="feedbackType" className="block text-gray-700 font-medium mb-2">
          Feedback Type*
        </label>
        <select id="feedbackType" name="feedbackType" className={field} required defaultValue="">
          <option value="">Select a feedback type</option>
          {FEEDBACK_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Your Feedback*
        </label>
        <textarea id="message" name="message" rows={5} className={field} required />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          className="h-4 w-4 accent-[#FF3600]"
        />
        <label htmlFor="subscribe" className="text-gray-700">
          Subscribe me to the VARSH Foundation newsletter
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="bg-[#FF3600] text-white py-3 px-6 rounded-md font-medium hover:bg-[#e13000] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Submit Feedback"}
      </button>
    </form>
  );
}
