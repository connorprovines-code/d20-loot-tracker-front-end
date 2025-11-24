import React from "react";
import { Users, Coins, Package, ShoppingBag, FolderOpen, ScrollText, Check, Search, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mainFeatures = [
  {
    icon: Search,
    title: "API-Powered Item Lookup",
    description: "Search thousands of D&D 5e and Pathfinder items from official APIs. Auto-populate costs, rarity, attunement, and bulk instantly.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "See loot updates instantly across all devices. No refresh needed.",
    color: "cyan",
  },
  {
    icon: Coins,
    title: "Smart Gold Distribution",
    description: "Automatically split treasure equally, or customize who gets what. Toggle party fund on/off.",
    color: "yellow",
  },
  {
    icon: Layers,
    title: "Multi-System Support",
    description: "Built for D&D 5e, Pathfinder 1e, Pathfinder 2e, and more. Get system-specific features like attunement, bulk, and rarity tracking.",
    color: "indigo",
  },
  {
    icon: Package,
    title: "Player Inventories",
    description: "Individual player inventories with transfer, sell, and purchase options.",
    color: "blue",
  },
  {
    icon: ShoppingBag,
    title: "Flexible Item Selling",
    description: "Choose to split gold among the party or keep it for individual players.",
    color: "green",
  },
  {
    icon: FolderOpen,
    title: "Multiple Campaigns",
    description: "Run as many campaigns as you want. Switch between them instantly.",
    color: "purple",
  },
  {
    icon: ScrollText,
    title: "Transaction History",
    description: "Complete audit trail of all gold movements and loot changes.",
    color: "orange",
  },
];

const additionalFeatures = [
  "Treasure vs Loot classification (100% vs 50% sell value)",
  "Advanced bulk import - paste formatted loot lists and import dozens of items in seconds",
  "Consumable charge management with auto-depletion when empty",
  "Mobile-responsive design",
  "Secure authentication & data privacy",
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4">
            The Complete{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              DnD Loot Tracker
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 px-4">
            Everything you need for DnD loot tracking in one powerful tool
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {mainFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${feature.color}-400`} />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl sm:rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
            Plus Many More Features
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                </div>
                <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}