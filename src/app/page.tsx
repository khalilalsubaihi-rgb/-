"use client";

import dynamic from "next/dynamic";
import RoomProperties from "@/components/editor/room-properties";

// Dynamically import Konva component with SSR disabled
const FloorEditor = dynamic(() => import("@/components/editor/floor-editor"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-500">
      Loading Editor...
    </div>
  ),
});

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="h-14 border-b border-slate-200 flex items-center px-6">
        <h1 className="text-lg font-bold">FloorPlan & Interior Design Editor</h1>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 border-r border-slate-200 p-4 overflow-y-auto bg-slate-50">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wider">
                Tools
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 bg-white border border-slate-200 rounded text-sm hover:bg-slate-50">
                  Draw Wall
                </button>
                <button className="px-3 py-2 bg-white border border-slate-200 rounded text-sm hover:bg-slate-50">
                  Add Room
                </button>
              </div>
            </div>

            <RoomProperties />
          </div>
        </aside>

        {/* Canvas Area */}
        <div className="flex-1 relative">
          <FloorEditor />
        </div>
      </main>
    </div>
  );
}
