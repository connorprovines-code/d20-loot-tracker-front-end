import React from "react";
import { Wifi, Users, Map } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const useCases = [
  {
    icon: Wifi,
    title: "Online Campaigns",
    description: "Running games on Discord, Roll20, or Foundry? Keep loot organized across sessions.",
    image: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?w=400&h=300&fit=crop",
  },
  {
    icon: Users,
    title: "In-Person Groups",
    description: "Pass the tablet around the table. Everyone can see and update in real-time.",
    image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&h=300&fit=crop",
  },
  {
    icon: Map,
    title: "West Marches / Open Tables",
    description: "Manage multiple rotating parties with individual campaign tracking.",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=300&fit=crop",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perfect For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Every Type of Game
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Whether you play online, in-person, or both
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
                  <useCase.icon className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}