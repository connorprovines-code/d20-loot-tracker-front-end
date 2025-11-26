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
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Content */}
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/70 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 relative hover:-translate-y-2">
                  {/* Step number badge - larger and more prominent */}
                  <div className="absolute -top-4 -left-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${step.bgColor} flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl ${step.shadowColor} border-4 border-slate-900`}>
                      {step.number}
                    </div>
                  </div>

                  <div className={`hidden sm:flex w-20 h-20 mx-auto rounded-2xl ${step.iconBg} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-10 h-10 ${step.iconColor}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </div>

                {/* Arrow for desktop - vertically centered */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-8 text-cyan-400 text-4xl opacity-50">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="https://app.d20-loot-tracker.com/">
            <button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
              Start Your First Campaign →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}