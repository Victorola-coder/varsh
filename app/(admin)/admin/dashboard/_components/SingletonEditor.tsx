"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Field, FieldInput, Values, initialValues } from "./fields";

export default function SingletonEditor({
  title,
  description,
  endpoint,
  fields,
}: {
  title: string;
  description?: string;
  endpoint: string; // e.g. /api/admin/site/hero
  fields: Field[];
}) {
  const [values, setValues] = useState<Values>(initialValues(fields));
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setValues(initialValues(fields, data));
      } catch {
        toast.error("Failed to load content");
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  async function save() {
    setSaving(true);
    try {
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Save failed");
      }
      toast.success("Saved");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}

      {loading ? (
        <div className="mt-8 text-sm text-gray-400">Loading…</div>
      ) : (
        <form
          className="mt-6 space-y-5 rounded-lg border border-gray-200 bg-white p-6"
          onSubmit={(e) => {
            e.preventDefault();
            save();
          }}
        >
          {fields.map((field) => (
            <div key={field.name}>
              {field.type !== "boolean" && (
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  {field.label}
                  {field.required && <span className="text-red-500"> *</span>}
                </label>
              )}
              <FieldInput
                field={field}
                value={values[field.name]}
                onChange={(v) =>
                  setValues((prev) => ({ ...prev, [field.name]: v }))
                }
              />
              {field.help && (
                <p className="mt-1 text-xs text-gray-400">{field.help}</p>
              )}
            </div>
          ))}

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-md bg-[#FF3600] px-5 py-2 text-sm font-medium text-white hover:bg-[#e13000] disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save changes"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
