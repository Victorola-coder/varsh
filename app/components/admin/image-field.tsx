"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";

/**
 * Image input for the admin: pick a file and it is uploaded and processed
 * server-side (capped at 2000px, re-encoded to WebP), or paste a path
 * directly if the image already lives in /public.
 */
export default function ImageField({
  value,
  onChange,
  required,
  inputClass,
}: {
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  inputClass: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function upload(file: File) {
    const body = new FormData();
    body.append("file", file);

    setUploading(true);
    setSaved(null);
    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Upload failed");

      onChange(data.url);
      const pct = Math.round((1 - data.bytes / data.originalBytes) * 100);
      setSaved(
        `${(data.originalBytes / 1048576).toFixed(1)}MB to ${(data.bytes / 1024).toFixed(0)}KB` +
          (pct > 0 ? ` (${pct}% smaller)` : "")
      );
      toast.success("Image uploaded");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="text"
          required={required}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/uploads/photo.webp"
          className={inputClass}
        />
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="shrink-0 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-60 sm:w-auto"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) upload(f);
        }}
      />

      {saved && <p className="text-xs text-green-600">Processed: {saved}</p>}

      {value ? (
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={value}
            alt="preview"
            className="h-16 w-16 rounded object-cover ring-1 ring-gray-200"
          />
          <button
            type="button"
            onClick={() => {
              onChange("");
              setSaved(null);
            }}
            className="text-xs text-gray-500 hover:text-[#FF3600]"
          >
            Remove
          </button>
        </div>
      ) : null}
    </div>
  );
}
