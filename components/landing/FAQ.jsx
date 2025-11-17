"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What games does this work with?",
    answer: "Any D20-based TTRPG! DnD 5e, Pathfinder 1e/2e, Starfinder, 13th Age, and more. If your game uses loot, gold, and inventories, D20 Loot Tracker will work perfectly.",
  },
  {
    question: "Do I need to install anything?",
    answer: "Nope! D20 Loot Tracker works in any web browser on desktop, tablet, or mobile. No downloads, no installations. Just sign up and start tracking. A native mobile app is coming soon.",
  },
  {
    question: "Can I use this for multiple campaigns?",
    answer: "Absolutely! Create as many campaigns as you want. Each campaign is completely separate with its own players, loot, and gold. Switch between them instantly from the dashboard.",
  },
  {
    question: "Is my data private?",
    answer: "Yes. Each campaign is completely isolated and secure. Only players you specifically invite can access your campaign data. We use bank-level encryption and never share your information.",
  },
  {
    question: "Can I export my data?",
    answer: "Transaction logs and item histories are viewable in-app anytime. CSV export functionality for complete data backups is coming soon based on user feedback.",
  },
  {
    question: "Does it work offline?",
    answer: "Currently, D20 Loot Tracker requires an internet connection for real-time sync. We're exploring offline mode with sync-when-connected for future updates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about D20 Loot Tracker
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-700/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="mailto:support@d20loottracker.com"
            className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
}