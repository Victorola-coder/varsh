"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Field, FieldInput, Values, initialValues } from "./fields";

type Item = Values & { id: string };

export default function ResourceManager({
  title,
  description,
  endpoint,
  fields,
  singularLabel = "item",
}: {
  title: string;
  description?: string;
  endpoint: string; // e.g. /api/admin/content/initiatives
  fields: Field[];
  singularLabel?: string;
}) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Item | "new" | null>(null);
  const [values, setValues] = useState<Values>({});
  const [saving, setSaving] = useState(false);

  const listColumns = fields.filter((f) => f.inList);
  const columns = listColumns.length ? listColumns : fields.slice(0, 2);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error();
      setItems(await res.json());
    } catch {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  function openCreate() {
    setValues(initialValues(fields));
    setEditing("new");
  }

  function openEdit(item: Item) {
    setValues(initialValues(fields, item));
    setEditing(item);
  }

  function close() {
    setEditing(null);
  }

  async function save() {
    setSaving(true);
    try {
      const isNew = editing === "new";
      const url = isNew ? endpoint : `${endpoint}/${(editing as Item).id}`;
      const res = await fetch(url, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Save failed");
      }
      toast.success(isNew ? `${singularLabel} created` : `${singularLabel} updated`);
      close();
      load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function remove(item: Item) {
    if (!confirm(`Delete this ${singularLabel}? This cannot be undone.`)) return;
    try {
      const res = await fetch(`${endpoint}/${item.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      toast.success(`${singularLabel} deleted`);
      load();
    } catch {
      toast.error("Delete failed");
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
        <button
          onClick={openCreate}
          className="shrink-0 rounded-md bg-[#FF3600] px-4 py-2 text-sm font-medium text-white hover:bg-[#e13000]"
        >
          + Add {singularLabel}
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-gray-200 bg-white">
        {loading ? (
          <div className="p-8 text-center text-sm text-gray-400">Loading…</div>
        ) : items.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-400">
            No {singularLabel}s yet. Click “Add {singularLabel}” to create one.
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                {columns.map((c) => (
                  <th key={c.name} className="px-4 py-3 font-medium">
                    {c.label}
                  </th>
                ))}
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {columns.map((c) => (
                    <td key={c.name} className="max-w-xs truncate px-4 py-3 text-gray-700">
                      {renderCell(item[c.name], c)}
                    </td>
                  ))}
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => openEdit(item)}
                      className="font-medium text-[#FF3600] hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => remove(item)}
                      className="ml-4 font-medium text-gray-400 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-gray-900">
              {editing === "new" ? `Add ${singularLabel}` : `Edit ${singularLabel}`}
            </h2>
            <form
              className="mt-4 space-y-4"
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

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-md bg-[#FF3600] px-4 py-2 text-sm font-medium text-white hover:bg-[#e13000] disabled:opacity-50"
                >
                  {saving ? "Saving…" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function renderCell(value: unknown, field: Field) {
  if (field.type === "boolean") return value ? "Yes" : "No";
  if (field.type === "image" && typeof value === "string" && value) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={value} alt="" className="h-8 w-8 rounded object-cover" />;
  }
  if (Array.isArray(value)) return value.join(", ");
  return String(value ?? "");
}
