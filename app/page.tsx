import Hero from "@/components/landing/Hero";
import VideoDemo from "@/components/landing/VideoDemo";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCases from "@/components/landing/UseCases";
import TechnicalHighlights from "@/components/landing/TechnicalHighlights";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "D20 Loot Tracker - Free Real-Time Loot Tracking for D&D & TTRPGs",
  description: "Free real-time collaborative loot tracker for D&D, Pathfinder, and D20 RPGs. Track treasure, split gold, manage inventories. No credit card required. Start in 2 minutes.",
  keywords: ["D&D loot tracker", "dnd treasure tracker", "pathfinder loot", "d20 rpg tools", "tabletop rpg tracker", "campaign management", "party gold tracker", "dnd inventory", "ttrpg tools"],
  authors: [{ name: "D20 Loot Tracker" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "D20 Loot Tracker",
    title: "D20 Loot Tracker - Free Real-Time Loot Tracking for D&D & TTRPGs",
    description: "Free real-time collaborative loot tracker for D&D, Pathfinder, and D20 RPGs. Track treasure, split gold, manage inventories across your entire party.",
    images: [{
      url: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "D&D tabletop game with dice and miniatures - D20 Loot Tracker",
    }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "D20 Loot Tracker - Free Real-Time Loot Tracking for D&D & TTRPGs",
    description: "Free real-time collaborative loot tracker for D&D, Pathfinder, and D20 RPGs. Track treasure, split gold, manage inventories.",
    images: ["https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&h=630&fit=crop"],
  },
  applicationName: "D20 Loot Tracker",
  alternates: {
    canonical: "/",
  },
  other: {
    "theme-color": "#06b6d4",
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Hero />
      <VideoDemo />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <UseCases />
      <TechnicalHighlights />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
