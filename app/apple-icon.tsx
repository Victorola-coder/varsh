import { ImageResponse } from "next/og";

/** Home-screen icon for iOS. Same mark as app/icon.tsx, scaled up. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        <svg width="180" height="180" viewBox="0 0 32 32">
          <polyline
            points="8,9 16,23 24,9"
            fill="none"
            stroke="#fff"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    size
  );
}
