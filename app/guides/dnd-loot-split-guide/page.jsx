import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import {
  Coins,
  Users,
  Scale,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Swords,
  Shield,
  Sparkles,
  ArrowRight,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "How to Split Loot Fairly in D&D 5e (5 Methods + Examples) | D20 Loot Tracker",
  description: "Learn 5 proven methods for splitting treasure fairly in D&D 5e. Includes real table examples, decision flowchart, and solutions for common loot distribution problems. Free guide for DMs.",
  keywords: [
    "how to split loot in dnd 5e",
    "dnd party gold division",
    "fair loot distribution dnd",
    "dnd treasure split",
    "d&d gold calculator",
    "party loot dnd 5e",
    "dnd treasure distribution methods"
  ],
  openGraph: {
    title: "How to Split Loot Fairly in D&D 5e - Complete DM Guide",
    description: "5 proven methods for splitting treasure fairly in D&D, with real examples and solutions to common problems.",
    url: "https://d20-loot-tracker.com/guides/dnd-loot-split-guide",
    type: "article",
  },
  alternates: {
    canonical: "/guides/dnd-loot-split-guide",
  },
};

export default function DnDLootSplitGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">D&D 5e Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              How to Split Loot Fairly in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                D&D 5e
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The fighter took the +2 sword AND wants equal gold? Here are 5 proven methods for splitting treasure without starting table arguments.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              In This Guide
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#why-it-matters" className="hover:text-cyan-400 transition-colors">Why Loot Distribution Matters</a></li>
              <li><a href="#methods" className="hover:text-cyan-400 transition-colors">5 Methods for Splitting Loot</a></li>
              <li><a href="#math-problem" className="hover:text-cyan-400 transition-colors">The Math Problem (And Why Manual Tracking Breaks)</a></li>
              <li><a href="#examples" className="hover:text-cyan-400 transition-colors">Real Table Examples</a></li>
              <li><a href="#decision-tree" className="hover:text-cyan-400 transition-colors">Which Method Fits Your Table?</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Common Questions</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl prose prose-invert prose-lg">

          {/* Why It Matters */}
          <section id="why-it-matters" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-cyan-400" />
              Why Loot Distribution Matters
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                You've just defeated the ancient red dragon. The rogue opens the hoard and finds 50,000 gold pieces, a +2 longsword, a Staff of Power, and a Cloak of Displacement.
              </p>
              <p>
                The fighter immediately calls dibs on the sword. The wizard wants the staff. The rogue argues they should get extra gold since they found the secret door. The cleric just wants everyone to stop arguing.
              </p>
              <p className="font-semibold text-white">
                Sound familiar?
              </p>
              <p>
                Loot distribution is where the most table drama happens—not in combat, not in roleplay, but when dividing treasure. A clear system prevents arguments, keeps players engaged, and makes your game run smoother.
              </p>
              <p>
                The problem? There's no "right" answer in the Player's Handbook. D&D 5e gives you loot tables but zero guidance on how to split it fairly.
              </p>
            </div>
          </section>

          {/* 5 Methods */}
          <section id="methods" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              5 Methods for Splitting Loot
            </h2>

            {/* Method 1: Equal Split */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-cyan-400" />
                1. Equal Split (Communist Method)
              </h3>
              <div className="text-gray-300 space-y-3">
                <p className="font-semibold text-white">How It Works:</p>
                <p>All gold is divided equally. Magic items are distributed based on need, with everyone getting equal "value" over time.</p>

                <p className="font-semibold text-white mt-4">When It Works:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Small parties (3-4 players) where everyone knows each other</li>
                  <li>Tables with mature players who trust each other</li>
                  <li>Long campaigns where loot balances out naturally</li>
                </ul>

                <p className="font-semibold text-white mt-4">When It Fails:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The wizard gets a Staff of the Magi (very rare) and also gets equal gold</li>
                  <li>Players who skip sessions still get full shares</li>
                  <li>No incentive to take risks in combat</li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
                  <p className="text-green-300 text-sm">
                    <strong>Best For:</strong> Cooperative tables where story matters more than optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Method 2: Needs-Based */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Swords className="w-6 h-6 text-purple-400" />
                2. Needs-Based Distribution
              </h3>
              <div className="text-gray-300 space-y-3">
                <p className="font-semibold text-white">How It Works:</p>
                <p>Magic items go to whoever can use them best. Gold is split equally. If multiple people want the same item, they negotiate or roll for it.</p>

                <p className="font-semibold text-white mt-4">When It Works:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mixed optimization levels (some players min-max, others don't)</li>
                  <li>Clear class roles (fighter gets weapons, wizard gets spellbooks)</li>
                  <li>Tables that value tactical combat</li>
                </ul>

                <p className="font-semibold text-white mt-4">When It Fails:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Two players want the same item and both "need" it</li>
                  <li>Support classes feel left out (cleric never gets cool items)</li>
                  <li>Requires strong DM arbitration</li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
                  <p className="text-green-300 text-sm">
                    <strong>Best For:</strong> Tactically-minded groups who optimize builds
                  </p>
                </div>
              </div>
            </div>

            {/* Method 3: Contribution-Based */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-orange-400" />
                3. Contribution-Based (Meritocracy)
              </h3>
              <div className="text-gray-300 space-y-3">
                <p className="font-semibold text-white">How It Works:</p>
                <p>Whoever contributed most to getting the loot gets first pick or bonus shares. The rogue who found the secret door gets 10% extra. The barbarian who killed the boss gets the magic axe.</p>

                <p className="font-semibold text-white mt-4">When It Works:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Competitive tables that enjoy friendly rivalry</li>
                  <li>Encourages creative problem-solving</li>
                  <li>Rewards players who take risks</li>
                </ul>

                <p className="font-semibold text-white mt-4">When It Fails:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Support players (healers, buffers) get shafted</li>
                  <li>Kills aren't the only valuable contribution</li>
                  <li>Creates toxic "kill-stealing" behavior</li>
                  <li>Requires careful tracking of who did what</li>
                </ul>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                  <p className="text-yellow-300 text-sm">
                    <strong>Warning:</strong> Can create competitive drama if not handled carefully
                  </p>
                </div>
              </div>
            </div>

            {/* Method 4: Party Fund */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Coins className="w-6 h-6 text-yellow-400" />
                4. Party Fund System
              </h3>
              <div className="text-gray-300 space-y-3">
                <p className="font-semibold text-white">How It Works:</p>
                <p>50% of all gold goes to a shared party fund. The other 50% is split equally among players. The party fund pays for group expenses (healing potions, resurrections, tavern stays).</p>

                <p className="font-semibold text-white mt-4">When It Works:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Long campaigns with recurring expenses</li>
                  <li>Groups that pool resources for big purchases</li>
                  <li>Prevents "5 Bags of Holding" problem (everyone buying the same thing)</li>
                </ul>

                <p className="font-semibold text-white mt-4">When It Fails:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Requires a trusted party treasurer (usually not the rogue)</li>
                  <li>Disputes over what counts as "party expense"</li>
                  <li>Players feel like they have less personal wealth</li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
                  <p className="text-green-300 text-sm">
                    <strong>Best For:</strong> Long-term campaigns with shared goals
                  </p>
                </div>
              </div>
            </div>

            {/* Method 5: Roll for It */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-red-400" />
                5. Roll for It (Chaos Method)
              </h3>
              <div className="text-gray-300 space-y-3">
                <p className="font-semibold text-white">How It Works:</p>
                <p>When multiple people want the same item, everyone rolls a d20 (with modifiers for need/class fit). Highest roll wins. Gold is split equally.</p>

                <p className="font-semibold text-white mt-4">When It Works:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Casual tables that don't take loot too seriously</li>
                  <li>Resolves disputes quickly without debate</li>
                  <li>Feels "fair" since it's random</li>
                </ul>

                <p className="font-semibold text-white mt-4">When It Fails:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The wizard wins the greataxe, the barbarian wins the spellbook</li>
                  <li>No consideration for actual character needs</li>
                  <li>Can feel arbitrary and unsatisfying</li>
                </ul>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mt-4">
                  <p className="text-green-300 text-sm">
                    <strong>Best For:</strong> Beer-and-pretzels games where "fun" trumps optimization
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Math Problem */}
          <section id="math-problem" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-400" />
              The Math Problem (And Why Manual Tracking Breaks)
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Here's where every system runs into the same issue: <strong className="text-white">the tracking overhead</strong>.
              </p>
              <p>
                Let's say you're using the Equal Split method. Your party just looted a dragon hoard:
              </p>

              <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 my-6">
                <ul className="space-y-2">
                  <li>• 42,350 gold pieces</li>
                  <li>• 8,200 silver pieces</li>
                  <li>• 1,400 platinum pieces</li>
                  <li>• 15 gems worth varying amounts</li>
                  <li>• 7 magic items</li>
                  <li>• 23 pieces of art</li>
                </ul>
              </div>

              <p className="font-semibold text-white">Now answer these questions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>How much gold does each of your 5 party members get?</li>
                <li>Wait, the paladin wasn't there for this session. Do they get a share?</li>
                <li>You need to convert everything to GP first. What's 8,200 SP in GP again?</li>
                <li>The rogue already took 3 gems "for safekeeping." Which ones? What were they worth?</li>
                <li>The wizard wants to sell their +1 dagger from 3 sessions ago. Where is that tracked?</li>
                <li>Who has the Bag of Holding? Did we ever write that down?</li>
              </ul>

              <p className="text-xl font-semibold text-cyan-400 mt-6">
                This is why Google Sheets breaks down.
              </p>

              <p>
                The first few sessions, someone maintains a spreadsheet. By session 10, the formulas are broken, half the party is editing simultaneously, and nobody knows the true total.
              </p>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6 mt-8">
                <p className="text-white font-semibold mb-2">There's a better way.</p>
                <p className="text-gray-300 mb-4">
                  D20 Loot Tracker handles all the math automatically—currency conversion, equal splits, party funds, and complete transaction history.
                </p>
                <a href="https://app.d20-loot-tracker.com/">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Shield className="w-4 h-4 mr-2" />
                    Skip the Spreadsheet Headache
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Real Table Examples */}
          <section id="examples" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Real Table Examples
            </h2>

            <div className="space-y-6">
              {/* Example 1 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  Scenario 1: The +2 Longsword Dilemma
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">The Situation:</p>
                  <p>Your party finds a +2 longsword. Both the fighter and the paladin use longswords. Who gets it?</p>

                  <p className="font-semibold text-white mt-4">Equal Split Solution:</p>
                  <p>Fighter gets the sword this time. Paladin gets first dibs on the next comparable magic weapon.</p>

                  <p className="font-semibold text-white mt-4">Needs-Based Solution:</p>
                  <p>Check character sheets. Does the fighter already have a +1 weapon? Does the paladin? Give it to whoever has the lower current bonus.</p>

                  <p className="font-semibold text-white mt-4">Roll for It Solution:</p>
                  <p>Both roll d20. Fighter gets +2 because longsword is their signature weapon. Paladin gets +1 because they can use it. Highest total wins.</p>
                </div>
              </div>

              {/* Example 2 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  Scenario 2: The Absent Player Problem
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">The Situation:</p>
                  <p>The wizard's player is sick and misses the session where you defeat the ancient dragon and loot 50,000 GP.</p>

                  <p className="font-semibold text-white mt-4">Equal Split Solution:</p>
                  <p>Wizard still gets a full share (50,000 ÷ 5 = 10,000 GP each). Their character was "resting at the inn."</p>

                  <p className="font-semibold text-white mt-4">Contribution-Based Solution:</p>
                  <p>Wizard gets 0 GP since they didn't contribute. The other 4 players split it (12,500 GP each).</p>

                  <p className="font-semibold text-white mt-4">Hybrid Solution (Most Common):</p>
                  <p>Wizard gets a half share (6,250 GP). The logic: they're still part of the party, but didn't risk their life in the fight.</p>
                </div>
              </div>

              {/* Example 3 */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  Scenario 3: The "Useless" Magic Item
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="font-semibold text-white">The Situation:</p>
                  <p>You find a Staff of the Woodlands. Nobody in your party is a druid, and it requires attunement by a druid.</p>

                  <p className="font-semibold text-white mt-4">All Methods Agree:</p>
                  <p>Sell it and split the gold equally, or keep it in the party fund in case you hire a druid NPC or someone multiclasses.</p>

                  <p className="text-sm text-gray-400 mt-4">
                    (Reminder: Magic items typically sell for 50% of their listed value per the DMG.)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Decision Tree */}
          <section id="decision-tree" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Which Method Fits Your Table?
            </h2>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">If your table values cooperation over competition...</p>
                    <p className="text-gray-300">→ Use <strong className="text-cyan-400">Equal Split</strong></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">If your players optimize builds and care about tactics...</p>
                    <p className="text-gray-300">→ Use <strong className="text-purple-400">Needs-Based</strong></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">If you want to reward creative play and risk-taking...</p>
                    <p className="text-gray-300">→ Use <strong className="text-orange-400">Contribution-Based</strong> (but monitor for toxicity)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">If you're running a long campaign with shared goals...</p>
                    <p className="text-gray-300">→ Use <strong className="text-yellow-400">Party Fund System</strong></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2">If your group just wants beer and pretzels fun...</p>
                    <p className="text-gray-300">→ Use <strong className="text-red-400">Roll for It</strong></p>
                  </div>
                </div>

                <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-6 mt-8">
                  <p className="text-cyan-400 font-semibold mb-2">Pro Tip:</p>
                  <p className="text-gray-300">
                    You can mix methods! Use Equal Split for gold, Needs-Based for magic items, and Party Fund for consumables. The key is deciding this at Session 0 and sticking to it.
                  </p>
                </div>
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
                  Q: What if someone takes loot without telling the party?
                </h3>
                <p className="text-gray-300">
                  This is a player behavior issue, not a system issue. Have an out-of-game conversation. If the rogue is stealing from the party and hiding it in-character, that's fine—as long as the other players are okay with it. If they're not, it's a Session 0 conversation about table expectations.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: How do you value magic items for equal splits?
                </h3>
                <p className="text-gray-300">
                  Use the DMG rarity guidelines (common = 50-100 GP, uncommon = 100-500 GP, rare = 500-5,000 GP, etc.) or just track "who got the last magic item" and rotate. Don't overthink it—rough fairness is better than perfect math.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: Should absent players get loot shares?
                </h3>
                <p className="text-gray-300">
                  Session 0 decision. Common options: (1) Full share if absence was unavoidable, (2) Half share always, (3) No share. Most tables use option 1 to avoid punishing players for real-life obligations.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: What about selling magic items?
                </h3>
                <p className="text-gray-300">
                  RAW (Rules As Written), magic items sell for 50% of their value and finding a buyer takes time. Many DMs make it harder to sell to prevent "loot-and-liquidate" behavior. The gold from sales should be split equally unless the seller owned the item outright.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Q: How do you track who has what items?
                </h3>
                <p className="text-gray-300">
                  This is where manual tracking breaks down. Shared Google Sheets work until someone forgets to update them. Character sheets work until items get transferred. The best solution is a real-time tracker that automatically logs transactions and current ownership.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stop Arguing Over Gold. Start Playing.
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                D20 Loot Tracker handles the math automatically—equal splits, party funds, transaction history, and real-time sync across all devices.
              </p>
              <a href="https://app.d20-loot-tracker.com/">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Tracking Free Forever
                </Button>
              </a>
              <p className="text-gray-400 text-sm mt-4">
                No credit card • 2-minute setup • Works with any D&D 5e campaign
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Related Guides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/dnd-loot-tracker">
                <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    D&D 5e Loot Tracker Features
                  </h4>
                  <p className="text-gray-400 text-sm">
                    See how D20 Loot Tracker handles attunement, currency conversion, and magic item tracking for D&D 5e.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-purple-400 text-sm font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/guides/pathfinder-2e-bulk-guide">
                <div className="bg-slate-800/50 border border-slate-700 hover:border-orange-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    Pathfinder 2e Bulk System Guide
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Learn how bulk works in Pathfinder 2e and how to track encumbrance without spreadsheets.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-orange-400 text-sm font-medium">
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
