import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  Search,
  Users,
  Coins,
  Layers,
  Package,
  ShoppingBag,
  FolderOpen,
  ScrollText,
  Database,
  Zap,
  Upload,
  Shield,
  Lock,
  Smartphone,
  History,
  Calculator,
  Check,
  ArrowRight,
  FileText,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Features - Complete D&D and Pathfinder Loot Tracker | D20 Loot Tracker",
  description: "Explore all features of D20 Loot Tracker: API-powered item lookup, real-time collaboration, automatic gold distribution, bulk tracking, attunement management, and more. Built for D&D 5e and Pathfinder.",
  keywords: [
    "dnd loot tracker features",
    "pathfinder loot tracker features",
    "rpg loot management tools",
    "dnd api item lookup",
    "automatic gold distribution",
    "real-time loot tracking",
    "dnd attunement tracker",
    "pathfinder bulk calculator",
    "rpg inventory management",
    "dnd campaign tools"
  ],
  openGraph: {
    title: "Complete Feature List - D20 Loot Tracker",
    description: "API-powered item lookup, real-time collaboration, automatic gold distribution, and more. Everything you need to manage D&D and Pathfinder loot.",
    url: "https://d20-loot-tracker.com/features",
    siteName: "D20 Loot Tracker",
    type: "website",
  },
  alternates: {
    canonical: "/features",
  },
};

const coreFeatures = [
  {
    icon: Search,
    title: "API-Powered Item Lookup",
    description: "Search thousands of items from official D&D 5e and Pathfinder APIs",
    benefits: [
      "Instant access to D&D 5e SRD equipment and magic items",
      "Pathfinder 1e and 2e item databases at your fingertips",
      "Auto-populate item costs, rarity, attunement, and bulk values",
      "No more flipping through rulebooks or googling prices",
      "Save 5-10 minutes per item entry"
    ],
    howItWorks: "Simply click 'Add Item', choose 'Search API', type the item name, and select from results. All item data is automatically filled in.",
    color: "purple",
    systems: ["D&D 5e", "Pathfinder 1e", "Pathfinder 2e"]
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "See loot updates instantly across all devices with WebSocket synchronization",
    benefits: [
      "Changes appear instantly for all players - no refresh needed",
      "DM adds loot during combat, players see it immediately",
      "Works seamlessly for 2-10+ players",
      "Perfect for online and hybrid campaigns",
      "No more 'wait, let me update the sheet' moments"
    ],
    howItWorks: "Every action (adding loot, assigning items, selling treasure) syncs in real-time to all connected devices via secure WebSocket connections.",
    color: "cyan",
    systems: ["All Systems"]
  },
  {
    icon: Coins,
    title: "Smart Gold Distribution",
    description: "Automatically split treasure equally or customize who gets what",
    benefits: [
      "Instant equal splits - no calculator needed",
      "Toggle party fund on/off per campaign",
      "Choose 'Split to All' or 'Player Only' when selling from inventory",
      "Handles all currency types (cp, sp, ep, gp, pp)",
      "Transaction log shows exactly who got what"
    ],
    howItWorks: "When you sell an item, the system calculates fair shares based on your settings and updates everyone's gold automatically. Party fund can be included or excluded from splits.",
    color: "yellow",
    systems: ["All Systems"]
  },
  {
    icon: Layers,
    title: "Multi-System Support",
    description: "Built for D&D 5e, Pathfinder 1e, Pathfinder 2e, and more",
    benefits: [
      "Choose your game system when creating a campaign",
      "D&D 5e: Attunement tracking, rarity system, 5 currency types",
      "Pathfinder 2e: Bulk tracking, item levels, 4 currency types",
      "Pathfinder 1e: Compatible with PF1e rules and APIs",
      "Switch between systems for different campaigns"
    ],
    howItWorks: "Select your game system during campaign creation. System-specific features (attunement, bulk, etc.) automatically activate based on your choice.",
    color: "indigo",
    systems: ["D&D 5e", "Pathfinder 1e", "Pathfinder 2e", "Other"]
  }
];

const inventoryFeatures = [
  {
    icon: Package,
    title: "Player Inventories",
    description: "Individual inventories for each player with full item management",
    benefits: [
      "Each player has their own inventory separate from party loot",
      "Transfer items between players with one click",
      "Sell items from inventory (split gold or keep it)",
      "Purchase items directly into inventory",
      "Track what each character is carrying"
    ],
    color: "blue"
  },
  {
    icon: ShoppingBag,
    title: "Flexible Item Selling",
    description: "Choose how gold is distributed when selling items",
    benefits: [
      "Sell incoming loot: Gold splits to everyone",
      "Sell from inventory: Choose 'Split to All' or 'Player Only'",
      "Treasure items sell for 100% value",
      "Loot items sell for 50% value",
      "Every sale is logged in transaction history"
    ],
    color: "green"
  },
  {
    icon: Upload,
    title: "Advanced Bulk Import",
    description: "Paste formatted loot lists and import dozens of items in seconds",
    benefits: [
      "Import multiple items at once from text",
      "Format: '* 4 mwk breastplate = 700 gp'",
      "Preview and edit items before confirming",
      "Perfect for importing treasure hoard results",
      "Save 10+ minutes after big encounters"
    ],
    color: "orange"
  },
  {
    icon: Zap,
    title: "Consumable Charge Management",
    description: "Track charges on wands, potions, scrolls, and other consumables",
    benefits: [
      "Set max charges when adding consumable items",
      "Increment or decrement charges with one click",
      "Items automatically remove when charges hit zero",
      "Depleted items log to transaction history",
      "Never lose track of potion counts again"
    ],
    color: "pink"
  }
];

const systemSpecificFeatures = [
  {
    icon: Shield,
    title: "Attunement Tracking (D&D 5e)",
    description: "Automatic attunement detection and 3-slot limit enforcement",
    benefits: [
      "D&D 5e API automatically detects attunement requirements",
      "Visual warnings when a player reaches 3 attuned items",
      "Toggle attunement on/off with one click",
      "See at a glance which items are attuned",
      "Prevents accidental over-attunement"
    ],
    color: "cyan",
    system: "D&D 5e"
  },
  {
    icon: Calculator,
    title: "Automatic Rarity Valuation (D&D 5e)",
    description: "Smart value estimation based on magic item rarity",
    benefits: [
      "Common: 100gp, Uncommon: 500gp, Rare: 5,000gp",
      "Very Rare: 50,000gp, Legendary: 500,000gp",
      "Values are fully customizable",
      "Rarity-based color coding for visual organization",
      "Sort items by rarity tier"
    ],
    color: "purple",
    system: "D&D 5e"
  },
  {
    icon: TrendingUp,
    title: "Bulk Tracking (Pathfinder 2e)",
    description: "Automatic bulk calculation with encumbrance warnings",
    benefits: [
      "Track bulk for every item with decimal precision",
      "System calculates total bulk per character in real-time",
      "Warning at 5 bulk (encumbered)",
      "Max limit at 10 bulk per character",
      "Monitor party encumbrance at a glance"
    ],
    color: "teal",
    system: "Pathfinder 2e"
  },
  {
    icon: FileText,
    title: "Item Level System (Pathfinder 2e)",
    description: "Tag items by level (0-25) and filter by level range",
    benefits: [
      "Every item gets a level tag for easy organization",
      "Filter treasure by level range",
      "Match loot to character progression",
      "See level-appropriate items at a glance",
      "Perfect for following treasure-by-level guidelines"
    ],
    color: "blue",
    system: "Pathfinder 2e"
  }
];

const organizationFeatures = [
  {
    icon: FolderOpen,
    title: "Multiple Campaigns",
    description: "Run unlimited campaigns and switch between them instantly",
    benefits: [
      "Create as many campaigns as you want",
      "Each campaign has separate loot, players, and settings",
      "Switch campaigns with one click",
      "Perfect for running multiple games",
      "Archive old campaigns without deleting them"
    ],
    color: "purple"
  },
  {
    icon: ScrollText,
    title: "Transaction History",
    description: "Complete audit trail of all gold movements and loot changes",
    benefits: [
      "See every item sale, assignment, and transfer",
      "Transaction log shows who got what gold",
      "Track item status changes over time",
      "Searchable history for disputes or questions",
      "Never wonder 'what happened to that item?'"
    ],
    color: "orange"
  },
  {
    icon: History,
    title: "Item Status Tracking",
    description: "Track items through their entire lifecycle",
    benefits: [
      "Status options: Incoming, Assigned, Sold, Depleted, Discarded",
      "See the full history of any item",
      "Filter by status to find specific items",
      "Track items from treasure hoard to player inventory",
      "Perfect for campaign bookkeeping"
    ],
    color: "indigo"
  }
];

const securityFeatures = [
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Bank-level encryption and secure user accounts",
    benefits: [
      "Email/password authentication via Supabase",
      "Row-level security ensures you only see your campaigns",
      "Data is encrypted at rest and in transit",
      "GDPR and CCPA compliant",
      "No one else can access your campaign data"
    ],
    color: "red"
  },
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    description: "Works perfectly on desktop, tablet, and mobile",
    benefits: [
      "Optimized for all screen sizes",
      "Touch-friendly interface for tablets",
      "Pass your tablet around the table for in-person games",
      "Players can check inventory on their phones",
      "No installation required - works in any browser"
    ],
    color: "green"
  }
];

const FeatureCard = ({ feature, showSystem = false }) => (
  <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
    <CardHeader className="pb-4">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center`}>
          <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
        </div>
        {showSystem && feature.system && (
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            {feature.system}
          </span>
        )}
        {feature.systems && (
          <div className="flex flex-wrap gap-1 justify-end">
            {feature.systems.slice(0, 2).map((system, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {system}
              </span>
            ))}
            {feature.systems.length > 2 && (
              <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                +{feature.systems.length - 2}
              </span>
            )}
          </div>
        )}
      </div>
      <CardTitle className="text-white text-xl mb-2">{feature.title}</CardTitle>
      <p className="text-gray-400 text-sm">{feature.description}</p>
    </CardHeader>
    <CardContent className="space-y-4">
      {/* Benefits */}
      <div>
        <h4 className="text-sm font-semibold text-cyan-400 mb-3">What You Get:</h4>
        <ul className="space-y-2">
          {feature.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* How it works (if available) */}
      {feature.howItWorks && (
        <div className="pt-4 border-t border-slate-600">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">How It Works:</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{feature.howItWorks}</p>
        </div>
      )}
    </CardContent>
  </Card>
);

const SimpleFeatureCard = ({ feature, showSystem = false }) => (
  <Card className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
    <CardHeader className="pb-4">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center`}>
          <feature.icon className={`w-5 h-5 text-${feature.color}-400`} />
        </div>
        {showSystem && feature.system && (
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            {feature.system}
          </span>
        )}
      </div>
      <CardTitle className="text-white text-lg mb-2">{feature.title}</CardTitle>
      <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {feature.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{benefit}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumbs
          items={[
            { label: "Features" }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Everything You Need for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Loot Management
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From API-powered item lookups to real-time collaboration, D20 Loot Tracker has every feature you need to manage D&D and Pathfinder treasure efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.d20-loot-tracker.com/">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                Start Using All Features - Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Features
            </h2>
            <p className="text-lg text-gray-300">
              The essential tools that make D20 Loot Tracker powerful
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Features */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Inventory Management
            </h2>
            <p className="text-lg text-gray-300">
              Complete control over items, charges, and bulk import
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryFeatures.map((feature, index) => (
              <SimpleFeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* System-Specific Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              System-Specific Features
            </h2>
            <p className="text-lg text-gray-300">
              Specialized tools for D&D 5e and Pathfinder 2e
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {systemSpecificFeatures.map((feature, index) => (
              <SimpleFeatureCard key={index} feature={feature} showSystem={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Organization & Security */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Organization & Security
            </h2>
            <p className="text-lg text-gray-300">
              Keep your campaigns organized and your data secure
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...organizationFeatures, ...securityFeatures].map((feature, index) => (
              <SimpleFeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Try{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              All These Features?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Everything is free. No credit card required. Start tracking loot in 2 minutes.
          </p>
          <a href="https://app.d20-loot-tracker.com/">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Free Campaign
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Free forever • No credit card • 2-minute setup
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
