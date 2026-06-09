"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./home";
import { Footer } from "./global";

/**
 * Wraps public pages with the site Navbar/Footer, but renders admin pages bare
 * so the dashboard gets its own full-screen chrome.
 */
export default function PublicChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
