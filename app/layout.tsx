import "./global.css";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import { AOS } from "./components/global";
import { Navbar } from "./components/home";
import { Footer } from "./components/global";
import type { Metadata, Viewport } from "next";
import Providers from "./components/providers";

const cabinetGrotesk = localFont({
  display: "swap",
  variable: "--font-cabinet-grotesk",
  src: "./fonts/CabinetGrotesk-Variable.ttf",
  weight: "100 200 300 400 500 600 700 800 900",
});

const lato = Lato({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://varsh.org"),
  icons: {
    icon: "/images/logo.svg",
  },
  title: "Varsh Foundation - Reach one, Reach all",
  description:
    "Together for a safer, More equal world - Free from sexual abuse",
  applicationName: "Varsh Foundation",
  authors: [{ name: "Varsh Foundation", url: "https://varsh.org" }],
  keywords: [
    "NGO",
    "Varsh",
    "NGO in Nigeria",
    "Varsh Foundation",
    "NGO in Osun State",
    "Free from sexual abuse",
    "Together for a safer, More equal world",
  ],
  creator: "Varsh Foundation",
  publisher: "Varsh Foundation",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://varsh.org",
    title: "Varsh Foundation - Reach one, Reach all",
    siteName: "Varsh Foundation",
    locale: "en_US",
    images: [
      {
        url: "https://varsh.org/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Varsh Foundation - Reach one, Reach all",
      },
    ],
  },
  twitter: {
    site: "Varsh Foundation",
    creator: "Varsh Foundation",
    title: "Varsh Foundation - Reach one, Reach all",
    description:
      "Together for a safer, More equal world - Free from sexual abuse",
    card: "summary_large_image",
    images: ["https://varsh.org/images/logo.svg"],
  },
  appleWebApp: {
    capable: true,
    title: "Varsh Foundation - Reach one, Reach all",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract: "Together for a safer, More equal world - Free from sexual abuse",
  category: "Social",
  classification: "Social",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/cabinet-grotesk"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased ${cabinetGrotesk.className} ${lato.variable}`}
      >
        <Providers>
          <Toaster richColors />
          <AOS />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
