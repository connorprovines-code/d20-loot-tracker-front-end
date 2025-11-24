"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mt-12 sm:mt-16 animate-fade-in-delay-2 px-4">
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/20 backdrop-blur-sm bg-slate-800/50 p-2 sm:p-4">
        {!isPlaying ? (
          <div className="relative aspect-video bg-slate-900 rounded-lg flex items-center justify-center cursor-pointer group" onClick={() => setIsPlaying(true)}>
            <img
              src="/video-thumbnail.png"
              alt="D&D Loot Tracker Demo Video"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/40" />

            {/* Overlay grid pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />

            {/* Central "Watch in Action" Button - Mobile optimized */}
            <div className="relative z-20 p-4">
              <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-6 sm:px-12 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-2xl shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 sm:gap-3">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" fill="white" />
                <span className="whitespace-nowrap">Watch in Action</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/59oqWW93UcA?autoplay=1"
              title="D20 Loot Tracker Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}