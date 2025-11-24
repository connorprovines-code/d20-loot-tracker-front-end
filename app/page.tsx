import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import UseCases from "@/components/landing/UseCases";
import TechnicalHighlights from "@/components/landing/TechnicalHighlights";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DnD Loot Tracker - Free Real-Time D&D Loot Tracking Tool | D20 Loot Tracker",
  description: "Free DnD loot tracker for D&D, Pathfinder, and all tabletop RPGs. Track treasure, split gold, manage party inventories in real-time. No credit card required. Start in 2 minutes.",
  keywords: ["DnD loot tracker", "dnd loot tracker", "D&D loot tracker", "dnd treasure tracker", "pathfinder loot", "d20 rpg tools", "tabletop rpg tracker", "dnd gold tracker", "party loot tracker", "dnd inventory", "ttrpg tools", "dnd item database", "rpg item lookup", "dnd attunement tracker", "pathfinder bulk tracker", "multi-system rpg tracker"],
  authors: [{ name: "D20 Loot Tracker" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "D20 Loot Tracker",
    title: "DnD Loot Tracker - Free Real-Time D&D Loot Tracking Tool",
    description: "Free DnD loot tracker for D&D, Pathfinder, and all tabletop RPGs. Track treasure, split gold, manage party inventories in real-time.",
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
    title: "DnD Loot Tracker - Free Real-Time D&D Loot Tracking Tool",
    description: "Free DnD loot tracker for D&D, Pathfinder, and all tabletop RPGs. Track treasure, split gold, manage party inventories in real-time.",
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
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <UseCases />
      <TechnicalHighlights />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
