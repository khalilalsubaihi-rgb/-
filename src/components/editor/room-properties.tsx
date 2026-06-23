"use client";

import React from "react";
import { useEditorStore } from "@/hooks/use-editor-store";
import { calculatePolygonArea } from "@/utils/geometry";

const RoomProperties = () => {
  const { rooms } = useEditorStore();

  // For demonstration, just picking the first room or empty state
  const selectedRoom = rooms.length > 0 ? rooms[0] : null;

  if (!selectedRoom) {
    return (
      <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Room Properties</h3>
        <p className="text-slate-500 text-sm">No room selected.</p>
      </div>
    );
  }

  // Calculate area if points exist
  const area = selectedRoom.area || calculatePolygonArea(selectedRoom.points);

  return (
    <div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Room Properties</h3>

      <div className="space-y-3">
        <div>
          <label className="block text-xs text-slate-500 mb-1">Room Name</label>
          <div className="font-medium">{selectedRoom.name}</div>
        </div>

        <div>
          <label className="block text-xs text-slate-500 mb-1">Area</label>
          <div className="font-medium">
            {area > 0 ? `${area.toFixed(2)} sq units` : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomProperties;
