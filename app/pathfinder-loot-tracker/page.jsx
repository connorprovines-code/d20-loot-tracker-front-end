import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  Sparkles,
  Shield,
  Users,
  Coins,
  Scale,
  TrendingUp,
  Check,
  Swords,
  Award,
  Boxes,
  Gem,
  ChevronRight,
  Database,
  Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Pathfinder 2e Loot Tracker - Track Bulk, Item Levels & Treasure for P2E",
  description: "Free real-time Pathfinder 2e loot tracker. Manage bulk limits, item levels, fundamental runes, and party treasure. Perfect for Pathfinder GMs and players. Start in 2 minutes.",
  keywords: [
    "pathfinder 2e loot tracker",
    "p2e treasure tracker",
    "pathfinder bulk tracker",
    "pathfinder 2e gold tracker",
    "pathfinder item level",
    "pathfinder rune tracker",
    "pathfinder party loot",
    "pathfinder gm tools",
    "pf2e campaign manager",
    "pathfinder item database",
    "pathfinder 2e item lookup",
    "pathfinder bulk calculator",
    "pf2e encumbrance tracker",
    "pathfinder 1e item lookup"
  ],
  openGraph: {
    title: "Pathfinder 2e Loot Tracker - Never Lose Track of Treasure & Bulk",
    description: "Free real-time loot tracking built specifically for Pathfinder 2e. Track bulk, item levels, runes, and party gold.",
    url: "https://d20-loot-tracker.com/pathfinder-loot-tracker",
    siteName: "D20 Loot Tracker",
    type: "website",
    images: [{
      url: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "Pathfinder 2e dice and character sheet - D20 Loot Tracker",
    }],
  },
  alternates: {
    canonical: "/pathfinder-loot-tracker",
  },
};

const pf2ePainPoints = [
  {
    icon: Scale,
    title: "Bulk Calculations",
    problem: "\"Wait, how much bulk is 10 arrows again? Am I encumbered?\"",
    solution: "Automatic bulk tracking per character with encumbrance warnings"
  },
  {
    icon: TrendingUp,
    title: "Item Level Management",
    problem: "Party has 5 level-appropriate items mixed with 20 low-level loot",
    solution: "Sort by item level, filter by level range, see treasure by character level"
  },
  {
    icon: Gem,
    title: "Rune Confusion",
    problem: "\"Did we transfer the +1 striking rune or the +2 potency rune?\"",
    solution: "Rune registry with transfer history and compatibility tracking"
  }
];

const pf2eFeatures = [
  {
    icon: Database,
    title: "Pathfinder API Integration",
    description: "Search items from official Pathfinder 1e and 2e APIs. Auto-populate item data including costs, bulk values, and level information instantly.",
    color: "indigo",
    badge: "PF Specific"
  },
  {
    icon: Calculator,
    title: "Automatic Bulk Calculation",
    description: "System calculates total bulk per character in real-time. Get warnings when encumbered (5 bulk) or max bulk is reached (10 bulk).",
    color: "teal",
    badge: "PF2e Specific"
  },
  {
    icon: Scale,
    title: "Bulk Tracking",
    description: "Track bulk for every item with decimal precision. Monitor encumbrance across your entire party at a glance.",
    color: "cyan",
    badge: "PF2e Specific"
  },
  {
    icon: Award,
    title: "Item Level System",
    description: "Tag every item with its level (0-25). Filter treasure by level range to match character progression.",
    color: "blue",
    badge: "PF2e Specific"
  },
  {
    icon: Coins,
    title: "4-Currency System",
    description: "Native support for Copper, Silver, Gold, and Platinum pieces (no electrum in PF2e).",
    color: "yellow",
    badge: "PF2e Specific"
  },
  {
    icon: Swords,
    title: "Rune Management",
    description: "Track fundamental runes (potency, striking, resilient) and property runes separately from base items.",
    color: "orange",
    badge: "Coming Soon"
  }
];

const pf2eUseCases = [
  {
    title: "For Game Masters",
    scenarios: [
      "Award level-appropriate loot based on party level guidelines",
      "Track which players are approaching bulk limits before dungeon crawls",
      "See total party wealth to balance encounter difficulty",
      "Manage rune upgrades as characters level up"
    ]
  },
  {
    title: "For Players",
    scenarios: [
      "Check current bulk before picking up heavy armor",
      "See which items are level-appropriate for your character",
      "Track consumables like potions and scrolls by item level",
      "Plan rune transfers during downtime"
    ]
  }
];

const pf2eCurrencyComparison = [
  { name: "Copper Piece (cp)", conversion: "1 cp", color: "orange" },
  { name: "Silver Piece (sp)", conversion: "10 cp", color: "gray" },
  { name: "Gold Piece (gp)", conversion: "100 cp", color: "yellow" },
  { name: "Platinum Piece (pp)", conversion: "1,000 cp", color: "cyan" },
];

export default function PathfinderLootTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-orange-950 to-slate-900">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumbs
          items={[
            { label: "Pathfinder 2e Loot Tracker" }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 pt-8">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">
                Built for Pathfinder 2e Campaigns
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Pathfinder 2e Loot Tracker for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Smart GMs
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Track bulk limits, item levels, fundamental runes, and party treasure in real-time.
              Stop juggling spreadsheets—start using a tool built for Pathfinder 2e.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://app.d20-loot-tracker.com/" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Start Your Campaign Free
                </Button>
              </a>
              <a href="#features" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-300 hover:bg-orange-500/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm w-full"
                >
                  <Swords className="w-5 h-5 mr-2" />
                  See PF2e Features
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Works with Archives of Nethys</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Stop Wrestling with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Bulk & Item Levels
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Every Pathfinder GM faces these loot tracking challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pf2ePainPoints.map((point, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                  <point.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-red-300 mb-4 italic">"{point.problem}"</p>
                <div className="border-t border-slate-600 pt-4">
                  <p className="text-green-300 font-medium text-sm">✓ {point.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pathfinder 2e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Specific Features
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Not just a generic tracker—built for PF2e's unique systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pf2eFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      feature.badge === "Coming Soon"
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        : feature.badge === "PF2e Specific"
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                        : "bg-green-500/20 text-green-300 border border-green-500/30"
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Currency Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Pathfinder 2e Currency System
            </h3>
            <p className="text-gray-300 text-center mb-8">
              PF2e uses 4 currency types (no electrum). We track them all with automatic conversions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {pf2eCurrencyComparison.map((currency, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl bg-${currency.color}-500/10 border border-${currency.color}-500/20`}
                >
                  <span className={`text-${currency.color}-300 font-semibold`}>
                    {currency.name}
                  </span>
                  <span className="text-gray-400 text-sm">= {currency.conversion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Pathfinder 2e Campaigns
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pf2eUseCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{useCase.title}</h3>
                <ul className="space-y-4">
                  {useCase.scenarios.map((scenario, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-orange-400" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  25
                </div>
                <div className="text-gray-300 text-sm">
                  Max Item Level
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  10
                </div>
                <div className="text-gray-300 text-sm">
                  Max Bulk per Character
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  4
                </div>
                <div className="text-gray-300 text-sm">
                  Currency Types Tracked
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with D&D */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Coming from D&D 5e?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pathfinder 2e has different systems (bulk instead of weight, item levels instead of just rarity,
              4 currency types instead of 5). Our tracker is built to handle both systems seamlessly.
            </p>
            <a href="/dnd-loot-tracker">
              <Button
                variant="outline"
                className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                See D&D 5e Version
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Run Your Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Pathfinder Campaign?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join GMs who've stopped wrestling with bulk calculations and started focusing on epic adventures.
          </p>
          <a href="https://app.d20-loot-tracker.com/">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <Shield className="w-6 h-6 mr-2" />
              Start Tracking Now - Free Forever
            </Button>
          </a>
          <p className="text-gray-400 text-sm mt-4">
            No credit card required • 2-minute setup • Works on all devices
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
