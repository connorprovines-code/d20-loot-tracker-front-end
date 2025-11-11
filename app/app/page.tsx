"use client";

import dynamic from "next/dynamic";

// Dynamically import the AppWrapper to avoid SSR issues with Supabase
const AppWrapper = dynamic(() => import("@/components/tracker/AppWrapper"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center">
      <div className="text-white text-2xl">Loading D20 Loot Tracker...</div>
    </div>
  ),
});

export default function TrackerPage() {
  return <AppWrapper />;
}
