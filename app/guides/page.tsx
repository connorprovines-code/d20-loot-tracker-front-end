import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Coins, Users, Scroll, Database, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "D&D and TTRPG Guides | D20 Loot Tracker",
  description: "Free guides for D&D players and DMs. Learn how to track loot, manage gold, organize party inventory, use D&D 5e API, track attunement, and more. Helpful tips for new and experienced players.",
  keywords: ["D&D guides", "TTRPG tips", "dungeon master guides", "new player help", "D&D tutorials", "tabletop rpg advice", "dnd 5e api", "dnd attunement", "dnd item lookup", "pathfinder bulk system"],
};

export default function GuidesIndex() {
  const guides = [
    {
      title: "How to Track Loot in D&D: A Beginner's Guide",
      description: "New to D&D? Learn the basics of tracking loot, managing party treasure, and avoiding common pitfalls.",
      href: "/guides/tracking-loot-dnd-beginners",
      icon: BookOpen,
      tags: ["Beginners", "Players", "DMs"]
    },
    {
      title: "Gold Distribution for New DMs",
      description: "Learn how to distribute treasure without making your players too rich or too poor. Keep your campaign economy balanced.",
      href: "/guides/gold-distribution-new-dms",
      icon: Coins,
      tags: ["DMs", "New DMs", "Balance"]
    },
    {
      title: "Party Inventory Management",
      description: "Stop losing track of your stuff. Practical strategies for organizing group inventory without spreadsheets.",
      href: "/guides/party-inventory-management",
      icon: Users,
      tags: ["Players", "Organization", "Party"]
    },
    {
      title: "Pathfinder 2e Bulk System Explained",
      description: "Master PF2e's encumbrance system. Learn bulk calculations, capacity limits, and practical management strategies.",
      href: "/guides/pathfinder-2e-bulk-system",
      icon: Scroll,
      tags: ["Pathfinder 2e", "Players", "System Mastery"]
    },
    {
      title: "D&D 5e API Item Lookup: Complete Guide",
      description: "Save time with instant item lookups from the official D&D 5e API. Auto-populate costs, rarity, attunement, and descriptions in seconds.",
      href: "/guides/dnd-5e-api-item-lookup",
      icon: Database,
      tags: ["D&D 5e", "Players", "DMs", "Time-Saver"]
    },
    {
      title: "D&D Attunement Tracking Made Easy",
      description: "Master the 3-slot attunement limit. Learn the rules, avoid common mistakes, and track attunement automatically.",
      href: "/guides/dnd-attunement-tracking",
      icon: Sparkles,
      tags: ["D&D 5e", "Players", "Magic Items"]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
            <Scroll className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Free D&D Guides
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            D&D and TTRPG Guides
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practical, no-nonsense guides to help you track loot, manage gold, organize your party,
            and run smoother campaigns. Written for real tables, not theory.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Link
                key={index}
                href={guide.href}
                className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {guide.title}
                </h2>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {guide.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {guide.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Put These Tips Into Practice?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Use D20 Loot Tracker to manage your campaign's loot, track party inventory,
            and keep your group organized—all in real-time.
          </p>
          <Link
            href="https://app.d20-loot-tracker.com/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Free Campaign →
          </Link>
        </div>
      </div>
    </div>
  );
}
