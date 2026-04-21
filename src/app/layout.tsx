import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foster Digital Solutions | Software Engineering Consulting",
  description:
    "Focused software engineering practice built on Next.js, TypeScript, and AI-first development. Senior-level craft with the velocity of a full team.",
  keywords: [
    "software engineering",
    "Next.js development",
    "TypeScript",
    "AI-augmented development",
    "web development consulting",
    "Foster Digital Solutions",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
