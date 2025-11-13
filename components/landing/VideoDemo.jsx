"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-demo" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            See It In <span className="text-cyan-400">Action</span>
          </h2>
          <p className="text-xl text-gray-300">
            Watch how easy it is to manage loot, split gold, and keep your party
            organized in real-time.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
            {!isPlaying ? (
              <div className="relative aspect-video bg-slate-900 flex items-center justify-center cursor-pointer group" onClick={() => setIsPlaying(true)}>
                <img
                  src="/video-thumbnail.png"
                  alt="Video Demo Thumbnail"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl px-8 py-6 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/50">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                    <p className="text-white text-xl font-semibold">Watch Demo Video</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-slate-900 flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/59oqWW93UcA?autoplay=1"
                  title="D20 Loot Tracker Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            60-second overview of all features
          </p>
        </div>
      </div>
    </section>
  );
}