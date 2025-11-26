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
      {/* D20 Background Pattern - Enhanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Improved D20 SVG path for tighter, more recognizable shape */}
        {/* Top row */}
        <svg className="absolute top-[8%] left-[3%] w-28 h-28 text-cyan-400 opacity-[0.18] rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[5%] left-[18%] w-20 h-20 text-blue-400 opacity-[0.15] -rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[12%] left-[35%] w-24 h-24 text-cyan-500 opacity-[0.14] rotate-[78deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[3%] right-[28%] w-32 h-32 text-indigo-400 opacity-[0.16] rotate-[155deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[15%] right-[12%] w-24 h-24 text-cyan-400 opacity-[0.17] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[7%] right-[3%] w-20 h-20 text-blue-500 opacity-[0.13] rotate-[95deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        {/* Upper-middle row */}
        <svg className="absolute top-[28%] left-[8%] w-28 h-28 text-blue-400 opacity-[0.16] rotate-[22deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[25%] left-[24%] w-20 h-20 text-cyan-500 opacity-[0.14] -rotate-[67deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[32%] right-[22%] w-24 h-24 text-indigo-400 opacity-[0.15] rotate-[44deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[28%] right-[5%] w-32 h-32 text-cyan-400 opacity-[0.17] -rotate-[88deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        {/* Middle row */}
        <svg className="absolute top-[48%] left-[2%] w-24 h-24 text-cyan-500 opacity-[0.15] rotate-[135deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[45%] left-[15%] w-28 h-28 text-blue-400 opacity-[0.18] -rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[52%] left-[32%] w-20 h-20 text-indigo-400 opacity-[0.14] rotate-[60deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[48%] right-[28%] w-24 h-24 text-cyan-400 opacity-[0.16] -rotate-[120deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[50%] right-[14%] w-32 h-32 text-blue-500 opacity-[0.17] rotate-[25deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[46%] right-[2%] w-20 h-20 text-cyan-500 opacity-[0.13] -rotate-[77deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        {/* Lower-middle row */}
        <svg className="absolute top-[68%] left-[6%] w-24 h-24 text-indigo-400 opacity-[0.16] rotate-[88deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[72%] left-[22%] w-28 h-28 text-cyan-400 opacity-[0.18] -rotate-[44deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[68%] left-[38%] w-20 h-20 text-blue-400 opacity-[0.14] rotate-[111deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[70%] right-[25%] w-32 h-32 text-cyan-500 opacity-[0.17] -rotate-[22deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[68%] right-[8%] w-24 h-24 text-indigo-400 opacity-[0.15] rotate-[166deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        {/* Bottom row */}
        <svg className="absolute bottom-[8%] left-[12%] w-28 h-28 text-blue-500 opacity-[0.16] -rotate-[60deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute bottom-[5%] left-[28%] w-20 h-20 text-cyan-400 opacity-[0.14] rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute bottom-[12%] right-[18%] w-24 h-24 text-cyan-500 opacity-[0.17] -rotate-[99deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute bottom-[6%] right-[4%] w-32 h-32 text-indigo-400 opacity-[0.18] rotate-[55deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        {/* Extra scattered accent dice */}
        <svg className="absolute top-[18%] left-[42%] w-16 h-16 text-blue-400 opacity-[0.12] rotate-[145deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[38%] left-[48%] w-20 h-20 text-cyan-400 opacity-[0.13] -rotate-[28deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[58%] left-[8%] w-20 h-20 text-indigo-400 opacity-[0.14] rotate-[72deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute bottom-[18%] left-[4%] w-20 h-20 text-cyan-500 opacity-[0.15] -rotate-[111deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute bottom-[22%] left-[35%] w-16 h-16 text-blue-400 opacity-[0.12] rotate-[88deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute top-[62%] right-[35%] w-20 h-20 text-cyan-400 opacity-[0.14] -rotate-[45deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
        </svg>

        <svg className="absolute bottom-[32%] right-[8%] w-16 h-16 text-indigo-400 opacity-[0.13] rotate-[133deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z M50,10 L15,70 M50,10 L85,70 M50,10 L50,90 M15,30 L85,70 M85,30 L15,70 M15,30 L50,90 M85,30 L50,90" />
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
