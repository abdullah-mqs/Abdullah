import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://abdullahriaz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdullah Riaz — IT · Operations · Systems",
    template: "%s | Abdullah Riaz",
  },
  description:
    "Portfolio of Abdullah Riaz — IT Operations, Sabre GDS, Ticketing & MERN Stack Developer.",
  keywords: [
    "Abdullah Riaz",
    "IT Operations",
    "Sabre GDS",
    "Ticketing",
    "MERN Stack",
    "Web Developer",
    "Pakistan",
  ],
  authors: [{ name: "Abdullah Riaz" }],
  creator: "Abdullah Riaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Abdullah Riaz — IT · Operations · Systems",
    description:
      "Portfolio of Abdullah Riaz — IT Operations, Sabre GDS, Ticketing & MERN Stack Developer.",
    siteName: "Abdullah Riaz",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Riaz — IT · Operations · Systems",
    description:
      "Portfolio of Abdullah Riaz — IT Operations, Sabre GDS, Ticketing & MERN Stack Developer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
