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
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* D20 Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left d20 */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute top-[10%] left-[5%] w-64 h-64 opacity-[0.15] rotate-12"
          draggable="false"
        />

        {/* Top right d20 */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute top-[15%] right-[8%] w-72 h-72 opacity-[0.12] -rotate-45"
          draggable="false"
        />

        {/* Middle left d20 */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute top-[45%] left-[12%] w-48 h-48 opacity-[0.10] rotate-[135deg]"
          draggable="false"
        />

        {/* Middle right d20 */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute top-[50%] right-[15%] w-56 h-56 opacity-[0.13] rotate-[25deg]"
          draggable="false"
        />

        {/* Bottom left d20 */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute bottom-[20%] left-[8%] w-60 h-60 opacity-[0.11] -rotate-[60deg]"
          draggable="false"
        />

        {/* Bottom right d20 */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute bottom-[25%] right-[5%] w-52 h-52 opacity-[0.14] rotate-[78deg]"
          draggable="false"
        />

        {/* Small accent d20 (top right) */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute top-[35%] right-[3%] w-40 h-40 opacity-[0.08] rotate-[95deg]"
          draggable="false"
        />

        {/* Small accent d20 (bottom left) */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute bottom-[10%] left-[25%] w-44 h-44 opacity-[0.09] -rotate-[15deg]"
          draggable="false"
        />

        {/* Additional d20 - top center */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute top-[8%] left-[48%] w-52 h-52 opacity-[0.11] rotate-[58deg]"
          draggable="false"
        />

        {/* Additional d20 - middle center */}
        <img
          src="/images/d20-dice.png"
          alt=""
          className="absolute top-[42%] left-[45%] w-38 h-38 opacity-[0.09] -rotate-[88deg]"
          draggable="false"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <FAQ />
        <UseCases />
        <TechnicalHighlights />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
