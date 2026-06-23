import { create } from 'zustand';

export interface Point {
  x: number;
  y: number;
}

export interface Wall {
  id: string;
  start: Point;
  end: Point;
  thickness: number;
}

export interface Room {
  id: string;
  points: Point[]; // Represents the polygon of the room
  name: string;
  area?: number;
}

export interface Furniture {
  id: string;
  type: string;
  position: Point;
  rotation: number;
  width: number;
  height: number;
}

export interface ViewportState {
  x: number;
  y: number;
  scale: number;
}

interface EditorState {
  walls: Wall[];
  rooms: Room[];
  furniture: Furniture[];
  viewport: ViewportState;

  // Actions
  addWall: (wall: Wall) => void;
  updateWall: (id: string, wall: Partial<Wall>) => void;
  removeWall: (id: string) => void;

  addRoom: (room: Room) => void;
  updateRoom: (id: string, room: Partial<Room>) => void;
  removeRoom: (id: string) => void;

  addFurniture: (item: Furniture) => void;
  updateFurniture: (id: string, item: Partial<Furniture>) => void;
  removeFurniture: (id: string) => void;

  setViewport: (viewport: Partial<ViewportState>) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  walls: [],
  rooms: [],
  furniture: [],
  viewport: { x: 0, y: 0, scale: 1 },

  addWall: (wall) => set((state) => ({ walls: [...state.walls, wall] })),
  updateWall: (id, updatedWall) => set((state) => ({
    walls: state.walls.map((w) => w.id === id ? { ...w, ...updatedWall } : w)
  })),
  removeWall: (id) => set((state) => ({
    walls: state.walls.filter((w) => w.id !== id)
  })),

  addRoom: (room) => set((state) => ({ rooms: [...state.rooms, room] })),
  updateRoom: (id, updatedRoom) => set((state) => ({
    rooms: state.rooms.map((r) => r.id === id ? { ...r, ...updatedRoom } : r)
  })),
  removeRoom: (id) => set((state) => ({
    rooms: state.rooms.filter((r) => r.id !== id)
  })),

  addFurniture: (item) => set((state) => ({ furniture: [...state.furniture, item] })),
  updateFurniture: (id, updatedItem) => set((state) => ({
    furniture: state.furniture.map((f) => f.id === id ? { ...f, ...updatedItem } : f)
  })),
  removeFurniture: (id) => set((state) => ({
    furniture: state.furniture.filter((f) => f.id !== id)
  })),

  setViewport: (viewport) => set((state) => ({
    viewport: { ...state.viewport, ...viewport }
  }))
}));
