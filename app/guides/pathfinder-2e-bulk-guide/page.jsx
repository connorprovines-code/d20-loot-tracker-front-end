import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import {
  Scale,
  Package,
  AlertTriangle,
  CheckCircle,
  Shield,
  Swords,
  ArrowRight,
  BookOpen,
  TrendingDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Pathfinder 2e Bulk System Explained (Complete Guide) | D20 Loot Tracker",
  description: "Learn how bulk works in Pathfinder 2e. Includes bulk values for common items, encumbrance limits, and practical strategies for managing inventory. Free PF2e guide.",
  keywords: [
    "pathfinder 2e bulk system",
    "pf2e bulk explained",
    "pathfinder encumbrance rules",
    "how does bulk work pf2e",
    "pathfinder 2e carrying capacity",
    "pf2e inventory management",
    "pathfinder bulk calculator"
  ],
  openGraph: {
    title: "Pathfinder 2e Bulk System Explained - Complete Guide",
    description: "Master the Pathfinder 2e bulk system with practical examples and item charts.",
    url: "https://d20-loot-tracker.com/guides/pathfinder-2e-bulk-guide",
    type: "article",
  },
  alternates: {
    canonical: "/guides/pathfinder-2e-bulk-guide",
  },
};

export default function PathfinderBulkGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-orange-950 to-slate-900">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">Pathfinder 2e Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Pathfinder 2e Bulk System{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Explained
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              You've been ignoring bulk limits. Here's why that matters—and how to actually track it without a spreadsheet degree.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-400" />
              In This Guide
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#why-bulk" className="hover:text-orange-400 transition-colors">Why Pathfinder Uses Bulk (Not Weight)</a></li>
              <li><a href="#basics" className="hover:text-orange-400 transition-colors">Bulk Basics: L, 1, 2+</a></li>
              <li><a href="#limits" className="hover:text-orange-400 transition-colors">Encumbrance Limits Formula</a></li>
              <li><a href="#common-items" className="hover:text-orange-400 transition-colors">Common Items Bulk Chart</a></li>
              <li><a href="#scenarios" className="hover:text-orange-400 transition-colors">Real Game Scenarios</a></li>
              <li><a href="#strategies" className="hover:text-orange-400 transition-colors">Optimization Strategies</a></li>
              <li><a href="#tracking" className="hover:text-orange-400 transition-colors">The Tracking Problem</a></li>
              <li><a href="#faq" className="hover:text-orange-400 transition-colors">Common Questions</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl prose prose-invert prose-lg">

          {/* Why Bulk */}
          <section id="why-bulk" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-orange-400" />
              Why Pathfinder Uses Bulk (Not Weight)
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                If you're coming from DnD 5e, you're used to tracking weight in pounds. A longsword weighs 3 lbs. A backpack full of rope weighs 50 lbs. Your carrying capacity is Strength × 15.
              </p>
              <p>
                Pathfinder 2e said: "Nobody actually enjoys calculating if their character can carry 147 lbs or 148 lbs."
              </p>
              <p className="font-semibold text-white">
                Enter the Bulk system.
              </p>
              <p>
                Bulk measures how difficult an item is to carry—accounting for weight, awkwardness, and how it distributes. A greatsword (2 bulk) is harder to carry than 10 daggers (1 bulk total) even though the daggers weigh more.
              </p>
              <p>
                The goal: fast math, less bookkeeping, more adventuring.
              </p>
            </div>
          </section>

          {/* Basics */}
          <section id="basics" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Bulk Basics: L, 1, 2+
            </h2>

            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">The Three Bulk Categories</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 font-bold text-xl">L</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Light Bulk (L)</h4>
                    <p className="text-gray-300">Small, easy-to-carry items. 10 Light items = 1 Bulk.</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Examples: Potions, daggers, scrolls, torches, chalk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">1 Bulk</h4>
                    <p className="text-gray-300">Standard adventuring gear. Most weapons and armor.</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Examples: Longsword, backpack, rope (50 ft), shield
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 font-bold text-xl">2+</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">2+ Bulk</h4>
                    <p className="text-gray-300">Heavy, awkward items. Armor and two-handed weapons.</p>
                    <p className="text-gray-400 text-sm mt-2">
                      Examples: Greatsword (2), full plate armor (4), chest of gold (varies)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                Important: The 10L = 1 Bulk Rule
              </h4>
              <p className="text-gray-300 mb-3">
                When you have 10 or more Light items, convert them to 1 Bulk for tracking purposes.
              </p>
              <p className="text-gray-400 text-sm">
                Example: You're carrying 23 potions (each L). That's 2 Bulk + 3L total.
              </p>
            </div>
          </section>

          {/* Limits */}
          <section id="limits" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingDown className="w-8 h-8 text-red-400" />
              Encumbrance Limits Formula
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Your character has two bulk thresholds based on their Strength modifier:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                  <h4 className="text-yellow-400 font-bold text-lg mb-3">Encumbered Threshold</h4>
                  <p className="text-3xl font-bold text-white mb-2">5 + Str</p>
                  <p className="text-gray-300 text-sm mb-4">
                    When you exceed this, you become encumbered.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• -10 foot penalty to Speed</p>
                    <p>• Can't use attack actions with the Manipulate trait</p>
                  </div>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <h4 className="text-red-400 font-bold text-lg mb-3">Maximum Bulk</h4>
                  <p className="text-3xl font-bold text-white mb-2">10 + Str</p>
                  <p className="text-gray-300 text-sm mb-4">
                    You cannot carry more than this.
                  </p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>• Cannot pick up additional items</p>
                    <p>• Must drop items to move freely</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-4">Quick Reference Table</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left py-2 text-gray-400">Strength Modifier</th>
                        <th className="text-center py-2 text-yellow-400">Encumbered At</th>
                        <th className="text-center py-2 text-red-400">Max Bulk</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-slate-700">
                        <td className="py-2">+0 (Str 10)</td>
                        <td className="text-center">5 Bulk</td>
                        <td className="text-center">10 Bulk</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">+1 (Str 12)</td>
                        <td className="text-center">6 Bulk</td>
                        <td className="text-center">11 Bulk</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">+2 (Str 14)</td>
                        <td className="text-center">7 Bulk</td>
                        <td className="text-center">12 Bulk</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">+3 (Str 16)</td>
                        <td className="text-center">8 Bulk</td>
                        <td className="text-center">13 Bulk</td>
                      </tr>
                      <tr className="border-b border-slate-700">
                        <td className="py-2">+4 (Str 18)</td>
                        <td className="text-center">9 Bulk</td>
                        <td className="text-center">14 Bulk</td>
                      </tr>
                      <tr>
                        <td className="py-2">+5 (Str 20)</td>
                        <td className="text-center">10 Bulk</td>
                        <td className="text-center">15 Bulk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Common Items Chart */}
          <section id="common-items" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Common Items Bulk Chart
            </h2>

            <div className="space-y-6">
              {/* Weapons */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <Swords className="w-5 h-5" />
                  Weapons
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="font-semibold text-white mb-2">Light Bulk (L):</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Dagger, Dart, Sling</li>
                      <li>• Hand Crossbow</li>
                      <li>• Shortsword, Rapier</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">1 Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Longsword, Scimitar, Warhammer</li>
                      <li>• Shortbow, Light Crossbow</li>
                      <li>• Battle Axe, Flail</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">2 Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Greatsword, Greataxe, Maul</li>
                      <li>• Longbow, Heavy Crossbow</li>
                      <li>• Glaive, Halberd</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Armor */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Armor & Shields
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="font-semibold text-white mb-2">Light Armor (L):</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Padded Armor, Leather Armor</li>
                      <li>• Studded Leather</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">1 Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Shield (all types)</li>
                      <li>• Chain Shirt</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">2-3 Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Hide Armor (2), Scale Mail (2)</li>
                      <li>• Chain Mail (2), Breastplate (2)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">4 Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Splint Mail, Banded Mail</li>
                      <li>• Full Plate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Adventuring Gear */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Adventuring Gear
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="font-semibold text-white mb-2">Light Bulk (L):</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Potion, Scroll, Torch</li>
                      <li>• Chalk, Piton, Rations (1 day)</li>
                      <li>• Waterskin (empty), Bedroll</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">1 Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Backpack, Rope (50 ft)</li>
                      <li>• Grappling Hook, Crowbar</li>
                      <li>• Tent (pup), Lantern</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">2+ Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Tent (4-person): 2 Bulk</li>
                      <li>• Ladder (10 ft): 3 Bulk</li>
                      <li>• Chest: 2 Bulk (+ contents)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Consumables */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-4">
                  Consumables (Almost Always L)
                </h3>
                <p className="text-gray-300 mb-3">
                  Most consumables are Light Bulk. Remember the 10L = 1 Bulk rule!
                </p>
                <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    Example: You're carrying 23 healing potions. That's 2 Bulk + 3L (since 10 potions = 1 Bulk).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Real Scenarios */}
          <section id="scenarios" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Real Game Scenarios
            </h2>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4">
                  The Dungeon Crawl Where the Barbarian Couldn't Carry Loot
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">The Setup:</p>
                  <p>
                    Your level 3 barbarian (Str 18, +4 modifier) is wearing full plate (4 Bulk), carrying a greataxe (2 Bulk), and has a backpack (1 Bulk) with 15 potions (1 Bulk + 5L), rope (1 Bulk), and a grappling hook (1 Bulk).
                  </p>

                  <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 my-4">
                    <p className="font-semibold text-white mb-2">Current Bulk:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Armor: 4 Bulk</li>
                      <li>• Weapon: 2 Bulk</li>
                      <li>• Backpack: 1 Bulk</li>
                      <li>• Gear: 2 Bulk + 5L</li>
                      <li className="font-bold text-orange-400 mt-2">Total: 9 Bulk, 5L</li>
                    </ul>
                  </div>

                  <p className="font-semibold text-white">The Problem:</p>
                  <p>
                    You defeat the boss and find a chest with 5,000 gold pieces. Gold has Bulk—1,000 coins = 1 Bulk. So 5,000 GP = 5 Bulk.
                  </p>

                  <p>
                    Your encumbered threshold is 9 Bulk (5 + 4 Str). You're already at 9 Bulk, 5L. If you pick up even 1 Bulk of gold, you become encumbered (-10 speed, can't manipulate items).
                  </p>

                  <p className="font-semibold text-white mt-4">The Solution:</p>
                  <p>
                    Drop the rope and grappling hook (2 Bulk), take 2,000 GP (2 Bulk), and have the wizard (Str 10, carrying almost nothing) carry the rest. Or make two trips. Or hire a pack mule.
                  </p>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4">
                  The 10 Potions Problem
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">The Situation:</p>
                  <p>
                    Your rogue is carrying 9 healing potions (9L total—not yet 1 Bulk). They find 1 more potion. Do they pick it up?
                  </p>

                  <p className="font-semibold text-white mt-4">The Math:</p>
                  <p>
                    9L + 1L = 10L = 1 Bulk.
                  </p>

                  <p>
                    That one potion pushed them from "basically weightless" to "carrying an entire backpack's worth of bulk."
                  </p>

                  <p className="text-sm text-gray-400 mt-4">
                    This is why tracking Light items manually is annoying. You need to count every single potion, scroll, and torch to know when you hit the 10L threshold.
                  </p>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4">
                  Worn vs. Carried Bulk
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">Important Rule:</p>
                  <p>
                    Armor you're wearing doesn't count toward Bulk unless it's heavier than 1 Bulk.
                  </p>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 my-4">
                    <p className="text-sm">
                      <strong className="text-white">Example:</strong> Leather armor (L Bulk) worn = 0 Bulk counted. Full plate (4 Bulk) worn = 3 Bulk counted (armor Bulk - 1).
                    </p>
                  </div>

                  <p>
                    This is why strength-based fighters can wear full plate and still carry loot, while dex-based rogues in leather armor have more "effective" carrying capacity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Optimization Strategies */}
          <section id="strategies" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Optimization Strategies
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Strategy 1: Bag of Holding
                </h3>
                <p className="text-gray-300 mb-3">
                  A Type I Bag of Holding can contain 25 Bulk of items but only weighs 1 Bulk. This is the #1 loot hauling tool.
                </p>
                <p className="text-gray-400 text-sm">
                  Cost: 75 GP (Type I). Worth it by level 3-4 for any party serious about treasure hauling.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Strategy 2: Party Pack Mule Strategy
                </h3>
                <p className="text-gray-300 mb-3">
                  Designate your highest-Strength character as the "loot carrier." They wear medium armor instead of heavy, carry only essential weapons, and max out on Bags of Holding.
                </p>
                <p className="text-gray-400 text-sm">
                  A Str 18 barbarian in hide armor (instead of full plate) can carry 4 more Bulk of loot.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Strategy 3: Leave Loot Behind (Temporarily)
                </h3>
                <p className="text-gray-300 mb-3">
                  Mark the dungeon location on your map. Take the most valuable/smallest loot now. Return with a cart or pack animals later.
                </p>
                <p className="text-gray-400 text-sm">
                  A riding horse (carrying capacity ~20 Bulk) costs 8 GP. A wagon costs 15 GP. Both pay for themselves on the first treasure haul.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Strategy 4: Sell Heavy Loot On-Site
                </h3>
                <p className="text-gray-300 mb-3">
                  If you find a chest of 500 pieces of art (10 Bulk), sell them to the nearest merchant at a discount instead of hauling them to the city.
                </p>
                <p className="text-gray-400 text-sm">
                  You'll get 70% of the value instead of 100%, but you avoid the bulk penalty and save time. Good for parties in a hurry.
                </p>
              </div>
            </div>
          </section>

          {/* Tracking Problem */}
          <section id="tracking" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              The Tracking Problem
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Here's the dirty secret: <strong className="text-white">nobody actually tracks bulk accurately after level 5</strong>.
              </p>
              <p>
                Why? Because the math compounds:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>You loot 23 items from a dungeon. Each has different bulk values.</li>
                <li>Some items are L, some are 1, some are 2. You need to total them.</li>
                <li>Remember to convert every 10L to 1 Bulk.</li>
                <li>Did the fighter drop their rope when they picked up that greatsword? Where's that tracked?</li>
                <li>The wizard transferred 5 potions to the rogue. Update both character sheets.</li>
                <li>You sold 3 items and bought 2 new ones. Recalculate.</li>
              </ul>

              <p className="text-xl font-semibold text-orange-400 mt-6">
                Manual tracking breaks down by session 8.
              </p>

              <p>
                Character sheets don't auto-calculate bulk. Shared spreadsheets work until someone forgets to update them. Asking "what's your current bulk?" mid-combat kills momentum.
              </p>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mt-8">
                <p className="text-white font-semibold mb-2">There's a better way.</p>
                <p className="text-gray-300 mb-4">
                  D20 Loot Tracker automatically calculates bulk per character, warns you when you're approaching encumbrance, and handles the 10L conversion instantly.
                </p>
                <a href="https://app.d20-loot-tracker.com/">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Shield className="w-4 h-4 mr-2" />
                    Never Worry About Bulk Again
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Common Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: Do coins have bulk?
                </h3>
                <p className="text-gray-300">
                  Yes. 1,000 coins (of any type) = 1 Bulk. So 5,000 GP = 5 Bulk. This is why you can't just carry a dragon's hoard in your pockets.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: What if I'm wearing armor?
                </h3>
                <p className="text-gray-300">
                  Armor you're wearing counts as 1 Bulk less than its listed value (minimum 0). So full plate (4 Bulk) worn = 3 Bulk counted. Leather armor (L) worn = 0 Bulk counted.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: Can I just ignore bulk if my GM doesn't enforce it?
                </h3>
                <p className="text-gray-300">
                  Technically yes, but bulk exists for game balance. Without it, every character carries 50 healing potions, 10 backup weapons, and a portable alchemy lab. It trivializes resource management.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: What's "negligible bulk"?
                </h3>
                <p className="text-gray-300">
                  Items so small they don't count toward bulk at all—like a coin, a button, or a piece of chalk (as an individual item, not in bulk quantities). If it's smaller than a potion, it's negligible.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: How does bulk compare to DnD 5e weight?
                </h3>
                <p className="text-gray-300">
                  Rough conversion: 1 Bulk ≈ 10 lbs in DnD 5e. But bulk also accounts for awkwardness. A greatsword (2 Bulk) is about 6 lbs but takes up more "bulk" because it's long and unwieldy.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stop Wrestling with Bulk Calculations
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                D20 Loot Tracker handles bulk automatically—per-character tracking, encumbrance warnings, and instant 10L conversions.
              </p>
              <a href="https://app.d20-loot-tracker.com/">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Tracking Free Forever
                </Button>
              </a>
              <p className="text-gray-400 text-sm mt-4">
                No credit card • 2-minute setup • Works with any Pathfinder 2e campaign
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Related Guides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/pathfinder-loot-tracker">
                <div className="bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Pathfinder 2e Loot Tracker Features
                  </h4>
                  <p className="text-gray-400 text-sm">
                    See how D20 Loot Tracker handles bulk, item levels, and rune tracking for Pathfinder 2e.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-orange-400 text-sm font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/guides/dnd-loot-split-guide">
                <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    How to Split Loot Fairly in DnD 5e
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Learn 5 proven methods for splitting treasure without table arguments.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-purple-400 text-sm font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  );
}
