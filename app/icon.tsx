import { ImageResponse } from "next/og";

/**
 * Browser-tab icon, generated at build time.
 *
 * The previous favicon pointed at /images/logo.svg — a 136x50 wordmark — so
 * browsers squashed the whole "VARSH" lockup into a 16px square and it was
 * unreadable. This is a single bold "V" drawn as a stroked path rather than
 * text: ImageResponse has no bold font loaded, so real type renders thin and
 * washes out at favicon size.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FF3600",
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32">
          <polyline
            points="8,9 16,23 24,9"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
