"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";

const field =
  "w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3600]";

const PRESETS = [5000, 10000, 25000, 50000, 100000];

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

const DESCRIPTIONS: Record<number, string> = {
  5000: "Supports one child's awareness session",
  10000: "Funds a school outreach kit",
  25000: "Sponsors a community campaign",
  50000: "Backs a survivor's legal aid",
  100000: "Powers a full campus intervention",
};

/**
 * Records a donation pledge via /api/donate. No payment gateway is connected
 * yet, so this captures intent for the admin's Donations page rather than
 * taking money — the copy says so explicitly.
 */
export default function DonateForm() {
  const [selected, setSelected] = useState<number | "other">(PRESETS[0]);
  const [custom, setCustom] = useState("");
  const [sending, setSending] = useState(false);

  const amount = selected === "other" ? Number(custom) : selected;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!amount || amount <= 0) {
      toast.error("Please choose or enter an amount");
      return;
    }

    const payload = {
      amount,
      name: String(data.get("name") ?? "").trim() || undefined,
      email: String(data.get("email") ?? ""),
      frequency: String(data.get("frequency") ?? "one-time"),
      anonymous: Boolean(data.get("anonymous")),
      message: String(data.get("message") ?? "").trim() || undefined,
    };

    setSending(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to record your donation");
      }
      toast.success("Thank you — we'll be in touch with payment details.");
      form.reset();
      setSelected(PRESETS[0]);
      setCustom("");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {PRESETS.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={selected === value}
            onClick={() => setSelected(value)}
            className={`rounded-lg border-2 p-4 text-center transition-colors ${
              selected === value
                ? "border-[#FF3600] bg-[#FF3600]/5"
                : "border-gray-200 hover:border-[#FF3600]"
            }`}
          >
            <p className="font-bold text-xl mb-2">{naira(value)}</p>
            <p className="text-sm text-gray-600">{DESCRIPTIONS[value]}</p>
          </button>
        ))}
        <button
          type="button"
          aria-pressed={selected === "other"}
          onClick={() => setSelected("other")}
          className={`rounded-lg border-2 p-4 text-center transition-colors ${
            selected === "other"
              ? "border-[#FF3600] bg-[#FF3600]/5"
              : "border-gray-200 hover:border-[#FF3600]"
          }`}
        >
          <p className="font-bold text-xl mb-2">Other</p>
          <p className="text-sm text-gray-600">Choose your own amount</p>
        </button>
      </div>

      {selected === "other" && (
        <div>
          <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">
            Custom Amount (₦)
          </label>
          <input
            type="number"
            id="customAmount"
            min={1}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Enter amount"
            className={field}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input type="text" id="name" name="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address*
          </label>
          <input type="email" id="email" name="email" className={field} required />
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Payment Frequency</h3>
        <div className="flex flex-wrap gap-4">
          {[
            ["one-time", "One-time"],
            ["monthly", "Monthly"],
            ["annually", "Annually"],
          ].map(([value, label], i) => (
            <label key={value} className="flex items-center">
              <input
                type="radio"
                name="frequency"
                value={value}
                defaultChecked={i === 0}
                className="mr-2 accent-[#FF3600]"
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Message (optional)
        </label>
        <textarea id="message" name="message" rows={3} className={field} />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="anonymous"
          name="anonymous"
          className="h-4 w-4 accent-[#FF3600]"
        />
        <label htmlFor="anonymous" className="text-gray-700">
          Make my donation anonymous
        </label>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-[#FF3600] text-white py-3 rounded-md font-medium hover:bg-[#e13000] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? "Submitting…" : `Pledge ${amount ? naira(amount) : "a donation"}`}
      </button>

      <p className="text-sm text-gray-500">
        Online payment isn&apos;t live yet. Submitting this records your pledge
        and we&apos;ll email you payment details.
      </p>
    </form>
  );
}
