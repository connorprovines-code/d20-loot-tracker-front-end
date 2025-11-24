import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Link from "next/link";
import { Database, Search, Zap, Clock, CheckCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "D&D 5e API Item Lookup: How to Use SRD Integration for Fast Loot Entry | D20 Loot Tracker",
  description: "Learn how to use D&D 5e API integration to search thousands of items instantly. Auto-populate costs, rarity, and attunement requirements. Save 5-10 minutes per item with SRD item lookup.",
  keywords: ["dnd 5e api", "dnd srd item lookup", "dnd item database", "dnd 5e equipment search", "magic item api", "dnd item price lookup", "srd integration", "dnd 5e item search tool"],
  openGraph: {
    title: "D&D 5e API Item Lookup: Fast Loot Entry with SRD Integration",
    description: "Save time with D&D 5e API integration. Search thousands of items, auto-populate data, and skip the rulebook flipping.",
    type: "article",
  },
};

export default function DnD5eAPIGuide() {
  return (
    <article className="prose prose-invert prose-cyan max-w-none">
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "D&D 5e API Item Lookup Guide" }
        ]}
        className="mb-8"
      />

      <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          D&D 5e API Item Lookup: How to Add Loot in Seconds
        </h1>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Your party just cleared a treasure hoard. The DM says, "You find a +1 Longsword, a Potion of Healing,
          and a Bag of Holding." Now you're flipping through the Player's Handbook, googling prices, and trying
          to remember if the Bag of Holding requires attunement.
          <strong className="text-cyan-400"> There's a faster way.</strong>
        </p>

        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/40 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Database className="w-6 h-6" />
            What is D&D 5e API Integration?
          </h2>
          <p className="text-gray-300 mb-4">
            The D&D 5e API (dnd5eapi.co) is a free database of thousands of items from the 5th Edition System
            Reference Document (SRD). When integrated into loot tracking tools, it lets you search for items by
            name and instantly see:
          </p>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li><strong className="text-white">Item costs</strong> (no more googling "longsword price 5e")</li>
            <li><strong className="text-white">Rarity levels</strong> (Common, Uncommon, Rare, Very Rare, Legendary, Artifact)</li>
            <li><strong className="text-white">Attunement requirements</strong> (detected automatically from item descriptions)</li>
            <li><strong className="text-white">Item descriptions</strong> (full text from the SRD)</li>
            <li><strong className="text-white">Weight and properties</strong> (for encumbrance tracking)</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Use API Item Lookup?</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-6 h-6 text-green-400" />
              <h3 className="text-xl font-bold text-green-400">Save Time</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Add items in <strong>5-10 seconds</strong> instead of 2-3 minutes manually entering data.
              That's 95% faster for complex magic items.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-blue-400">100% Accurate</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Data comes directly from official 5e SRD. No more typos, wrong prices, or forgetting
              attunement requirements mid-session.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-purple-400">Stay in Flow</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Don't break immersion by pausing to look up items. Keep the game moving with instant
              item data at your fingertips.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">How to Use D&D 5e API Item Lookup</h2>

        <div className="bg-slate-800/30 border-l-4 border-cyan-500 p-6 rounded-r-lg mb-6">
          <p className="text-gray-300 mb-4">
            <strong className="text-white">Note:</strong> This guide uses{" "}
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              D20 Loot Tracker
            </Link>
            , which has D&D 5e API integration built-in. Other tools with SRD integration work similarly.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Open the Add Item Modal</h3>
                <p className="text-gray-300 mb-3">
                  In your campaign's loot tracker, click <strong>"Add Item"</strong>. You'll see options
                  for manual entry or API search.
                </p>
                <p className="text-sm text-gray-400 italic">
                  💡 Tip: Keyboard shortcut is usually Shift+A for quick access during sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Choose "Search D&D 5e API"</h3>
                <p className="text-gray-300 mb-3">
                  Click the <strong>"Search API"</strong> button. You'll see two search categories:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                  <li><strong className="text-white">Equipment:</strong> Weapons, armor, adventuring gear (with official SRD prices)</li>
                  <li><strong className="text-white">Magic Items:</strong> +1 weapons, Rings of Protection, Wands, etc.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Search for Your Item</h3>
                <p className="text-gray-300 mb-3">
                  Type the item name (e.g., "longsword" or "bag of holding"). The API searches in real-time
                  and shows matching results as you type.
                </p>
                <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4 mt-3">
                  <p className="text-sm text-gray-400 mb-2"><strong className="text-cyan-400">Example searches:</strong></p>
                  <ul className="text-sm text-gray-400 space-y-1 list-none">
                    <li>→ "long" → Shows Longbow, Longsword, Longship</li>
                    <li>→ "potion" → Shows Potion of Healing, Potion of Invisibility, etc.</li>
                    <li>→ "ring" → Shows Ring of Protection, Ring of Spell Storing, etc.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Review Auto-Populated Data</h3>
                <p className="text-gray-300 mb-3">
                  Click on an item from search results. The system automatically fills in:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                  <li><strong className="text-white">Item name</strong> (exactly as written in SRD)</li>
                  <li><strong className="text-white">Cost</strong> (in gold pieces)</li>
                  <li><strong className="text-white">Rarity</strong> (for magic items)</li>
                  <li><strong className="text-white">Attunement</strong> (Yes/No, detected from description)</li>
                  <li><strong className="text-white">Description</strong> (full SRD text)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-3">Customize (If Needed) and Save</h3>
                <p className="text-gray-300 mb-3">
                  You can adjust any auto-filled data:
                </p>
                <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                  <li>Change the price (if your DM uses different values)</li>
                  <li>Add notes (e.g., "Found in the Dragon's Hoard")</li>
                  <li>Set quantity (adding multiple potions? Change quantity to 3)</li>
                  <li>Mark as consumable and set charges (for items with limited uses)</li>
                </ul>
                <p className="text-gray-300 mt-3">
                  Click <strong>"Add Item"</strong> and it's instantly added to your campaign's loot tracker.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Pro Tips for API Item Lookup</h2>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8 mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Use Partial Names for Faster Searches
              </h3>
              <p className="text-gray-300 text-sm">
                Don't remember if it's "Longsword" or "Long Sword"? Just type "long" and scroll through
                results. The API searches all item names, so partial matches work great.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Check Equipment First for Common Items
              </h3>
              <p className="text-gray-300 text-sm">
                If you're adding basic weapons, armor, or tools, search <strong>Equipment</strong> instead
                of Magic Items. Equipment search has official SRD prices for all standard gear.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Double-Check Attunement Requirements
              </h3>
              <p className="text-gray-300 text-sm">
                The system detects attunement by parsing item descriptions for "requires attunement."
                It's 95% accurate, but always verify for critical items (especially homebrew or variant rules).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Use Custom Prices for Homebrew Items
              </h3>
              <p className="text-gray-300 text-sm">
                SRD doesn't include pricing for all magic items (some are "varies" or "DM discretion").
                The system estimates based on rarity, but you can always override with your DM's prices.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Bookmark Frequently Used Items
              </h3>
              <p className="text-gray-300 text-sm">
                Some campaigns use certain items repeatedly (e.g., Potions of Healing). After the first API
                lookup, consider creating quick-add templates for common consumables.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">What's NOT in the D&D 5e API?</h2>

        <div className="bg-slate-800/30 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">SRD Limitations</h3>
              <p className="text-gray-300 mb-3">
                The D&D 5e API only includes content from the System Reference Document (SRD), which is
                the free, publicly available subset of D&D 5e rules. It does <strong>NOT</strong> include:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside ml-4">
                <li>Items exclusive to published adventures (e.g., <em>Curse of Strahd</em> items)</li>
                <li>Book-specific magic items (e.g., <em>Xanathar's Guide</em> or <em>Tasha's Cauldron</em>)</li>
                <li>Homebrew or custom items from your campaign</li>
                <li>Third-party content or non-official supplements</li>
              </ul>
              <p className="text-gray-300 mt-3">
                <strong>Solution:</strong> Use manual entry for non-SRD items. Most loot trackers let you
                switch between API search and manual entry seamlessly.
              </p>
            </div>
          </div>
        </div>


        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/40 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Ready to Try API Item Lookup?</h2>
          <p className="text-gray-300 mb-6">
            Stop wasting time flipping through rulebooks. Use D&D 5e API integration to add items in seconds,
            not minutes. Your group will thank you.
          </p>
          <Link href="https://app.d20-loot-tracker.com/" className="inline-block">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/50">
              Try D&D 5e API Lookup Free →
            </button>
          </Link>
          <p className="text-sm text-gray-400 mt-3">
            No credit card required • Free forever • Search 1000s of SRD items instantly
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>Is the D&D 5e API free to use?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Yes! The D&D 5e API (dnd5eapi.co) is completely free and open-source. It contains all System
              Reference Document (SRD) content, which Wizards of the Coast has made available under the Open
              Gaming License (OGL). Tools like D20 Loot Tracker integrate with this API at no cost to users.
            </p>
          </details>

          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>Can I add homebrew items that aren't in the SRD?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Absolutely. API lookup works alongside manual entry. If an item isn't in the SRD (homebrew,
              adventure-specific, or from supplemental books), you can manually add it with all the same fields.
              Some tools even let you save custom items as templates for future use.
            </p>
          </details>

          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>Does API lookup work offline?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Not in real-time. The D&D 5e API requires an internet connection to fetch item data. However, some
              tools cache frequently searched items or allow offline manual entry as a fallback. Check your
              loot tracker's offline capabilities for details.
            </p>
          </details>

          <details className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 group">
            <summary className="text-lg font-bold text-white cursor-pointer list-none flex items-center justify-between">
              <span>How accurate is the attunement detection?</span>
              <span className="text-cyan-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="text-gray-300 mt-4 leading-relaxed">
              Very accurate for SRD items. The system parses item descriptions for phrases like "requires
              attunement" and correctly identifies 95%+ of attunement requirements. The remaining edge cases
              (complex attunement conditions like "requires attunement by a spellcaster") are flagged for
              manual review.
            </p>
          </details>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Related Guides:</strong>{" "}
            <Link href="/guides/tracking-loot-dnd-beginners" className="text-cyan-400 hover:text-cyan-300">
              How to Track Loot in D&D for Beginners
            </Link>
            {" • "}
            <Link href="/features" className="text-cyan-400 hover:text-cyan-300">
              All D20 Loot Tracker Features
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
