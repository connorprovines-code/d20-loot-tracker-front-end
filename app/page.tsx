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
        <svg className="absolute top-[10%] left-[5%] w-64 h-64 text-cyan-400 opacity-[0.15] rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>

        {/* Top right d20 with glow */}
        <svg className="absolute top-[15%] right-[8%] w-72 h-72 text-cyan-400 opacity-[0.12] -rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>

        {/* Middle left d20 */}
        <svg className="absolute top-[45%] left-[12%] w-48 h-48 text-blue-400 opacity-[0.10] rotate-[135deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>

        {/* Middle right d20 */}
        <svg className="absolute top-[50%] right-[15%] w-56 h-56 text-cyan-400 opacity-[0.13] rotate-[25deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>

        {/* Bottom left d20 */}
        <svg className="absolute bottom-[20%] left-[8%] w-60 h-60 text-indigo-400 opacity-[0.11] -rotate-[60deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>

        {/* Bottom right d20 with glow */}
        <svg className="absolute bottom-[25%] right-[5%] w-52 h-52 text-cyan-400 opacity-[0.14] rotate-[78deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>

        {/* Small accent d20s */}
        <svg className="absolute top-[35%] right-[3%] w-40 h-40 text-blue-400 opacity-[0.08] rotate-[95deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>

        <svg className="absolute bottom-[10%] left-[25%] w-44 h-44 text-cyan-400 opacity-[0.09] -rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M50,5 L95,35 L78,85 L22,85 L5,35 Z M50,5 L22,85 M50,5 L78,85 M5,35 L95,35 M22,85 L78,85 M5,35 L50,95 M95,35 L50,95 M22,85 L50,95 M78,85 L50,95" />
        </svg>
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
