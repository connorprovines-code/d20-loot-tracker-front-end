"use client";


import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Shield, Users } from "lucide-react";

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
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-slide-up leading-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              DnD Loot Tracker
            </span>{" "}
            Your Party Actually Wants to Use
          </h1>

          {/* Subheading - SEO optimized with keywords */}
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up-delay leading-relaxed px-4">
            The DnD loot tracker built for parties who want to spend less time on bookkeeping and more time playing. Track treasure, split gold, and sync inventories for DnD 5e and Pathfinder.
          </p>

          {/* CTAs - Mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 animate-slide-up-delay-2 px-4">
            <a href="https://app.d20-loot-tracker.com/" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 w-full"
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
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
              <span>2-Minute Setup</span>
            </div>
          </div>

          {/* App screenshot mockup - Mobile optimized */}
          <div className="mt-12 sm:mt-16 animate-fade-in-delay-2 px-4">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm bg-slate-800/50 p-2 sm:p-4">
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* DnD themed background */}
                <img
                  src="https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1200&h=675&fit=crop"
                  alt="DnD loot tracker in use during tabletop game session with dice and treasure"
                  className="w-full h-full object-cover rounded-lg opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/40" />
                
                {/* Overlay grid pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />

                {/* Central "Start Looting" Button - Mobile optimized */}
                <a href="https://app.d20-loot-tracker.com/" className="absolute inset-0 flex items-center justify-center z-20 p-4">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-2 sm:gap-3">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" fill="white" />
                    <span className="whitespace-nowrap">Start Looting</span>
                  </div>
                </a>
              </div>

              {/* Floating UI elements - Hidden on very small screens */}
              <div className="hidden sm:block absolute top-4 sm:top-8 right-4 sm:right-8 bg-green-500/20 backdrop-blur-md border border-green-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-green-300 font-semibold animate-bounce-slow shadow-lg">
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-xl sm:text-2xl">💰</span>
                  <span className="whitespace-nowrap">+250 Gold Split!</span>
                </div>
              </div>
              <div className="hidden sm:flex absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-cyan-300 font-semibold items-center gap-2 shadow-lg text-sm sm:text-base">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">4 Players Synced</span>
              </div>
              <div className="hidden sm:block absolute top-[15%] left-[10%] bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-purple-300 font-semibold shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-xl sm:text-2xl">⚔️</span>
                  <span className="whitespace-nowrap">+1 Longsword Added</span>
                </div>
              </div>
            </div>
          </div>
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
