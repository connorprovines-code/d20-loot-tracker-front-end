import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Join the TTRPG Community
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Adventure
            </span>{" "}
            Today
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join DMs and players tracking loot the smart way.
          </p>

          {/* CTA Button */}
          <a href="/app">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-12 py-7 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110"
            >
              Create Free Campaign
            </Button>
          </a>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm mt-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Free to use</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>2-minute setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}