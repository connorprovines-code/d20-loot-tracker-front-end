import React from "react";
import { Plus, Package, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Plus,
    title: "Create Your Campaign",
    description: "Sign up in 30 seconds and create your first campaign. Name it, add your players.",
    bgColor: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    shadowColor: "shadow-cyan-500/50",
  },
  {
    number: "2",
    icon: Package,
    title: "Add Your Loot",
    description: "Quickly add items as you find them. Mark as treasure or standard loot, assign to players.",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    shadowColor: "shadow-blue-500/50",
  },
  {
    number: "3",
    icon: RefreshCw,
    title: "Track & Collaborate",
    description: "Everyone sees updates instantly. Sell items, split gold, manage inventories in real-time.",
    bgColor: "bg-gradient-to-br from-green-500 to-green-600",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    shadowColor: "shadow-green-500/50",
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
                  {/* Step number badge - top left corner inside card */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-10 h-10 rounded-full ${step.bgColor} flex items-center justify-center text-white text-lg font-bold shadow-lg ${step.shadowColor}`}>
                      {step.number}
                    </div>
                  </div>

                  <div className={`w-16 h-16 mx-auto rounded-xl ${step.iconBg} flex items-center justify-center mb-6`}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
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
          <a href="https://app.d20-loot-tracker.com/">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Start Your First Campaign →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}