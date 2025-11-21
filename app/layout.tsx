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
  title: "DnD Loot Tracker - Real-Time D&D Loot & Gold Tracking | D20 Loot Tracker",
  description: "Free DnD loot tracker for D&D, Pathfinder, and all tabletop RPGs. Track gold, split treasure, manage party inventories in real-time. No credit card required.",
  keywords: ["DnD loot tracker", "dnd loot tracker", "D&D loot tracker", "DnD gold tracker", "dnd treasure tracker", "TTRPG loot", "Pathfinder treasure", "tabletop RPG tools", "party inventory", "D20 loot", "campaign manager", "real-time collaboration"],
  authors: [{ name: "D20 Loot Tracker" }],
  openGraph: {
    title: "D20 Loot Tracker - Never Lose Track of Loot Again",
    description: "Real-time collaborative loot tracking for D&D and TTRPG campaigns. Free, no credit card required.",
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
    description: "Free collaborative loot tracker for D&D and tabletop RPGs",
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
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "D20 Loot Tracker",
        "url": "https://d20loottracker.com",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Free DnD loot tracker for D&D, Pathfinder, and all tabletop RPGs. Track gold, split treasure, manage party inventories in real-time.",
        "featureList": [
          "Real-time collaborative tracking",
          "Automatic gold splitting",
          "Party inventory management",
          "Transaction history",
          "Multi-campaign support",
          "Cross-platform access"
        ],
        "screenshot": "https://d20loottracker.com/og-image.png",
        "browserRequirements": "Requires JavaScript. Requires HTML5."
      },
      {
        "@type": "Organization",
        "name": "D20 Loot Tracker",
        "url": "https://d20loottracker.com",
        "logo": "https://d20loottracker.com/icon.png",
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@d20loottracker.com",
          "contactType": "Customer Support"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What games does D20 Loot Tracker work with?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Any D20-based TTRPG! D&D 5e, Pathfinder 1e/2e, Starfinder, 13th Age, and more. If your game uses loot, gold, and inventories, D20 Loot Tracker will work perfectly."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to install anything to use D20 Loot Tracker?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nope! D20 Loot Tracker works in any web browser on desktop, tablet, or mobile. No downloads, no installations. Just sign up and start tracking."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use D20 Loot Tracker for multiple campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Create as many campaigns as you want. Each campaign is completely separate with its own players, loot, and gold. Switch between them instantly from the dashboard."
            }
          },
          {
            "@type": "Question",
            "name": "Is my campaign data private and secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Each campaign is completely isolated and secure. Only players you specifically invite can access your campaign data. We use bank-level encryption and never share your information."
            }
          },
          {
            "@type": "Question",
            "name": "Can I export my loot tracking data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Transaction logs and item histories are viewable in-app anytime. CSV export functionality for complete data backups is coming soon based on user feedback."
            }
          },
          {
            "@type": "Question",
            "name": "Does D20 Loot Tracker work offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Currently, D20 Loot Tracker requires an internet connection for real-time sync. We're exploring offline mode with sync-when-connected for future updates."
            }
          }
        ]
      }
    ]
  };

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
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
