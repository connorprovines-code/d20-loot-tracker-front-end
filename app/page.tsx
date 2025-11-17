import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import VideoDemo from "@/components/landing/VideoDemo";
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
  title: "DnD Loot Tracker - Free Real-Time Treasure Tracking for DnD 5e & Pathfinder",
  description: "The DnD loot tracker your party will actually use. Track treasure, split gold, and sync inventories in real-time for DnD 5e and Pathfinder. Free forever, no credit card.",
  keywords: ["DnD loot tracker", "DnD loot tracker", "DnD 5e loot tracker", "dnd treasure tracker", "pathfinder loot", "d20 rpg tools", "tabletop rpg tracker", "campaign management", "party gold tracker", "dnd inventory", "ttrpg tools"],
  authors: [{ name: "D20 Loot Tracker" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "D20 Loot Tracker",
    title: "DnD Loot Tracker - Free Real-Time Treasure Tracking for DnD 5e",
    description: "The DnD loot tracker your party will actually use. Track treasure, split gold, and sync inventories in real-time for DnD 5e and Pathfinder.",
    images: [{
      url: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "DnD loot tracker in use during tabletop game session",
    }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DnD Loot Tracker - Free Real-Time Treasure Tracking for DnD 5e",
    description: "The DnD loot tracker your party will actually use. Track treasure, split gold, and sync inventories in real-time for DnD 5e and Pathfinder.",
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
      <VideoDemo />
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
