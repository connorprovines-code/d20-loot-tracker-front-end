import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D20 Loot Tracker - Real-Time TTRPG Loot & Gold Tracking for DnD",
  description: "Free real-time collaborative loot tracker for DnD, Pathfinder, and tabletop RPGs. Track gold, split treasure, manage inventories. No credit card required.",
  keywords: ["DnD loot tracker", "DnD gold tracker", "TTRPG loot", "Pathfinder treasure", "tabletop RPG tools", "party inventory", "D20 loot", "campaign manager", "real-time collaboration"],
  authors: [{ name: "D20 Loot Tracker" }],
  openGraph: {
    title: "D20 Loot Tracker - Never Lose Track of Loot Again",
    description: "Real-time collaborative loot tracking for DnD and TTRPG campaigns. Free, no credit card required.",
    url: "https://d20loottracker.com",
    siteName: "D20 Loot Tracker",
    type: "website",
    images: [
      {
        url: "https://d20loottracker.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "D20 Loot Tracker - Real-time TTRPG loot tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D20 Loot Tracker - Real-Time TTRPG Loot Tracking",
    description: "Free collaborative loot tracker for DnD and tabletop RPGs",
    images: ["https://d20loottracker.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R65BC5CLQG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R65BC5CLQG');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
