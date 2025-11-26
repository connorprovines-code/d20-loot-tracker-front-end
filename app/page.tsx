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
      {/* D20 Background Pattern - Simplified & Enhanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Simplified D20 - cleaner icosahedron shape */}
        {/* Layer 1 - Top scattered */}
        <svg className="absolute top-[4%] left-[2%] w-16 h-16 text-cyan-400 opacity-[0.20] rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[6%] left-[12%] w-14 h-14 text-blue-400 opacity-[0.16] -rotate-[25deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[2%] left-[22%] w-20 h-20 text-indigo-400 opacity-[0.18] rotate-45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[8%] left-[32%] w-16 h-16 text-cyan-500 opacity-[0.17] -rotate-[15deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[3%] left-[44%] w-14 h-14 text-blue-500 opacity-[0.15] rotate-[78deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        <svg className="absolute top-[5%] right-[42%] w-16 h-16 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[2%] right-[30%] w-20 h-20 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[7%] right-[20%] w-14 h-14 text-blue-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[4%] right-[10%] w-16 h-16 text-cyan-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[8%] right-[2%] w-14 h-14 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        {/* Layer 2 - Upper middle */}
        <svg className="absolute top-[22%] left-[4%] w-20 h-20 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[25%] left-[14%] w-14 h-14 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[20%] left-[26%] w-16 h-16 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[24%] left-[38%] w-14 h-14 text-cyan-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        <svg className="absolute top-[22%] right-[36%] w-16 h-16 text-blue-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[26%] right-[24%] w-14 h-14 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[20%] right-[14%] w-20 h-20 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[24%] right-[4%] w-16 h-16 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        {/* Layer 3 - Middle */}
        <svg className="absolute top-[42%] left-[1%] w-14 h-14 text-cyan-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[45%] left-[10%] w-20 h-20 text-blue-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[40%] left-[22%] w-14 h-14 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[46%] left-[34%] w-16 h-16 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[42%] left-[47%] w-14 h-14 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        <svg className="absolute top-[44%] right-[45%] w-16 h-16 text-cyan-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[40%] right-[32%] w-14 h-14 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[46%] right-[20%] w-20 h-20 text-blue-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[42%] right-[10%] w-16 h-16 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[48%] right-[1%] w-14 h-14 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        {/* Layer 4 - Lower middle */}
        <svg className="absolute top-[64%] left-[3%] w-16 h-16 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[68%] left-[14%] w-14 h-14 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[62%] left-[26%] w-20 h-20 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[66%] left-[40%] w-14 h-14 text-cyan-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        <svg className="absolute top-[64%] right-[38%] w-16 h-16 text-blue-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[68%] right-[26%] w-14 h-14 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[62%] right-[16%] w-20 h-20 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute top-[66%] right-[6%] w-16 h-16 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        {/* Layer 5 - Bottom scattered */}
        <svg className="absolute bottom-[6%] left-[6%] w-14 h-14 text-cyan-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute bottom-[4%] left-[18%] w-16 h-16 text-blue-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute bottom-[8%] left-[30%] w-14 h-14 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute bottom-[5%] left-[43%] w-20 h-20 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>

        <svg className="absolute bottom-[7%] right-[40%] w-14 h-14 text-blue-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute bottom-[4%] right-[28%] w-16 h-16 text-cyan-500 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute bottom-[8%] right-[16%] w-14 h-14 text-indigo-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute bottom-[5%] right-[6%] w-20 h-20 text-blue-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
        </svg>
        <svg className="absolute bottom-[3%] right-[1%] w-16 h-16 text-cyan-400 opacity-[0.19] -rotate-[33deg]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M50,15 L80,35 L70,70 L30,70 L20,35 Z M50,15 L30,70 M50,15 L70,70 M20,35 L80,35" />
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
