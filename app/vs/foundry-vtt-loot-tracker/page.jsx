import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Users,
  Zap,
  CheckCircle,
  Shield,
  Globe,
  ArrowRight,
  Layers,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Standalone Loot Tracker vs Foundry VTT: Do You Need Both? | Comparison",
  description: "Compare standalone loot trackers vs Foundry VTT loot modules. When to use each, why they're complementary, and which fits your playstyle.",
  keywords: [
    "foundry loot tracker alternative",
    "standalone loot tracker",
    "loot tracker without vtt",
    "theater of mind loot tracking",
    "foundry vs standalone tracker"
  ],
  openGraph: {
    title: "Standalone Loot Tracker vs Foundry VTT - Do You Need Both?",
    description: "Foundry is amazing. But 60% of tables don't use VTTs. Here's when standalone trackers shine.",
    url: "https://d20-loot-tracker.com/vs/foundry-vtt-loot-tracker",
    type: "article",
  },
  alternates: {
    canonical: "/vs/foundry-vtt-loot-tracker",
  },
};

export default function VSFoundryVTT() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Standalone Loot Tracker vs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Foundry VTT
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Foundry is amazing for maps and combat. But 60% of tables don't use VTTs. Here's when a standalone loot tracker shines—and why you might use both.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">

          {/* Quick Answer */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">The Quick Answer</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Foundry VTT is incredible for <strong className="text-white">combat, maps, and automation during sessions</strong>. A standalone loot tracker is better for <strong className="text-white">persistent inventory, cross-VTT campaigns, mobile access, and theater-of-the-mind tables</strong>. They're not competitors—they solve different problems. Many groups use both.
              </p>
            </div>
          </section>

          {/* When Foundry Wins */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Monitor className="w-8 h-8 text-orange-400" />
              When Foundry VTT Wins
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              If you're running a full-time Foundry campaign and all players have good PCs, Foundry's loot modules are powerful:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  Visual Drag-and-Drop Looting
                </h3>
                <p className="text-gray-300 text-sm">
                  Literally drag loot tokens from the map into character sheets. Feels tactile and satisfying. Great for combat loot (enemies drop items visually).
                </p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  Full Character Sheet Integration
                </h3>
                <p className="text-gray-300 text-sm">
                  Loot automatically updates character sheets, weight calculations, attunement slots, and spell components. Everything in one place.
                </p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  Automation with Modules
                </h3>
                <p className="text-gray-300 text-sm">
                  Modules like "Loot Sheet NPC" let you auto-populate merchant inventories, treasure hoards, and enemy loot tables with one click.
                </p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  All-in-One Solution
                </h3>
                <p className="text-gray-300 text-sm">
                  If your entire game lives in Foundry (maps, character sheets, rolls, music), adding loot tracking there keeps everything unified.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mt-8">
              <p className="text-orange-400 font-semibold mb-2">Bottom Line:</p>
              <p className="text-gray-300">
                If you run 100% Foundry sessions and all players are comfortable with the interface, Foundry's loot modules are hard to beat for in-game looting.
              </p>
            </div>
          </section>

          {/* When Standalone Wins */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-cyan-400" />
              When Standalone Loot Trackers Win
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Here's where standalone trackers (like D20 Loot Tracker) excel—and why many Foundry users still use them:
            </p>

            <div className="space-y-6">
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                  1. Theater of the Mind Tables
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Not every table uses VTTs. Many DMs prefer theater-of-the-mind, physical maps, or simple audio-only Discord calls.
                  </p>
                  <p>
                    Foundry requires everyone to run the client, learn the interface, and use a PC/laptop. Standalone trackers work from any device with a web browser.
                  </p>
                  <p className="font-semibold text-white mt-3">
                    Stat: ~60% of D&D tables don't use VTTs at all (per Wizards surveys).
                  </p>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                  2. Mobile-Only Players
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Foundry barely works on mobile. The interface is designed for desktop (drag-and-drop, hover tooltips, tiny buttons).
                  </p>
                  <p>
                    If even one player in your group joins from their phone (commuting, traveling, in bed), they can't use Foundry effectively.
                  </p>
                  <p className="font-semibold text-white mt-3">
                    Standalone trackers are mobile-first. Large tap targets, responsive design, no horizontal scrolling.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  3. Cross-VTT Campaigns
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Your table uses Roll20 for combat but Discord voice for roleplay. Or you switch between in-person and online sessions.
                  </p>
                  <p>
                    Foundry loot data is locked inside Foundry. You can't easily export it to Roll20, Fantasy Grounds, or a physical table.
                  </p>
                  <p className="font-semibold text-white mt-3">
                    Standalone trackers are VTT-agnostic. Use them alongside any VTT (or no VTT).
                  </p>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-cyan-400" />
                  4. Players Who Don't Want Foundry Accounts
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Some players don't want to create Foundry accounts, download clients, or learn a complex interface just to track loot.
                  </p>
                  <p>
                    They're happy to use Foundry during combat (where the DM drives), but want something simpler for inventory between sessions.
                  </p>
                  <p className="font-semibold text-white mt-3">
                    Standalone trackers have zero installation. Just a shareable link. No accounts required for basic use.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  5. Persistent Loot Tracking Across Multiple Campaigns
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    You run multiple campaigns in Foundry. Each has its own world. Loot data lives in each world separately.
                  </p>
                  <p>
                    Want to track loot across West Marches campaigns, rotating DMs, or one-shots? Foundry gets messy.
                  </p>
                  <p className="font-semibold text-white mt-3">
                    Standalone trackers let you manage multiple campaigns in one account. Easy switching. Shared players across campaigns.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Complementary Use Case */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="w-8 h-8 text-purple-400" />
              The Complementary Approach: Use Both!
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Here's the secret: Many groups use <strong className="text-white">Foundry for combat/maps</strong> and a <strong className="text-white">standalone tracker for persistent inventory</strong>. Best of both worlds.
            </p>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-4">How It Works:</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">During Combat (Use Foundry)</p>
                    <p className="text-sm">Drag loot from enemies to temporary "loot pile" actors. Visual, fast, integrated with combat flow.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">After Session (Transfer to Standalone Tracker)</p>
                    <p className="text-sm">Manually add the session's loot to D20 Loot Tracker. Takes 2 minutes. Now it's permanently recorded with transaction history.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Between Sessions (Use Standalone Tracker)</p>
                    <p className="text-sm">Players access on mobile to check inventory, transfer items, sell loot. No need to boot up Foundry.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 font-bold">4</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Long-Term Records (Standalone Tracker)</p>
                    <p className="text-sm">Complete campaign history lives in the tracker. Export reports, transaction logs, total wealth progression.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-400">
                  <strong className="text-purple-400">Why This Works:</strong> You get Foundry's visual looting during gameplay and a standalone tracker's persistence, mobile access, and simplicity for everything else. No compromises.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Feature Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-4 px-6 text-gray-400 font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 text-orange-400 font-semibold">Foundry VTT</th>
                    <th className="text-center py-4 px-6 text-cyan-400 font-semibold">Standalone Tracker</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Visual Drag-and-Drop</td>
                    <td className="text-center py-4 px-6 text-orange-400">✅ Excellent</td>
                    <td className="text-center py-4 px-6">❌ Click-based only</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Mobile Access</td>
                    <td className="text-center py-4 px-6">❌ Poor (desktop-only UI)</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ Mobile-first design</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Theater of the Mind</td>
                    <td className="text-center py-4 px-6">❌ Requires VTT setup</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ Works standalone</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Character Sheet Integration</td>
                    <td className="text-center py-4 px-6 text-orange-400">✅ Full integration</td>
                    <td className="text-center py-4 px-6">⚠️ Separate system</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Cross-VTT Support</td>
                    <td className="text-center py-4 px-6">❌ Foundry-only</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ Works with any VTT</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Transaction History</td>
                    <td className="text-center py-4 px-6">⚠️ Manual logging</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ Automatic audit trail</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Setup Complexity</td>
                    <td className="text-center py-4 px-6">⚠️ Requires VTT hosting</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ Just a shareable link</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Cost</td>
                    <td className="text-center py-4 px-6">$50 (one-time)</td>
                    <td className="text-center py-4 px-6 text-cyan-400">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Use Case Matrix */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Which Should You Use?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Use Foundry Loot If...</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Your entire campaign runs in Foundry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>All players use PCs/laptops (no mobile)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>You love visual drag-and-drop looting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>You want everything in one system</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Use Standalone Tracker If...</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>You play theater of the mind / in-person</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Any players join from mobile devices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>You use Roll20, Fantasy Grounds, or other VTTs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>You want loot tracking separate from VTT</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8 mt-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Use Both If...</h3>
              <p className="text-gray-300 mb-4">
                You run Foundry sessions but want persistent inventory tracking that works on mobile, across campaigns, and with transaction history.
              </p>
              <p className="text-sm text-gray-400">
                (This is actually the most common setup for serious Foundry groups—VTT for gameplay, standalone tracker for long-term records.)
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Works with Any VTT—Or No VTT
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                D20 Loot Tracker complements Foundry, Roll20, Fantasy Grounds, and theater-of-the-mind tables. Try it alongside your existing setup.
              </p>
              <a href="https://app.d20-loot-tracker.com/">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Tracking Free Forever
                </Button>
              </a>
              <p className="text-gray-400 text-sm mt-4">
                No credit card • 2-minute setup • Use it alongside any VTT
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Related Comparisons</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/vs/google-sheets-loot-tracker">
                <div className="bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    D20 Loot Tracker vs Google Sheets
                  </h4>
                  <p className="text-gray-400 text-sm">
                    When spreadsheets work great—and when they don't.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-cyan-400 text-sm font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link href="/guides/dnd-loot-split-guide">
                <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    How to Split Loot Fairly in D&D 5e
                  </h4>
                  <p className="text-gray-400 text-sm">
                    5 proven methods for splitting treasure without table arguments.
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
