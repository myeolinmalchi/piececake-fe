import { create } from 'zustand';

interface PositionState {
  pos: { lat: number; lng: number } | null;
  setPos: (lat: number, lng: number) => void;
}

export const usePositionStore = create<PositionState>((set) => ({
  pos: null,
  setPos: (lat: number, lng: number) =>
    set((prev) => ({ ...prev, pos: { lat, lng } })),
}));
