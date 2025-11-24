import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";
import { Shield, AlertTriangle, Check, X, Info, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "D&D 5e Attunement Tracker: Complete Guide to Managing Attunement Slots | D20 Loot Tracker",
  description: "Master D&D 5e attunement rules with our complete guide. Learn the 3-slot limit, attunement requirements, breaking attunement, and how to track attuned items automatically.",
  keywords: ["dnd attunement", "5e attunement rules", "dnd attunement tracker", "attunement slots 5e", "how many attunement slots dnd", "dnd attunement calculator", "track attuned items", "attunement 5e guide"],
  openGraph: {
    title: "D&D 5e Attunement Tracker: Complete Guide to Attunement Rules",
    description: "Learn attunement rules, track the 3-slot limit, and manage magic items that require attunement in D&D 5e.",
    type: "article",
  },
};

export default function AttunementGuide() {
  return (
    <article className="prose prose-invert prose-cyan max-w-none">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "D&D Attunement Tracking Guide" }
        ]}
        className="mb-8"
      />

      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          D&D 5e Attunement: Complete Tracking Guide
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Your Wizard just found a Staff of Power, your Paladin wants the Holy Avenger, and your Rogue is eyeing
          that Cloak of Invisibility. Everyone's excited—until someone asks,{" "}
          <strong className="text-cyan-400">"Wait, how many attuned items can I have?"</strong>
          <br /><br />
          Welcome to one of D&D 5e's most misunderstood mechanics: attunement.
        </p>

        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/40 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            What is Attunement in D&D 5e?
          </h2>
          <p className="text-gray-300 mb-4">
            Attunement is a special bond between a creature and a magic item. Some magic items—especially powerful
            ones—require attunement to use their magical properties. Think of it as "claiming" an item so it works
            for you specifically.
          </p>
          <p className="text-gray-300 mb-0">
            <strong className="text-white">Key Rule:</strong> A creature can be attuned to a maximum of{" "}
            <strong className="text-cyan-400">three magic items at any one time</strong>. This limit prevents
            characters from hoarding every powerful item in the campaign.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The 3-Slot Attunement Limit</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-green-400">What This Means</h3>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
              <li>Each character can attune to 3 magic items max</li>
              <li>You can own more than 3 items that require attunement</li>
              <li>You just can't have more than 3 active at once</li>
              <li>Non-attunement items don't count toward the limit</li>
              <li>The limit applies to all creatures (including NPCs)</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-red-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <X className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-red-400">What Happens if You Try to Exceed It</h3>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
              <li>You must break attunement with one item first</li>
              <li>The old item loses its magical properties for you</li>
              <li>Then you can attune to a new item</li>
              <li>You can't "temporarily" attune beyond 3 slots</li>
              <li>There are no official ways to increase the limit</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">How to Attune to a Magic Item</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Short Rest with the Item</h3>
                <p className="text-gray-300 mb-2">
                  You must spend a <strong>short rest</strong> (at least 1 hour) focused on only that item.
                  During this time, you:
                </p>
                <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside ml-4">
                  <li>Physically interact with the item (wear it, wield it, study it)</li>
                  <li>Cannot be asleep, unconscious, or incapacitated</li>
                  <li>Can't attune to multiple items during the same short rest</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Check Attunement Requirements</h3>
                <p className="text-gray-300 mb-2">
                  Some items have special requirements beyond just spending time with them:
                </p>
                <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside ml-4">
                  <li><strong className="text-white">Class requirement:</strong> "Requires attunement by a Wizard"</li>
                  <li><strong className="text-white">Alignment requirement:</strong> "Requires attunement by a good-aligned creature"</li>
                  <li><strong className="text-white">Race requirement:</strong> "Requires attunement by a Dwarf"</li>
                  <li><strong className="text-white">Ability requirement:</strong> "Requires attunement by a spellcaster"</li>
                </ul>
                <p className="text-gray-400 text-sm mt-3 italic">
                  💡 If you don't meet the requirements, you can't attune to the item at all.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Confirm You Have an Open Slot</h3>
                <p className="text-gray-300 mb-2">
                  Before starting attunement, count your currently attuned items. If you're at 3/3, you must
                  break attunement with one item first.
                </p>
                <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4 mt-3">
                  <p className="text-sm text-cyan-400 font-semibold mb-2">Example:</p>
                  <p className="text-sm text-gray-300">
                    Your Wizard is attuned to a <em>Staff of Fire</em>, <em>Cloak of Protection</em>, and{" "}
                    <em>Ring of Spell Storing</em>. You find a <em>Staff of Power</em> and want to attune to it.
                    You must first break attunement with one of your current items (probably the <em>Staff of Fire</em>)
                    before starting the short rest to attune to the <em>Staff of Power</em>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Breaking Attunement</h2>

        <div className="bg-slate-800/30 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
          <h3 className="text-xl font-bold text-yellow-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            When Attunement Ends
          </h3>
          <p className="text-gray-300 mb-4">
            Your attunement to an item ends under these circumstances:
          </p>
          <div className="space-y-3">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-1">1. Voluntary Break (Instant)</p>
              <p className="text-gray-300 text-sm">
                You can voluntarily end attunement at any time. This is instant—no short rest required.
                Simply decide you're no longer attuned, and the item's properties cease to function for you.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-1">2. Distance (100+ Feet for 24 Hours)</p>
              <p className="text-gray-300 text-sm">
                If you and the attuned item are separated by more than 100 feet for 24 hours, attunement breaks
                automatically. This prevents infinite range abuse.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-1">3. Death</p>
              <p className="text-gray-300 text-sm">
                When a creature dies, all its attunements end. If you're resurrected, you must re-attune to items.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-white font-semibold mb-1">4. Someone Else Attunes to It</p>
              <p className="text-gray-300 text-sm">
                If another creature attunes to your attuned item, your attunement breaks. Only one creature can
                be attuned to an item at a time.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Attunement Mistakes</h2>

        <div className="space-y-4 mb-8">
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Mistake: "I'll just attune to 4 items for this fight"</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Why it's wrong:</strong> The 3-item limit is absolute. No exceptions in official rules.
                </p>
                <p className="text-gray-400 text-sm italic">
                  Some DMs allow feats or boons that increase attunement slots, but that's homebrew.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Mistake: "I use the Ring of Protection without attuning"</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Why it's wrong:</strong> If an item requires attunement, you get ZERO benefits until attuned.
                </p>
                <p className="text-gray-400 text-sm italic">
                  A non-attuned Ring of Protection is just a normal ring. No +1 to AC or saves.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Mistake: "I attune to 3 items during one short rest"</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Why it's wrong:</strong> You can only attune to ONE item per short rest.
                </p>
                <p className="text-gray-400 text-sm italic">
                  Want to attune to 3 items? That's 3 separate short rests (minimum 3 hours total).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-400 mb-2">Mistake: "My Barbarian attunes to this Wizard-only staff"</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <strong>Why it's wrong:</strong> Class/race/alignment requirements must be met BEFORE attunement.
                </p>
                <p className="text-gray-400 text-sm italic">
                  If an item says "requires attunement by a Wizard," non-Wizards can't attune at all.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">How to Track Attunement Automatically</h2>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Modern Solution: Attunement Trackers
          </h3>
          <p className="text-gray-300 mb-4">
            Manually tracking which items require attunement and who has what attuned is tedious. Digital tools
            like <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold">D20 Loot Tracker</Link> automate this process:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Automatic Detection
              </h4>
              <p className="text-gray-300 text-sm">
                When you search the D&D 5e API, the system automatically detects if an item requires attunement
                by parsing its description for "requires attunement."
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                3-Slot Enforcement
              </h4>
              <p className="text-gray-300 text-sm">
                Visual warnings appear when a player reaches 3/3 attuned items. The system prevents accidental
                over-attunement by showing slot availability at a glance.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                One-Click Toggle
              </h4>
              <p className="text-gray-300 text-sm">
                Attune or un-attune items with one click. No need to manually update spreadsheets or character
                sheets—changes sync instantly to all players.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                Real-Time Visibility
              </h4>
              <p className="text-gray-300 text-sm">
                DMs can see which players have open attunement slots before awarding magic items. No more "wait,
                can anyone use this?" mid-session.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Attunement FAQ</h2>

        <div className="space-y-4 mb-8">
          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>Can I attune to the same item type multiple times?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Yes, but they must be separate physical items. For example, you could attune to two different
              <em> Rings of Protection</em> (one on each hand), and both would work. However, you'd be using
              2 of your 3 attunement slots for the same effect, which is usually not optimal.
            </p>
          </details>

          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>Do I need to identify an item before attuning to it?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Not strictly, but it's dangerous. You can attune to an unidentified magic item, and you'll learn
              its properties at the end of the short rest. However, if it's cursed, you're now stuck with it
              until you break the curse. Most parties use <em>Identify</em> first to avoid nasty surprises.
            </p>
          </details>

          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>Can familiars or summons attune to items?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              <strong>Familiars:</strong> No. Find Familiar summons a spirit in animal form, not a true creature.
              They can't attune to items.<br /><br />
              <strong>Summons (Conjure Animals, etc.):</strong> Yes, technically, but impractical. Summoned creatures
              disappear when the spell ends, breaking attunement. It's rarely worth it.
            </p>
          </details>

          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>What happens if I lose an attuned item?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              If the item is within 100 feet, you're still attuned. If it's farther for 24 hours, attunement
              breaks automatically. You can voluntarily break attunement at any time to free up the slot,
              even if you don't know where the item is. This is useful if an item is stolen or lost.
            </p>
          </details>

          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>Can I attune to items my character is unconscious or dead?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              No. Attunement requires a short rest where you're conscious and focused. You can't attune while
              unconscious, incapacitated, or dead. If you die, all your attunements end immediately. Upon
              resurrection, you must re-attune to items (assuming you have the short rests to do so).
            </p>
          </details>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/40 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Track Attunement Automatically</h2>
          <p className="text-gray-300 mb-6">
            Stop manually counting attunement slots on character sheets. Let the tool handle detection, limits,
            and visibility for you—so you can focus on playing D&D, not bookkeeping.
          </p>
          <Link href="https://app.d20-loot-tracker.com/" className="inline-block">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50">
              Try Attunement Tracking Free →
            </button>
          </Link>
          <p className="text-sm text-gray-400 mt-3">
            No credit card required • Free forever • Automatic attunement detection
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Related Guides:</strong>{" "}
            <Link href="/guides/dnd-5e-api-item-lookup" className="text-cyan-400 hover:text-cyan-300">
              D&D 5e API Item Lookup Guide
            </Link>
            {" • "}
            <Link href="/guides/tracking-loot-dnd-beginners" className="text-cyan-400 hover:text-cyan-300">
              How to Track Loot in D&D for Beginners
            </Link>
            {" • "}
            <Link href="/dnd-loot-tracker" className="text-cyan-400 hover:text-cyan-300">
              D&D 5e Loot Tracker Overview
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
