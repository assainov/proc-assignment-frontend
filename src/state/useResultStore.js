import { create } from 'zustand';

/**
 * Using a simple state management tool for a simple app.
 * Would use something more robust like Redux for a larger app.
 */
export const useResultStore = create((set) => ({
  result: null,
  setResult: (newResult) => set({ result: newResult }),
}));