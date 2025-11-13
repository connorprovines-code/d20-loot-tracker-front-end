import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Link from "next/link";
import {
  Table as TableIcon,
  Smartphone,
  Users,
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "D20 Loot Tracker vs Google Sheets: Which Is Better for D&D? | Comparison",
  description: "Honest comparison of D20 Loot Tracker vs Google Sheets for tracking D&D loot. When sheets work, when they fail, and which is right for your table.",
  keywords: [
    "dnd loot tracker vs google sheets",
    "google sheets alternative dnd",
    "better than spreadsheet for loot",
    "dnd loot tracking tool",
    "google sheets loot tracker problems"
  ],
  openGraph: {
    title: "D20 Loot Tracker vs Google Sheets - Honest Comparison",
    description: "When Google Sheets work great for loot tracking—and when they don't.",
    url: "https://d20-loot-tracker.com/vs/google-sheets-loot-tracker",
    type: "article",
  },
  alternates: {
    canonical: "/vs/google-sheets-loot-tracker",
  },
};

export default function VSGoogleSheets() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              D20 Loot Tracker vs{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                Google Sheets
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Google Sheets works great... until your party hits level 5. Here's an honest comparison to help you choose the right tool for your table.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">

          {/* When Sheets Are Better */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-400" />
              When Google Sheets Are Better
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's be honest: Google Sheets are amazing for certain use cases. If any of these describe your table, stick with Sheets:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Solo Games / Small Groups (1-3 Players)
                </h3>
                <p className="text-gray-300 text-sm">
                  If you're running a solo campaign or have 2-3 players who rarely transfer items, Sheets are perfectly fine. The complexity doesn't justify a dedicated tool.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Full Customization Control
                </h3>
                <p className="text-gray-300 text-sm">
                  Want to track custom fields like "who found this item" or "sentimental value"? Sheets let you build exactly what you want with zero constraints.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  Offline Play
                </h3>
                <p className="text-gray-300 text-sm">
                  If your table plays in a basement with no WiFi, Sheets (downloaded for offline use) beat any web app. Period.
                </p>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  "I Love Spreadsheets" People
                </h3>
                <p className="text-gray-300 text-sm">
                  Some people genuinely enjoy building complex formulas and pivot tables. If that's you, Sheets will always be more satisfying than a pre-built tool.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mt-8">
              <p className="text-cyan-400 font-semibold mb-2">Bottom Line:</p>
              <p className="text-gray-300">
                If you're running a simple campaign with minimal loot tracking needs, Google Sheets are free, flexible, and more than enough. Don't overthink it.
              </p>
            </div>
          </section>

          {/* When Sheets Break Down */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-400" />
              When Google Sheets Break Down
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Here's where Sheets fall apart—usually around level 5 when loot starts piling up and the party has 30+ magic items:
            </p>

            <div className="space-y-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Problem #1: Real-Time Sync Is a Lie
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Google Sheets claims to have "real-time collaboration," but here's what actually happens:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The rogue adds 3 potions to their inventory</li>
                    <li>The fighter edits the same cell to add gold</li>
                    <li>Both hit "Enter" at the same time</li>
                    <li>One change overwrites the other—silently</li>
                  </ul>
                  <p className="mt-3">
                    Sheets doesn't have <strong className="text-white">conflict resolution</strong>. Last edit wins. No warning. No undo. Just... gone.
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Problem #2: Formulas Break When Players Edit
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    You spend 30 minutes building a formula to auto-calculate party gold:
                  </p>
                  <code className="block bg-slate-900/50 p-3 rounded text-xs overflow-x-auto my-2">
                    =SUM(B2:B10)/5
                  </code>
                  <p>
                    Then the wizard accidentally deletes column B while adding an item. Your formula breaks. Now it shows <code className="text-red-400">#REF!</code>.
                  </p>
                  <p className="mt-3">
                    The party doesn't notice for 3 sessions. Your gold totals have been wrong the entire time.
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Problem #3: Mobile Experience Is Terrible
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Try editing a Google Sheet on a phone. Seriously, try it right now.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Tiny cells you can't tap accurately</li>
                    <li>Horizontal scrolling required to see all columns</li>
                    <li>Formulas don't work well in the mobile app</li>
                    <li>Copy-paste is a nightmare</li>
                  </ul>
                  <p className="mt-3">
                    If your table has even one player who joins from their phone, Sheets become unusable for them.
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Problem #4: No Transaction History
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Session 12: "Wait, why does the fighter have 2,000 extra gold?"
                  </p>
                  <p>
                    In Sheets, you have no audit trail. You can check version history, but that shows you <em>what changed</em>, not <em>why</em> or <em>who authorized it</em>.
                  </p>
                  <p className="mt-3">
                    Good luck debugging 12 sessions of transactions manually.
                  </p>
                </div>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Problem #5: Setup Time for Each Campaign
                </h3>
                <div className="text-gray-300 space-y-3 text-sm">
                  <p>
                    Starting a new campaign? Time to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Duplicate your old Sheet template</li>
                    <li>Delete all the old data manually</li>
                    <li>Re-invite all players with edit permissions</li>
                    <li>Fix formulas that broke during copy</li>
                    <li>Re-explain to new players how to use it</li>
                  </ul>
                  <p className="mt-3">
                    That's 15-30 minutes of setup work before Session 1.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Side-by-Side Comparison */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Side-by-Side Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-4 px-6 text-gray-400 font-semibold">Feature</th>
                    <th className="text-center py-4 px-6 text-green-400 font-semibold">Google Sheets</th>
                    <th className="text-center py-4 px-6 text-cyan-400 font-semibold">D20 Loot Tracker</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Setup Time</td>
                    <td className="text-center py-4 px-6">15-30 min (per campaign)</td>
                    <td className="text-center py-4 px-6 text-cyan-400 font-semibold">2 minutes</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Real-Time Sync</td>
                    <td className="text-center py-4 px-6">❌ Conflicting edits overwrite</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ True real-time with conflict resolution</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Mobile Experience</td>
                    <td className="text-center py-4 px-6">❌ Tiny cells, horizontal scrolling</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ Mobile-optimized UI</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Formula Errors</td>
                    <td className="text-center py-4 px-6">❌ Break when players edit</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ No formulas to break</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Transaction History</td>
                    <td className="text-center py-4 px-6">❌ Version history only (manual)</td>
                    <td className="text-center py-4 px-6 text-cyan-400">✅ Complete audit trail</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Learning Curve</td>
                    <td className="text-center py-4 px-6 text-green-400">✅ Everyone knows Sheets</td>
                    <td className="text-center py-4 px-6">⚠️ 5 min to learn interface</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Customization</td>
                    <td className="text-center py-4 px-6 text-green-400">✅ Infinite (if you know formulas)</td>
                    <td className="text-center py-4 px-6">⚠️ Pre-built features only</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-4 px-6">Offline Access</td>
                    <td className="text-center py-4 px-6 text-green-400">✅ (if pre-downloaded)</td>
                    <td className="text-center py-4 px-6">❌ Requires internet</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">Cost</td>
                    <td className="text-center py-4 px-6 text-green-400">Free</td>
                    <td className="text-center py-4 px-6 text-cyan-400">Free</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Real User Scenarios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Real Table Scenarios
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  "The Broken Formula Incident"
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p className="italic text-gray-400">
                    Real story from a DM on Reddit:
                  </p>
                  <p>
                    Session 8, the party defeats a dragon and loots 50,000 GP. The DM adds it to the "Party Gold" cell in their Sheet, which has a formula to auto-split among 5 players.
                  </p>
                  <p>
                    Except the formula broke 3 sessions ago when someone added a new row. It's been dividing by 4 instead of 5. Nobody noticed.
                  </p>
                  <p>
                    Now the DM has to manually audit 3 sessions of transactions to figure out who's owed how much gold. The session ends early because of the argument.
                  </p>
                  <p className="font-semibold text-white mt-4">
                    With D20 Loot Tracker: Automatic equal splits, no formulas to break, complete transaction history to resolve disputes.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  "The Mobile Player Problem"
                </h3>
                <div className="text-gray-300 space-y-3">
                  <p>
                    One player in your party only has a phone (no laptop). They can't use Google Sheets effectively—tiny cells, horizontal scrolling, accidental edits.
                  </p>
                  <p>
                    So they just... stop tracking their loot. The DM has to manually update their inventory after every session.
                  </p>
                  <p className="font-semibold text-white mt-4">
                    With D20 Loot Tracker: Mobile-first design works perfectly on phones. No horizontal scrolling, large tap targets, simple interface.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Line Decision Guide */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              Bottom Line: Which Should You Use?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Use Google Sheets If...</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>You have 1-3 players and minimal loot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Everyone plays on laptops (no mobile players)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>You love building custom spreadsheets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>You play offline often</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Loot tracking is a minor part of your game</span>
                  </li>
                </ul>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Use D20 Loot Tracker If...</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>You have 4+ players with lots of loot transfers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>At least one player joins from mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>You're tired of fixing broken formulas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>You want transaction history / audit trail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>You play online with internet access</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                See the Difference Yourself
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Try D20 Loot Tracker for one session. If you don't immediately see the value, you can export your data and go back to Sheets. Zero risk.
              </p>
              <a href="https://app.d20-loot-tracker.com/">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-xl">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Tracking Free - No Spreadsheet Degree Required
                </Button>
              </a>
              <p className="text-gray-400 text-sm mt-4">
                No credit card • 2-minute setup • Works on mobile and desktop
              </p>
            </div>
          </section>

          {/* Related Content */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-6">Related Comparisons</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/vs/foundry-vtt-loot-tracker">
                <div className="bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Standalone Loot Tracker vs Foundry VTT
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Do you need both? How standalone trackers work alongside VTTs.
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
