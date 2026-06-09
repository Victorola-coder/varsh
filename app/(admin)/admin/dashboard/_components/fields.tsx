"use client";

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "image"
  | "slug"
  | "list"
  | "date";

export type Field = {
  name: string;
  label: string;
  type?: FieldType; // default "text"
  required?: boolean;
  help?: string;
  inList?: boolean; // show as a column in the list table
};

export type Values = Record<string, unknown>;

/** Build a blank value object (for "create"), or hydrate from an item. */
export function initialValues(fields: Field[], item?: Values | null): Values {
  const out: Values = {};
  for (const f of fields) {
    const existing = item ? item[f.name] : undefined;
    if (existing !== undefined && existing !== null) {
      out[f.name] =
        f.type === "date" && typeof existing === "string"
          ? existing.slice(0, 10)
          : existing;
      continue;
    }
    switch (f.type) {
      case "boolean":
        out[f.name] = true;
        break;
      case "number":
        out[f.name] = 0;
        break;
      case "list":
        out[f.name] = [];
        break;
      default:
        out[f.name] = "";
    }
  }
  return out;
}

const inputClass =
  "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-[#FF3600] focus:outline-none focus:ring-1 focus:ring-[#FF3600]";

export function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  switch (field.type) {
    case "textarea":
      return (
        <textarea
          rows={4}
          required={field.required}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      );

    case "number":
      return (
        <input
          type="number"
          required={field.required}
          value={value as number}
          onChange={(e) => onChange(Number(e.target.value))}
          className={inputClass}
        />
      );

    case "boolean":
      return (
        <label className="inline-flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-[#FF3600] focus:ring-[#FF3600]"
          />
          {field.label}
        </label>
      );

    case "list": {
      const arr = Array.isArray(value) ? (value as string[]) : [];
      return (
        <textarea
          rows={4}
          value={arr.join("\n")}
          onChange={(e) =>
            onChange(
              e.target.value
                .split("\n")
                .map((s) => s.trim())
                .filter(Boolean)
            )
          }
          placeholder="One item per line"
          className={inputClass}
        />
      );
    }

    case "date":
      return (
        <input
          type="date"
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      );

    case "image":
      return (
        <div className="space-y-2">
          <input
            type="text"
            required={field.required}
            value={(value as string) ?? ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="/images/example.png"
            className={inputClass}
          />
          {typeof value === "string" && value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value}
              alt="preview"
              className="h-16 w-16 rounded object-cover ring-1 ring-gray-200"
            />
          ) : null}
        </div>
      );

    default:
      return (
        <input
          type="text"
          required={field.required}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      );
  }
}
