"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Stats = {
  newsletters: number;
  contacts: number;
  donations: number;
  clubs: number;
};

const cards: { key: keyof Stats; label: string; href: string }[] = [
  { key: "newsletters", label: "Newsletter Subscribers", href: "/admin/dashboard/subscribers" },
  { key: "contacts", label: "Contact Messages", href: "/admin/dashboard/contacts" },
  { key: "donations", label: "Donations", href: "/admin/dashboard/donations" },
  { key: "clubs", label: "Campus Clubs", href: "/admin/dashboard/clubs" },
];

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((r) => (r.ok ? r.json() : null))
      .then(setStats)
      .catch(() => setStats(null));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-sm text-gray-500">
        Manage every piece of content on the VARSH Foundation website.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.key}
            href={card.href}
            className="rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <dt className="text-sm font-medium text-gray-500">{card.label}</dt>
            <dd className="mt-2 text-3xl font-semibold text-gray-900">
              {stats ? stats[card.key] : "—"}
            </dd>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          Quick edits
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          {[
            { href: "/admin/dashboard/hero", label: "Edit Hero" },
            { href: "/admin/dashboard/initiatives", label: "Edit Initiatives" },
            { href: "/admin/dashboard/thematic-areas", label: "Edit Thematic Areas" },
            { href: "/admin/dashboard/clubs", label: "Edit Campus Clubs" },
          ].map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#FF3600] hover:text-[#FF3600]"
            >
              {q.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
