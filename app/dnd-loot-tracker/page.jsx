import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import {
  Sparkles,
  Shield,
  Users,
  Coins,
  Gem,
  Scroll,
  Check,
  Wand2,
  BookOpen,
  Clock,
  Zap,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "DnD 5e Loot Tracker - Track Magic Items, Gold & Treasure for Dungeons & Dragons",
  description: "Free real-time DnD 5e loot tracker. Manage attunement slots, platinum pieces, magic items by rarity, and party treasure. Perfect for DnD DMs and players. Start in 2 minutes.",
  keywords: [
    "dnd 5e loot tracker",
    "dungeons and dragons treasure tracker",
    "dnd magic item tracker",
    "dnd attunement tracker",
    "dnd 5e gold tracker",
    "dnd platinum pieces",
    "dnd party loot manager",
    "dnd dm tools",
    "dnd campaign manager"
  ],
  openGraph: {
    title: "DnD 5e Loot Tracker - Never Lose Track of Magic Items & Treasure",
    description: "Free real-time loot tracking built specifically for DnD 5e. Track attunement, magic items, platinum pieces, and party gold.",
    url: "https://d20-loot-tracker.com/dnd-loot-tracker",
    siteName: "D20 Loot Tracker",
    type: "website",
    images: [{
      url: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&h=630&fit=crop",
      width: 1200,
      height: 630,
      alt: "DnD 5e dice and character sheet - D20 Loot Tracker",
    }],
  },
  alternates: {
    canonical: "/dnd-loot-tracker",
  },
};

const dndPainPoints = [
  {
    icon: Scroll,
    title: "Scattered Magic Items",
    problem: "\"Who has the Bag of Holding again? Did we sell that +1 Longsword?\"",
    solution: "Centralized magic item registry with owner tracking and rarity badges"
  },
  {
    icon: Wand2,
    title: "Attunement Chaos",
    problem: "Players forget the 3-item attunement limit until mid-combat",
    solution: "Attunement slot tracker (0/3) with visual warnings when slots are full"
  },
  {
    icon: Coins,
    title: "Complex Currency",
    problem: "Tracking CP, SP, EP, GP, PP conversions and party fund splits",
    solution: "Automatic currency conversion and equal gold distribution"
  }
];

const dndFeatures = [
  {
    icon: Shield,
    title: "Attunement Tracking",
    description: "Track which magic items require attunement and monitor each player's 3-slot limit in real-time.",
    color: "cyan",
    badge: "DnD Specific"
  },
  {
    icon: Gem,
    title: "Rarity-Based Organization",
    description: "Sort magic items by rarity (Common, Uncommon, Rare, Very Rare, Legendary, Artifact) with visual color coding.",
    color: "purple",
    badge: "DnD Specific"
  },
  {
    icon: Coins,
    title: "5-Currency System",
    description: "Native support for Copper, Silver, Electrum, Gold, and Platinum pieces with automatic conversions.",
    color: "yellow",
    badge: "DnD Specific"
  },
  {
    icon: Scroll,
    title: "Spell Scroll Registry",
    description: "Track spell scrolls separately with spell level, school, and casting time notes.",
    color: "blue",
    badge: "Coming Soon"
  },
  {
    icon: Zap,
    title: "Charge Tracking",
    description: "Monitor charges on wands, rods, and staffs. Set max charges and get alerts when items run low.",
    color: "orange",
    badge: "Available"
  },
  {
    icon: BookOpen,
    title: "Short Rest Integration",
    description: "Log short rests to track attunement timing (requires 1 short rest to attune).",
    color: "green",
    badge: "Coming Soon"
  }
];

const dndUseCases = [
  {
    title: "For Dungeon Masters",
    scenarios: [
      "Award loot from treasure hoards without breaking game flow",
      "See what magic items the party already has before planning encounters",
      "Track which players are using attunement slots efficiently",
      "Ensure balanced loot distribution across the party"
    ]
  },
  {
    title: "For Players",
    scenarios: [
      "Quickly check available attunement slots before looting",
      "See your share of party gold at a glance",
      "Transfer magic items to other players during long rests",
      "Track consumables like potions and spell scrolls"
    ]
  }
];

export default function DnDLootTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                Built for DnD 5e Campaigns
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              DnD 5e Loot Tracker for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
                Smart DMs
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Track magic items, attunement slots, platinum pieces, and party treasure in real-time.
              Stop using messy spreadsheets—start using a tool built for DnD.
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
                  className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm w-full"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  See DnD Features
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
                <span>Works with DnD Beyond</span>
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
              Stop Losing Track of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
                Magic Items
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Every DnD DM faces these loot tracking nightmares
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {dndPainPoints.map((point, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
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
              DnD 5e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
                Specific Features
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Not just a generic tracker—built for the rules you actually use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dndFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      feature.badge === "Coming Soon"
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        : feature.badge === "DnD Specific"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
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

      {/* Use Cases Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
                DnD Campaigns
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {dndUseCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">{useCase.title}</h3>
                <ul className="space-y-4">
                  {useCase.scenarios.map((scenario, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-purple-400" />
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
          <div className="bg-gradient-to-r from-purple-500/10 to-red-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 mb-2">
                  3
                </div>
                <div className="text-gray-300 text-sm">
                  Max Attunement Slots
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 mb-2">
                  5
                </div>
                <div className="text-gray-300 text-sm">
                  Currency Types Tracked
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500 mb-2">
                  ∞
                </div>
                <div className="text-gray-300 text-sm">
                  Magic Items Supported
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Run Your Best{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-red-500">
              DnD Campaign?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join DMs who've stopped losing track of magic items and started focusing on storytelling.
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
