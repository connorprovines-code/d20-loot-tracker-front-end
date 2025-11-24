"use client";


import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Shield, Users } from "lucide-react";
import VideoDemo from "./VideoDemo";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto py-12 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6 sm:mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
            <span className="text-cyan-300 text-xs sm:text-sm font-medium">
              Real-time Collaborative Loot Tracking
            </span>
          </div>

          {/* Main heading - SEO optimized */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 animate-slide-up leading-tight">
            Claim Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
              Loot
            </span>
            <br />
            <span className="text-3xl sm:text-5xl md:text-6xl text-gray-300">Before the Rogue Does</span>
          </h1>

          {/* Subheading - SEO optimized with keywords */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up-delay leading-relaxed px-4">
            Track gold, split loot instantly, and manage your party's hoard in real-time.
            Built for D&D, Pathfinder, and all tabletop RPGs.
          </p>

          {/* CTAs - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 animate-slide-up-delay-2 px-4">
            <a href="https://app.d20-loot-tracker.com/" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 w-full"
              >
                <Shield className="w-5 h-5 mr-2 flex-shrink-0" />
                Start Free Campaign
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-400 bg-slate-900/80 text-white hover:bg-cyan-500/20 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm w-full sm:w-auto shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              onClick={() => document.getElementById("video-demo")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="w-5 h-5 mr-2 flex-shrink-0" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators - Mobile optimized */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm animate-fade-in-delay px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse flex-shrink-0" />
              <span>2-Minute Setup</span>
            </div>
          </div>

          {/* Video Demo - Mobile optimized */}
          <VideoDemo />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 0.6s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.2s both; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.4s both; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
