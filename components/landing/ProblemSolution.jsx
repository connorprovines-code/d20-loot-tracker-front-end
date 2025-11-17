import React from "react";
import { AlertCircle, Calculator, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    problem: "Messy spreadsheets and forgotten treasure",
    solution: "Centralized loot tracking that syncs across all devices",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Calculator,
    problem: "Arguments over gold distribution",
    solution: "Automatic fair splitting with customizable rules",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: Clock,
    problem: "Session time wasted on bookkeeping",
    solution: "Real-time updates mean more time for adventure",
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why DnD Groups{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Love This Loot Tracker
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Common problems that slow down your game sessions—solved instantly
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2 group"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-red-400 font-bold">✗</span>
                    <p className="text-gray-400">{item.problem}</p>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✓</span>
                    <p className="text-white font-semibold">{item.solution}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}