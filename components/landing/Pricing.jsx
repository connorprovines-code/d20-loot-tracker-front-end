import React from "react";
import { Check, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  "Unlimited campaigns",
  "Unlimited players",
  "Real-time collaboration",
  "All features included",
  "No credit card required",
  "No hidden fees",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight px-4">
            Free to Use.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Get Started Today.
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 px-4">
            No tricks, no limits, no credit card needed
          </p>
        </div>

        <Card className="bg-slate-800/50 backdrop-blur-sm border-2 border-cyan-500/50 overflow-hidden shadow-2xl shadow-cyan-500/20">
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl" />
          
          <CardHeader className="text-center pb-6 sm:pb-8 pt-8 sm:pt-12 relative z-10">
            <div className="inline-flex items-baseline gap-2 justify-center mb-3 sm:mb-4">
              <span className="text-5xl sm:text-7xl font-bold text-white">$0</span>
              <span className="text-xl sm:text-2xl text-gray-400">/month</span>
            </div>
            <CardTitle className="text-2xl sm:text-3xl text-white px-4">Everything Included</CardTitle>
          </CardHeader>

          <CardContent className="px-6 sm:px-8 pb-8 sm:pb-12 relative z-10">
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  </div>
                  <span className="text-gray-300 text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <a href="/app" className="block">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-lg sm:text-xl py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
              >
                Start Using D20 Loot Tracker
              </Button>
            </a>

            <p className="text-center text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm px-4">
              Powered by Supabase. We keep costs low so you can use it free.
            </p>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-400 text-sm sm:text-base px-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 flex-shrink-0" />
                  <span>Want to support us?</span>
                </div>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Buy us a coffee ☕
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}