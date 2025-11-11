import React from "react";
import { Plus, Package, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Plus,
    title: "Create Your Campaign",
    description: "Sign up in 30 seconds and create your first campaign. Name it, add your players.",
    color: "cyan",
  },
  {
    number: "2",
    icon: Package,
    title: "Add Your Loot",
    description: "Quickly add items as you find them. Mark as treasure or standard loot, assign to players.",
    color: "blue",
  },
  {
    number: "3",
    icon: RefreshCw,
    title: "Track & Collaborate",
    description: "Everyone sees updates instantly. Sell items, split gold, manage inventories in real-time.",
    color: "green",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            From zero to tracking loot in under 2 minutes
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Content */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 relative">
                  {/* Step number badge - now inside the card */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-${step.color}-500/50`}>
                      {step.number}
                    </div>
                  </div>

                  <div className={`w-16 h-16 mx-auto rounded-xl bg-${step.color}-500/20 flex items-center justify-center mb-6 mt-4`}>
                    <step.icon className={`w-8 h-8 text-${step.color}-400`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop - vertically centered and pushed more to center */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-9 text-cyan-500 text-4xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/app">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Start Your First Campaign →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}