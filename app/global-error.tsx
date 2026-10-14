"use client";

/**
 * Last-resort boundary: catches errors thrown by the root layout itself, so it
 * must render its own <html>/<body>.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141517",
          color: "#fff",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: 28, marginBottom: 12 }}>
            Something went wrong
          </h1>
          <p style={{ opacity: 0.7, marginBottom: 24 }}>
            The site failed to load. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#FF3600",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "12px 28px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
