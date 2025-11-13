import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import {
  BookOpen,
  Scale,
  Coins,
  Table as TableIcon,
  Monitor,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "D&D & Pathfinder Loot Tracking Guides | D20 Loot Tracker",
  description: "Free guides for D&D 5e and Pathfinder 2e loot tracking. Learn how to split treasure fairly, manage bulk, and choose the right tools for your table.",
  keywords: [
    "dnd loot tracking guide",
    "pathfinder 2e bulk guide",
    "how to split loot dnd",
    "loot tracker comparison",
    "dnd dm tools guide"
  ],
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    title: "How to Split Loot Fairly in D&D 5e",
    description: "5 proven methods for splitting treasure without table arguments. Includes real examples and decision flowchart.",
    href: "/guides/dnd-loot-split-guide",
    icon: Coins,
    color: "purple",
    tags: ["D&D 5e", "Guide", "1,500 words"]
  },
  {
    title: "Pathfinder 2e Bulk System Explained",
    description: "Complete guide to bulk, encumbrance limits, and optimization strategies. Includes item charts and real scenarios.",
    href: "/guides/pathfinder-2e-bulk-guide",
    icon: Scale,
    color: "orange",
    tags: ["Pathfinder 2e", "Guide", "1,600 words"]
  },
];

const comparisons = [
  {
    title: "D20 Loot Tracker vs Google Sheets",
    description: "Honest comparison: when Sheets work great, when they break down, and which is right for your table.",
    href: "/vs/google-sheets-loot-tracker",
    icon: TableIcon,
    color: "green",
    tags: ["Comparison", "1,300 words"]
  },
  {
    title: "Standalone Tracker vs Foundry VTT",
    description: "Do you need both? When each shines, and why many groups use them together.",
    href: "/vs/foundry-vtt-loot-tracker",
    icon: Monitor,
    color: "cyan",
    tags: ["Comparison", "1,400 words"]
  },
];

export default function GuidesHub() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Free Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Loot Tracking{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Guides & Comparisons
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Free guides for D&D 5e and Pathfinder 2e DMs. Learn proven strategies, compare tools, and level up your loot tracking game.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">System-Specific Guides</h2>
            <p className="text-gray-400">Deep dives into D&D 5e and Pathfinder 2e mechanics</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Link key={index} href={guide.href}>
                <div className={`bg-slate-800/50 border border-slate-700 hover:border-${guide.color}-500/50 rounded-2xl p-8 transition-all duration-300 cursor-pointer group h-full`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${guide.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <guide.icon className={`w-6 h-6 text-${guide.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${guide.color}-400 transition-colors`}>
                        {guide.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {guide.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  <div className={`flex items-center gap-2 text-${guide.color}-400 font-medium group-hover:gap-3 transition-all`}>
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Tool Comparisons</h2>
            <p className="text-gray-400">Honest analysis to help you choose the right tool</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {comparisons.map((comparison, index) => (
              <Link key={index} href={comparison.href}>
                <div className={`bg-slate-800/50 border border-slate-700 hover:border-${comparison.color}-500/50 rounded-2xl p-8 transition-all duration-300 cursor-pointer group h-full`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${comparison.color}-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <comparison.icon className={`w-6 h-6 text-${comparison.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-${comparison.color}-400 transition-colors`}>
                        {comparison.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {comparison.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {comparison.description}
                  </p>
                  <div className={`flex items-center gap-2 text-${comparison.color}-400 font-medium group-hover:gap-3 transition-all`}>
                    Read Comparison <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Try the Tracker?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Free forever. No credit card. 2-minute setup. Works on mobile and desktop.
            </p>
            <a href="https://app.d20-loot-tracker.com/">
              <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">
                <Sparkles className="w-5 h-5" />
                Start Tracking Now
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
