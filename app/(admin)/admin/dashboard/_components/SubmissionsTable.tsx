"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";

export type Column = {
  key: string;
  label: string;
  type?: "text" | "boolean" | "date" | "currency";
};

type Row = Record<string, unknown> & { id: string; currency?: string };

export default function SubmissionsTable({
  title,
  description,
  endpoint,
  columns,
}: {
  title: string;
  description?: string;
  endpoint: string; // e.g. /api/admin/submissions/donations
  columns: Column[];
}) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoint)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setRows)
      .catch(() => toast.error("Failed to load submissions"))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
          {rows.length} total
        </span>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 bg-white">
        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">Loading…</div>
        ) : rows.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-400">Nothing here yet.</div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                {columns.map((c) => (
                  <th key={c.key} className="px-4 py-3 font-medium">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row) => (
                <tr key={row.id} className="align-top hover:bg-gray-50">
                  {columns.map((c) => (
                    <td key={c.key} className="max-w-sm px-4 py-3 text-gray-700">
                      {formatCell(row, c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function formatCell(row: Row, col: Column) {
  const value = row[col.key];
  if (value === null || value === undefined || value === "") return "—";
  switch (col.type) {
    case "boolean":
      return value ? "Yes" : "No";
    case "date":
      return new Date(String(value)).toLocaleString();
    case "currency":
      return `${row.currency ?? ""} ${Number(value).toLocaleString()}`.trim();
    default:
      return String(value);
  }
}
