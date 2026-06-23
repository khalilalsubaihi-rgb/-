"use client";

import React, { useRef, useState, useEffect } from "react";
import { Stage, Layer, Line, Circle } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import { useEditorStore } from "@/hooks/use-editor-store";

const FloorEditor = () => {
  const { walls, viewport, setViewport } = useEditorStore();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch event tracking for pinch-to-zoom
  const lastCenterRef = useRef<{ x: number; y: number } | null>(null);
  const lastDistRef = useRef<number | null>(null);

  // Resize canvas to fill container
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle zooming via mouse wheel
  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();

    const scaleBy = 1.05;
    const stage = e.target.getStage();
    if (!stage) return;

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    // Determine direction of scroll
    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setViewport({
      scale: newScale,
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    });
  };

  // Handle pinch-to-zoom on touch devices
  const handleTouchMove = (e: KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    const touch1 = e.evt.touches[0];
    const touch2 = e.evt.touches[1];

    if (touch1 && touch2) {
      const stage = e.target.getStage();
      if (!stage) return;

      const p1 = { x: touch1.clientX, y: touch1.clientY };
      const p2 = { x: touch2.clientX, y: touch2.clientY };

      const dist = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

      if (!lastDistRef.current) {
        lastDistRef.current = dist;
      }

      const center = {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2,
      };

      if (!lastCenterRef.current) {
        lastCenterRef.current = center;
        return;
      }

      const pointTo = {
        x: (center.x - stage.x()) / stage.scaleX(),
        y: (center.y - stage.y()) / stage.scaleX(),
      };

      const scale = stage.scaleX() * (dist / lastDistRef.current);

      const dx = center.x - lastCenterRef.current.x;
      const dy = center.y - lastCenterRef.current.y;

      const newPos = {
        x: center.x - pointTo.x * scale + dx,
        y: center.y - pointTo.y * scale + dy,
      };

      setViewport({
        scale,
        x: newPos.x,
        y: newPos.y,
      });

      lastDistRef.current = dist;
      lastCenterRef.current = center;
    }
  };

  const handleTouchEnd = () => {
    lastDistRef.current = null;
    lastCenterRef.current = null;
  };

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-100 overflow-hidden touch-none">
      <Stage
        width={dimensions.width}
        height={dimensions.height}
        scaleX={viewport.scale}
        scaleY={viewport.scale}
        x={viewport.x}
        y={viewport.y}
        draggable
        onDragEnd={(e) => {
          setViewport({
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onWheel={handleWheel}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Layer>
          {/* Example grid or background can go here */}

          {/* Render Walls */}
          {walls.map((wall) => (
            <React.Fragment key={wall.id}>
              <Line
                points={[wall.start.x, wall.start.y, wall.end.x, wall.end.y]}
                stroke="black"
                strokeWidth={wall.thickness}
                lineCap="round"
                lineJoin="round"
              />
              <Circle x={wall.start.x} y={wall.start.y} radius={wall.thickness / 2 + 2} fill="gray" />
              <Circle x={wall.end.x} y={wall.end.y} radius={wall.thickness / 2 + 2} fill="gray" />
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default FloorEditor;
