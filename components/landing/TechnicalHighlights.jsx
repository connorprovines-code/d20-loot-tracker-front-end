import React from "react";
import { Zap, Cloud, Shield, Monitor } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Instant Sync",
    description: "WebSocket-based real-time updates. No lag, no refresh needed.",
  },
  {
    icon: Cloud,
    title: "Always Available",
    description: "Cloud-hosted with 99.9% uptime. Access from anywhere.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level encryption. Your campaigns are 100% private.",
  },
  {
    icon: Monitor,
    title: "No Installation",
    description: "Works in any browser. Mobile app coming soon.",
  },
];

export default function TechnicalHighlights() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Gamers
            </span>
            , By Gamers
          </h2>
          <p className="text-xl text-gray-300">
            Powerful technology that just works
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <highlight.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{highlight.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Tech stack badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700">
            <span className="text-gray-400 text-sm">Powered by:</span>
            <span className="text-cyan-400 font-semibold">React</span>
            <span className="text-gray-600">•</span>
            <span className="text-blue-400 font-semibold">Supabase</span>
            <span className="text-gray-600">•</span>
            <span className="text-purple-400 font-semibold">Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}