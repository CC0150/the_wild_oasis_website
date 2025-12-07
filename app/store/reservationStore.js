import { create } from "zustand";

export const useReservationStore = create((set) => ({
  range: { from: undefined, to: undefined },
  setRange: (range) => set({ range }),
  resetRange: () => set({ range: { from: undefined, to: undefined } }),
}));
